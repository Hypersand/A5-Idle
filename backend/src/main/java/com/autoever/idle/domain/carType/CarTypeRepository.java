package com.autoever.idle.domain.carType;


import org.springframework.stereotype.Repository;

@Repository
public interface CarTypeRepository{
    Long findByName(String carTypeName);
}
