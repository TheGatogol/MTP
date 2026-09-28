import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import proceedings from '../../pages/proceedings/proceedings';

When(/^the user accesses to proceedings from "([^"]*)"$/, async function(option) {
    const optionSelected = option.toLowerCase();
    if(optionSelected === 'warning banner' || optionSelected === 'upgrade account') {
        await navigation.account.productDetail.go();
    } else {
        switch(optionSelected) {
            case 'payroll':
                await navigation.payrollAccount.payrollAccount.go();
                break;
            case 'profile':
                await navigation.profile.go({forceLogin: true});
                break;
            case 'upgrade customer':
                await navigation.upgradeCustomer.upgradeCustomer.go();
                break;
            default:
                throw new Error(`The option: ${option} is not implemented`);
        }
    }

    await navigation.proceedings.proceedings.go(option);
});

When(/^the user taps on the "([^"]*)" option in proceedings$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'identity validation':
            await proceedings.identityValidation();
            break;
        case 'kyc validation':
            await proceedings.kycValidation();
            break;
        case 'confirm information validation':
            await proceedings.confirmInformationValidation();
            break;
        case 'confirm':
            await proceedings.confirmInformationClient();
            await proceedings.confirmProceedings();
            break;
        case 'confirm information client':
            await proceedings.confirmInformationClient();
            break;
        case 'confirm proceedings':
            await proceedings.confirmProceedings();
            break;
        default:
            throw new Error(`The option: ${option} is not implemented`);
    }
});

When(/^the user accesses to internal link address$/, async function() {
    await proceedings.openLink();
});

When(/^the user introduces the token step$/, async function() {
    await navigation.proceedings.upgradeCustomer.go();
});

When(/^the user "([^"]*)" from proceedings$/, async function(option) {
    await proceedings.closeProceedings();
    await proceedings.exitModal(option);
});

When(/^the user tries to complete proceedings$/, async function() {
    await proceedings.confirmProceedings();
    await proceedings.serviceFailure();
});
