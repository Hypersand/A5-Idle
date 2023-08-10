package com.autoever.idle.domain.carMaster;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import java.util.HashMap;
import java.util.Map;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class CarMasterControllerTest {

    @Autowired MockMvc mockMvc;
    @Autowired ObjectMapper objectMapper;

    @Test
    @DisplayName("CarMasterController 테스트")
    void getTest() throws Exception {
        Map<String, Double> info = new HashMap<>();

        info.put("nowLatitude", 37.561583);
        info.put("nowLongitude", 127.038417);

        String content = "{ \"nowLatitude\": 37.561583,\"nowLongitude\": 127.038417}";

        mockMvc.perform(MockMvcRequestBuilders.get("/find/car/masters")
                .content(content)
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].masterName").value("김팰리"))
                .andExpect(jsonPath("$[1].masterName").value("정현대"))
                .andDo(print());
    }
}