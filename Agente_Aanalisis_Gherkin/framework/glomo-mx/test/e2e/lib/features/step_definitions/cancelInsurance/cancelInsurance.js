import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import CancelInsurance from '../../pages/cancelInsurance/cancelInsurance';

function getInsurance(insuranceType) {
    return user.products.insurances.find((item) => {
        if (insuranceType === 'dynamic life') {
            return item.detail.productDescription === 'Vidasegura Dinamico';
        }
        if (insuranceType === 'device') {
            return item.detail.productDescription === 'Seguro Para Celular';
        }
        if (insuranceType === 'travel') {
            return item.detail.productDescription === 'Seguro De Viaje';
        }
    }) || {};
}

When(/^the user goes to cancel insurance operation$/, async function() {
    await navigation.cancelInsurance.cancelInsurance.go();
});

When(/^the user accesses to cancel "([^"]*)" insurance product detail$/, async function(insuranceType) {
    const insuranceId = await getInsurance(insuranceType).id;
    await navigation.insurance.insuranceProductDetail.go({insuranceId});
});

When(/^the user accesses to the "([^"]*)" step of "([^"]*)" cancellation insurance$/, async function (step, insuranceType) {
    await CancelInsurance.chooseAndGoToStep(step, insuranceType);
});

When (/^the user submits an insurance cancellation request$/, async function() {
    await CancelInsurance.finishProcess();
    await CancelInsurance.fillOtp('99812955');
});
