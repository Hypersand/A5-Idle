package com.autoever.idle.domain.detailModel.bodyType.repository;

import com.autoever.idle.domain.detailModel.dto.BodyTypeResponse;

import java.util.List;

public interface BodyTypeRepository {
    List<BodyTypeResponse> findAll(Long trimId);
}
