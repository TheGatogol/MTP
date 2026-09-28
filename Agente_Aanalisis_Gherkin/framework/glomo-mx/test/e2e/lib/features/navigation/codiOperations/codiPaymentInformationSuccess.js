import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import codiPaymentInformation from '../../pages/codiOperations/codiPaymentInformation';

const CODI_PAYMENT_REQUEST_MAIN = codiPaymentInformation.getId();

class CodiPaymentInformationSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codiOperations/codiPaymentInformationSuccess', parentNavigation: 'codiOperations/codiPaymentInformation'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CODI_PAYMENT_REQUEST_MAIN:
                await codiPaymentInformation.confirmPay();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CodiPaymentInformationSuccess();
