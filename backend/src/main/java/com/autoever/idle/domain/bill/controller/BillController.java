package com.autoever.idle.domain.bill.controller;

import com.autoever.idle.domain.bill.dto.BillRequest;
import com.autoever.idle.domain.bill.dto.BillResponse;
import com.autoever.idle.domain.bill.service.BillService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/result")
public class BillController {

    private final BillService billService;

    @GetMapping("/bill")
    public ResponseEntity<BillResponse> getResultBill(BillRequest billRequest) {
        BillResponse billResponse = billService.getResultBill(billRequest);
        return ResponseEntity.ok(billResponse);
    }
}
