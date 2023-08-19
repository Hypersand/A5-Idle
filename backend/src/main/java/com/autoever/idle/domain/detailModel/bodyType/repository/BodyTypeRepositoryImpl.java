package com.autoever.idle.domain.detailModel.bodyType.repository;

import com.autoever.idle.domain.detailModel.dto.BodyTypeResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class BodyTypeRepositoryImpl implements BodyTypeRepository{

    private final JdbcTemplate jdbcTemplate;

    @Override
    public List<BodyTypeResponse> findAll(Long trimId) {
        return jdbcTemplate.query("select b.* from BODY_TYPE b left join TRIM_BODY_TYPE tbt " +
                "on b.body_type_id = tbt.body_type_id where tbt.trim_id = ? order by b.price asc ",
                (rs, rowNum) -> new BodyTypeResponse(
                        rs.getLong("body_type_id"),
                        rs.getString("type"),
                        rs.getInt("price"),
                        rs.getString("description"),
                        rs.getString("purchase_rate"),
                        rs.getString("img_url")
                ),
                trimId
        );
    }
}
