package com.autoever.idle.domain.carMaster.repository;

import com.autoever.idle.domain.carMaster.dto.CarMasterResponse;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CarMasterRepositoryImpl implements CarMasterRepository {

    private final JdbcTemplate jdbcTemplate;

    public CarMasterRepositoryImpl(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<CarMasterResponse> findSortedCarMasterByDistance(Double latitude, Double longitude) { //10km 이내의 카마스터들 정보를 거리순으로 반환
        RowMapper rowMapper = BeanPropertyRowMapper.newInstance(CarMasterResponse.class);
        return jdbcTemplate.query(
                "SELECT name AS masterName, phone_number AS masterPhoneNumber, dealership AS masterDealership," +
                        " description AS masterDescription, img_url AS masterImgUrl, marker_img_url AS masterMarkerImgUrl," +
                        "latitude AS masterLatitude, longitude AS masterLongitude, address AS masterAddress," +
                        " ( 6371 * acos( cos( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin( radians(?) ) * sin( radians( latitude ) ) ) ) AS distance " +
                        "FROM CAR_MASTER " +
                        "GROUP BY sales_rate,masterName, masterPhoneNumber, masterDealership, masterDescription, masterImgUrl, masterLatitude, masterLongitude, masterMarkerImgUrl, masterAddress " +
                        "HAVING distance <= 10 " +
                        "ORDER BY distance " +
                        "LIMIT 20",
                rowMapper,
                latitude, longitude, latitude);
    }

    public List<CarMasterResponse> findSortedCarMasterBySaleRate(Double latitude, Double longitude) { //10km 이내의 카마스터들 정보를 판매량순으로 반환
        RowMapper rowMapper = BeanPropertyRowMapper.newInstance(CarMasterResponse.class);
        return jdbcTemplate.query(
                "SELECT name AS masterName, phone_number AS masterPhoneNumber, dealership AS masterDealership, sales_rate," +
                        " description AS masterDescription, img_url AS masterImgUrl, marker_img_url AS masterMarkerImgUrl," +
                        " latitude AS masterLatitude, longitude AS masterLongitude, address AS masterAddress," +
                        " ( 6371 * acos( cos( radians(?) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(?) ) + sin( radians(?) ) * sin( radians( latitude ) ) ) ) AS distance " +
                        "FROM CAR_MASTER " +
                        "GROUP BY sales_rate,masterName, masterPhoneNumber, masterDealership, masterDescription, masterImgUrl, masterLatitude, masterLongitude, masterMarkerImgUrl, masterAddress " +
                        "HAVING distance <= 10 " +
                        "ORDER BY sales_rate desc " +
                        "LIMIT 20",
                rowMapper,
                latitude, longitude, latitude);
    }
}
