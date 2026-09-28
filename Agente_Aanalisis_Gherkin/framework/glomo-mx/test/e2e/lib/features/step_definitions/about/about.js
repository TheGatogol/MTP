import {Then, When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

Then(/^the user is in About screen$/, async function() {
    await navigation.about.aboutPage.assert();
});

When(/^the user is in About screen and accesses to "([^"]*)"$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'about info':
            await navigation.about.aboutInfoPage.go();
            break;
        case 'whats new':
            await navigation.about.whatsNewPage.go();
            break;
        default:
            throw new Error(`The option: ${option} is not implemented`);

    }
});

