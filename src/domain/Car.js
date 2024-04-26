import { ERROR_EMPTY_CAR_NAME, ERROR_LONG_CAR_NAME } from "../constants";

export class Car {
  static MOVE_FORWARD_CAR = 4;
  static CAR_NAME_MAX_LEN = 5;

  constructor(name) {
    if (!name.length) {
      throw new Error(ERROR_EMPTY_CAR_NAME);
    }
    if (name.length > Car.CAR_NAME_MAX_LEN) {
      throw new Error(ERROR_LONG_CAR_NAME);
    }
    this.name = name;
    this.position = 0;
  }

  move(condition) {
    if (condition >= Car.MOVE_FORWARD_CAR) {
      this.position += 1;
    }
  }

  getPosition() {
    return this.position;
  }

  getName() {
    return this.name;
  }
}
