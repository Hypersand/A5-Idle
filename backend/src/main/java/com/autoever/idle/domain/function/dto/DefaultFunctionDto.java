package com.autoever.idle.domain.function.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class DefaultFunctionDto {

    private Long categoryId;
    private String name;

    public DefaultFunctionDto(Long categoryId, String name) {
        this.categoryId = categoryId;
        this.name = name;
    }
}
