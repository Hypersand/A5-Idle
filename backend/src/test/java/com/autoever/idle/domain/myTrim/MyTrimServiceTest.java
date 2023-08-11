package com.autoever.idle.domain.myTrim;

import com.autoever.idle.domain.function.FunctionRepository;
import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionResDto;
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
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

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
    void findMyTrimFunctions(){
        //given
        List<MyTrimFunctionDto> myTrimFunctionDtoList = new ArrayList<>();
        myTrimFunctionDtoList.add(new MyTrimFunctionDto(1, "기능1","설명","imgUrl",1));
        myTrimFunctionDtoList.add(new MyTrimFunctionDto(2, "기능2","설명","imgUrl",1));
        myTrimFunctionDtoList.add(new MyTrimFunctionDto(4, "기능4","설명","imgUrl",1));
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

}