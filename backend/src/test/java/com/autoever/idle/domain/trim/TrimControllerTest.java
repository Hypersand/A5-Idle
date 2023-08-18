package com.autoever.idle.domain.trim;

import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryResponse;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorImgUrlDto;
import com.autoever.idle.domain.exteriorColor.dto.TrimThumbnailColorResponse;
import com.autoever.idle.domain.function.dto.DefaultFunctionNameResponse;
import com.autoever.idle.domain.interiorColor.dto.InteriorImgUrlDto;
import com.autoever.idle.domain.trim.controller.TrimController;
import com.autoever.idle.domain.trim.dto.TrimDto;
import com.autoever.idle.domain.trim.dto.TrimSelectionResponse;
import com.autoever.idle.domain.trim.service.TrimService;
import com.autoever.idle.domain.trimThumbnailFunction.dto.TrimThumbnailFunctionResponse;
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
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(MockitoExtension.class)
@DisplayName("Trim Controller Test")
public class TrimControllerTest {

    MockMvc mockMvc;

    @InjectMocks
    TrimController trimController;

    @Mock
    TrimService trimService;

    List<TrimSelectionResponse> response;
    List<Long> carTypeIds;
    List<DefaultFunctionNameResponse> defaultFunctionNames;
    List<DefaultFunctionCategoryResponse> functionCategoryDtos;
    List<TrimThumbnailFunctionResponse> thumbnailFunctions;
    List<ExteriorImgUrlDto> exteriorImgUrls;
    List<InteriorImgUrlDto> interiorImgUrls;
    TrimThumbnailColorResponse thumbnailColor;
    List<TrimDto> trims;

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(trimController)
                .setControllerAdvice(new GlobalExceptionHandler())
                .build();

        carTypeIds = new ArrayList<>();
        carTypeIds.add(1L);

        defaultFunctionNames = new ArrayList<>();
        defaultFunctionNames.add(new DefaultFunctionNameResponse("8단 자동변속기"));
        defaultFunctionNames.add(new DefaultFunctionNameResponse("ISG 시스템"));

        functionCategoryDtos = new ArrayList<>();
        functionCategoryDtos.add(new DefaultFunctionCategoryResponse(1L, "파워트레인/성능", defaultFunctionNames));

        thumbnailFunctions = new ArrayList<>();
        thumbnailFunctions.add(new TrimThumbnailFunctionResponse(
                1L,
                "베젤리스 인사이드 미러",
                "-",
                300,
                72
        ));

        exteriorImgUrls = new ArrayList<>();
        exteriorImgUrls.add(new ExteriorImgUrlDto("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/11.png"));
        exteriorImgUrls.add(new ExteriorImgUrlDto("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/12.png"));

        interiorImgUrls = new ArrayList<>();
        interiorImgUrls.add(new InteriorImgUrlDto("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-1.png"));

        thumbnailColor = new TrimThumbnailColorResponse(exteriorImgUrls, interiorImgUrls);

        trims = new ArrayList<>();
        trims.add(new TrimDto(
                1L,
                "Exclusive",
                38960000,
                "https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/exclusive.png",
                "실용적이고 기본적인 기능을 갖춘 베이직 트림",
                "구매자 10%가 선택"));

        TrimSelectionResponse selection = TrimSelectionResponse.builder()
                .trimId(trims.get(0).getTrimId())
                .name(trims.get(0).getName())
                .price(trims.get(0).getPrice())
                .description(trims.get(0).getDescription())
                .imgUrl(trims.get(0).getImgUrl())
                .purchaseRate(trims.get(0).getPurchaseRate())
                .defaultFunctions(functionCategoryDtos)
                .thumbnailFunctions(thumbnailFunctions)
                .colors(thumbnailColor)
                .build();

        response = new ArrayList<>();
        response.add(selection);
    }

    @Test
    @DisplayName("차종에 따른 트림이 반환된다")
    void getAllTrims() throws Exception {
        String carTypeName = "팰리세이드";
        given(trimService.findAllTrims(carTypeName)).willReturn(response);

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("carTypeName", "팰리세이드");

        mockMvc.perform(get("/trims")
                        .params(params))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].trimId").value(1L))
                .andExpect(jsonPath("$[0].name").value("Exclusive"))
                .andExpect(jsonPath("$[0].price").value(38960000))
                .andExpect(jsonPath("$[0].description").value("실용적이고 기본적인 기능을 갖춘 베이직 트림"))
                .andExpect(jsonPath("$[0].imgUrl").value("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/exclusive.png"))
                .andExpect(jsonPath("$[0].purchaseRate").value("구매자 10%가 선택"))
                .andExpect(jsonPath("$[0].defaultFunctions[0].categoryId").value(1L))
                .andExpect(jsonPath("$[0].defaultFunctions[0].categoryName").value("파워트레인/성능"))
                .andExpect(jsonPath("$[0].defaultFunctions[0].functions[0].name").value("8단 자동변속기"))
                .andExpect(jsonPath("$[0].defaultFunctions[0].functions[1].name").value("ISG 시스템"))
                .andExpect(jsonPath("$[0].thumbnailFunctions[0].name").value("베젤리스 인사이드 미러"))
                .andExpect(jsonPath("$[0].colors.exteriorImgUrls[0].exteriorImgUrl").value("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/11.png"))
                .andExpect(jsonPath("$[0].colors.interiorImgUrls[0].interiorImgUrl").value("https://a5idle.s3.ap-northeast-2.amazonaws.com/mycarimages/128-1.png"));
    }
}
