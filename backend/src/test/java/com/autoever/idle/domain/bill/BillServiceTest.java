package com.autoever.idle.domain.bill;

import com.autoever.idle.domain.bill.dto.BillRequestDto;
import com.autoever.idle.domain.bill.dto.BillResponseDto;
import com.autoever.idle.domain.exteriorColor.ExteriorColorRepository;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.function.FunctionRepository;
import com.autoever.idle.domain.function.dto.AdditionalFunctionBillDto;
import com.autoever.idle.domain.interiorColor.InteriorBillDto;
import com.autoever.idle.domain.interiorColor.InteriorColorRepository;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@ExtendWith(SoftAssertionsExtension.class)
@DisplayName("Bill Service Test")
class BillServiceTest {

    @Mock
    private ExteriorColorRepository exteriorColorRepository;
    @Mock
    private InteriorColorRepository interiorColorRepository;
    @Mock
    private FunctionRepository functionRepository;

    @InjectMocks
    private BillService billService;
    @InjectSoftAssertions
    private SoftAssertions softAssertions;

    private BillResponseDto billResponseDto;
    private ExteriorBillDto exteriorBillDto;
    private InteriorBillDto interiorBillDto;
    private List<AdditionalFunctionBillDto> additionalFunctionBillDtos = new ArrayList<>();

    @BeforeEach
    void setUp() {
        exteriorBillDto = new ExteriorBillDto(
                1L,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/12.png"
        );
        interiorBillDto = new InteriorBillDto(
                1L,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-1.png"
        );

        AdditionalFunctionBillDto additionalFunctionBillDto = new AdditionalFunctionBillDto(
                1L,
                "파워트레인/성능",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/19.jpg",
                "전달 효율 증대로 전 엔진 동급 최고의 연비를 구현함은 물론, 최적의 변속 성능으로 드라이빙 감성까지 향상시켜줍니다."
        );
        additionalFunctionBillDtos.add(additionalFunctionBillDto);
        billResponseDto = new BillResponseDto(exteriorBillDto, interiorBillDto, additionalFunctionBillDtos);
    }

    @Test
    @DisplayName("정상적으로 최종 견적서 응답 객체를 반환한다.")
    void getResultBill() {
        //given
        List<Long> additionalFunctionIds = List.of(1L);
        BillRequestDto billRequestDto = new BillRequestDto(1L, 1L, additionalFunctionIds);
        when(exteriorColorRepository.findExteriorBill(any())).thenReturn(Optional.of(exteriorBillDto));
        when(interiorColorRepository.findInteriorBill(any())).thenReturn(Optional.of(interiorBillDto));
        when(functionRepository.findAdditonalFunctions(additionalFunctionIds)).thenReturn(additionalFunctionBillDtos);

        BillResponseDto billResponse = billService.getResultBill(billRequestDto);

        //then
        softAssertions.assertThat(billResponse.getExterior().getExteriorId()).
                isEqualTo(billResponseDto.getExterior().getExteriorId());
        softAssertions.assertThat(billResponse.getInterior().getInteriorId()).
                isEqualTo(billResponseDto.getInterior().getInteriorId());
        softAssertions.assertThat(billResponse.getAdditonalFunctions().size()).
                isEqualTo(billResponseDto.getAdditonalFunctions().size());
        softAssertions.assertThat(billResponse.getAdditonalFunctions().get(0).getFunctionCategory()).
                isEqualTo(billResponseDto.getAdditonalFunctions().get(0).getFunctionCategory());
    }

}