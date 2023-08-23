package com.autoever.idle.domain.category.functionCategory.dto;

import com.autoever.idle.domain.function.dto.DefaultFunctionNameResponse;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DefaultFunctionCategoryResponse {

    private Long categoryId;
    private String categoryName;
    private List<DefaultFunctionNameResponse> functions;

    public  DefaultFunctionCategoryResponse(Long categoryId, String categoryName, List<DefaultFunctionNameResponse> functions) {
        this.categoryId = categoryId;
        this.categoryName = categoryName;
        this.functions = functions;
    }
    
    public DefaultFunctionCategoryResponse(FunctionCategoryDto categoryDto, List<DefaultFunctionNameResponse> functions) {
        this(categoryDto.getFunctionCategoryId(), categoryDto.getCategoryName(), functions);
    }
}
