package com.autoever.idle.domain.detailModel.dto;

import lombok.Getter;

@Getter
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
}
