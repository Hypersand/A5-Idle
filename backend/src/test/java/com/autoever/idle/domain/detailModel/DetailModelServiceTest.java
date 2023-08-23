package com.autoever.idle.domain.detailModel;

import com.autoever.idle.domain.detailModel.bodyType.repository.BodyTypeRepository;
import com.autoever.idle.domain.detailModel.drivingMethod.repository.DrivingMethodRepository;
import com.autoever.idle.domain.detailModel.dto.BodyTypeResponse;
import com.autoever.idle.domain.detailModel.dto.DetailModelResponse;
import com.autoever.idle.domain.detailModel.dto.DrivingMethodResponse;
import com.autoever.idle.domain.detailModel.dto.EngineResponse;
import com.autoever.idle.domain.detailModel.engine.repository.EngineRepository;
import com.autoever.idle.global.exception.custom.InvalidDetailModelException;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftlyExtension;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.mockito.ArgumentMatchers.anyLong;
import static org.mockito.Mockito.when;

@DisplayName("DetailModel Service Test")
@ExtendWith(SoftlyExtension.class)
@ExtendWith(MockitoExtension.class)
class DetailModelServiceTest {
    @Mock
    private EngineRepository engineRepository;
    @Mock
    private DrivingMethodRepository drivingMethodRepository;
    @Mock
    private BodyTypeRepository bodyTypeRepository;
    @InjectMocks
    private DetailModelService detailModelService;

    @InjectSoftAssertions
    private SoftAssertions softAssertions;

    private DetailModelResponse detailModelResponse;

    private List<EngineResponse> engines = new ArrayList<>();
    private List<DrivingMethodResponse> drivingMethods = new ArrayList<>();
    private List<BodyTypeResponse> bodyTypes = new ArrayList<>();

    @BeforeEach
    void setUp() {
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
    @DisplayName("검증한 세부모델 dto의 필드 중 어느 하나라도 비어있으면 예외 발생")
    void validateDetailModels_isEmpty() {
        //given
        Long trimId = 123123123123L;

        when(engineRepository.findAll(anyLong())).thenReturn(Collections.emptyList());
        when(drivingMethodRepository.findAll(anyLong())).thenReturn(Collections.emptyList());
        when(bodyTypeRepository.findAll(anyLong())).thenReturn(Collections.emptyList());

        softAssertions.assertThatThrownBy(() -> detailModelService.findAllModels(trimId)).isInstanceOf(InvalidDetailModelException.class);
    }

    @Test
    @DisplayName("정상적으로 세부모델 dto 반환")
    void findAllModels() {
        //given
        Long trimId = 1L;

        //when
        when(engineRepository.findAll(anyLong())).thenReturn(engines);
        when(drivingMethodRepository.findAll(anyLong())).thenReturn(drivingMethods);
        when(bodyTypeRepository.findAll(anyLong())).thenReturn(bodyTypes);
        DetailModelResponse detailModel = detailModelService.findAllModels(trimId);

        //then
        softAssertions.assertThat(detailModel.getBodyTypes().size()).isEqualTo(1);
        softAssertions.assertThat(detailModel.getDrivingMethods().size()).isEqualTo(1);
        softAssertions.assertThat(detailModel.getBodyTypes().size()).isEqualTo(1);
    }


}
