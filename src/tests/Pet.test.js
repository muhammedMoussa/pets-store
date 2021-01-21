import Pet from '../app/Pet';
jest.mock('../app/Pet'); 

beforeEach(() => {
  Pet.mockClear();
});

it('We can check if the consumear called the class constructor', () => {
    const mockSayHi = jest.fn();
    Pet.prototype.sayHi = mockSayHi

    const dog = new Pet('Pitbull');
    // expect(dog.sayHi()).toBeTruthy('Pitbull');
});
