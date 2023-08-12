package com.autoever.idle.domain.bill.dto;

import lombok.Getter;

import java.util.List;

@Getter
public class BillRequestDto {
    private Long exteriorId;
    private Long interiorId;
    private List<Long> additionalFunctionIds;
}
