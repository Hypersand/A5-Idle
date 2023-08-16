package com.autoever.idle.domain.option;

import com.autoever.idle.domain.option.dto.OptionFunctionsDto;
import com.autoever.idle.domain.option.dto.OptionRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/trims/add")
@RequiredArgsConstructor
public class OptionController {

    private final OptionService optionService;

    @PostMapping("/options")
    public ResponseEntity<List<OptionFunctionsDto>> getOptionFunctions(@RequestBody OptionRequest optionRequest) {
        List<OptionFunctionsDto> optionFunctions = optionService.getOptionFunctions(optionRequest);
        return ResponseEntity.ok(optionFunctions);
    }


}
