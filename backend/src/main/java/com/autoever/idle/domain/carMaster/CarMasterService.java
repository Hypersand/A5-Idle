package com.autoever.idle.domain.carMaster;

import com.autoever.idle.domain.carMaster.dto.CarMasterDto;
import com.autoever.idle.global.exception.custom.InvalidLocationException;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.autoever.idle.global.exception.ErrorCode.INVALID_LOCATION;

@Service
public class CarMasterService {

    private final CarMasterRepository carMasterRepository;

    public CarMasterService(CarMasterRepositoryImpl carMasterRepository) {
        this.carMasterRepository = carMasterRepository;
    }

    public List<CarMasterDto> findAvailableCarMaster(Double latitude, Double longitude){
        if (latitude>90 || latitude<-90 || longitude>180 || longitude<-180){
            throw new InvalidLocationException(INVALID_LOCATION);
        }
        return carMasterRepository.findAvailableCarMaster(latitude, longitude);
    }
}
