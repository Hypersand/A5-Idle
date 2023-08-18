package com.autoever.idle.domain.function.service;

import com.autoever.idle.domain.category.functionCategory.repository.FunctionCategoryRepository;
import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryNameResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class FunctionService {

    private final FunctionCategoryRepository functionCategoryRepository;

    public FunctionService(FunctionCategoryRepository functionCategoryRepository) {
        this.functionCategoryRepository = functionCategoryRepository;
    }

    public List<DefaultFunctionCategoryNameResponse> getAllDefaultFunctionsByCategory(Long trimId) {

        return functionCategoryRepository.findAll().stream()
                    .map(category -> new DefaultFunctionCategoryNameResponse(
                            category.getCategoryName(),
                            functionCategoryRepository.getDefaultOptionsDetail(
                                trimId, category.getFunctionCategoryId())))
                    .collect(Collectors.toList());

    }
}
