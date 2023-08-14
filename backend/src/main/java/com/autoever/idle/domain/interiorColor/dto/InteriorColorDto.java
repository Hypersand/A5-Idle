package com.autoever.idle.domain.interiorColor.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class InteriorColorDto {

    private Long interiorId;
    private String interiorName;
    private int interiorPrice;
    private String interiorImgUrl;
    private String carInteriorImgUrl;
    private String interiorPurchaseRate;

}
