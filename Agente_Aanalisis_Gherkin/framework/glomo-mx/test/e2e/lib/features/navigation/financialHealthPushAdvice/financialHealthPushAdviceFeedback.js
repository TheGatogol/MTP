import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import financialHealthPushAdvicePage from '../../pages/financialHealthPushAdvice/financialHealthPushAdvice';

// Page Objects IDs
const FINANCIAL_HEALTH_PUSH_PAGE = financialHealthPushAdvicePage.getId();

class FinancialHealthPushAdviceFeedback extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'financialHealthPushAdvice/financialHealthPushAdviceFeedback',
            parentNavigation: 'financialHealthPushAdvice/financialHealthPushAdvice'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case FINANCIAL_HEALTH_PUSH_PAGE:
                await financialHealthPushAdvicePage.giveFeedback();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new FinancialHealthPushAdviceFeedback();
