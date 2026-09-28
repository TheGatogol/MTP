import { When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import contractProductsSectionDataAuthorizationMultiproduct from '../../pages/contractProductsSectionDataAuthorizationMultiproduct/contractProductsSectionDataAuthorizationMultiproduct';

When(/^the user access to data authorization multiproduct from "([^"]*)"$/, async function(access) {
    if(access ==='opportunities section'){
        await navigation.contractProductsSectionDataAuthorizationMultiproduct.contractProductsSectionDataAuthorizationMultiproduct.go();
    }else{
        await navigation.contractProductsSectionDataAuthorizationMultiproduct.contractProductsSectionDataAuthorizationMultiproduct.go({access});
    }
});

When(/^the user access to credit history conditions$/, async function() {
    await contractProductsSectionDataAuthorizationMultiproduct.accessCreditHistoryModal();
});

When(/^the user authorizes the consultation and retrieval of my credit history$/, async function() {
    await contractProductsSectionDataAuthorizationMultiproduct.selectCheckBoxCreditHistory();
});

When(/^the user access to "([^"]*)" and close the modal$/, async function(conditions) {
    await contractProductsSectionDataAuthorizationMultiproduct.accessAndCloseConditionsModal(conditions);
});

When(/^the user access to demographic conditions$/, async function(){
    await contractProductsSectionDataAuthorizationMultiproduct.accessDemographicHistoryLink();
});

When(/^the user access to privacy notice$/, async function(){
    await contractProductsSectionDataAuthorizationMultiproduct.accessPrivacyModal();
});

When(/^the user access to privacy notice analytics$/, async function(){
    await contractProductsSectionDataAuthorizationMultiproduct.accessPrivacyModalAnalytics();
});

When(/^the user selects the authorization with "([^"]*)"$/, async function(option){
    await contractProductsSectionDataAuthorizationMultiproduct.selectOption(option);
});

When(/^the user confirms the authorization$/, async function(){
    await contractProductsSectionDataAuthorizationMultiproduct.authorizationConfirmation();
});

When(/^the user exits the authorize query screen$/, async function(){
    await contractProductsSectionDataAuthorizationMultiproduct.exitAuthorization();
});

When(/^the user confirms the process exit$/, async function(){
    await contractProductsSectionDataAuthorizationMultiproduct.exitConfirmsAuthorization();
});

When(/^the user returns to the authorize query screen$/, async function(){
    await contractProductsSectionDataAuthorizationMultiproduct.returnAuthorization();
});
