import Pet from "./Pet";

export default class Puppie extends Pet {
    constructor(name, price) {
        super(name, 'Puppie', price);
    }

    getFamilyInfo() {
        return `Its ${this.name}, from ${this.platoon}`;
    }

    getDetails() {
        return `Its ${this.name} from ${this.platoon} famlil, cost = ${this.price}`;
    }
}