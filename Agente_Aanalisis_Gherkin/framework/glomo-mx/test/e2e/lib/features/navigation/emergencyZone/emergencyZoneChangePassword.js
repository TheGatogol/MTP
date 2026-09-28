import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//pages
import emergencyZoneDashboard from '../../pages/emergencyZone/emergencyZoneDashboard'; //importamos la página que se verá al inicio

// Page Objects IDs
const EMERGENCYZONEDASHBOARD = emergencyZoneDashboard.getId();

class EmergencyZoneChangePassword extends AbstractGlomoNavigation{

    constructor(){
        super({page: 'emergencyZone/emergencyZoneChangePassword', parentNavigation: 'emergencyZone/emergencyZoneDashboard'});
    }
    async go_impl() {
        switch(currentPage.getId()) {
            case EMERGENCYZONEDASHBOARD:
                await emergencyZoneDashboard.pressChangePassword();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new EmergencyZoneChangePassword();
