package com.autoever.idle.domain.option;

import com.autoever.idle.domain.function.FunctionRepository;
import com.autoever.idle.domain.function.dto.FunctionDto;
import com.autoever.idle.domain.option.dto.OptionDto;
import com.autoever.idle.domain.option.dto.OptionFunctionsDto;
import com.autoever.idle.domain.option.dto.OptionRequest;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyList;
import static org.mockito.Mockito.when;


@ExtendWith(MockitoExtension.class)
@ExtendWith(SoftAssertionsExtension.class)
@DisplayName("Option Service Test")
class OptionServiceTest {

    @Mock
    private OptionRepository optionRepository;
    @Mock
    private FunctionRepository functionRepository;
    @InjectMocks
    private OptionService optionService;
    @InjectSoftAssertions
    private SoftAssertions softAssertions;

    private List<OptionDto> additionalOptionList = new ArrayList<>();
    private List<Long> notActivatedOptionIdList = List.of(1L, 15L);
    private List<OptionFunctionsDto> optionFunctionsDtoList = new ArrayList<>();
    private List<FunctionDto> functionDtoList = new ArrayList<>();

    @BeforeEach
    void setUp() {
        functionDtoList.add(new FunctionDto(
                119L,
                "러기지 프로텍션 매트",
                "-",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/112-1.jpg",
                null));

        OptionDto optionDto = new OptionDto(8L,
                "프로텍션 매트 패키지 I",
                250000L,
                "구매자 10%가 선택",
                "흠집없이 내 차에 짐을 싣고 싶다면?\n프로텍션 매트 패기지1로 흠집 걱정 없이 짐을 실어보세요.",
                "차량 보호",
                "false");

        additionalOptionList.add(optionDto);

        OptionFunctionsDto optionFunctionsDto = new OptionFunctionsDto(
                optionDto.getOptionId(),
                optionDto.getOptionName(),
                optionDto.getOptionPrice(),
                optionDto.getOptionPurchaseRate(),
                optionDto.getOptionDescription(),
                optionDto.getOptionCategory(),
                optionDto.getOptionCanSelect(),
                functionDtoList
        );
        optionFunctionsDtoList.add(optionFunctionsDto);
    }

    @Test
    @DisplayName("추가 옵션 정보와 포함하는 기능 정보 목록을 반환한다")
    void getOptionFunctions() {
        //given
        Long trimId = 1L;
        Long engineId = 1L;
        OptionRequest optionRequest = new OptionRequest(1L, List.of(1L, 15L), 1L);

        //when
        when(optionRepository.findAdditionalOptionList(any())).thenReturn(additionalOptionList);
        when(optionRepository.findNotActivatedOptionIdList(any(), anyList())).thenReturn(notActivatedOptionIdList);
        when(functionRepository.findFunctionsInAdditionalOption(any())).thenReturn(functionDtoList);
        List<OptionFunctionsDto> optionFunctions = optionService.getOptionFunctions(optionRequest);

        //then
        softAssertions.assertThat(optionFunctions.get(0).getOptionId()).isEqualTo(additionalOptionList.get(0).getOptionId());
        softAssertions.assertThat(optionFunctions.get(0).getOptionName()).isEqualTo(additionalOptionList.get(0).getOptionName());
        softAssertions.assertThat(optionFunctions.get(0).getFunctions().get(0).getFunctionId()).isEqualTo(functionDtoList.get(0).getFunctionId());
    }
}