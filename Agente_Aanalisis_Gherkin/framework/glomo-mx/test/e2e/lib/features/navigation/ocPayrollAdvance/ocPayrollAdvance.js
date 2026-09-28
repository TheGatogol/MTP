import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

import contractProductPage from '../../pages/contractProductSection/contractProductSection';

const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class OcPayrollAdvance extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocPayrollAdvance/ocPayrollAdvance', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct('payroll-advance');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcPayrollAdvance();
