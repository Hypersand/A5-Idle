package com.autoever.idle.domain.bill;

import com.autoever.idle.domain.bill.dto.BillRequestDto;
import com.autoever.idle.domain.bill.dto.BillResponseDto;
import com.autoever.idle.domain.category.functionCategory.FunctionCategoryRepository;
import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryResDto;
import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.exteriorColor.ExteriorColorRepository;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.function.dto.DefaultFunctionNameResDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorBillDto;
import com.autoever.idle.domain.interiorColor.InteriorColorRepository;
import com.autoever.idle.domain.option.OptionRepository;
import com.autoever.idle.domain.option.dto.SelectedOptionDto;
import com.autoever.idle.domain.trim.TrimRepository;
import com.autoever.idle.domain.trim.dto.TrimDescriptionDto;
import com.autoever.idle.global.exception.custom.InvalidExteriorException;
import com.autoever.idle.global.exception.custom.InvalidInteriorException;
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
import java.util.List;
import java.util.Optional;

import static org.mockito.ArgumentMatchers.*;
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
    private FunctionCategoryRepository functionCategoryRepository;
    @Mock
    private OptionRepository optionRepository;
    @Mock
    private TrimRepository trimRepository;

    @InjectMocks
    private BillService billService;
    @InjectSoftAssertions
    private SoftAssertions softAssertions;

    private TrimDescriptionDto trimDescriptionDto;
    private BillResponseDto billResponseDto;
    private ExteriorBillDto exteriorBillDto;
    private InteriorBillDto interiorBillDto;
    private List<DefaultFunctionCategoryResDto> defaultFunctionCategoryResDtos;
    private List<DefaultFunctionNameResDto> defaultFunctionNameResDtos;

    @BeforeEach
    void setUp() {
        trimDescriptionDto = new TrimDescriptionDto("실용적이고 기본적인 기능을 갖춘 베이직 트림");
        String trimDescription = trimDescriptionDto.getTrimDescription();

        exteriorBillDto = new ExteriorBillDto(
                1L,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/12.png"
        );
        interiorBillDto = new InteriorBillDto(
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

        defaultFunctionCategoryResDtos = new ArrayList<>();
        defaultFunctionNameResDtos = new ArrayList<>();
        defaultFunctionNameResDtos.add(new DefaultFunctionNameResDto("8단 자동변속기"));
        DefaultFunctionCategoryResDto defaultFunctionCategoryResDto = new DefaultFunctionCategoryResDto(1L, "파워트레인/성능", defaultFunctionNameResDtos);
        defaultFunctionCategoryResDtos.add(defaultFunctionCategoryResDto);
        billResponseDto = new BillResponseDto(trimDescription, exteriorBillDto, interiorBillDto, selectedOptionDtos, defaultFunctionCategoryResDtos);
    }

    @Test
    @DisplayName("정상적으로 최종 견적서 응답 객체를 반환한다.")
    void getResultBill() {
        //given
        BillRequestDto billRequestDto = new BillRequestDto(1L, 1L, 1L, List.of(1L));
        List<SelectedOptionDto> selectedOptionDtos = List.of(new SelectedOptionDto(
                1L,
                "빌트인 캠(보조배터리 포함)",
                690000L,
                "안전",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/105.jpg",
                "빌트인 캠을 통해 방금 촬영된 운전 영상을 어플로 바로 확인할 수 있어요."));

        when(trimRepository.findByTrimId(1L)).thenReturn(trimDescriptionDto);
        when(exteriorColorRepository.findExteriorBill(any())).thenReturn(Optional.of(exteriorBillDto));
        when(interiorColorRepository.findInteriorBill(any())).thenReturn(Optional.of(interiorBillDto));
        when(optionRepository.findSelectedOptions(anyList())).thenReturn(selectedOptionDtos);
        when(functionCategoryRepository.findAll()).thenReturn(List.of(new FunctionCategoryDto(1L, "파워트레인/성능")));
        when(functionCategoryRepository.getDefaultOptions(any(), any())).thenReturn(defaultFunctionNameResDtos);

        BillResponseDto billResponse = billService.getResultBill(billRequestDto);

        //then
        softAssertions.assertThat(billResponse.getExterior().getExteriorId()).
                isEqualTo(billResponseDto.getExterior().getExteriorId());
        softAssertions.assertThat(billResponse.getInterior().getInteriorId()).
                isEqualTo(billResponseDto.getInterior().getInteriorId());
        softAssertions.assertThat(billResponse.getSelectedOptions().size()).
                isEqualTo(selectedOptionDtos.size());
        softAssertions.assertThat(billResponse.getDefaultFunctions().get(0).getCategoryId()).
                isEqualTo(defaultFunctionCategoryResDtos.get(0).getCategoryId());
    }

    @Test
    @DisplayName("외장 색상 id 요청 값이 정상적이지 않으면 예외 처리")
    void getResultBill_InvalidExteriorException() {
        //given
        Long exteriorId = 999999999L;
        BillRequestDto billRequestDto = new BillRequestDto(1L, exteriorId, 1L, List.of(1L));

        //when
        when(trimRepository.findByTrimId(1L)).thenReturn(trimDescriptionDto);
        when(exteriorColorRepository.findExteriorBill(anyLong())).thenReturn(Optional.empty());

        //then
        softAssertions.assertThatThrownBy(() -> billService.getResultBill(billRequestDto)).isInstanceOf(InvalidExteriorException.class);
    }

    @Test
    @DisplayName("내장 색상 id 요청 값이 정상적이지 않으면 예외 처리")
    void getResultBill_InvalidInteriorException() {
        //given
        List<Long> additionalFunctionIds = List.of(1L);
        Long interiorId = 999999999L;
        BillRequestDto billRequestDto = new BillRequestDto(1L, interiorId, 1L, List.of(1L));

        //when
        when(trimRepository.findByTrimId(1L)).thenReturn(trimDescriptionDto);
        when(exteriorColorRepository.findExteriorBill(anyLong())).thenReturn(Optional.of(exteriorBillDto));
        when(interiorColorRepository.findInteriorBill(anyLong())).thenReturn(Optional.empty());

        //then
        softAssertions.assertThatThrownBy(() -> billService.getResultBill(billRequestDto)).isInstanceOf(InvalidInteriorException.class);
    }

}
