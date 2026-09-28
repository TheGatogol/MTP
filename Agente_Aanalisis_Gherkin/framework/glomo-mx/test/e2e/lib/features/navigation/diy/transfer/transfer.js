import AbstractGlomoNavigation from '../../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';
// Pages
import accountDetailPage from '../../../pages/productDetails/accountProductDetail';
import dashboardPage from '../../../pages/dashboard/dashboard';
import orangeCardProductDetailPage from '../../../pages/productDetails/orangeCardProductDetail';
import operationals from '../../../pages/operationals/operationals';
import contactsAgenda from '../../../pages/contactsAgenda/contactsAgenda';
import digitalButler from '../../../pages/digitalButler/digitalButler';

// Page Objects IDs
const ACCOUNT_PRODUCT_DETAIL = accountDetailPage.getId();
const DASHBOARD = dashboardPage.getId();
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const OPERATIONALS = operationals.getId();
const CONTACTS_AGENDA = contactsAgenda.getId();
const DIGITAL_BUTLER = digitalButler.getId();
class Transfer extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'diy/transfer/transfer', parentNavigation: 'dashboard'});
    }
    async go_impl(option) {
        switch (currentPage.getId()) {
            case ACCOUNT_PRODUCT_DETAIL:
                (option === 'interbank transfer')
                    ? await accountDetailPage.accessBoostInterbankTransfersMessageAccountDetail()
                    : await accountDetailPage.verifyTransfer();                
                break;
            case DASHBOARD:
                await dashboardPage.accessToOperative({operative: 'transfer', section: option});
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetailPage.initiateTransfersProductDetail();
                break;
            case OPERATIONALS:
                await operationals.accessToOperative({operative : 'transfer', section: 'accounts'});
                break;
            case CONTACTS_AGENDA: 
                await contactsAgenda.selectContactWithAccount(option);
                break;
            case DIGITAL_BUTLER:
                await digitalButler.selectNavigation(option);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new Transfer();
