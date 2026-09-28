import {NotPathNavigationError} from '@csqe/radish';
import digitalActivationCall from '../../pages/digitalActivation/digitalActivationCall'; // eslint-disable-line no-unused-vars
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import digitalActivation from '../../pages/digitalActivation/digitalActivation';

// Page Objects IDs
const DIGITAL_ACTIVATION = digitalActivation.getId();

class DigitalActivationCall extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'digitalActivation/digitalActivationCall', parentNavigation: 'digitalActivation/digitalActivation'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case DIGITAL_ACTIVATION:
                await digitalActivation.selectContinueCompleteSummary();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new DigitalActivationCall();
