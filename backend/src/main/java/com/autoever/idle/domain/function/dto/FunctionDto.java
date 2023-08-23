package com.autoever.idle.domain.function.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class FunctionDto {
    private Long functionId;
    private String functionName;
    private String functionDescription;
    private String functionImgUrl;
    private String wheelLogoImgUrl;

    //테스트 용도 생성자
    public FunctionDto(Long functionId, String functionName, String functionDescription, String functionImgUrl, String wheelLogoImgUrl) {
        this.functionId = functionId;
        this.functionName = functionName;
        this.functionDescription = functionDescription;
        this.functionImgUrl = functionImgUrl;
        this.wheelLogoImgUrl = wheelLogoImgUrl;
    }
}
