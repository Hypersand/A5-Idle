package com.autoever.idle.domain.interiorColor.dto;

import com.autoever.idle.util.PurchaseRateUtil;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class InteriorColorDto {

    private Long interiorId;
    private String interiorName;
    private int interiorPrice;
    private String interiorImgUrl;
    private String carInteriorImgUrl;
    private String interiorPurchaseRate;

    public InteriorColorDto(Long interiorId, String interiorName, int interiorPrice, String interiorImgUrl, String carInteriorImgUrl, String interiorPurchaseRate) {
        this.interiorId = interiorId;
        this.interiorName = interiorName;
        this.interiorPrice = interiorPrice;
        this.interiorImgUrl = interiorImgUrl;
        this.carInteriorImgUrl = carInteriorImgUrl;
        this.interiorPurchaseRate = interiorPurchaseRate;
    }

    public void setInteriorPurchaseRate(int interiorPurchaseRate) {
        this.interiorPurchaseRate = PurchaseRateUtil.setPurchaseRate(interiorPurchaseRate);
    }
}
