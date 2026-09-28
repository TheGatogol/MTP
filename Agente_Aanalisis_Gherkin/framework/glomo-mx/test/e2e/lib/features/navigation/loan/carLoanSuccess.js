import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

//Pages
import carLoan from '../../pages/loan/carLoan';

//Page Objects IDs
const CAR_LOAN = carLoan.getId();

class CarLoanSuccess extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loan/carLoanSuccess', parentNavigation: 'loan/carLoan'});
    }

    async go_impl(otp) {
        switch(currentPage.getId()) {
            case CAR_LOAN:
                await carLoan.acceptLoan(otp);
                break;
            default: 
                throw new NotPathNavigationError();
        }
    }
}

export default new CarLoanSuccess();
