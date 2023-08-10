package com.autoever.idle.domain.exteriorColor;

import com.autoever.idle.domain.exteriorColor.dto.CarExteriorImgDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorResDto;

import java.util.List;

public interface ExteriorColorRepository {
    List<ExteriorColorDto> findExteriorColorsByTrimId(Long trimId);
    List<CarExteriorImgDto> findCarExteriorImgsById(Long exteriorId);
}
