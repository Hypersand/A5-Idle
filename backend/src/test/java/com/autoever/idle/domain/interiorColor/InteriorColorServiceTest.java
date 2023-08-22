package com.autoever.idle.domain.interiorColor;

import com.autoever.idle.domain.interiorColor.dto.InteriorColorDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorResponse;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorsImgUrlResponse;
import com.autoever.idle.domain.interiorColor.repository.InteriorColorRepository;
import com.autoever.idle.domain.interiorColor.service.InteriorColorService;
import com.autoever.idle.global.exception.custom.InvalidTrimException;
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
import java.util.Collections;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
@ExtendWith(SoftAssertionsExtension.class)
@DisplayName("Interior Color Service Test")
class InteriorColorServiceTest {

    @InjectSoftAssertions
    SoftAssertions softAssertions;

    @InjectMocks
    InteriorColorService interiorColorService;

    @Mock
    InteriorColorRepository interiorColorRepository;

    List<InteriorColorDto> interiorColorDtos;
    InteriorColorResponse interiorColorRes;
    List<String> imgUrls;
    InteriorColorsImgUrlResponse imgUrlResponse;

    @BeforeEach
    void setUp() {
        interiorColorDtos = new ArrayList<>();
        interiorColorDtos.add(new InteriorColorDto(
                43L,
                "인조가죽(블랙)",
                0,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-1.png",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-2.png",
                "구매자 16%가 선택")
        );
        interiorColorRes = InteriorColorResponse.createInteriorColorDto(interiorColorDtos);

        imgUrls = new ArrayList<>();
        imgUrls.add("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-1.png");
        imgUrls.add("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/118-1.png");
        imgUrls.add("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-1.png");

        imgUrlResponse = new InteriorColorsImgUrlResponse(imgUrls);
    }

    @Test
    @DisplayName("트림과 외장 색상에 따라 선택 가능한 내장 색상을 반환한다")
    void findAllInteriorColors() {
        Long trimId = 1L;
        Long exteriorId = 2L;
        given(interiorColorRepository.findInteriorColorByTrimIdAndExteriorId(trimId, exteriorId)).willReturn(interiorColorDtos);

        InteriorColorResponse response = interiorColorService.findAllInteriorColors(1L, 2L);

        softAssertions.assertThat(response.getCarInteriorColors().get(0).getInteriorId())
                .isEqualTo(interiorColorDtos.get(0).getInteriorId());
        softAssertions.assertThat(response.getCarInteriorColors().get(0).getInteriorName())
                .isEqualTo(interiorColorDtos.get(0).getInteriorName());
        softAssertions.assertThat(response.getCarInteriorColors().get(0).getInteriorPrice())
                .isEqualTo(interiorColorDtos.get(0).getInteriorPrice());
        softAssertions.assertThat(response.getCarInteriorColors().get(0).getInteriorImgUrl())
                .isEqualTo(interiorColorDtos.get(0).getInteriorImgUrl());
        softAssertions.assertThat(response.getCarInteriorColors().get(0).getCarInteriorImgUrl())
                .isEqualTo(interiorColorDtos.get(0).getCarInteriorImgUrl());
        softAssertions.assertThat(response.getCarInteriorColors().get(0).getInteriorPurchaseRate())
                .isEqualTo(interiorColorDtos.get(0).getInteriorPurchaseRate());
    }

    @Test
    @DisplayName("존재하지 않는 트림에 대해 예외를 발생한다")
    void validateTrim() {
        Long trimId = 12345L;
        Long exteriorId = 1L;

        when(interiorColorRepository.findInteriorColorByTrimIdAndExteriorId(trimId, exteriorId))
                .thenReturn(Collections.emptyList());

        softAssertions.assertThatThrownBy(() -> interiorColorService.findAllInteriorColors(trimId, exteriorId))
                .isInstanceOf(InvalidTrimException.class);
    }

    @Test
    @DisplayName("전체 내장 색상 이미지를 반환한다")
    void findAllInteriorColorImgUrls() {
        when(interiorColorRepository.findAllInteriorColorImgUrls()).thenReturn(imgUrls);

        InteriorColorsImgUrlResponse response = interiorColorService.findAllInteriorColorImgUrls();

        softAssertions.assertThat(response.getInteriorImgUrls().get(0)).isEqualTo(imgUrls.get(0));
        softAssertions.assertThat(response.getInteriorImgUrls().get(1)).isEqualTo(imgUrls.get(1));
        softAssertions.assertThat(response.getInteriorImgUrls().get(2)).isEqualTo(imgUrls.get(2));
    }
}
