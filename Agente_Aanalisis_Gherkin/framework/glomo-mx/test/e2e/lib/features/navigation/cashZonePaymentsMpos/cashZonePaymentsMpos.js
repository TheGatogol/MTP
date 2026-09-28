import { NotPathNavigationError } from '@csqe/radish';
import AbstractGlomoNavigation from '../abstract-glomo-navigation';

import dashboard from '../../pages/dashboard/dashboard';
import sidebarPage from '../../pages/sidebar/sideBar';
import operatonials from '../../pages/operationals/operationals';

import * as navigation from '../../navigation';

const DASHBOARD = dashboard.getId();
const SIDEBAR = sidebarPage.getId();
const OPERATIONALS = operatonials.getId();

class CashZonePaymentsMpos extends AbstractGlomoNavigation {
    constructor() {
        super({
            page: 'cashZone/cashZonePaymentsMpos',
            parentNavigation: 'dashboard',
        });
    }

    async go_impl(entryPoint = 'operationals') {
        switch (currentPage.getId()) {
            case DASHBOARD:
                if(entryPoint === 'operationals'){
                    await navigation.selectOperations.selectOperations.go();
                } else {
                    await navigation.sidebar.go();
                }
                await this.go_impl();
                break;
            case OPERATIONALS:
                await operatonials.accessToOperative({operative: 'cashZone', section: 'merchants'});
                break;
            case SIDEBAR:
                await sidebarPage.access({functionality: 'cash zone payments mpos'});
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CashZonePaymentsMpos();
