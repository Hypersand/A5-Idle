package com.autoever.idle.domain.interiorColor.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class InteriorColorResponse {

    private List<InteriorColorDto> carInteriorColors;

    public static InteriorColorResponse createInteriorColorDto(List<InteriorColorDto> carInteriorColors) {
        return InteriorColorResponse.builder()
                .carInteriorColors(carInteriorColors)
                .build();
    }
}
