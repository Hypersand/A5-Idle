package com.autoever.idle.domain.carMaster;

import com.autoever.idle.domain.carMaster.dto.CarMasterDto;
import com.autoever.idle.global.exception.custom.InvalidLocationException;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.AssertionsForClassTypes.assertThatThrownBy;

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

    @Test
    @DisplayName("잘못된 위치 정보에 대한 예외 테스트")
    void IllegalLocation() {

        assertThatThrownBy(() -> carMasterService.findAvailableCarMaster(95.1, 128.64))
                .isInstanceOf(InvalidLocationException.class);

        assertThatThrownBy(() -> carMasterService.findAvailableCarMaster(-100.1, 127.0))
                .isInstanceOf(InvalidLocationException.class);

        assertThatThrownBy(() -> carMasterService.findAvailableCarMaster(27.1, 190.3))
                .isInstanceOf(InvalidLocationException.class);

        assertThatThrownBy(() -> carMasterService.findAvailableCarMaster(27.1, -193.3))
                .isInstanceOf(InvalidLocationException.class);
    }
}