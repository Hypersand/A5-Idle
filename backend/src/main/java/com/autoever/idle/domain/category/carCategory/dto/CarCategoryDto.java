package com.autoever.idle.domain.category.carCategory.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CarCategoryDto {
    private Long carCategoryId;
    private String carCategoryName;

    //테스트 용도 생성자
    public CarCategoryDto(Long carCategoryId, String carCategoryName) {
        this.carCategoryId = carCategoryId;
        this.carCategoryName = carCategoryName;
    }
}
