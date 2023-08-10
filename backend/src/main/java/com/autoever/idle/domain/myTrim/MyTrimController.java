package com.autoever.idle.domain.myTrim;

import com.autoever.idle.domain.function.dto.MyTrimFunctionResDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping(value="/trims/favorite")
@Slf4j
public class MyTrimController {

    private final MyTrimService myTrimService;

    @GetMapping
    public ResponseEntity<List<MyTrimFunctionResDto>> findAllMyTrimFunction(){
        List<MyTrimFunctionResDto> myTrimFunctions = myTrimService.findMyTrimFunctions();
        return ResponseEntity.ok(myTrimFunctions);
    }

}
