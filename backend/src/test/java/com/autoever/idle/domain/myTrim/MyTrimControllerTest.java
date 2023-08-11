package com.autoever.idle.domain.myTrim;

import com.autoever.idle.domain.function.dto.MyTrimFunctionResDto;
import com.autoever.idle.global.exception.GlobalExceptionHandler;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MockMvcBuilder;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@ExtendWith(MockitoExtension.class)
class MyTrimControllerTest {


    private MockMvc mockMvc;

    @Mock
    private MyTrimService myTrimService;

    @InjectMocks
    private MyTrimController myTrimController;

    @BeforeEach
    void init() {
        mockMvc = MockMvcBuilders.standaloneSetup(myTrimController)
                .setControllerAdvice(new GlobalExceptionHandler())
                .build();
    }

    @Test
    @DisplayName("내게 맞는 트림 찾기 페이지 호출 API")
    void findAllMyTrimFunction() throws Exception {
        //given
        List<MyTrimFunctionResDto> myTrimFunctionResDtoList = new ArrayList<>();
        myTrimFunctionResDtoList.add(new MyTrimFunctionResDto(1, "기능1", "설명", "imgUrl1"));
        myTrimFunctionResDtoList.add(new MyTrimFunctionResDto(2, "기능2", "설명", "imgUrl2"));
        myTrimFunctionResDtoList.add(new MyTrimFunctionResDto(3, "기능3", "설명", "imgUrl3"));
        given(myTrimService.findMyTrimFunctions()).willReturn(myTrimFunctionResDtoList);

        //when
        ResultActions resultActions = mockMvc.perform(MockMvcRequestBuilders.get("/trims/favorite"));

        //then
        resultActions.andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(jsonPath("$[0].name").value("기능1"))
                .andExpect(jsonPath("$[1].name").value("기능2"))
                .andExpect(jsonPath("$[2].name").value("기능3"))
                .andDo(print());
    }
}