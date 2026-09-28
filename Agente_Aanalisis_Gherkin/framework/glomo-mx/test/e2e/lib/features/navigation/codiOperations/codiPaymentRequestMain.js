import AbstractGlomoNavigation from '../abstract-glomo-navigation';

class CodiPaymentRequestMain extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codiOperations/codiPaymentRequestMain'});
    }
}

export default new CodiPaymentRequestMain();
