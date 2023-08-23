package com.autoever.idle.domain.detailModel;

import com.autoever.idle.domain.detailModel.dto.BodyTypeResponse;
import com.autoever.idle.domain.detailModel.dto.DetailModelResponse;
import com.autoever.idle.domain.detailModel.dto.DrivingMethodResponse;
import com.autoever.idle.domain.detailModel.dto.EngineResponse;
import com.autoever.idle.global.exception.ErrorCode;
import com.autoever.idle.global.exception.custom.InvalidDetailModelException;
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

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(DetailModelController.class)
@ExtendWith(MockitoExtension.class)
@DisplayName("DetailModel Controller Test")
class DetailModelControllerTest {

    @Autowired
    private MockMvc mockMvc;
    @Autowired
    private ObjectMapper objectMapper;

    @MockBean
    private DetailModelService detailModelService;
    private DetailModelResponse detailModelResponse;

    @BeforeEach
    void setUp() {
        List<EngineResponse> engines = new ArrayList<>();
        List<DrivingMethodResponse> drivingMethods = new ArrayList<>();
        List<BodyTypeResponse> bodyTypes = new ArrayList<>();
        EngineResponse engineResponse = new EngineResponse(
                1L,
                "디젤 2.2",
                1480000,
                "강력한 토크와 탁월한 효율로 여유있는 파워와 높은 연비를 제공하는 디젤 엔진입니다.",
                "구매자 45%가 선택",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/5.jpg",
                202,
                45.0,
                11.4,
                12.4
        );

        DrivingMethodResponse drivingMethodResponse = new DrivingMethodResponse(
                1L,
                "2WD",
                0,
                "엔진 동력이 전륜 후륜 중 하나로 전달되어 움직입니다. 차체가 가벼워 연료 효율이 높습니다.",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/10.jpg",
                "구매자 60%가 선택"
        );

        BodyTypeResponse bodyTypeResponse = new BodyTypeResponse(
                1L,
                "7인승",
                0,
                "2열 가운데 시트를 없에 2열 탑승객의 편의는 물론, 3열 탑승객의 승하차가 편리합니다.",
                "구매자 50%가 선택",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/7.jpg"
        );

        engines.add(engineResponse);
        drivingMethods.add(drivingMethodResponse);
        bodyTypes.add(bodyTypeResponse);
        detailModelResponse = DetailModelResponse.create(engines, drivingMethods, bodyTypes);
    }

    @Test
    @DisplayName("세부 모델 조회")
    void showDetailModel() throws Exception {
        //given
        Long trimId = 1L;
        given(detailModelService.findAllModels(trimId)).willReturn(detailModelResponse);

        //when

        ResultActions resultActions =
                mockMvc.perform(get("/trims/models")
                        .contentType(MediaType.APPLICATION_JSON)
                        .param("trimId", trimId.toString()))
                        .andDo(print());

        //then
        resultActions.andExpectAll(
                status().isOk(),
                content().contentType(MediaType.APPLICATION_JSON),
                content().json(objectMapper.writeValueAsString(detailModelResponse)),
                jsonPath("$.engines[0].type").value("디젤 2.2"),
                jsonPath("$.drivingMethods[0].type").value("2WD"),
                jsonPath("$.bodyTypes[0].type").value("7인승")
        );

    }

    @Test
    @DisplayName("적절하지 않은 트림 id로 세부 모델 조회 시 예외 발생")
    void showDetailModel_Error() throws Exception {
        //given
        String requestJson = "{\"trimId\":\"1234567890000\"}";
        given(detailModelService.findAllModels(any())).willThrow(new InvalidDetailModelException(ErrorCode.INVALID_DETAIL_MODEL));

        //when
        ResultActions resultActions =
                mockMvc.perform(get("/trims/models")
                                .contentType(MediaType.APPLICATION_JSON)
                                .content(requestJson))
                        .andDo(print());

        //then
        resultActions.andExpectAll(status().is4xxClientError());

    }
}
