import {When} from '@cucumber/cucumber';
import kycValidation from '../../pages/kycValidation/kycValidation';

When(/^the user accesses the modal privacy notice$/, async function() {
    await kycValidation.showModalPrivacyNotice();
});

When(/^the user view the form$/, async function() {
    await kycValidation.accessToFormKyc();
});

When(/^the user retries request$/, async function() {
    await kycValidation.retryRequest();
});

When(/^the user accesses the help option$/, async function() {
    await kycValidation.selectPublicOfficeQuestion();
});

When(/^the user answers the questionnaire down to the last detail$/, async function() {
    await kycValidation.interactionSelectOption();
    await kycValidation.bankingRelationship('1');
    await kycValidation.openForm();
});

When(/^the user answers the form successfully with "([^"]*)"$/, async function(option) {
    if (option === 'eSignature') {
        await kycValidation.interactionSelectOption();
        await kycValidation.bankingRelationship('1');
        await kycValidation.eSignatureOption();
        await kycValidation.openForm();
        await kycValidation.questionnaireSummary();
    } else if (option === 'risk') {
        await kycValidation.selectOptionForRiskUser();
        await kycValidation.interactionSelectOption();
        await kycValidation.bankingRelationship('1');
        await kycValidation.openForm();
    } else {
        await kycValidation.interactionFormKyc(option);
    }
});

When(/^the user enters "([^"]*)"$/, async function(option) {
    await kycValidation.enterLowerAmount(option);
});
