package com.autoever.idle.domain.exteriorColor.dto;

import com.autoever.idle.util.PurchaseRateUtil;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ExteriorColorDto {

    private Long exteriorId;
    private String exteriorName;
    private int exteriorPrice;
    private String exteriorImgUrl;
    private String  exteriorPurchaseRate;

    public ExteriorColorDto(Long exteriorId, String exteriorName, int exteriorPrice, String exteriorImgUrl, String exteriorPurchaseRate) {
        this.exteriorId = exteriorId;
        this.exteriorName = exteriorName;
        this.exteriorPrice = exteriorPrice;
        this.exteriorImgUrl = exteriorImgUrl;
        this.exteriorPurchaseRate = exteriorPurchaseRate;
    }

    public void setExteriorPurchaseRate(int exteriorPurchaseRate) {
        this.exteriorPurchaseRate = PurchaseRateUtil.setPurchaseRate(exteriorPurchaseRate);
    }
}
