package com.autoever.idle.domain.bill.service;

import com.autoever.idle.domain.bill.dto.BillRequest;
import com.autoever.idle.domain.bill.dto.BillResponse;
import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryResponse;
import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.category.functionCategory.repository.FunctionCategoryRepository;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.exteriorColor.repository.ExteriorColorRepository;
import com.autoever.idle.domain.function.dto.DefaultFunctionNameResponse;
import com.autoever.idle.domain.interiorColor.dto.InteriorBillDto;
import com.autoever.idle.domain.interiorColor.repository.InteriorColorRepository;
import com.autoever.idle.domain.option.dto.SelectedOptionDto;
import com.autoever.idle.domain.option.repository.OptionRepository;
import com.autoever.idle.domain.trim.dto.TrimDescriptionDto;
import com.autoever.idle.domain.trim.repository.TrimRepository;
import com.autoever.idle.global.exception.ErrorCode;
import com.autoever.idle.global.exception.custom.InvalidExteriorException;
import com.autoever.idle.global.exception.custom.InvalidInteriorException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class BillService {

    private final TrimRepository trimRepository;
    private final ExteriorColorRepository exteriorColorRepository;
    private final InteriorColorRepository interiorColorRepository;
    private final OptionRepository optionRepository;
    private final FunctionCategoryRepository functionCategoryRepository;


    public BillResponse getResultBill(BillRequest billRequest) {

        TrimDescriptionDto trimDescriptionDto = trimRepository.findByTrimId(billRequest.getTrimId());
        String trimDescription = trimDescriptionDto.getTrimDescription();

        ExteriorBillDto exteriorBillDto = exteriorColorRepository.findExteriorBill(billRequest.getExteriorId())
                .orElseThrow(() -> new InvalidExteriorException(ErrorCode.INVALID_EXTERIOR));
        InteriorBillDto interiorBillDto = interiorColorRepository.findInteriorBill(billRequest.getInteriorId())
                .orElseThrow(() -> new InvalidInteriorException(ErrorCode.INVALID_INTERIOR));

        List<SelectedOptionDto> selectedOptions;

        if (billRequest.getSelectedOptionIds().isEmpty()) {
            selectedOptions = new ArrayList<>();
        } else {
            selectedOptions = optionRepository.findSelectedOptions(billRequest.getSelectedOptionIds());
        }

        List<FunctionCategoryDto> categories = functionCategoryRepository.findAll();
        List<DefaultFunctionCategoryResponse> categoryDtos = new ArrayList<>();

        for (FunctionCategoryDto category : categories) {
            List<DefaultFunctionNameResponse> defaultFunctionDtos =
                    functionCategoryRepository.getDefaultOptions(billRequest.getTrimId(), category.getFunctionCategoryId());
            DefaultFunctionCategoryResponse defaultCategoryDto = DefaultFunctionCategoryResponse.createDefaultFunctionDto(category, defaultFunctionDtos);
            categoryDtos.add(defaultCategoryDto);
        }

        return new BillResponse(trimDescription, exteriorBillDto, interiorBillDto, selectedOptions, categoryDtos);
    }
}
