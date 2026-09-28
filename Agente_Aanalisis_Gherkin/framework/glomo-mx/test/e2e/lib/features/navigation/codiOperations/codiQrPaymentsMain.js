import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import codiQrPaymentsReaderSuccess from '../../pages/codiOperations/codiQrPaymentsReaderSuccess';

const CODI_QR_PAYMENT_READER_SUCCESS = codiQrPaymentsReaderSuccess.getId();

class CodiQrPaymentsMain extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codiOperations/codiQrPaymentsMain', parentNavigation: 'codiOperations/codiQrPaymentsReaderSuccess'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CODI_QR_PAYMENT_READER_SUCCESS:
                await codiQrPaymentsReaderSuccess.continue();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CodiQrPaymentsMain();
