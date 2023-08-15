package com.autoever.idle.domain.exteriorColor;

import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorResDto;
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

import static org.mockito.BDDMockito.given;

@ExtendWith(MockitoExtension.class)
@ExtendWith(SoftAssertionsExtension.class)
@DisplayName("Exterior Color Service Test")
class ExteriorColorServiceTest {

    @InjectSoftAssertions
    SoftAssertions softAssertions;

    @InjectMocks
    ExteriorColorService exteriorColorService;

    @Mock
    ExteriorColorRepository exteriorColorRepository;

    List<ExteriorColorDto> exteriorColors;

    @BeforeEach
    void setUp() {
        exteriorColors = new ArrayList<>();
        exteriorColors.add(new ExteriorColorDto(
                1L,
                "어비스 블랙 펄",
                0,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/11.png",
                "구매자의 30%가 선택"));
        exteriorColors.add(new ExteriorColorDto(
                2L,
                "쉬버링 실버 메탈릭",
                0,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/12.png",
                "구매자의 20%가 선택"));
        exteriorColors.add(new ExteriorColorDto(
                4L,
                "문라이트 블루 펄",
                0,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/13.png.",
                "구매자의 10%가 선택"));
        exteriorColors.add(new ExteriorColorDto(
                6L,
                "그라파이트 그레이 메탈릭",
                0,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/15.png.",
                "구매자의 5%가 선택"));
        exteriorColors.add(new ExteriorColorDto(
                5L,
                "가이아 브라운 펄",
                0,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/14.png.",
                "구매자의 5%가 선택"));
        exteriorColors.add(new ExteriorColorDto(
                7L,
                "크리미 화이트 펄",
                100000,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/16.png.",
                "구매자의 30%가 선택"));
    }

    @Test
    @DisplayName("해당 트림에서 선택 가능한 외장 색상을 반환한다")
    void findAllExteriorColors() {
        Long trimId = 1L;
        given(exteriorColorRepository.findExteriorColorsByTrimId(trimId)).willReturn(exteriorColors);

        List<ExteriorColorResDto> response = exteriorColorService.findAllExteriorColors(trimId);

        softAssertions.assertThat(response.get(0).getExteriorId()).isEqualTo(exteriorColors.get(0).getExteriorId());
        softAssertions.assertThat(response.get(0).getExteriorName()).isEqualTo(exteriorColors.get(0).getExteriorName());
        softAssertions.assertThat(response.get(0).getExteriorPrice()).isEqualTo(exteriorColors.get(0).getExteriorPrice());
        softAssertions.assertThat(response.get(0).getExteriorImgUrl()).isEqualTo(exteriorColors.get(0).getExteriorImgUrl());
        softAssertions.assertThat(response.get(0).getExteriorPurchaseRate()).isEqualTo(exteriorColors.get(0).getExteriorPurchaseRate());
        softAssertions.assertThat(response.get(1).getExteriorId()).isEqualTo(exteriorColors.get(1).getExteriorId());
        softAssertions.assertThat(response.get(1).getExteriorName()).isEqualTo(exteriorColors.get(1).getExteriorName());
        softAssertions.assertThat(response.get(1).getExteriorPrice()).isEqualTo(exteriorColors.get(1).getExteriorPrice());
        softAssertions.assertThat(response.get(1).getExteriorImgUrl()).isEqualTo(exteriorColors.get(1).getExteriorImgUrl());
        softAssertions.assertThat(response.get(1).getExteriorPurchaseRate()).isEqualTo(exteriorColors.get(1).getExteriorPurchaseRate());
        softAssertions.assertThat(response.get(2).getExteriorId()).isEqualTo(exteriorColors.get(2).getExteriorId());
        softAssertions.assertThat(response.get(2).getExteriorName()).isEqualTo(exteriorColors.get(2).getExteriorName());
        softAssertions.assertThat(response.get(2).getExteriorPrice()).isEqualTo(exteriorColors.get(2).getExteriorPrice());
        softAssertions.assertThat(response.get(2).getExteriorImgUrl()).isEqualTo(exteriorColors.get(2).getExteriorImgUrl());
        softAssertions.assertThat(response.get(2).getExteriorPurchaseRate()).isEqualTo(exteriorColors.get(2).getExteriorPurchaseRate());
        softAssertions.assertThat(response.get(3).getExteriorId()).isEqualTo(exteriorColors.get(3).getExteriorId());
        softAssertions.assertThat(response.get(3).getExteriorName()).isEqualTo(exteriorColors.get(3).getExteriorName());
        softAssertions.assertThat(response.get(3).getExteriorPrice()).isEqualTo(exteriorColors.get(3).getExteriorPrice());
        softAssertions.assertThat(response.get(3).getExteriorImgUrl()).isEqualTo(exteriorColors.get(3).getExteriorImgUrl());
        softAssertions.assertThat(response.get(3).getExteriorPurchaseRate()).isEqualTo(exteriorColors.get(3).getExteriorPurchaseRate());
        softAssertions.assertThat(response.get(4).getExteriorId()).isEqualTo(exteriorColors.get(4).getExteriorId());
        softAssertions.assertThat(response.get(4).getExteriorName()).isEqualTo(exteriorColors.get(4).getExteriorName());
        softAssertions.assertThat(response.get(4).getExteriorPrice()).isEqualTo(exteriorColors.get(4).getExteriorPrice());
        softAssertions.assertThat(response.get(4).getExteriorImgUrl()).isEqualTo(exteriorColors.get(4).getExteriorImgUrl());
        softAssertions.assertThat(response.get(4).getExteriorPurchaseRate()).isEqualTo(exteriorColors.get(4).getExteriorPurchaseRate());
        softAssertions.assertThat(response.get(5).getExteriorId()).isEqualTo(exteriorColors.get(5).getExteriorId());
        softAssertions.assertThat(response.get(5).getExteriorName()).isEqualTo(exteriorColors.get(5).getExteriorName());
        softAssertions.assertThat(response.get(5).getExteriorPrice()).isEqualTo(exteriorColors.get(5).getExteriorPrice());
        softAssertions.assertThat(response.get(5).getExteriorImgUrl()).isEqualTo(exteriorColors.get(5).getExteriorImgUrl());
        softAssertions.assertThat(response.get(5).getExteriorPurchaseRate()).isEqualTo(exteriorColors.get(5).getExteriorPurchaseRate());
    }
}
