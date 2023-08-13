package com.autoever.idle.domain.function;

import com.autoever.idle.domain.category.functionCategory.FunctionCategoryRepository;
import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryNameResDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FunctionService {

    private final FunctionCategoryRepository functionCategoryRepository;

    public FunctionService(FunctionCategoryRepository functionCategoryRepository) {
        this.functionCategoryRepository = functionCategoryRepository;
    }

    public List<DefaultFunctionCategoryNameResDto> getAllDefaultFunctionsByCategory(Long trimId) {

        return functionCategoryRepository.findAll().stream()
                    .map(category -> new DefaultFunctionCategoryNameResDto(
                            category.getCategoryName(),
                            functionCategoryRepository.getDefaultOptionsDetail(
                                trimId, category.getFunctionCategoryId())))
                    .collect(Collectors.toList());

    }
}
