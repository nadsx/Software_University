const Warehouse = require('../07-Warehouse.js');
const expect = require('chai').expect;

describe('Warehouse Tests', () => {
    let warehouse;

    beforeEach(function () {
        warehouse = new Warehouse(50);
    });

    describe('Test Constructor', () => {
      it('Test error properties', () => {
          const result = () => new Warehouse(-1);
          
          expect(result).to.throw(`Invalid given warehouse space`);
      });
      
        it('Test properties', () => {
            expect(warehouse.capacity).to.equal(50);
            expect(warehouse.availableProducts).to.deep.equal({
                'Food': {},
                'Drink': {}
            });
        });
    });

    describe('Test addProduct() method', () => {
        it('Test error', () => {
            const result = () => warehouse.addProduct('Food', 'Test', 123);
            
            expect(result).to.throw(`There is not enough space or the warehouse is already full`);
        });

        it('Test functionality', () => {
            const result = warehouse.addProduct('Food', 'Test', 10);
            
            expect(warehouse.availableProducts.Food['Test']).to.equal(10);
            expect(result).to.deep.equal({
                Test: 10
            });
        });
    });

    describe('Test orderProduct() method', function () {
        it('Test functionality with available products', function () {
            warehouse.addProduct('Drink', 'A', 2);
            warehouse.addProduct('Drink', 'B', 5);

            const result = JSON.stringify(warehouse.orderProducts('Drink'));

            expect(result).to.equal(`{"B":5,"A":2}`);
        });

        it('Test functionality without available products', function () {
            const result = JSON.stringify(warehouse.orderProducts('Drink'));
            
            expect(result).to.equal(`{}`);
        });
    });

    describe('Test occupiedCapacity() method', () => {
        it('Test zero result', () => {
            const result = warehouse.occupiedCapacity();
            
            expect(result).to.equal(0);
        });

        it('Test none-zero result', () => {
          warehouse.addProduct('Drink', 'A', 2);
          warehouse.addProduct('Food', 'S', 2);
          
            const result = warehouse.occupiedCapacity();

            expect(result).to.equal(4);
        });
    });

    describe('Test revision() method', () => {
        it('Test empty output', () => {
            const result = warehouse.revision();
            
            expect(result).to.equal('The warehouse is empty');
        });

        it('Test none-empty output', () => {
            warehouse.addProduct('Food', 'Z', 1);
            warehouse.addProduct('Drink', 'B', 2);

            const result = warehouse.revision();

            expect(result).to.equal("Product type - [Food]\n- Z 1\nProduct type - [Drink]\n- B 2");
        });
    });

    describe('Test scrapeAProduct() method', () => {
        it('Test error', () => {
            const result = () => warehouse.scrapeAProduct('Error', 0);
            
            expect(result).to.throw('Error do not exists');
        });

        it('Test more expected quantity functionality', () => {
            warehouse.addProduct('Food', 'Z', 1);
            const result = warehouse.scrapeAProduct('Z', 12);

            expect(result).to.deep.equal({
                Z: 0
            });
        });

        it('Test expected quantity functionality', () => {
            warehouse.addProduct('Food', 'Z', 2);
            const result = warehouse.scrapeAProduct('Z', 1);

            expect(result).to.deep.equal({
                Z: 1
            });
        });
    });
});