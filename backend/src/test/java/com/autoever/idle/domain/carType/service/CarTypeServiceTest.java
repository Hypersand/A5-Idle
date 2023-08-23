package com.autoever.idle.domain.carType.service;

import com.autoever.idle.domain.carType.dto.CarTypeDto;
import com.autoever.idle.domain.carType.repository.CarTypeRepository;
import com.autoever.idle.domain.category.carCategory.dto.CarCategoryDto;
import com.autoever.idle.domain.category.carCategory.dto.CarCategoryResponse;
import com.autoever.idle.domain.category.carCategory.repository.CarCategoryRepository;
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

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
@ExtendWith(SoftAssertionsExtension.class)
@DisplayName("CarTypeService Test")
class CarTypeServiceTest {

    @InjectSoftAssertions
    SoftAssertions softly;

    @Mock
    CarTypeRepository carTypeRepository;

    @Mock
    CarCategoryRepository carCategoryRepository;

    @InjectMocks
    CarTypeService carTypeService;

    @Test
    @DisplayName("getAllType()메소드 테스트")
    void getAllType() {
        //given
        List<CarCategoryDto> carCategoryDtoList = new ArrayList<>();
        carCategoryDtoList.add(new CarCategoryDto(1L, "승용"));
        carCategoryDtoList.add(new CarCategoryDto(2L, "SUV"));
        List<CarTypeDto> carTypeDtoList = new ArrayList<>();
        carTypeDtoList.add(new CarTypeDto("팰리세이드", 40000L, "TRUE", "이미지url", "로고url"));
        carTypeDtoList.add(new CarTypeDto("베뉴", 50000L, "FALSE", "이미지url", "로고url"));
        given(carCategoryRepository.findAll()).willReturn(carCategoryDtoList);
        given(carTypeRepository.findByCategory(any())).willReturn(carTypeDtoList);

        //when
        List<CarCategoryResponse> responseList = carTypeService.getAllCarType();

        //then
        verify(carTypeRepository, times(2)).findByCategory(any());
        softly.assertThat(responseList.size()).isEqualTo(2);
        softly.assertThat(responseList.get(0).getCarCategoryName()).isEqualTo("승용");
        softly.assertThat(responseList.get(0).getCarTypeDtoList()).isEqualTo(carTypeDtoList);
        softly.assertThat(responseList.get(1).getCarCategoryName()).isEqualTo("SUV");
        softly.assertThat(responseList.get(1).getCarTypeDtoList()).isEqualTo(carTypeDtoList);
    }

}
