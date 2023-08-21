package com.autoever.idle.domain.carMaster.repository;

import com.autoever.idle.domain.carMaster.dto.CarMasterResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class CarMasterRepositoryImpl implements CarMasterRepository {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public List<CarMasterResponse> findSortedCarMasterByDistance(Double latitude, Double longitude) { //10km 이내의 카마스터들 정보를 거리순으로 반환
        RowMapper<CarMasterResponse> rowMapper = new BeanPropertyRowMapper<>(CarMasterResponse.class);
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("latitude",latitude);
        params.addValue("longitude",longitude);
        return jdbcTemplate.query(
                "SELECT name AS masterName, phone_number AS masterPhoneNumber, dealership AS masterDealership," +
                        " description AS masterDescription, img_url AS masterImgUrl, marker_img_url AS masterMarkerImgUrl," +
                        "latitude AS masterLatitude, longitude AS masterLongitude, address AS masterAddress," +
                        " ( 6371 * acos( cos( radians(:latitude) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(:longitude) ) + sin( radians(:latitude) ) * sin( radians( latitude ) ) ) ) AS distance " +
                        "FROM CAR_MASTER " +
                        "GROUP BY sales_rate,masterName, masterPhoneNumber, masterDealership, masterDescription, masterImgUrl, masterLatitude, masterLongitude, masterMarkerImgUrl, masterAddress " +
                        "HAVING distance <= 10 " +
                        "ORDER BY distance " +
                        "LIMIT 20",
                params,rowMapper);
    }

    public List<CarMasterResponse> findSortedCarMasterBySaleRate(Double latitude, Double longitude) { //10km 이내의 카마스터들 정보를 판매량순으로 반환
        RowMapper<CarMasterResponse> rowMapper = new BeanPropertyRowMapper<>(CarMasterResponse.class);
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("latitude",latitude);
        params.addValue("longitude",longitude);
        return jdbcTemplate.query(
                "SELECT name AS masterName, phone_number AS masterPhoneNumber, dealership AS masterDealership, sales_rate," +
                        " description AS masterDescription, img_url AS masterImgUrl, marker_img_url AS masterMarkerImgUrl," +
                        " latitude AS masterLatitude, longitude AS masterLongitude, address AS masterAddress," +
                        " ( 6371 * acos( cos( radians(:latitude) ) * cos( radians( latitude ) ) * cos( radians( longitude ) - radians(:longitude) ) + sin( radians(:latitude) ) * sin( radians( latitude ) ) ) ) AS distance " +
                        "FROM CAR_MASTER " +
                        "GROUP BY sales_rate,masterName, masterPhoneNumber, masterDealership, masterDescription, masterImgUrl, masterLatitude, masterLongitude, masterMarkerImgUrl, masterAddress " +
                        "HAVING distance <= 10 " +
                        "ORDER BY sales_rate desc " +
                        "LIMIT 20",
                params,rowMapper);
    }
}
