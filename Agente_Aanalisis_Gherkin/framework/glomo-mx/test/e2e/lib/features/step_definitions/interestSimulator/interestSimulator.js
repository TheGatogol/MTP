import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import interestSimulator from '../../pages/interestSimulator/interestSimulator';
import orangeCardProductDetailPage from '../../pages/productDetails/orangeCardProductDetail';

When(/^the user goes to the simulate interest$/, async function() {
    await navigation.interestSimulator.go();
    await interestSimulator.closeTooltipSlider();
});

When(/^the user indicates "([^"]*)" in the simulator$/, async function(option) {
    switch (option.toLowerCase()) {
        case 'minimum payment':
            await interestSimulator.amountSelectorSimulatorSlider('21081.33');
            break;
        case 'payment so as not to generate interest':
            await interestSimulator.amountSelectorSimulatorSlider('29081.33');
            break;
        case 'full payment':
            await interestSimulator.amountSelectorSimulatorSlider('22000.44');
            break;
        case 'other amount':
            await interestSimulator.openModalEnterAmount();
            await interestSimulator.enterOtherAmount();
            break;
        default:
            throw new Error(`${option} select is not available to show...`);
    }
});

When(/^the user enters the modal to get more information$/, async function() {
    await interestSimulator.openMoreInformation();
});

When(/^the user goes to the simulate interest on boarding$/, async function() {
    await navigation.interestSimulatorOnboarding.go();
});

When(/^the user goes to on boarding simulate interest slide step 2$/, async function() {
    await orangeCardProductDetailPage.simulateInterestOnboardingSlideStep2();
});

When(/^the user goes to on boarding simulate interest slide step 3$/, async function() {
    await orangeCardProductDetailPage.simulateInterestOnboardingSlideStep3();
});

When(/^the user goes to the simulate interest with error$/, async function() {
    await navigation.interestSimulator.go();
});
