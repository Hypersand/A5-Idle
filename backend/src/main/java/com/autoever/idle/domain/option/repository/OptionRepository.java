package com.autoever.idle.domain.option.repository;

import com.autoever.idle.domain.option.dto.OptionDto;
import com.autoever.idle.domain.option.dto.SelectedOptionDto;

import java.util.List;


public interface OptionRepository {
    List<OptionDto> findAdditionalOptionList(Long trimId, Long engineId, List<Long> selectedOptionIds);
    List<SelectedOptionDto> findSelectedOptions(List<Long> optionIdList);
}
