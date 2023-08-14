package com.autoever.idle.domain.interiorColor;

import com.autoever.idle.domain.interiorColor.dto.InteriorColorDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorResDto;
import com.autoever.idle.global.exception.GlobalExceptionHandler;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@DisplayName("Interior Color Controller Test")
class InteriorColorControllerTest {

    MockMvc mockMvc;

    @InjectMocks
    InteriorColorController interiorColorController;

    @Mock
    InteriorColorService interiorColorService;

    List<InteriorColorDto> interiorColorDtos;
    InteriorColorResDto interiorColorRes;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(interiorColorController)
                .setControllerAdvice(new GlobalExceptionHandler())
                .build();

        interiorColorDtos = new ArrayList<>();
        interiorColorDtos.add(new InteriorColorDto(
                25L,
                "네이비",
                0,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-1.png",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/121-2.png",
                "구매자 50%가 선택")
        );
        interiorColorDtos.add(new InteriorColorDto(
                31L,
                "블랙",
                0,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-1.png",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/122-2.png",
                "구매자 45%가 선택")
        );
        interiorColorDtos.add(new InteriorColorDto(
                37L,
                "버건디",
                0,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-1.png",
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/123-2.png",
                "구매자 5%가 선택")
        );
        interiorColorRes = InteriorColorResDto.createInteriorColorDto(interiorColorDtos);
    }

    @Test
    @DisplayName("트림과 트림의 외장 색상에서 선택 가능한 내장 색상을 반환한다")
    void getInteriorColors() throws Exception {
        Long trimId = 3L;
        Long exteriorId = 1L;
        given(interiorColorService.findAllInteriorColors(trimId, exteriorId)).willReturn(interiorColorRes);

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("trimId", "3");
        params.add("exteriorId", "1");

        List<InteriorColorDto> carInteriorColors = interiorColorRes.getCarInteriorColors();
        mockMvc.perform(get("/trims/interior/colors")
                        .params(params))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.carInteriorColors[0].interiorId").value(carInteriorColors.get(0).getInteriorId()))
                .andExpect(jsonPath("$.carInteriorColors[0].interiorName").value(carInteriorColors.get(0).getInteriorName()))
                .andExpect(jsonPath("$.carInteriorColors[0].interiorPrice").value(carInteriorColors.get(0).getInteriorPrice()))
                .andExpect(jsonPath("$.carInteriorColors[0].interiorImgUrl").value(carInteriorColors.get(0).getInteriorImgUrl()))
                .andExpect(jsonPath("$.carInteriorColors[0].carInteriorImgUrl").value(carInteriorColors.get(0).getCarInteriorImgUrl()))
                .andExpect(jsonPath("$.carInteriorColors[0].interiorPurchaseRate").value(carInteriorColors.get(0).getInteriorPurchaseRate()))
                .andExpect(jsonPath("$.carInteriorColors[1].interiorId").value(carInteriorColors.get(1).getInteriorId()))
                .andExpect(jsonPath("$.carInteriorColors[1].interiorName").value(carInteriorColors.get(1).getInteriorName()))
                .andExpect(jsonPath("$.carInteriorColors[1].interiorPrice").value(carInteriorColors.get(1).getInteriorPrice()))
                .andExpect(jsonPath("$.carInteriorColors[1].interiorImgUrl").value(carInteriorColors.get(1).getInteriorImgUrl()))
                .andExpect(jsonPath("$.carInteriorColors[1].carInteriorImgUrl").value(carInteriorColors.get(1).getCarInteriorImgUrl()))
                .andExpect(jsonPath("$.carInteriorColors[1].interiorPurchaseRate").value(carInteriorColors.get(1).getInteriorPurchaseRate()))
                .andExpect(jsonPath("$.carInteriorColors[2].interiorId").value(carInteriorColors.get(2).getInteriorId()))
                .andExpect(jsonPath("$.carInteriorColors[2].interiorName").value(carInteriorColors.get(2).getInteriorName()))
                .andExpect(jsonPath("$.carInteriorColors[2].interiorPrice").value(carInteriorColors.get(2).getInteriorPrice()))
                .andExpect(jsonPath("$.carInteriorColors[2].interiorImgUrl").value(carInteriorColors.get(2).getInteriorImgUrl()))
                .andExpect(jsonPath("$.carInteriorColors[2].carInteriorImgUrl").value(carInteriorColors.get(2).getCarInteriorImgUrl()))
                .andExpect(jsonPath("$.carInteriorColors[2].interiorPurchaseRate").value(carInteriorColors.get(2).getInteriorPurchaseRate()));
    }
}
