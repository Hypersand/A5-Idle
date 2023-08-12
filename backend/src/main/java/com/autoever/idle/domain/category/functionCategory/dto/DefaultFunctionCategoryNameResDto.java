package com.autoever.idle.domain.category.functionCategory.dto;

import com.autoever.idle.domain.function.dto.DefaultFunctionResDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class DefaultFunctionCategoryNameResDto {
    private String categoryName;
    private List<DefaultFunctionResDto> functions;

    public DefaultFunctionCategoryNameResDto(String categoryName, List<DefaultFunctionResDto> functions) {
        this.categoryName = categoryName;
        this.functions = functions;
    }
}
