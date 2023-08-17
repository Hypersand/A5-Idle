package com.autoever.idle.domain.function.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AdditionalFunctionBillDto {
    private Long functionId;
    private String functionCategory;
    private String functionImgUrl;
    private String functionDescription;

    public AdditionalFunctionBillDto(Long functionId, String functionCategory, String functionImgUrl, String functionDescription) {
        this.functionId = functionId;
        this.functionCategory = functionCategory;
        this.functionImgUrl = functionImgUrl;
        this.functionDescription = functionDescription;
    }
}
