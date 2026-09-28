import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import fundsHiringStep5Page from '../../../pages/diy/fundsHiring/fundsHiringStep5';

const FUNDS_HIRING_CALL_ME_BACK = fundsHiringStep5Page.getId();

class FundsHiringCallMeBackStep5 extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'redirectCallMeBack/redirectCallMeBack'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUNDS_HIRING_CALL_ME_BACK:
                await fundsHiringStep5Page.accessToCallMeBack('header');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new FundsHiringCallMeBackStep5();
