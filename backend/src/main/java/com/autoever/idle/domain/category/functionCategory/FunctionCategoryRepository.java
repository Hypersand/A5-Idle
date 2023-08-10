package com.autoever.idle.domain.category.functionCategory;

import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionResDto;

import java.util.List;

public interface FunctionCategoryRepository {
    List<FunctionCategoryDto> findAll();

    List<DefaultFunctionResDto> getDefaultOptions(Long trimId, Long categoryId);
}
