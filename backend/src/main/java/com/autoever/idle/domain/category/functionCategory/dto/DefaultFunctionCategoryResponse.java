package com.autoever.idle.domain.category.functionCategory.dto;

import com.autoever.idle.domain.function.dto.DefaultFunctionNameResponse;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class DefaultFunctionCategoryResponse {

    private Long categoryId;
    private String categoryName;
    private List<DefaultFunctionNameResponse> functions;

    public DefaultFunctionCategoryResponse(Long categoryId, String categoryName, List<DefaultFunctionNameResponse> functions) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.functions = functions;
    }

    public static DefaultFunctionCategoryResponse createDefaultFunctionDto(FunctionCategoryDto categoryDto, List<DefaultFunctionNameResponse> functions) {
        return DefaultFunctionCategoryResponse.builder()
                .categoryId(categoryDto.getFunctionCategoryId())
                .categoryName(categoryDto.getCategoryName())
                .functions(functions)
                .build();
    }
}
