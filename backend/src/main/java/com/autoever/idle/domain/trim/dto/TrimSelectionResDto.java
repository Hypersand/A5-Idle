package com.autoever.idle.domain.trim.dto;

import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryResDto;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class TrimSelectionResDto {

    private Long trimId;
    private String name;
    private String description;
    private int price;
    private String imgUrl;
    private String purchaseRate;
    private List<DefaultFunctionCategoryResDto> defaultFunctions;

    public static TrimSelectionResDto createDto(TrimDto trim, List<DefaultFunctionCategoryResDto> functionCategoryDtos) {
        return TrimSelectionResDto.builder()
                .trimId(trim.getTrimId())
                .name(trim.getName())
                .description(trim.getDescription())
                .price(trim.getPrice())
                .imgUrl(trim.getImgUrl())
                .purchaseRate(trim.getPurchaseRate())
                .defaultFunctions(functionCategoryDtos)
                .build();
    }
}
