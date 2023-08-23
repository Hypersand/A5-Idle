package com.autoever.idle.domain.interiorColor.service;

import com.autoever.idle.domain.interiorColor.dto.InteriorColorDto;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorResponse;
import com.autoever.idle.domain.interiorColor.dto.InteriorColorsImgUrlResponse;
import com.autoever.idle.domain.interiorColor.repository.InteriorColorRepository;
import com.autoever.idle.global.exception.custom.InvalidTrimException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Stream;

import static com.autoever.idle.global.exception.ErrorCode.INVALID_TRIM;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class InteriorColorService {

    private final InteriorColorRepository interiorColorRepository;

    public InteriorColorResponse findAllInteriorColors(Long trimId, Long exteriorId) {
        List<InteriorColorDto> interiorColors = interiorColorRepository.findInteriorColorByTrimIdAndExteriorId(trimId, exteriorId);
        validateInteriorColor(interiorColors);
        return new InteriorColorResponse(interiorColors);
    }

    public InteriorColorsImgUrlResponse findAllInteriorColorImgUrls() {
        List<String> imgUrls = interiorColorRepository.findAllInteriorColorImgUrls();
        return new InteriorColorsImgUrlResponse(imgUrls);
    }

    private void validateInteriorColor(List<InteriorColorDto> interiorColors) {
        if (Stream.of(interiorColors).anyMatch(List::isEmpty)) {
            throw new InvalidTrimException(INVALID_TRIM);
        }
    }
}
