import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//pages
import emergencyZoneStolenCard from '../../pages/emergencyZone/emergencyZoneStolenCard';

// Page Objects IDs
const EMERGENCYZONESTOLENCARD = emergencyZoneStolenCard.getId();

class EmergencyZoneToggleCard extends AbstractGlomoNavigation{

    constructor(){
        super({page: 'emergencyZone/emergencyZoneToggleCard', parentNavigation: 'emergencyZone/emergencyZoneStolenCard'});
    }
    async go_impl() {
        switch(currentPage.getId()) {
            case EMERGENCYZONESTOLENCARD:
                await emergencyZoneStolenCard.pressToggleCardBtn();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new EmergencyZoneToggleCard();
