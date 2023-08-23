package com.autoever.idle.domain.bill;

import com.autoever.idle.domain.bill.controller.BillController;
import com.autoever.idle.domain.bill.dto.BillResponse;
import com.autoever.idle.domain.bill.service.BillService;
import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryResponse;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionNameResponse;
import com.autoever.idle.domain.interiorColor.dto.InteriorBillDto;
import com.autoever.idle.domain.option.dto.SelectedOptionDto;
import com.autoever.idle.domain.trim.dto.TrimDescriptionDto;
import com.autoever.idle.global.exception.ErrorCode;
import com.autoever.idle.global.exception.custom.InvalidExteriorException;
import com.autoever.idle.global.exception.custom.InvalidInteriorException;
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
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(BillController.class)
@ExtendWith(MockitoExtension.class)
@DisplayName("Bill Controller Test")
class BillControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;
    @MockBean
    private BillService billService;
    private BillResponse billResponse;
    private MultiValueMap<String, String> multiValueMap;

    @BeforeEach
    void setUp() {
        multiValueMap = new LinkedMultiValueMap<>();
        multiValueMap.add("trimId", "1");
        multiValueMap.add("exteriorId", "1");
        multiValueMap.add("interiorId", "1");
        multiValueMap.add("selectedOptionIds", "1,14");

        TrimDescriptionDto trimDescriptionDto = new TrimDescriptionDto("실용적이고 기본적인 기능을 갖춘 베이직 트림");
        String trimDescription = trimDescriptionDto.getTrimDescription();

        ExteriorBillDto exteriorBillDto = new ExteriorBillDto(
                1L,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/12.png"
        );
        InteriorBillDto interiorBillDto = new InteriorBillDto(
                1L,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-1.png"
        );

        List<SelectedOptionDto> selectedOptionDtos = new ArrayList<>();
        SelectedOptionDto selectedOptionDto = new SelectedOptionDto(
                1L,
                "빌트인 캠(보조배터리 포함)",
                690000L,
                "안전",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/105.jpg",
                "빌트인 캠을 통해 방금 촬영된 운전 영상을 어플로 바로 확인할 수 있어요."
        );
        selectedOptionDtos.add(selectedOptionDto);

        List<DefaultFunctionCategoryResponse> defaultFunctionCategoryResponses = new ArrayList<>();
        List<DefaultFunctionNameResponse> defaultFunctionNameResponses = new ArrayList<>();
        defaultFunctionNameResponses.add(new DefaultFunctionNameResponse("8단 자동변속기"));
        DefaultFunctionCategoryResponse defaultFunctionCategoryResponse = new DefaultFunctionCategoryResponse(1L, "파워트레인/성능", defaultFunctionNameResponses);
        defaultFunctionCategoryResponses.add(defaultFunctionCategoryResponse);
        billResponse = new BillResponse(trimDescription, exteriorBillDto, interiorBillDto, selectedOptionDtos, defaultFunctionCategoryResponses);
    }

    @Test
    @DisplayName("최종 견적서 api 호출")
    void getResultBill() throws Exception {
        //given
        given(billService.getResultBill(any())).willReturn(billResponse);

        //when
        ResultActions resultActions = mockMvc.perform(get("/result/bill")
                        .queryParams(multiValueMap))
                .andDo(print());

        //then
        resultActions.andExpect(status().isOk());
        resultActions.andExpect(content().contentType(MediaType.APPLICATION_JSON));
        resultActions.andExpect(content().json(objectMapper.writeValueAsString(billResponse)));
    }

    @Test
    @DisplayName("최종 견적서 api 요청 시 외장 색상 id의 값이 적절하지 못하면 에러 발생")
    void getResultBill_ExteriorError() throws Exception {
        //given
        given(billService.getResultBill(any())).willThrow(new InvalidExteriorException(ErrorCode.INVALID_EXTERIOR));
        multiValueMap.add("exteriorId", "0");

        //when
        ResultActions resultActions = mockMvc.perform(get("/result/bill")
                        .queryParams(multiValueMap))
                .andDo(print());

        //then
        resultActions.andExpect(status().is4xxClientError());
    }

    @Test
    @DisplayName("최종 견적서 api 요청 시 내장 색상 id의 값이 적절하지 못하면 에러 발생")
    void getResultBill_InteriorError() throws Exception {
        //given
        given(billService.getResultBill(any())).willThrow(new InvalidInteriorException(ErrorCode.INVALID_INTERIOR));
        multiValueMap.set("interiorId", "0");

        //when
        ResultActions resultActions = mockMvc.perform(get("/result/bill")
                        .queryParams(multiValueMap))
                .andDo(print());

        //then
        resultActions.andExpect(status().is4xxClientError());
    }
}
