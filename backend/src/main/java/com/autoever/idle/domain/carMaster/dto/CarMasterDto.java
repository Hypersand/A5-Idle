package com.autoever.idle.domain.carMaster.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CarMasterDto {

    private String masterName;
    private String masterPhoneNumber;
    private String masterDealerShip;
    private String masterDescription;
    private String masterImgUrl;
    private Double masterLatitude;
    private Double masterLongitude;

}
