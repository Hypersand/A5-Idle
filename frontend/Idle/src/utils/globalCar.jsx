export const globalCar = {
  trim: {
    name: "Exclusive",
    price: 40000000,
  },
  detail: {
    engines: {
    },
    driving_methods: {
    },
    body_types: {
    },
  },
  color: {
    outside: {
    },
    inside: {
    },
  },
  option: {
    additional: [
    ],
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
