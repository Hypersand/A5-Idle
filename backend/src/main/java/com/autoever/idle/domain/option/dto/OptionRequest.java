package com.autoever.idle.domain.option.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class OptionRequest {
    private Long trimId;
    private List<Long> selectedOptionIds;
    private Long engineId;

    public OptionRequest(Long trimId, List<Long> selectedOptionIds, Long engineId) {
        this.trimId = trimId;
        this.selectedOptionIds = selectedOptionIds;
        this.engineId = engineId;
    }
}
