package com.autoever.idle.domain.bill.dto;

import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.function.dto.AdditionalFunctionBillDto;
import com.autoever.idle.domain.interiorColor.InteriorBillDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class BillResponseDto {
    private ExteriorBillDto exterior;
    private InteriorBillDto interior;
    private List<AdditionalFunctionBillDto> additonalFunctions;

    public BillResponseDto(ExteriorBillDto exterior, InteriorBillDto interior, List<AdditionalFunctionBillDto> additonalFunctions) {
        this.exterior = exterior;
        this.interior = interior;
        this.additonalFunctions = additonalFunctions;
    }
}
