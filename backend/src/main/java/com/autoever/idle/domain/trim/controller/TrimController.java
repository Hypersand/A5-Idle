package com.autoever.idle.domain.trim.controller;

import com.autoever.idle.domain.trim.dto.TrimSelectionResponse;
import com.autoever.idle.domain.trim.service.TrimService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/trims")
public class TrimController {

    private final TrimService trimService;

    @GetMapping
    public ResponseEntity<List<TrimSelectionResponse>> getAllTrims(@RequestParam String carTypeName) throws Exception {
        List<TrimSelectionResponse> response = trimService.findAllTrims(carTypeName);
        return ResponseEntity.ok(response);
    }
}
