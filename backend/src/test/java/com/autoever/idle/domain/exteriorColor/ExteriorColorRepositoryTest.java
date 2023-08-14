package com.autoever.idle.domain.exteriorColor;

import com.autoever.idle.domain.exteriorColor.dto.CarExteriorImgDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorDto;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@DisplayName("Exterior Color Repository Test")
@ExtendWith(SoftAssertionsExtension.class)
class ExteriorColorRepositoryTest {

    @Autowired
    ExteriorColorRepository exteriorColorRepository;
    @InjectSoftAssertions
    private SoftAssertions softAssertions;

    @Test
    @DisplayName("트림 id를 이용해 해당 트림의 외장 색상 정보를 반환한다")
    void findExteriorColorsByTrimId() {
        Long trimId = 1L;

        List<ExteriorColorDto> exteriorColors = exteriorColorRepository.findExteriorColorsByTrimId(trimId);

        assertThat(exteriorColors.size()).isEqualTo(6);
    }

    @Test
    @DisplayName("외장 색상 id를 이용해 해당 외장 색상의 차량 360도 이미지 60장을 반환한다")
    void findCarExteriorImgsById() {
        Long exteriorId = 1L;

        List<CarExteriorImgDto> images = exteriorColorRepository.findCarExteriorImgsById(exteriorId);

        assertThat(images.size()).isEqualTo(60);
    }

    @Test
    @DisplayName("외장 색상 id를 이용해 최종 견적서에 필요한 외장 색상 정보를 반환한다")
    void findExteriorBill() {
        //given
        Long exteriorId = 1L;

        //when
        ExteriorBillDto exteriorBillDto = exteriorColorRepository.findExteriorBill(exteriorId).orElse(null);

        //then
        softAssertions.assertThat(exteriorBillDto.getExteriorId()).isEqualTo(1L);
        softAssertions.assertThat(exteriorBillDto.getExteriorImgUrl()).isNotEmpty();
    }
}
