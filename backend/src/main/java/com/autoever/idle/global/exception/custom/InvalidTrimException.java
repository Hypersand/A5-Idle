package com.autoever.idle.global.exception.custom;

import com.autoever.idle.global.exception.ErrorCode;
import lombok.Getter;

@Getter
public class InvalidTrimException extends IllegalArgumentException {

    private final ErrorCode errorCode;

    public InvalidTrimException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }
}
