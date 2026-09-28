import AbstractGlomoNavigation from '../abstract-glomo-navigation';

// Pages
import emergencyReportsPage from '../../pages/emergencyReports/emergencyReports';
import {NotPathNavigationError} from '@csqe/radish';

// Page Objects IDs
const EMERGENCY_REPORTS = emergencyReportsPage.getId();

class EmergencyTrackingReports extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'emergencyTrackingReports/emergencyTrackingReports', parentNavigation: 'emergencyReports/emergencyReports' });
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case EMERGENCY_REPORTS:
                await emergencyReportsPage.setCrashReport();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new EmergencyTrackingReports();
