import AbstractGlomoNavigation from '../abstract-glomo-navigation';

class OcLoan extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocLoan/ocLoan'});
    }
}

export default new OcLoan();
