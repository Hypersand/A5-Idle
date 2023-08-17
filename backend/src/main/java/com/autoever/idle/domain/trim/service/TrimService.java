package com.autoever.idle.domain.trim.service;

import com.autoever.idle.domain.carType.CarTypeRepository;
import com.autoever.idle.domain.category.functionCategory.repository.FunctionCategoryRepository;
import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryResponse;
import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionNameResponse;
import com.autoever.idle.domain.trim.dto.TrimDto;
import com.autoever.idle.domain.trim.dto.TrimSelectionResponse;
import com.autoever.idle.domain.trim.repository.TrimRepository;
import com.autoever.idle.domain.trimThumbnailFunction.repository.TrimThumbnailFunctionRepository;
import com.autoever.idle.domain.trimThumbnailFunction.dto.TrimThumbnailFunctionResponse;
import com.autoever.idle.global.exception.custom.InvalidCarException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static com.autoever.idle.global.exception.ErrorCode.INVALID_CAR;

@Service
@RequiredArgsConstructor
public class TrimService {

    private final CarTypeRepository carTypeRepository;
    private final TrimRepository trimRepository;
    private final FunctionCategoryRepository functionCategoryRepository;
    private final TrimThumbnailFunctionRepository trimThumbnailFunctionRepository;

    public List<TrimSelectionResponse> findAllTrims(String carTypeName) {
        List<Long> carTypeIds = carTypeRepository.findByName(carTypeName);
        if (carTypeIds.isEmpty()) {
            throw new InvalidCarException(INVALID_CAR);
        }

        List<TrimDto> trims = trimRepository.findAll(carTypeIds.get(0));
        List<FunctionCategoryDto> categories = functionCategoryRepository.findAll();

        List<TrimSelectionResponse> trimDtos = new ArrayList<>();
        for (TrimDto trim : trims) {
            List<DefaultFunctionCategoryResponse> categoryDtos = new ArrayList<>();
            for (FunctionCategoryDto category : categories) {
                List<DefaultFunctionNameResponse> defaultFunctionDtos =
                        functionCategoryRepository.getDefaultOptions(trim.getTrimId(), category.getFunctionCategoryId());
                DefaultFunctionCategoryResponse defaultCategoryDto = DefaultFunctionCategoryResponse.createDefaultFunctionDto(category, defaultFunctionDtos);
                categoryDtos.add(defaultCategoryDto);
            }

            List<TrimThumbnailFunctionResponse> thumbnailFunctions = trimThumbnailFunctionRepository.findThumbnailFunctionByTrimId(trim.getTrimId());
            TrimSelectionResponse trimDto = TrimSelectionResponse.createDto(trim, categoryDtos, thumbnailFunctions);
            trimDtos.add(trimDto);
        }

        return trimDtos;
    }
}
