package com.autoever.idle.domain.myTrim.controller;

import com.autoever.idle.domain.function.dto.FunctionIdResponse;
import com.autoever.idle.domain.function.dto.MyTrimFunctionResponse;
import com.autoever.idle.domain.myTrim.dto.MyTrimResponse;
import com.autoever.idle.domain.myTrim.dto.MyTrimSubmitRequest;
import com.autoever.idle.domain.myTrim.service.MyTrimService;
import com.autoever.idle.domain.option.dto.MyTrimOptionResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/trims/favorite")
public class MyTrimController {

    private final MyTrimService myTrimService;

    @GetMapping
    public ResponseEntity<List<MyTrimFunctionResponse>> findAllMyTrimFunction() {
        List<MyTrimFunctionResponse> myTrimFunctions = myTrimService.findMyTrimFunctions();
        return ResponseEntity.ok(myTrimFunctions);
    }

    @GetMapping(value = "/select/option") //선택지 선택시
    @Cacheable("myTrim")
    public ResponseEntity<List<MyTrimResponse>> findTrimsBySelectFunctions(@RequestParam List<Integer> functionIds) {
        List<MyTrimResponse> trimBySelectFunctions = myTrimService.findTrimBySelectFunctions(functionIds);
        return ResponseEntity.ok(trimBySelectFunctions);
    }

    @GetMapping(value = "/submit")
    public ResponseEntity<List<MyTrimOptionResponse>> findOptionBySelectFunctions(MyTrimSubmitRequest myTrimSubmitRequest) {
        List<MyTrimOptionResponse> optionBySelectFunctions = myTrimService.findOptionBySelectFunctions(myTrimSubmitRequest);
        return ResponseEntity.ok(optionBySelectFunctions);
    }

    @GetMapping(value = "/select/trim")
    public ResponseEntity<List<FunctionIdResponse>> findNotFunctionsByTrim(@RequestParam Long trimId){
        List<FunctionIdResponse> nonSelectableFunctionsByTrim = myTrimService.findNonSelectableFunctionsByTrim(trimId);
        return ResponseEntity.ok(nonSelectableFunctionsByTrim);
    }
}
