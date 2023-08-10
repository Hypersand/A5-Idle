package com.autoever.idle.domain.myTrim;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@SpringBootTest
@AutoConfigureMockMvc
class MyTrimControllerTest {

    @Autowired
    MockMvc mockMvc;

    @Autowired
    ObjectMapper objectMapper;

    @Autowired
    MyTrimController myTrimController;

    @Test
    @DisplayName("내게 맞는 트림 찾기 페이지 호출 API")
    void findAllMyTrimFunction() throws Exception {
        mockMvc.perform(MockMvcRequestBuilders.get("/trims/favorite"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(jsonPath("$[0].name").value("전후석 통합 터치 공조 컨트롤"))
                .andExpect(jsonPath("$[8].name").value("클러스터(12.3인치 컬러 LCD)"))
                .andDo(print());
    }
}