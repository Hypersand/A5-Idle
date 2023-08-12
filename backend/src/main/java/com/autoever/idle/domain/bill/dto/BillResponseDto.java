package com.autoever.idle.domain.bill.dto;

import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.function.dto.AdditonalFunctionBillDto;
import com.autoever.idle.domain.interiorColor.InteriorBillDto;
import lombok.Getter;

import java.util.List;

@Getter
public class BillResponseDto {
    private ExteriorBillDto exteriorBillDto;
    private InteriorBillDto interiorBillDto;
    private List<AdditonalFunctionBillDto> additonalFunctionDtos;

    public BillResponseDto(ExteriorBillDto exteriorBillDto, InteriorBillDto interiorBillDto, List<AdditonalFunctionBillDto> additonalFunctionDtos) {
        this.exteriorBillDto = exteriorBillDto;
        this.interiorBillDto = interiorBillDto;
        this.additonalFunctionDtos = additonalFunctionDtos;
    }
}
