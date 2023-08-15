package com.autoever.idle.domain.interiorColor.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Getter
@Builder
public class InteriorColorResDto {

    private List<InteriorColorDto> carInteriorColors;

    public static InteriorColorResDto createInteriorColorDto(List<InteriorColorDto> carInteriorColors) {
        return InteriorColorResDto.builder()
                .carInteriorColors(carInteriorColors)
                .build();
    }
}
