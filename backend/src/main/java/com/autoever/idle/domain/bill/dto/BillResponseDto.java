package com.autoever.idle.domain.bill.dto;

import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.function.dto.AdditonalFunctionDto;
import com.autoever.idle.domain.interiorColor.InteriorBillDto;
import lombok.Getter;

import java.util.List;

@Getter
public class BillResponseDto {
    private ExteriorBillDto exteriorBillDto;
    private InteriorBillDto interiorBillDto;
    private List<AdditonalFunctionDto> additonalFunctionDtos;
}
