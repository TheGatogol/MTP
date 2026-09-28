import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import { NotPathNavigationError } from '@csqe/radish';

//Pages
import contractSigningEquityContracts from '../../pages/contractSigningEquityContracts/contractSigningEquityContracts';

// Page Objects IDs
const CONTRACT_SIGNING_EQUITY_CONTRACTS = contractSigningEquityContracts.getId();

class ContractSigningEquityContractsReview extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'contractSigningEquityContracts/contractSigningEquityContractsReview', parentNavigation: 'deferredSignature/contractSigningEquityContracts'});
    }

    async go_impl() {
        switch (currentPage.getId()) {
            case CONTRACT_SIGNING_EQUITY_CONTRACTS:
                await contractSigningEquityContracts.fillOtp('11111111');
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ContractSigningEquityContractsReview();
