package com.autoever.idle.domain.exteriorColor;

import com.autoever.idle.domain.exteriorColor.dto.CarExteriorImgDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorImgUrlDto;
import com.autoever.idle.domain.exteriorColor.repository.ExteriorColorRepository;
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

    @Test
    @DisplayName("트림에서 선택 가능한 외장 색상을 반환한다")
    void findExteriorColorImgUrlsByTrimId() {
        Long trimId = 2L;

        List<ExteriorImgUrlDto> exteriorColorImgUrls = exteriorColorRepository.findExteriorColorImgUrlsByTrimId(trimId);

        softAssertions.assertThat(exteriorColorImgUrls.get(0).getExteriorImgUrl()).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/11.png");
        softAssertions.assertThat(exteriorColorImgUrls.get(1).getExteriorImgUrl()).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/12.png");
        softAssertions.assertThat(exteriorColorImgUrls.get(2).getExteriorImgUrl()).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/13.png");
        softAssertions.assertThat(exteriorColorImgUrls.get(3).getExteriorImgUrl()).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/14.png");
        softAssertions.assertThat(exteriorColorImgUrls.get(4).getExteriorImgUrl()).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/15.png");
        softAssertions.assertThat(exteriorColorImgUrls.get(5).getExteriorImgUrl()).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/16.png");
    }
}
