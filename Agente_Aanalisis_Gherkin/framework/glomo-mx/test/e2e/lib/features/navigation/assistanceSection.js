import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {Commands, NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboard from '../pages/dashboard/dashboard';
import digitalButler from '../pages/digitalButler/digitalButler';

// Page Objects IDs
const DASHBOARD = dashboard.getId();
const DIGITAL_BUTLER = digitalButler.getId();

class AssistanceSection extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'assistanceSection/assistanceSection', parentNavigation: 'dashboard'});
    }

    async go_impl(data) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await Commands.pause({time: config.wait.S}); // Wait for accounts contracts
                await dashboard.accessFooterTab(dashboard.FOOTER_TABS.CONTACT);
                break;
            case DIGITAL_BUTLER:
                await digitalButler.leaveOperative(data);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new AssistanceSection();
