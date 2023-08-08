/* eslint-disable react-refresh/only-export-components */
export const TYPE = {
  trim: "트림",
  detail: "세부 모델",
  color: "색상",
  option: "옵션",
  bill: "견적서 완성",
};

export const TRANSLATE = {
  engines: "엔진",
  driving_methods: "구동방식",
  body_types: "바디타입",
};

export const TRIM = "trim";
export const DETAIL = "detail";
export const COLOR = "color";
export const OPTION = "option";
export const BILL = "bill";
export const ENGINES = "engines";
export const DRVING_METHODS = "driving_methods";
export const BODY_TYPES = "body_types";

export const PEAK_OUTPUT_KR = "최고 출력";
export const MAX_TORQUE_KR = "최대 토크";
export const CONSUMTION_KR = "복합 연비";

export let clickedOptionPage = false;

export function setClickedOptionPage() {
  clickedOptionPage = true;
}
export const DEFAULT_ENGINE = {
  name: "가솔린 3.8",
  price: 0,
}
export const DEFAULT_DRIVING_METHOD = {
  name: "2WD",
  price: 0,
}
export const DEFAULT_BODY_TYPE = {
  name: "7인승",
  price: 0,
}

export const emptyCar = {
  trim: {
    name: "",
    price: 0,
  },
  detail: {
    engine: {
      name: "",
      price: 0,
    },
    wd: {
      name: "",
      price: 0,
    },
    bodytype: {
      name: "",
      price: 0,
    },
  },
  color: {
    outside: {
      name: "",
      price: 0,
    },
    inside: {
      name: "",
      price: 0,
    },
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
    return this.detail.engine.price !== undefined &&
      this.detail.wd.price !== undefined &&
      this.detail.bodytype.price !== undefined
      ? this.detail.engine.price + this.detail.wd.price + this.detail.bodytype.price
      : 0;
  },
  getColorSum: function () {
    return this.color.outside.price !== undefined && this.color.inside.price !== undefined
      ? this.color.outside.price + this.color.inside.price
      : 0;
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
      this.detail.engine.name !== undefined &&
      this.detail.wd.name !== undefined &&
      this.detail.bodytype.name !== undefined &&
      this.color.outside.name !== undefined &&
      this.color.inside.name !== undefined
    ) {
      return true;
    }
    return false;
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
