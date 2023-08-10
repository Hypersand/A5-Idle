package com.autoever.idle.domain.carType;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@DisplayName("CarType Repository Test")
class CarTypeRepositoryTest {

    @Autowired
    CarTypeRepository carTypeRepository;

    @Test
    @DisplayName("차종 이름으로 차종의 id를 찾는다")
    void findByName() {
        String carTypeName = "팰리세이드";

        List<Long> carTypeIds = carTypeRepository.findByName(carTypeName);

        Assertions.assertThat(carTypeIds.size()).isEqualTo(1L);
    }

}
