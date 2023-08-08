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
  exterior_colors: "외장 색상",
  interior_colors: "내장 색상"
}
export const TRIM = "trim";
export const DETAIL = "detail";
export const COLOR = "color";
export const OPTION = "option";
export const BILL = "bill";
export const ENGINES = "engines";
export const DRVING_METHODS = "driving_methods";
export const BODY_TYPES = "body_types";
export const EXTERIOR_COLORS = "exterior_colors"
export const INTERIROR_COLORS = "interior_colors"

export const PEAK_OUTPUT_KR = "최고 출력";
export const MAX_TORQUE_KR = "최대 토크";
export const CONSUMTION_KR = "복합 연비";

export let clickedOptionPage = false;

export function setClickedOptionPage() {
  clickedOptionPage = true;
}

export const DEFAULT_ENGINE = {
  "Exclusive": {
    name: "가솔린 3.8",
    price: 0,
  },
  "Le Blanc": {
    name: "가솔린 3.8",
    price: 0,
  },
  "Prestige": {
    name: "가솔린 3.8",
    price: 0,
  },
  "Calligraphy": {
    name: "가솔린 3.8",
    price: 0,
  }
}
export const DEFAULT_DRIVING_METHOD = {
  "Exclusive": {
    name: "2WD",
    price: 0,
  },
  "Le Blanc": {
    name: "4WD",
    price: 0,
  },
  "Prestige": {
    name: "2WD",
    price: 0,
  },
  "Calligraphy": {
    name: "2WD",
    price: 0,
  }
}
export const DEFAULT_BODY_TYPE = {
  "Exclusive": {
    name: "7인승",
    price: 0,
  },
  "Le Blanc": {
    name: "7인승",
    price: 0,
  },
  "Prestige": {
    name: "7인승",
    price: 0,
  },
  "Calligraphy": {
    name: "7인승",
    price: 0,
  }
}
export const DEFAULT_EXTERIROR_COLOR = {
  "Exclusive": {
    name: "어비스 블랙 펄",
    price: 0,
  },
  "Le Blanc": {
    name: "어비스 블랙 펄",
    price: 0,
  },
  "Prestige": {
    name: "어비스 블랙 펄",
    price: 0,
  },
  "Calligraphy": {
    name: "어비스 블랙 펄",
    price: 0,
  }
}
export const DEFAULT_INTERIROR_COLOR = {
  "Exclusive": {
    name: "인조가죽(블랙)",
    price: 0,
  },
  "Le Blanc": {
    name: "퀼팅천연(블랙)",
    price: 0,
  },
  "Prestige": {
    name: "네이비",
    price: 0,
  },
  "Calligraphy": {
    name: "블랙(고급)",
    price: 0,
  }
}