import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import leadMortgage from '../../pages/leadMortgage/leadMortgage';

When(/^the user accesses the lead mortgage offer$/, async function() {
    await navigation.leadMortgage.leadMortgage.go();
});

When(/^the user continues to the terms and conditions section$/, async function() {
    await currentPage.interactLeadMortgage({info: 'data step'});
});

When(/^the user selects mortgage options$/, async function() {
    await leadMortgage.interactLeadMortgage({info: 'data step'});
    await leadMortgage.interactLeadMortgage({info: 'check step'});
});

When(/^the user accepts the terms and condtions$/, async function() {
    await currentPage.interactLeadMortgage({info: 'legal step'});
});

When(/^the user select credit destination "([^"]*)"$/, async function(destination) {
    await currentPage.getCreditDestination(destination);
});

When(/^the user remove amount lead$/, async function() {
    await currentPage.clearAmountLead();
});

When(/^the user update amount lead "([^"]*)"$/, async function(amount) {
    await currentPage.setAmountLead(amount);
});

When(/^the user change lead mortgage$/, async function() {
    await currentPage.editTerm();
    await currentPage.getCreditDestination('liquidity');
});

When(/^the user consult terms and conditions in the summary$/, async function() {
    await currentPage.interactLeadMortgage({info: 'legal step', edit: true});
});

When(/^the user completes the simulation and accepts the terms and conditions$/, async function() {
    await currentPage.interactLeadMortgage({info: 'summary'});
});

When(/^the user apply for a lead mortgage$/, async function() {
    await leadMortgage.interactLeadMortgage({info: 'summary'});
    await leadMortgage.requestOffer();
});

When(/^the user closes screen summary$/, async function() {
    await currentPage.closeSummary();
});

When(/^the user accesses to lead mortgage review$/, async function() {
    await navigation.leadMortgage.leadMortgageReview.go();
});

When(/^the user modifys the lead mortgage term$/, async function() {
    await currentPage.changeTerm();
});

When(/the user tries to simulate term three times$/, async function() {
    await currentPage.simulationRetry();
});

When(/^the user (attempts to |)finish assistance manager$/, async function(option) {
    if (option === 'attempts to '){
        await navigation.leadMortgage.leadMortgage.attempt();
    } else {
        await navigation.leadMortgage.leadMortgage.go();
    }
});
