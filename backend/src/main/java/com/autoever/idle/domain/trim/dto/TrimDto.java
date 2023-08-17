package com.autoever.idle.domain.trim.dto;

import lombok.Getter;

@Getter
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
}
