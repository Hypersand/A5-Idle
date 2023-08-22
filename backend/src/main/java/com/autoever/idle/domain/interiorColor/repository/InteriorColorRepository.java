package com.autoever.idle.domain.interiorColor.repository;

import com.autoever.idle.domain.interiorColor.dto.InteriorBillDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorImgUrlDto;

import java.util.List;
import java.util.Optional;

public interface InteriorColorRepository {

    List<InteriorColorDto> findInteriorColorByTrimIdAndExteriorId(Long trimId, Long exteriorId);
    Optional<InteriorBillDto> findInteriorBill(Long exteriorId);
    List<InteriorImgUrlDto> findInteriorColorImgUrlsByTrimId(Long trimId);
    List<String> findAllInteriorColorImgUrls();
}
