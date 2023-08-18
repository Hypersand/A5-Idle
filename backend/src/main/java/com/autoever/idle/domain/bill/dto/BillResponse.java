package com.autoever.idle.domain.bill.dto;

import com.autoever.idle.domain.category.functionCategory.dto.DefaultFunctionCategoryResponse;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorBillDto;
import com.autoever.idle.domain.option.dto.SelectedOptionDto;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class BillResponse {

    private String trimDescription;
    private ExteriorBillDto exterior;
    private InteriorBillDto interior;
    private List<SelectedOptionDto> selectedOptions;
    private List<DefaultFunctionCategoryResponse> defaultFunctions;

    public BillResponse(String trimDescription, ExteriorBillDto exterior, InteriorBillDto interior, List<SelectedOptionDto> selectedOptions, List<DefaultFunctionCategoryResponse> defaultFunctions) {
        this.trimDescription = trimDescription;
        this.exterior = exterior;
        this.interior = interior;
        this.selectedOptions = selectedOptions;
        this.defaultFunctions = defaultFunctions;
    }
}
