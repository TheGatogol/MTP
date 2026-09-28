import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import sidebarPage from '../pages/sidebar/sideBar';
import customerContracts from '../pages/profile/customerContracts';
import dashboardPage from '../pages/dashboard/dashboard';
import profilePostalAddressPage from '../pages/profile/pProfilePostalAddress';
import uploadFile from '../pages/profile/pUploadFile';
import profileUpdateRfc from '../pages/profileUpdateRfc/profileUpdateRfc';
import cutOffDate from '../pages/cutOffDate/cutOffDate';
//Navigations
import * as navigation from '../navigation';
// Page Objects IDs
const SIDEBAR = sidebarPage.getId();
const CUSTOMER_CONTRACTS = customerContracts.getId();
const DASHBOARD = dashboardPage.getId();
const POSTAL_ADDRESS = profilePostalAddressPage.getId();
const UPLOAD_FILE = uploadFile.getId();
const PROFILE_UPDATE_RFC = profileUpdateRfc.getId();
const CUT_OFF_DATE = cutOffDate.getId();

class Profile extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'profile/profile', parentNavigation: 'sidebar'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case SIDEBAR:
                await sidebarPage.access({functionality: 'profile'});
                break;
            case DASHBOARD:
                await sidebarPage.go();
                await this.go_impl();
                break;
            //Go back (Address)
            case POSTAL_ADDRESS:
                await profilePostalAddressPage.goBack();
                break;
            case UPLOAD_FILE:
                await navigation.profilePostalAddress.profilePostalAddress.go({add: true});
                await this.go_impl();
                break;
            case CUSTOMER_CONTRACTS:
                await customerContracts.headerReturnToProfile();
                break;
            case PROFILE_UPDATE_RFC:
                await profileUpdateRfc.exitProcess();
                break;
            case CUT_OFF_DATE:
                await cutOffDate.interactsWithModal('accepts', 'complete profile');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new Profile();
