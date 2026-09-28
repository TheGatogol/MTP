import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import fundHiringOrigination from '../../pages/fundHiringOrigination/fundHiringOrigination.js';

When(/^the user accesses to fund hiring origination from opportunities$/, async function(){
    await navigation.fundHiringOrigination.fundHiringOrigination.go();
});

When(/^the user completes the fund hiring until "([^"]*)" selecting fund "([^"]*)"$/, async function(untilStep, fundName) {
    const accountStep = global?.user?.multipleAccounts;
    await fundHiringOrigination.goUntilFundHiringStep(untilStep, { includeAccountStep: accountStep, fundName });
});

When(/^the user taps on fund "([^"]*)" information link in the error message$/, async function(fundName) {
    await fundHiringOrigination.viewFundInformationFromBlockingModal();
    await fundHiringOrigination.continueOffer();
    await fundHiringOrigination.goToDetailFund(fundName);
});

When(/^the user selects liquidity in "([^"]*)" place$/, async function(liquidityPlace) {
    await fundHiringOrigination.selectLiquidity(liquidityPlace);
});

When(/^the user taps on the "([^"]*)" link$/, async function(modalName) {
    await fundHiringOrigination.openLink(modalName);
});

When(/^the user close tooltip funds hiring origination$/, async function(){
    await fundHiringOrigination.closeTooltip();
});

When(/^the user modifies the fund hiring "([^"]*)" step$/, async function(nameMode) {
    await fundHiringOrigination.modifyStep(nameMode);
});

When (/^the user selects fund "([^"]*)"$/, async function(fundName){
    await fundHiringOrigination.goToDetailFund(fundName);
    await fundHiringOrigination.goToTermsandConditions();
});

When(/^the user enters amount "([^"]*)"$/, async function(amount) {
    await fundHiringOrigination.enterAmount(amount);
});
