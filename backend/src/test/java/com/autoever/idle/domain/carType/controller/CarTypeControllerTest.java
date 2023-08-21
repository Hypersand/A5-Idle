package com.autoever.idle.domain.carType.controller;

import com.autoever.idle.domain.carType.dto.CarTypeDto;
import com.autoever.idle.domain.carType.service.CarTypeService;
import com.autoever.idle.domain.category.carCategory.dto.CarCategoryResponse;
import com.autoever.idle.global.exception.GlobalExceptionHandler;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@DisplayName("CarTypeController 테스트")
class CarTypeControllerTest {

    MockMvc mockMvc;

    @Mock
    CarTypeService carTypeService;

    @InjectMocks
    CarTypeController carTypeController;

    @BeforeEach
    void init() {
        mockMvc = MockMvcBuilders.standaloneSetup(carTypeController)
                .setControllerAdvice(new GlobalExceptionHandler())
                .build();
    }

    @Test
    @DisplayName("모든 CarType 반환 테스트")
    void getCarType() throws Exception {
        //given
        List<CarCategoryResponse> responseList = new ArrayList<>();
        List<CarTypeDto> carTypeDtoList = new ArrayList<>();
        carTypeDtoList.add(new CarTypeDto("팰리세이드",40000L, "TRUE","이미지","로고"));
        carTypeDtoList.add(new CarTypeDto("베뉴",50000L,"FALSE","이미지","로고"));
        responseList.add(new CarCategoryResponse(1L,"SUV",carTypeDtoList));
        given(carTypeService.getAllCarType()).willReturn(responseList);

        //when
        ResultActions resultActions = mockMvc.perform(get("/carType"));

        //then
        resultActions.andExpect(status().isOk())
                .andExpect(jsonPath("$[0].carCategoryName").value("SUV"))
                .andExpect(jsonPath("$[0].carTypeDtoList[0].carName").value("팰리세이드"))
                .andExpect(jsonPath("$[0].carTypeDtoList[0].carIsNew").value(true))
                .andDo(print());
    }

}