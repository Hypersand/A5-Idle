package com.autoever.idle.global.exception.custom;

import com.autoever.idle.global.exception.ErrorCode;
import lombok.Getter;

@Getter
public class InvalidTrimFunctionException extends IllegalArgumentException {
    private final ErrorCode errorCode;

    public InvalidTrimFunctionException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }
}
