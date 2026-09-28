import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import internationalTransfersPanel from '../../pages/internationalTransfer/internationalTransfersPanel';

const INTERNATIONAL_TRASNFERS_PANEL_ID = internationalTransfersPanel.getId();
class InternationalTransfersHistorical extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'internationalTransfer/internationalTransfersHistorical', parentNavigation: 'internationalTransfer/internationalTransfersPanel'});
    }

    async go_impl(movementType = '') {
        switch(currentPage.getId()) {
            case INTERNATIONAL_TRASNFERS_PANEL_ID:
                await internationalTransfersPanel.accessToMovementList(movementType);
                await this.page.waitSpinner();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InternationalTransfersHistorical();
