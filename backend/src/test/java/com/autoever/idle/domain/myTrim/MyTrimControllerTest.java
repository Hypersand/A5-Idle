package com.autoever.idle.domain.myTrim;

import com.autoever.idle.domain.function.dto.FunctionIdResponse;
import com.autoever.idle.domain.function.dto.MyTrimFunctionResponse;
import com.autoever.idle.domain.myTrim.controller.MyTrimController;
import com.autoever.idle.domain.myTrim.dto.MyTrimResponse;
import com.autoever.idle.domain.myTrim.service.MyTrimService;
import com.autoever.idle.domain.option.dto.MyTrimOptionResponse;
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
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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
        List<MyTrimFunctionResponse> myTrimFunctionResponseList = new ArrayList<>();
        myTrimFunctionResponseList.add(new MyTrimFunctionResponse(1, "기능1", "설명", "imgUrl1"));
        myTrimFunctionResponseList.add(new MyTrimFunctionResponse(2, "기능2", "설명", "imgUrl2"));
        myTrimFunctionResponseList.add(new MyTrimFunctionResponse(3, "기능3", "설명", "imgUrl3"));
        given(myTrimService.findMyTrimFunctions()).willReturn(myTrimFunctionResponseList);

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

        LinkedMultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("functionId","101,17");
        List<MyTrimResponse> myTrimResponseList = new ArrayList<>();
        myTrimResponseList.add(new MyTrimResponse("Exclusive", null, false));
        myTrimResponseList.add(new MyTrimResponse("Le Blanc", false, true));
        myTrimResponseList.add(new MyTrimResponse("Prestige", false, true));
        myTrimResponseList.add(new MyTrimResponse("Calligraphy", true, true));
        given(myTrimService.findTrimBySelectFunctions(anyList())).willReturn(myTrimResponseList);

        //when
        ResultActions resultActions = mockMvc.perform(get("/trims/favorite/select/option").queryParams(params));
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
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("trimId", "1");
        params.add("selectFunctions", "51,17");
        List<MyTrimOptionResponse> myTrimOptionResponseList = new ArrayList<>();
        MyTrimOptionResponse myTrimOptionResponse = new MyTrimOptionResponse(1L, "옵션 이름", 1000000L);
        myTrimOptionResponseList.add(myTrimOptionResponse);
        given(myTrimService.findOptionBySelectFunctions(any())).willReturn(myTrimOptionResponseList);

        //when
        ResultActions resultActions = mockMvc.perform(get("/trims/favorite/submit")
                .queryParams(params));

        //then
        resultActions.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$[0].optionName").value("옵션 이름"));

    }

    @Test
    @DisplayName("트림 선택시 선택 불가능한 기능 반환")
    void findNotFunctionsByTrim() throws Exception {
        //given
        Map<String, Long> multiValueMap = new HashMap<>();
        multiValueMap.put("trimId", 1L);
        JSONObject trimIdRequest = new JSONObject();
        trimIdRequest.put("trimId", 1);
        List<FunctionIdResponse> functionIdResponseList = new ArrayList<>();
        FunctionIdResponse functionIdResponse = new FunctionIdResponse(1L);
        functionIdResponseList.add(functionIdResponse);
        given(myTrimService.findNonSelectableFunctionsByTrim(anyLong())).willReturn(functionIdResponseList);

        //when
        ResultActions resultActions = mockMvc.perform(get("/trims/favorite/select/trim")
                .param("trimId", String.valueOf(1L)));

        //then
        resultActions.andExpect(status().isOk())
                .andExpect(jsonPath("$[0].functionId").value(1L))
                .andDo(print());
    }
}