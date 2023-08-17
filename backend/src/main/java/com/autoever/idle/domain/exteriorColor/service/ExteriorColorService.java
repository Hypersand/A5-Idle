package com.autoever.idle.domain.exteriorColor.service;

import com.autoever.idle.domain.exteriorColor.dto.CarExteriorImgDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorDto;
import com.autoever.idle.domain.exteriorColor.dto.ExteriorColorResponse;
import com.autoever.idle.domain.exteriorColor.repository.ExteriorColorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ExteriorColorService {

    private final ExteriorColorRepository exteriorColorRepository;

    public List<ExteriorColorResponse> findAllExteriorColors(Long trimId) {
        List<ExteriorColorDto> colors = exteriorColorRepository.findExteriorColorsByTrimId(trimId);
        sortByPurchaseRateAndName(colors);

        List<ExteriorColorResponse> exteriorColorResponses = new ArrayList<>();
        for (ExteriorColorDto color : colors) {
            List<CarExteriorImgDto> images = exteriorColorRepository.findCarExteriorImgsById(color.getExteriorId());
            ExteriorColorResponse exteriorDto = ExteriorColorResponse.createExteriorColor(color, images);
            exteriorColorResponses.add(exteriorDto);
        }

        return exteriorColorResponses;
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
