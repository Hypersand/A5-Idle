package com.autoever.idle.domain.carType.repository;

import java.util.List;

public interface CarTypeRepository{
    List<Long> findByName(String carTypeName);
}
