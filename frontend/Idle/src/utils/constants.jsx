/* eslint-disable react-refresh/only-export-components */

export const TYPE = {
  trim: "트림",
  detail: "세부 모델",
  color: "색상",
  option: "옵션",
  bill: "견적서 완성",
};

export const BILL_LIST = [
  "trim",
  "engines",
  "driving_methods",
  "body_types",
  "exterior_colors",
  "interior_colors",
  "option",
];

export const TRANSLATE = {
  trim: "트림",
  engines: "엔진",
  driving_methods: "구동방식",
  body_types: "바디타입",
  exterior_colors: "외장 색상",
  interior_colors: "내장 색상",
  option: "옵션",
  all: "전체",
  safety: "안전",
  style: "스타일&퍼포먼스",
  protection: "차량 보호",
  convenience: "편의",
};
export const TRIM = "trim";
export const DETAIL = "detail";
export const COLOR = "color";
export const OPTION = "option";
export const BILL = "bill";
export const ENGINES = "engines";
export const DRVING_METHODS = "driving_methods";
export const BODY_TYPES = "body_types";
export const EXTERIOR_COLORS = "exterior_colors";
export const INTERIROR_COLORS = "interior_colors";
export const ALL = "all";
export const SAFETY = "safety";
export const STYLE = "style";
export const PROTECTION = "protection";
export const CONVENIENCE = "convenience";

export const PEAK_OUTPUT_KR = "최고 출력";
export const MAX_TORQUE_KR = "최대 토크";
export const CONSUMTION_KR = "복합 연비";

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
    name: "어비스 블랙 펄",
    price: 0,
  },
  "Le Blanc": {
    name: "어비스 블랙 펄",
    price: 0,
  },
  Prestige: {
    name: "어비스 블랙 펄",
    price: 0,
  },
  Calligraphy: {
    name: "어비스 블랙 펄",
    price: 0,
  },
};
export const DEFAULT_INTERIROR_COLOR = {
  Exclusive: {
    name: "인조가죽(블랙)",
    price: 0,
  },
  "Le Blanc": {
    name: "퀼팅천연(블랙)",
    price: 0,
  },
  Prestige: {
    name: "네이비",
    price: 0,
  },
  Calligraphy: {
    name: "블랙(고급)",
    price: 0,
  },
};

export const defaultOption = [
  {
    name: "Exclusive",
    isDefault: "default",
    selectPossible: true,
  },
  {
    name: "Le Blanc",
    isDefault: "default",
    selectPossible: true,
  },
  {
    name: "Prestige",
    isDefault: "default",
    selectPossible: true,
  },
  {
    name: "Calligraphy",
    isDefault: "default",
    selectPossible: true,
  },
];

export const emptyCar = {
  trim: {
    name: "Exclusive",
    price: 40000000,
  },
  detail: {
    engines: {},
    driving_methods: {},
    body_types: {},
  },
  color: {
    outside: {},
    inside: {},
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
    if (this.detail.driving_methods.price !== undefined) {
      sum += this.detail.driving_methods.price;
    }
    if (this.detail.body_types.price !== undefined) {
      sum += this.detail.body_types.price;
    }
    return sum;
  },
  getColorSum: function () {
    let sum = 0;
    if (this.color.outside.price !== undefined) {
      sum += this.color.outside.price;
    }
    if (this.color.inside.price !== undefined) {
      sum += this.color.inside.price;
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
      this.detail.driving_methods.name !== undefined &&
      this.detail.body_types.name !== undefined &&
      this.color.outside.name !== undefined &&
      this.color.inside.name !== undefined
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
  optionStatus: [],
  showOptionAlert: false,
};
