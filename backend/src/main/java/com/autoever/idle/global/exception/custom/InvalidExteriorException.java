package com.autoever.idle.global.exception.custom;

import com.autoever.idle.global.exception.ErrorCode;
import lombok.Getter;

@Getter
public class InvalidExteriorException extends IllegalArgumentException {
    private ErrorCode errorCode;

    public InvalidExteriorException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }
}
