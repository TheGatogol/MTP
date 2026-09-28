import {When} from '@cucumber/cucumber';
import ocAccountYoungDigitalizationPage from '../../pages/ocAccountYoungDigitalization/ocAccountYoungDigitalization.js';

When(/^the user selects "([^"]*)" option to upload birth certificate$/, async function (option) {
    await ocAccountYoungDigitalizationPage.selectUploadBirthCertificateOption(option);
});
