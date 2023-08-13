package com.autoever.idle.domain.myTrim.dto;

import lombok.Getter;

import java.util.List;
import java.util.Map;

@Getter
public class MyTrimSubmitReqDto {

    private Long trimId;
    private List<Map<String, Long>> selectFunctions;
}
