package com.autoever.idle.domain.carType;

import com.autoever.idle.domain.carType.dto.CarTypeDto;
import com.autoever.idle.domain.carType.repository.CarTypeRepository;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@DisplayName("CarType Repository Test")
class CarTypeRepositoryTest {

    SoftAssertions softAssertions;

    @Autowired
    CarTypeRepository carTypeRepository;

    @BeforeEach
    void beforeEach() {
        softAssertions = new SoftAssertions();
    }

    @Test
    @DisplayName("차종 이름으로 차종의 id를 찾는다")
    void findByName() {
        String carTypeName = "팰리세이드";

        List<Long> carTypeIds = carTypeRepository.findByName(carTypeName);

        softAssertions.assertThat(carTypeIds.size()).isEqualTo(1L);
    }

    @Test
    @DisplayName("카테고리별 모든 차종 찾기")
    void findByCategory() {
        Long carCategoryId = 8L;

        List<CarTypeDto> carTypeDtoList = carTypeRepository.findByCategory(carCategoryId);
        softAssertions.assertThat(carTypeDtoList.size()).isEqualTo(8);

    }

}
