import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import dashboard from '../../pages/dashboard/dashboard';

const DASHBOARD = dashboard.getId();

class Nps extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'feedbackClientVoiceConnect/nps', parentNavigation: 'dashboard'});
    }
    async go_impl() {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await dashboard.waitForLoaded();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new Nps();
