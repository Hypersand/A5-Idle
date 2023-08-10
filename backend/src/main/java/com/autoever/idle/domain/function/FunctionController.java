package com.autoever.idle.domain.function;

import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryNameResDto;
import com.autoever.idle.domain.detailModel.dto.TrimIdRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/trims/default")
public class FunctionController {

    private final FunctionService functionService;

    public FunctionController(FunctionService functionService) {
        this.functionService = functionService;
    }

    public ResponseEntity<List<DefaultFunctionCategoryNameResDto>> getAllDefaultFunctions(@RequestBody TrimIdRequest trimIdRequest) {


    }



}
