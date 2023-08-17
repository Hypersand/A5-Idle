package com.autoever.idle.domain.carMaster;

import com.autoever.idle.domain.carMaster.dto.CarMasterDto;
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
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.anyDouble;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@DisplayName("카마스터 찾기 Controller")
class CarMasterControllerTest {

    private MockMvc mockMvc;

    @Mock
    private CarMasterService carMasterService;

    @InjectMocks
    private CarMasterController carMasterController;

    @BeforeEach
    void init() {
        mockMvc = MockMvcBuilders.standaloneSetup(carMasterController)
                .setControllerAdvice(new GlobalExceptionHandler())
                .build();
    }

    @Test
    @DisplayName("거리순 정렬 테스트")
    void findByDistance() throws Exception {
        //given
        List<CarMasterDto> carMasterDtoList = new ArrayList<>();
        CarMasterDto carMasterDto = new CarMasterDto("김팰리", "010111111", "왕십리점",
                "김팰리입니다", "사진", "마커이미지", 36.1234, 126.1234, "주소");
        carMasterDtoList.add(carMasterDto);
        given(carMasterService.findSortedCarMasterByDistance(anyDouble(), anyDouble())).willReturn(carMasterDtoList);

        //when
        ResultActions resultActions = mockMvc.perform(get("/find/car/masters/distance")
                .param("nowLatitude","36.05")
                .param("nowLongitude","126.1234"));

        //then
        resultActions.andExpect(status().isOk())
                .andExpect(jsonPath("$[0].masterName").value(carMasterDtoList.get(0).getMasterName()))
                .andDo(print());
    }

    @Test
    @DisplayName("판매량순 정렬 테스트")
    void findBySaleRate() throws Exception {
        //given
        List<CarMasterDto> carMasterDtoList = new ArrayList<>();
        CarMasterDto carMasterDto = new CarMasterDto("김팰리", "010111111", "왕십리점",
                "김팰리입니다", "사진", "마커 사진", 36.1234, 126.1234, "주소소");
        carMasterDtoList.add(carMasterDto);
        given(carMasterService.findSortedCarMasterBySaleRate(anyDouble(), anyDouble())).willReturn(carMasterDtoList);

        //when
        ResultActions resultActions = mockMvc.perform(get("/find/car/masters/salerate")
                .param("nowLatitude","36.05")
                .param("nowLongitude","126.1234"));

        //then
        resultActions.andExpect(status().isOk())
                .andExpect(jsonPath("$[0].masterName").value(carMasterDtoList.get(0).getMasterName()))
                .andDo(print());
    }
}