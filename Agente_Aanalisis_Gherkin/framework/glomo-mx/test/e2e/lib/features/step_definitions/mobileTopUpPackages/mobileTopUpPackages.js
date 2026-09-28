import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import mobileTopUpPackagesPage from '../../pages/mobileTopUpPackages/mobileTopUpPackages';

function getDataContact(company, name) {
    const contact = global.user.agenda.newContact.find(element => element.company === company).contacts.find(element => element.name === name);
    return contact;
}

function getDataSavedContact(company) {
    const contact = global.user.agenda.savedContact.find(element => element.company === company).alias;
    return contact;
}

When(/^the user accesses to page top up packages$/, async function() {
    await navigation.mobileTopUpPackages.mobileTopUpPackages.go();
});

When(/^the user accesses the top up packages page from the operationals page$/, async function() {
    await navigation.selectOperations.selectOperations.go();
});

When(/^the user navigates the onboarding page "([^"]*)"$/, async function(option) {
    switch(option.toLowerCase()) {
        case 'with the play button':
            await mobileTopUpPackagesPage.playOnboardingMenu();
            break;
        case 'with the next and back button':
            await mobileTopUpPackagesPage.navigateOnboardingMenu();
            break;
        default:
            throw new Error(`Your step ${option} its not defined`);
    }
});

When(/^the user accepts the onboarding terms$/, async function() {
    await mobileTopUpPackagesPage.acceptOnboarding();
});

When(/^the user "([^"]*)" from mobile top up packages$/, async function(option) {
    switch(option.toLowerCase()) {
        case 'exits the onboarding':
            await mobileTopUpPackagesPage.exitOnboardingMenu();
            break;
        case 'exits the flow':
            await mobileTopUpPackagesPage.exitPage();
            break;
        default:
            throw new Error(`Your step ${option} its not defined`);
    }
});

When(/^the user attemps to exit and "([^"]*)" from mobile top up packages$/, async function(option) {
    await mobileTopUpPackagesPage.attemptToExitProcess();
    await mobileTopUpPackagesPage.modalActions(option);
});

When(/^the user accesses the saved contacts from contact step$/, async function() {
    await mobileTopUpPackagesPage.acceptOnboarding();
    await mobileTopUpPackagesPage.selectContactsListSection();
});

When(/^the user fills the form for a new "([^"]*)" number with name "([^"]*)" "([^"]*)"$/, async function(company, name, option) {
    const dataContact = getDataContact(company, name);
    await mobileTopUpPackagesPage.acceptOnboarding();
    await mobileTopUpPackagesPage.selectNewContactSection();
    switch(option.toLowerCase()) {
        case 'saving the contact':
            await mobileTopUpPackagesPage.fillFormFromDataAndSaveContact(
                {number: dataContact.number, selectedIndex: dataContact.selectedIndex,
                    company: dataContact.company, providerId: dataContact.providerId, name: dataContact.name, alias: dataContact.alias});
            break;
        case 'without saving':
            await mobileTopUpPackagesPage.fillFormFromData(
                {number: dataContact.number, selectedIndex: dataContact.selectedIndex,
                    company: dataContact.company, providerId: dataContact.providerId, name: dataContact.name});
            break;
        default:
            throw new Error(`Your step ${option} its not defined`);
    }
});

When(/^the user selects the "([^"]*)" saved contact$/, async function(option) {
    const dataSaveContact = getDataSavedContact(option);
    await mobileTopUpPackagesPage.acceptOnboarding();
    await mobileTopUpPackagesPage.selectAContact(dataSaveContact);
});

When(/^the user selects the "([^"]*)" of "([^"]*)" MXN and select "([^"]*)" as payment method$/, async function(amounType, amount, option) {
    await mobileTopUpPackagesPage.selectPackageOrAmount({action: amounType, amount: amount});
    await mobileTopUpPackagesPage.selectContinueInAmountStep(amounType);
    await mobileTopUpPackagesPage.selectAProduct({products: global.user.products, option, isExistingAccontsCollapsible: user.accountsCollapsible});
});

When(/^the user selects a saved "([^"]*)" contact and a "([^"]*)" MXN "([^"]*)"$/, async function(company, amount, amounType) {
    const dataSaveContact = getDataSavedContact(company);
    await mobileTopUpPackagesPage.acceptOnboarding();
    await mobileTopUpPackagesPage.selectAContact(dataSaveContact);
    await mobileTopUpPackagesPage.selectPackageOrAmount({action: amounType, amount: amount});
    await mobileTopUpPackagesPage.selectContinueInAmountStep(amounType);
});

When(/^the user fills a new "([^"]*)" contact and selects a "([^"]*)" MXN "([^"]*)"$/, async function(company, amount, amounType) {
    const dataContact = getDataContact(company, user.contact);
    await mobileTopUpPackagesPage.acceptOnboarding();
    await mobileTopUpPackagesPage.selectNewContactSection();
    await mobileTopUpPackagesPage.fillFormFromDataAndSaveContact(
        {number: dataContact.number, selectedIndex: dataContact.selectedIndex,
            company: dataContact.company, providerId: dataContact.providerId, name: dataContact.name, alias: dataContact.alias});
    await mobileTopUpPackagesPage.selectPackageOrAmount({action: amounType, amount: amount});
    await mobileTopUpPackagesPage.selectContinueInAmountStep(amounType);
});

When(/^the user acceses to all "([^"]*)"$/, async function(option) {
    if(option.toLowerCase() === 'credit cards') {
        await mobileTopUpPackagesPage.openCollapsibleCardList();
    }
    await mobileTopUpPackagesPage.selectViewMore(option);
});

When(/^the user open credit cards list$/, async function() {
    await mobileTopUpPackagesPage.openCollapsibleCardList();
});

When(/^the user "([^"]*)" from the expanded list$/, async function(option) {
    await mobileTopUpPackagesPage.viewMoreActions({option, products: global.user.products});
});

When(/^the user decides to delete a contact$/, async function() {
    await mobileTopUpPackagesPage.acceptOnboarding();
    await mobileTopUpPackagesPage.deleteContact(user.contact);
});

When(/^the user deletes the contact successfully$/, async function() {
    await mobileTopUpPackagesPage.validateDeletedContact(user.contact);
});

When(/^the user chooses to "([^"]*)" from the modal$/, async function(option) {
    await mobileTopUpPackagesPage.modalActions(option);
});

When(/^the user decides to modify the "([^"]*)"$/, async function(option) {
    await mobileTopUpPackagesPage.modifyStepSection(option);
});

When(/^the user selects "([^"]*)" as payment method$/, async function(option) {
    await mobileTopUpPackagesPage.selectAProduct({products: global.user.products, option, isExistingAccontsCollapsible: user.accountsCollapsible});
});

When(/^the user decides to modify the "([^"]*)" and select another account$/, async function(option) {
    await mobileTopUpPackagesPage.modifyStepSection(option);
    await mobileTopUpPackagesPage.selectAProduct({products: global.user.products, option: 'an account', isExistingAccontsCollapsible: user.accountsCollapsible});
});

When(/^the user confirms the mobile top up package purchase$/, async function() {
    await mobileTopUpPackagesPage.confirmTopUpPackagePurchase();
});

When(/^the user confirms the mobile top up purchase and completes the otp$/, async function() {
    await mobileTopUpPackagesPage.confirmTopUpPackagePurchase();
    await mobileTopUpPackagesPage.confirmToken();
});

When(/^the user retries to save a contact$/, async function() {
    await mobileTopUpPackagesPage.retrySaveContact();
});

When(/^the user retries to save the contact "([^"]*)" times$/, async function(times) {
    await mobileTopUpPackagesPage.retrySaveContact(times);
});

When(/^the user select the new contact section from contact step$/, async function() {
    await mobileTopUpPackagesPage.acceptOnboarding();
    await mobileTopUpPackagesPage.selectNewContactSection();
});

When(/^the user select the contacts list section from contact step$/, async function() {
    await mobileTopUpPackagesPage.acceptOnboarding();
    await mobileTopUpPackagesPage.selectContactsListSection();
});

When(/^the user follows through a "([^"]*)" mobile top up purchase for a "([^"]*)" MXN "([^"]*)"$/, async function(company, amount, amounType) {
    const dataSaveContact = getDataSavedContact(company);
    await mobileTopUpPackagesPage.acceptOnboarding();
    await mobileTopUpPackagesPage.selectAContact(dataSaveContact);
    await mobileTopUpPackagesPage.selectPackageOrAmount({action: amounType, amount: amount});
    await mobileTopUpPackagesPage.selectContinueInAmountStep(amounType);
});

When(/^the user reads package information$/, async function() {
    await mobileTopUpPackagesPage.readPackageInformation();
});

When(/^the user reads the package information after selecting a "([^"]*)" contact and "([^"]*)" the modal$/, async function(company, option) {
    const dataSaveContact = getDataSavedContact(company);
    await mobileTopUpPackagesPage.acceptOnboarding();
    await mobileTopUpPackagesPage.selectAContact({...dataSaveContact, company});
    await mobileTopUpPackagesPage.readPackageInformation();
    await mobileTopUpPackagesPage.modalActions(option);
});

When(/^the user selects contact from agenda$/, async function() {
    await mobileTopUpPackagesPage.acceptOnboarding();
    await mobileTopUpPackagesPage.selectNewContactSection();
    await mobileTopUpPackagesPage.nativeAgendaError();
});
