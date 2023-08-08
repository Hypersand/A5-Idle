import {
  CHANGE_ADDITIONAL_OPTION,
  CHANGE_BODY_TYPES,
  CHANGE_CONFUSING_OPTION,
  CHANGE_DRIVING_METHODS,
  CHANGE_ENGINES,
  CHANGE_INSIDE_COLOR,
  CHANGE_OUTSIDE_COLOR,
  CHANGE_TRIM,
  RESET_ALL,
} from "./actionType";

export function carReducer(car, { type, payload }) {
  switch (type) {
    case CHANGE_TRIM:
      return { ...car, trim: payload };

    case CHANGE_OUTSIDE_COLOR:
      return {
        ...car,
        color: {
          outside: payload,
          inside: car.color.inside,
        },
      };

    case CHANGE_INSIDE_COLOR:
      return {
        ...car,
        color: {
          outside: car.color.outside,
          inside: payload,
        },
      };

    case CHANGE_ENGINES:
      return {
        ...car,
        detail: {
          engines: payload,
          driving_methods: car.detail.driving_methods,
          body_types: car.detail.body_types,
        },
      };

    case CHANGE_DRIVING_METHODS:
      return {
        ...car,
        detail: {
          engines: car.detail.engines,
          driving_methods: payload,
          body_types: car.detail.body_types,
        },
      };

    case CHANGE_BODY_TYPES:
      return {
        ...car,
        detail: {
          engines: car.detail.engines,
          driving_methods: car.detail.driving_methods,
          body_types: payload,
        },
      };

    case CHANGE_ADDITIONAL_OPTION:
      return {
        ...car,
        option: {
          additional: payload,
          confusing: car.option.confusing,
        },
      };

    case CHANGE_CONFUSING_OPTION:
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
      };
  }
}
