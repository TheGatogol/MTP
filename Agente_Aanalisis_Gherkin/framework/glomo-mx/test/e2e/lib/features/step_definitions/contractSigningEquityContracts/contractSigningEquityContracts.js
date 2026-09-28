import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import contractSigningEquityContracts from '../../pages/contractSigningEquityContracts/contractSigningEquityContracts';
import contractSigningEquityContractsReview from '../../pages/contractSigningEquityContracts/contractSigningEquityContractsReview';

When(/^the user accesses to contract signing equity contracts$/, async function() {
    await navigation.deferredSignature.contractSigningEquityContracts.go(global.user.notifications.deferredSignature);
});

When(/^the user performs the action "([^"]*)" in associated equity contracts$/, async function(step) {
    await contractSigningEquityContracts.executeStepAction(step);
});

When(/^the user confirms the OTP code in associated equity contracts$/, async function() {
    await navigation.deferredSignature.contractSigningEquityContractsReview.go();
});

When(/^the user closes the success modal$/, async function() {
    await contractSigningEquityContractsReview.closeSuccessModal();
});
