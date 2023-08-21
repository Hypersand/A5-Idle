package com.autoever.idle.domain.carType.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class CarTypeDto {
    private String carName;
    private Long carPrice;
    private String carImgUrl;
    private String logoImgUrl;

    //테스트 용도 생성자
    public CarTypeDto(String carName, Long carPrice, String carImgUrl, String logoImgUrl) {
        this.carName = carName;
        this.carPrice = carPrice;
        this.carImgUrl = carImgUrl;
        this.logoImgUrl = logoImgUrl;
    }
}
