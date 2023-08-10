package com.autoever.idle.domain.myTrim;

import com.autoever.idle.domain.function.FunctionRepository;
import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionResDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MyTrimService {

    private final FunctionRepository functionRepository;

    public MyTrimService(FunctionRepository functionRepository) {
        this.functionRepository = functionRepository;
    }

    public List<MyTrimFunctionResDto> findMyTrimFunctions() {
        List<MyTrimFunctionDto> myTrimFunctions = functionRepository.findMyTrimFunctions();
        List<MyTrimFunctionResDto> myTrimFunctionResDtos = new ArrayList<>();

        List<MyTrimFunctionDto> myTrimFunctionDtoSet = myTrimFunctions.stream().distinct().collect(Collectors.toList());
        for (MyTrimFunctionDto myTrimFunctionDto : myTrimFunctionDtoSet) {
            myTrimFunctionResDtos.add(MyTrimFunctionResDto.createDto(myTrimFunctionDto));
        }
        return myTrimFunctionResDtos;
    }
}
