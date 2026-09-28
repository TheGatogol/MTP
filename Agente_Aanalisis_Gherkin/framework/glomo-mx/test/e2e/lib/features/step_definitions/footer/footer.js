import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user goes to (.*) dashboard/, async function(accessFrom) {
    switch (accessFrom){
        case 'Home':
            await navigation.dashboard.go();
            break;
        case 'CheckUp':
            await navigation.pfm.dashboard.dashboard.go({accessFrom});
            break;
        case 'Opportunities':
            await navigation.contractProductSection.go();
            break;
        default:
            throw new Error(`${accessFrom} page is not available to navigate to ...`);
    }
});
