import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocAccountYoungPage from '../../pages/ocAccountYoung/ocAccountYoung.js';

When(/^the user (accesses|accepts) to the oc account young offer detail$/, async (action) => {
    await navigation.ocAccountYoung.ocAccountYoung.go();
    if (action === 'accepts') {
        await ocAccountYoungPage.acceptsOfferDetail();
    }
});

When(/^the user deploys the faqs list modal$/, async () => {
    await ocAccountYoungPage.accessFaqs();
});

When(/^the user deploys the "([^"]*)" modal in the faqs list$/, async (question) => {
    await ocAccountYoungPage.accessToQuestionDetail(question.toLowerCase());
});

When(/^the user attempts to access to the oc account young offer$/, async () => {
    await navigation.ocAccountYoung.ocAccountYoung.attempt();
});

When(/^the user (fills|completes) the minor information(| with incorrect birthdate)$/, async (action, birthdate) => {
    const completes = action === 'completes';
    const incorrectBirthdate = birthdate === ' with incorrect birthdate';
    await ocAccountYoungPage.fillMinorInformation(completes, incorrectBirthdate);
});

When(/^the user (fills|retries fill|completes) the additional information(| with incorrect registry)$/, async (action, registryType) => {
    const retries = action === 'retries fill';
    const completes = action === 'completes';
    const incorrectRegistry = registryType === ' with incorrect registry';
    if (retries) {
        await ocAccountYoungPage.retriesFillAdditionalInformation();
    } else {
        await ocAccountYoungPage.fillAdditionalInformation(incorrectRegistry, completes);
    }
});

When(/^the user deploys (actions|suggestions) modal to take a picture$/, async (modalType) => {
    const actionType = modalType === 'suggestions';
    await ocAccountYoungPage.deployModalToTakePicture(actionType);
});

When(/^the user uploads the birth certificate(| exceeded) file and continues$/, async (action) => {
    const exceeded = action === ' exceeded';
    await ocAccountYoungPage.fillBirthCertificateInformation(exceeded);
});

When(/^the user selects (show|same|other) address(| and continues)$/, async (action, continues) => {
    const addressType = action.toLowerCase();
    const continueAction = continues === ' and continues';
    switch(addressType) {
        case 'show':
            await ocAccountYoungPage.showAddress();
            break;
        case 'same':
        case 'other':
            await ocAccountYoungPage.selectAddressType(addressType, continueAction);
            break;
        default:
            throw new Error(`${action} action is not available to option to...`);
    }
});

When(/^the user fills the digital services form with services allowed$/, async () => {
    await ocAccountYoungPage.fillDigitalServices(true, false);
});

When(/^the user (goes to|accepts) terms and conditions (with|without) digital services (with|without) modal$/, async (action, services, hasModal) => {
    const digitalServices = services === 'with';
    const withModal = hasModal === 'with';
    await ocAccountYoungPage.fillMinorInformation(true);
    await ocAccountYoungPage.fillBirthCertificateInformation(false);
    await ocAccountYoungPage.selectAddressType('same', true);
    await ocAccountYoungPage.fillDigitalServices(digitalServices, true, withModal);
    if (action === 'accepts') {
        await ocAccountYoungPage.acceptTermsAndConditions(digitalServices);
    }
});

When(/^the user (confirms|signs) the confirmation view step$/, async (action) => {
    const signOperation = action === 'signs';
    await ocAccountYoungPage.confirmsSummary(signOperation);
});

When(/^the user selects "([^"]*)" element from oc account young$/, async (element) => {
    await ocAccountYoungPage.selectElement(element);
});
