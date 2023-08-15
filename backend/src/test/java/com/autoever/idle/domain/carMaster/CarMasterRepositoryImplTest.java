package com.autoever.idle.domain.carMaster;

import com.autoever.idle.domain.carMaster.dto.CarMasterDto;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@ExtendWith(SoftAssertionsExtension.class)
class CarMasterRepositoryImplTest {

    @InjectSoftAssertions
    SoftAssertions softly;

    @Autowired
    private CarMasterRepository carMasterRepository;

    @Test
    @DisplayName("카마스터 찾기(거리순)")
    void findByDistance() {

        Double nowLatitude = 36.05;
        Double nowLongitude = 126.1234;

        List<CarMasterDto> carMasterByDistance = carMasterRepository.findSortedCarMasterByDistance(nowLatitude, nowLongitude);
        softly.assertThat(carMasterByDistance.size()).isEqualTo(2);
        softly.assertThat(carMasterByDistance.get(0).getMasterName()).isEqualTo("김팰리");
        softly.assertThat(carMasterByDistance.get(1).getMasterName()).isEqualTo("정현대");
    }

    @Test
    @DisplayName("카마스터 찾기(판매량순)")
    void findBySaleRate() {

        Double nowLatitude = 36.1324;
        Double nowLongitude = 126.1324;

        List<CarMasterDto> carMasterByDistance = carMasterRepository.findSortedCarMasterBySaleRate(nowLatitude, nowLongitude);
        softly.assertThat(carMasterByDistance.size()).isEqualTo(3);
        softly.assertThat(carMasterByDistance.get(0).getMasterName()).isEqualTo("김팰리");
        softly.assertThat(carMasterByDistance.get(1).getMasterName()).isEqualTo("정현대");
        softly.assertThat(carMasterByDistance.get(2).getMasterName()).isEqualTo("심포니");
    }
}