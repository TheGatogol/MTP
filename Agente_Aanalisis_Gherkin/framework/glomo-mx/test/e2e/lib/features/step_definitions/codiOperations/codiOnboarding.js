import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import codiBeginRegister from '../../pages/codiOperations/codiBeginRegister';
import codiEnrollment from '../../pages/codiOperations/codiEnrollment';

When(/^the user selects "([^"]*)" in the enroll process$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'enroll now':
            await navigation.codiOperations.codiEnrollment.go();
            break;
        case 'enroll later':
            await codiBeginRegister.enrollLater();
            break;
        case 'exit':
            await codiBeginRegister.closeEnroll();
            break;
        default:
            throw new Error(`${option} codi option is not available to navigate to...`);
    }
});

When(/^the user accesses to "([^"]*)" in the enroll process$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'enroll account':
            await codiEnrollment.enrollCodi();
            break;
        case 'view all accounts':
            await codiEnrollment.seeAll();
            break;
        default:
            throw new Error(`${option} codi option is not available to navigate to...`);
    }
});

When(/^the user accepts the terms and conditions$/, async function() {
    await codiEnrollment.checkTermsAndConditions();
});

When(/^the user "([^"]*)" accesses to all accounts section$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'closes':
            await codiEnrollment.closeSeeAll();
            break;
        case 'exits':
            await codiEnrollment.goBack();
            break;
        default:
            throw new Error(`${option} codi option is not available to navigate to...`);
    }
});

When(/^the user abandons the enrollment process$/, async function() {
    await codiEnrollment.exitEnrollCodi();
});

When(/^the user insert sms code$/, async function() {
    await codiEnrollment.fillOtp();
});
