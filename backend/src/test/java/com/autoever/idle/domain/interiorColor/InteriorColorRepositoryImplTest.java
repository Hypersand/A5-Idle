package com.autoever.idle.domain.interiorColor;


import com.autoever.idle.domain.interiorColor.dto.InteriorBillDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorImgUrlDto;
import com.autoever.idle.domain.interiorColor.repository.InteriorColorRepository;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@ExtendWith(SoftAssertionsExtension.class)
@DisplayName("Interior Color Repository Test")
class InteriorColorRepositoryImplTest {

    @Autowired
    InteriorColorRepository interiorColorRepository;

    @InjectSoftAssertions
    private SoftAssertions softAssertions;

    @Test
    @DisplayName("트림 id와 외장 색상 id를 이용해 내장 색상을 조회한다")
    void findInteriorColorByTrimIdAndExteriorId() {
        Long trimId = 2L;
        Long exteriorId = 1L;

        List<InteriorColorDto> response = interiorColorRepository.findInteriorColorByTrimIdAndExteriorId(trimId, exteriorId);

        softAssertions.assertThat(response.get(0).getInteriorId()).isEqualTo(48L);
        softAssertions.assertThat(response.get(0).getInteriorName()).isEqualTo("퀼팅천연(블랙)");
        softAssertions.assertThat(response.get(0).getInteriorPrice()).isEqualTo(0);
        softAssertions.assertThat(response.get(0).getInteriorImgUrl()).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-1.png");
        softAssertions.assertThat(response.get(0).getCarInteriorImgUrl()).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-2.png");
        softAssertions.assertThat(response.get(0).getInteriorPurchaseRate()).isEqualTo("구매자 20%가 선택");
        softAssertions.assertThat(response.get(1).getInteriorId()).isEqualTo(54L);
        softAssertions.assertThat(response.get(1).getInteriorName()).isEqualTo("쿨그레이");
        softAssertions.assertThat(response.get(1).getInteriorPrice()).isEqualTo(0);
        softAssertions.assertThat(response.get(1).getInteriorImgUrl()).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-1.png");
        softAssertions.assertThat(response.get(1).getCarInteriorImgUrl()).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-2.png");
        softAssertions.assertThat(response.get(1).getInteriorPurchaseRate()).isEqualTo("구매자 3%가 선택");
    }
  
    @Test
    @DisplayName("내장 색상 id를 이용해 최종 견적서에 필요한 내장 색상 정보를 반환한다")
    void findExteriorBill() {
        //given
        Long interiorId = 1L;

        //when
        InteriorBillDto interiorBillDto = interiorColorRepository.findInteriorBill(interiorId).orElse(null);

        //then
        softAssertions.assertThat(interiorBillDto.getInteriorId()).isEqualTo(1L);
        softAssertions.assertThat(interiorBillDto.getInteriorImgUrl()).isNotEmpty();
    }

    @Test
    @DisplayName("트림에서 선택 가능한 내장 색상을 반환한다")
    void findInteriorColorImgUrlsByTrimId() {
        Long trimId = 2L;

        List<InteriorImgUrlDto> interiorColorImgUrls = interiorColorRepository.findInteriorColorImgUrlsByTrimId(trimId);

        softAssertions.assertThat(interiorColorImgUrls.get(0).getInteriorImgUrl()).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-1.png");
        softAssertions.assertThat(interiorColorImgUrls.get(1).getInteriorImgUrl()).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-1.png");
    }

    @Test
    @DisplayName("전체 내장 색상 이미지 url을 반환한다")
    void findAllInteriorColorImgUrls() {
        List<String> imgUrls = interiorColorRepository.findAllInteriorColorImgUrls();

        softAssertions.assertThat(imgUrls.get(0)).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/117-1.png");
        softAssertions.assertThat(imgUrls.get(1)).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/118-1.png");
        softAssertions.assertThat(imgUrls.get(2)).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/119-1.png");
        softAssertions.assertThat(imgUrls.get(3)).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/120-1.png");
        softAssertions.assertThat(imgUrls.get(4)).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-1.png");
        softAssertions.assertThat(imgUrls.get(5)).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-1.png");
        softAssertions.assertThat(imgUrls.get(6)).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-1.png");
        softAssertions.assertThat(imgUrls.get(7)).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-1.png");
        softAssertions.assertThat(imgUrls.get(8)).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/17-1.png");
        softAssertions.assertThat(imgUrls.get(9)).isEqualTo("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/18-1.png");
    }
}
