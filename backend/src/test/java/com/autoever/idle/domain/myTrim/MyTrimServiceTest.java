package com.autoever.idle.domain.myTrim;

import com.autoever.idle.domain.function.FunctionRepository;
import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionResDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimResDto;
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

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
@ExtendWith(SoftAssertionsExtension.class)
class MyTrimServiceTest {

    @InjectSoftAssertions
    private SoftAssertions softly;

    @Mock
    private FunctionRepository functionRepository;

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
    void findTrimBySelectFunctions(){
        //given
        List<Map<String, Integer>> functionIdList = new ArrayList<>();
        Map<String, Integer> functionIdMap = new HashMap<>();
        functionIdMap.put("functionId",109);
        functionIdList.add(functionIdMap);
        List<MyTrimDto> myTrimDtoList = new ArrayList<>();
        myTrimDtoList.add(new MyTrimDto("Exclusive",null));
        myTrimDtoList.add(new MyTrimDto("Le Blanc",false));
        myTrimDtoList.add(new MyTrimDto("Prestige",true));
        myTrimDtoList.add(new MyTrimDto("Calligraphy",true));
        given(functionRepository.findTrimBySelectFunctions(anyInt())).willReturn(myTrimDtoList);

        //when
        List<MyTrimResDto> myTrimResDtoList = myTrimService.findTrimBySelectFunctions(functionIdList);

        //then
        verify(functionRepository).findTrimBySelectFunctions(anyInt());
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

}