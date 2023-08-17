package com.autoever.idle.domain.function.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class FunctionIdResponse {

    Long functionId;

    public FunctionIdResponse(Long functionId) {
        this.functionId = functionId;
    }
}
