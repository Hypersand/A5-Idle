package com.autoever.idle.domain.trim.repository;

import com.autoever.idle.domain.trim.dto.TrimDescriptionDto;
import com.autoever.idle.domain.trim.dto.TrimDto;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class TrimRepositoryImpl implements TrimRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public List<TrimDto> findAll(Long carTypeId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("carTypeId", carTypeId);

        RowMapper<TrimDto> rowMapper = new BeanPropertyRowMapper<>(TrimDto.class);

        return jdbcTemplate.query(
                "select trim_id, name, price, img_url, description, purchase_rate from TRIM where car_type_id = :carTypeId",
                param, rowMapper);
    }

    public TrimDescriptionDto findByTrimId(Long trimId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("trimId", trimId);

        String query = "select description as trimDescription from TRIM where trim_id = :trimId";

        RowMapper<TrimDescriptionDto> rowMapper = new BeanPropertyRowMapper<>(TrimDescriptionDto.class);

        return jdbcTemplate.queryForObject(query, param, rowMapper);
    }
}
