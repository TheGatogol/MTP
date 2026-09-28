import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

import updateRfc from './../../pages/profileUpdateRfc/profileUpdateRfc';
import profile from './../../pages/profile/profile';

When(/^the user access to update rfc with account "([^"]*)"$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'normal':
            await navigation.profileUpdateRfc.profileUpdateRfc.go({forceLogin: true});
            break;
        case 'generic rfc or empty person data':
            await profile.showSectionUpdateRfc();
            break;
        default:
            throw new Error(`The '${option}' step to change is not declared.`);
    }
});

When(/^the user accesses to update cfdis$/, async function() {
    await profile.goToUpdateRfc();
});

When(/^the user selects month period$/, async function() {
    await updateRfc.selectRangeDatePeriod();
});

When(/^the user selects product for cancelation and rebranding$/, async function(){
    await updateRfc.selectOneProduct();
});

When(/^the user requests cfdis with product for cancelation and rebranding$/, async function() {
    await updateRfc.selectOneProduct();
    await updateRfc.fillRangeDatesPeriod();
    await updateRfc.selectPeriod();
});

When(/^the user requests cfdis with product with date period to "([^"]*)" for cancelation and rebranding$/, async function(datePeriod) {
    switch (datePeriod.toLowerCase()) {
        case 'erro label date from':
            await updateRfc.selectDatesPeriod('enero', 'end');
            await updateRfc.selectDatesPeriod('abril', 'initial');
            break;
        case 'erro label date to':
            await updateRfc.selectDatesPeriod('abril', 'initial');
            await updateRfc.selectDatesPeriod('febrero', 'end');
            break;
        default:
            throw new Error(`The '${datePeriod}' step to change is not declared.`);
    }
});

When(/^the user closes modal "([^"]*)"$/, async function(typeModal) {
    switch (typeModal.toLowerCase()) {
        case 'period without cfdi':
            await updateRfc.closeModalPeriodWithOutCfdi();
            break;
        default:
            throw new Error(`The '${typeModal}' step to change is not declared.`);
    }
});

When(/^the user selects viewMore cfdis$/, async function() {
    await updateRfc.viewMoreCfdi();
});

When(/^the user continues group cfdis$/, async function() {
    await updateRfc.confirmStepCfdi();
});

When(/^the user accepts terms and conditions of cancelation and rebranding$/, async function() {
    await updateRfc.confirmStepTermsAndConditions();
});

When(/^the user confirms the cancelation and rebranding cfdis$/, async function() {
    await updateRfc.postConfirmCancelationAndRebrandingCfdi();
});

When(/^the user confirms and retry the cancelation and rebranding cfdis service$/, async function() {
    await updateRfc.postConfirmCancelationAndRebrandingCfdi();
    await updateRfc.attemptCancelationAndRebrandingCfdService();
    await updateRfc.attemptCancelationAndRebrandingCfdService();
    await updateRfc.attemptCancelationAndRebrandingCfdService();
});

When(/^the user finalizes the cancellation and rebranding of a product$/, async function() {
    await navigation.profileUpdateRfc.profileUpdateRfc.go({forceLogin: true});
    await updateRfc.selectOneProduct();
    await updateRfc.fillRangeDatesPeriod();
    await updateRfc.selectPeriod();
    await updateRfc.confirmStepCfdi();
    await updateRfc.confirmStepTermsAndConditions();
    await updateRfc.postConfirmCancelationAndRebrandingCfdi();
});

When(/^the user cancels and rebrands other product$/, async function() {
    await updateRfc.adjustOtherCfdi();
});

When(/^the user attempts to restore the service again$/, async function() {
    await updateRfc.atemptOperationGetService();
    await updateRfc.atemptOperationGetService();
    await updateRfc.atemptOperationGetService();
});
