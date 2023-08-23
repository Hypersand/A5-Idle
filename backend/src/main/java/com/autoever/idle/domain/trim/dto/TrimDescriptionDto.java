package com.autoever.idle.domain.trim.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TrimDescriptionDto {

    private String trimDescription;

    public TrimDescriptionDto(String trimDescription) {
        this.trimDescription = trimDescription;
    }
}
