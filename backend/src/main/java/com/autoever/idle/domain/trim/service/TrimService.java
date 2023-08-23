package com.autoever.idle.domain.trim.service;

import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryResponse;
import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.category.functionCategory.repository.FunctionCategoryRepository;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorImgUrlDto;
import com.autoever.idle.domain.exteriorColor.dto.TrimThumbnailColorResponse;
import com.autoever.idle.domain.exteriorColor.repository.ExteriorColorRepository;
import com.autoever.idle.domain.function.dto.DefaultFunctionDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionNameResponse;
import com.autoever.idle.domain.interiorColor.dto.InteriorImgUrlDto;
import com.autoever.idle.domain.interiorColor.repository.InteriorColorRepository;
import com.autoever.idle.domain.trim.dto.TrimDto;
import com.autoever.idle.domain.trim.dto.TrimSelectionResponse;
import com.autoever.idle.domain.trim.repository.TrimRepository;
import com.autoever.idle.domain.trimThumbnailFunction.dto.TrimThumbnailFunctionResponse;
import com.autoever.idle.domain.trimThumbnailFunction.repository.TrimThumbnailFunctionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TrimService {

    private final TrimRepository trimRepository;
    private final FunctionCategoryRepository functionCategoryRepository;
    private final TrimThumbnailFunctionRepository trimThumbnailFunctionRepository;
    private final ExteriorColorRepository exteriorColorRepository;
    private final InteriorColorRepository interiorColorRepository;

    public List<TrimSelectionResponse> findAllTrims(String carTypeName) {
        List<TrimDto> trims = trimRepository.findAll(carTypeName);
        List<FunctionCategoryDto> categories = functionCategoryRepository.findAll();

        List<TrimSelectionResponse> trimDtos = new ArrayList<>();
        for (TrimDto trim : trims) {
            List<DefaultFunctionDto> defaultFunctionDtos = functionCategoryRepository.getDefaultOptionByTrimId(trim.getTrimId());
            List<DefaultFunctionCategoryResponse> categoryDtos = new ArrayList<>();
            int idx = 0;
            for (int categoryIdx = 0; categoryIdx < categories.size(); categoryIdx++) {
                FunctionCategoryDto category = categories.get(categoryIdx);
                List<DefaultFunctionNameResponse> functions = new ArrayList<>();
                for (int functionIdx = idx; functionIdx < defaultFunctionDtos.size(); functionIdx++) {
                    if (defaultFunctionDtos.get(functionIdx).getCategoryId() == category.getFunctionCategoryId()) {
                        functions.add(new DefaultFunctionNameResponse(defaultFunctionDtos.get(functionIdx).getName()));
                    } else {
                        idx = functionIdx + 1;
                        break;
                    }
                }
                categoryDtos.add(new DefaultFunctionCategoryResponse(category.getFunctionCategoryId(), category.getCategoryName(), functions));
            }

            List<TrimThumbnailFunctionResponse> thumbnailFunctions = trimThumbnailFunctionRepository.findThumbnailFunctionByTrimId(trim.getTrimId());
            List<ExteriorImgUrlDto> exteriorImgUrls = exteriorColorRepository.findExteriorColorImgUrlsByTrimId(trim.getTrimId());
            List<InteriorImgUrlDto> interiorImgUrls = interiorColorRepository.findInteriorColorImgUrlsByTrimId(trim.getTrimId());
            TrimThumbnailColorResponse colors = new TrimThumbnailColorResponse(exteriorImgUrls, interiorImgUrls);
            TrimSelectionResponse trimDto = new TrimSelectionResponse(
                    trim,
                    categoryDtos,
                    thumbnailFunctions,
                    colors
            );
            trimDtos.add(trimDto);
        }
        return trimDtos;
    }
}
