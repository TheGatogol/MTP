import { When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import nonPreApprovedCarCertificateMainPage from '../../pages/nonPreApprovedCarCertificate/nonPreApprovedCarCertificateMain';

When(/^the user accesses to non pre approved car certificate "([^"]*)" screen$/, async function (screen) {
    switch (screen.toLowerCase()) {
        case 'main':
            await navigation.nonPreApprovedCarCertificate.main.go();
            break;
        case 'your data section':
            await nonPreApprovedCarCertificateMainPage.goToStep({step: screen});
            break;
        case 'terms and conditions section':
        case 'otp screen':
        case 'summary section':
        case 'confirmation screen':
            await nonPreApprovedCarCertificateMainPage.goToStep({step: screen, variableIncomes: false});
            break;
        case 'second section':
            await nonPreApprovedCarCertificateMainPage.goToStep({step: screen, variableIncomes: false});
            break;
        default:
            throw new Error(`${screen} screen is not available to navigate to...`);
    }
});

When(/^the user accesses to car certificate "([^"]*)" info modal$/, async function (infoModal) {
    await nonPreApprovedCarCertificateMainPage.openInfoModal({infoModal: infoModal});
});

When(/^the user inserts a "([^"]*)" amount in "([^"]*)"$/, async function (limit, input) {
    switch (input.toLowerCase()) {
        case 'price':
            await nonPreApprovedCarCertificateMainPage.showPriceBehavior({limit: limit});
            break;
        case 'down payment':
            await nonPreApprovedCarCertificateMainPage.insertInvalidDownPayment({limit: limit});
            break;
        default:
            throw new Error(`${input} input is not available to set a value`);
    }
});

When(/^the user indicates to be an "([^"]*)" worker with gross incomes for "([^"]*)" and variable incomes for "([^"]*)"$/, async function (typeEmployee, grossIncome, variableIncome) {
    await nonPreApprovedCarCertificateMainPage.showInvalidIncomesBehavior(
        {typeEmployee: typeEmployee, grossIncome: grossIncome, variableIncome: variableIncome});
});

When(/^the user completes a quotation selecting a "([^"]*)" car$/, async function (carType) {
    await navigation.nonPreApprovedCarCertificate.success.go({carType: carType});
});

When(/^the user decides to change "([^"]*)" in summary screen$/, async function (dataToChange) {
    await nonPreApprovedCarCertificateMainPage.editSectionInSummary({section: dataToChange});
});

When(/^the user indicates do not have variable incomes without indicate gross incomes$/, async function () {
    await nonPreApprovedCarCertificateMainPage.selectNoVariableIncomesOption();
});

When(/^the user changes the type car selection to preowned$/, async function () {
    await nonPreApprovedCarCertificateMainPage.changeTypeCarOption();
});

When(/^the user starts interaction with "([^"]*)"$/, async function (element) {
    await nonPreApprovedCarCertificateMainPage.playWith({element});
});

When(/^the user accesses to the car loan npa offer from "([^"]*)"$/, async function(entryPoint) {
    if(entryPoint === 'opportunities'){
        await navigation.nonPreApprovedCarCertificate.main.go();
    }
});
