package com.autoever.idle.domain.myTrim;

import com.autoever.idle.domain.function.FunctionRepository;
import com.autoever.idle.domain.function.TrimFunctionRepository;
import com.autoever.idle.domain.function.dto.FunctionIdDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionResDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimResDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimSubmitReqDto;
import com.autoever.idle.domain.option.MyTrimOptionDto;
import com.autoever.idle.global.exception.custom.InvalidFunctionException;
import com.autoever.idle.global.exception.custom.InvalidMyTrimFunctionException;
import com.autoever.idle.global.exception.custom.InvalidTrimFunctionException;
import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static org.mockito.ArgumentMatchers.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
@ExtendWith(SoftAssertionsExtension.class)
class MyTrimServiceTest {

    @InjectSoftAssertions
    private SoftAssertions softly;

    @Mock
    private FunctionRepository functionRepository;

    @Mock
    private TrimFunctionRepository trimFunctionRepository;

    @InjectMocks
    private MyTrimService myTrimService;

    @Test
    @DisplayName("내게 맞는 트림 찾기에 들어갈 기능 9가지 반환 메소드")
    void findMyTrimFunctions() {
        //given
        List<MyTrimFunctionDto> myTrimFunctionDtoList = new ArrayList<>();
        myTrimFunctionDtoList.add(new MyTrimFunctionDto(1, "기능1", "설명", "imgUrl", 1));
        myTrimFunctionDtoList.add(new MyTrimFunctionDto(2, "기능2", "설명", "imgUrl", 1));
        myTrimFunctionDtoList.add(new MyTrimFunctionDto(4, "기능4", "설명", "imgUrl", 1));
        given(functionRepository.findMyTrimFunctions()).willReturn(myTrimFunctionDtoList);

        //when
        List<MyTrimFunctionResDto> myTrimFunctions = myTrimService.findMyTrimFunctions();

        //then
        verify(functionRepository).findMyTrimFunctions();
        softly.assertThat(myTrimFunctions.size()).isEqualTo(3);
        softly.assertThat(myTrimFunctions.get(0).getName()).isEqualTo("기능1");
        softly.assertThat(myTrimFunctions.get(1).getName()).isEqualTo("기능2");
        softly.assertThat(myTrimFunctions.get(2).getName()).isEqualTo("기능4");
    }

    @Test
    @DisplayName("선택지 선택시")
    void findTrimBySelectFunctions() {
        //given
        List<Map<String, Integer>> functionIdList = new ArrayList<>();
        Map<String, Integer> functionIdMap1 = new HashMap<>();
        Map<String, Integer> functionIdMap2 = new HashMap<>();
        functionIdMap1.put("functionId", 109);
        functionIdMap2.put("functionId", 48);
        functionIdList.add(functionIdMap1);
        functionIdList.add(functionIdMap2);
        List<MyTrimDto> myTrimDtoList = new ArrayList<>();
        myTrimDtoList.add(new MyTrimDto("Exclusive", null));
        myTrimDtoList.add(new MyTrimDto("Le Blanc", false));
        myTrimDtoList.add(new MyTrimDto("Prestige", true));
        myTrimDtoList.add(new MyTrimDto("Calligraphy", true));
        given(functionRepository.checkMyTrimFunction(anyInt())).willReturn("TRUE");
        given(functionRepository.findTrimBySelectFunctions(anyInt())).willReturn(myTrimDtoList);

        //when
        List<MyTrimResDto> myTrimResDtoList = myTrimService.findTrimBySelectFunctions(functionIdList);

        //then
        verify(functionRepository, times(2)).findTrimBySelectFunctions(anyInt());
        softly.assertThat(myTrimResDtoList.size()).isEqualTo(4);
        softly.assertThat(myTrimResDtoList.get(0).getIsDefault()).isEqualTo(null);
        softly.assertThat(myTrimResDtoList.get(0).getSelectPossible()).isEqualTo(false);
        softly.assertThat(myTrimResDtoList.get(1).getIsDefault()).isEqualTo(false);
        softly.assertThat(myTrimResDtoList.get(1).getSelectPossible()).isEqualTo(true);
        softly.assertThat(myTrimResDtoList.get(2).getIsDefault()).isEqualTo(true);
        softly.assertThat(myTrimResDtoList.get(2).getSelectPossible()).isEqualTo(true);
        softly.assertThat(myTrimResDtoList.get(3).getIsDefault()).isEqualTo(true);
        softly.assertThat(myTrimResDtoList.get(3).getSelectPossible()).isEqualTo(true);

    }

    @Test
    @DisplayName("존재하지 않는 기능 예외 처리")
    void checkFunctionExist() {
        //given
        List<Map<String, Integer>> functionIdList = new ArrayList<>();
        Map<String, Integer> functionIdMap = new HashMap<>();
        functionIdMap.put("functionId", 157);
        functionIdList.add(functionIdMap);
        String returnNull = null;
        given(functionRepository.checkMyTrimFunction(anyInt())).willReturn(returnNull);

        //when&then
        softly.assertThatThrownBy(() -> myTrimService.findTrimBySelectFunctions(functionIdList)).isInstanceOf(InvalidFunctionException.class);
        verify(functionRepository).checkMyTrimFunction(anyInt());
    }

    @Test
    @DisplayName("내게 맞는 트림 찾기의 유효한 기능 예외 처리")
    void checkValidFunction() {
        //given
        List<Map<String, Integer>> functionIdList = new ArrayList<>();
        Map<String, Integer> functionIdMap = new HashMap<>();
        functionIdMap.put("functionId", 15);
        functionIdList.add(functionIdMap);
        String returnFalse = "FALSE";
        given(functionRepository.checkMyTrimFunction(anyInt())).willReturn(returnFalse);

        //when&then
        softly.assertThatThrownBy(() -> myTrimService.findTrimBySelectFunctions(functionIdList)).isInstanceOf(InvalidMyTrimFunctionException.class);
        verify(functionRepository).checkMyTrimFunction(anyInt());
    }

    @Test
    @DisplayName("내게 맞는 트림 찾기 확인버튼 API 테스트")
    void findOptionBySelects() {
        //given
        List<Map<String, Long>> functionIdList = new ArrayList<>();
        Map<String, Long> functionIdMap = new HashMap<>();
        functionIdMap.put("functionId", 1L);
        functionIdList.add(functionIdMap);
        MyTrimSubmitReqDto myTrimSubmitReqDto = new MyTrimSubmitReqDto(1L, functionIdList);
        MyTrimOptionDto myTrimOptionDto = new MyTrimOptionDto(1L, "옵션", 400000L);
        given(trimFunctionRepository.checkDefaultFunction(anyLong(), anyLong())).willReturn("FALSE");
        given(functionRepository.findOptionBySelectFunction(any())).willReturn(myTrimOptionDto);
        given(functionRepository.checkMyTrimFunction(anyInt())).willReturn("TRUE");

        //when
        List<MyTrimOptionDto> myTrimOptionDtoList = myTrimService.findOptionBySelectFunctions(myTrimSubmitReqDto);

        //then
        softly.assertThat(myTrimOptionDtoList.size()).isEqualTo(1);
        softly.assertThat(myTrimOptionDtoList.get(0).getOptionId()).isEqualTo(1L);
        softly.assertThat(myTrimOptionDtoList.get(0).getOptionName()).isEqualTo("옵션");
    }

    @Test
    @DisplayName("트림에 선택된 기능이 존재하지 않는 기능일 경우")
    void checkTrimFunction() {
        //given
        List<Map<String, Long>> functionIdList = new ArrayList<>();
        Map<String, Long> functionIdMap = new HashMap<>();
        functionIdMap.put("functionId", 1L);
        functionIdList.add(functionIdMap);
        MyTrimSubmitReqDto myTrimSubmitReqDto = new MyTrimSubmitReqDto(1L, functionIdList);
        given(functionRepository.checkMyTrimFunction(anyInt())).willReturn("TRUE");
        given(trimFunctionRepository.checkDefaultFunction(anyLong(), anyLong())).willReturn(null);

        //when&then
        softly.assertThatThrownBy(() -> myTrimService.findOptionBySelectFunctions(myTrimSubmitReqDto))
                .isInstanceOf(InvalidTrimFunctionException.class);
    }

    @Test
    @DisplayName("트림 선택시 선택할 수 없는 선택지")
    void findNonSelectableFunctionsByTrim() {
        //given
        FunctionIdDto functionIdDto = new FunctionIdDto(2L);
        List<MyTrimFunctionDto> myTrimFunctionDtoList = new ArrayList<>();
        myTrimFunctionDtoList.add(new MyTrimFunctionDto(1,"이름","설명","url",1));
        given(trimFunctionRepository.checkNonSelectableFunctionAtTrim(anyLong(), anyLong())).willReturn(functionIdDto);
        given(functionRepository.findMyTrimFunctions()).willReturn(myTrimFunctionDtoList);

        //when
        List<FunctionIdDto> nonSelectableFunctionList = myTrimService.findNonSelectableFunctionsByTrim(1L);

        //then
        softly.assertThat(nonSelectableFunctionList.get(0).getFunctionId()).isEqualTo(2L);
    }
}
