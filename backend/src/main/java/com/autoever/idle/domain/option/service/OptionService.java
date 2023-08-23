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
    private final OptionRepository optionRepository;
    private final FunctionRepository functionRepository;

    public List<OptionFunctionsResponse> getOptionFunctions(OptionRequest optionRequest) {
        List<OptionDto> additionalOptionList = optionRepository.findAdditionalOptionList(optionRequest.getTrimId(),
                optionRequest.getEngineId(),
                optionRequest.getSelectedOptionIds());

        List<OptionFunctionsResponse> optionFunctionsResponseList = new ArrayList<>();

        for (OptionDto optionDto : additionalOptionList) {
            optionFunctionsResponseList.add(OptionFunctionsResponse.create(
                    optionDto,
                    functionRepository.findFunctionsInAdditionalOption(optionDto.getOptionId()))
            );
        }

        return optionFunctionsResponseList;
    }
}
