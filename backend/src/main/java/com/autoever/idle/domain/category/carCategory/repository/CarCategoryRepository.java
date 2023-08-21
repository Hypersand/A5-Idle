package com.autoever.idle.domain.category.carCategory.repository;

import com.autoever.idle.domain.category.carCategory.dto.CarCategoryDto;

import java.util.List;

public interface CarCategoryRepository {

    List<CarCategoryDto> findAll();
}
