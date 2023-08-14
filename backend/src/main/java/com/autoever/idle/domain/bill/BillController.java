package com.autoever.idle.domain.bill;

import com.autoever.idle.domain.bill.dto.BillRequestDto;
import com.autoever.idle.domain.bill.dto.BillResponseDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/result")
public class BillController {

    private final BillService billService;

    public BillController(BillService billService) {
        this.billService = billService;
    }

    @GetMapping("/bill")
    public ResponseEntity<BillResponseDto> getResultBill(BillRequestDto billRequestDto) {
        BillResponseDto billResponseDto = billService.getResultBill(billRequestDto);
        return ResponseEntity.ok(billResponseDto);
    }
}
