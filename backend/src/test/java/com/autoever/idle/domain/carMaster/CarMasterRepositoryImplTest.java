package com.autoever.idle.domain.carMaster;

import com.autoever.idle.domain.carMaster.dto.CarMasterDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class CarMasterRepositoryImplTest {

    @Autowired
    private CarMasterRepository carMasterRepository;

    @Test
    @DisplayName("10KM 이내의 카마스터 찾기")
    void findCarMaster() {

        Double nowLatitude = 37.561583;
        Double nowLongitude = 127.038417;

        List<CarMasterDto> availableCarMaster = carMasterRepository.findAvailableCarMaster(nowLatitude, nowLongitude);
        assertThat(availableCarMaster.size()).isEqualTo(2);
        assertThat(availableCarMaster.get(0).getMasterName()).isEqualTo("김팰리");
        assertThat(availableCarMaster.get(1).getMasterName()).isEqualTo("정현대");
    }
}