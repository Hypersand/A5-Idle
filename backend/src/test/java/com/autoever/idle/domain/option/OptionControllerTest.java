package com.autoever.idle.domain.option;

import com.autoever.idle.domain.function.dto.FunctionDto;
import com.autoever.idle.domain.option.dto.OptionFunctionsDto;
import com.autoever.idle.domain.option.dto.OptionRequest;
import com.autoever.idle.global.exception.GlobalExceptionHandler;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@ExtendWith(MockitoExtension.class)
@DisplayName("Option Controller Test")
class OptionControllerTest {

    @Mock
    private OptionService optionService;
    @InjectMocks
    private OptionController optionController;
    private MockMvc mockMvc;
    private ObjectMapper objectMapper = new ObjectMapper();
    private List<OptionFunctionsDto> optionFunctionsDtoList = new ArrayList<>();

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(optionController)
                .setControllerAdvice(new GlobalExceptionHandler())
                .build();

        List<FunctionDto> functionDtoList = new ArrayList<>();
        functionDtoList.add(new FunctionDto(
                119L,
                "러기지 프로텍션 매트",
                "-",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/112-1.jpg",
                null));


        OptionFunctionsDto optionFunctionsDto = new OptionFunctionsDto(
                8L,
                "프로텍션 매트 패키지 I",
                250000L,
                "구매자 10%가 선택",
                "흠집없이 내 차에 짐을 싣고 싶다면?\n프로텍션 매트 패기지1로 흠집 걱정 없이 짐을 실어보세요.",
                "차량 보호",
                "false",
                functionDtoList
        );
        optionFunctionsDtoList.add(optionFunctionsDto);
    }

    @Test
    @DisplayName("추가 옵션 선택 페이지 API를 정상적으로 호출한다")
    void getOptionFunctions() throws Exception {
        //given
        OptionRequest optionRequest = new OptionRequest(1L, List.of(1L, 15L), 1L);
        given(optionService.getOptionFunctions(any())).willReturn(optionFunctionsDtoList);

        //when
        ResultActions resultActions = mockMvc.perform(post("/trims/add/options")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(optionRequest)))
                .andDo(print());

        //then
        resultActions.andExpect(status().isOk());
        resultActions.andExpect(content().contentType(MediaType.APPLICATION_JSON));
        resultActions.andExpect(content().json(objectMapper.writeValueAsString(optionFunctionsDtoList)));
    }


}