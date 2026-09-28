import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import language from '../../pages/languageSettings/languageSettings';

When(/^the user selects the "([^"]*)" language option and saves$/, async function(option) {
    await language.selectLanguageAndSave(option);
    await navigation.dashboard.assert();
});
