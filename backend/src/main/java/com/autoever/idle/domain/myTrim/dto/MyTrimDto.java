package com.autoever.idle.domain.myTrim.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MyTrimDto {

    private String name;
    private Boolean isDefault;

    //테스트 용도
    public MyTrimDto(String name, Boolean isDefault) {
        this.name = name;
        this.isDefault = isDefault;
    }
}
