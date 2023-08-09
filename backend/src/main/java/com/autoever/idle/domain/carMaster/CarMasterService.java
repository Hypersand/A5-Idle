package com.autoever.idle.domain.carMaster;

import com.autoever.idle.domain.carMaster.dto.CarMasterDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CarMasterService {

    private final CarMasterRepository carMasterRepository;

    public CarMasterService(CarMasterRepositoryImpl carMasterRepository) {
        this.carMasterRepository = carMasterRepository;
    }

    public List<CarMasterDto> findAvailableCarMaster(Double latitude, Double longitude){
        return carMasterRepository.findAvailableCarMaster(latitude, longitude);
    }
}
