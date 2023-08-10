package com.autoever.idle.domain.category.functionCategory;

import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionResDto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FunctionCategoryRepository {
    List<FunctionCategoryDto> findAll();

    List<DefaultFunctionResDto> getDefaultOptions(Long trimId, Long categoryId);
}
