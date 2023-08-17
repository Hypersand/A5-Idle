package com.autoever.idle.domain.trim.repository;

import com.autoever.idle.domain.trim.dto.TrimDescriptionDto;
import com.autoever.idle.domain.trim.dto.TrimDto;

import java.util.List;

public interface TrimRepository {

    List<TrimDto> findAll(Long carTypeId);
    TrimDescriptionDto findByTrimId(Long trimId);
}
