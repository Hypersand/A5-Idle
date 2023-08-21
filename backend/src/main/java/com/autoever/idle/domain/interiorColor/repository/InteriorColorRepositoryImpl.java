package com.autoever.idle.domain.interiorColor.repository;

import com.autoever.idle.domain.interiorColor.dto.InteriorBillDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorImgUrlDto;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class InteriorColorRepositoryImpl implements InteriorColorRepository {

    private final JdbcTemplate jdbcTemplate;

    public List<InteriorColorDto> findInteriorColorByTrimIdAndExteriorId(Long trimId, Long exteriorId) {
        String query = "select IC.interior_color_id as interiorId, IC.color as interiorName, IC.price as interiorPrice, " +
                "IC.interior_img_url as carInteriorImgUrl, IC.color_img_url as interiorImgUrl, IC.purchase_rate as interiorPurchaseRate "+
                "from TRIM_EXTERIOR_COLOR as TEC " +
                "left join INTERIOR_COLOR as IC on TEC.trim_exterior_color_id = IC.trim_exterior_color_id " +
                "where TEC.trim_id = ? and TEC.exterior_color_id = ?";

        RowMapper<InteriorColorDto> rowMapper = BeanPropertyRowMapper.newInstance(InteriorColorDto.class);
        return jdbcTemplate.query(query, rowMapper, trimId, exteriorId);
    }

    @Override
    public Optional<InteriorBillDto> findInteriorBill(Long interiorId) {
        String query = "select i.interior_color_id interiorId, i.color_img_url interiorImgUrl " +
                "from INTERIOR_COLOR i where i.interior_color_id = ?";

        RowMapper rowMapper = new BeanPropertyRowMapper(InteriorBillDto.class);
        return jdbcTemplate.query(query, rowMapper, interiorId).stream().findAny();
    }

    public List<InteriorImgUrlDto> findInteriorColorImgUrlsByTrimId(Long trimId) {
        String query = "select distinct IC.color_img_url as interior_img_url from TRIM_EXTERIOR_COLOR as TEC " +
                "left join INTERIOR_COLOR as IC on TEC.trim_exterior_color_id = IC.trim_exterior_color_id " +
                "where TEC.trim_id = ?";

        RowMapper<InteriorImgUrlDto> rowMapper = BeanPropertyRowMapper.newInstance(InteriorImgUrlDto.class);

        return jdbcTemplate.query(query, rowMapper, trimId);
    }
}
