import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import liteOnboardingForeigners from '../../pages/liteOnboardingForeigners/liteOnboardingForeigners';

When(/^the user accesses the foreign country$/, async function() {
    await navigation.liteOnboardingForeigners.liteOnboardingForeigners.go();
});

When(/^the user accesses for the first time and enters personal data$/, async function() {
    await liteOnboardingForeigners.accessOpenAccount();
    await liteOnboardingForeigners.firstPartOfRegistrationForeing(user.data[0].name, user.data[0].firstLastName,
        user.data[0].secondLastName, user.data[0].placeOfBirth, user.data[0].passport, user.data[0].gender);
});

When(/^the user enters current address information$/, async function() {
    await liteOnboardingForeigners.secondPartOfRegistrationForeing(user.address[0].street, user.address[0].outerNumber,
        user.address[0].internalNumber, user.address[0].zipCode, user.address[0].colony);
});

When(/^the user enters contact information$/, async function() {
    await liteOnboardingForeigners.threePartOfRegistrationForeign(user.contact[0].number, user.contact[0].email,
        user.contact[0].email);
});

When(/^the user changes the name and continues with the process$/, async function() {
    await liteOnboardingForeigners.modifyNameAndContinue(user.data[0].newname);
});

When(/^the user changes the street and continues with the process$/, async function() {
    await liteOnboardingForeigners.modifyStreetAndContinue(user.address[0].newstreet);
});

When(/^the user "([^"]*)" the information modal in welcome$/, async function(value) {
    await liteOnboardingForeigners.closeModalKnowMoreWelcome(value);
});

When(/^the user "([^"]*)" the information modal in personal data$/, async function(value) {
    await liteOnboardingForeigners.accessOpenAccount();
    await liteOnboardingForeigners.closeModalKnowMorePersonalData(value);
});

When(/^the user "([^"]*)" the information modal in privacy notice$/, async function(value) {
    await liteOnboardingForeigners.closeModalPrivacyNotice(value);
});

When(/^the user reports "([^"]*)" incorrectly in personal data$/, async function(value) {
    await liteOnboardingForeigners.accessOpenAccount();
    await liteOnboardingForeigners.dataOptionToEnterPersonalData(value);
});

When(/^the user reports "([^"]*)" incorrectly in current address$/, async function(value) {
    await liteOnboardingForeigners.dataOptionToEnterCurrentAddress(value);
});

When(/^the user reports "([^"]*)" incorrectly in contact details$/, async function(value) {
    await liteOnboardingForeigners.dataOptionToEnterContactDetails(value);
});
