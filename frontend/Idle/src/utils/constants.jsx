/* eslint-disable react-refresh/only-export-components */
export const PATH = {
  TRIM: `trims?carTypeName=팰리세이드`,
  FIND: {
    GET: `trims/favorite`,
    OPTION: `trims/favorite/select/option`,
    TRIM: `trims/favorite/select/trim`,
    SUBMIT: `trims/favorite/submit`,
  },
  DETAIL: `trims/models?`,
  COLOR: {
    EXTERIOR: `trims/exterior/colors?`,
    INTERIOR: `trims/interior/colors?`,
  },
  OPTION: {
    DEFAULT: `trims/default?`,
    GET: `trims/add/options`,
    SELECT: `trims/add/select`,
  },
  CARMASTER: {
    SALERATE: `find/car/masters/salerate?`,
    DISTANCE: `find/car/masters/distance?`,
  },
  BILL: `result/bill`,
};

export const TYPE = {
  trim: "트림",
  detail: "세부 모델",
  color: "색상",
  option: "옵션",
  bill: "견적서 완성",
};

export const BILL_LIST = ["trim", "engines", "drivingMethods", "bodyTypes", "exterior", "interior"];

export const TRANSLATE = {
  trim: "트림",
  engines: "엔진",
  drivingMethods: "구동방식",
  bodyTypes: "바디타입",
  exterior: "외장 색상",
  interior: "내장 색상",
  option: "옵션",
  all: "전체",
  safety: "안전",
  style: "스타일&퍼포먼스",
  protection: "차량 보호",
  convenience: "편의",
  Exclusive: 1,
  LeBlanc: 2,
  Prestige: 3,
  Calligraphy: 4,
};
export const TRIM = "trim";
export const DETAIL = "detail";
export const COLOR = "color";
export const OPTION = "option";
export const BILL = "bill";
export const ENGINES = "engines";
export const DRVING_METHODS = "drivingMethods";
export const BODY_TYPES = "bodyTypes";
export const EXTERIOR_COLORS = "exterior";
export const INTERIROR_COLORS = "interior";
export const ALL = "all";
export const SAFETY = "safety";
export const STYLE = "style";
export const PROTECTION = "protection";
export const CONVENIENCE = "convenience";
export const CONFUSE = "confuse";
export const ADD = "add";
export const NONE = "none";

export const PEAK_OUTPUT_KR = "최고 출력";
export const MAX_TORQUE_KR = "최대 토크";
export const CONSUMTION_KR = "복합 연비";
export const DISTANCE = "거리순";
export const SALERATE = "판매량순";

export let clickedOptionPage = false;

export function setClickedOptionPage() {
  clickedOptionPage = true;
}
export const DEFAULT_ENGINE = {
  Exclusive: {
    name: "가솔린 3.8",
    price: 0,
  },
  "Le Blanc": {
    name: "가솔린 3.8",
    price: 0,
  },
  Prestige: {
    name: "가솔린 3.8",
    price: 0,
  },
  Calligraphy: {
    name: "가솔린 3.8",
    price: 0,
  },
};
export const DEFAULT_DRIVING_METHOD = {
  Exclusive: {
    name: "2WD",
    price: 0,
  },
  "Le Blanc": {
    name: "4WD",
    price: 0,
  },
  Prestige: {
    name: "2WD",
    price: 0,
  },
  Calligraphy: {
    name: "2WD",
    price: 0,
  },
};
export const DEFAULT_BODY_TYPE = {
  Exclusive: {
    name: "7인승",
    price: 0,
  },
  "Le Blanc": {
    name: "7인승",
    price: 0,
  },
  Prestige: {
    name: "7인승",
    price: 0,
  },
  Calligraphy: {
    name: "7인승",
    price: 0,
  },
};
export const DEFAULT_EXTERIROR_COLOR = {
  Exclusive: {
    exteriorId: 1,
    name: "어비스 블랙 펄",
    price: 0,
  },
  "Le Blanc": {
    exteriorId: 1,
    name: "어비스 블랙 펄",
    price: 0,
  },
  Prestige: {
    exteriorId: 1,
    name: "어비스 블랙 펄",
    price: 0,
  },
  Calligraphy: {
    exteriorId: 1,
    name: "어비스 블랙 펄",
    price: 0,
  },
};
export const DEFAULT_INTERIROR_COLOR = {
  Exclusive: {
    interiorId: 42,
    name: "인조가죽(블랙)",
    price: 0,
  },
  "Le Blanc": {
    interiorId: 48,
    name: "퀼팅천연(블랙)",
    price: 0,
  },
  Prestige: {
    interiorId: 24,
    name: "네이비",
    price: 0,
  },
  Calligraphy: {
    interiorId: 1,
    name: "블랙(고급)",
    price: 0,
  },
};

export const defaultOption = [
  {
    name: "Exclusive",
    isDefault: "null",
    selectPossible: true,
  },
  {
    name: "Le Blanc",
    isDefault: "null",
    selectPossible: true,
  },
  {
    name: "Prestige",
    isDefault: "null",
    selectPossible: true,
  },
  {
    name: "Calligraphy",
    isDefault: "null",
    selectPossible: true,
  },
];

export const emptyCar = {
  trim: {
    trimdId: 1,
    name: "Exclusive",
    price: 40000000,
  },
  detail: {
    engines: {},
    drivingMethods: {},
    bodyTypes: {},
  },
  color: {
    exterior: {},
    interior: {},
  },
  option: {
    additional: [],
    confusing: [],
  },
  bill: {},
  getTrimSum: function () {
    return this.trim.price !== undefined ? this.trim.price : 0;
  },
  getDetailSum: function () {
    let sum = 0;
    if (this.detail.engines.price !== undefined) {
      sum += this.detail.engines.price;
    }
    if (this.detail.drivingMethods.price !== undefined) {
      sum += this.detail.drivingMethods.price;
    }
    if (this.detail.bodyTypes.price !== undefined) {
      sum += this.detail.bodyTypes.price;
    }
    return sum;
  },
  getColorSum: function () {
    let sum = 0;
    if (this.color.exterior.price !== undefined) {
      sum += this.color.exterior.price;
    }
    if (this.color.interior.price !== undefined) {
      sum += this.color.interior.price;
    }
    return sum;
  },
  getOptionSum: function () {
    let total = 0;
    this.option.additional.forEach((item) => (total += item.price));
    return total;
  },
  getAllSum: function () {
    return this.getTrimSum() + this.getColorSum() + this.getDetailSum() + this.getOptionSum();
  },
  getAllOptionChecked() {
    if (
      this.trim.name !== undefined &&
      this.detail.engines.name !== undefined &&
      this.detail.drivingMethods.name !== undefined &&
      this.detail.bodyTypes.name !== undefined &&
      this.color.exterior.name !== undefined &&
      this.color.interior.name !== undefined
    ) {
      return true;
    }
    return false;
  },
};

export const findTrimInitialState = {
  tempCar: emptyCar,
  animationstate: false,
  clickActive: false,
  selectedOption: [],
  optionStatus: defaultOption,
  showOptionAlert: false,
  functionList: [],
  disableFunctionId: [],
  optionAlert: [],
};
