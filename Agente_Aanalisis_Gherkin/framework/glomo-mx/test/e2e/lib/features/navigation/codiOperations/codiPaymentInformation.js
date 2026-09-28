import AbstractGlomoNavigation from '../abstract-glomo-navigation';

class CodiPaymentInformation extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codiOperations/codiPaymentInformation'});
    }
}

export default new CodiPaymentInformation();
