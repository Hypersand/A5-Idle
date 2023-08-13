package com.autoever.idle.domain.myTrim;

import com.autoever.idle.domain.function.dto.MyTrimFunctionResDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimResDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimSubmitReqDto;
import com.autoever.idle.domain.option.MyTrimOptionDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;


@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/trims/favorite")
public class MyTrimController {

    private final MyTrimService myTrimService;

    @GetMapping
    public ResponseEntity<List<MyTrimFunctionResDto>> findAllMyTrimFunction() {
        List<MyTrimFunctionResDto> myTrimFunctions = myTrimService.findMyTrimFunctions();
        return ResponseEntity.ok(myTrimFunctions);
    }

    @GetMapping(value = "/select/option") //선택지 선택시
    public ResponseEntity<List<MyTrimResDto>> findTrimsBySelectFunctions(@RequestBody List<Map<String, Integer>> functionIdList) throws Exception{
        List<MyTrimResDto> trimBySelectFunctions = myTrimService.findTrimBySelectFunctions(functionIdList);
        return ResponseEntity.ok(trimBySelectFunctions);
    }

    @GetMapping(value = "/submit")
    public ResponseEntity<List<MyTrimOptionDto>> findOptionBySelectFunctions(@RequestBody MyTrimSubmitReqDto myTrimSubmitReqDto){
        List<MyTrimOptionDto> optionBySelectFunctions = myTrimService.findOptionBySelectFunctions(myTrimSubmitReqDto);
        return ResponseEntity.ok(optionBySelectFunctions);
    }

}
