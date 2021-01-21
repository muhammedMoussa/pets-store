import Pet from './Pet';
jest.mock('./Pet'); 

beforeEach(() => {
  Pet.mockClear();
});

it('We can check if the consumer called the class constructor', () => {
    const mockSayHi = jest.fn();
    Pet.prototype.sayHi = mockSayHi

    const dog = new Pet('Pitbull');
    expect(dog.sayHi()).toBeTruthy('Pitbull');
});
