import AbstractGlomoNavigation from '../abstract-glomo-navigation';
class CarLoanPayment extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'loan/carLoanPayment', parentNavigation: 'loan/loan' });
    }
}

export default new CarLoanPayment();
