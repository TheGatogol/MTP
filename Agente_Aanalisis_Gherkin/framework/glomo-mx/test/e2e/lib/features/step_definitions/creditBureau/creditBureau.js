import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import creditBureauAuthScreen from '../../pages/diy/creditBureau/creditBureauAuthScreen';
import creditBureauAuthorization from '../../pages/creditBureauAuthorization/creditBureauAuthorization';
import creditBureauAuthorizationSuccess from '../../pages/creditBureauAuthorization/creditBureauAuthorizationSuccess';

When(/^the user goes to the credit bureau operation$/, async function() {
    await navigation.diy.creditBureau.creditBureauAuthScreen.go();
});

When(/^the user "([^"]*)" for credit bureau authorization$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'accept authorization':
            await navigation.diy.creditBureau.creditBureauAuthScreen.go();
            await creditBureauAuthScreen.acceptCheckAuthorization();
            break;
        case 'fill otp':
            await navigation.diy.creditBureau.creditBureauAuthScreen.go();
            await creditBureauAuthScreen.completeAuthorization();
            await creditBureauAuthScreen.confirmCreditBureauOtp();
            break;
        case 'get success':
            await navigation.diy.creditBureau.creditBureauAuthScreen.go();
            await creditBureauAuthScreen.completeAuthorization();
            await navigation.diy.creditBureau.creditBureauAuthSuccess.go();
            break;
        default:
            throw new Error(`${option} select is not available to show...`);
    }
});

When(/^when the user select "([^"]*)"$/, async function(modal) {
    await navigation.diy.creditBureau.creditBureauAuthScreen.go();
    switch (modal) {
        case 'help modal':
            await creditBureauAuthScreen.openHelpModal();
            break;
        case 'authorization modal':
            await creditBureauAuthScreen.openAuthorizationModal();
            break;
        default:
            throw new Error(`${modal} select is not available to show...`);
    }
});

When(/^the user accesses the credit bureau authorization notification$/, async function(){
    await navigation.creditBureauAuthorization.creditBureauAuthorization.go();
});

When(/^the user checks the authorization checklist "([^"]*)" times$/, async function(times){
    await creditBureauAuthorization.checkCheckbox(times);
});

When(/^the user "([^"]*)" at authorizing the credit bureau$/, async function(value){
    switch(value.toLowerCase()){
        case 'succeeds':
            await navigation.creditBureauAuthorization.creditBureauAuthorizationSuccess.go();
            break;
        case 'fails':
            await creditBureauAuthorization.giveAuthorization();
            break;
        default:
            throw new Error(`There's no valid state for the ${value} state`);
    }
});

When(/^the user exits the success screen using the "([^"]*)" option$/, async function(option){
    await creditBureauAuthorizationSuccess.exitScreen(option);
});

When(/^the user exits the modal with the "([^"]*)" option$/, async function(option){
    await creditBureauAuthorization.exitMoreInfoModal(option);
});
