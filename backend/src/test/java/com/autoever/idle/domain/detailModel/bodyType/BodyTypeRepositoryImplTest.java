package com.autoever.idle.domain.detailModel.bodyType;

import com.autoever.idle.domain.detailModel.bodyType.repository.BodyTypeRepository;
import com.autoever.idle.domain.detailModel.dto.BodyTypeResponse;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.SoftAssertions.assertSoftly;

@SpringBootTest
@DisplayName("BodyType Repository Test")
class BodyTypeRepositoryImplTest {

    @Autowired
    private BodyTypeRepository bodyTypeRepository;

    @Test
    @DisplayName("트림 id를 통해 연관된 바디 타입 조회")
    void findBodyType() {
        //given
        Long trimId = 1L;

        //when
        List<BodyTypeResponse> bodyTypeResponses = bodyTypeRepository.findAll(trimId);

        //then
        assertSoftly(softAssertions -> {
            softAssertions.assertThat(bodyTypeResponses.size()).isEqualTo(2);
            softAssertions.assertThat(bodyTypeResponses.get(0).getType()).isEqualTo("7인승");
            softAssertions.assertThat(bodyTypeResponses.get(1).getType()).isEqualTo("8인승");
                }
        );
    }
}