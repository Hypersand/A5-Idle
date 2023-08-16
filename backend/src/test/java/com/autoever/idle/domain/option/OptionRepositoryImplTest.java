package com.autoever.idle.domain.option;

import com.autoever.idle.domain.option.dto.OptionDto;
import com.autoever.idle.domain.option.dto.SelectedOptionDto;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@ExtendWith(SoftAssertionsExtension.class)
@DisplayName("Option Repository Test")
@SpringBootTest
class OptionRepositoryImplTest {

    @InjectSoftAssertions
    private SoftAssertions softAssertions;

    @Autowired
    private OptionRepository optionRepository;

    @Test
    @DisplayName("트림 ID에 대한 추가 옵션 정보를 담은 목록을 반환한다")
    void findAdditionalOptionList() {
        //given
        Long trimId = 1L;

        //when
        List<OptionDto> additionalOptionList = optionRepository.findAdditionalOptionList(trimId);

        //then
        softAssertions.assertThat(additionalOptionList.size()).isEqualTo(12);

    }

    @Test
    @DisplayName("엔진 ID와 선택된 옵션 ID 목록을 통해 비활성화된 옵션 정보를 반환한다")
    void findNotActivatedOptionIdList() {
        //given
        Long engineId = 1L;
        List<Long> selectedOptionIds = List.of(15L);

        //when
        List<Long> notActivatedOptionIdList = optionRepository.findNotActivatedOptionIdList(engineId, selectedOptionIds);

        //then
        softAssertions.assertThat(notActivatedOptionIdList.size()).isEqualTo(3);
    }

    @Test
    @DisplayName("선택된 옵션 정보를 반환한다")
    void findSelectedOptions() {
        //given
        List<Long> optionIds = List.of(1L, 2L, 10L);

        //when
        List<SelectedOptionDto> selectedOptions = optionRepository.findSelectedOptions(optionIds);

        //then
        softAssertions.assertThat(selectedOptions.size()).isEqualTo(3);
        softAssertions.assertThat(selectedOptions.get(0).getOptionId()).isEqualTo(1L);
        softAssertions.assertThat(selectedOptions.get(0).getOptionName()).isEqualTo("빌트인 캠(보조배터리 포함)");
        softAssertions.assertThat(selectedOptions.get(1).getOptionId()).isEqualTo(2L);
        softAssertions.assertThat(selectedOptions.get(1).getOptionName()).isEqualTo("H Genuine Accessories 트레일러 & 셀");
        softAssertions.assertThat(selectedOptions.get(2).getOptionId()).isEqualTo(10L);
        softAssertions.assertThat(selectedOptions.get(2).getOptionName()).isEqualTo("듀얼와이드 선루프");
    }
}