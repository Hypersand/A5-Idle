import {
  PUSH_SELECTED_OPTION,
  POP_SELECTED_OPTION,
  PUSH_ADDITIONAL_OPTION,
  PUSH_CONFUSING_OPTION,
  POP_ADDITIONAL_OPTION,
  POP_CONFUSING_OPTION,
  CHANGE_ALL,
  CHANGE_BODY_TYPES,
  CHANGE_DRIVING_METHODS,
  CHANGE_ENGINES,
  CHANGE_TRIM,
  RESET_ALL,
  SET_TEMPCAR,
  SET_ANIMATION_STATE,
  SET_CLICK_ACTIVE,
  SET_SELECTED_OPTION,
  SET_OPTION_STATUS,
  SET_SHOWOPTION_ALERT,
  CHANGE_INTERIOR_COLOR,
  CHANGE_EXTERIOR_COLOR,
} from "./actionType";

export function findTrimReducer(state, { type, payload }) {
  switch (type) {
    case SET_TEMPCAR:
      return { ...state, tempCar: payload };
    case SET_ANIMATION_STATE:
      return { ...state, animationstate: payload };
    case SET_CLICK_ACTIVE:
      return { ...state, clickActive: payload };
    case SET_SELECTED_OPTION:
      return { ...state, selectedOption: payload };
    case SET_OPTION_STATUS:
      return { ...state, optionStatus: payload };
    case SET_SHOWOPTION_ALERT:
      return { ...state, showOptionAlert: payload };
    case PUSH_SELECTED_OPTION:
      return {
        ...state,
        selectedOption: [...state.selectedOption, payload],
      };
    case POP_SELECTED_OPTION:
      return {
        ...state,
        selectedOption: state.selectedOption.filter((item) => item !== payload),
      };
    default:
      return state;
  }
}

export function carReducer(car, { type, payload }) {
  switch (type) {
    case CHANGE_TRIM:
      return { ...car, trim: payload };

    case CHANGE_EXTERIOR_COLOR:
      return {
        ...car,
        color: {
          exterior: payload,
          interior: car.color.interior,
        },
      };

    case CHANGE_INTERIOR_COLOR:
      return {
        ...car,
        color: {
          exterior: car.color.exterior,
          interior: payload,
        },
      };

    case CHANGE_ENGINES:
      return {
        ...car,
        detail: {
          engines: payload,
          drivingMethods: car.detail.drivingMethods,
          bodyTypes: car.detail.bodyTypes,
        },
      };

    case CHANGE_DRIVING_METHODS:
      return {
        ...car,
        detail: {
          engines: car.detail.engines,
          drivingMethods: payload,
          bodyTypes: car.detail.bodyTypes,
        },
      };

    case CHANGE_BODY_TYPES:
      return {
        ...car,
        detail: {
          engines: car.detail.engines,
          drivingMethods: car.detail.drivingMethods,
          bodyTypes: payload,
        },
      };

    case PUSH_ADDITIONAL_OPTION:
      return {
        ...car,
        option: {
          additional: [...car.option.additional, payload],
          confusing: car.option.confusing,
        },
      };

    case PUSH_CONFUSING_OPTION:
      return {
        ...car,
        option: {
          additional: car.option.additional,
          confusing: [...car.option.confusing, payload],
        },
      };

    case POP_ADDITIONAL_OPTION:
      return {
        ...car,
        option: {
          additional: payload,
          confusing: car.option.confusing,
        },
      };

    case POP_CONFUSING_OPTION:
      return {
        ...car,
        option: {
          additional: car.option.additional,
          confusing: payload,
        },
      };

    case RESET_ALL:
      return {
        ...car,
        trim: { name: "Exclusive", price: 40000000 },
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
      };
    case CHANGE_ALL:
      return {
        ...car,
        ...payload,
      };
  }
}
