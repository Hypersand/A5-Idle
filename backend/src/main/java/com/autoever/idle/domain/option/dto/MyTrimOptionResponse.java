package com.autoever.idle.domain.option.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@NoArgsConstructor
@Getter
public class MyTrimOptionResponse {

    private Long optionId;
    private String optionName;
    private Long optionPrice;

    //테스트용도
    public MyTrimOptionResponse(Long optionId, String optionName, Long optionPrice) {
        this.optionId = optionId;
        this.optionName = optionName;
        this.optionPrice = optionPrice;
    }
}
