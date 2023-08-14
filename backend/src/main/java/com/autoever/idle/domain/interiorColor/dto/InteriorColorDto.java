package com.autoever.idle.domain.interiorColor.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class InteriorColorDto {

    private Long interiorId;
    private String interiorName;
    private int interiorPrice;
    private String interiorImgUrl;
    private String carInteriorImgUrl;
    private String interiorPurchaseRate;

    protected InteriorColorDto() {
    }

    public InteriorColorDto(Long interiorId, String interiorName, int interiorPrice, String interiorImgUrl, String carInteriorImgUrl, String interiorPurchaseRate) {
        this.interiorId = interiorId;
        this.interiorName = interiorName;
        this.interiorPrice = interiorPrice;
        this.interiorImgUrl = interiorImgUrl;
        this.carInteriorImgUrl = carInteriorImgUrl;
        this.interiorPurchaseRate = interiorPurchaseRate;
    }
}
