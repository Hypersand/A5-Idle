package com.autoever.idle.domain.myTrim.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.Map;

@Getter
@NoArgsConstructor
public class MyTrimSubmitReqDto {

    private Long trimId;
    private List<Map<String, Long>> selectFunctions;

    public MyTrimSubmitReqDto(Long trimId, List<Map<String, Long>> selectFunctions) {
        this.trimId = trimId;
        this.selectFunctions = selectFunctions;
    }
}
