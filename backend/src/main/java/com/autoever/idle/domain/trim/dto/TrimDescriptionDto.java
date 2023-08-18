package com.autoever.idle.domain.trim.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TrimDescriptionDto {

    private String trimDescription;

    public TrimDescriptionDto() {
    }

    public TrimDescriptionDto(String trimDescription) {
        this.trimDescription = trimDescription;
    }
}
