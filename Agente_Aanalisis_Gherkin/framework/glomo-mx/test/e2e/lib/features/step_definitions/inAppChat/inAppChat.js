import {When} from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user accesses to the chat in app(| and continues)$/, async function(continueOrStay) {
    await navigation.inAppChat.inAppChatWelcome.go();
    if(continueOrStay){
        await navigation.inAppChat.inAppChat.go();
    }
});

When (/^the user (exits|ends) the chat$/, async function(atemptOrAccess) {
    if(atemptOrAccess==='exits'){
        await navigation.inAppChat.inAppChatWelcome.go();
    } else if(atemptOrAccess==='ends'){
        await navigation.feedback.feedbackContextualNPS.go();
        await navigation.inAppChat.inAppChat.go();
    }
});

When(/^the user sends "([^"]*)" as message$/, async function(message) {
    await currentPage.sendMessage(message);
});

When(/^the user writes a message$/, async function() {
    await currentPage.enterText('Hola buenos días');
});

When(/^the user accesses to feedback screen$/, async function() {
    await navigation.feedback.feedbackContextualNPS.go();
});

When(/^the user interrupts the chat$/, async function() {
    await currentPage.closeChat();
});

