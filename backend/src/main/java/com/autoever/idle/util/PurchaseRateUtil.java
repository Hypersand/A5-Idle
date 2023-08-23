package com.autoever.idle.util;

public class PurchaseRateUtil {

    public static String setPurchaseRate(int purchaseRate){
        if (purchaseRate==0){
            return "NEW";
        }
        return "구매자 "+purchaseRate+"%가 선택";
    }
}
