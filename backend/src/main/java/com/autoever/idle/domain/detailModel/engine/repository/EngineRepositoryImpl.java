package com.autoever.idle.domain.detailModel.engine.repository;

import com.autoever.idle.domain.detailModel.dto.EngineResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class EngineRepositoryImpl implements EngineRepository {
    private final NamedParameterJdbcTemplate jdbcTemplate;
    @Override
    public List<EngineResponse> findAll(Long trimId) {
        String query = "select e.engine_id id, e.type,  e.price  , e.description, e.purchase_rate, e.img_url, " +
                "e.peak_output, e.max_torque, e.min_fuel, e.max_fuel  " +
                "from ENGINE e left join TRIM_ENGINE te " +
                "on e.engine_id = te.engine_id " +
                "where te.trim_id = :trimId order by e.price asc";

        RowMapper rowMapper = BeanPropertyRowMapper.newInstance(EngineResponse.class);
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("trimId", trimId);

        return jdbcTemplate.query(query, param, rowMapper);
    }
}
