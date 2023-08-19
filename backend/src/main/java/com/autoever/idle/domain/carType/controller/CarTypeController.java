package com.autoever.idle.domain.carType.controller;

import com.autoever.idle.domain.carType.service.CarTypeService;
import com.autoever.idle.domain.category.carCategory.dto.CarCategoryResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/carType")
public class CarTypeController {

    private final CarTypeService carTypeService;

    @GetMapping
    public ResponseEntity<List<CarCategoryResponse>> getAllCarType(){
        List<CarCategoryResponse> allCarType = carTypeService.getAllCarType();
        return ResponseEntity.ok(allCarType);
    }
}
