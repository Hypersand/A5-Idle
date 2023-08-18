package com.autoever.idle.domain.exteriorColor.dto;

import lombok.Getter;

@Getter
public class CarExteriorImgDto {

    private String imgUrl;

    public CarExteriorImgDto(String imgUrl) {
        this.imgUrl = imgUrl;
    }
}
