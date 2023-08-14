package com.autoever.idle.global.exception;

import lombok.Getter;

@Getter
public enum ErrorCode {
    INVALID_CAR(400, "존재하지 않는 차종입니다"),
    INVALID_DETAIL_MODEL(400, "존재하지 않는 모델입니다"),
    INVALID_LOCATION(400, "잘못된 위치 좌표입니다"),
    INVALID_EXTERIOR(400, "존재하지 않는 외장 색상입니다."),
    INVALID_INTERIOR(400, "존재하지 않는 내장 색상입니다."),
    INVALID_FUNCTION(400, "존재하지 않는 기능입니다"),
    INVALID_MYTRIM_FUNCTION(400,"'내게 맞는 트림 찾기'의 선택지가 아닙니다"),
    INVALID_TRIM_FUNCTION(400, "해당 트림에 존재하지 않는 기능입니다");

    private final int status;
    private final String message;

    ErrorCode(int status, String message) {
        this.status = status;
        this.message = message;
    }

}
