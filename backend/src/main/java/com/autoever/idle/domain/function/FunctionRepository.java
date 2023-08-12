package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;
import com.autoever.idle.domain.myTrim.dto.MyTrimDto;

import java.util.List;

public interface FunctionRepository {

    List<MyTrimFunctionDto> findMyTrimFunctions();
    List<MyTrimDto> findTrimBySelectFunctions(int functionId);
}
