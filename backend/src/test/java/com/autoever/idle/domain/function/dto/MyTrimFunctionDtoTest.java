package com.autoever.idle.domain.function.dto;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;

class MyTrimFunctionDtoTest {


    @Test
    @DisplayName("MyTrimFunctionDto equals 테스트")
    void equal(){
        MyTrimFunctionDto myTrimFunctionDto2 = new MyTrimFunctionDto(1,"냉온장 컵홀더", "-","...",2);
        MyTrimFunctionDto myTrimFunctionDto1 = new MyTrimFunctionDto(1,"냉온장 컵홀더", "-","...",3);

        assertThat(myTrimFunctionDto1).isEqualTo(myTrimFunctionDto2);

    }
}