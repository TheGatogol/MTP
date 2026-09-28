import AbstractGlomoNavigation from '../abstract-glomo-navigation';

class CodiQrPaymentsReaderSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codiOperations/codiQrPaymentsReaderSuccess'});
    }
}

export default new CodiQrPaymentsReaderSuccess();
