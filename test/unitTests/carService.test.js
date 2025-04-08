import { before, after, describe, it } from "mocha";
import { expect } from "chai";
import sinon from "sinon";
import { CarService } from "../../src/services/carService.js";

describe("API suit test", () => {
  //   const stub = sinon.stub();
  let carService = new CarService();

  it("Should retrieve a random position from an array", () => {
    const data = [1, 2, 3, 4, 5, 6, 7];
    const result = carService.getRandomPositionFromArray(data);
    console.log(result);

    expect(result).to.be.lte(data.length).and.be.gte(0);
  });
});
