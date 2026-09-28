import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import fundsHiringStep1Page from '../../pages/diy/fundsHiring/fundsHiringStep1';
import fundsHiringStep3Page from '../../pages/diy/fundsHiring/fundsHiringStep3';
import fundsHiringStep4Page from '../../pages/diy/fundsHiring/fundsHiringStep4';
import fundsHiringStep5Page from '../../pages/diy/fundsHiring/fundsHiringStep5';

// STEP DEFINITIONS

When(/^the user goes to the funds hiring operation$/, async function() {
    await navigation.diy.fundsHiring.step1.go();
    await fundsHiringStep1Page.waitForAnalytics();
});

When(/^the user finish the funds hiring operation$/, async function() {
    await navigation.diy.fundsHiring.review.go();
});

When(/^the user close the call$/, async function() {
    await navigation.diy.fundsHiring.closeCall.go();
});

When(/^the user calls the advisor from "([^"]*)"$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'header step 1':
            await navigation.diy.fundsHiring.callMeBack.go();
            break;
        case 'header step 7':
            await navigation.diy.fundsHiring.callMeBackStep7.go();
            break;
        case 'header step 5':
            await navigation.diy.fundsHiring.callMeBackStep5.go();
            break;
        default:
            throw new Error(`${option} option is not available to navigate...`);
    }
});

When(/^the user is in the "([^"]*)" step of funds hiring operation$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'select account':
            await navigation.diy.fundsHiring.step2.go();
            break;
        case 'select investment type':
            await navigation.diy.fundsHiring.step3.go();
            break;
        case 'investment service modal':
            await navigation.diy.fundsHiring.step3.go();
            await fundsHiringStep3Page.selectInvestmentType();
            break;
        case 'execution service modal':
            await navigation.diy.fundsHiring.step3.go();
            await fundsHiringStep3Page.selectInvestmentType('advanced');
            break;
        case 'select fund':
            await navigation.diy.fundsHiring.step4.go();
            break;
        case 'fund filter modal':
            await navigation.diy.fundsHiring.step4.go('advanced');
            await fundsHiringStep4Page.viewFilterFunds();
            break;
        case 'fund debt modal':
            await navigation.diy.fundsHiring.step4.go('advanced');
            await fundsHiringStep4Page.viewFundCategory('debt');
            break;
        case 'fund rent modal':
            await navigation.diy.fundsHiring.step4.go('advanced');
            await fundsHiringStep4Page.viewFundCategory('rent');
            break;
        case 'fund multi-strategy modal':
            await navigation.diy.fundsHiring.step4.go('advanced');
            await fundsHiringStep4Page.viewFundCategory('multi');
            break;
        case 'input amount':
            await navigation.diy.fundsHiring.step5.go();
            break;
        case 'simulation':
            await navigation.diy.fundsHiring.step5.go();
            await fundsHiringStep5Page.showSimulation();
            break;
        case 'submit account state':
            await navigation.diy.fundsHiring.step6.go();
            break;
        case 'terms and conditions':
            await navigation.diy.fundsHiring.step7.go();
            break;
        case 'summary':
            await navigation.diy.fundsHiring.step8.go();
            break;
        case 'otp modal':
            await navigation.diy.fundsHiring.step9.go();
            break;
        default:
            throw new Error(`${option} option is not available to navigate...`);
    }
});
