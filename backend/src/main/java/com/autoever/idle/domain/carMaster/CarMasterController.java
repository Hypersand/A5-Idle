package com.autoever.idle.domain.carMaster;

import com.autoever.idle.domain.carMaster.dto.CarMasterDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/find/car/masters")
public class CarMasterController {

    private final CarMasterService carMasterService;

    @GetMapping(value = "/distance")
    public ResponseEntity<List<CarMasterDto>> getSortedCarMasterByDistance(@RequestParam Double nowLatitude,
                                                                           @RequestParam Double nowLongitude) {
        List<CarMasterDto> sortedCarMasterByDistance = carMasterService.findSortedCarMasterByDistance(nowLatitude, nowLongitude);
        return ResponseEntity.ok(sortedCarMasterByDistance);
    }

    @GetMapping(value="/salerate")
    public ResponseEntity<List<CarMasterDto>> getSortedCarMasterBySaleRate(@RequestParam Double nowLatitude,
                                                                           @RequestParam Double nowLongitude){

        List<CarMasterDto> sortedCarMasterBySaleRate = carMasterService.findSortedCarMasterBySaleRate(nowLatitude, nowLongitude);
        return ResponseEntity.ok(sortedCarMasterBySaleRate);
    }


}
