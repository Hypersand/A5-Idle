package com.autoever.idle.domain.interiorColor;

import java.util.Optional;

public interface InteriorColorRepository {
    Optional<InteriorBillDto> findInteriorBill(Long exteriorId);
}
