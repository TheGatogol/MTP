import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import loanAndMortgageInformationPage from '../../pages/loanAndMortgageInformation/loanAndMortgageInformation';

When(/^the user accesses mortgage tracking from the "([^"]*)"$/, async function(entryPoint) {
    let navigationOptions;

    switch ((entryPoint || '').toLowerCase()) {
        case 'nbo offer':
            navigationOptions = {access: 'nbo'};
            break;
        case 'notification':
            navigationOptions = {notificationId: global.user.notifications.id};
            break;
        default:
            throw new Error(`Access "${entryPoint}" is not valid. Use "nbo offer" or "notification".`);
    }

    await navigation.loanAndMortgageInformation.loanAndMortgageInformation.go(navigationOptions);
});

When(/^the user accesses a record from the list$/, async function() {
    await loanAndMortgageInformationPage.selectedFolio();
});

When(/^the user accesses request detail$/, async function() {
    await loanAndMortgageInformationPage.openRequestDetail();
});
