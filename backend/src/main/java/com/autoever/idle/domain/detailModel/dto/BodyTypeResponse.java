package com.autoever.idle.domain.detailModel.dto;

import com.autoever.idle.util.PurchaseRateUtil;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BodyTypeResponse {
    private Long id;
    private String type;
    private int price;
    private String description;
    private String purchaseRate;
    private String imgUrl;

    public BodyTypeResponse(Long id, String type, int price, String description, String purchaseRate, String imgUrl) {
        this.id = id;
        this.type = type;
        this.price = price;
        this.description = description;
        this.purchaseRate = purchaseRate;
        this.imgUrl = imgUrl;
    }

    public void setPurchaseRate(int purchaseRate) {
        this.purchaseRate = PurchaseRateUtil.setPurchaseRate(purchaseRate);
    }
}
