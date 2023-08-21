package com.autoever.idle.domain.trim.repository;

import com.autoever.idle.domain.trim.dto.TrimDescriptionDto;
import com.autoever.idle.domain.trim.dto.TrimDto;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class TrimRepositoryImpl implements TrimRepository {

    private final JdbcTemplate jdbcTemplate;

    public List<TrimDto> findAll(Long carTypeId) {
        return jdbcTemplate.query(
                "select * from TRIM where TRIM.car_type_id = ?",
                (rs, rowNum) -> new TrimDto(
                        rs.getLong("trim_id"),
                        rs.getString("name"),
                        rs.getInt("price"),
                        rs.getString("img_url"),
                        rs.getString("description"),
                        rs.getString("purchase_rate")
                ),
                carTypeId
        );
    }

    public TrimDescriptionDto findByTrimId(Long trimId) {
        String query = "select description as trimDescription from TRIM where trim_id = ?";

        RowMapper<TrimDescriptionDto> rowMapper = new BeanPropertyRowMapper<>();

        return jdbcTemplate.queryForObject(query, rowMapper, trimId);
    }
}
