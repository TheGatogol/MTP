import {Then, When} from '@cucumber/cucumber';
import {Commands} from '@csqe/radish';

When(/^the user "([^"]*)" the action$/, async function(confirmation) {
    const isConfirmed = confirmation === 'true' || confirmation === 'confirms';
    await currentPage.confirmAction(isConfirmed);
});

When(/^the user closes the modal$/, async function() {
    await currentPage.closeDialog();
});

When(/^the user closes the error modal$/, async function() {
    await currentPage.confirmDialog({isConfirmed: false}, true);
});

When(/^the user exit from the error screen$/, async function() {
    await currentPage.confirmDialog({isConfirmed: true});
});

Then(/^the user "([^"]*)" see a modal open$/, async function(visible) {
    await currentPage.isModalPresent({expected: visible === 'does'});
});

Then(/^the user sees a modal open$/, async function() {
    await currentPage.isModalPresent({expected: true});
});

Then(/^the user sees an error modal open$/, async function() {
    await currentPage.isModalPresent({expected: true}, true);
});

Then(/^the user sees a modal with the following elements:$/, async function(table) {
    await currentPage.isModalPresent({expected: true});
    await currentPage.validateModalElements({table});
});

Then(/^the user sees an error modal with the following elements:$/, async function(table) {
    await currentPage.isModalPresent({expected: true}, true);
    await currentPage.validateModalElements({table}, true);
});

Then(/^the user sees a "([^"]*)" (modal|error) with the following elements:$/, async function(type, modalType, table) {
    const isError = modalType === 'error';
    await currentPage.isModalPresent({expected: true, type, timeout: config.XXL}, isError);
    await currentPage.validateModalElements({table}, isError);
});

Then(/^the user sees a "([^"]*)" type error modal$/, async function(type) {
    await currentPage.isModalPresent({expected: true, type, verifyStructure: true});
});

Then(/^the user sees the "([^"]*)" close confirmation modal$/, async function(size) {
    return currentPage.checkModal({size, title: false, paragraph: false });
});

Then(/^a "([^"]*)" size backend error is shown without title$/, async function(size) {
    await currentPage.checkModal({size: size, title: false});
});

Then(/^the user sees a "([^"]*)" modal$/, async function(size) {
    await currentPage.checkModal({size, title: false});
});

When(/^the user retries the operation "([^"]*)" times$/, async function(times) {
    await currentPage.retryOperative(times);
});

When (/^the user cancels the operation modal$/, async function() {
    await currentPage.confirmDialog({isConfirmed: false});
});

When (/^the user cancels the operation error modal$/, async function() {
    await currentPage.confirmDialog({isConfirmed: false}, true);
});

When (/^the user accepts the modal$/, async function() {
    await currentPage.confirmDialog({isConfirmed: true});
});

When (/^the user accepts the error modal$/, async function() {
    await currentPage.confirmDialog({isConfirmed: true}, true);
});

When(/^the user access to atm locator from modal$/, async function() {
    await currentPage.accessToATM();
});

When(/^the user enters the "([^"]*)" modal$/, async function(modal) {
    await currentPage.enterModal(modal);
});

When(/^the user retries "([^"]*)" times small help modal$/, async function(retries) {
    for (let x = 0; x < retries; x++) {
        await Commands.pause({time: config.wait.S});
        await currentPage.retryWarningSmallModal();
    }
});

When(/^the user retries "([^"]*)" times big help modal$/, async function(retries) {
    for (let x = 0; x < retries; x++) {
        await Commands.pause({time: config.wait.S});
        await currentPage.retryWarningBigModal();
    }
});

When(/^the user retries "([^"]*)" times big modal$/, async function(retries) {
    for (let x = 0; x < retries; x++) {
        await Commands.pause({time: config.wait.S});
        await currentPage.retryErrorBigModal();
    }
});

When(/^the user retries "([^"]*)" times error modal$/, async function(retries) {
    for (let x = 0; x < retries; x++) {
        await Commands.pause({time: config.wait.S});
        await currentPage.retryErrorModal();
    }
});

When(/^the user retries "([^"]*)" times$/, async function(retries) {
    for (let x = 0; x < retries; x++) {
        await Commands.pause({time: config.wait.S});
        await currentPage.retryModal();
    }
});
