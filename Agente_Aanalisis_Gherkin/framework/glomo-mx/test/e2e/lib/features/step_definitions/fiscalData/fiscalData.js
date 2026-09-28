import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import fiscalData from '../../pages/fiscalData/fiscalData';

When(/^the user accesses the fiscal data detail$/, async function() {
    await navigation.fiscalData.fiscalData.go({forceLogin: true});
});

When(/^the user accept the modal of the tax reform$/, async function() {
    await fiscalData.acceptFirstModal();
});

When(/^the user goes to edit the "([^"]*)" information$/, async function(step) {
    await fiscalData.editStepInfo(step);
});

When(/^the user opens options "([^"]*)"$/, async function(dropDownMenu) {
    await fiscalData.openDropdownMenu(dropDownMenu);
});

When(/^the user confirms all changes for fiscal data$/, async function() {
    await fiscalData.confirmChanges();
});

When(/^the user accepts the help modal$/, async function() {
    await fiscalData.acceptHelpModal();
});

When(/^the user confirms the fiscal data update$/, async function() {
    await navigation.fiscalData.fiscalDataSuccess.go();
});
