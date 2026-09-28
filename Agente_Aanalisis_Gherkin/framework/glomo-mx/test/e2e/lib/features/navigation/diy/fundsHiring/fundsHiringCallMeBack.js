import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import fundsHiringStep1Page from '../../../pages/diy/fundsHiring/fundsHiringStep1';

const FUNDS_HIRING_CALL_ME_BACK = fundsHiringStep1Page.getId();

class FundsHiringCallMeBack extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'redirectCallMeBack/redirectCallMeBack'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FUNDS_HIRING_CALL_ME_BACK:
                await fundsHiringStep1Page.accessToCallMeBack('header');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new FundsHiringCallMeBack();
