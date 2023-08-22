package com.autoever.idle.domain.option.service;

import com.autoever.idle.domain.function.repository.FunctionRepository;
import com.autoever.idle.domain.option.dto.OptionDto;
import com.autoever.idle.domain.option.dto.OptionFunctionsResponse;
import com.autoever.idle.domain.option.dto.OptionRequest;
import com.autoever.idle.domain.option.repository.OptionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class OptionService {
    private static final String NEW = "NEW";
    private final OptionRepository optionRepository;
    private final FunctionRepository functionRepository;

    public List<OptionFunctionsResponse> getOptionFunctions(OptionRequest optionRequest) {
        List<OptionDto> additionalOptionList = optionRepository.findAdditionalOptionList(optionRequest.getTrimId());
        List<Long> notActivatedOptionIdList = optionRepository.findNotActivatedOptionIdList(optionRequest.getEngineId(), optionRequest.getSelectedOptionIds());
        List<OptionFunctionsResponse> optionFunctionsResponseList = new ArrayList<>();

        for (OptionDto optionDto : additionalOptionList) {
            if (notActivatedOptionIdList.contains(optionDto.getOptionId())) {
                optionDto.setOptionCanSelect(false);
            }
            optionFunctionsResponseList.add(OptionFunctionsResponse.create(
                    optionDto,
                    functionRepository.findFunctionsInAdditionalOption(optionDto.getOptionId()))
            );
        }

        sortByPurchaseRateAndName(optionFunctionsResponseList);
        return optionFunctionsResponseList;
    }

    private void sortByPurchaseRateAndName(List<OptionFunctionsResponse> optionFunctions) {
        optionFunctions.sort((o1, o2) -> {
            if (o1.getOptionPrice().equals(o2.getOptionPrice())) {
                return sortWhenSameOptionPrice(o1, o2);
            }
            if (o1.getOptionPrice() < o2.getOptionPrice()) {
                return -1;
            }
            return 1;
        });
    }

    private int sortWhenSameOptionPrice(OptionFunctionsResponse o1, OptionFunctionsResponse o2) {
        int comparedNewOptions = compareIfNewOptions(o1, o2);
        if (comparedNewOptions != 0) {
            return comparedNewOptions;
        }

        return compareRatesAndNames(o1, o2);
    }

    private int compareIfNewOptions(OptionFunctionsResponse o1, OptionFunctionsResponse o2) {
        return o1.getOptionPurchaseRate().equals(NEW) ? -1 :
                o2.getOptionPurchaseRate().equals(NEW) ? 1 : 0;
    }

    private int compareRatesAndNames(OptionFunctionsResponse o1, OptionFunctionsResponse o2) {
        double rate1 = extractRate(o1.getOptionPurchaseRate());
        double rate2 = extractRate(o2.getOptionPurchaseRate());

        if (rate1 == rate2) {
            return o2.getOptionName().compareTo(o1.getOptionName());
        }
        if (rate1 < rate2) {
            return 1;
        }

        return -1;
    }

    private double extractRate(String purchaseRate) {
        String[] splitRate = purchaseRate.split("%")[0].split(" ");
        if (splitRate.length > 1) {
            return Double.parseDouble(splitRate[1]);
        }
        return 0;
    }

}
