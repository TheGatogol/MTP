import {When} from '@cucumber/cucumber';
import {Commands} from '@csqe/radish';
import myConversationPage from '../../pages/myConversation/myConversation';
import * as navigation from '../../navigation';

async function setLocalStorage(key, val) {
    await Commands.pause({time: config.wait.XS});
    await Commands.execute({
        script: (key, val) => localStorage.setItem(key, val),
        args: [key, val]
    });
}

When(/^the user accesses to (my conversations operative|assistance center)$/, async function(option) {
    const {segment} = global.user;
    if(option === 'assistance center'){
        await navigation.assistanceSection.go();
    } else {
        await navigation.myConversation.myConversation.go({segment});
        await myConversationPage.closeFirstAccessModal();
    }
});

When(/^the user accesses to my conversations (for first time|list)$/, async function(option) {
    const {segment} = global.user;
    if(option === 'for first time'){
        await navigation.myConversation.myConversation.go({segment});
    } else {
        await setLocalStorage('my_conversation_onboarding', JSON.stringify({onboarding: false}));
        await navigation.myConversation.myConversation.go({segment});
    }
});

When(/^the user accesses to conversation theme page$/, async function() {
    await myConversationPage.createNewConversation();
});

When(/^the user adds an attachment and views an informative modal$/, async function() {
    await myConversationPage.addAttachment();
});

When(/^the user tries to create a new conversation$/, async function() {
    await myConversationPage.createNewConversation();
    await myConversationPage.enterConversationTitle(global.user.titleConversation);
    await myConversationPage.enterConversationReason('prueba');
});

When(/^the user leaves new conversation$/, async function() {
    await myConversationPage.backToNewConversationPage();
});

When(/^the user edits a conversation in draft status$/, async function() {
    await myConversationPage.editChatPage('nuevo borrador');
    await myConversationPage.backToChatPage();
});

When(/^the user send message a conversation in draft status$/, async function() {
    await myConversationPage.enterSendMessage();
});

When(/^the user retuns to the conversations list$/, async function() {
    await myConversationPage.backToChatPage();
});

When(/^the user attaches files a conversation in banker status$/, async function() {
    await myConversationPage.attachFiles();
    await myConversationPage.enterMessageAttachFiles();
});

When(/^the user writes a new message in a conversation with the banker$/, async function() {
    await myConversationPage.enterNewMessage();
});

When(/^the user makes a conversation with the banker$/, async function() {
    await myConversationPage.createNewConversation();
    await myConversationPage.enterConversationTitle(global.user.titleConversation);
    await myConversationPage.enterConversationReason('prueba');
    await myConversationPage.accessChat();
});

When(/^the user searches a conversation "([^"]*)"$/, async function(withNoResults) {
    await myConversationPage.accessSearch();
    if (withNoResults === 'with no results') {
        await myConversationPage.enterSearchConversationWithoutResults();
    } else {
        await myConversationPage.enterSearchConversation();
    }
});

When(/^the user accesses the conversation search modal$/, async function() {
    await myConversationPage.accessSearch();
});

When(/^the user accesses to a conversation search$/, async function() {
    await myConversationPage.accessSearchConversation();
});

When(/^the user tries to add an attachment$/, async function() {
    await myConversationPage.enterConversationTitle(global.user.titleConversation);
    await myConversationPage.enterConversationReason('prueba');
    await myConversationPage.addAttachment();
    await myConversationPage.showOptionsAttachment();
    await myConversationPage.addAttachment();

});

When(/^the user accesses to conversation with "([^"]*)" status$/, async function(status) {
    await myConversationPage.accessToConversation(status);
});

When(/^the user discards a draft message$/, async function() {
    await myConversationPage.discardDraftChat();
    await myConversationPage.backToChatPage();
});

When(/^the user closes remote info modal$/, async function() {
    await myConversationPage.closeFirstAccessModal();
});

When(/^the user accesses to "([^"]*)" question$/, async function (number) {
    await myConversationPage.selectQuestion(number);
});

When(/^the user accesses the "([^"]*)" frequently asked question$/, async function(entryPoint) {
    await myConversationPage.openModalInfo();
    await myConversationPage.accessFrequentlyAskedQuestion(entryPoint);
});

When(/^the user accesses the help section screen$/, async function() {
    await myConversationPage.openModalInfo();
});
