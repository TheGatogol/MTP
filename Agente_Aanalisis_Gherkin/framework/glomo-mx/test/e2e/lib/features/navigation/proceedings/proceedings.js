import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';
import productDetailPage from '../../pages/productDetails/accountProductDetail';
import payrollAccount from '../../pages/payrollAccount/payrollAccount';
import upgradeCustomer from '../../pages/upgradeCustomer/upgradeCustomer';
import kycValidationHighRisk from '../../pages/kycValidationHighRisk/kycValidationHighRisk';
import profilePage from '../../pages/profile/profile';
import contractProductPage from '../../pages/contractProductSection/contractProductSection';
import dashboardPage from '../../pages/dashboard/dashboard';

const PRODUCT_DETAIL = productDetailPage.getId();
const PAYROLL_ACCOUNT = payrollAccount.getId();
const UPGRADE_CUSTOMER = upgradeCustomer.getId();
const KYC_HIGH_RISK = kycValidationHighRisk.getId();
const PROFILE = profilePage.getId();
const CONTRACT_PRODUCT_SECTION = contractProductPage.getId();
const DASHBOARD = dashboardPage.getId();

class Proceedings extends AbstractGlomoNavigation {
    constructor(){
        super({page: 'proceedings/proceedings'});
    }

    async go_impl(option) {
        switch(currentPage.getId()) {
            case PAYROLL_ACCOUNT:
                await payrollAccount.accessChangePayroll();
                break;
            case PRODUCT_DETAIL:
                if (option === 'upgrade account') {
                    await productDetailPage.accessUpgradeAccount();
                } else {
                    await productDetailPage.accessRestrictedAccountLink();
                }
                break;
            case UPGRADE_CUSTOMER:
                await upgradeCustomer.accessToProceedings();
                break;
            case KYC_HIGH_RISK:
                await kycValidationHighRisk.useOfAccountContinue();
                break;
            case PROFILE:
                await profilePage.access({functionality: 'add kyc high risk'});
                break;
            case CONTRACT_PRODUCT_SECTION:
                await contractProductPage.selectProduct('payroll-portability-oc');
                break;
            case DASHBOARD:
                await dashboardPage.accessPortabilityN2();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Proceedings();
