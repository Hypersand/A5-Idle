package com.autoever.idle.domain.interiorColor;

import com.autoever.idle.domain.interiorColor.dto.InteriorColorDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorResDto;
import com.autoever.idle.global.exception.custom.InvalidTrimException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Stream;

import static com.autoever.idle.global.exception.ErrorCode.INVALID_TRIM;

@Service
@RequiredArgsConstructor
public class InteriorColorService {

    private final InteriorColorRepository interiorColorRepository;

    public InteriorColorResDto findAllInteriorColors(Long trimId, Long exteriorId) {
        List<InteriorColorDto> interiorColors = interiorColorRepository.findInteriorColorByTrimIdAndExteriorId(trimId, exteriorId);
        validateInteriorColor(interiorColors);
        return InteriorColorResDto.createInteriorColorDto(interiorColors);
    }

    private void validateInteriorColor(List<InteriorColorDto> interiorColors) {
        if (Stream.of(interiorColors).anyMatch(List::isEmpty)) {
            throw new InvalidTrimException(INVALID_TRIM);
        }
    }
}
