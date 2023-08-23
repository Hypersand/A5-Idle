package com.autoever.idle.domain.trim;

import com.autoever.idle.domain.category.functionCategory.dto.FunctionCategoryDto;
import com.autoever.idle.domain.category.functionCategory.repository.FunctionCategoryRepository;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorImgUrlDto;
import com.autoever.idle.domain.exteriorColor.dto.TrimThumbnailColorResponse;
import com.autoever.idle.domain.exteriorColor.repository.ExteriorColorRepository;
import com.autoever.idle.domain.interiorColor.dto.InteriorImgUrlDto;
import com.autoever.idle.domain.interiorColor.repository.InteriorColorRepository;
import com.autoever.idle.domain.trim.dto.TrimDto;
import com.autoever.idle.domain.trim.dto.TrimSelectionResponse;
import com.autoever.idle.domain.trim.repository.TrimRepository;
import com.autoever.idle.domain.trim.service.TrimService;
import com.autoever.idle.domain.trimThumbnailFunction.dto.TrimThumbnailFunctionResponse;
import com.autoever.idle.domain.trimThumbnailFunction.repository.TrimThumbnailFunctionRepository;
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
@DisplayName("Trim Service Test")
class TrimServiceTest {

    @InjectSoftAssertions
    SoftAssertions softAssertions;

    @InjectMocks
    TrimService trimService;

    @Mock
    TrimRepository trimRepository;
    
    @Mock
    FunctionCategoryRepository functionCategoryRepository;

    @Mock
    TrimThumbnailFunctionRepository trimThumbnailFunctionRepository;

    @Mock
    ExteriorColorRepository exteriorColorRepository;

    @Mock
    InteriorColorRepository interiorColorRepository;

    List<FunctionCategoryDto> categories;
    List<TrimThumbnailFunctionResponse> thumbnailFunctions;
    List<ExteriorImgUrlDto> exteriorImgUrls;
    List<InteriorImgUrlDto> interiorImgUrls;
    TrimThumbnailColorResponse thumbnailColor;
    List<TrimDto> trims;

    @BeforeEach
    void setUp() {
        categories = new ArrayList<>();
        categories.add(new FunctionCategoryDto(1L, "파워트레인/성능"));
        categories.add(new FunctionCategoryDto(2L, "지능형 안전기술"));
        categories.add(new FunctionCategoryDto(3L, "안전"));
        categories.add(new FunctionCategoryDto(4L, "외관"));
        categories.add(new FunctionCategoryDto(5L, "내장"));
        categories.add(new FunctionCategoryDto(6L, "시트"));
        categories.add(new FunctionCategoryDto(7L, "편의"));
        categories.add(new FunctionCategoryDto(8L, "멀티미디어"));

        thumbnailFunctions = new ArrayList<>();
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                1L,
                "베젤리스 인사이드 미러",
                "-",
                300,
                72
        ));
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                2L,
                "12.3인치 내비게이션",
                "와이드하고 품격 있는 실내공간을 연출하고 고해상도 대화면으로 뛰어난 시인성과 최첨단 인포테인먼트 기능을 제공합니다.주요기능 : 대화면 HD급 고해상도(1,920x720) 모니터, 내비게이션 자동 무선 업데이트, 개인화 프로필, 서버형 음성인식 시스템, 블루링크",
                257,
                97
        ));
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                3L,
                "스마트 크루즈 컨트롤",
                "스마트 크루즈 작동 중 고속도로/도시고속도로/자동차전용 도로 내 고속도로 진출입로 주행 시 차로를 판단하여 사전감속 또는 최적 속도에 맞추어 감속을 진행합니다.",
                226,
                117
        ));
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                4L,
                "서라운드 뷰 모니터",
                "차량 앞/뒤/좌/우 360도 모든 상황을 AVN화면을 통해 볼 수 있는 장치로 고화질 카메라 및 디지털 영상 전송 방식을 적용하여 영상 경계선 없이 선명하고 깨끗한 화질을 제공합니다.",
                611,
                126
        ));
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                5L,
                "클러스터(12.3인치 컬러 LCD)",
                "컬러 LCD 클러스터(1,920x720)는 시인성이 높고 정보 파악이 용이하며, 주행모드별 차별화된 그래픽으로 즐거운 드라이빙 환경을 제공합니다.",
                257,
                99
        ));
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                6L,
                "20인치 알로이 휠",
                "-",
                114,
                220
        ));
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                7L,
                "스마트 자세 제어",
                "스마트 자세제어 시스템은 전동 시트의 장점을 극대화하는 사양으로 사전에 입력한 운전자의 신체 정보에 따라 시트, 스티어링 휠, 사이드 미러, 헤드업 디스플레이의 위치를 제안하는 기능입니다. 또한 장시간 주행 시 시트의 엉덩이와 허리 쿠션을 자동으로 조절해 탑승자의 피로를 줄이고 졸음을 방지하기도 합니다.",
                337,
                135
        ));
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                8L,
                "2열 수동식 도어 커튼",
                "뒷좌석 유리를 통해 들어오는 외부 광선을 차단할 때 사용하는 수동식 커튼입니다.",
                326,
                135
        ));
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                9L,
                "전후석 통합 터치 공조 컨트롤",
                "터치식으로 2열 공조 제어까지 가능하여 편리한 터치 타입 공조 패널에 공기질 센서, 마이크로 에어 필터, 운전석 공조 연동 자동 제어 등의 공기청정모드가 적용되어 실내 미세먼지를 획기적으로 저감하며 쾌적한 실내 환경을 제공합니다.",
                262,
                104
        ));
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                10L,
                "KRELL 프리미엄 사운드",
                "음향의 세밀함과 공간감, 다이내믹함을 추구하며 세계 유수의 사운드 어워드를 수상한 세계적인 하이앤드 오디오 시스템 브랜드인 크렐 사운드 시스템을 적용하였습니다.",
                331,
                165
        ));
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                11L,
                "원격 스마트 주차 보조",
                "주차 보조 기능을 활성화 한 후 주차공간을 발견하게 되면 차량 내 안내에 따라 하차한 다음, 스마트키의 작동 버튼을 누르고만 있으면 차가 스스로 주차합니다. 직각주차 및 평행주차 모두 가능하며, 운전자 탑승 시에도 차량 내부의 작동 버튼을 누르고 있으면 자동 주차 보조를 지원합니다.",
                140,
                121
        ));
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                12L,
                "캘리그래피 전용 디자인",
                "(휠, 라디에이터 그릴 & 가니쉬, 인테이크 그릴, 바디컬러 클래딩, 프론트 & 리어 크롬 스키드 플레이트)",
                53,
                179
        ));

        exteriorImgUrls = new ArrayList<>();
        exteriorImgUrls.add(new ExteriorImgUrlDto("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/11.png"));
        exteriorImgUrls.add(new ExteriorImgUrlDto("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/12.png"));

        interiorImgUrls = new ArrayList<>();
        interiorImgUrls.add(new InteriorImgUrlDto("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-1.png"));

        thumbnailColor = new TrimThumbnailColorResponse(exteriorImgUrls, interiorImgUrls);

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
        given(functionCategoryRepository.findAll()).willReturn(categories);
        given(trimThumbnailFunctionRepository.findThumbnailFunctionByTrimId(1L)).willReturn(thumbnailFunctions);
        given(exteriorColorRepository.findExteriorColorImgUrlsByTrimId(1L)).willReturn(exteriorImgUrls);
        given(interiorColorRepository.findInteriorColorImgUrlsByTrimId(1L)).willReturn(interiorImgUrls);
        given(trimRepository.findAll(carTypeName)).willReturn(trims);

        List<TrimSelectionResponse> trimResponse = trimService.findAllTrims("팰리세이드");

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
        softAssertions.assertThat(trimResponse.get(0).getColors().getExteriorImgUrls().get(0).getExteriorImgUrl())
                .isEqualTo(exteriorImgUrls.get(0).getExteriorImgUrl());
        softAssertions.assertThat(trimResponse.get(0).getColors().getExteriorImgUrls().get(1).getExteriorImgUrl())
                .isEqualTo(exteriorImgUrls.get(1).getExteriorImgUrl());
        softAssertions.assertThat(trimResponse.get(0).getColors().getInteriorImgUrls().get(0).getInteriorImgUrl())
                .isEqualTo(interiorImgUrls.get(0).getInteriorImgUrl());
    }
}
