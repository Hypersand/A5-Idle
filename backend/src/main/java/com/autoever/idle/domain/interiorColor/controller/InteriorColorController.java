package com.autoever.idle.domain.interiorColor.controller;

import com.autoever.idle.domain.interiorColor.service.InteriorColorService;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/trims/interior/colors")
public class InteriorColorController {

    private final InteriorColorService interiorColorService;

    @GetMapping
    public ResponseEntity<InteriorColorResponse> getInteriorColors(@RequestParam Long trimId, @RequestParam Long exteriorId) {
        InteriorColorResponse response = interiorColorService.findAllInteriorColors(trimId, exteriorId);
        return ResponseEntity.ok(response);
    }
}
