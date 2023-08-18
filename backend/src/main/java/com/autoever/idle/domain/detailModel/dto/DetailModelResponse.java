package com.autoever.idle.domain.detailModel.dto;

import lombok.Builder;
import lombok.Getter;

import java.util.List;

@Builder
@Getter
public class DetailModelResponse {

    private List<EngineResponse> engines;
    private List<DrivingMethodResponse> drivingMethods;
    private List<BodyTypeResponse> bodyTypes;

    public static DetailModelResponse create(List<EngineResponse> engines,
                                             List<DrivingMethodResponse> drivingMethods,
                                             List<BodyTypeResponse> bodyTypes) {
        return DetailModelResponse.builder()
                .engines(engines)
                .drivingMethods(drivingMethods)
                .bodyTypes(bodyTypes)
                .build();
    }
}
