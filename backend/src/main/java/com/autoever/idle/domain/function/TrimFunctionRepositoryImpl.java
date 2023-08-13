package com.autoever.idle.domain.function;

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

}
