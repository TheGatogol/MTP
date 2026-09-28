import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import fundsHiringStep7Page from '../../../pages/diy/fundsHiring/fundsHiringStep7';

const FUNDS_HIRING_CALL_ME_BACK = fundsHiringStep7Page.getId();

class FundsHiringCallMeBackStep7 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'redirectCallMeBack/redirectCallMeBack'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUNDS_HIRING_CALL_ME_BACK:
                await fundsHiringStep7Page.accessToCallMeBack('header');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new FundsHiringCallMeBackStep7();
