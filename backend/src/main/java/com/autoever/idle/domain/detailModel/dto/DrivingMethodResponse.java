package com.autoever.idle.domain.detailModel.dto;

import com.autoever.idle.util.PurchaseRateUtil;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access =  AccessLevel.PROTECTED)
public class DrivingMethodResponse {
    private Long id;
    private String type;
    private int price;
    private String description;
    private String imgUrl;
    private String purchaseRate;

    public DrivingMethodResponse(Long id, String type, int price, String description, String imgUrl, String purchaseRate) {
        this.id = id;
        this.type = type;
        this.price = price;
        this.description = description;
        this.imgUrl = imgUrl;
        this.purchaseRate = purchaseRate;
    }

    public void setPurchaseRate(int purchaseRate) {
        this.purchaseRate = PurchaseRateUtil.setPurchaseRate(purchaseRate);
    }
}
