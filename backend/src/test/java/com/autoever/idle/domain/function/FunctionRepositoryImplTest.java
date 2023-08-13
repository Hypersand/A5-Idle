package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.AdditionalFunctionBillDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@ExtendWith(SoftAssertionsExtension.class)
class FunctionRepositoryImplTest {

    @Autowired
    FunctionRepository functionRepository;
    @InjectSoftAssertions
    private SoftAssertions softAssertions;

    @Test
    @DisplayName("내게 맞는 트림 찾기에 들어갈 기능 찾는 메소드")
    void findMyTrimFunction() {
        List<MyTrimFunctionDto> myTrimFunctions = functionRepository.findMyTrimFunctions();

        assertThat(myTrimFunctions.size()).isEqualTo(25);
    }

    @Test
    @DisplayName("기능 id 목록을 통해 해당 기능의 카테고리 이름과 정보를 반환한다")
    void findAdditonalFunctions() {
        //given
        List<Long> additionalFunctionIds = List.of(1L, 2L);

        //when
        List<AdditionalFunctionBillDto> additonalFunctions = functionRepository.findAdditonalFunctions(additionalFunctionIds);

        //then
        softAssertions.assertThat(additonalFunctions.size()).isEqualTo(2);
        softAssertions.assertThat(additonalFunctions.get(0).getFunctionId()).isEqualTo(1L);
        softAssertions.assertThat(additonalFunctions.get(1).getFunctionId()).isEqualTo(2L);
        softAssertions.assertThat(additonalFunctions.get(0).getFunctionCategory()).isEqualTo("파워트레인/성능");
    }
}