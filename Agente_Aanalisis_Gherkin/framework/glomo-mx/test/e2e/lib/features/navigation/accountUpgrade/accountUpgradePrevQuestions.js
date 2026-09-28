import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import accountUpgradePage from '../../pages/accountUpgrade/accountUpgrade';

const ACCOUNT_UPGRADE = accountUpgradePage.getId();

class AccountUpgradePrevQuestionss extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'accountUpgrade/accountUpgradePrevQuestions', parentNavigation: 'accountUpgrade/accountUpgrade'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_UPGRADE:
                await accountUpgradePage.continue();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AccountUpgradePrevQuestionss();
