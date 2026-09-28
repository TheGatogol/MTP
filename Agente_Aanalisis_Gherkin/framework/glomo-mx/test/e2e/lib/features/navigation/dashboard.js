import AbstractGlomoNavigation from './abstract-glomo-navigation';
import {NotPathNavigationError, Commands} from '@csqe/radish';

import loginPage from '../pages/loginLogout/login';
import landingPage from '../pages/landing/landing';
import orangeCardProductDetailPage from '../pages/productDetails/orangeCardProductDetail';
import digitalToken from '../pages/digitalToken/digitalToken';
import cachedLoginPage from '../pages/loginLogout/cachedLogin';
import welcomeExperiencePage from '../pages/welcome/welcomeExperience';
import operationsMorePage from '../pages/operationals/operationals';
import aboutPage from '../pages/about/aboutPage';
import inAppCrm from '../pages/inAppCrm/inAppCrm';
import transfer from '../pages/diy/transfer/transfer';
import postalAddressNomineesSuccess from '../pages/postalAddressNominees/postalAddressNomineesSuccess';
import fido from '../pages/fido/fido';
import ocAccount from '../pages/ocAccount/ocAccount';
import inAppCrmAdvancedPage from '../pages/inAppCrmAdvancedPage/inAppCrmAdvancedPage';
import notificationsCenter from '../pages/notificationsCenter/notificationsCenter';
import zeroPartyData from '../pages/feedbackClientVoiceConnect/zeroPartyData';
import expensesGroup from '../pages/expensesGroup/expensesGroup';
import recipientsReview from '../pages/profileRecipients/profileRecipientsSuccess';
import nps from '../pages/feedbackClientVoiceConnect/nps';
import fundOriginationOcFund from '../pages/fundOriginationOcFund/fundOriginationOcFund';
import rewardsLanding from '../pages/reward/rewardsLanding';
import securityMenu from '../pages/securitySettings/securityMenu';
import cashZonePaymentsMpos from '../pages/cashZone/cashZonePaymentsMpos';
import sideBar from '../pages/sidebar/sideBar';
import crmAuthorizationCoords from '../pages/crmAuthorizationCoords/crmAuthorizationCoords';
import contractProductsSectionDataAuthorization from '../pages/contractProductsSectionDataAuthorization/contractProductsSectionDataAuthorization';
import billPaymentsDashboard from '../pages/billPaymentsDashboard/billPaymentsDashboard';
import payrollPortability from '../pages/payrollPortability/payrollPortability';
import configureProductsPage from '../pages/configureProducts/configureProducts';
import notificationsSettingsPage from '../pages/notificationsSettings/notificationsSettings';
import creditCardPaymentReminderSettingsPage from '../pages/creditCardPaymentReminderSettings/creditCardPaymentReminderSettings';
import suspectedTransactionsManagement from '../pages/suspectedTransactionsManagement/suspectedTransactionsManagement';
import operationReceiptCreditCard from '../pages/creditCardPayment/operationReceipt';
import transferSuccessPage from '../pages/diy/transfer/transferSuccess';
import internationalTransferContactsBook from '../pages/internationalTransfer/InternationalTransferContactsBook';

import * as navigation from './';

const FIDO = fido.getId();
const LOGIN = loginPage.getId();
const LANDING = landingPage.getId();
const ORANGE_CARD_PRODUCT_DETAIL = orangeCardProductDetailPage.getId();
const CACHED_LOGIN = cachedLoginPage.getId();
const DIGITAL_TOKEN = digitalToken.getId();
const WELCOME_EXPERIENCE_PAGE = welcomeExperiencePage.getId();
const ABOUT = aboutPage.getId();
const OPERATIONS_MORE = operationsMorePage.getId();
const IN_APP_CRM = inAppCrm.getId();
const SECURITY_MENU = securityMenu.getId();
const TRANSFER = transfer.getId();
const POSTAL_ADDRESS_NOMINEES_SUCCESS = postalAddressNomineesSuccess.getId();
const OC_ACCOUNT = ocAccount.getId();
const INAPP_CRM_ADVANCED = inAppCrmAdvancedPage.getId();
const IN_APP_CRM_GEO = crmAuthorizationCoords.getId();
const NOTIFICATIONS_CENTER = notificationsCenter.getId();
const ZERO_PARTY_DATA = zeroPartyData.getId();
const EXPENSES_GROUP = expensesGroup.getId();
const RECIPIENTS_REVIEW = recipientsReview.getId();
const NPS = nps.getId();
const FUND_ORIGINATION = fundOriginationOcFund.getId();
const REWARDS = rewardsLanding.getId();
const CASH_ZONE = cashZonePaymentsMpos.getId();
const SIDEBAR = sideBar.getId();
const CONTRACT_PRODUCTS_SECTION_DATA_AUTHORIZATION = contractProductsSectionDataAuthorization.getId();
const BILL_PAYMENTS_DASHBOARD = billPaymentsDashboard.getId();
const PAYROLL_PORTABILITY = payrollPortability.getId();
const CONFIGURE_PRODUCTS = configureProductsPage.getId();
const NOTIFICATIONS_SETTINGS = notificationsSettingsPage.getId();
const CREDIT_CARD_PAYMENT_REMINDER_SETTINGS = creditCardPaymentReminderSettingsPage.getId();
const SUSPECTED_TRANSACTIONS_MANAGEMENT = suspectedTransactionsManagement.getId();
const OPERATION_RECIPIENT_CREDIT_CARD = operationReceiptCreditCard.getId();
const TRANSFER_SUCCESS = transferSuccessPage.getId();
const INTERNATIONAL_TRANSFER_CONTACTS_BOOK = internationalTransferContactsBook.getId();

class Dashboard extends AbstractGlomoNavigation {
    constructor() {
        super({page: 'dashboard/dashboard', parentNavigation: 'login'});
    }

    async go_impl({activeLaterToken = true, button, option} = {}) {
        if (global.appSettings && global.appSettings.doUpdate) {
            await this.page.updateAppSettingsInLocalStorage();
        }

        switch (currentPage.getId()) {
            case LOGIN:
                await loginPage.login();
                if (Commands.flags.isMobile) {
                    await currentPage.changeContext({context: 'WEBVIEW'});
                    await navigation.digitalToken.assert();
                    await this.go_impl();
                    await currentPage.dialogPermissions.allowUseAppPermission();
                    await currentPage.dialogPermissions.allowPermission();
                }
                break;
            case ORANGE_CARD_PRODUCT_DETAIL:
                await orangeCardProductDetailPage.goBack();
                break;
            case CACHED_LOGIN:
                await cachedLoginPage.login();
                if (Commands.flags.isMobile) {
                    await navigation.digitalToken.assert();
                    await this.go_impl();
                    await navigation.fido.fido.assert();
                    await this.go_impl();
                }
                break;
            case LANDING:
                await navigation.cachedLogin.go();
                await this.go_impl();
                break;
            case ABOUT:
                await aboutPage.goBack();
                break;
            case WELCOME_EXPERIENCE_PAGE:
                await welcomeExperiencePage.accessDashboard();
                await navigation.digitalToken.assert();
                break;
            case DIGITAL_TOKEN:
                if (activeLaterToken) {
                    await digitalToken.activeLater();
                }
                break;
            case FIDO:
                await fido.skipBiometricsConfig();
                break;
            case FUND_ORIGINATION:
                await fundOriginationOcFund.closeOperative({button});
                break;
            case OPERATIONS_MORE:
                await operationsMorePage.goBack();
                break;
            case IN_APP_CRM:
                await inAppCrm.closeScreen({button});
                if (Commands.flags.isMobile) {
                    await currentPage.changeContext({context: 'WEBVIEW'});
                    await navigation.digitalToken.assert();
                    await this.go_impl();
                }
                break;
            case TRANSFER:
                await transfer.confirmDialog({isConfirmed: true});
                break;
            case TRANSFER_SUCCESS:
                await transferSuccessPage.closeOperative();
                break;
            case POSTAL_ADDRESS_NOMINEES_SUCCESS:
                await currentPage.exitPostalAddressSuccess({button});
                break;
            case OC_ACCOUNT:
                await ocAccount.accessToContractProductSection({option});
                break;
            case INAPP_CRM_ADVANCED:
                await inAppCrmAdvancedPage.sectionOther();
                break;
            case NOTIFICATIONS_CENTER:
                await notificationsCenter.accessFooter('dashboard');
                break;
            case ZERO_PARTY_DATA:
                await currentPage.closeSuccess({button});
                break;
            case EXPENSES_GROUP:
                await currentPage.closeSuccess();
                break;
            case NPS:
                await nps.closeOperative();
                break;
            case RECIPIENTS_REVIEW:
                if (!button) {
                    await recipientsReview.goBackDasboard();
                } else{
                    await recipientsReview.accessDashboard();
                }
                break;
            case REWARDS:
                await rewardsLanding.goBackDashboard();
                break;
            case OPERATION_RECIPIENT_CREDIT_CARD:
                await operationReceiptCreditCard.goBack();
                break;
            case SECURITY_MENU:
                await securityMenu.goBack();
                break;
            case IN_APP_CRM_GEO:
                if (button === 'bottom'){
                    await crmAuthorizationCoords.closeInAppGeolocationSuccess();
                }else{
                    await crmAuthorizationCoords.closeModalInAppGeolocation();
                }
                break;
            case SIDEBAR:
                await sideBar.doLogOut(true);
                break;
            case CASH_ZONE:
                await cashZonePaymentsMpos.exitMpossOverview({option});
                break;
            case CONTRACT_PRODUCTS_SECTION_DATA_AUTHORIZATION:
                await contractProductsSectionDataAuthorization.openHelpModal();
                await contractProductsSectionDataAuthorization.accessDashboard();
                break;
            case BILL_PAYMENTS_DASHBOARD:
                await billPaymentsDashboard.exitFromModalPaymentInProcess();
                break;
            case PAYROLL_PORTABILITY:
                await payrollPortability.exitProcess();
                break;
            case CONFIGURE_PRODUCTS:
                await configureProductsPage.header.actionLeft();
                break;
            case NOTIFICATIONS_SETTINGS:
                await notificationsSettingsPage.header.actionLeft();
                break;
            case CREDIT_CARD_PAYMENT_REMINDER_SETTINGS:
                await creditCardPaymentReminderSettingsPage.returnToPreviousScreen();
                break;
            case SUSPECTED_TRANSACTIONS_MANAGEMENT:
                await suspectedTransactionsManagement.closeNotification(option);
                break;
            case INTERNATIONAL_TRANSFER_CONTACTS_BOOK:
                await internationalTransferContactsBook.closeSuccessModal();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }
}

export default new Dashboard();
