import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import internationalTransfersDetailPage from '../../pages/internationalTransfer/internationalTransfersDetail';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';

const navigateToInternationalTransfersDetail = async ({movementType, entrypoint, status} = {}) => {
    switch(entrypoint.toLowerCase()) {
        case 'account detail':
            await navigation.account.productDetail.go({account: '5011'});
            await accountProductDetail.viewMoreOperatives();
            break;
        case 'select operation':
            await navigation.selectOperations.selectOperations.go();
            break;
        default:
            throw new Error(`Option "${screen}" is not valid`);
    }
    await navigation.internationalTransfer.internationalTransfersHistorical.go(movementType);
    await navigation.internationalTransfer.internationalTransfersDetail.go(status);
    await internationalTransfersDetailPage.waitForLoaded();
};

When(/^the user accesses to detail with de following data$/, async function(table) {
    const data = {...(table.hashes()[0])};
    await navigateToInternationalTransfersDetail(data);
});

When(/^access to movement with "([^"]*)" status$/, async function(movementStatus) {
    await navigation.internationalTransfer.internationalTransfersDetail.go(movementStatus);
    await internationalTransfersDetailPage.waitForLoaded();
});
