package com.autoever.idle.domain.trim;

import com.autoever.idle.domain.trim.dto.TrimDto;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrimRepository {

    List<TrimDto> findAll(Long carTypeId);
}
