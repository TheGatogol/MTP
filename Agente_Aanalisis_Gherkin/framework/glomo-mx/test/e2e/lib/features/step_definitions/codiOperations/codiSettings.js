import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import codiSettings from '../../pages/codiOperations/codiSettings';

When(/^the user accesses to "([^"]*)" settings$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'codi':
            await navigation.configureProducts.configureProducts.go({forceLogin: true});
            await navigation.codiOperations.codiSettings.go();
            break;
        case 'change default app':
            await codiSettings.changeDefaultApp();
            break;
        default:
            throw new Error(`${option} codi option is not available to navigate to...`);
    }
});
