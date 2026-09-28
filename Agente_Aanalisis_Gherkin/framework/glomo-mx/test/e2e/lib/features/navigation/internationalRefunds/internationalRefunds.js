import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import internationalTransfersDetail from '../../pages/internationalTransfer/internationalTransfersDetail';

const INTERNATIONAL_TRASNFERS_DETAIL_PAGE_ID = internationalTransfersDetail.getId();
class InternationalRefunds extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'internationalRefunds/internationalRefunds', parentNavigation: 'internationalTransfer/internationalTransfersDetail'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case INTERNATIONAL_TRASNFERS_DETAIL_PAGE_ID:
                await internationalTransfersDetail.selectCompleteInformation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InternationalRefunds();
