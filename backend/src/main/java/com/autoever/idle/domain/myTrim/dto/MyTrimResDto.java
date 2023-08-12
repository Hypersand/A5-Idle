package com.autoever.idle.domain.myTrim.dto;

import lombok.Getter;
import lombok.Setter;

@Setter
@Getter
public class MyTrimResDto {

    private String name;
    private Boolean isDefault;
    private Boolean selectPossible;

    public MyTrimResDto(String name, Boolean isDefault, Boolean selectPossible) {
        this.name = name;
        this.isDefault = isDefault;
        this.selectPossible = selectPossible;
    }
}
