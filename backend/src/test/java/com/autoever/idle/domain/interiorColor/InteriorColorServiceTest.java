package com.autoever.idle.domain.interiorColor;

import com.autoever.idle.domain.interiorColor.dto.InteriorColorDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorResDto;
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
@DisplayName("Interior Color Service Test")
class InteriorColorServiceTest {

    @InjectSoftAssertions
    SoftAssertions softAssertions;

    @InjectMocks
    InteriorColorService interiorColorService;

    @Mock
    InteriorColorRepository interiorColorRepository;

    List<InteriorColorDto> interiorColorDtos;
    InteriorColorResDto interiorColorRes;

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
        interiorColorRes = InteriorColorResDto.createInteriorColorDto(interiorColorDtos);
    }

    @Test
    @DisplayName("트림과 외장 색상에 따라 선택 가능한 내장 색상을 반환한다")
    void findAllInteriorColors() {
        Long trimId = 1L;
        Long exteriorId = 2L;
        given(interiorColorRepository.findInteriorColorByTrimIdAndExteriorId(trimId, exteriorId)).willReturn(interiorColorDtos);

        InteriorColorResDto response = interiorColorService.findAllInteriorColors(1L, 2L);

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
}
