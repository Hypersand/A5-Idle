package com.autoever.idle.domain.option.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class SelectedOptionDto {
    private Long optionId;
    private String optionName;
    private Long optionPrice;
    private String optionCategory;
    private String optionImgUrl;
    private String optionDescription;

    public SelectedOptionDto(Long optionId, String optionName, Long optionPrice, String optionCategory, String optionImgUrl, String optionDescription) {
        this.optionId = optionId;
        this.optionName = optionName;
        this.optionPrice = optionPrice;
        this.optionCategory = optionCategory;
        this.optionImgUrl = optionImgUrl;
        this.optionDescription = optionDescription;
    }
}
