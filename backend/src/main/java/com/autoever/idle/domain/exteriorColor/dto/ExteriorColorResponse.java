package com.autoever.idle.domain.exteriorColor.dto;

import com.autoever.idle.util.PurchaseRateUtil;
import lombok.Getter;

import java.util.List;

@Getter
public class ExteriorColorResponse {

    private Long exteriorId;
    private String exteriorName;
    private int exteriorPrice;
    private String exteriorImgUrl;
    private String exteriorPurchaseRate;
    private List<CarExteriorImgDto> carImgUrls;

    public ExteriorColorResponse(ExteriorColorDto color, List<CarExteriorImgDto> images) {
        this.exteriorId = color.getExteriorId();
        this.exteriorName = color.getExteriorName();
        this.exteriorPrice = color.getExteriorPrice();
        this.exteriorImgUrl = color.getExteriorImgUrl();
        this.exteriorPurchaseRate = color.getExteriorPurchaseRate();
        this.carImgUrls = images;
    }
}
