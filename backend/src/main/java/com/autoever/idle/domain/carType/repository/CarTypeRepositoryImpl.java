package com.autoever.idle.domain.carType.repository;

import com.autoever.idle.domain.carType.dto.CarTypeDto;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CarTypeRepositoryImpl implements CarTypeRepository {

    private final JdbcTemplate jdbcTemplate;
    private final NamedParameterJdbcTemplate jdbcTemplate1;

    public List<Long> findByName(String carTypeName) {
        return jdbcTemplate.queryForList("select car_type_id from CAR_TYPE where CAR_TYPE.name = ?",
                Long.class,
                carTypeName);
    }

    public List<CarTypeDto> findByCategory(Long categoryId){
        RowMapper rowMapper = BeanPropertyRowMapper.newInstance(CarTypeDto.class);
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("categoryId", categoryId);
        return jdbcTemplate1.query("SELECT name AS carName, price AS carPrice, img_url AS carImgUrl, logo_url AS logoImgUrl " +
                "FROM CAR_TYPE WHERE car_category_id = :categoryId", param, rowMapper);
    }
}
