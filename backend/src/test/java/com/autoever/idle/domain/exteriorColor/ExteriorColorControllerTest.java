package com.autoever.idle.domain.exteriorColor;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;

@SpringBootTest
@AutoConfigureMockMvc
@DisplayName("Exterior Color Controller Test")
class ExteriorColorControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ExteriorColorController exteriorColorController;

    @Test
    void getExteriorColors() throws Exception {
        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();
        params.add("trimId", "1");

        mockMvc.perform(MockMvcRequestBuilders.get("/trims/exterior/colors")
                        .params(params))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].exteriorName").value("어비스 블랙 펄"))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].exteriorPrice").value(0))
                .andExpect(MockMvcResultMatchers.jsonPath("$[0].exteriorPurchaseRate").value("구매자의 30%가 선택"));
    }
}
