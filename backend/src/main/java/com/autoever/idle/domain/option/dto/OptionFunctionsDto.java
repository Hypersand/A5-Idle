package com.autoever.idle.domain.option.dto;

import com.autoever.idle.domain.function.dto.FunctionDto;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class OptionFunctionsDto {
    private Long optionId;
    private String optionName;
    private Long optionPrice;
    private String optionPurchaseRate;
    private String optionDescription;
    private String optionCategory;
    private String optionCanSelect = "true";
    private List<FunctionDto> functions;

    public OptionFunctionsDto(Long optionId, String optionName, Long optionPrice,
                              String optionPurchaseRate, String optionDescription,
                              String optionCategory, String optionCanSelect, List<FunctionDto> functions) {
        this.optionId = optionId;
        this.optionName = optionName;
        this.optionPrice = optionPrice;
        this.optionPurchaseRate = optionPurchaseRate;
        this.optionDescription = optionDescription;
        this.optionCategory = optionCategory;
        this.optionCanSelect = optionCanSelect;
        this.functions = functions;
    }

    public static OptionFunctionsDto create(OptionDto optionDto, List<FunctionDto> functions) {
        return new OptionFunctionsDto(
                optionDto.getOptionId(),
                optionDto.getOptionName(),
                optionDto.getOptionPrice(),
                optionDto.getOptionPurchaseRate(),
                optionDto.getOptionDescription(),
                optionDto.getOptionCategory(),
                optionDto.getOptionCanSelect(),
                functions
        );
    }
}
