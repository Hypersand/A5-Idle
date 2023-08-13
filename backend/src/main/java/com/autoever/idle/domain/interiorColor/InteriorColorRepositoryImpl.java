package com.autoever.idle.domain.interiorColor;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class InteriorColorRepositoryImpl implements InteriorColorRepository {
    private final JdbcTemplate jdbcTemplate;

    public InteriorColorRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Optional<InteriorBillDto> findInteriorBill(Long interiorId) {
        String query = "select i.interior_color_id interiorId, i.color_img_url interiorImgUrl " +
                "from INTERIOR_COLOR i where i.interior_color_id = ?";

        RowMapper rowMapper = new BeanPropertyRowMapper(InteriorBillDto.class);
        return jdbcTemplate.query(query, rowMapper, interiorId).stream().findAny();
    }
}
