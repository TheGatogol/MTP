import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import codiPaymentRequestMain from '../../pages/codiOperations/codiPaymentRequestMain';

const CODI_PAYMENT_REQUEST_MAIN = codiPaymentRequestMain.getId();

class CodiPaymentRequestSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codiOperations/codiPaymentRequestSuccess', parentNavigation: 'codiOperations/codiPaymentRequestMain'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CODI_PAYMENT_REQUEST_MAIN:
                await codiPaymentRequestMain.confirmPaymentsRequest();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CodiPaymentRequestSuccess();
