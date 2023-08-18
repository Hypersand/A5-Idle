package com.autoever.idle.domain.trim.repository;

import com.autoever.idle.domain.trim.dto.TrimDescriptionDto;
import com.autoever.idle.domain.trim.dto.TrimDto;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class TrimRepositoryImpl implements TrimRepository {

    private final JdbcTemplate jdbcTemplate;

    public TrimRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

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

        RowMapper<TrimDescriptionDto> rowMapper = BeanPropertyRowMapper.newInstance(TrimDescriptionDto.class);

        return jdbcTemplate.queryForObject(query, rowMapper, trimId);
    }
}
