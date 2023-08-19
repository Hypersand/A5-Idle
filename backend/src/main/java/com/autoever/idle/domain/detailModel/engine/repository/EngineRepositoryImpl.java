package com.autoever.idle.domain.detailModel.engine.repository;

import com.autoever.idle.domain.detailModel.dto.EngineResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
@RequiredArgsConstructor
public class EngineRepositoryImpl implements EngineRepository {
    private final JdbcTemplate jdbcTemplate;
    @Override
    public List<EngineResponse> findAll(Long trimId) {
        return jdbcTemplate.query("select e.* from ENGINE e left join TRIM_ENGINE te " +
                        "on e.engine_id = te.engine_id where te.trim_id = ? order by e.price asc",
                (rs, rowNum) -> new EngineResponse(
                        rs.getLong("engine_id"),
                        rs.getString("type"),
                        rs.getInt("price"),
                        rs.getString("description"),
                        rs.getString("purchase_rate"),
                        rs.getString("img_url"),
                        rs.getInt("peak_output"),
                        rs.getDouble("max_torque"),
                        rs.getDouble("min_fuel"),
                        rs.getDouble("max_fuel")
                ),
                trimId
        );
    }
}
