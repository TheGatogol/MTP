import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When('the user accesses a {string} check', async function(status) {
    await navigation.checksDeposits.checksDepositsDetail.go({status});
});
