package com.autoever.idle.domain.option;

import com.autoever.idle.domain.option.dto.OptionDto;
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

//    @Test
//    @DisplayName("트림 ID에 대한 추가 옵션 정보를 담은 목록을 반환한다")
//    void findAdditionalOptionList() {
//        //given
//        Long trimId = 1L;
//
//        //when
//        List<OptionDto> additionalOptionList = optionRepository.findAdditionalOptionList(trimId);
//
//        //then
//
//    }

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



}