package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.AdditionalFunctionBillDto;
import com.autoever.idle.domain.function.dto.FunctionDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimDto;
import com.autoever.idle.domain.option.MyTrimOptionDto;

import java.util.List;

public interface FunctionRepository {

    List<MyTrimFunctionDto> findMyTrimFunctions();
    List<MyTrimDto> findTrimBySelectFunctions(int functionId);
    String checkMyTrimFunction(int functionId);
    MyTrimOptionDto findOptionBySelectFunction(Long functionId);
    List<FunctionDto> findFunctionsInAdditionalOption(Long optionId);
}
