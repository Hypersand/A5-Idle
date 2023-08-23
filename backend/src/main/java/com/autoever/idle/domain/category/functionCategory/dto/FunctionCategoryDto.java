package com.autoever.idle.domain.category.functionCategory.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class FunctionCategoryDto {

    private Long functionCategoryId;
    private String categoryName;

    public FunctionCategoryDto(Long functionCategoryId, String categoryName) {
        this.functionCategoryId = functionCategoryId;
        this.categoryName = categoryName;
    }
}
