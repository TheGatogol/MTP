import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {Commands, NotPathNavigationError} from '@csqe/radish';
import configureProducts from '../../pages/configureProducts/configureProducts';

const CONFIGURE_PRODUCTS = configureProducts.getId();

async function setLocalStorage(key, val) {
    await Commands.execute({
        script: (key, val) => localStorage.setItem(key, val),
        args: [key, val]
    });
}

class CodiSettings extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'codiOperations/codiSettings', parentNavigation: 'configureProducts/configureProducts'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONFIGURE_PRODUCTS:
                await setLocalStorage('banxico_push_status', JSON.stringify(global.user.banxico_push_status));
                await setLocalStorage('enrollment_codi_key', JSON.stringify(global.user.enrollment_codi_key));
                await setLocalStorage('login_banxico_codi', JSON.stringify(global.user.login_banxico_codi));
                await setLocalStorage('registration_completed_codi', JSON.stringify(global.user.registration_completed_codi));
                await setLocalStorage('codi_banxico_request_acc', JSON.stringify(global.user.codi_banxico_request_acc));
                await configureProducts.goNextPageFromConfigurationProducts('codi settings');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}
export default new CodiSettings();
