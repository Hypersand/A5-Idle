package com.autoever.idle.domain.category.functionCategory.dto;

import com.autoever.idle.domain.function.dto.DefaultFunctionNameResDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class DefaultFunctionCategoryResDto {

    private Long categoryId;
    private String categoryName;
    private List<DefaultFunctionNameResDto> functions;

    public static DefaultFunctionCategoryResDto createDefaultFunctionDto(FunctionCategoryDto categoryDto, List<DefaultFunctionNameResDto> functions) {
        return DefaultFunctionCategoryResDto.builder()
                .categoryId(categoryDto.getFunctionCategoryId())
                .categoryName(categoryDto.getCategoryName())
                .functions(functions)
                .build();
    }
}
