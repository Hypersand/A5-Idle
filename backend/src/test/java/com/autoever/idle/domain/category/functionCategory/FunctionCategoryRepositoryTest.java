package com.autoever.idle.domain.category.functionCategory;

import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionNameResDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionResDto;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@ExtendWith(SoftAssertionsExtension.class)
@DisplayName("Function Category Repository Test")
class FunctionCategoryRepositoryTest {

    @InjectSoftAssertions
    SoftAssertions softAssertions;

    @Autowired
    FunctionCategoryRepository functionCategoryRepository;

    @BeforeEach
    void beforeEach() {
        softAssertions = new SoftAssertions();
    }

    @Test
    @DisplayName("전체 옵션 카테고리(8개)를 반환한다")
    void findAll() {
        List<FunctionCategoryDto> categories = functionCategoryRepository.findAll();

        softAssertions.assertThat(categories.size()).isEqualTo(8);
    }

    @Test
    @DisplayName("해당 트림과 카테고리의 기본 옵션을 반환한다.")
    void getDefaultOptions() {
        Long trimId = 1L;
        Long categoryId = 1L;

        List<DefaultFunctionNameResDto> defaultFunctions = functionCategoryRepository.getDefaultOptions(trimId, categoryId);

        softAssertions.assertThat(defaultFunctions.size()).isEqualTo(5);
    }

    @Test
    @DisplayName("기능 목록을 반환한다")
    void getDefaultOptionsByCategory() {
        Long trimId = 1L;
        Long categoryId = 1L;

        List<DefaultFunctionResDto> defaultOptionsDetail = functionCategoryRepository.getDefaultOptionsDetail(trimId, categoryId);

        softAssertions.assertThat(defaultOptionsDetail.size()).isEqualTo(8);
        softAssertions.assertThat(defaultOptionsDetail.get(0).getFunctionName()).isEqualTo("파워트레인/성능");
    }
}
