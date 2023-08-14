package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.FunctionIdDto;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class TrimFunctionRepositoryImpl implements TrimFunctionRepository {

    private final JdbcTemplate jdbcTemplate;

    public TrimFunctionRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public String checkDefaultFunction(Long trimId, Long functionId) {
        try {
            return jdbcTemplate.queryForObject("SELECT is_default " +
                            "FROM TRIM_FUNCTION " +
                            "WHERE trim_id=? AND function_id=?",
                    (rs, rowNum) -> rs.getString("is_default"),
                    trimId, functionId);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }

    }

    public FunctionIdDto checkNonSelectableFunctionAtTrim(Long trimId, Long functionId) {
        try {
            jdbcTemplate.queryForObject("SELECT function_id AS functionId FROM TRIM_FUNCTION WHERE trim_id=? AND function_id=?",
                    (rs, rowNum) -> rs.getLong("functionId"),
                    trimId, functionId);
            return null;
        } catch (EmptyResultDataAccessException e) {
            return new FunctionIdDto(functionId);
        }
    }
}
