package com.autoever.idle.domain.bill.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class BillRequest {
    private Long trimId;
    private Long exteriorId;
    private Long interiorId;
    private List<Long> selectedOptionIds;

    public BillRequest(Long trimId, Long exteriorId, Long interiorId, List<Long> selectedOptionIds) {
        this.trimId = trimId;
        this.exteriorId = exteriorId;
        this.interiorId = interiorId;
        this.selectedOptionIds = selectedOptionIds;
    }
}
