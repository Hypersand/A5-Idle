package com.autoever.idle.domain.carMaster;

import com.autoever.idle.domain.carMaster.dto.CarMasterDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CarMasterServiceTest {


    @Autowired
    CarMasterService carMasterService;

    @Test
    @DisplayName("10km 이내의 카마스터 찾기")
    void findCarMaster() {
        Double nowLatitude = 37.561583;
        Double nowLongitude = 127.038417;

        List<CarMasterDto> availableCarMaster = carMasterService.findAvailableCarMaster(nowLatitude, nowLongitude);
        assertThat(availableCarMaster.size()).isEqualTo(2);
        assertThat(availableCarMaster.get(0).getMasterName()).isEqualTo("김팰리");
        assertThat(availableCarMaster.get(1).getMasterName()).isEqualTo("정현대");

    }
}