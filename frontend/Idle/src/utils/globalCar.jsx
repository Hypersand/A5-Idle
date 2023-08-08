export const globalCar = {
  trim: {
    name: "Exclusive",
    price: 40000000,
  },
  detail: {
    engines: {
      // name: "가솔린 3.8",
      // price: 0,
    },
    driving_methods: {
      // name: "2WD",
      // price: 0,
    },
    body_types: {
      // name: "7인승",
      // price: 0,
    },
  },
  color: {
    outside: {
      // name: "그라파이드 그레이 메탈릭",
      // price: 0,
    },
    inside: {
      // name: "퀼팅천연(블랙)",
      // price: 3000000,
    },
  },
  option: {
    additional: [
      // { name: "현대스마트센스", price: 1000000 },
      // { name: "컴포트2", price: 2000000 },
      // { name: "듀얼와이드 선루프", price: 3000000 },
      // { name: "현대스마트센스", price: 1000000 },
      // { name: "컴포트2", price: 2000000 },
      // { name: "듀얼와이드 선루프", price: 3000000 },
    ],
    confusing: [],
  },
  bill: {},
  getTrimSum: function () {
    return this.trim.price !== undefined ? this.trim.price : 0;
  },
  getDetailSum: function () {
    return this.detail.engines.price !== undefined &&
      this.detail.driving_methods.price !== undefined &&
      this.detail.body_types.price !== undefined
      ? this.detail.engines.price + this.detail.driving_methods.price + this.detail.body_types.price
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
