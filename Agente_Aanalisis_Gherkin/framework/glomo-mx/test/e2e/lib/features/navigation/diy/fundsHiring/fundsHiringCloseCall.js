import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import callMeBack from '../../../pages/redirectCallMeBack/redirectCallMeBack';

// Page Objects IDs
const FUNDS_CLOSE_CALL = callMeBack.getId();

class FundsHiringStep1 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/fundsHiring/fundsHiringStep1'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUNDS_CLOSE_CALL:
                await callMeBack.closeCall();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FundsHiringStep1();
