package com.autoever.idle.domain.detailModel;

import com.autoever.idle.domain.detailModel.dto.DetailModelResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/trims/models")
@RequiredArgsConstructor
public class DetailModelController {

    private final DetailModelService detailModelService;

    @GetMapping
    public ResponseEntity<DetailModelResponse> getAllDetailModels(@RequestParam Long trimId) {
        return ResponseEntity.ok(detailModelService.findAllModels(trimId));
    }

}
