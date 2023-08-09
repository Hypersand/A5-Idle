package com.autoever.idle.domain.category.functionCategory.dto;

import com.autoever.idle.domain.function.dto.DefaultFunctionResDto;

import java.util.List;

public class FunctionCategoryDto {

    private Long functionCategoryId;
    private String categoryName;

    public FunctionCategoryDto(Long functionCategoryId, String categoryName) {
        this.functionCategoryId = functionCategoryId;
        this.categoryName = categoryName;
    }

    public Long getFunctionCategoryId() {
        return functionCategoryId;
    }

    public String getCategoryName() {
        return categoryName;
    }
}
