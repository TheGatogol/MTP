import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import digitalActivationCall from '../../pages/digitalActivation/digitalActivationCall';

// Page Objects IDs
const DIGITAL_ACTIVATION_CALL = digitalActivationCall.getId();

class DigitalActivationMobileServices extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'digitalActivation/digitalActivationMobileServices', parentNavigation: 'digitalActivation/digitalActivationCall'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case DIGITAL_ACTIVATION_CALL:
                await digitalActivationCall.selectCall();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DigitalActivationMobileServices();
