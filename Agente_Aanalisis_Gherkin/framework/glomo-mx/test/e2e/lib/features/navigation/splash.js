import {Commands, NotPathNavigationError} from '@csqe/radish';

import AbstractGlomoNavigation from './abstract-glomo-navigation';
import startPage from '../pages/start';

const START = startPage.getId();

class Splash extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'splash/splash', isEphemeral: true});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case START:
                if (Commands.flags.isWeb) {
                    await Commands.url({uri: '/'});
                } else {
                    await Commands.Mobile.startApp({packageName: config.packageName, bundleId: config.bundleId});
                    await Commands.pause({time: config.wait.M});
                }
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Splash();
