package com.autoever.idle.domain.category.carCategory.repository;

import com.autoever.idle.domain.category.carCategory.dto.CarCategoryDto;
import org.assertj.core.api.SoftAssertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
class CarCategoryRepositoryImplTest {

    SoftAssertions softly;

    @Autowired
    CarCategoryRepository carCategoryRepository;

    @BeforeEach
    void beforeEach() {
        softly = new SoftAssertions();
    }


    @Test
    @DisplayName("모든 차종 카테고리 조회")
    void findAllCarCategory(){
        List<CarCategoryDto> carCategoryDtoList = carCategoryRepository.findAll();

        softly.assertThat(carCategoryDtoList.size()).isEqualTo(8);
        softly.assertThat(carCategoryDtoList.get(4).getCarCategoryName()).isEqualTo("SUV");
    }
}