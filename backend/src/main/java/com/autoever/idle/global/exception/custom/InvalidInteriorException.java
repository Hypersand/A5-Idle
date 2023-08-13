package com.autoever.idle.global.exception.custom;

import com.autoever.idle.global.exception.ErrorCode;
import lombok.Getter;

@Getter
public class InvalidInteriorException extends IllegalArgumentException {
    private final ErrorCode errorCode;

    public InvalidInteriorException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }
}
