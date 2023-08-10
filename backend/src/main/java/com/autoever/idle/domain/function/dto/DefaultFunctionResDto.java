package com.autoever.idle.domain.function.dto;

import lombok.Getter;

@Getter
public class DefaultFunctionResDto {

    private String name;

    public DefaultFunctionResDto(String functionName) {
        this.name = functionName;
    }
}
