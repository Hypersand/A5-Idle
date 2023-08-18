package com.autoever.idle.domain.exteriorColor.repository;

import com.autoever.idle.domain.exteriorColor.dto.CarExteriorImgDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorBillDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorImgUrlDto;

import java.util.List;
import java.util.Optional;

public interface ExteriorColorRepository {
    List<ExteriorColorDto> findExteriorColorsByTrimId(Long trimId);
    List<CarExteriorImgDto> findCarExteriorImgsById(Long exteriorId);
    Optional<ExteriorBillDto> findExteriorBill(Long exteriorId);
    List<ExteriorImgUrlDto> findExteriorColorImgUrlsByTrimId(Long trimId);
}
