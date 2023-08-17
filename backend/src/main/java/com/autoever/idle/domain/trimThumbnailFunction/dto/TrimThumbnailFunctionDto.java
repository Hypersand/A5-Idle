package com.autoever.idle.domain.trimThumbnailFunction.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class TrimThumbnailFunctionDto {

    private Long trimThumbnailFunctionId;
    private String name;
    private String description;
    private int widthPixel;
    private int heightPixel;

    public TrimThumbnailFunctionDto() {
    }

    public TrimThumbnailFunctionDto(Long trimThumbnailFunctionId, String name, String description, int widthPixel, int heightPixel) {
        this.trimThumbnailFunctionId = trimThumbnailFunctionId;
        this.name = name;
        this.description = description;
        this.widthPixel = widthPixel;
        this.heightPixel = heightPixel;
    }
}
