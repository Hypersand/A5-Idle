package com.autoever.idle.domain.trim.dto;

import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryResponse;
import com.autoever.idle.domain.exteriorColor.dto.TrimThumbnailColorResponse;
import com.autoever.idle.domain.trimThumbnailFunction.dto.TrimThumbnailFunctionResponse;
import lombok.Builder;
import lombok.Getter;

import java.util.List;

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

    public TrimSelectionResponse(Long trimId, String name, String description,
                                 int price, String imgUrl, String purchaseRate,
                                 List<DefaultFunctionCategoryResponse> defaultFunctions,
                                 List<TrimThumbnailFunctionResponse> thumbnailFunctions,
                                 TrimThumbnailColorResponse colors) {
        this.trimId = trimId;
        this.name = name;
        this.description = description;
        this.price = price;
        this.imgUrl = imgUrl;
        this.purchaseRate = purchaseRate;
        this.defaultFunctions = defaultFunctions;
        this.thumbnailFunctions = thumbnailFunctions;
        this.colors = colors;
    }
}
