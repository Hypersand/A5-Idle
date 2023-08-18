package com.autoever.idle.domain.category.functionCategory.dto;

import com.autoever.idle.domain.function.dto.DefaultFunctionResponse;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Setter
@Getter
public class DefaultFunctionCategoryNameResponse {
    private String categoryName;
    private List<DefaultFunctionResponse> functions;

    public DefaultFunctionCategoryNameResponse(String categoryName, List<DefaultFunctionResponse> functions) {
        this.categoryName = categoryName;
        this.functions = functions;
    }
}
