package com.autoever.idle.domain.category.functionCategory.repository;

import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionNameResponse;
import com.autoever.idle.domain.function.dto.DefaultFunctionResponse;

import java.util.List;

public interface FunctionCategoryRepository {
    List<FunctionCategoryDto> findAll();
    List<DefaultFunctionNameResponse> getDefaultOptions(Long trimId, Long categoryId);
    List<DefaultFunctionResponse> getDefaultOptionsDetail(Long trimId, Long categoryId);
}
