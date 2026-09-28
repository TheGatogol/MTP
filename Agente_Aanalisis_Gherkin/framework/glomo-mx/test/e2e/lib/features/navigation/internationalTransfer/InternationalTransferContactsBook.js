import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import internationalTransfersPanelPage from '../../pages/internationalTransfer/internationalTransfersPanel';

const INTERNATIONAL_TRANSFERS_PANEL_PAPGE_ID = internationalTransfersPanelPage.getId();

class InternationalTransferContactsBook extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'internationalTransfer/InternationalTransferContactsBook', parentNavigation: 'internationalTransfer/internationalTransfersPanel'});
    }

    async go_impl({previousScreen} = {}) {
        switch (currentPage.getId()) {
            case INTERNATIONAL_TRANSFERS_PANEL_PAPGE_ID:
                await internationalTransfersPanelPage.navigateToInternationalTransfers(previousScreen);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InternationalTransferContactsBook();
