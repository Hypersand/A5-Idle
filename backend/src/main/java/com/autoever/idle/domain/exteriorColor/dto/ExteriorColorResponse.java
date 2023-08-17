package com.autoever.idle.domain.exteriorColor.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class ExteriorColorResponse {

    private Long exteriorId;
    private String exteriorName;
    private int exteriorPrice;
    private String exteriorImgUrl;
    private String exteriorPurchaseRate;
    private List<CarExteriorImgDto> carImgUrls;

    public static ExteriorColorResponse createExteriorColor(ExteriorColorDto color, List<CarExteriorImgDto> images) {
        return ExteriorColorResponse.builder()
                .exteriorId(color.getExteriorId())
                .exteriorName(color.getExteriorName())
                .exteriorPrice(color.getExteriorPrice())
                .exteriorImgUrl(color.getExteriorImgUrl())
                .exteriorPurchaseRate(color.getExteriorPurchaseRate())
                .carImgUrls(images)
                .build();
    }
}
