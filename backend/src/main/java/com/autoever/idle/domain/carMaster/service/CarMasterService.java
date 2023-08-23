package com.autoever.idle.domain.carMaster.service;

import com.autoever.idle.domain.carMaster.dto.CarMasterResponse;
import com.autoever.idle.domain.carMaster.repository.CarMasterRepository;
import com.autoever.idle.global.exception.custom.InvalidLocationException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static com.autoever.idle.global.exception.ErrorCode.INVALID_LOCATION;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class CarMasterService {

    private final CarMasterRepository carMasterRepository;

    public List<CarMasterResponse> findSortedCarMasterByDistance(Double latitude, Double longitude){
        if (latitude>90 || latitude<-90 || longitude>180 || longitude<-180){
            throw new InvalidLocationException(INVALID_LOCATION);
        }
        return carMasterRepository.findSortedCarMasterByDistance(latitude, longitude);
    }

    public List<CarMasterResponse> findSortedCarMasterBySaleRate(Double latitude, Double longitude){
        if (latitude>90 || latitude<-90 || longitude>180 || longitude<-180){
            throw new InvalidLocationException(INVALID_LOCATION);
        }
        return carMasterRepository.findSortedCarMasterBySaleRate(latitude, longitude);
    }
}
