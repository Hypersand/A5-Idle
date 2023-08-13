package com.autoever.idle.domain.interiorColor;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class InteriorBillDto {
    private Long interiorId;
    private String interiorImgUrl;

    public InteriorBillDto(Long interiorId, String interiorImgUrl) {
        this.interiorId = interiorId;
        this.interiorImgUrl = interiorImgUrl;
    }
}
