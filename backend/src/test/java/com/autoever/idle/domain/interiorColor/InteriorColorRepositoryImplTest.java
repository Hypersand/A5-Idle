package com.autoever.idle.domain.interiorColor;

import com.autoever.idle.domain.interiorColor.dto.InteriorColorDto;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
@ExtendWith(SoftAssertionsExtension.class)
@DisplayName("Interior Color Repository Test")
class InteriorColorRepositoryImplTest {

    @Autowired
    InteriorColorRepository interiorColorRepository;

    @InjectMocks
    SoftAssertions softAssertions;

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
}
