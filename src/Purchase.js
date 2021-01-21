export default class Purchase {
    constructor(customer, items) {
        this.customer = customer;
        this.items = items;
    }

    sell() {
        const {items} = this;
        let purchases = [];
        let total = 0;

        if(items.length) {
            items.map(i => {
                purchases.push(i.name);
                total = total + i.price;
            })
        }

        const purchasesMsg = purchases.join(' and ');
        return `${this.customer} purchased ${purchasesMsg} with total amount of ${total}`;
    }
}