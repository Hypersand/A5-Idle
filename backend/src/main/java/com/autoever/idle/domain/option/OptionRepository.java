package com.autoever.idle.domain.option;

import com.autoever.idle.domain.option.dto.OptionDto;

import java.util.List;


public interface OptionRepository {
    List<OptionDto> findAdditionalOptionList(Long trimId);

    List<Long> findNotActivatedOptionIdList(Long engineId, List<Long> selectedOptionIdList);
}
