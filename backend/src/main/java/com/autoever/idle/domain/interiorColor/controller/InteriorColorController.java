package com.autoever.idle.domain.interiorColor.controller;

import com.autoever.idle.domain.interiorColor.dto.InteriorColorResponse;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorsImgUrlResponse;
import com.autoever.idle.domain.interiorColor.service.InteriorColorService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class InteriorColorController {

    private final InteriorColorService interiorColorService;

    @GetMapping("/trims/interior/colors")
    public ResponseEntity<InteriorColorResponse> getInteriorColors(@RequestParam Long trimId, @RequestParam Long exteriorId) {
        InteriorColorResponse response = interiorColorService.findAllInteriorColors(trimId, exteriorId);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/interior/colors/all")
    public ResponseEntity<InteriorColorsImgUrlResponse> getAllInteriorImgUrls() {
        InteriorColorsImgUrlResponse response = interiorColorService.findAllInteriorColorImgUrls();
        return ResponseEntity.ok(response);
    }
}
