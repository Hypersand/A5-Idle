package com.autoever.idle.domain.function;

import com.autoever.idle.domain.function.dto.FunctionIdDto;

public interface TrimFunctionRepository {
    String checkDefaultFunction(Long trimId, Long functionId);
    FunctionIdDto checkNonSelectableFunctionAtTrim(Long trimId, Long functionId);
}
