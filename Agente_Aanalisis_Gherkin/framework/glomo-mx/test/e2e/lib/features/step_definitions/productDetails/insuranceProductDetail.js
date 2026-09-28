import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import insuranceProductDetail from '../../pages/productDetails/insuranceProductDetail';
import insuranceProductDetailMoreInfo from '../../pages/productDetails/insuranceProductDetailMoreInfo';

function getInsurance(status) {
    return user.products.insurances.find((item) => {
        if (status === 'cancelled') {
            return item.detail.status === 'ANNULMENT_PROCESS';
        } else if (status === 'group') {
            return item.number.slice(14).trim() !== '1';
        }
        return item.detail.status === 'FORMALIZED';
    }) || {};
}

When(/^the user accesses the "([^"]*)" insurance product detail$/, async function(status) {
    const insuranceId = getInsurance(status).id;
    await navigation.insurance.insuranceProductDetail.go({insuranceId});
});

When(/^the user selects the help icon$/, async function() {
    await insuranceProductDetail.openHelpModal();
});

When(/^the user download the policy from "([^"]*)"$/, async function(from) {
    if (from === 'product detail') {
        await insuranceProductDetail.seePolicy();
    } else if (from === 'more info') {
        await insuranceProductDetailMoreInfo.seePolicy();
    }
});

When(/^the user accesses to the "([^"]*)" insurance product detail more info$/, async function(status) {
    const insuranceId = getInsurance(status).id;
    await navigation.insurance.insuranceProductDetailMoreInfo.go({insuranceId});
});

When(/^the user selects the help icon in more info$/, async function() {
    await insuranceProductDetailMoreInfo.openHelpModal();
});
