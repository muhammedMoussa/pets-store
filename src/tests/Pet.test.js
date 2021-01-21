import Purchase from '../app/Purchase';
jest.mock('../app/Purchase'); 

beforeEach(() => {
  Purchase.mockClear();
});

it('We can check if the consumear called the class constructor', () => {
    const mockSayHi = jest.fn();
    Purchase.prototype.sell = mockSayHi
    console.log(Purchase)

    const adamInvoice = new Purchase('Adam', [1]);
    // const jhonInvoice = new Purchase('Jhon', [mackerel, husky]);
    adamInvoice.sell();
    // const dog = new Pet('Pitbull');
    // expect(adamInvoice.sell()).toBeCalled();
});
