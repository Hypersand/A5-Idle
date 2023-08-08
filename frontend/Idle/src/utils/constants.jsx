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
  body_types: "바디타입"
}

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