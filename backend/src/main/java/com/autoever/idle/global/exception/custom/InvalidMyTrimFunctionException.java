package com.autoever.idle.global.exception.custom;

import com.autoever.idle.global.exception.ErrorCode;
import lombok.Getter;

@Getter
public class InvalidMyTrimFunctionException extends IllegalArgumentException{
    private final ErrorCode errorCode;

    public InvalidMyTrimFunctionException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }
}
