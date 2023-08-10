package com.autoever.idle.domain.carType;

import java.util.List;

public interface CarTypeRepository{
    List<Long> findByName(String carTypeName);
}
