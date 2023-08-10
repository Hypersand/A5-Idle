package com.autoever.idle.domain.function.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class MyTrimFunctionResDto {

    private int functionId;
    private String name;
    private String description;
    private String imgUrl;

    public MyTrimFunctionResDto(int functionId, String name, String description, String imgUrl) {
        this.functionId = functionId;
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
    }

    public static MyTrimFunctionResDto createDto(MyTrimFunctionDto myTrimFunctionDto) {
        return MyTrimFunctionResDto.builder()
                .functionId(myTrimFunctionDto.getFunctionId())
                .name(myTrimFunctionDto.getName())
                .description(myTrimFunctionDto.getDescription())
                .imgUrl(myTrimFunctionDto.getImgUrl())
                .build();
    }
}
