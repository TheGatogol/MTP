import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import atmLocator from '../../pages/atmLocator/atmLocator';

const ATM_LOCATOR = atmLocator.getId();

class BranchAppointment extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'branchAppointment/branchAppointment', parentNavigation: 'atmLocator/atmLocator'});
    }

    async go_impl(branch = '') {
        switch (currentPage.getId()) {
            case ATM_LOCATOR:
                await currentPage.confirmDialog();
                await currentPage.waitUntilSpinnerVeil({
                    timeoutToAppear: config.wait.XS,
                    timeoutToDisappear: config.wait.L});
                await currentPage.accessBranchAppointment(branch);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new BranchAppointment();
