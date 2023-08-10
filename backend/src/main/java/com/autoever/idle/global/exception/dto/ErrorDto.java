package com.autoever.idle.global.exception.dto;

import lombok.Getter;

@Getter
public class ErrorDto {

    private int status;
    private String message;

    public ErrorDto(int status, String message) {
        this.status = status;
        this.message = message;
    }
}
