package com.autoever.idle.domain.exteriorColor.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class ExteriorBillDto {
    private Long exteriorId;
    private String exteriorImgUrl;

    public ExteriorBillDto(Long exteriorId, String exteriorImgUrl) {
        this.exteriorId = exteriorId;
        this.exteriorImgUrl = exteriorImgUrl;
    }
}
