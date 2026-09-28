import {When} from '@cucumber/cucumber';
import assistanceSection from '../../pages/assistanceSection/assistanceSection';
import * as navigation from '../../navigation';

When(/^the user access "([^"]*)" in assistance$/, async function(button) {
    if (button === 'blue BBVA') {
        await navigation.digitalButler.digitalButler.go({hasEntryFirstTime: false});
    } else {
        await assistanceSection.accessScreen(button);
    }
});

When(/^the user sends conversation to banker in assistance$/, async function() {
    await assistanceSection.conversationBankers();
});
