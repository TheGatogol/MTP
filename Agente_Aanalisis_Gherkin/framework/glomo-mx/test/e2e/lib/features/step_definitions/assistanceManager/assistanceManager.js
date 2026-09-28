import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import assistanceManagerPage from '../../pages/assistanceManager/assistanceManagerPage';
import assistanceEmailPage from '../../pages/assistanceManager/assistanceEmailPage';

When(/^the user accesses (a personal advisor|benefits|more information in assistance benefits)$/, async function(operative) {
    await navigation.assistanceManager.benefitsAssistance.go();
    if(operative==='a personal advisor')
        await navigation.assistanceManager.assistanceManager.go();
});

When(/^the user enters call advisor$/, async function() {
    await assistanceManagerPage.accessCallAdvisor();
});

When(/^the user accesses email$/, async function() {
    await navigation.assistanceManager.assistanceEmail.go();
});

When(/^the user enters message$/, async function() {
    await assistanceEmailPage.insertInput(user.data[0].message);
});

When(/^the user sends message$/, async function() {
    await assistanceEmailPage.accessAssistanceSuccess();
});

When(/^the user enters show data$/, async function() {
    await assistanceEmailPage.accessShowData();
    await assistanceEmailPage.confirmShowData();
});

When(/^the user accesses to assistance manager$/, async function() {
    await navigation.assistanceSection.go();
    await navigation.assistanceManager.assistanceManager.go();
});

When(/^the user enters call line bbva$/, async function(){
    await assistanceManagerPage.accessCallButton();
});
