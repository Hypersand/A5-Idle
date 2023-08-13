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
        sortByPurchaseRateAndName(colors);

        List<ExteriorColorResDto> exteriorColorResDtos = new ArrayList<>();
        for (ExteriorColorDto color : colors) {
            List<CarExteriorImgDto> images = exteriorColorRepository.findCarExteriorImgsById(color.getExteriorId());
            ExteriorColorResDto exteriorDto = ExteriorColorResDto.createExteriorColor(color, images);
            exteriorColorResDtos.add(exteriorDto);
        }

        return exteriorColorResDtos;
    }

    private void sortByPurchaseRateAndName(List<ExteriorColorDto> colors) {
        colors.sort((o1, o2) -> {
            if (o1.getExteriorPrice() == o2.getExteriorPrice()) {
                if (o1.getExteriorPurchaseRate().equals("NEW")) {
                    return -1;
                } else if (o2.getExteriorPurchaseRate().equals("NEW")) {
                    return 1;
                }

                double rate1 = Double.parseDouble(o1.getExteriorPurchaseRate().split("%")[0].split(" ")[1]);
                double rate2 = Double.parseDouble(o2.getExteriorPurchaseRate().split("%")[0].split(" ")[1]);

                if (rate1 == rate2) {
                      return o2.getExteriorName().compareTo(o1.getExteriorName());
                } else if (rate1 < rate2) {
                    return 1;
                } else {
                    return -1;
                }
            } else if (o1.getExteriorPrice() < o2.getExteriorPrice()) {
                return -1;
            } else {
                return 1;
            }
        });
    }
}
