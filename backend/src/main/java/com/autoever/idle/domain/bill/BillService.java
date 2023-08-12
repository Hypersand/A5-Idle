package com.autoever.idle.domain.bill;

import com.autoever.idle.domain.bill.dto.BillRequestDto;
import com.autoever.idle.domain.bill.dto.BillResponseDto;
import com.autoever.idle.domain.exteriorColor.ExteriorColorRepository;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.function.FunctionRepository;
import com.autoever.idle.domain.function.dto.AdditonalFunctionBillDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillService {

    private final ExteriorColorRepository exteriorColorRepository;
    private final FunctionRepository functionRepository;

    public BillService(ExteriorColorRepository exteriorColorRepository, FunctionRepository functionRepository) {
        this.exteriorColorRepository = exteriorColorRepository;
        this.functionRepository = functionRepository;
    }

    public BillResponseDto getResultBill(BillRequestDto billRequestDto) {

        ExteriorBillDto exteriorBillDto = exteriorColorRepository.findExteriorBill(billRequestDto.getExteriorId()).orElseThrow(/*예외처리*/);
        List<AdditonalFunctionBillDto> additonalFunctionBillDtos = functionRepository.findAdditonalFunctions(billRequestDto.getAdditionalFunctionIds());

        return new BillResponseDto(exteriorBillDto, null, additonalFunctionBillDtos);
    }
}
