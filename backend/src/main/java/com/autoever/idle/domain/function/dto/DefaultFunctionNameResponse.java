package com.autoever.idle.domain.function.dto;

import lombok.Getter;

@Getter
public class DefaultFunctionNameResponse {

    private String name;

    public DefaultFunctionNameResponse(String functionName) {
        this.name = functionName;
    }
}
