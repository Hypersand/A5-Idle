package com.autoever.idle.domain.function;

import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryNameResDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionResDto;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@WebMvcTest(FunctionController.class)
@ExtendWith(MockitoExtension.class)
@DisplayName("Function Controller Test")
class FunctionControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    @MockBean
    private FunctionService functionService;
    private List<DefaultFunctionCategoryNameResDto> defaultFunctionAndCategoryList = new ArrayList<>();
    private List<DefaultFunctionResDto> defaultFunctionList = new ArrayList<>();


    @BeforeEach
    void setUp() {
        DefaultFunctionResDto defaultFunctionResDto1 = new DefaultFunctionResDto(
                "HTRAC",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/127.jpg",
                "시시각각 변하는 주행환경에 맞춰 전 / 후 구동력을 능동적으로 배분함으로써 드라이빙의 즐거움을 선사합니다.");

        DefaultFunctionResDto defaultFunctionResDto2 = new DefaultFunctionResDto(
                "견인력(750kg → 2,000kg)",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/tractionpower_m.jpg",
                "-");

        defaultFunctionList.add(defaultFunctionResDto1);
        defaultFunctionList.add(defaultFunctionResDto2);
        defaultFunctionAndCategoryList.add(new DefaultFunctionCategoryNameResDto("파워트레인/성능", defaultFunctionList));
    }

    @Test
    @DisplayName("")
    void getAllDefaultFunctions() throws Exception {
        //given
        String requestJson = "{\"trimId\":\"1\"}";
        Long trimId = 1L;
        given(functionService.getAllDefaultFunctionsByCategory(trimId))
                .willReturn(defaultFunctionAndCategoryList);

        //when
        ResultActions resultActions =
                mockMvc.perform(get("/trims/default")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(requestJson))
                        .andDo(print());


        //then
        resultActions.andExpectAll(
                status().isOk(),
                content().contentType(MediaType.APPLICATION_JSON),
                content().json(objectMapper.writeValueAsString(defaultFunctionAndCategoryList)),
                jsonPath("$[0].categoryName").value("파워트레인/성능")
        );

    }


}