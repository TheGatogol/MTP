import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import travelInsuranceStep1 from '../../pages/diy/travelInsurance/travelInsuranceStep1';

//STEP DEFINITIONS

When(/^the user goes to the travel insurance operation$/, async function() {
    await navigation.diy.travelInsurance.step1.go();
});

When(/^the user is in the "([^"]*)" step of travel insurance contract$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'starting quotation':
            await navigation.diy.travelInsurance.step2.go();
            break;
        case 'select traveler':
            await navigation.diy.travelInsurance.step3.go();
            break;
        case 'account select':
            await navigation.diy.travelInsurance.step4.go();
            break;
        case 'checklist contract':
            await navigation.diy.travelInsurance.step5.go();
            break;
        case 'summary view confirm':
            await navigation.diy.travelInsurance.step6.go();
            break;
        case 'otp modal':
            await navigation.diy.travelInsurance.step7.go();
            break;
        case 'starting destination':
            await navigation.diy.travelInsurance.firstInteraction.go();
            break;
        case 'coverage information':
            await navigation.diy.travelInsurance.coverageInfo.go();
            break;
        case 'starting quotation two travelers':
            await navigation.diy.travelInsurance.selectTravelers.go();
            break;
        case 'modal information travelers':
            await navigation.diy.travelInsurance.selectTravelers.go();
            await navigation.diy.travelInsurance.selectInfoModal.go();
            break;
        case 'select account to pay':
            await navigation.diy.travelInsurance.selectTravelers.go();
            await navigation.diy.travelInsurance.selectInfoModal.go();
            await navigation.diy.travelInsurance.fillInfoModal.go();
            await navigation.diy.travelInsurance.step3.go();
            break;
        case 'confirm term and conditions':
            await navigation.diy.travelInsurance.selectTravelers.go();
            await navigation.diy.travelInsurance.selectInfoModal.go();
            await navigation.diy.travelInsurance.fillInfoModal.go();
            await navigation.diy.travelInsurance.step3.go();
            await navigation.diy.travelInsurance.step4.go();
            break;
        case 'checklist contract confirm':
            await navigation.diy.travelInsurance.selectTravelers.go();
            await navigation.diy.travelInsurance.selectInfoModal.go();
            await navigation.diy.travelInsurance.fillInfoModal.go();
            await navigation.diy.travelInsurance.step3.go();
            await navigation.diy.travelInsurance.step4.go();
            await navigation.diy.travelInsurance.step5.go();
            break;
        case 'summary view confirm contract':
            await navigation.diy.travelInsurance.selectTravelers.go();
            await navigation.diy.travelInsurance.selectInfoModal.go();
            await navigation.diy.travelInsurance.fillInfoModal.go();
            await navigation.diy.travelInsurance.step3.go();
            await navigation.diy.travelInsurance.step4.go();
            await navigation.diy.travelInsurance.step5.go();
            await navigation.diy.travelInsurance.step6.go();
            break;
        case 'travelers form':
            await navigation.diy.travelInsurance.selectTravelers.go();
            await navigation.diy.travelInsurance.selectInfoModal.go();
            break;
        default:
            throw new Error(`${option} option is not available to navigate...`);
    }
});

When(/^the user press on "([^"]*)" in travel insurance$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'coverage information':
            await navigation.diy.travelInsurance.coverageInfo.go();
            await navigation.diy.travelInsurance.coverageInfoBack.go();
            break;
        case 'detail of travelers':
            await navigation.diy.travelInsurance.selectInfoModal.go();
            break;
        default:
            throw new Error(`${option} option is not available to navigate...`);
    }
});

When(/^the user fills one of other traveler information$/, async function() {
    await currentPage.noCompleteFillForm();
});

When (/^the user closes tool tip modal of call me back/, async function() {
    await travelInsuranceStep1.closeToolTipCallMeBack();
});
