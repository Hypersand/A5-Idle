package com.autoever.idle.domain.trim.dto;

import com.autoever.idle.util.PurchaseRateUtil;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TrimDto {

    private Long trimId;
    private String name;
    private int price;
    private String imgUrl;
    private String description;
    private String purchaseRate;

    public TrimDto(Long trimId, String name, int price, String imgUrl, String description, String purchaseRate) {
        this.trimId = trimId;
        this.name = name;
        this.price = price;
        this.imgUrl = imgUrl;
        this.description = description;
        this.purchaseRate = purchaseRate;
    }

    public void setPurchaseRate(int purchaseRate) {
        this.purchaseRate = PurchaseRateUtil.setPurchaseRate(purchaseRate);
    }
}
