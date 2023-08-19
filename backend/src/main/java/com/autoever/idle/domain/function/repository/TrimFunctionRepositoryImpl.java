package com.autoever.idle.domain.function.repository;

import com.autoever.idle.domain.function.dto.FunctionIdResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.SingleColumnRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class TrimFunctionRepositoryImpl implements TrimFunctionRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public String checkDefaultFunction(Long trimId, Long functionId) {
        RowMapper<String> rowMapper = new SingleColumnRowMapper<>(String.class);
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("trimId", trimId);
        params.addValue("functionId", functionId);
        try {
            return jdbcTemplate.queryForObject("SELECT is_default " +
                    "FROM TRIM_FUNCTION " +
                    "WHERE trim_id=:trimId AND function_id=:functionId", params, rowMapper);
        } catch (EmptyResultDataAccessException e) {
            return null;
        }

    }

    public FunctionIdResponse checkNonSelectableFunctionAtTrim(Long trimId, Long functionId) {
        RowMapper<Long> rowMapper = new SingleColumnRowMapper<>(Long.class);
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("trimId", trimId);
        params.addValue("functionId", functionId);
        try {
            jdbcTemplate.queryForObject("SELECT function_id AS functionId FROM TRIM_FUNCTION WHERE trim_id=:trimId AND function_id=:functionId",
                    params, rowMapper);
            return null;
        } catch (EmptyResultDataAccessException e) {
            return new FunctionIdResponse(functionId);
        }
    }
}
