import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses the mobile token activation screen(| for the first time)$/, async function(value) {
    await navigation.login.go();
    if (value === ' for the first time') {
        await navigation.digitalToken.go();    
    }
});

When(/^the user activates their mobile token(| with an error)$/, async function(value) {
    if(value === ' with an error') {
        await navigation.stEnrollment.stEnrollmentSuccess.attempt();
    } else {
        await navigation.stEnrollment.stEnrollmentSuccess.go();
    }
});
