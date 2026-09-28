import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError, Commands} from '@csqe/radish';

// Pages
import login from '../../pages/loginLogout/login';
import inappchat from '../../pages/inAppChat/inAppChat';

// Page Objects IDs
const LOGIN = login.getId();
const IN_APP_CHAT = inappchat.getId();

class InAppChatWelcome extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'inAppChat/inAppChatWelcome', parentNavigation: 'login'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case LOGIN:
                await Commands.url({uri: '/#!/chatWelcome'});
                break;
            case IN_APP_CHAT:
                await inappchat.closeChat();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InAppChatWelcome();
