package com.autoever.idle.domain.detailModel.drivingMethod.repository;

import com.autoever.idle.domain.detailModel.dto.DrivingMethodResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class DrivingMethodRepositoryImpl implements DrivingMethodRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    @Override
    public List<DrivingMethodResponse> findAll(Long trimId) {
        String query = "select d.driving_method_id id, d.type, d.price, d.description, d.img_url, " +
                "d.purchase_rate from DRIVING_METHOD d left join TRIM_DRIVING_METHOD tdm " +
                "on d.driving_method_id = tdm.driving_method_id " +
                "where tdm.trim_id = :trimId order by d.price asc";

        RowMapper<DrivingMethodResponse> rowMapper = new BeanPropertyRowMapper<>(DrivingMethodResponse.class);
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("trimId", trimId);

        return jdbcTemplate.query(query, param, rowMapper);
    }
}
