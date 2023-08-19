package com.autoever.idle.domain.carType.service;

import com.autoever.idle.domain.carType.dto.CarTypeDto;
import com.autoever.idle.domain.carType.repository.CarTypeRepository;
import com.autoever.idle.domain.category.carCategory.dto.CarCategoryDto;
import com.autoever.idle.domain.category.carCategory.dto.CarCategoryResponse;
import com.autoever.idle.domain.category.carCategory.repository.CarCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CarTypeService {

    private final CarTypeRepository carTypeRepository;
    private final CarCategoryRepository carCategoryRepository;

    public List<CarCategoryResponse> getAllCarType(){
        List<CarCategoryDto> carCategoryDtoList = carCategoryRepository.findAll();
        List<CarCategoryResponse> responseList = new ArrayList<>();
        for (CarCategoryDto categoryDto : carCategoryDtoList){
            List<CarTypeDto> carTypeDtoList = carTypeRepository.findByCategory(categoryDto.getCarCategoryId());
            CarCategoryResponse carCategoryResponse =
                    new CarCategoryResponse(categoryDto.getCarCategoryId(), categoryDto.getCarCategoryName(), carTypeDtoList);
            System.out.println(carCategoryResponse.getCarCategoryName());
            responseList.add(carCategoryResponse);
        }
        return responseList;
    }
}
