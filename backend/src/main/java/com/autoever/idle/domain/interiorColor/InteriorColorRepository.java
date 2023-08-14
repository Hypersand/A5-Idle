package com.autoever.idle.domain.interiorColor;

import com.autoever.idle.domain.interiorColor.dto.InteriorColorDto;

import java.util.List;

public interface InteriorColorRepository {

    List<InteriorColorDto> findInteriorColorByTrimIdAndExteriorId(Long trimId, Long exteriorId);
}
