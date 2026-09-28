import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import cleanCardOperations from '../../pages/operatives/cleanCardOperations';

const CLEAN_CARD_OPERATIONS = cleanCardOperations.getId();

class MoreInfoPinRequest extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'operatives/pinRequestQr'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CLEAN_CARD_OPERATIONS:
                await cleanCardOperations.moreInformation();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new MoreInfoPinRequest();
