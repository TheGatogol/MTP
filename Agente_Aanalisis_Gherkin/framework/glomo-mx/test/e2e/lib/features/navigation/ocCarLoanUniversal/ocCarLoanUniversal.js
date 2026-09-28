import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError} from '@csqe/radish';
import contractProductSection from '../../pages/contractProductSection/contractProductSection';
const CONTRACT_PRODUCT_SECTION = contractProductSection.getId();

class OcCarLoanUniversal extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'ocCarLoanUniversal/ocCarLoanUniversal', parentNavigation: 'contractProductSection'});
    }

    async go_impl() {
        switch(currentPage.getId()) {
            case CONTRACT_PRODUCT_SECTION:
                await contractProductSection.selectProduct('oc-car-loan-origination');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new OcCarLoanUniversal();
