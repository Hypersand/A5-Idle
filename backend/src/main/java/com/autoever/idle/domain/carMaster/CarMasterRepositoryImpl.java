package com.autoever.idle.domain.carMaster;

import com.autoever.idle.domain.carMaster.dto.CarMasterDto;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import javax.sql.DataSource;
import java.util.List;

@Repository
public class CarMasterRepositoryImpl implements CarMasterRepository{

    private final JdbcTemplate jdbcTemplate;

    public CarMasterRepositoryImpl(DataSource dataSource) {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
    }

    public List<CarMasterDto> findAvailableCarMaster(Double latitude, Double longitude){ //10km 이내의 카마스터들 정보를 거리순으로 반환
        return jdbcTemplate.query(
                "SELECT *, ( 6371 * acos( cos( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin( radians(?) ) * sin( radians( latitude ) ) ) ) AS distance "+
                "FROM CAR_MASTER "+
                "GROUP BY CAR_MASTER_ID, name, phone_number, dealership, description, sales_rate, img_url, latitude, longitude "+
                "HAVING distance <= 10 "+
                "ORDER BY distance",
                ((rs, rowNum) -> new CarMasterDto(
                        rs.getString("name"),
                        rs.getString("phone_number"),
                        rs.getString("dealership"),
                        rs.getString("description"),
                        rs.getInt("sales_rate"),
                        rs.getString("img_url"),
                        rs.getDouble("latitude"),
                        rs.getDouble("longitude")
                )),latitude,longitude,latitude);
    }
}
