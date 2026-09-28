import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import accountProductDetail from '../../pages/productDetails/accountProductDetail';

When(/^the user accesses to operatives screen from "([^"]*)"$/, async function(screen) {
    switch(screen.toLowerCase()) {
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
});
