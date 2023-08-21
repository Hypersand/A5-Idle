package com.autoever.idle.domain.trim.dto;

import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryResponse;
import com.autoever.idle.domain.exteriorColor.dto.TrimThumbnailColorResponse;
import com.autoever.idle.domain.trimThumbnailFunction.dto.TrimThumbnailFunctionResponse;
import lombok.*;

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

    public TrimSelectionResponse(TrimDto trim,
                                 List<DefaultFunctionCategoryResponse> defaultFunctions,
                                 List<TrimThumbnailFunctionResponse> thumbnailFunctions,
                                 TrimThumbnailColorResponse colors) {
        this.trimId = trim.getTrimId();
        this.name = trim.getName();
        this.description = trim.getDescription();
        this.price = trim.getPrice();
        this.imgUrl = trim.getImgUrl();
        this.purchaseRate = trim.getPurchaseRate();
        this.defaultFunctions = defaultFunctions;
        this.thumbnailFunctions = thumbnailFunctions;
        this.colors = colors;
    }
}
