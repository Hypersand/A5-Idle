package com.autoever.idle.domain.trim;

import com.autoever.idle.domain.trim.dto.TrimDescriptionDto;
import com.autoever.idle.domain.trim.dto.TrimDto;
import com.autoever.idle.domain.trim.repository.TrimRepository;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
@DisplayName("Trim Repository Test")
class TrimRepositoryTest {

    SoftAssertions softAssertions;

    @Autowired
    TrimRepository trimRepository;

    @BeforeEach
    void beforeEach() {
        softAssertions = new SoftAssertions();
    }

    @Test
    @DisplayName("해당 차종의 트림을 반환한다")
    void findAll() {
        String carTypeName = "팰리세이드";

        List<TrimDto> trims = trimRepository.findAll(carTypeName);

        softAssertions.assertThat(trims.size()).isEqualTo(4);
    }

    @Test
    @DisplayName("")
    void findByTrimId() {
        Long trimId = 1L;

        TrimDescriptionDto trimDescriptionDto = trimRepository.findByTrimId(trimId);

        softAssertions.assertThat(trimDescriptionDto.getTrimDescription()).isEqualTo("실용적이고 기본적인 기능을 갖춘 베이직 트림");
    }
}
