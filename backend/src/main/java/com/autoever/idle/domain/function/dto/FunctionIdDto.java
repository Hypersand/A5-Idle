package com.autoever.idle.domain.function.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class FunctionIdDto {

    Long functionId;

    public FunctionIdDto(Long functionId) {
        this.functionId = functionId;
    }
}
