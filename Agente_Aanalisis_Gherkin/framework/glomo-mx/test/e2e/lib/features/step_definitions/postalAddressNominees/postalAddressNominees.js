import { ElementNotFoundError } from '@csqe/radish';
import {When, Then} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user fills the update address form with the following data$/, async function(table){
    await currentPage.fillInputs(table.hashes());
});

When(/^the user erases the values from the following inputs$/, async function(table){
    await currentPage.eraseInputs(table.hashes());
});

When(/^the user goes to the privacy notice screen$/, async function(){
    await currentPage.goToPrivacyNotice();
});

When(/^the user exits the privacy notice screen through the "([^"]*)" button$/, async function(button){
    switch(button.toLowerCase()){
        case 'accept':
            await currentPage.confirmDialog({isConfirmed: true});
            break;
        case 'x':
            await currentPage.closeDialog();
            break;
        default:
            throw new ElementNotFoundError(`The button ${button} wasnt found`);
    }
});

When(/^the user opens the colony menu$/, async function(){
    await currentPage.openColonyMenu();
});

When(/^the user (mistakenly|correctly|doesnt completely) accepts the form$/, async function(context){
    switch(context.toLowerCase()){
        case 'correctly':
            await navigation.postalAddressNominees.postalAddressNomineesSuccess.go();
            break;
        case 'mistakenly':
            await currentPage.acceptForm();
            break;
        case 'doesnt completely':
            await currentPage.goToOtp();
            break;
        default:
            throw new Error(`Option ${context} con recognized`);
    }

});

When(/^the user exits the screen using the "([^"]*)" option$/, async function(button){
    await navigation.dashboard.go({button: button});
});

Then(/^the user is redirected to the login screen$/, async function(){
    await navigation.login.assert();
});
