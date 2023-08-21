package com.autoever.idle.domain.carType.repository;

import com.autoever.idle.domain.carType.dto.CarTypeDto;

import java.util.List;

public interface CarTypeRepository{
    List<Long> findByName(String carTypeName);
    List<CarTypeDto> findByCategory(Long categoryId);
}

