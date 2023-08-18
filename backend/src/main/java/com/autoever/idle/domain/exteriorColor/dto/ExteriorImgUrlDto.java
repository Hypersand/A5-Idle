package com.autoever.idle.domain.exteriorColor.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ExteriorImgUrlDto {

    private String exteriorImgUrl;

    public ExteriorImgUrlDto() {
    }

    public ExteriorImgUrlDto(String exteriorImgUrl) {
        this.exteriorImgUrl = exteriorImgUrl;
    }
}
