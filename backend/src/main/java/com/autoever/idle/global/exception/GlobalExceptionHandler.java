package com.autoever.idle.global.exception;

import com.autoever.idle.global.exception.custom.InvalidCarException;
import com.autoever.idle.global.exception.custom.InvalidDetailModelException;
import com.autoever.idle.global.exception.custom.InvalidLocationException;
import com.autoever.idle.global.exception.custom.*;
import com.autoever.idle.global.exception.dto.ErrorDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler({InvalidCarException.class})
    protected ResponseEntity<ErrorDto> handleInvalidCarException(InvalidCarException e) {
        return ResponseEntity
                .badRequest()
                .body(new ErrorDto(e.getErrorCode().getStatus(), e.getErrorCode().getMessage()));
    }

    @ExceptionHandler({InvalidLocationException.class})
    protected ResponseEntity<ErrorDto> handleInvalidLocationException(InvalidLocationException e) {
        return ResponseEntity
                .badRequest()
                .body(new ErrorDto(e.getErrorCode().getStatus(), e.getErrorCode().getMessage()));
    }

    @ExceptionHandler({InvalidDetailModelException.class})
    protected ResponseEntity<ErrorDto> handleInvalidDetailModelException(InvalidDetailModelException e) {
        return ResponseEntity
                .badRequest()
                .body(new ErrorDto(e.getErrorCode().getStatus(), e.getErrorCode().getMessage()));
    }

    @ExceptionHandler({ InvalidExteriorException.class })
    protected ResponseEntity<ErrorDto> handleInvalidExteriorException(InvalidExteriorException e) {
        return ResponseEntity
                .badRequest()
                .body(new ErrorDto(e.getErrorCode().getStatus(), e.getErrorCode().getMessage()));
    }

    @ExceptionHandler({InvalidFunctionException.class})
    protected ResponseEntity<ErrorDto> handleInvalidFunctionException(InvalidFunctionException e) {
        return ResponseEntity
                .badRequest()
                .body(new ErrorDto(e.getErrorCode().getStatus(), e.getErrorCode().getMessage()));
    }

    @ExceptionHandler({InvalidInteriorException.class })
    protected ResponseEntity<ErrorDto> handleInvalidInteriorException(InvalidInteriorException e) {
        return ResponseEntity
                .badRequest()
                .body(new ErrorDto(e.getErrorCode().getStatus(), e.getErrorCode().getMessage()));
    }

    @ExceptionHandler({InvalidMyTrimFunctionException.class})
    protected ResponseEntity<ErrorDto> handleInvalidMyTrimFunctionException(InvalidMyTrimFunctionException e) {
        return ResponseEntity
                .badRequest()
                .body(new ErrorDto(e.getErrorCode().getStatus(), e.getErrorCode().getMessage()));
    }

    @ExceptionHandler({InvalidTrimFunctionException.class})
    protected ResponseEntity<ErrorDto> handleInvalidTrimFunctionException(InvalidTrimFunctionException e) {
        return ResponseEntity
                .badRequest()
                .body(new ErrorDto(e.getErrorCode().getStatus(), e.getErrorCode().getMessage()));
    }
}
