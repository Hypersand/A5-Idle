package com.autoever.idle.domain.detailModel.drivingMethod;

import com.autoever.idle.domain.detailModel.drivingMethod.repository.DrivingMethodRepository;
import com.autoever.idle.domain.detailModel.dto.DrivingMethodResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.SoftAssertions.assertSoftly;

@SpringBootTest
@DisplayName("DrivingMethod Repository Test")
class DrivingMethodRepositoryImplTest {

    @Autowired
    private DrivingMethodRepository drivingMethodRepository;

    @Test
    @DisplayName("트림 id를 통해 연관된 구동 방식 조회")
    void findDrivingMethod() {
        //given
        Long trimId = 1L;

        //when
        List<DrivingMethodResponse> drivingMethodResponses = drivingMethodRepository.findAll(trimId);

        //then
        assertSoftly(softAssertions -> {
                    softAssertions.assertThat(drivingMethodResponses.size()).isEqualTo(2);
                    softAssertions.assertThat(drivingMethodResponses.get(0).getType()).isEqualTo("2WD");
                    softAssertions.assertThat(drivingMethodResponses.get(1).getType()).isEqualTo("4WD");
                }
        );
    }
}