package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimDto;
import com.autoever.idle.domain.option.MyTrimOptionDto;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
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
    public String checkMyTrimFunction(int functionId) {
        try {
            return jdbcTemplate.queryForObject("SELECT is_my_trim FROM FUNCTIONS WHERE function_id=? ",
                    ((rs, rowNum) -> rs.getString("is_my_trim")),
                    functionId);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }
    }

    @Override
    public List<MyTrimDto> findTrimBySelectFunctions(int functionId) {
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
        return jdbcTemplate.query(query, rowMapper, functionId);
    }

    @Override
    public MyTrimOptionDto findOptionBySelectFunction(Long functionId){
        RowMapper rowMapper = BeanPropertyRowMapper.newInstance(MyTrimOptionDto.class);
        return (MyTrimOptionDto) jdbcTemplate.queryForObject("SELECT O.option_id AS optionId, O.name AS optionName, price AS optionPrice FROM FUNCTIONS AS F " +
                "JOIN `OPTION` AS O ON F.option_id=O.option_id " +
                "WHERE function_id=?",
                rowMapper, functionId);
    }
}
