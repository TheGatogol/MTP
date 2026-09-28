import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

// Pages
import sidebarPage from '../../pages/sidebar/sideBar';
import branchAppointmentSuccess from '../../pages/branchAppointment/branchAppointmentSuccess';
import branchAppointment from '../../pages/branchAppointment/branchAppointment';
import landingPage from '../../pages/landing/landing';
import ocAccountYoung from '../../pages/ocAccountYoung/ocAccountYoung';
import digitalButler from '../../pages/digitalButler/digitalButler';

// Page Objects IDs
const SIDEBAR = sidebarPage.getId();
const BRANCH_APPT_SUCCESS = branchAppointmentSuccess.getId();
const BRANCH_APPT = branchAppointment.getId();
const LANDING = landingPage.getId();
const OC_ACCOUNT_YOUNG = ocAccountYoung.getId();
const DIGITAL_BUTLER = digitalButler.getId();

class AtmLocator extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'atmLocator/atmLocator', parentNavigation: 'sidebar'});
    }

    async go_impl(entry='') {
        switch (currentPage.getId()) {
            case SIDEBAR:
                await sidebarPage.access({functionality: 'atm'});
                break;
            case BRANCH_APPT:
                if(entry==='exitApptForm'){
                    await currentPage.closeApptForm();
                }
                break;
            case BRANCH_APPT_SUCCESS:
                if(entry==='cancelAppt'){
                    await currentPage.cancelAppointment();
                }
                break;
            case LANDING:
                await landingPage.access({functionality: 'atm locator'});
                break;
            case OC_ACCOUNT_YOUNG:
                await ocAccountYoung.confirmDialog({isConfirmed: true});
                break;
            case DIGITAL_BUTLER:
                await digitalButler.selectNavigation(entry);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new AtmLocator();
