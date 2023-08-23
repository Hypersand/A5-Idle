package com.autoever.idle.domain.interiorColor.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class InteriorColorResponse {

    private List<InteriorColorDto> carInteriorColors;

    public InteriorColorResponse(List<InteriorColorDto> carInteriorColors) {
        this.carInteriorColors = carInteriorColors;
    }
}
