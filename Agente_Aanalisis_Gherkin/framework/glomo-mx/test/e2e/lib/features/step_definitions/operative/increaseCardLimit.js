import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses to increase your line of credit offer$/, async function() {
    await navigation.card.increaseCardLimit.go();
});
