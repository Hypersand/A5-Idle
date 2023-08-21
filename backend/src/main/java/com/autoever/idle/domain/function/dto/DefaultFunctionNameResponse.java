package com.autoever.idle.domain.function.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DefaultFunctionNameResponse {

    private String name;

    public DefaultFunctionNameResponse(String functionName) {
        this.name = functionName;
    }
}
