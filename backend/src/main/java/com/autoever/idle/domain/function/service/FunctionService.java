package com.autoever.idle.domain.function.service;

import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryNameResponse;
import com.autoever.idle.domain.category.functionCategory.repository.FunctionCategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class FunctionService {

    private final FunctionCategoryRepository functionCategoryRepository;

    public List<DefaultFunctionCategoryNameResponse> getAllDefaultFunctionsByCategory(Long trimId) {
        return functionCategoryRepository.findAll().stream()
                    .map(category ->
                            new DefaultFunctionCategoryNameResponse(
                                    category.getCategoryName(),
                                    functionCategoryRepository.getDefaultOptionsDetail(trimId, category.getFunctionCategoryId())
                            )
                    )
                    .collect(Collectors.toList());

    }
}
