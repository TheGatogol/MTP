import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';

const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();

class OcPayrollPortability extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocPayrollPortability/ocPayrollPortability', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct('payroll-portability');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcPayrollPortability();
