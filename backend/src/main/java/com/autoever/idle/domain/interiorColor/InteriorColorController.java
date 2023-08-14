package com.autoever.idle.domain.interiorColor;

import com.autoever.idle.domain.interiorColor.dto.InteriorColorResDto;
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
    public ResponseEntity<InteriorColorResDto> getInteriorColors(@RequestParam Long trimId, @RequestParam Long exteriorId) {
        InteriorColorResDto response = interiorColorService.findAllInteriorColors(trimId, exteriorId);
        return ResponseEntity.ok(response);
    }
}
