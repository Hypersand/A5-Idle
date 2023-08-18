package com.autoever.idle.domain.bill.controller;

import com.autoever.idle.domain.bill.dto.BillRequest;
import com.autoever.idle.domain.bill.dto.BillResponse;
import com.autoever.idle.domain.bill.service.BillService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/result")
public class BillController {

    private final BillService billService;

    public BillController(BillService billService) {
        this.billService = billService;
    }

    @PostMapping("/bill")
    public ResponseEntity<BillResponse> getResultBill(@RequestBody BillRequest billRequest) {
        BillResponse billResponse = billService.getResultBill(billRequest);
        return ResponseEntity.ok(billResponse);
    }
}
