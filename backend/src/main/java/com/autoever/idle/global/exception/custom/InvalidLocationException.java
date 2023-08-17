package com.autoever.idle.global.exception.custom;

import com.autoever.idle.global.exception.ErrorCode;
import lombok.Getter;

@Getter
public class InvalidLocationException extends IllegalArgumentException{
    private final ErrorCode errorCode;

    public InvalidLocationException(ErrorCode errorCode) {
        this.errorCode = errorCode;
    }
}
