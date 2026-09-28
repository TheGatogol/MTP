import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {Commands, NotPathNavigationError} from '@csqe/radish';
import * as navigation from '../navigation';

// Pages
import cachedLoginPage from '../pages/loginLogout/cachedLogin';
import dashboard from '../pages/dashboard/dashboard';
import fundOriginationOcFund from '../pages/fundOriginationOcFund/fundOriginationOcFund';
import landingPage from '../pages/landing/landing';
import ocAccount from '../pages/ocAccount/ocAccount';
import ocSecureLoanLead from '../pages/ocSecureLoanLead/ocSecureLoanLead';
import investAdvisoryPortfolio from '../pages/investAdvisory/investAdvisoryPortfolio';
import ocLoanOfferSpherica from '../pages/ocLoanOffer/ocLoanOfferSpherica';

// Page Objects IDs
const OC_LOAN_OFFER_SPHERICA = ocLoanOfferSpherica.getId();
const CACHED_LOGIN = cachedLoginPage.getId();
const DASHBOARD = dashboard.getId();
const LANDING = landingPage.getId();
const FUND_ORIGINATION = fundOriginationOcFund.getId();
const OC_ACCOUNT = ocAccount.getId();
const OC_SECURE_LOAN_LEAD = ocSecureLoanLead.getId();
const INVEST_PROFILING = investAdvisoryPortfolio.getId();

class ContractProductSection extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'contractProductSection/contractProductSection', parentNavigation: 'dashboard'});
    }

    async go_impl({fromOperationals = false, option} = {}) {
        switch (currentPage.getId()) {
            case CACHED_LOGIN:
                await cachedLoginPage.login();
                break;
            case OC_LOAN_OFFER_SPHERICA:
                await ocLoanOfferSpherica.handleActions('confirms the exit');
                break;
            case DASHBOARD:
                await Commands.pause({time: config.wait.S}); // Wait for accounts contracts
                if (fromOperationals) {
                    await dashboard.accessToOperative({operative: 'opportunities'});
                } else if (option) {
                    await dashboard.accessOpportunitiesPageFromCollectionHome(option);
                } else {
                    await dashboard.accessFooterTab(dashboard.FOOTER_TABS.ADD);
                }
                break;
            case FUND_ORIGINATION:
                await fundOriginationOcFund.closeOperative({option});
                break;
            case LANDING:
                await navigation.cachedLogin.go({functionality: 'Contract products'});
                await this.go_impl();
                break;
            case OC_ACCOUNT:
                await ocAccount.accessToContractProductSection({option});
                break;
            case OC_SECURE_LOAN_LEAD:
                await ocSecureLoanLead.exitSimulation({option});
                break;
            case INVEST_PROFILING:
                await investAdvisoryPortfolio.exitProfilingWelcome();
                break;    
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new ContractProductSection();
