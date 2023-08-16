package com.autoever.idle.domain.bill;

import com.autoever.idle.domain.bill.dto.BillRequestDto;
import com.autoever.idle.domain.bill.dto.BillResponseDto;
import com.autoever.idle.domain.exteriorColor.ExteriorColorRepository;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.function.FunctionRepository;
import com.autoever.idle.domain.function.dto.AdditionalFunctionBillDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorBillDto;
import com.autoever.idle.domain.interiorColor.InteriorColorRepository;
import com.autoever.idle.global.exception.ErrorCode;
import com.autoever.idle.global.exception.custom.InvalidExteriorException;
import com.autoever.idle.global.exception.custom.InvalidInteriorException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BillService {

    private final ExteriorColorRepository exteriorColorRepository;
    private final InteriorColorRepository interiorColorRepository;
    private final FunctionRepository functionRepository;

    public BillService(ExteriorColorRepository exteriorColorRepository, InteriorColorRepository interiorColorRepository, FunctionRepository functionRepository) {
        this.exteriorColorRepository = exteriorColorRepository;
        this.interiorColorRepository = interiorColorRepository;
        this.functionRepository = functionRepository;
    }

    public BillResponseDto getResultBill(BillRequestDto billRequestDto) {

        ExteriorBillDto exteriorBillDto = exteriorColorRepository.findExteriorBill(billRequestDto.getExteriorId())
                .orElseThrow(() -> new InvalidExteriorException(ErrorCode.INVALID_EXTERIOR));
        InteriorBillDto interiorBillDto = interiorColorRepository.findInteriorBill(billRequestDto.getInteriorId())
                .orElseThrow(() -> new InvalidInteriorException(ErrorCode.INVALID_INTERIOR));
        List<AdditionalFunctionBillDto> additonalFunctionBillDtos = functionRepository.findAdditonalFunctions(billRequestDto.getAdditionalFunctionIds());

        return new BillResponseDto(exteriorBillDto, interiorBillDto, additonalFunctionBillDtos);
    }
}
