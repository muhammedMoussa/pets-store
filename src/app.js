import Fish from './app/Fish';
import Puppie from './app/Puppie';
import Purchase from './app/Purchase';

const bitpull = new Puppie('Bitpull', 2500);
const husky   = new Puppie('Husky', 3700);

const perch = new Fish('Perch', 220);
const mackerel = new Fish('Mackerel', 150);

const adamInvoice = new Purchase('Adam', [bitpull, perch]);
const jhonInvoice = new Purchase('Jhon', [mackerel, husky]);

const reportDiv = document.querySelector('.report');

const invoices = [
    adamInvoice,
    jhonInvoice
];

invoices.map(invoice => {
    const pTag = document.createElement("p");
    const pTagContent = document.createTextNode(invoice.sell());
    pTag.appendChild(pTagContent);

    reportDiv.appendChild(pTag)
    console.log(invoice.sell());
})