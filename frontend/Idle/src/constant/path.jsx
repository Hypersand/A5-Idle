import { BASE_SERVER_URL } from "./constants";

export const PATH = {
    TRIM: `${BASE_SERVER_URL}/trims?carTypeName=팰리세이드`,
    FIND: {
        GET: `${BASE_SERVER_URL}/trims/favorite`,
        OPTION: `${BASE_SERVER_URL}/trims/favorite/select/option`,
        TRIM: `${BASE_SERVER_URL}/trims/favorite/select/trim`,
        SUBMIT: `${BASE_SERVER_URL}/trims/favorite/submit`,
    },
    DETAIL: `${BASE_SERVER_URL}/trims/models?`,
    COLOR: {
        EXTERIOR: `${BASE_SERVER_URL}/trims/exterior/colors?`,
        INTERIOR: `${BASE_SERVER_URL}/trims/interior/colors?`,
        INTERIOR_ALL: `${BASE_SERVER_URL}/interior/colors/all`,
    },
    OPTION: {
        DEFAULT: `${BASE_SERVER_URL}/trims/default?`,
        GET: `${BASE_SERVER_URL}/trims/add/options`,
        SELECT: `${BASE_SERVER_URL}/trims/add/select`,
    },
    CARMASTER: {
        SALERATE: `${BASE_SERVER_URL}/find/car/masters/salerate?`,
        DISTANCE: `${BASE_SERVER_URL}/find/car/masters/distance?`,
    },
    BILL: `${BASE_SERVER_URL}/result/bill`,
    SELECTCAR: `${BASE_SERVER_URL}/carType`,
};