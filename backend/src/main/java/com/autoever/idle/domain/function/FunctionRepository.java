package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.AdditonalFunctionBillDto;
import com.autoever.idle.domain.function.dto.MyTrimFunctionDto;

import java.util.List;

public interface FunctionRepository {

    List<MyTrimFunctionDto> findMyTrimFunctions();

    List<AdditonalFunctionBillDto> findAdditonalFunctions(List<Long> additionalFunctionIds);
}
