package com.autoever.idle.domain.exteriorColor.dto;

import lombok.Getter;

@Getter
public class ExteriorColorDto {

    private Long exteriorId;
    private String exteriorName;
    private int exteriorPrice;
    private String exteriorImgUrl;
    private String exteriorPurchaseRate;

    public ExteriorColorDto(Long exteriorId, String exteriorName, int exteriorPrice, String exteriorImgUrl, String exteriorPurchaseRate) {
        this.exteriorId = exteriorId;
        this.exteriorName = exteriorName;
        this.exteriorPrice = exteriorPrice;
        this.exteriorImgUrl = exteriorImgUrl;
        this.exteriorPurchaseRate = exteriorPurchaseRate;
    }
}
