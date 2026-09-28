import { When } from '@cucumber/cucumber';
import { Commands } from '@csqe/radish';
import * as navigation from '../../navigation';
import businessInteligenceTransactionList from '../../pages/businessInteligenceOverview/businessInteligenceTransactionList';

async function setLocalStorage(key, value) {
    await Commands.execute({
        script: (arg1, arg2) => {
            localStorage[arg1] = arg2;
        },
        args: [key, value],
    });
}

When(/^the user accesses as an openpay contracted user "([^']*)"$/, async function(onb) {
    await setLocalStorage('mercurioMPOS', JSON.stringify({isOpenPayUser: true}));
    if (onb === 'without onboarding') {
        await setLocalStorage('pbio_onboarding', 'onboarding');
    }
});

When(/^the user accesses to ['"]([^'"]*)['"]$/, async function(viewMode) {
    await navigation.businessInteligenceOverview.businessInteligenceOverview.go({viewMode});
});

When(/^the user accesses to period "([^']*)"$/, async function(option) {
    await businessInteligenceTransactionList.accessTypePeriod({option});
});

When(/^the user accesses to edit period "([^']*)"$/, async function(option) {
    await businessInteligenceTransactionList.accessEditPeriod({option});
});

When(/^the user accesses to view detail$/, async function() {
    await businessInteligenceTransactionList.accessDetail();
});

When(/^the user accesses to onboarding business$/, async function() {
    await businessInteligenceTransactionList.accessOnboarding();
});
