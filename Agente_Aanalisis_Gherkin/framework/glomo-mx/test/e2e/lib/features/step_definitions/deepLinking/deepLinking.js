import {Commands} from '@csqe/radish';
import {Then, When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import offerTdcModal from '../../pages/offerTdcModal/offerTdcModal';
import cardCreditCardPaymentPromise from '../../pages/cardCreditCardPaymentPromise/cardCreditCardPaymentPromise';
import ocLoan from '../../pages/ocLoan/ocLoan';
import carLoanPayment from '../../pages/loan/carLoanPayment';
import loansPaymentPledge from '../../pages/loansPaymentPledge/loansPaymentPledge';
import inAppCrmAdvancedPage from '../../pages/inAppCrmAdvancedPage/inAppCrmAdvancedPage';
import memberGetMemberInviteFriend from '../../pages/memberGetMemberInviteFriend/memberGetMemberInviteFriend';
// STEP DEFINITIONS

Then(/^the user goes to dashboard using deeplink navigation$/, async function() {
    await navigation.dashboard.deeplink();
});

When(/^the user goes to "([^"]*)" using deeplink navigation$/, async function(sc) {
    switch (sc) {
        case 'emergency reports with an active report':
            await currentPage.setCrashReport();
            await navigation.emergencyReports.emergencyReports.deeplink({screen: 'emergencyReports'});
            break;
        case 'emergency reports':
            await navigation.emergencyReports.emergencyReports.deeplink({screen: 'emergencyReports'});
            break;
        case 'screen financial health advice':
            await Commands.pause({time: config.wait.S});
            await navigation.financialHealthPushAdvice.financialHealthPushAdvice.deeplink({screen: 'financialHealthPushAdvice'});
            break;
        case 'screen offer tdc modal':
            await navigation.offerTdcModal.offerTdcModal.deeplink({screen: 'offerTdcModal'});
            await offerTdcModal.createPushNotificationInfo();
            break;
        case 'screen CoDi QR request':
            await setCodiKeys();
            await navigation.codiOperations.codiQrRequestSteps.deeplink({screen: 'codiQrRequestSteps'});
            break;
        case 'screen CoDi QR payment':
            await setCodiKeys();
            await navigation.codiOperations.codiQrPaymentsReaderSuccess.deeplink({screen: 'codiQrPaymentsReaderSuccess'});
            break;
        case 'screen CoDi phone request':
            await setCodiKeys();
            await navigation.codiOperations.codiPaymentRequestMain.deeplink({screen: 'codiPaymentRequestMain'});
            break;
        case 'screen CoDi phone payment':
            await setCodiKeys();
            await navigation.codiOperations.codiPaymentInformation.deeplink({screen: 'codiPaymentInformation'});
            break;
        case 'screen car loan payment':
            await navigation.loan.carLoanPayment.deeplink({
                screen: 'carLoanPayment',
                uriParams: {
                    loanId: global.user.carLoanId,
                }
            });
            await carLoanPayment.handlePushNotificationInfo();
            break;
        case 'screen credit card payment promise':
            await navigation.cardCreditCardPaymentPromise.cardCreditCardPaymentPromise.deeplink({screen: 'cardCreditCardPaymentPromise'});
            await cardCreditCardPaymentPromise.createPushNotificationInfo();
            break;
        case 'member get member invite friend':
            await navigation.MemberGetMemberInviteFriend.MemberGetMemberInviteFriend.deeplink({screen: 'dynamicsAndRewards'});
            await memberGetMemberInviteFriend.pushNotificationRewards();
            break;
        case 'screen loans payment pledge':
            await navigation.loansPaymentPledge.loansPaymentPledge.deeplink({screen: 'loansPaymentPledge'});
            await loansPaymentPledge.createPushNotificationInfo();
            break;
        case 'screen loans payment pledge error':
            await navigation.loansPaymentPledge.loansPaymentPledge.deeplink({screen: 'loansPaymentPledge'});
            await loansPaymentPledge.createErrorPushNotificationInfo();
            break;
        case 'account configuration secction':
            await navigation.accountConfigurationSection.accountConfigurationSection.go();
            break;
        case 'buy now pay later remaining':
            await navigation.buyNowPayLaterRemaining.deeplink({
                screen: 'buyNowPayLater',
                uriParams: {
                    pushNotificationParams: JSON.stringify(global.user.pushDataApproved),
                },
            });
            break;
        case 'oc loan web plus glomo':
            await navigation.ocLoan.ocLoan.deeplink({
                screen: 'ocLoan',
                uriParams: {
                    offerId: global.user.offerId
                },
            });
            await ocLoan.initializeOcLoanWebPlusGlomo();
            break;
        case 'enrollment promotions':
            await navigation.reward.invitationEnrollmentPromotions.deeplink({screen: 'rewardsPromotionsInvitationEnrollment', uriParams:
                    {offerId: global.user.pushDataApproved.offerId,
                        campaignId: global.user.pushDataApproved.campaignId,
                        categoryId: global.user.pushDataApproved.categoryId,
                        period: global.user.pushDataApproved.period}});
            break;
        case 'credit line increase nilc':
        case 'remember credit line increase nilc':
            await navigation.nCreditLineIncrease.nCreditLineIncrease.deeplink({screen: 'nCreditLineIncrease'});
            break;
        case 'in app upgrade n2 a n4':
            await navigation.inAppUpgradeN2aN4.inAppUpgradeN2aN4.deeplink({screen: 'inAppCrmAdvancedPage'});
            await inAppCrmAdvancedPage.initializeInAppUpgrade();
            break;
        case 'modular offering flexible financing offer':
            await navigation.flexibleFinancingOffer.flexibleFinancingOffer.deeplink({
                screen: 'flexibleFinancingOffer',
                uriParams: {
                    pushNotificationParams: JSON.stringify(global.user.pushDataApproved),
                },
            });
            break;
        case 'piggy bank percentage rule':
            await navigation.piggyBanksPercentageRule.piggyBanksPercentageRule.deeplink({screen: 'piggyBanksPercentageRule'});
            break;
        case 'birth certificate account young':
            await navigation.ocAccountYoungDigitalization.ocAccountYoungDigitalization.deeplink({screen: 'ocAccountYoungDigitalizationMx'});
            break;
        case 'screen checklist actions':
            await navigation.checklistActions.checklistActions.deeplink({screen: 'checklistActions'});
            break;
        default:
            throw new Error(`Unknown deeplinking navigation: ${sc}`);
    }
    await Commands.pause({time: config.wait.S});
});

async function setLocalStorage(key, val) {
    await Commands.pause({time: config.wait.XS});
    await Commands.execute({
        script: (key, val) => localStorage.setItem(key, val),
        args: [key, val]
    });
}

async function setCodiKeys() {
    await setLocalStorage('flag_codi_qr_request_visited', JSON.stringify(global.user.flag_codi_qr_request_visited));
    await setLocalStorage('see_first_request_modal_completed', JSON.stringify(global.user.see_first_request_modal_completed));
    await setLocalStorage('login_banxico_request_body_codi', JSON.stringify(global.user.login_banxico_request_body_codi));
    await setLocalStorage('codi_banxico_request_acc', JSON.stringify(global.user.codi_banxico_request_acc));
    await setLocalStorage('banxico_push_status', JSON.stringify(global.user.banxico_push_status));
    await setLocalStorage('enrollment_codi_key', JSON.stringify(global.user.enrollment_codi_key));
    await setLocalStorage('login_banxico_codi', JSON.stringify(global.user.login_banxico_codi));
    await setLocalStorage('registration_completed_codi', JSON.stringify(global.user.registration_completed_codi));
}
