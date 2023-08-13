package com.autoever.idle.domain.function.dto;

import lombok.Getter;

@Getter
public class DefaultFunctionNameResDto {

    private String name;

    public DefaultFunctionNameResDto(String functionName) {
        this.name = functionName;
    }
}
