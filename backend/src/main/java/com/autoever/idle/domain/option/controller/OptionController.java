package com.autoever.idle.domain.option.controller;

import com.autoever.idle.domain.option.dto.OptionFunctionsResponse;
import com.autoever.idle.domain.option.dto.OptionRequest;
import com.autoever.idle.domain.option.service.OptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/trims/add")
@RequiredArgsConstructor
public class OptionController {

    private final OptionService optionService;

    @GetMapping("/options")
    public ResponseEntity<List<OptionFunctionsResponse>> getOptionFunctions(OptionRequest optionRequest) {
        List<OptionFunctionsResponse> optionFunctions = optionService.getOptionFunctions(optionRequest);
        return ResponseEntity.ok(optionFunctions);
    }
}
