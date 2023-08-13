package com.autoever.idle.domain.myTrim;

import com.autoever.idle.domain.function.FunctionRepository;
import com.autoever.idle.domain.function.TrimFunctionRepository;
import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionResDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimResDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimSubmitReqDto;
import com.autoever.idle.domain.option.MyTrimOptionDto;
import com.autoever.idle.global.exception.custom.InvalidFunctionException;
import com.autoever.idle.global.exception.custom.InvalidMyTrimFunctionException;
import com.autoever.idle.global.exception.custom.InvalidTrimFunctionException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.autoever.idle.global.exception.ErrorCode.*;

@Service
public class MyTrimService {

    private final FunctionRepository functionRepository;
    private final TrimFunctionRepository trimFunctionRepository;

    public MyTrimService(FunctionRepository functionRepository, TrimFunctionRepository trimFunctionRepository) {
        this.functionRepository = functionRepository;
        this.trimFunctionRepository = trimFunctionRepository;
    }

    //내게 맞는 트림 찾기 페이지
    public List<MyTrimFunctionResDto> findMyTrimFunctions() {
        List<MyTrimFunctionDto> myTrimFunctions = functionRepository.findMyTrimFunctions();
        List<MyTrimFunctionResDto> myTrimFunctionResDtoList = new ArrayList<>();

        List<MyTrimFunctionDto> myTrimFunctionDtoSet = myTrimFunctions.stream().distinct().collect(Collectors.toList());
        for (MyTrimFunctionDto myTrimFunctionDto : myTrimFunctionDtoSet) {
            myTrimFunctionResDtoList.add(MyTrimFunctionResDto.createDto(myTrimFunctionDto));
        }
        return myTrimFunctionResDtoList;
    }

    //내게 맞는 트림 찾기 페이지에서 선택지 선택시
    public List<MyTrimResDto> findTrimBySelectFunctions(List<Map<String, Integer>> functionIdList) throws IllegalArgumentException { //요청으로 들어온 선택된 선택지 리스트
        List<MyTrimResDto> myTrimResDtoList = new ArrayList<>();
        for (int requestIdx = 0; requestIdx < functionIdList.size(); requestIdx++) { //선택된 선택지를 하나씩 돌음
            int functionId = functionIdList.get(requestIdx).get("functionId");
            checkValidFunction(functionId);
            List<MyTrimDto> myTrimDtoList = functionRepository.findTrimBySelectFunctions(functionId);
            if (requestIdx == 0) { //요청으로 들어온 첫번째 선택지로 myTrimResDtoList 를 세팅함
                initMyTrimResDtoList(myTrimDtoList, myTrimResDtoList);
            } else { //myTrimResDtoList 와 myTrimDtoList 의 값을 비교하여 최종 myTrimResDtoList 를 만듬
                setMyTrimResDtoList(myTrimDtoList, myTrimResDtoList);
            }
        }
        return myTrimResDtoList;
    }

    private void checkValidFunction(int functionId) {
        String isMyTrim = functionRepository.checkMyTrimFunction(functionId);
        if (isMyTrim == null) {
            throw new InvalidFunctionException(INVALID_FUNCTION);
        } else if (isMyTrim.equals("FALSE")) {
            throw new InvalidMyTrimFunctionException(INVALID_MYTRIM_FUNCTION);
        }
    }

    private void initMyTrimResDtoList(List<MyTrimDto> myTrimDtoList, List<MyTrimResDto> myTrimResDtoList) {
        MyTrimResDto myTrimResDto;
        for (MyTrimDto myTrimDto : myTrimDtoList) {
            if (myTrimDto.getIsDefault() == null) { //트림에 해당 기능이 존재하지 않으면
                myTrimResDto = MyTrimResDto.builder()
                        .name(myTrimDto.getName())
                        .isDefault(null)
                        .selectPossible(false)
                        .build();
            } else { //트림에 해당 기능이 존재하면
                myTrimResDto = MyTrimResDto.builder()
                        .name(myTrimDto.getName())
                        .isDefault(myTrimDto.getIsDefault())
                        .selectPossible(true)
                        .build();
            }
            myTrimResDtoList.add(myTrimResDto);
        }
    }

    private void setMyTrimResDtoList(List<MyTrimDto> myTrimDtoList, List<MyTrimResDto> myTrimResDtoList) {
        for (int trimDtoIdx = 0; trimDtoIdx < myTrimDtoList.size(); trimDtoIdx++) {
            MyTrimResDto myTrimResDto = myTrimResDtoList.get(trimDtoIdx); //각 DtoList 에 같은 인덱스에는 같은 트림의 정보가 들어있다.
            MyTrimDto myTrimDto = myTrimDtoList.get(trimDtoIdx);
            if (!myTrimResDto.getSelectPossible()) { //이미 선택 불가일 경우
                continue;
            } else if (myTrimDto.getIsDefault() == null) { //이번에 조사한 functionId에 대해서 해당 트림이 선택 불가일 경우
                myTrimResDto.setIsDefault(null);
                myTrimResDto.setSelectPossible(false);
            } else if (!myTrimDto.getIsDefault()) { //이번에 조사한 functionId에 대해서 해당 트림에서 선택 옵션일 경ㅆ
                myTrimResDto.setIsDefault(false);
            }
        }
    }

    public List<MyTrimOptionDto> findOptionBySelectFunctions(MyTrimSubmitReqDto myTrimSubmitReqDto) {
        List<MyTrimOptionDto> myTrimOptionDtoList = new ArrayList<>();
        Long trimId = myTrimSubmitReqDto.getTrimId();
        List<Map<String, Long>> functionIdList = myTrimSubmitReqDto.getSelectFunctions();
        for (int requestIdx = 0; requestIdx < functionIdList.size(); requestIdx++) {
            Long functionId = functionIdList.get(requestIdx).get("functionId");
            checkValidFunction(functionId.intValue());
            Boolean isDefault = getIsDefault(trimId, functionId);
            if (!isDefault) {
                MyTrimOptionDto myTrimOptionDto = functionRepository.findOptionBySelectFunction(functionId);
                myTrimOptionDtoList.add(myTrimOptionDto);
            }
        }
        return myTrimOptionDtoList;
    }


    private Boolean getIsDefault(Long trimId, Long functionId) {
        String isDefault = trimFunctionRepository.checkDefaultFunction(trimId, functionId);
        if (isDefault == null){
            throw new InvalidTrimFunctionException(INVALID_TRIM_FUNCTION);
        }
        if (isDefault.equals("TRUE")) {
            return true;
        }
        return false;

    }

}
