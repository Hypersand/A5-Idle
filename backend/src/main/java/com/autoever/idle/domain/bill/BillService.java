package com.autoever.idle.domain.bill;

import com.autoever.idle.domain.bill.dto.BillRequestDto;
import com.autoever.idle.domain.bill.dto.BillResponseDto;
import com.autoever.idle.domain.category.functionCategory.FunctionCategoryRepository;
import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryResDto;
import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.exteriorColor.ExteriorColorRepository;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionNameResDto;
import com.autoever.idle.domain.interiorColor.InteriorColorRepository;
import com.autoever.idle.domain.interiorColor.dto.InteriorBillDto;
import com.autoever.idle.domain.option.OptionRepository;
import com.autoever.idle.domain.option.dto.SelectedOptionDto;
import com.autoever.idle.domain.trim.TrimRepository;
import com.autoever.idle.domain.trim.dto.TrimDescriptionDto;
import com.autoever.idle.domain.trim.dto.TrimDto;
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


    public BillResponseDto getResultBill(BillRequestDto billRequestDto) {

        TrimDescriptionDto trimDescriptionDto = trimRepository.findByTrimId(billRequestDto.getTrimId());
        String trimDescription = trimDescriptionDto.getTrimDescription();

        ExteriorBillDto exteriorBillDto = exteriorColorRepository.findExteriorBill(billRequestDto.getExteriorId())
                .orElseThrow(() -> new InvalidExteriorException(ErrorCode.INVALID_EXTERIOR));
        InteriorBillDto interiorBillDto = interiorColorRepository.findInteriorBill(billRequestDto.getInteriorId())
                .orElseThrow(() -> new InvalidInteriorException(ErrorCode.INVALID_INTERIOR));

        List<SelectedOptionDto> selectedOptions;

        if (billRequestDto.getSelectedOptionIds().isEmpty()) {
            selectedOptions = new ArrayList<>();
        } else {
            selectedOptions = optionRepository.findSelectedOptions(billRequestDto.getSelectedOptionIds());
        }

        List<FunctionCategoryDto> categories = functionCategoryRepository.findAll();
        List<DefaultFunctionCategoryResDto> categoryDtos = new ArrayList<>();

        for (FunctionCategoryDto category : categories) {
            List<DefaultFunctionNameResDto> defaultFunctionDtos =
                    functionCategoryRepository.getDefaultOptions(billRequestDto.getTrimId(), category.getFunctionCategoryId());
            DefaultFunctionCategoryResDto defaultCategoryDto = DefaultFunctionCategoryResDto.createDefaultFunctionDto(category, defaultFunctionDtos);
            categoryDtos.add(defaultCategoryDto);
        }

        return new BillResponseDto(trimDescription, exteriorBillDto, interiorBillDto, selectedOptions, categoryDtos);
    }
}
