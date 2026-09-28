import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import payrollAccountLinkBenefitsPage from '../../pages/payrollAccount/link/payrollAccountLinkBenefits';
import payrollAccountLinkSuccessPage from '../../pages/payrollAccount/link/payrollAccountLinkSuccess';
import payrollAccount from '../../pages/payrollAccount/payrollAccount';

function getAccount() {
    return global.user.products.accounts[0];
}

const navigatePayrollFromAccount = async () => {
    const account = getAccount();
    await navigation.account.productDetail.go({account});
};

const navigateToPayroll = async (screen) => {
    switch (screen.toLowerCase()) {
        case 'account':
            await navigatePayrollFromAccount();
            break;
        case 'main':
            await navigation.payrollAccount.payrollAccountLink.mainpage.go();
            break;
        case 'benefits':
            await navigation.payrollAccount.payrollAccountLink.benefits.go();
            break;
        case 'success':
            await navigation.payrollAccount.payrollAccountLink.success.go();
            break;
        case 'home':
            await navigation.payrollAccount.payrollAccount.go();
            break;
        default:
            throw new Error(`${screen} screen is not available to navigate to...`);
    }
};

When(/^the user accesses to payroll "([^"]*)" screen$/, async function(screen) {
    await navigateToPayroll(screen);
});

When(/^the user tries to access to payroll account link main screen$/, async function() {
    await navigatePayrollFromAccount();
    await navigateToPayroll('home');
    await payrollAccount.accessPayrollOnboarding();
});

When(/^the user closes the success screen with "([^"]*)"$/, async function(button) {
    await payrollAccountLinkSuccessPage.closeSuccessPage({button: button});
});

When(/^the user wants to check "([^"]*)" info page$/, async function(infoPage) {
    await payrollAccountLinkBenefitsPage.infopagedetail({infoPage: infoPage, code: 1});
});

When(/^the user closes "([^"]*)" info page using "([^"]*)"$/, async function(infoPage, button) {
    await payrollAccountLinkBenefitsPage.showInfoPage({infoPage: infoPage, code: 1});
    switch (button.toLowerCase()) {
        case 'header button':
            await payrollAccountLinkBenefitsPage.closeInfoPage({isHeaderButton: true});
            break;
        case 'page button':
            await payrollAccountLinkBenefitsPage.closeInfoPage({isHeaderButton: false});
            break;
        default:
            throw new Error(`${button} button is not available to click to...`);
    }

});

When (/^the user closes the modal from "([^"]*)"$/, async function(button) {
    await payrollAccount.exitCurpValidation(button);
});

When(/^the user indicates that company sent is incorrect$/, async function() {
    await payrollAccountLinkBenefitsPage.notConfirmMyCompany({code: 1});
});

When(/^the user tries to send a wrong company code$/, async function() {
    await payrollAccountLinkBenefitsPage.tryToSendWrongCode({code: 0});
});

When(/^the user decides to edit "([^"]*)" from summary section$/, async function(dataPage) {
    const isTerms = dataPage.toLowerCase() === 'terms and conditions';
    await payrollAccountLinkBenefitsPage.showSummarySection({code: 1});
    await payrollAccountLinkBenefitsPage.showEditDataPage({dataPage: dataPage});
    if (!isTerms) await payrollAccountLinkBenefitsPage._sendCompanyCode({code: 2});
});

When(/^the user views the screen "([^"]*)"$/, async function(screen) {
    switch (screen.toLowerCase()) {
        case 'payroll account':
            await navigateToPayroll('home');
            break;
        case 'payroll account link':
            await navigateToPayroll('home');
            await navigateToPayroll('benefits');
            break;
        default:
            throw new Error(`${screen} screen is not available to navigate to...`);
    }
    await currentPage.leaveProcessAtSecondTry({leave: true});
});

When(/^the user leaves the flow from "([^"]*)"$/, async function(screen) {
    if (screen==='payroll account link') {
        await navigateToPayroll('home');
        await navigateToPayroll('benefits');
    }
    await currentPage.leaveProcessAtSecondTry({leave: false});
});

When(/^the user introduces "([^"]*)" as a company code$/, async function(code) {
    await payrollAccountLinkBenefitsPage.enterCompanyCode(code);
});

When(/^the user accepts privacy notice and terms$/, async function() {
    await payrollAccountLinkBenefitsPage.showSummarySection({code: 1});
});

When(/^the user accepts request payroll link$/, async function() {
    await payrollAccountLinkBenefitsPage.completeRequestPayrollLink({code: 1});
});

When(/^the user decides use qr scan$/, async function() {
    await payrollAccountLinkBenefitsPage.openQrScanner();
});

When(/^the user closes the page information$/, async function() {
    await payrollAccountLinkBenefitsPage.showInfoPageLinks({code: 1});
});

When(/^the user navigates to payroll "([^"]*)" screen$/, async function(screen) {
    await navigateToPayroll(screen);
});
