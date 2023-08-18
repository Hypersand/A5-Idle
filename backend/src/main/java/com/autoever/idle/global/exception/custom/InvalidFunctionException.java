package com.autoever.idle.global.exception.custom;

import com.autoever.idle.global.exception.ErrorCode;
import lombok.Getter;

@Getter
public class InvalidFunctionException extends IllegalArgumentException{
    private final ErrorCode errorCode;

    public InvalidFunctionException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }
}
