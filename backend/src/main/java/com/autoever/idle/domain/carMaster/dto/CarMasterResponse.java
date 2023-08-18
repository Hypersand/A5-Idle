package com.autoever.idle.domain.carMaster.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class CarMasterResponse {

    private String masterName;
    private String masterPhoneNumber;
    private String masterDealerShip;
    private String masterDescription;
    private String masterImgUrl;
    private String masterMarkerImgUrl;
    private Double masterLatitude;
    private Double masterLongitude;
    private String masterAddress;

    //테스트 용점
    public CarMasterResponse(String masterName, String masterPhoneNumber, String masterDealerShip, String masterDescription, String masterImgUrl, String masterMarkerImgUrl, Double masterLatitude, Double masterLongitude, String masterAddress) {
        this.masterName = masterName;
        this.masterPhoneNumber = masterPhoneNumber;
        this.masterDealerShip = masterDealerShip;
        this.masterDescription = masterDescription;
        this.masterImgUrl = masterImgUrl;
        this.masterMarkerImgUrl = masterMarkerImgUrl;
        this.masterLatitude = masterLatitude;
        this.masterLongitude = masterLongitude;
        this.masterAddress = masterAddress;
    }
}
