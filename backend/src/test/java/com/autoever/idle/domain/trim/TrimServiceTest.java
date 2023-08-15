package com.autoever.idle.domain.trim;

import com.autoever.idle.domain.carType.CarTypeRepository;
import com.autoever.idle.domain.category.functionCategory.FunctionCategoryRepository;
import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.trim.dto.TrimDto;
import com.autoever.idle.domain.trim.dto.TrimSelectionResDto;
import com.autoever.idle.global.exception.custom.InvalidCarException;
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
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
@ExtendWith(SoftAssertionsExtension.class)
@DisplayName("Trim Service Test")
class TrimServiceTest {

    @InjectSoftAssertions
    SoftAssertions softAssertions;

    @InjectMocks
    TrimService trimService;

    @Mock
    TrimRepository trimRepository;

    @Mock
    CarTypeRepository carTypeRepository;

    @Mock
    FunctionCategoryRepository functionCategoryRepository;

    List<Long> carTypeIds;
    List<FunctionCategoryDto> categories;
    List<TrimDto> trims;

    @BeforeEach
    void setUp() {
        carTypeIds = new ArrayList<>();
        carTypeIds.add(1L);

        categories = new ArrayList<>();
        categories.add(new FunctionCategoryDto(1L, "파워트레인/성능"));
        categories.add(new FunctionCategoryDto(2L, "지능형 안전기술"));
        categories.add(new FunctionCategoryDto(3L, "안전"));
        categories.add(new FunctionCategoryDto(4L, "외관"));
        categories.add(new FunctionCategoryDto(5L, "내장"));
        categories.add(new FunctionCategoryDto(6L, "시트"));
        categories.add(new FunctionCategoryDto(7L, "편의"));
        categories.add(new FunctionCategoryDto(8L, "멀티미디어"));

        trims = new ArrayList<>();
        trims.add(new TrimDto(
                1L,
                "Exclusive",
                38960000,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/exclusive.png",
                "실용적이고 기본적인 기능을 갖춘 베이직 트림",
                "구매자 10%가 선택"));
        trims.add(new TrimDto(
                2L,
                "Le Blanc",
                41980000,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/leblanc.png",
                "실용적이고 기본적인 기능을 갖춘 베이직 트림",
                "NEW"));
        trims.add(new TrimDto(
                3L,
                "Prestige",
                46240000,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/prestige.png",
                "실용적이고 기본적인 기능을 갖춘 베이직 트림",
                "구매자 15%가 선택"));
        trims.add(new TrimDto(
                4L,
                "Calligraphy",
                51060000,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/calligraphy.png",
                "실용적이고 기본적인 기능을 갖춘 베이직 트림",
                "구매자 75%가 선택"));
    }

    @Test
    @DisplayName("해당 차종의 트림에 대한 정보를 반환한다")
    void findAllTrims() {
        String carTypeName = "팰리세이드";
        given(carTypeRepository.findByName(carTypeName)).willReturn(carTypeIds);
        given(functionCategoryRepository.findAll()).willReturn(categories);
        given(trimRepository.findAll(carTypeIds.get(0))).willReturn(trims);

        List<TrimSelectionResDto> trimResponse = trimService.findAllTrims("팰리세이드");

        softAssertions.assertThat(trimResponse.get(0).getTrimId()).isEqualTo(trims.get(0).getTrimId());
        softAssertions.assertThat(trimResponse.get(0).getName()).isEqualTo(trims.get(0).getName());
        softAssertions.assertThat(trimResponse.get(0).getPrice()).isEqualTo(trims.get(0).getPrice());
        softAssertions.assertThat(trimResponse.get(0).getImgUrl()).isEqualTo(trims.get(0).getImgUrl());
        softAssertions.assertThat(trimResponse.get(0).getDescription()).isEqualTo(trims.get(0).getDescription());
        softAssertions.assertThat(trimResponse.get(0).getPurchaseRate()).isEqualTo(trims.get(0).getPurchaseRate());
        softAssertions.assertThat(trimResponse.get(1).getTrimId()).isEqualTo(trims.get(1).getTrimId());
        softAssertions.assertThat(trimResponse.get(1).getName()).isEqualTo(trims.get(1).getName());
        softAssertions.assertThat(trimResponse.get(1).getPrice()).isEqualTo(trims.get(1).getPrice());
        softAssertions.assertThat(trimResponse.get(1).getImgUrl()).isEqualTo(trims.get(1).getImgUrl());
        softAssertions.assertThat(trimResponse.get(1).getDescription()).isEqualTo(trims.get(1).getDescription());
        softAssertions.assertThat(trimResponse.get(1).getPurchaseRate()).isEqualTo(trims.get(1).getPurchaseRate());
        softAssertions.assertThat(trimResponse.get(2).getTrimId()).isEqualTo(trims.get(2).getTrimId());
        softAssertions.assertThat(trimResponse.get(2).getName()).isEqualTo(trims.get(2).getName());
        softAssertions.assertThat(trimResponse.get(2).getPrice()).isEqualTo(trims.get(2).getPrice());
        softAssertions.assertThat(trimResponse.get(2).getImgUrl()).isEqualTo(trims.get(2).getImgUrl());
        softAssertions.assertThat(trimResponse.get(2).getDescription()).isEqualTo(trims.get(2).getDescription());
        softAssertions.assertThat(trimResponse.get(2).getPurchaseRate()).isEqualTo(trims.get(2).getPurchaseRate());
        softAssertions.assertThat(trimResponse.get(3).getTrimId()).isEqualTo(trims.get(3).getTrimId());
        softAssertions.assertThat(trimResponse.get(3).getName()).isEqualTo(trims.get(3).getName());
        softAssertions.assertThat(trimResponse.get(3).getPrice()).isEqualTo(trims.get(3).getPrice());
        softAssertions.assertThat(trimResponse.get(3).getImgUrl()).isEqualTo(trims.get(3).getImgUrl());
        softAssertions.assertThat(trimResponse.get(3).getDescription()).isEqualTo(trims.get(3).getDescription());
        softAssertions.assertThat(trimResponse.get(3).getPurchaseRate()).isEqualTo(trims.get(3).getPurchaseRate());
    }

    @Test
    @DisplayName("유효하지 않은 차종으로 조회하면 InvalidCarException이 발생한다")
    void findAllTrimsInvalidCarType() {
        String carTypeName = "팰리세";

        assertThrows(InvalidCarException.class,
                () -> trimService.findAllTrims(carTypeName));
    }
}
