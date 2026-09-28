import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
// Page Objects
import mobileTopUpPage from '../../pages/mobileTopUp/mobileTopUp';
import mobileTopUpReview from '../../pages/mobileTopUp/mobileTopUpReview';

When(/^the user accesses to page top up$/, async function() {
    await navigation.mobileTopUp.mobileTopUp.go();
});

When(/^the user accesses the "([^"]*)" from mobile top up$/, async function(option) {
    switch(option.toLowerCase()) {
        case 'my new phone number':
            await mobileTopUpPage.showNewPhoneNumber();
            break;
        case 'contacts agenda':
            await mobileTopUpPage.showContacts();
            break;
        case 'my phone number':
            await mobileTopUpPage.showMyPhoneNumber();
            break;
        default:
            throw new Error(`Your page ${option} its not defined`);
    }
});

When(/^the user completes the form for a new number with these data: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, async function(phoneNumber, company, name, alias, screen) {
    switch(screen.toLowerCase()) {
        case 'unknown contact':
            await mobileTopUpPage.fillForm(phoneNumber, company, name, alias);
            break;
        case 'save unknown contact':
            await mobileTopUpPage.fillForm(phoneNumber, company, name, alias);
            await mobileTopUpPage.confirmHiring();
            break;
        case 'known contact':
            await mobileTopUpPage.fillForm(phoneNumber, name, alias);
            await mobileTopUpPage.phoneNumberMatch();
            break;
        case '10 numbers':
            await mobileTopUpPage.fillFormNumber(phoneNumber);
            break;
        default:
            throw new Error(`Your page ${screen} its not defined`);
    }
});

When(/^the user select the company "([^"]*)"$/, async function(company) {
    await mobileTopUpPage.selectCompanyMyNumber(company);
});

//Step 3
When(/^the user selects the amount of "([^"]*)" in step 3 to access "([^"]*)" screen$/, async function(amount, screen) {
    switch(screen.toLowerCase()) {
        case 'confirm mobile top-up':
            await mobileTopUpPage.selectAmount(amount);
            break;
        case 'sign operation':
            await mobileTopUpPage.selectAmount(amount);
            await mobileTopUpPage.confirmMobileTopUp();
            break;
        case 'the spinner veil':
            await mobileTopUpPage.selectAmount(amount);
            await mobileTopUpPage.confirmMobileTopUp();
            await mobileTopUpPage.confirmHiring();
            break;
        case 'the review':
            await mobileTopUpPage.selectAmount(amount);
            await mobileTopUpPage.confirmMobileTopUp();
            await navigation.mobileTopUp.mobileTopUpReview.go();
            break;
        case 'the modal error':
            await mobileTopUpPage.selectAmount(amount);
            await mobileTopUpPage.confirmMobileTopUp();
            await navigation.mobileTopUp.mobileTopUpReview.attempt();
            break;
        default:
            throw new Error(`Your page ${screen} its not defined`);
    }
});

When(/^the user "([^"]*)" in step 1$/, async function(action) {
    switch(action.toLowerCase()) {
        case 'accesses view more accounts':
            await mobileTopUpPage.selectViewMoreAccounts();
            break;
        case 'select one account':
            await mobileTopUpPage.selectViewMoreAccounts();
            await mobileTopUpPage.selectOneAccount();
            break;
        default:
            throw new Error(`Your page ${action} its not defined`);
    }
});

When(/^the user select a "([^"]*)" account in step 1$/, async function(account) {
    switch(account.toLowerCase()) {
        case 'savings':
            await mobileTopUpPage.selectViewMoreAccounts();
            await mobileTopUpPage.selectAccounts(account);
            break;
        case 'check':
            await mobileTopUpPage.selectViewMoreAccounts();
            await mobileTopUpPage.selectAccounts(account);
            break;
        case 'digital':
            await mobileTopUpPage.selectViewMoreAccounts();
            await mobileTopUpPage.selectAccounts(account);
            break;
        case 'payroll':
            await mobileTopUpPage.selectViewMoreAccounts();
            await mobileTopUpPage.selectAccounts(account);
            break;
        default:
            throw new Error(`Your page ${account} its not defined`);
    }
});

//Contacts Agenda
When(/^the user select the contact "([^"]*)"$/, async function(contact) {
    await mobileTopUpPage.selectContactToLoad(contact);
});

When(/^the user select first phone number from contact$/, async function() {
    await mobileTopUpPage.selectFirstPhoneNumber();
});

When(/^find contact by name "([^"]*)"$/, async function(contact) {
    await mobileTopUpPage.findByName(contact);
});

When(/^the user delete the contact$/, async function() {
    await mobileTopUpPage.deleteContact();
});

When(/^the user delete the cell phone$/, async function() {
    await mobileTopUpPage.deletePhoneNumber();
});

When(/^the user cancels the operation of mobile top up$/, async function() {
    await mobileTopUpPage.closeScreen();
});

When(/^the user accesses the screen to share the voucher$/, async function() {
    await mobileTopUpReview.shareReceipt();
});

When(/^the user selects change link from the amount section$/, async function() {
    await mobileTopUpPage.selectChangeLink();
});

When(/^the user performs a mobile top-up exceeding the MTU limit$/, async function() {
    await mobileTopUpPage.selectFirstAccount();
    await mobileTopUpPage.showMyPhoneNumber();
    await mobileTopUpPage.selectCompanyMyNumber('TELCEL');
    await mobileTopUpPage.selectAmount('150');
    await mobileTopUpPage.confirmMobileTopUp();
    await navigation.mtuLimits.mtuException.go();
});
