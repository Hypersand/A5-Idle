package com.autoever.idle.domain.myTrim;

import com.autoever.idle.domain.function.FunctionRepository;
import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionResDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimResDto;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class MyTrimService {

    private final FunctionRepository functionRepository;

    public MyTrimService(FunctionRepository functionRepository) {
        this.functionRepository = functionRepository;
    }

    public List<MyTrimFunctionResDto> findMyTrimFunctions() {
        List<MyTrimFunctionDto> myTrimFunctions = functionRepository.findMyTrimFunctions();
        List<MyTrimFunctionResDto> myTrimFunctionResDtoList = new ArrayList<>();

        List<MyTrimFunctionDto> myTrimFunctionDtoSet = myTrimFunctions.stream().distinct().collect(Collectors.toList());
        for (MyTrimFunctionDto myTrimFunctionDto : myTrimFunctionDtoSet) {
            myTrimFunctionResDtoList.add(MyTrimFunctionResDto.createDto(myTrimFunctionDto));
        }
        return myTrimFunctionResDtoList;
    }

    public List<MyTrimResDto> findTrimBySelectFunctions(List<Map<String, Integer>> functionIdList) {
        List<MyTrimResDto> myTrimResDtoList = new ArrayList<>();
        for (int i = 0; i < functionIdList.size(); i++) {
            Map<String, Integer> functionIdMap = functionIdList.get(i);
            if (i == 0) {
                List<MyTrimDto> myTrimDtoList = functionRepository.findTrimBySelectFunctions(functionIdMap.get("functionId"));
                for (MyTrimDto myTrimDto : myTrimDtoList) {
                    if (myTrimDto.getIsDefault() == null) {
                        MyTrimResDto myTrimResDto = new MyTrimResDto(myTrimDto.getName(), myTrimDto.getIsDefault(), false);
                        myTrimResDtoList.add(myTrimResDto);
                    } else {
                        MyTrimResDto myTrimResDto = new MyTrimResDto(myTrimDto.getName(), myTrimDto.getIsDefault(), true);
                        myTrimResDtoList.add(myTrimResDto);
                    }
                }
            } else {
                List<MyTrimDto> myTrimDtoList = functionRepository.findTrimBySelectFunctions(functionIdMap.get("functionId"));
                for (int trimDtoIdx = 0; trimDtoIdx < myTrimDtoList.size(); trimDtoIdx++) {
                    MyTrimResDto myTrimResDto = myTrimResDtoList.get(trimDtoIdx);
                    MyTrimDto myTrimDto = myTrimDtoList.get(trimDtoIdx);
                    if (!myTrimResDto.getSelectPossible()) {
                        continue;
                    } else if (myTrimDto.getIsDefault() == null) {
                        myTrimResDto.setIsDefault(null);
                        myTrimResDto.setSelectPossible(false);
                    } else if (!myTrimDto.getIsDefault()) {
                        myTrimResDto.setIsDefault(false);
                    }
                }

            }

        }
        return myTrimResDtoList;
    }

}
