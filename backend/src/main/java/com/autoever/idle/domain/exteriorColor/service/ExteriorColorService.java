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

    private static final String NEW = "NEW";
    private final ExteriorColorRepository exteriorColorRepository;

    public List<ExteriorColorResponse> findAllExteriorColors(Long trimId) {
        List<ExteriorColorDto> colors = exteriorColorRepository.findExteriorColorsByTrimId(trimId);
        sortColors(colors);

        List<ExteriorColorResponse> exteriorColorResponses = new ArrayList<>();
        for (ExteriorColorDto color : colors) {
            List<CarExteriorImgDto> images = exteriorColorRepository.findCarExteriorImgsById(color.getExteriorId());
            ExteriorColorResponse exteriorDto = ExteriorColorResponse.createExteriorColor(color, images);
            exteriorColorResponses.add(exteriorDto);
        }

        return exteriorColorResponses;
    }

    private void sortColors(List<ExteriorColorDto> colors) {
        colors.sort((o1, o2) -> {
            if (o1.getExteriorPrice() == o2.getExteriorPrice()) {
                return validateNew(o1, o2);
            } else if (o1.getExteriorPrice() < o2.getExteriorPrice()) {
                return -1;
            } else {
                return 1;
            }
        });
    }

    private int validateNew(ExteriorColorDto o1, ExteriorColorDto o2) {
        if (o1.getExteriorPurchaseRate().equals(NEW)) {
            return -1;
        }

        if (o2.getExteriorPurchaseRate().equals(NEW)) {
            return 1;
        }

        return sortByPurchaseRateAndName(o1, o2);
    }

    private int sortByPurchaseRateAndName(ExteriorColorDto o1, ExteriorColorDto o2) {
        Double rate1 = Double.parseDouble(extractPurchaseRate(o1));
        Double rate2 = Double.parseDouble(extractPurchaseRate(o2));

        int comparedInteger = rate2.compareTo(rate1);

        if (comparedInteger == 0) {
            return o2.getExteriorName().compareTo(o1.getExteriorName());
        }

        return comparedInteger;
    }

    private String extractPurchaseRate(ExteriorColorDto o1) {
        return o1.getExteriorPurchaseRate().split("%")[0].split(" ")[1];
    }
}
