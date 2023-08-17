package com.autoever.idle.domain.function;

import com.autoever.idle.domain.category.functionCategory.repository.FunctionCategoryRepository;
import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryNameResponse;
import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionResponse;
import com.autoever.idle.domain.function.service.FunctionService;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@ExtendWith(SoftAssertionsExtension.class)
@DisplayName("Function Service Test")
class FunctionServiceTest {

    @InjectSoftAssertions
    private SoftAssertions softAssertions;

    @Mock
    private FunctionCategoryRepository functionCategoryRepository;

    @InjectMocks
    private FunctionService functionService;
    private List<DefaultFunctionResponse> defaultFunctionList = new ArrayList<>();
    private List<FunctionCategoryDto> functionCategoryList = new ArrayList<>();


    @BeforeEach
    void setUp() {
        DefaultFunctionResponse defaultFunctionResponse1 = new DefaultFunctionResponse(
                "HTRAC",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/127.jpg",
                "시시각각 변하는 주행환경에 맞춰 전 / 후 구동력을 능동적으로 배분함으로써 드라이빙의 즐거움을 선사합니다.");

        DefaultFunctionResponse defaultFunctionResponse2 = new DefaultFunctionResponse(
                "견인력(750kg → 2,000kg)",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/tractionpower_m.jpg",
                "-");

        defaultFunctionList.add(defaultFunctionResponse1);
        defaultFunctionList.add(defaultFunctionResponse2);
        functionCategoryList.add(new FunctionCategoryDto(1L, "파워트레인/성능"));
    }


    @Test
    @DisplayName("카테고리 이름과 기능 목록을 반환한다")
    void getAllDefaultFunctionsByCategory() {
        //given
        Long trimId = 1L;

        //when
        when(functionCategoryRepository.findAll()).thenReturn(functionCategoryList);
        when(functionCategoryRepository.getDefaultOptionsDetail(any(), any())).thenReturn(defaultFunctionList);
        List<DefaultFunctionCategoryNameResponse> defaultFunctionsByCategory = functionService.getAllDefaultFunctionsByCategory(trimId);

        //then
        softAssertions.assertThat(defaultFunctionsByCategory.get(0).getCategoryName()).isEqualTo("파워트레인/성능");
        softAssertions.assertThat(defaultFunctionsByCategory.get(0).getFunctions().size()).isEqualTo(2);
        softAssertions.assertThat(defaultFunctionsByCategory.get(0).getFunctions().get(0).getFunctionName()).isEqualTo("HTRAC");
        softAssertions.assertThat(defaultFunctionsByCategory.get(0).getFunctions().get(1).getFunctionName()).isEqualTo("견인력(750kg → 2,000kg)");
    }

}