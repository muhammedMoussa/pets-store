import Pet from "./Pet";

export default class Fish extends Pet {
    constructor(name, price) {
        super(name, 'Fishs', price);
        this.name = `${name} Fish`;
        this.price = price;
    }

    getFamilyInfo() {
        return `Its ${this.name}, from ${this.platoon}`;
    }

    getDetails() {
        return `Its ${this.name} from ${this.platoon} famlil, cost = ${this.price}`;
    }
}