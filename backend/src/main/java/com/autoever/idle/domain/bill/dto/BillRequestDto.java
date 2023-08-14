package com.autoever.idle.domain.bill.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@ToString
public class BillRequestDto {
    private Long exteriorId;
    private Long interiorId;
    private List<Long> additionalFunctionIds;

    public BillRequestDto(Long exteriorId, Long interiorId, List<Long> additionalFunctionIds) {
        this.exteriorId = exteriorId;
        this.interiorId = interiorId;
        this.additionalFunctionIds = additionalFunctionIds;
    }
}
