import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import ocCarLoanTracking from '../../pages/ocCarLoan/ocCarLoanTracking';

// Page Objects IDs
const CAR_LOAN_TRACK = ocCarLoanTracking.getId();

class OcCarLoanDownPayment extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocCarLoan/ocCarLoanDownPayment', parentNavigation: 'ocCarLoan/ocCarLoanTracking'});
    }

    async go_impl(section = 'down payment details') {
        switch (currentPage.getId()) {
            case CAR_LOAN_TRACK:
                await ocCarLoanTracking.goToSection(section);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcCarLoanDownPayment();
