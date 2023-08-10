package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class FunctionRepositoryImplTest {


    @Autowired
    FunctionRepository functionRepository;

    @Test
    @DisplayName("내게 맞는 트림 찾기에 들어갈 기능 찾는 메소드")
    void findMyTrimFunction(){
        List<MyTrimFunctionDto> myTrimFunctions = functionRepository.findMyTrimFunctions();

        assertThat(myTrimFunctions.size()).isEqualTo(24);
    }
}