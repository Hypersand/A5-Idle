package com.autoever.idle.global.exception.custom;

import com.autoever.idle.global.exception.ErrorCode;
import lombok.Getter;

@Getter
public class InvalidCarException extends IllegalArgumentException {
    private final ErrorCode errorCode;

    public InvalidCarException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }
}
