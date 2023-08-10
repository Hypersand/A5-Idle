package com.autoever.idle.domain.myTrim;

import com.autoever.idle.domain.function.dto.MyTrimFunctionResDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class MyTrimServiceTest {

    @Autowired
    MyTrimService myTrimService;

    @Test
    @DisplayName("내게 맞는 트림 찾기에 들어갈 기능 9가지 반환 메소드")
    void findMyTrimFunctions(){
        List<MyTrimFunctionResDto> myTrimFunctions = myTrimService.findMyTrimFunctions();

        assertThat(myTrimFunctions.size()).isEqualTo(9);
        assertThat(myTrimFunctions.get(0).getName()).isEqualTo("전후석 통합 터치 공조 컨트롤");
        assertThat(myTrimFunctions.get(1).getName()).isEqualTo("헤드업 디스플레이");
        assertThat(myTrimFunctions.get(2).getName()).isEqualTo("냉온장 컵홀더");
        assertThat(myTrimFunctions.get(3).getName()).isEqualTo("2열 통풍시트");
        assertThat(myTrimFunctions.get(4).getName()).isEqualTo("캘리그래피 전용 디자인(휠, 라디에이터 그릴 & 가니쉬, 인테이크 그릴, 바디컬러 클래딩, 프론트 & 리어 크롬 스키드 플레이트)");
        assertThat(myTrimFunctions.get(5).getName()).isEqualTo("후측방 충돌 경고(주행)");
        assertThat(myTrimFunctions.get(6).getName()).isEqualTo("내비게이션 기반 스마트 크루즈 컨트롤(진출입로)");
        assertThat(myTrimFunctions.get(7).getName()).isEqualTo("KRELL 프리미엄 사운드(12스피커, 외장앰프)");
        assertThat(myTrimFunctions.get(8).getName()).isEqualTo("클러스터(12.3인치 컬러 LCD)");
    }

}