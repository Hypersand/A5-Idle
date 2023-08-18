export const globalCar = {
  trim: {
    trimId: 1,
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
  carImg: {},
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
