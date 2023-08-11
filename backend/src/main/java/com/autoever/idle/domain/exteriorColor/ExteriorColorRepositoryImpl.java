package com.autoever.idle.domain.exteriorColor;

import com.autoever.idle.domain.exteriorColor.dto.CarExteriorImgDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorDto;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class ExteriorColorRepositoryImpl implements ExteriorColorRepository {

    private final JdbcTemplate jdbcTemplate;

    public ExteriorColorRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<ExteriorColorDto> findExteriorColorsByTrimId(Long trimId) {
        String query = "select ec.exterior_color_id, ec.color, ec.color_img_url, ec.price, ec.purchase_rate " +
                "from TRIM_EXTERIOR_COLOR as tec " +
                "left join EXTERIOR_COLOR as ec on tec.exterior_color_id = ec.exterior_color_id " +
                "where trim_id = ? order by ec.price asc";

        return jdbcTemplate.query(
                query,
                ((rs, rowNum) -> new ExteriorColorDto(
                        rs.getLong("exterior_color_id"),
                        rs.getString("color"),
                        rs.getInt("price"),
                        rs.getString("color_img_url"),
                        rs.getString("purchase_rate")
                )),
                trimId
        );
    }

    public List<CarExteriorImgDto> findCarExteriorImgsById(Long exteriorId) {
        String query = "select car_exterior_img_url from CAR_EXTERIOR_IMAGE where exterior_color_id = ?";

        return jdbcTemplate.query(query,
                (rs, rowNum) -> new CarExteriorImgDto(
                        rs.getString("car_exterior_img_url")
                ),
                exteriorId);
    }
}
