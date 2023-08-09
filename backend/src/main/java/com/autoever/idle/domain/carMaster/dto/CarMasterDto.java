package com.autoever.idle.domain.carMaster.dto;

import lombok.Getter;

@Getter
public class CarMasterDto {

    private final String masterName;
    private final String masterPhoneNumber;
    private final String masterDealerShip;
    private final String masterDescription;
    private final int masterSalesRate;
    private final String masterImgUrl;
    private final Double masterLatitude;
    private final Double masterLongitude;

    public CarMasterDto(String masterName, String masterPhoneNumber, String masterDealerShip, String masterDescription, int masterSalesRate, String masterImgUrl, Double masterLatitude, Double masterLongitude) {
        this.masterName = masterName;
        this.masterPhoneNumber = masterPhoneNumber;
        this.masterDealerShip = masterDealerShip;
        this.masterDescription = masterDescription;
        this.masterSalesRate = masterSalesRate;
        this.masterImgUrl = masterImgUrl;
        this.masterLatitude = masterLatitude;
        this.masterLongitude = masterLongitude;
    }
}
