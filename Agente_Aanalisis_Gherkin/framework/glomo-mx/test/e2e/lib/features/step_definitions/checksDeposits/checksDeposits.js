import {When} from '@cucumber/cucumber';
import * as utilsAccount from '../../utils/utilsAccount';
import * as navigation from '../../navigation';

async function navigateToProductDetailWithChecks() {
    const account = utilsAccount.getAccountChecksData('MXN', user);
    await navigation.account.productDetail.go({account});
}

When('the user selects the add check option', async function() {
    await navigation.checksDeposits.checksDeposits.go();
});

When('the user accesses the checks deposit screen', async function() {
    await navigateToProductDetailWithChecks();
    await navigation.checksDeposits.checksDeposits.go();
});

When('the user accesses the check deposit photos page', async function() {
    await navigateToProductDetailWithChecks();
    await navigation.checksDeposits.checksDepositsPhotos.go();
});

When('the user accesses the check deposit aggregator page', async function() {
    await navigation.checksDeposits.checksDepositsCheckAggregator.go();
});

When('the user selects the add photos option', async function() {
    await navigation.checksDeposits.checksDepositsPhotos.go();
});

When('the user takes a picture of the front part of the check', async function() {
    await currentPage.takeFrontPicture();
});

When('the user takes a picture of the back part of the check', async function() {
    await currentPage.takeBackPicture();
});

When(/^the user needs help with taking the "([^"]*)" photo$/, async function(position) {
    switch(position.toLowerCase()){
        case 'front':
            await currentPage.frontHelpPictureIcon();
            break;
        case 'reverse':
            await currentPage.backHelpPictureIcon();
            break;
        default:
            throw new Error(`The ${position} option is not implemented`);
    }
});
