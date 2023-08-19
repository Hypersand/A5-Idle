package com.autoever.idle.domain.carType.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CarTypeDto {
    private String carName;
    private Long carPrice;
    private String carImgUrl;
    private String logoImgUrl;

}
