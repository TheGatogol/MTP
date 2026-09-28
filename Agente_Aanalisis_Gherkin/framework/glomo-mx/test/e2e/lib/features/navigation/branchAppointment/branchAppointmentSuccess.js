import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import branchAppointment from '../../pages/branchAppointment/branchAppointment';

const BRANCH_APP = branchAppointment.getId();

class BranchAppointmentSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'branchAppointment/branchAppointmentSuccess', parentNavigation: 'branchAppointment/branchAppointment'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case BRANCH_APP:
                await currentPage.goToStep('summary');
                await currentPage.scheduleAppointment();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BranchAppointmentSuccess();
