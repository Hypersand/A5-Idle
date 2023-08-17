package com.autoever.idle.domain.detailModel.engine.repository;

import com.autoever.idle.domain.detailModel.dto.EngineResponse;

import java.util.List;

public interface EngineRepository {
    List<EngineResponse> findAll(Long trimId);
}
