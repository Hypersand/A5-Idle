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
public class OptionFunctionsResponse {
    private Long optionId;
    private String optionName;
    private Long optionPrice;
    private String optionPurchaseRate;
    private String optionDescription;
    private String optionCategory;
    private boolean optionCanSelect = true;
    private List<FunctionDto> functions;

    public OptionFunctionsResponse(Long optionId, String optionName, Long optionPrice,
                                   String optionPurchaseRate, String optionDescription,
                                   String optionCategory, boolean optionCanSelect, List<FunctionDto> functions) {
        this.optionId = optionId;
        this.optionName = optionName;
        this.optionPrice = optionPrice;
        this.optionPurchaseRate = optionPurchaseRate;
        this.optionDescription = optionDescription;
        this.optionCategory = optionCategory;
        this.optionCanSelect = optionCanSelect;
        this.functions = functions;
    }

    public static OptionFunctionsResponse create(OptionDto optionDto, List<FunctionDto> functions) {
        return new OptionFunctionsResponse(
                optionDto.getOptionId(),
                optionDto.getOptionName(),
                optionDto.getOptionPrice(),
                optionDto.getOptionPurchaseRate(),
                optionDto.getOptionDescription(),
                optionDto.getOptionCategory(),
                optionDto.isOptionCanSelect(),
                functions
        );
    }
}
