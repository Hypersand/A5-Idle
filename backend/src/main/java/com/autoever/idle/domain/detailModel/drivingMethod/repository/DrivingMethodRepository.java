package com.autoever.idle.domain.detailModel.drivingMethod.repository;

import com.autoever.idle.domain.detailModel.dto.DrivingMethodResponse;

import java.util.List;

public interface DrivingMethodRepository {
    List<DrivingMethodResponse> findAll(Long trimId);
}
