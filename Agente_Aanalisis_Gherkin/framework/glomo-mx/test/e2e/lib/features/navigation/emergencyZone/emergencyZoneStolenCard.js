import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//pages
import emergencyZoneDashboard from '../../pages/emergencyZone/emergencyZoneDashboard';
import emergencyReports from '../../pages/emergencyReports/emergencyReports';

// Page Objects IDs
const EMERGENCYZONEDASHBOARD = emergencyZoneDashboard.getId();
const EMERGENCY_REPORTS = emergencyReports.getId();

class EmergencyZoneStolenCard extends AbstractGlomoNavigation{

    constructor(){
        super({page: 'emergencyZone/emergencyZoneStolenCard', parentNavigation: 'emergencyZone/emergencyZoneDashboard'});
    }
    async go_impl() {
        switch(currentPage.getId()) {
            case EMERGENCYZONEDASHBOARD:
                await emergencyZoneDashboard.pressStolenCardBtn();
                break;
            case EMERGENCY_REPORTS:
                await emergencyReports.accessToStole();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new EmergencyZoneStolenCard();
