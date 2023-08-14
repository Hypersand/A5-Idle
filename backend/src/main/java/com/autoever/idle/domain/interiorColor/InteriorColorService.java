package com.autoever.idle.domain.interiorColor;

import com.autoever.idle.domain.interiorColor.dto.InteriorColorDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class InteriorColorService {

    private final InteriorColorRepository interiorColorRepository;

    public InteriorColorResDto findAllInteriorColors(Long trimId, Long exteriorId) {
        List<InteriorColorDto> interiorColors = interiorColorRepository.findInteriorColorByTrimIdAndExteriorId(trimId, exteriorId);
        return InteriorColorResDto.createInteriorColorDto(interiorColors);
    }
}
