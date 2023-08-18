package com.autoever.idle.domain.carMaster.repository;

import com.autoever.idle.domain.carMaster.dto.CarMasterResponse;

import java.util.List;

public interface CarMasterRepository {

    List<CarMasterResponse> findSortedCarMasterByDistance(Double latitude, Double longitude);
    List<CarMasterResponse> findSortedCarMasterBySaleRate(Double latitude, Double longitude);

}