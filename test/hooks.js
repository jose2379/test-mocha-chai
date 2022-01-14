
describe('Hooks', () => {
  before(() => console.log('Before ALL - Se ejecuta al inicio y solo UNA vez!!'));
  after(() => console.log('After ALL - Se ejecuta al final y solo UNA vez!!'));
  beforeEach(() => console.log('Before Each - Se ejecuta antes de todos los IT!!'));
  afterEach(() => console.log('After Each - Se ejecuta al final de todos los IT!!'));
  it('Prueba 1', ()=> console.log('Test 1'));
  it('Prueba 2', ()=> console.log('Test 2'));
});