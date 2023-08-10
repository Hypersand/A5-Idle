package com.autoever.idle.domain.exteriorColor;

import com.autoever.idle.domain.exteriorColor.dto.CarExteriorImgDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorResDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExteriorColorService {

    private final ExteriorColorRepository exteriorColorRepository;

    public List<ExteriorColorResDto> findAllExteriorColors(Long trimId) {
        List<ExteriorColorDto> colors = exteriorColorRepository.findExteriorColorsByTrimId(trimId);

        List<ExteriorColorResDto> exteriorColorResDtos = new ArrayList<>();
        for (ExteriorColorDto color : colors) {
            List<CarExteriorImgDto> images = exteriorColorRepository.findCarExteriorImgsById(color.getExteriorId());
            ExteriorColorResDto exteriorDto = ExteriorColorResDto.createExteriorColor(color, images);
            exteriorColorResDtos.add(exteriorDto);
        }

        return exteriorColorResDtos;
    }
}
