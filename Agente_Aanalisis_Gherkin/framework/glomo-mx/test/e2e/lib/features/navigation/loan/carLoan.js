import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import contractProductSection from '../../pages/contractProductSection/contractProductSection';
import carSimulator from '../../pages/carSimulator/carSimulator';

// Page Objects IDs
const CONTRACT_PRODUCT_SECTION = contractProductSection.getId();
const CAR_SIMULATOR = carSimulator.getId();

class CarLoan extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loan/carLoan', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductSection.selectProduct('car-loan');
                break;
            case CAR_SIMULATOR:
                await carSimulator.goToProductAccess();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new CarLoan();
