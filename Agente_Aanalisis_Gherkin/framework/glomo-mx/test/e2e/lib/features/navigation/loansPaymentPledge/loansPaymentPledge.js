import AbstractGlomoNavigation from '../abstract-glomo-navigation';

class LoansPaymentPledge extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loansPaymentPledge/loansPaymentPledge'});
    }
}

export default new LoansPaymentPledge();
