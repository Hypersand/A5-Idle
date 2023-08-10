package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import org.springframework.jdbc.core.JdbcTemplate;
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
}
