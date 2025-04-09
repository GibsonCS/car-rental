import { before, beforeEach, afterEach, describe, it } from "mocha";
import { expect } from "chai";
import sinon from "sinon";
import { CarService } from "../../src/services/carService.js";

describe("CarService", () => {
  let carService;

  before(() => {
    carService = new CarService();
  });

  describe("Should return a available cars list", () => {
    it("Should retrieve a random position from an array", () => {
      const result = carService;
    });
  });
});
