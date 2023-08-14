package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.FunctionIdDto;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@ExtendWith(SoftAssertionsExtension.class)
class TrimFunctionRepositoryImplTest {

    @InjectSoftAssertions
    private SoftAssertions softly;

    @Autowired
    TrimFunctionRepository trimFunctionRepository;

    @Test
    @DisplayName("트림의 기본 기능인지 확인 테스트")
    void checkDefaultFunction() {
        String TRUE = trimFunctionRepository.checkDefaultFunction(1L, 1L);
        String FALSE = trimFunctionRepository.checkDefaultFunction(1L, 140L);
        String NULL = trimFunctionRepository.checkDefaultFunction(1L, 101L);

        softly.assertThat(TRUE).isEqualTo("TRUE");
        softly.assertThat(FALSE).isEqualTo("FALSE");
        softly.assertThat(NULL).isNull();
    }

    @Test
    @DisplayName("해당 트림에서 기능이 사용 가능한지 확인하는 테스트")
    void checkNonSelectableFunctionAtTrim(){
        FunctionIdDto NULL = trimFunctionRepository.checkNonSelectableFunctionAtTrim(1L, 17L);
        FunctionIdDto functionIdDto = trimFunctionRepository.checkNonSelectableFunctionAtTrim(1L, 51L);

        softly.assertThat(NULL).isNull();
        softly.assertThat(functionIdDto.getFunctionId()).isEqualTo(51L);
    }
}