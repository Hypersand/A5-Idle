package com.autoever.idle.domain.detailModel.bodyType.repository;

import com.autoever.idle.domain.detailModel.dto.BodyTypeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class BodyTypeRepositoryImpl implements BodyTypeRepository{

    private final NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public List<BodyTypeResponse> findAll(Long trimId) {
        String query = "select b.body_type_id id, b.type, b.price, b.description, b.purchase_rate, b.img_url " +
                "from BODY_TYPE b left join TRIM_BODY_TYPE tbt " +
                "on b.body_type_id = tbt.body_type_id where tbt.trim_id = :trimId order by b.price asc";

        RowMapper<BodyTypeResponse> rowMapper = new BeanPropertyRowMapper<>(BodyTypeResponse.class);
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("trimId", trimId);

        return jdbcTemplate.query(query, param, rowMapper);
    }
}
