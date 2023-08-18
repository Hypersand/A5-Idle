package com.autoever.idle.domain.function.repository;

import com.autoever.idle.domain.function.dto.FunctionIdResponse;

public interface TrimFunctionRepository {
    String checkDefaultFunction(Long trimId, Long functionId);
    FunctionIdResponse checkNonSelectableFunctionAtTrim(Long trimId, Long functionId);
}
