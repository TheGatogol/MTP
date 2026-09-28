import AbstractGlomoNavigation from '../abstract-glomo-navigation';
import {NotPathNavigationError} from '@csqe/radish';

// Pages
import payrollPortability from '../../pages/payrollPortability/payrollPortability';
import depositHiringPage from '../../pages/depositHiring/depositHiring';
import leadMortgage from '../../pages/leadMortgage/leadMortgage';
import fundsHiringStep1 from '../../pages/diy/fundsHiring/fundsHiringStep1';
import ocMetaSegura from '../../pages/ocMetasegura/ocMetasegura';
import dynamicLifeinsurance from '../../pages/dynamicLifeInsurance/dynamicLifeInsurance';
import travelInsuranceStep1 from '../../pages/diy/travelInsurance/travelInsuranceStep1';
import nonPreApprovedCarCertificateMain from '../../pages/nonPreApprovedCarCertificate/nonPreApprovedCarCertificateMain';
import investAdvisoryPortfolio from '../../pages/investAdvisory/investAdvisoryPortfolio';

// Page Objects IDs
const PAYROLL_PORTABILITY = payrollPortability.getId();
const DEPOSIT_HIRING = depositHiringPage.getId();
const LEAD_MORTGAGE = leadMortgage.getId();
const FUND_HIRING = fundsHiringStep1.getId();
const OC_META_SEGURA = ocMetaSegura.getId();
const DYNAMIC_LIFE_INSURANCE = dynamicLifeinsurance.getId();
const TRAVEL_INSURANCE = travelInsuranceStep1.getId();
const NON_PRE_APPROVED_CAR_CERTIFICATE_MAIN = nonPreApprovedCarCertificateMain.getId();
const INVEST_PROFILING = investAdvisoryPortfolio.getId();
class RedirectCallMeBack extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'redirectCallMeBack/redirectCallMeBack'});
    }
    async go_impl({access, step}) {
        switch (currentPage.getId()) {
            case DEPOSIT_HIRING:
                await currentPage.accessToCallMeBack(access);
                break;
            case PAYROLL_PORTABILITY:
                await currentPage.accessToCallMeBack(access);
                break;
            case LEAD_MORTGAGE:
                await  currentPage.accessToCallMeBack(access);
                break;
            case FUND_HIRING:
                await  currentPage.accessToCallMeBack(access);
                break;
            case OC_META_SEGURA:
                await currentPage.accessToCallMeBack(access);
                break;
            case DYNAMIC_LIFE_INSURANCE:
                await  currentPage.accessToCallMeBack(access);
                break;
            case TRAVEL_INSURANCE:
                await currentPage.accessToCallMeBack(access);
                break;
            case NON_PRE_APPROVED_CAR_CERTIFICATE_MAIN:
                await nonPreApprovedCarCertificateMain.accessToCallMeBack(access, step);
                break;
            case INVEST_PROFILING:
                await investAdvisoryPortfolio.callMeBackValidation(access);
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}
export default new RedirectCallMeBack();
