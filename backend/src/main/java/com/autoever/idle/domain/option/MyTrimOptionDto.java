package com.autoever.idle.domain.option;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@NoArgsConstructor
@Getter
public class MyTrimOptionDto {

    private Long optionId;
    private String optionName;
    private Long optionPrice;

    public MyTrimOptionDto(Long optionId, String optionName, Long optionPrice) {
        this.optionId = optionId;
        this.optionName = optionName;
        this.optionPrice = optionPrice;
    }
}
