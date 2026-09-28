import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import ocLoanOffer from '../../pages/ocLoanOffer/ocLoanOffer';

// Page Objects IDs
const OCLOANOFFER = ocLoanOffer.getId();

class CallMeBackAssistanceManager extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'callMeBack/callMeBackAssistanceManager', parentNavigation: 'ocLoanOffer/ocLoanOffer'});
    }
    async go_impl({accessFrom}) {
        switch (currentPage.getId()) {
            case OCLOANOFFER:
                await ocLoanOffer.accessToCallMeBackAssistanceManager(accessFrom);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new CallMeBackAssistanceManager();
