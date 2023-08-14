package com.autoever.idle.domain.function;

import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryNameResDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/trims/default")
public class FunctionController {

    private final FunctionService functionService;

    public FunctionController(FunctionService functionService) {
        this.functionService = functionService;
    }

    @GetMapping
    public ResponseEntity<List<DefaultFunctionCategoryNameResDto>> getAllDefaultFunctions(@RequestParam Long trimId) {
        return ResponseEntity.ok(functionService.getAllDefaultFunctionsByCategory(trimId));
    }
}
