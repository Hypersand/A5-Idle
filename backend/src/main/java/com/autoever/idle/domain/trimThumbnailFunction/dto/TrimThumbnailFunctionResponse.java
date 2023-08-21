package com.autoever.idle.domain.trimThumbnailFunction.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class TrimThumbnailFunctionResponse {

    private Long trimThumbnailFunctionId;
    private String name;
    private String description;
    private int widthPixel;
    private int heightPixel;

    public TrimThumbnailFunctionResponse(Long trimThumbnailFunctionId, String name, String description, int widthPixel, int heightPixel) {
        this.trimThumbnailFunctionId = trimThumbnailFunctionId;
        this.name = name;
        this.description = description;
        this.widthPixel = widthPixel;
        this.heightPixel = heightPixel;
    }
}
