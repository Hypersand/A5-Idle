package com.autoever.idle.domain.exteriorColor.controller;

import com.autoever.idle.domain.exteriorColor.service.ExteriorColorService;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/trims/exterior/colors")
public class ExteriorColorController {

    private final ExteriorColorService exteriorColorService;

    @GetMapping
    public ResponseEntity<List<ExteriorColorResponse>> getExteriorColors(@RequestParam Long trimId) {
        List<ExteriorColorResponse> response = exteriorColorService.findAllExteriorColors(trimId);
        return ResponseEntity.ok(response);
    }
}
