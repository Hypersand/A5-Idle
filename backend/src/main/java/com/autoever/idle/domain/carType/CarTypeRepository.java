package com.autoever.idle.domain.carType;


import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarTypeRepository{
    List<Long> findByName(String carTypeName);
}
