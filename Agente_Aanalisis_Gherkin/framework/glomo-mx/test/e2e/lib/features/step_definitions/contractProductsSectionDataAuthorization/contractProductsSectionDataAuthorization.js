import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import contractProductsSectionDataAuthorization from '../../pages/contractProductsSectionDataAuthorization/contractProductsSectionDataAuthorization';

When(/^the user access contract products section data authorization from (nba|nbo|opportunities section)$/, async function(access) {
    if(access ==='opportunities section'){
        await navigation.contractProductSection.go();
        await navigation.contractProductsSectionDataAuthorization.contractProductsSectionDataAuthorization.go();
    }else{
        await navigation.contractProductsSectionDataAuthorization.contractProductsSectionDataAuthorization.go({access});
    }
});

When(/^the user enter the authorization conditions$/, async function() {
    await contractProductsSectionDataAuthorization.enterConditionsOfAuthorization();
});

When(/^the user enter the work history and socioeconomic history$/, async function() {
    await contractProductsSectionDataAuthorization.enterWorkHistoryAndSocioeconomicHistory();

});

When(/^the user closed the authorization conditions$/, async function() {
    await contractProductsSectionDataAuthorization.closedConditionsOfAuthorization();
});

When(/^the user enter the privacy notice$/, async function() {
    await contractProductsSectionDataAuthorization.enterPrivacyNoticeModal();
});

When(/^the user performs successful authorization(| after accessing the information modals)$/, async function(modal) {
    if(modal ===' after accessing the information modals'){
        await contractProductsSectionDataAuthorization.enterAfterAccessingTheInformationModals();
    }
    await contractProductsSectionDataAuthorization.completeAuthorization();
});

When(/^the user accepts the authorization$/, async function() {
    await contractProductsSectionDataAuthorization.acceptAuthorization();
});
