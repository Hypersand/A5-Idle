package com.autoever.idle.domain.exteriorColor.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ExteriorImgUrlDto {

    private String exteriorImgUrl;

    public ExteriorImgUrlDto(String exteriorImgUrl) {
        this.exteriorImgUrl = exteriorImgUrl;
    }
}
