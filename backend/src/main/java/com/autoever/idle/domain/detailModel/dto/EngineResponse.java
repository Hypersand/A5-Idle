package com.autoever.idle.domain.detailModel.dto;

import com.autoever.idle.util.PurchaseRateUtil;
import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class EngineResponse {

    private Long id;
    private String type;
    private int price;
    private String description;
    private String purchaseRate;
    private String imgUrl;
    private int peakOutput;
    private double engineMaxTorque;
    private double minFuel;
    private double maxFuel;

    public EngineResponse(Long id, String type, int price, String description,
                          String purchaseRate, String imgUrl, int peakOutput,
                          double engineMaxTorque, double minFuel, double maxFuel) {
        this.id = id;
        this.type = type;
        this.price = price;
        this.description = description;
        this.purchaseRate = purchaseRate;
        this.imgUrl = imgUrl;
        this.peakOutput = peakOutput;
        this.engineMaxTorque = engineMaxTorque;
        this.minFuel = minFuel;
        this.maxFuel = maxFuel;
    }

    public void setPurchaseRate(int purchaseRate) {
        this.purchaseRate = PurchaseRateUtil.setPurchaseRate(purchaseRate);
    }
}
