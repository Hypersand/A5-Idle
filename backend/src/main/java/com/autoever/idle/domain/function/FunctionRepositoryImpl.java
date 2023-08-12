package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimDto;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Slf4j
public class FunctionRepositoryImpl implements FunctionRepository {

    private final JdbcTemplate jdbcTemplate;

    public FunctionRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<MyTrimFunctionDto> findMyTrimFunctions() {
        return jdbcTemplate.query("select FUNCTIONS.function_id, name, description, trim_id, img_url " +
                        "from TRIM_FUNCTION TF " +
                        "join FUNCTIONS on TF.function_id=FUNCTIONS.function_id " +
                        "where is_my_trim='TRUE' order by trim_id",
                ((rs, rowNum) -> new MyTrimFunctionDto(
                        rs.getInt("FUNCTIONS.function_id"),
                        rs.getString("name"),
                        rs.getString("description"),
                        rs.getString("img_url"),
                        rs.getInt("trim_id")
                )));
    }
    @Override
    public List<MyTrimDto> findTrimBySelectFunctions(int functionId){
        String query = "WITH TMP_TRIM_FUNCTION AS " +
                "(       SELECT name, is_default, T.trim_id " +
                "        FROM TRIM_FUNCTION AS TF " +
                "        JOIN TRIM AS T ON TF.trim_id = T.trim_id " +
                "        WHERE TF.function_id = ? " +
                ") " +
                "SELECT TRIM.name, is_default AS isDefault FROM TRIM " +
                "    LEFT JOIN TMP_TRIM_FUNCTION AS TTF " +
                "    ON TRIM.trim_id=TTF.trim_id";
        RowMapper rowMapper = BeanPropertyRowMapper.newInstance(MyTrimDto.class);
        List<MyTrimDto> query1 = jdbcTemplate.query(query, rowMapper, functionId);
        return query1;

    }
}
