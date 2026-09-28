import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user goes to the offers section$/, async function() {
    await navigation.contractProductSection.go();
});

When(/^the user enters the opportunity "([^"]*)"$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'investing in promissory':
            await navigation.depositHiring.depositHiring.go(user.offers[0].promissory[0].id);
            break;
        case 'investment funds':
            await navigation.diy.fundsHiring.step1.go(user.offers[0].investmentFunds[0].id);
            break;
        default:
            throw new Error(`Not recognized option "${option}"`);
    }
});
