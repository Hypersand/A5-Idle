package com.autoever.idle.domain.function.controller;

import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryNameResponse;
import com.autoever.idle.domain.function.service.FunctionService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/trims/default")
public class FunctionController {

    private final FunctionService functionService;

    @GetMapping
    public ResponseEntity<List<DefaultFunctionCategoryNameResponse>> getAllDefaultFunctions(@RequestParam Long trimId) {
        return ResponseEntity.ok(functionService.getAllDefaultFunctionsByCategory(trimId));
    }
}
