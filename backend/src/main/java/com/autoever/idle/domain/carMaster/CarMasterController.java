package com.autoever.idle.domain.carMaster;

import com.autoever.idle.domain.carMaster.dto.CarMasterDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/find/car/masters")
public class CarMasterController {

    private final CarMasterService carMasterService;

    @GetMapping
    public ResponseEntity<List<CarMasterDto>> getAvailableCarMaster(@RequestBody Map<String, Double> location) {
        List<CarMasterDto> availableCarMasters = carMasterService.findAvailableCarMaster(location.get("nowLatitude"), location.get("nowLongitude"));
        return ResponseEntity.ok(availableCarMasters);
    }


}
