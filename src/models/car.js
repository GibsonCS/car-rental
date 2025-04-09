import { BaseModel } from "./base/base.js"

export class Car extends BaseModel {
    constructor({ id, name, releaseYear, available, gasAvailable }) {
        super({id, name })
        this.releaseYear = releaseYear
        this.available = available
        this.gasAvailable = gasAvailable
    }
}