import {NotPathNavigationError} from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import accountUpgradePrevQuestionsPage from '../../pages/accountUpgrade/accountUpgradePrevQuestions';

const ACCOUNT_UPGRADE_PREV_QUESTIONS = accountUpgradePrevQuestionsPage.getId();

class AccountUpgradeCustomerData extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'accountUpgrade/accountUpgradeCustomerData', parentNavigation: 'accountUpgrade/accountUpgradePrevQuestions'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case ACCOUNT_UPGRADE_PREV_QUESTIONS:
                await accountUpgradePrevQuestionsPage.continue();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AccountUpgradeCustomerData();
