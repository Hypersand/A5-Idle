package com.autoever.idle.domain.carMaster.controller;

import com.autoever.idle.domain.carMaster.dto.CarMasterResponse;
import com.autoever.idle.domain.carMaster.service.CarMasterService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/find/car/masters")
public class CarMasterController {

    private final CarMasterService carMasterService;

    @GetMapping(value = "/distance")
    public ResponseEntity<List<CarMasterResponse>> getSortedCarMasterByDistance(@RequestParam Double nowLatitude,
                                                                                @RequestParam Double nowLongitude) {
        List<CarMasterResponse> sortedCarMasterByDistance = carMasterService.findSortedCarMasterByDistance(nowLatitude, nowLongitude);
        return ResponseEntity.ok(sortedCarMasterByDistance);
    }

    @GetMapping(value="/salerate")
    public ResponseEntity<List<CarMasterResponse>> getSortedCarMasterBySaleRate(@RequestParam Double nowLatitude,
                                                                                @RequestParam Double nowLongitude){

        List<CarMasterResponse> sortedCarMasterBySaleRate = carMasterService.findSortedCarMasterBySaleRate(nowLatitude, nowLongitude);
        return ResponseEntity.ok(sortedCarMasterBySaleRate);
    }


}
