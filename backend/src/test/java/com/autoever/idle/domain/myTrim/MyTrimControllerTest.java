package com.autoever.idle.domain.myTrim;

import com.autoever.idle.domain.function.dto.MyTrimFunctionResDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimResDto;
import com.autoever.idle.domain.option.MyTrimOptionDto;
import com.autoever.idle.global.exception.GlobalExceptionHandler;
import org.json.JSONArray;
import org.json.JSONObject;
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
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@DisplayName("내게 맞는 트림 찾기")
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
    @DisplayName("페이지 호출 API")
    void findAllMyTrimFunction() throws Exception {
        //given
        List<MyTrimFunctionResDto> myTrimFunctionResDtoList = new ArrayList<>();
        myTrimFunctionResDtoList.add(new MyTrimFunctionResDto(1, "기능1", "설명", "imgUrl1"));
        myTrimFunctionResDtoList.add(new MyTrimFunctionResDto(2, "기능2", "설명", "imgUrl2"));
        myTrimFunctionResDtoList.add(new MyTrimFunctionResDto(3, "기능3", "설명", "imgUrl3"));
        given(myTrimService.findMyTrimFunctions()).willReturn(myTrimFunctionResDtoList);

        //when
        ResultActions resultActions = mockMvc.perform(get("/trims/favorite"));

        //then
        resultActions.andExpect(status().isOk())
                .andExpect(jsonPath("$[0].name").value("기능1"))
                .andExpect(jsonPath("$[1].name").value("기능2"))
                .andExpect(jsonPath("$[2].name").value("기능3"))
                .andDo(print());
    }

    @Test
    @DisplayName("선택지 선택 API")
    void findTrimBySelectFunctions() throws Exception {
        //given
        JSONArray jsonArray = new JSONArray();
        jsonArray.put(new JSONObject().put("functionId", 109));
        List<MyTrimResDto> myTrimResDtoList = new ArrayList<>();
        myTrimResDtoList.add(MyTrimResDto.builder().name("Exclusive").isDefault(null).selectPossible(false).build());
        myTrimResDtoList.add(MyTrimResDto.builder().name("Le Blanc").isDefault(false).selectPossible(true).build());
        myTrimResDtoList.add(MyTrimResDto.builder().name("Prestige").isDefault(false).selectPossible(true).build());
        myTrimResDtoList.add(MyTrimResDto.builder().name("Calligraphy").isDefault(true).selectPossible(true).build());
        given(myTrimService.findTrimBySelectFunctions(anyList())).willReturn(myTrimResDtoList);

        //when
        ResultActions resultActions = mockMvc.perform(get("/trims/favorite/select/option")
                .contentType(MediaType.APPLICATION_JSON)
                .content(jsonArray.toString())
                .accept(MediaType.APPLICATION_JSON));

        //then
        resultActions.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$[0].isDefault").isEmpty())
                .andExpect(jsonPath("$[0].selectPossible").value(false))
                .andExpect(jsonPath("$[1].isDefault").value(false))
                .andExpect(jsonPath("$[1].selectPossible").value(true))
                .andExpect(jsonPath("$[2].isDefault").value(false))
                .andExpect(jsonPath("$[2].selectPossible").value(true))
                .andExpect(jsonPath("$[3].isDefault").value(true))
                .andExpect(jsonPath("$[3].selectPossible").value(true));
    }

    @Test
    @DisplayName("확인 API 테스트")
    void findOptionBySelectFunctions() throws Exception {
        //given
        JSONArray selectFunctions = new JSONArray();
        selectFunctions.put(new JSONObject().put("functionId", 109));
        JSONObject submitRequest = new JSONObject().put("trimId", 1);
        submitRequest.put("selectFunctions", selectFunctions);
        List<MyTrimOptionDto> myTrimOptionDtoList = new ArrayList<>();
        MyTrimOptionDto myTrimOptionDto = new MyTrimOptionDto(1L, "옵션 이름", 1000000L);
        myTrimOptionDtoList.add(myTrimOptionDto);
        given(myTrimService.findOptionBySelectFunctions(any())).willReturn(myTrimOptionDtoList);

        //when
        ResultActions resultActions = mockMvc.perform(get("/trims/favorite/submit")
                .content(submitRequest.toString())
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON));

        //then
        resultActions.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$[0].optionName").value("옵션 이름"));

    }
}