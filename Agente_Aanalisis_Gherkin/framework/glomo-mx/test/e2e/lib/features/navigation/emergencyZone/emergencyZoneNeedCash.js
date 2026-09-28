import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//pages
import emergencyZoneDashboard from '../../pages/emergencyZone/emergencyZoneDashboard';

// Page Objects IDs
const EMERGENCYZONEDASHBOARD = emergencyZoneDashboard.getId();

class EmergencyZoneNeedCash extends AbstractGlomoNavigation{

    constructor(){
        super({page: 'emergencyZone/emergencyZoneNeedCash', parentNavigation: 'emergencyZone/emergencyZoneDashboard'});
    }
    async go_impl() {
        switch(currentPage.getId()) {
            case EMERGENCYZONEDASHBOARD:
                await emergencyZoneDashboard.pressNeedCash();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new EmergencyZoneNeedCash();
