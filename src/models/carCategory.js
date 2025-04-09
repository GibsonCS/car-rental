import { BaseModel } from "./base/base.js";

export class CarCategory extends BaseModel {
    constructor({ id, name, carIds, price }) {
        super({ id, name })

        this.carIds = carIds
        this.price = price
    }
}