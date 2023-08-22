package com.autoever.idle.domain.interiorColor.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class InteriorColorsImgUrlResponse {

    private List<String> interiorImgUrls;

    public InteriorColorsImgUrlResponse(List<String> interiorImgUrls) {
        this.interiorImgUrls = interiorImgUrls;
    }
}
