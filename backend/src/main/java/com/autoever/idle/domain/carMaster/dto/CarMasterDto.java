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

    //테스트 용점
    public CarMasterDto(String masterName, String masterPhoneNumber, String masterDealerShip, String masterDescription, String masterImgUrl, Double masterLatitude, Double masterLongitude) {
        this.masterName = masterName;
        this.masterPhoneNumber = masterPhoneNumber;
        this.masterDealerShip = masterDealerShip;
        this.masterDescription = masterDescription;
        this.masterImgUrl = masterImgUrl;
        this.masterLatitude = masterLatitude;
        this.masterLongitude = masterLongitude;
    }
}
