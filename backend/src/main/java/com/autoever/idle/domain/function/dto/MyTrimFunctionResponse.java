package com.autoever.idle.domain.function.dto;

import lombok.Getter;

@Getter
public class MyTrimFunctionResponse {

    private final int functionId;
    private final String name;
    private final String description;
    private final String imgUrl;

    public MyTrimFunctionResponse(int functionId, String name, String description, String imgUrl) {
        this.functionId = functionId;
        this.name = name;
        this.description = description;
        this.imgUrl = imgUrl;
    }

    public static MyTrimFunctionResponse createDto(MyTrimFunctionDto myTrimFunctionDto) {
        return new MyTrimFunctionResponse(myTrimFunctionDto.getFunctionId(), myTrimFunctionDto.getName(),
                myTrimFunctionDto.getDescription(),myTrimFunctionDto.getImgUrl());

    }
}
