package com.autoever.idle.domain.category.functionCategory.dto;

import lombok.Getter;

@Getter
public class FunctionCategoryDto {

    private Long functionCategoryId;
    private String categoryName;

    public FunctionCategoryDto(Long functionCategoryId, String categoryName) {
        this.functionCategoryId = functionCategoryId;
        this.categoryName = categoryName;
    }
}
