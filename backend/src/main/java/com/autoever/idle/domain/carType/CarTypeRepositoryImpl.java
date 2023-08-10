package com.autoever.idle.domain.carType;

import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;

import java.util.List;

@Repository
public class CarTypeRepositoryImpl implements CarTypeRepository {

    private final JdbcTemplate jdbcTemplate;

    public CarTypeRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<Long> findByName(String carTypeName) {
        return jdbcTemplate.queryForList("select car_type_id from CAR_TYPE where CAR_TYPE.name = ?",
                Long.class,
                carTypeName);
    }
}
