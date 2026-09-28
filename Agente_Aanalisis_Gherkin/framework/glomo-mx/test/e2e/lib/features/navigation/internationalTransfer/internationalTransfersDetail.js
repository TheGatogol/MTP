import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import internationalTransfersHistorical from '../../pages/internationalTransfer/internationalTransfersHistorical';

const INTERNATIONAL_TRASNFERS_HISTORICAL_PAGE_ID = internationalTransfersHistorical.getId();
class InternationalTransfersDetail extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'internationalTransfer/internationalTransfersDetail', parentNavigation: 'internationalTransfer/internationalTransfersHistorical'});
    }

    async go_impl(movementStatus = '') {
        switch(currentPage.getId()) {
            case INTERNATIONAL_TRASNFERS_HISTORICAL_PAGE_ID:
                await internationalTransfersHistorical.accessToMovementDetail(movementStatus);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InternationalTransfersDetail();
