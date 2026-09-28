import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';
import dashboard from '../../pages/dashboard/dashboard';
import configureProducts from '../../pages/configureProducts/configureProducts';
import notificationCenter from '../../pages/notificationsCenter/notificationsCenter';
import loan from '../../pages/loan/loanPage';

const DASHBOARD = dashboard.getId();
const CONFIGURE_PRODUCTS = configureProducts.getId();
const NOTIFICATIONS_CENTER = notificationCenter.getId();
const LOAN = loan.getId();

class InvitationNonAccountClient extends AbstractGlomoNavigation {
    constructor() {
        super({ page: 'invitationNonAccountClient/invitationNonAccountClient', parentNavigation: 'dashboard' });
    }

    async _dashboardOperatives(option){
        switch (option) {
            case 'transfer':
                await dashboard.accessToOperative({ operative: 'transfer' });
                break;
            case 'opportunities':
                await dashboard.accessToOperative({ operative: 'opportunities' });
                break;
            case 'cardlessWithdrawal':
                await dashboard.accessToOperative({ operative: 'cardlessWithdrawal' });
                break;
            case 'operationsMore':
                await dashboard.accessToOperative({ operative: 'operationsMore' });
                break;
            case 'checkUp':
                await dashboard.accessFooterTab(dashboard.FOOTER_TABS.CHECK_UP);
                break;
            case 'add':
                await dashboard.accessFooterTab(dashboard.FOOTER_TABS.ADD);
                break;
            default:
                throw new Error(`The option ${option} is not implemented`);
        }

    }

    async go_impl(access) {
        switch (currentPage.getId()) {
            case DASHBOARD:
                await this._dashboardOperatives(access);
                break;
            case CONFIGURE_PRODUCTS:
                await configureProducts.goNextPageFromConfigurationProducts(access);
                break;
            case NOTIFICATIONS_CENTER:
                await notificationCenter.accessFooter(access);
                break;
            case LOAN:
                await loan.accessPayCreditLoan();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new InvitationNonAccountClient();
