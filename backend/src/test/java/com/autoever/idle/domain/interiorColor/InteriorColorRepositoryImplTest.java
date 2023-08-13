package com.autoever.idle.domain.interiorColor;

import org.assertj.core.api.SoftAssertions;
import org.assertj.core.api.junit.jupiter.InjectSoftAssertions;
import org.assertj.core.api.junit.jupiter.SoftAssertionsExtension;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
@DisplayName("Interior Color Repository Test")
@ExtendWith(SoftAssertionsExtension.class)
class InteriorColorRepositoryImplTest {

    @Autowired
    private InteriorColorRepository interiorColorRepository;
    @InjectSoftAssertions
    private SoftAssertions softAssertions;

    @Test
    @DisplayName("내장 색상 id를 이용해 최종 견적서에 필요한 내장 색상 정보를 반환한다")
    void findExteriorBill() {
        //given
        Long interiorId = 1L;

        //when
        InteriorBillDto interiorBillDto = interiorColorRepository.findInteriorBill(interiorId).orElse(null);

        //then
        softAssertions.assertThat(interiorBillDto.getInteriorId()).isEqualTo(1L);
        softAssertions.assertThat(interiorBillDto.getInteriorImgUrl()).isNotEmpty();
    }

}