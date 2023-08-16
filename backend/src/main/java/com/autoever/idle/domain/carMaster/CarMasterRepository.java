package com.autoever.idle.domain.carMaster;

import com.autoever.idle.domain.carMaster.dto.CarMasterDto;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface CarMasterRepository {

    List<CarMasterDto> findSortedCarMasterByDistance(Double latitude, Double longitude);
    List<CarMasterDto> findSortedCarMasterBySaleRate(Double latitude, Double longitude);

}