const PaymentPackage = require('../06-PaymentPackage.js');
const expect = require('chai').expect;

describe('PaymentPackage Tests', () => {
    describe('Test name parameter', () => {
        it('Test invalid name as number', () => {
            expect(() => new PaymentPackage(1, 1)).to.Throw('Name must be a non-empty string');
        });

        it('Test invalid name as empty string', () => {
            expect(() => new PaymentPackage('', 1)).to.Throw('Name must be a non-empty string');
        });

        it('Test with properly name', () => {
            let myObj = new PaymentPackage('test', 1);

            expect(myObj.name).to.equal('test');
        });
    });

    describe('Test value parameter', () => {
        it('Test invalid value as string', () => {
            expect(() => new PaymentPackage('x', 'x')).to.Throw('Value must be a non-negative number');
        });

        it('Test invalid value as negative number', () => {
            expect(() => new PaymentPackage('x', -1)).to.Throw('Value must be a non-negative number');
        });

        it('Test with properly value', () => {
            let myObj = new PaymentPackage('test', 1);

            expect(myObj.value).to.equal(1);
        });
    });

    describe('Test VAT parameter', () => {
        it('Test invalid VAT as string', () => {
            let myObj = new PaymentPackage('x', 1);

            expect(() => myObj.VAT = 'x').to.Throw('VAT must be a non-negative number');
        });

        it('Test invalid VAT as negative number', () => {
            let myObj = new PaymentPackage('x', 1);

            expect(() => myObj.VAT = -1).to.Throw('VAT must be a non-negative number');
        });

        it('Test with properly VAT', () => {
            let myObj = new PaymentPackage('x', 1);

            expect(myObj.VAT = 1).to.equal(1);
        });

        it('Test initial value of VAT', () => {
            let newObj = new PaymentPackage('x', 1);

            expect(newObj.VAT).to.equal(20);
        });
    });

    describe('Test active parameter', () => {
        it('Test invalid active as string', () => {
            let newObj = new PaymentPackage('x', 1);

            expect(() => newObj.active = 'test').to.Throw('Active status must be a boolean');
        });

        it('Test with properly active', () => {
            let myObj = new PaymentPackage('x', 1);

            expect(myObj.active = false).to.equal(false);
        });

        it('Test initial value of active', () => {
            let newObj = new PaymentPackage('a', 1);

            expect(newObj.active).to.equal(true);
        });
    });

    describe('Test toString Method', () => {
        it("test properly toString", () => {
            let newObj = new PaymentPackage('HR Services', 1500);

            expect(newObj.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });

        it("test toString changing active to false", () => {
            let newObj = new PaymentPackage('HR Services', 1500);
            newObj.active = false;

            expect(newObj.toString()).to.equal('Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800');
        });

        it("test toString with zero value and VAT changed to zero", () => {
            let newObj = new PaymentPackage('HR Services', 0);
            newObj.VAT = 0;

            expect(newObj.toString()).to.equal('Package: HR Services\n- Value (excl. VAT): 0\n- Value (VAT 0%): 0');
        });
    });
});