import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import codiQrPaymentsMain from '../../pages/codiOperations/codiQrPaymentsMain';

const CODI_QR_PAYMENT_MAIN = codiQrPaymentsMain.getId();

class CodiQrPaymentsReceipt extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codiOperations/codiQrPaymentsReceipt', parentNavigation: 'codiOperations/codiQrPaymentsMain'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CODI_QR_PAYMENT_MAIN:
                await codiQrPaymentsMain.confirmPay();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CodiQrPaymentsReceipt();
