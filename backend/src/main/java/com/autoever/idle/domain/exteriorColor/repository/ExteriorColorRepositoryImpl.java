package com.autoever.idle.domain.exteriorColor.repository;

import com.autoever.idle.domain.exteriorColor.dto.CarExteriorImgDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorImgUrlDto;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class ExteriorColorRepositoryImpl implements ExteriorColorRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public List<ExteriorColorDto> findExteriorColorsByTrimId(Long trimId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("trimId", trimId);

        String query = "select ec.exterior_color_id, ec.color, ec.color_img_url, ec.price, ec.purchase_rate " +
                "from TRIM_EXTERIOR_COLOR as tec " +
                "left join EXTERIOR_COLOR as ec on tec.exterior_color_id = ec.exterior_color_id " +
                "where trim_id = :trimId order by ec.price asc";

        RowMapper<ExteriorColorDto> rowMapper = new BeanPropertyRowMapper<>(ExteriorColorDto.class);

        return jdbcTemplate.query(query, param, rowMapper);
    }

    public List<CarExteriorImgDto> findCarExteriorImgsById(Long exteriorId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("exteriorId", exteriorId);

        String query = "select car_exterior_img_url from CAR_EXTERIOR_IMAGE where exterior_color_id = :exteriorId";

        RowMapper<CarExteriorImgDto> rowMapper = new BeanPropertyRowMapper<>(CarExteriorImgDto.class);

        return jdbcTemplate.query(query, param, rowMapper);
    }

    public Optional<ExteriorBillDto> findExteriorBill(Long exteriorId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("exteriorId", exteriorId);

        String query = "select e.exterior_color_id exteriorId, e.color_img_url exteriorImgUrl " +
                        "from EXTERIOR_COLOR e where e.exterior_color_id = :exteriorId";

        RowMapper<ExteriorBillDto> rowMapper = new BeanPropertyRowMapper<>(ExteriorBillDto.class);
        return jdbcTemplate.query(query, param, rowMapper).stream().findAny();
    }

    public List<ExteriorImgUrlDto> findExteriorColorImgUrlsByTrimId(Long trimId) {
        MapSqlParameterSource param = new MapSqlParameterSource();
        param.addValue("trimId", trimId);

        String query = "select EC.color_img_url as exterior_img_url from TRIM_EXTERIOR_COLOR as TEC " +
                "join EXTERIOR_COLOR as EC on TEC.exterior_color_id = EC.exterior_color_id " +
                "where TEC.trim_id = :trimId";

        RowMapper<ExteriorImgUrlDto> rowMapper = new BeanPropertyRowMapper<>(ExteriorImgUrlDto.class);

        return jdbcTemplate.query(query, param, rowMapper);
    }
}
