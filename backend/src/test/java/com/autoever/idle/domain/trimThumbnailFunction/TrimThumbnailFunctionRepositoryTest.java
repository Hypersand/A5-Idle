package com.autoever.idle.domain.trimThumbnailFunction;

import com.autoever.idle.domain.trimThumbnailFunction.dto.TrimThumbnailFunctionDto;
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
@DisplayName("Trim Thumbnail Function Repository Test")
class TrimThumbnailFunctionRepositoryTest {

    @InjectSoftAssertions
    SoftAssertions softAssertions;

    @Autowired
    TrimThumbnailFunctionRepository trimThumbnailFunctionRepository;

    @Test
    @DisplayName("트림의 썸네일 기능을 반환한다")
    void findThumbnailFunctionByTrimId() {
        Long trimId = 1L;

        List<TrimThumbnailFunctionDto> thumbnailFunctions = trimThumbnailFunctionRepository.findThumbnailFunctionByTrimId(trimId);

        softAssertions.assertThat(thumbnailFunctions.get(0).getTrimThumbnailFunctionId()).isEqualTo(1L);
        softAssertions.assertThat(thumbnailFunctions.get(0).getName()).isEqualTo("베젤리스 인사이드 미러");
        softAssertions.assertThat(thumbnailFunctions.get(0).getDescription()).isEqualTo("-");
        softAssertions.assertThat(thumbnailFunctions.get(0).getWidthPixel()).isEqualTo(300);
        softAssertions.assertThat(thumbnailFunctions.get(0).getHeightPixel()).isEqualTo(72);
        softAssertions.assertThat(thumbnailFunctions.get(1).getTrimThumbnailFunctionId()).isEqualTo(2L);
        softAssertions.assertThat(thumbnailFunctions.get(1).getName()).isEqualTo("12.3인치 내비게이션");
        softAssertions.assertThat(thumbnailFunctions.get(1).getDescription()).isEqualTo("와이드하고 품격 있는 실내공간을 연출하고 고해상도 대화면으로 뛰어난 시인성과 최첨단 인포테인먼트 기능을 제공합니다.주요기능 : 대화면 HD급 고해상도(1,920x720) 모니터, 내비게이션 자동 무선 업데이트, 개인화 프로필, 서버형 음성인식 시스템, 블루링크");
        softAssertions.assertThat(thumbnailFunctions.get(1).getWidthPixel()).isEqualTo(257);
        softAssertions.assertThat(thumbnailFunctions.get(1).getHeightPixel()).isEqualTo(97);
        softAssertions.assertThat(thumbnailFunctions.get(2).getTrimThumbnailFunctionId()).isEqualTo(3L);
        softAssertions.assertThat(thumbnailFunctions.get(2).getName()).isEqualTo("스마트 크루즈 컨트롤");
        softAssertions.assertThat(thumbnailFunctions.get(2).getDescription()).isEqualTo("스마트 크루즈 작동 중 고속도로/도시고속도로/자동차전용 도로 내 고속도로 진출입로 주행 시 차로를 판단하여 사전감속 또는 최적 속도에 맞추어 감속을 진행합니다.");
        softAssertions.assertThat(thumbnailFunctions.get(2).getWidthPixel()).isEqualTo(226);
        softAssertions.assertThat(thumbnailFunctions.get(2).getHeightPixel()).isEqualTo(117);
    }
}
