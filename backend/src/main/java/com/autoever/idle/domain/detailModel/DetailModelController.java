package com.autoever.idle.domain.detailModel;

import com.autoever.idle.domain.detailModel.dto.DetailModelResDto;
import com.autoever.idle.domain.detailModel.dto.TrimIdRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/trims/models")
public class DetailModelController {

    private final DetailModelService detailModelService;

    public DetailModelController(DetailModelService detailModelService) {
        this.detailModelService = detailModelService;
    }

    @GetMapping
    public ResponseEntity<DetailModelResDto> getAllDetailModels(@RequestBody TrimIdRequest trimIdRequest) {
        return ResponseEntity.ok(detailModelService.findAllModels(trimIdRequest.getTrimId()));
    }

}
