package com.autoever.idle.domain.myTrim.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class MyTrimSubmitRequest {

    private Long trimId;
    private List<Long> selectFunctions;

    //테스트 용도 생성자
    public MyTrimSubmitRequest(Long trimId, List<Long> selectFunctions) {
        this.trimId = trimId;
        this.selectFunctions = selectFunctions;
    }
}
