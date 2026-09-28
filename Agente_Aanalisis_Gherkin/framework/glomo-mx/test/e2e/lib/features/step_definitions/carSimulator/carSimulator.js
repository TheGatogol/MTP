import {When, Then} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses to the car simulator section$/, async function() {
    await navigation.carSimulator.carSimulator.go();
});

Then(/^the car simulator has the following operatives with their corresponding status$/, async function(table) {
    await currentPage.checkFeatures(table);
});
