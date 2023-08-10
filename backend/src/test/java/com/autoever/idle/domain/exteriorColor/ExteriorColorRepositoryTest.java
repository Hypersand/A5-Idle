package com.autoever.idle.domain.exteriorColor;

import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorDto;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
@DisplayName("Exterior Color Repositor Test")
class ExteriorColorRepositoryTest {

    @Autowired
    ExteriorColorRepository exteriorColorRepository;

    @Test
    @DisplayName("트림 id를 이용해 해당 트림의 외장 색상 정보를 반환한다")
    void findExteriorColorsByTrimId() {
        Long trimId = 1L;

        List<ExteriorColorDto> exteriorColors = exteriorColorRepository.findExteriorColorsByTrimId(trimId);

        assertThat(exteriorColors.size()).isEqualTo(6);
    }
}
