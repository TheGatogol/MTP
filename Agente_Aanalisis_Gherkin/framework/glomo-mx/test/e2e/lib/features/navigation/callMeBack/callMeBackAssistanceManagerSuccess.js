import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import callMeBackAssistanceManagerPage from '../../pages/callMeBack/callMeBackAssistanceManager';

// Page Objects IDs
const CALLMEBACK = callMeBackAssistanceManagerPage.getId();

class CallMeBackAssistanceManagerSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'callMeBack/callMeBackAssistanceManagerSuccess', parentNavigation: 'callMeBack/callMeBackAssistanceManager'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case CALLMEBACK:
                await callMeBackAssistanceManagerPage.confirmSchedule();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new CallMeBackAssistanceManagerSuccess();
