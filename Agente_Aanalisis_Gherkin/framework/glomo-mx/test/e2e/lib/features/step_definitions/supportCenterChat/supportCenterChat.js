import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import login from '../../pages/loginLogout/login';
import supportCenterChat from '../../pages/supportCenterChat/supportCenterChat';

When(/^the user (accesses|initiates|continues to) the support center chat$/, async function(action){
    if (action==='accesses' || action==='initiates'){
        await navigation.login.go();
        await login.setSupportCenterChat();
    }

    if (action==='continues to') {
        await navigation.supportCenterChat.supportCenterChat.go();
    }
});

When(/^the user continues to chat with the assistant$/, async function(){
    await supportCenterChat.enterChat();
});

When(/^the user is connected with the assistant$/, async function(){
    await supportCenterChat.waitForAssistant();
});

When(/^the user receives the first message from the assistant$/, async function(){
    await supportCenterChat.waitForFirstMessage();
});

When(/^the assistant finishes the chat$/, async function(){
    await supportCenterChat.finishChat();
});
