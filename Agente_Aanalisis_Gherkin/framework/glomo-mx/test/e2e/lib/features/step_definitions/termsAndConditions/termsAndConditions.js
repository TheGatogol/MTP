import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^user accesses terms and conditions of about$/, async function() {
    await navigation.termsAndConditions.termsAndConditions.go();
});
