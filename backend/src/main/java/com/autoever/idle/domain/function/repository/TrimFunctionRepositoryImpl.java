package com.autoever.idle.domain.function.repository;

import com.autoever.idle.domain.function.dto.FunctionIdResponse;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.JdbcTemplate;
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

    public FunctionIdResponse checkNonSelectableFunctionAtTrim(Long trimId, Long functionId) {
        try {
            jdbcTemplate.queryForObject("SELECT function_id AS functionId FROM TRIM_FUNCTION WHERE trim_id=? AND function_id=?",
                    (rs, rowNum) -> rs.getLong("functionId"),
                    trimId, functionId);
            return null;
        } catch (EmptyResultDataAccessException e) {
            return new FunctionIdResponse(functionId);
        }
    }
}
