import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import ocCarLoanTracking from '../../pages/ocCarLoan/ocCarLoanTracking';

// Page Objects IDs
const CAR_LOAN_TRACK = ocCarLoanTracking.getId();

class OcCarLoanContractSigning extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocCarLoan/ocCarLoanContractSigning', parentNavigation: 'ocCarLoan/ocCarLoanTracking'});
    }

    async go_impl(section = 'sign documents') {
        switch (currentPage.getId()) {
            case CAR_LOAN_TRACK:
                await ocCarLoanTracking.goToSection(section);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcCarLoanContractSigning();
