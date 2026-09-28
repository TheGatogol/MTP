import { When, Then } from '@cucumber/cucumber';
import * as navigation from '../../navigation';

When(/^the user go to register a tag$/, async function() {
    await navigation.teleViaPaseTags.tagsNavigation.go();
    await navigation.teleViaPaseTags.tagsRegisterNav.go();
});

When(/^the user go to register a tag without any tags registered$/, async function() {
    await navigation.teleViaPaseTags.topUpNav.go();
    await navigation.teleViaPaseTags.tagsRegisterNav.go();
});

When(/^the user interact "([^"]*)" section from tag registration$/, async function(section) {
    await currentPage.goToSection(section);
});

When(/^the user fill information tag form and continue the process$/, async function() {
    await currentPage.fillFormTag();
    await navigation.teleViaPaseTags.tagsRegisterNav.go();
});

When(/^the user finishes the tag registration$/, async function() {
    await navigation.teleViaPaseTags.tagsRegisterSuccess.go();
});

When(/^the user accesses the recharge page from successful tag registration$/, async function() {
    await navigation.teleViaPaseTags.tagsRechargeNav.go();
});

When(/^the user go to tag list$/, async function() {
    await navigation.teleViaPaseTags.tagsNavigation.go();
});

When(/^the user go to FAQ about tags$/, async function() {
    await navigation.teleViaPaseTags.topUpNav.go();
    await navigation.teleViaPaseTags.tagsNavigation.go();
    await navigation.teleViaPaseTags.tagsFAQNav.go();
});

When(/^the user open "([^"]*)" about cost$/, async function(info) {
    await currentPage.goToSection(info);
});

When(/^the user consult "([^"]*)" section from summary tag registration$/, async function(section) {
    await currentPage.goToSection(section);
});

When(/^the user go to recharge a tag$/, async function() {
    await navigation.teleViaPaseTags.tagsNavigation.go();
    await navigation.teleViaPaseTags.tagsRechargeNav.go('', true);
});

When(/^the user go to recharge a tag with balance "([^"]*)"$/, async function(account) {
    await navigation.teleViaPaseTags.topUpNav.go();
    await navigation.teleViaPaseTags.tagsNavigation.go();
    await navigation.teleViaPaseTags.tagsRechargeNav.go({ number: account, flag: false });
});

When(/^the user select an "([^"]*)" to recharge tag and continue$/, async function(section) {
    switch (section) {
        case 'amount':
        case 'account':
            await currentPage.doSection(section, true, '200');
            break;
        case 'other amount':
            await currentPage.doSection('amount', false, '200');
            break;
        default:
            throw new Error(`Section '${section}' not found in section list.`);
    }
});

When(/^the user only can select amount of "([^"]*)" or "([^"]*)" pesos$/, async function(firstValue, secondValue) {
    await currentPage.selectFewAmount({ status: 'few', firstValue, secondValue });
});

When(/^the user view more accounts to recharge$/, async function() {
    await currentPage.doSection('amount', true, '200');
});

When(/^the user do recharge process until "([^"]*)" section$/, async function(section) {
    switch (section) {
        case 'account':
            await currentPage.doSection('amount', true, '200');
            break;
        case 'summary':
            await currentPage.doSection('account', true, '200');
            break;
        default:
            throw new Error(`Section '${section}' not found in section list.`);
    }
});

When(/^the user consult the "([^"]*)" question from "([^"]*)"$/, async function(question, section) {
    await navigation.teleViaPaseTags.tagsFAQDetailNav.go({ question, section });
});

When(/^the user go to know more information about tag$/, async function() {
    await currentPage.toKnowMore();
});

When(/^the user recharge it$/, async function() {
    await currentPage.rechargeTag();
});

When(/^the user select other amount and recharge it$/, async function() {
    await currentPage.doSection('account', false, '200');
});

When(/^the user change "([^"]*)" from summary recharge section and "([^"]*)"$/, async function(section, accmsg) {
    await currentPage.editSection(section, accmsg, false);
});

Then(/^the user cannot select any amount$/, async function() {
    await currentPage.selectFewAmount({status: 'any'});
});

Then(/^the user sees 3 or more accounts to recharge and "([^"]*)"$/, async function(action) {
    await currentPage.viewMoreAccounts(action);
});

Then(/^the user sees an account "([^"]*)"$/, async function(status) {
    await currentPage.viewAccount(status);
});
