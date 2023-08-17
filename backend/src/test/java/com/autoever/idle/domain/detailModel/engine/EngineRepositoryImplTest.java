package com.autoever.idle.domain.detailModel.engine;

import com.autoever.idle.domain.detailModel.dto.EngineResponse;
import com.autoever.idle.domain.detailModel.engine.repository.EngineRepository;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.SoftAssertions.assertSoftly;

@SpringBootTest
@DisplayName("Engine Repository Test")
class EngineRepositoryImplTest {

    @Autowired
    private EngineRepository engineRepository;

    @Test
    @DisplayName("트림 id를 통해 연관된 구동 방식 조회")
    void findDrivingMethod() {
        //given
        Long trimId = 1L;

        //when
        List<EngineResponse> engineResponses = engineRepository.findAll(trimId);

        //then
        assertSoftly(softAssertions -> {
                    softAssertions.assertThat(engineResponses.size()).isEqualTo(2);
                    softAssertions.assertThat(engineResponses.get(0).getType()).isEqualTo("가솔린 3.8");
                    softAssertions.assertThat(engineResponses.get(1).getType()).isEqualTo("디젤 2.2");
                }
        );
    }

}