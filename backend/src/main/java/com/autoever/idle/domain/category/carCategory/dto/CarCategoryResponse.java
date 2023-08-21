package com.autoever.idle.domain.category.carCategory.dto;

import com.autoever.idle.domain.carType.dto.CarTypeDto;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.util.List;

@RequiredArgsConstructor
@Getter
public class CarCategoryResponse {
    private final Long carCategoryId;
    private final String carCategoryName;
    private final List<CarTypeDto> carTypeDtoList;
}
