import {Then} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

Then('the user sees the following items in the screen(:)', async function(table) {
    await currentPage.validateScreen(table);
});

Then('the user does not see the following items in the screen(:)', async function(table) {
    await currentPage.validateScreen(table, undefined, { notVisible: true });
});

Then('the user accesses/sees the {string} screen', async function(page) {
    switch (page.toLowerCase()) {
        case 'landing':
            await navigation.landing.assert();
            break;
        case 'public landing':
            await navigation.landingPublic.assert();
            break;
        case 'login':
            await navigation.login.assert();
            break;
        case 'dashboard':
            await navigation.dashboard.assert();
            break;
        case 'orange card detail':
            await navigation.card.orangeCardProductDetail.assert();
            break;
        case 'balloon account detail':
            await navigation.account.productDetail.assert();
            break;
        case 'balloon card detail':
            await navigation.card.orangeCardProductDetail.assert();
            break;
        case 'bank rate simulator':
            await navigation.card.bankRateSimulator.assert();
            break;
        case 'operation receipt':
            await navigation.creditCardPayment.operationReceipt.assert();
            break;
        case 'assistance':
            await navigation.assistance.assert();
            break;
        case 'coming soon':
            await navigation.comingSoon.assert();
            break;
        case 'pfm aggregation':
            await navigation.pfm.aggregation.aggregation.assert();
            break;
        case 'pfm dashboard detail':
            await navigation.pfm.dashboardDetail.dashboardDetail.assert();
            break;
        case 'pfm categorization':
            await navigation.pfm.categorization.categorization.assert();
            break;
        case 'pfm settings':
            await navigation.pfm.settings.settings.assert();
            break;
        case 'welcome':
            await navigation.welcome.access.assert();
            break;
        case 'product detail account':
            await navigation.account.productDetail.assert();
            break;
        case 'checks section':
            await navigation.checksSection.checksSection.assert();
            break;
        case 'operational limits configuration':
            await navigation.operationalLimitsConfiguration.editCreditCardLimits.assert();
            break;
        case 'movement detail':
            await navigation.card.movementsDetail.assert();
            break;
        case 'finance transaction':
            await navigation.card.financeTransaction.financeTransaction.assert();
            break;
        case 'about':
            await navigation.about.aboutPage.assert();
            break;
        case 'account details':
            await navigation.dashboard.assert();
            break;
        case 'card details':
            await navigation.dashboard.assert();
            break;
        case 'cardless withdrawal':
            await navigation.cardlessWithdrawal.cardlessWithdrawal.assert();
            break;
        case 'cardless withdrawal historic':
            await navigation.cardlessWithdrawal.cardlessWithdrawalHistoric.assert();
            break;
        case 'account cardless withdrawal':
            await navigation.dashboard.go();
            await navigation.account.productDetail.go({account: user.products.accounts[0]});
            await navigation.cardlessWithdrawal.cardlessWithdrawal.go();
            await navigation.cardlessWithdrawal.cardlessWithdrawal.assert();
            break;
        case 'account payroll portability':
            await navigation.account.productDetail.go({account: user.products.accounts[0]});
            await navigation.payrollAccount.payrollAccount.go();
            await navigation.payrollPortability.payrollPortability.go();
            await navigation.payrollPortability.payrollPortability.assert();
            break;
        case 'deposit details':
            await navigation.dashboard.assert();
            break;
        case 'checks management service terms':
            await navigation.checksManagement.checksManagementServiceTerms.assert();
            break;
        case 'profile':
            await navigation.profile.assert();
            break;
        case 'checks management operative':
            await navigation.checksManagement.checksManagement.assert();
            break;
        case 'checks deposit list':
            await navigation.checksDeposits.checksDepositsList.assert();
            break;
        case 'loan detail':
            await navigation.loan.loan.assert();
            break;
        case 'pay card':
            await navigation.creditCardPayment.accountCreditCardPayment.assert();
            break;
        case 'receipt of payment':
            await navigation.creditCardPayment.operationReceipt.assert();
            break;
        case 'product detail insurance':
            await navigation.insurance.insuranceProductDetail.assert();
            break;
        case 'product detail insurance more info':
            await navigation.insurance.insuranceProductDetailMoreInfo.assert();
            break;
        case 'checks deposits operative':
            await navigation.checksDeposits.checksDeposits.assert();
            break;
        case 'contract product section':
            await navigation.contractProductSection.assert();
            break;
        case 'dynamics and rewards':
            await navigation.memberGetMember.assert();
            break;
        case 'non pre approved credit card offer':
            await navigation.creditCardApplication.nonPreApproved.nonPreApprovedCCNav.assert();
            break;
        case 'equity':
            await navigation.equity.equity.assert();
            break;
        case 'pay receipts':
            await navigation.sustainability.receiptPayments.assert();
            break;
        case 'bill payments dashboard':
            await navigation.billPaymentsDashboard.billPaymentsDashboard.assert();
            break;
        case 'bill payments home':
            await navigation.scheduledBillPayments.ScheduledBillPaymentsBack.assert();
            break;
        case 'chat welcome':
            await navigation.inAppChat.inAppChatWelcome.assert();
            break;
        case 'recharge tag':
            await navigation.teleViaPaseTags.tagsRechargeNav.assert();
            break;
        case 'meta segura success':
            await navigation.ocMetasegura.ocMetaSeguraSuccess.assert();
            break;
        case 'unit linked':
            await navigation.unitLinked.unitLinked.assert();
            break;
        case 'credit card holder':
            await navigation.creditCardApplication.creditCardHolder.creditCardHolder.assert();
            break;
        case 'atm locator':
            await navigation.atmLocator.atmLocator.assert();
            break;
        case 'pockets welcome':
            await navigation.pockets.pocketWelcome.assert();
            break;
        case 'piggy banks':
            await navigation.piggyBanks.piggyBanks.assert();
            break;
        case 'limited operatives':
            await navigation.limitedOperativesInfo.limitedOperativesInfo.assert();
            break;
        case 'oc car loan tracking':
            await navigation.ocCarLoan.ocCarLoanTracking.assert();
            break;
        case 'payroll account link main':
            await navigation.payrollAccount.payrollAccountLink.mainpage.assert();
            break;
        case 'payroll account link benefits':
            await navigation.payrollAccount.payrollAccountLink.benefits.assert();
            break;
        case 'payroll account':
            await navigation.payrollAccount.payrollAccount.assert();
            break;
        case 'requested appointment successfully':
            await navigation.branchAppointment.branchAppointmentSuccess.assert();
            break;
        case 'operationals':
            await navigation.selectOperations.selectOperations.assert();
            break;
        case 'promotions landing':
            await navigation.reward.rewardsLanding.assert();
            break;
        case 'digital activation':
            await navigation.digitalActivation.digitalActivation.assert();
            break;
        case 'digital butler':
            await navigation.digitalButler.digitalButler.assert();
            break;
        case 'configure':
            await navigation.operationalLimitsSettings.settingsNav.assert();
            break;
        case 'emergency zone':
            await navigation.emergencyZone.dashboard.assert();
            break;
        case 'appliance simulator':
            await navigation.applianceSimulator.applianceSimulator.assert();
            break;
        case 'car simulator':
            await navigation.carSimulator.carSimulator.assert();
            break;
        case 'offer loan page':
            await navigation.ocLoanOffer.ocLoanOffer.asert();
            break;
        case 'car pre approved loan offer':
            await navigation.loan.carLoan.assert();
            break;
        case 'car non pre approved loan offer':
            await navigation.nonPreApprovedCarCertificate.main.assert();
            break;
        case 'increase card limit':
            await navigation.card.increaseCardLimit.assert();
            break;
        case 'increase card limit review':
            await navigation.incrementReview.incrementReview.assert();
            break;
        case 'pre-approved loan offer':
            await navigation.ocLoanOffer.ocLoanOffer.assert();
            break;
        case 'pre-approved loan offer spherica':
            await navigation.ocLoanOffer.ocLoanOfferSpherica.assert();
            break;
        case 'credit bureau authorization':
            await navigation.creditBureauAuthorization.creditBureauAuthorization.assert();
            break;
        case 'transfer':
            await navigation.diy.transfer.transfers.assert();
            break;
        case 'sustainability carbon footprint offset':
            await navigation.sustainability.sustainabilityCarbonFootprintOffset.assert();
            break;
        case 'sustainability':
            await navigation.sustainability.Sustainability.assert();
            break;
        case 'carbon footprint section':
            await navigation.sustainability.carbonFootprintSection.assert();
            break;
        case 'sustainability section':
            await navigation.sustainability.mainpage.assert();
            break;
        case 'financing dashboard':
            await navigation.flexibleFinancing.debitLineCancel.assert();
            break;
        case 'key recovery update':
            await navigation.changePassword.ChangePassword.assert();
            break;
        case 'access and signatures':
            await navigation.accessAndSignatures.accessAndSignaturesDashboard.assert();
            break;
        case 'flexible financing dashboard':
            await navigation.flexibleFinancing.flexibleFinancingDashboard.assert();
            break;
        case 'notifications settings':
            await navigation.notificationsSettings.notificationsSettings.assert();
            break;
        case 'notification center':
            await navigation.notificationsCenter.notificationsCenter.assert();
            break;
        case 'service payment':
            await navigation.scheduledBillPayments.scheduledBillPayments.assert();
            break;
        case 'advance payment':
        case 'overdue payment':
            await navigation.flexibleFinancing.advancePayments.assert();
            break;
        case 'support center chat':
            await navigation.supportCenterChat.supportCenterChat.assert();
            break;
        case 'panels non pre approved loan offer':
            await navigation.nonPreApprovedCarCertificate.main.assert();
            break;
        case 'parental control card limit':
            await navigation.parentalControl.parentalControlCards.assert();
            break;
        case 'parental control account limit':
            await navigation.parentalControl.parentalControlAccounts.assert();
            break;
        case 'access key recovery':
            await navigation.accessKeyRecovery.AccessKeyRecovery.assert();
            break;
        case 'additional card':
            await navigation.card.additionalCardDetail.assert();
            break;
        case 'lead mortgage':
            await navigation.leadMortgage.leadMortgage.assert();
            break;
        case 'goals':
            await navigation.goals.goals.assert();
            break;
        case 'investments':
            await navigation.investmentsFollowUp.investmentsFollowUp.assert();
            break;
        case 'documentation proceedings':
            await navigation.payrollPortabilityDocument.payrollPortabilityDocument.assert();
            break;
        case 'invest product detail':
            await navigation.investAdvisory.investAdvisoryProductDetail.assert();
            break;
        case 'contract edit alias':
            await navigation.investAdvisory.investAdvisoryProductDetailEditAlias.assert();
            break;
        case 'email verification':
            await navigation.emailManagement.updateEmail.assert();
            break;
        case 'discreet mode':
            await navigation.discreetModeSettings.assert();
            break;
        case 'security menu':
            await navigation.securitySettings.securityMenu.assert();
            break;
        case 'security profile':
            await navigation.securityProfile.securityProfile.assert();
            break;
        case 'upgrade customer':
            await navigation.upgradeCustomer.upgradeCustomer.assert();
            break;
        case 'rewards landing':
            await navigation.reward.rewardsLanding.assert();
            break;
        case 'video selfie':
            await navigation.nationalId.nationalId.assert();
            break;
        case 'proceedings':
            await navigation.proceedings.proceedings.assert();
            break;
        case 'oc cash zone offer':
            await navigation.ocCashZone.ocCashZone.assert();
            break;
        case 'top up':
            await navigation.selectOperations.topUp.assert();
            break;
        case 'activation qr card':
            await navigation.card.cardLinkAndActivationQrCard.assert();
            break;
        case 'cash zone payments mpos':
            await navigation.cashZonePaymentsMpos.cashZonePaymentsMpos.assert();
            break;
        case 'codi onboarding':
            await navigation.codiOperations.codiBeginRegister.assert();
            break;
        case 'cvv detail':
            await navigation.card.dynamicCvv.assert();
            break;
        case 'kyc validation high risk':
            await navigation.kycValidationHighRisk.kycValidationHighRisk.assert();
            break;
        case 'fund detail':
            await navigation.fund.contractedFundDetail.assert();
            break;
        case 'card block management':
            await navigation.card.cardBlockManagement.assert();
            break;
        case 'call me back':
            await navigation.redirectCallMeBack.redirectCallMeBack.assert();
            break;
        default:
            throw new Error(`The navigation assertion in page: ${page} is not implemented`);
    }
});
