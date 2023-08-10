package com.autoever.idle.domain.carMaster;

import com.autoever.idle.domain.carMaster.dto.CarMasterDto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarMasterRepository {

    List<CarMasterDto> findAvailableCarMaster(Double latitude, Double longitude);

}