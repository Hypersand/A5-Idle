package com.autoever.idle.domain.trim.dto;

import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryResponse;
import com.autoever.idle.domain.exteriorColor.dto.TrimThumbnailColorResponse;
import com.autoever.idle.domain.trimThumbnailFunction.dto.TrimThumbnailFunctionResponse;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class TrimSelectionResponse {

    private Long trimId;
    private String name;
    private String description;
    private int price;
    private String imgUrl;
    private String purchaseRate;
    private List<DefaultFunctionCategoryResponse> defaultFunctions;
    private List<TrimThumbnailFunctionResponse> thumbnailFunctions;
    private TrimThumbnailColorResponse colors;

    public static TrimSelectionResponse createDto(TrimDto trim, List<DefaultFunctionCategoryResponse> functionCategoryDtos, List<TrimThumbnailFunctionResponse> thumbnailFunctions, TrimThumbnailColorResponse colors) {
        return TrimSelectionResponse.builder()
                .trimId(trim.getTrimId())
                .name(trim.getName())
                .description(trim.getDescription())
                .price(trim.getPrice())
                .imgUrl(trim.getImgUrl())
                .purchaseRate(trim.getPurchaseRate())
                .defaultFunctions(functionCategoryDtos)
                .thumbnailFunctions(thumbnailFunctions)
                .colors(colors)
                .build();
    }
}
