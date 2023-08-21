package com.autoever.idle.domain.category.carCategory.repository;

import com.autoever.idle.domain.category.carCategory.dto.CarCategoryDto;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CarCategoryRepositoryImpl implements CarCategoryRepository{

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public List<CarCategoryDto> findAll(){
        RowMapper<CarCategoryDto> rowMapper = new BeanPropertyRowMapper<>();
        return jdbcTemplate.query("SELECT car_category_id AS carCategoryId, name AS carCategoryName FROM CAR_CATEGORY",rowMapper);
    }
}
