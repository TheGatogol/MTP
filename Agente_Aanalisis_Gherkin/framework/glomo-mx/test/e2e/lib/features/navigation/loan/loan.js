import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import dashboardpage from '../../pages/dashboard/dashboard';
import sustainableRatePage from '../../pages/sustainableRateJustification/sustainableRateJustification';

// Page Objects IDs
const dashboard = dashboardpage.getId();
const sustainableRate = sustainableRatePage.getId();

class Loan extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'loan/loanPage', parentNavigation: 'dashboard'});
    }

    async go_impl({loan} = {}) {
        let isFuturaFlag;
        switch (currentPage.getId()) {
            case dashboard:
                isFuturaFlag = await dashboardpage.isFutura();
                if (isFuturaFlag) {
                    if (typeof loan === 'object' && loan.contractId) {
                        await dashboardpage.selectLoanByContractId(loan.contractId);
                    } else {
                        await dashboardpage.selectLoansByLastDigits(user.products.account);
                    }
                } else {
                    await dashboardpage.accessLoan();
                }
                break;
            case sustainableRate:
                await sustainableRatePage.closeOnboardingModal();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

}

export default new Loan();
