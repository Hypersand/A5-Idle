package com.autoever.idle.domain.interiorColor.repository;

import com.autoever.idle.domain.interiorColor.dto.InteriorBillDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorImgUrlDto;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class InteriorColorRepositoryImpl implements InteriorColorRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public List<InteriorColorDto> findInteriorColorByTrimIdAndExteriorId(Long trimId, Long exteriorId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("trimId", trimId);
        param.addValue("exteriorId", exteriorId);

        String query = "select IC.interior_color_id as interiorId, IC.color as interiorName, IC.price as interiorPrice, " +
                "IC.interior_img_url as carInteriorImgUrl, IC.color_img_url as interiorImgUrl, IC.purchase_rate as interiorPurchaseRate "+
                "from TRIM_EXTERIOR_COLOR as TEC " +
                "left join INTERIOR_COLOR as IC on TEC.trim_exterior_color_id = IC.trim_exterior_color_id " +
                "where TEC.trim_id = :trimId and TEC.exterior_color_id = :exteriorId";

        RowMapper<InteriorColorDto> rowMapper = new BeanPropertyRowMapper<>(InteriorColorDto.class);

        return jdbcTemplate.query(query, param, rowMapper);
    }

    @Override
    public Optional<InteriorBillDto> findInteriorBill(Long interiorId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("interiorId", interiorId);

        String query = "select i.interior_color_id interiorId, i.color_img_url interiorImgUrl " +
                "from INTERIOR_COLOR i where i.interior_color_id = :interiorId";

        RowMapper<InteriorBillDto> rowMapper = new BeanPropertyRowMapper<>(InteriorBillDto.class);

        return jdbcTemplate.query(query, param, rowMapper).stream().findAny();
    }

    public List<InteriorImgUrlDto> findInteriorColorImgUrlsByTrimId(Long trimId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("trimId", trimId);

        String query = "select distinct IC.color_img_url as interior_img_url from TRIM_EXTERIOR_COLOR as TEC " +
                "left join INTERIOR_COLOR as IC on TEC.trim_exterior_color_id = IC.trim_exterior_color_id " +
                "where TEC.trim_id = :trimId";

        RowMapper<InteriorImgUrlDto> rowMapper = new BeanPropertyRowMapper<>(InteriorImgUrlDto.class);

        return jdbcTemplate.query(query, param, rowMapper);
    }
}
