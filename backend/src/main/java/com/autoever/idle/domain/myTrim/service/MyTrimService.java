package com.autoever.idle.domain.myTrim.service;

import com.autoever.idle.domain.function.repository.FunctionRepository;
import com.autoever.idle.domain.function.repository.TrimFunctionRepository;
import com.autoever.idle.domain.function.dto.FunctionIdResponse;
import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionResponse;
import com.autoever.idle.domain.myTrim.dto.MyTrimDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimResponse;
import com.autoever.idle.domain.myTrim.dto.MyTrimSubmitRequest;
import com.autoever.idle.domain.option.dto.MyTrimOptionResponse;
import com.autoever.idle.global.exception.custom.InvalidFunctionException;
import com.autoever.idle.global.exception.custom.InvalidMyTrimFunctionException;
import com.autoever.idle.global.exception.custom.InvalidTrimFunctionException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.autoever.idle.global.exception.ErrorCode.*;

@Service
@RequiredArgsConstructor
public class MyTrimService {

    private final FunctionRepository functionRepository;
    private final TrimFunctionRepository trimFunctionRepository;

    //내게 맞는 트림 찾기 페이지
    public List<MyTrimFunctionResponse> findMyTrimFunctions() {
        List<MyTrimFunctionDto> myTrimFunctions = functionRepository.findMyTrimFunctions();
        List<MyTrimFunctionResponse> myTrimFunctionResponseList = new ArrayList<>();

        List<MyTrimFunctionDto> myTrimFunctionDtoSet = myTrimFunctions.stream().distinct().collect(Collectors.toList());
        for (MyTrimFunctionDto myTrimFunctionDto : myTrimFunctionDtoSet) {
            myTrimFunctionResponseList.add(MyTrimFunctionResponse.createDto(myTrimFunctionDto));
        }
        return myTrimFunctionResponseList;
    }

    //내게 맞는 트림 찾기 페이지에서 선택지 선택시
    public List<MyTrimResponse> findTrimBySelectFunctions(List<Map<String, Integer>> functionIdList) { //요청으로 들어온 선택된 선택지 리스트
        List<MyTrimResponse> myTrimResponseList = new ArrayList<>();
        for (int requestIdx = 0; requestIdx < functionIdList.size(); requestIdx++) { //선택된 선택지를 하나씩 돌음
            int functionId = functionIdList.get(requestIdx).get("functionId");
            checkValidFunction(functionId);
            List<MyTrimDto> myTrimDtoList = functionRepository.findTrimBySelectFunctions(functionId);
            if (requestIdx == 0) { //요청으로 들어온 첫번째 선택지로 myTrimResDtoList 를 세팅함
                initMyTrimResDtoList(myTrimDtoList, myTrimResponseList);
            } else { //myTrimResDtoList 와 myTrimDtoList 의 값을 비교하여 최종 myTrimResDtoList 를 만듬
                setMyTrimResDtoList(myTrimDtoList, myTrimResponseList);
            }
        }
        return myTrimResponseList;
    }

    private void checkValidFunction(int functionId) {
        String isMyTrim = functionRepository.checkMyTrimFunction(functionId);
        if (isMyTrim == null) {
            throw new InvalidFunctionException(INVALID_FUNCTION);
        } else if (isMyTrim.equals("FALSE")) {
            throw new InvalidMyTrimFunctionException(INVALID_MYTRIM_FUNCTION);
        }
    }

    private void initMyTrimResDtoList(List<MyTrimDto> myTrimDtoList, List<MyTrimResponse> myTrimResponseList) {
        MyTrimResponse myTrimResponse;
        for (MyTrimDto myTrimDto : myTrimDtoList) {
            if (myTrimDto.getIsDefault() == null) { //트림에 해당 기능이 존재하지 않으면
                myTrimResponse = new MyTrimResponse(myTrimDto.getName(), myTrimDto.getIsDefault(), false);
            } else { //트림에 해당 기능이 존재하면
                myTrimResponse = new MyTrimResponse(myTrimDto.getName(), myTrimDto.getIsDefault(), true);
            }
            myTrimResponseList.add(myTrimResponse);
        }
    }

    private void setMyTrimResDtoList(List<MyTrimDto> myTrimDtoList, List<MyTrimResponse> myTrimResponseList) {
        for (int trimDtoIdx = 0; trimDtoIdx < myTrimDtoList.size(); trimDtoIdx++) {
            MyTrimResponse myTrimResponse = myTrimResponseList.get(trimDtoIdx); //각 DtoList 에 같은 인덱스에는 같은 트림의 정보가 들어있다.
            MyTrimDto myTrimDto = myTrimDtoList.get(trimDtoIdx);
            if (!myTrimResponse.getSelectPossible()) { //이미 선택 불가일 경우
                continue;
            } else if (myTrimDto.getIsDefault() == null) { //이번에 조사한 functionId에 대해서 해당 트림이 선택 불가일 경우
                myTrimResponse.setIsDefault(null);
                myTrimResponse.setSelectPossible(false);
            } else if (!myTrimDto.getIsDefault()) { //이번에 조사한 functionId에 대해서 해당 트림에서 선택 옵션일 경ㅆ
                myTrimResponse.setIsDefault(false);
            }
        }
    }

    public List<MyTrimOptionResponse> findOptionBySelectFunctions(MyTrimSubmitRequest myTrimSubmitRequest) throws IllegalArgumentException {
        List<MyTrimOptionResponse> myTrimOptionResponseList = new ArrayList<>();
        Long trimId = myTrimSubmitRequest.getTrimId();
        List<Map<String, Long>> functionIdList = myTrimSubmitRequest.getSelectFunctions();
        for (int requestIdx = 0; requestIdx < functionIdList.size(); requestIdx++) {
            Long functionId = functionIdList.get(requestIdx).get("functionId");
            checkValidFunction(functionId.intValue());
            Boolean isDefault = getIsDefault(trimId, functionId);
            if (!isDefault) {
                MyTrimOptionResponse myTrimOptionResponse = functionRepository.findOptionBySelectFunction(functionId);
                myTrimOptionResponseList.add(myTrimOptionResponse);
            }
        }
        return myTrimOptionResponseList;
    }


    private Boolean getIsDefault(Long trimId, Long functionId) {
        String isDefault = trimFunctionRepository.checkDefaultFunction(trimId, functionId);
        if (isDefault == null) {
            throw new InvalidTrimFunctionException(INVALID_TRIM_FUNCTION);
        }
        if (isDefault.equals("TRUE")) {
            return true;
        }
        return false;

    }

    public List<FunctionIdResponse> findNonSelectableFunctionsByTrim(Long trimId) {
        List<MyTrimFunctionResponse> myTrimFunctions = findMyTrimFunctions();
        List<FunctionIdResponse> functionIdResponseList = new ArrayList<>();
        for (MyTrimFunctionResponse myTrimFunctionResponse : myTrimFunctions) {
            Long functionId = Long.valueOf(myTrimFunctionResponse.getFunctionId());
            FunctionIdResponse functionIdResponse = trimFunctionRepository.checkNonSelectableFunctionAtTrim(trimId, functionId);
            if (functionIdResponse != null) {
                functionIdResponseList.add(functionIdResponse);
            }
        }
        return functionIdResponseList;
    }

}
