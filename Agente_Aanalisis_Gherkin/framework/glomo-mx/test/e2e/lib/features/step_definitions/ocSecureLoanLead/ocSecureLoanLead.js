import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import ocSecureLoanLead from '../../pages/ocSecureLoanLead/ocSecureLoanLead';

When(/^the user goes to the oc secure loan offer$/, async function() {
    await navigation.ocSecureLoanLead.ocSecureLoanLead.go();
});

When(/^the user completes the simulation by changing the amount$/, async function() {
    await ocSecureLoanLead.completeSimulationChangeAmount();
});

When(/^the user accesses close cat modal$/, async function() {
    await ocSecureLoanLead.closeCatModal();
});

When(/^the user accesses discard an asset "([^"]*)"$/, async function(asset) {
    await ocSecureLoanLead.discardAsset(asset);
});

When(/^the user access to error message with a change in the amount "([^"]*)"$/, async function(amount) {
    await ocSecureLoanLead.viewMessageAmount(amount);
});

When(/^the user access an error message with a change in the percentage "([^"]*)"$/, async function(percentage) {
    await ocSecureLoanLead.handlePercentageUpdate(percentage, 'fixed', global.user.listGuarantees.fixed.idBonus);
});

When(/^the user completes simulation editing the percentage$/, async function() {
    await ocSecureLoanLead.completeChangePercentage();
});

When(/^the user completes the guarantee erasure "([^"]*)"$/, async function(asset) {
    await ocSecureLoanLead.completeClearOptionsGuarantee(asset);
});

When(/^the user accesses modal "([^"]*)" and stays in the simulation using "([^"]*)"$/, async function(viewOption, closeModal) {
    await ocSecureLoanLead.handleSimulationExit(viewOption, closeModal);
});

When(/^the user discards "([^"]*)" and closes the modal "([^"]*)"$/, async function(asset, option ) {
    await ocSecureLoanLead.accessExitModal(asset, option);
});

When(/^the user removes the warranty selection$/, async function() {
    await ocSecureLoanLead.completeRemoveAsset();
});

When(/^the user edits to percentage of guarantee$/, async function() {
    await ocSecureLoanLead.completePercentageAsset();
});
