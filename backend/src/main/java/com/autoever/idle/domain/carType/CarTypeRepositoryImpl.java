package com.autoever.idle.domain.carType;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.ResultSetExtractor;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

@Repository
public class CarTypeRepositoryImpl implements CarTypeRepository {

    private final JdbcTemplate jdbcTemplate;

    public CarTypeRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public Long findByName(String carTypeName) {
        return jdbcTemplate.queryForObject("select car_type_id from CAR_TYPE where CAR_TYPE.name = ?",
                Long.class,
                carTypeName);
    }
}
