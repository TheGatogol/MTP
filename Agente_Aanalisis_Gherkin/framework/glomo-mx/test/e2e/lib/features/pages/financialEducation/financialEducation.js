import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('FinancialEducationPage')
class FinancialEducationPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-financialEducation[state="active"]',
            elements: {
                principalPage: {
                    properties: {
                        root: '[data-tag-name="user-info-tips-finance-dashboard"]',
                    },
                    headerMain: '[data-tag-name="bbva-header-main"]',
                    tipsFinance: '[data-tag-name="user-info-tips-finance"]',
                    backBtn: '[data-tag-name="bbva-header-main"] #btn-back',
                    menuBtn: '[data-tag-name="bbva-header-main"] #btn-menu',
                    accountTips: '#user-info-tips-finance-account [data-tag-name="bbva-type-text"] p',
                    goalsTips: '#user-info-tips-finance-goals [data-tag-name="bbva-type-text"] p',
                    savingTips: '#user-info-tips-finance-saving [data-tag-name="bbva-type-text"] p',
                    securityTips: '#user-info-tips-finance-secure [data-tag-name="bbva-type-text"] p',
                    sectionCard: '[aria-labelledby="slide-0"] [data-tag-name="user-info-tips-finance-section-card"] [data-tag-name="bbva-type-link"]',
                    requestMyMoneyCard: '[aria-labelledby="slide-1"] [data-tag-name="user-info-tips-finance-section-card"] [data-tag-name="bbva-type-link"]',
                    tipTap: '[data-tag-name="user-info-tips-finance-tabs"] [data-tag-name="bbva-type-text"]',
                    modalDetail: '[data-tag-name="modal-tip-detail"]'
                },
                modalTipDetail: {
                    properties: {
                        root: '[data-tag-name="modal-tip-detail"]',
                    },
                    headerTitle: '[data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-text"]',
                    backButton: '[data-tag-name="bbva-header-main"] #btn-back',
                    menuButton: '[data-tag-name="bbva-header-main"] #btn-menu',
                    bannerImage: '[data-tag-name="bbva-banner-image"] img',
                    mainDescription: '.modal--description',
                    bullets: '[data-tag-name="bbva-list-bullet"]'
                },
                tabsPage: {
                    properties: {
                        root: '[data-tag-name="user-info-tips-finance-tabs"]',
                    },
                    cardTipTabAccount: '#group-tabs-categories [slot="content-0"] div.container__description [data-tag-name="bbva-type-text"] p',
                    cardTipTabGoals: '#group-tabs-categories [slot="content-1"] div.container__description [data-tag-name="bbva-type-text"] p',
                    cardTipTabSaving: '#group-tabs-categories [slot="content-2"] div.container__description [data-tag-name="bbva-type-text"] p',
                    cardTipTabSecurity: '#group-tabs-categories [slot="content-3"] div.container__description [data-tag-name="bbva-type-text"] p',
                    cardTipTabHeaderAccount: '#group-tabs-categories #tabs #tab-0',
                },
            },
            requiredElements: ['principalPage'],
        });
    }

    async _screenValidation({ item } = {}) {
        switch (item.toLowerCase()) {
            case 'header title':
                await this.modalTipDetail.headerTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'back button':
                await this.modalTipDetail.backButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'menu button':
                await this.modalTipDetail.menuButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'banner image':
                await this.modalTipDetail.bannerImage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'main description':
                await this.modalTipDetail.mainDescription.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'bullets':
                await this.modalTipDetail.bullets.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async selectAccountTips() {
        await (await (await this.principalPage.accountTips.waitForDisplayed({ timeout: config.wait.M })).waitForClickable({ timeout: config.wait.M })).click();
    }

    async selectGoalsTips() {
        await (await (await this.principalPage.goalsTips.waitForDisplayed({ timeout: config.wait.M })).waitForClickable({ timeout: config.wait.M })).click();
    }

    async selectSavingTips() {
        await (await (await this.principalPage.savingTips.waitForDisplayed({ timeout: config.wait.M })).waitForClickable({ timeout: config.wait.M })).click();
    }

    async selectSecurityTips() {
        await (await (await this.principalPage.securityTips.waitForDisplayed({ timeout: config.wait.M })).waitForClickable({ timeout: config.wait.M })).click();
    }

    async selectCard() {
        await (await (await this.principalPage.sectionCard.waitForDisplayed({ timeout: config.wait.M })).waitForClickable({ timeout: config.wait.M })).click();
    }

    async selectItemCard(slider) {
        if (slider === 'sections') {
            await (await (await this.principalPage.sectionCard
                .waitForDisplayed({ timeout: config.wait.M }))
                .waitForClickable({ timeout: config.wait.M }))
                .click();
        } else {
            await (await (await this.principalPage.requestMyMoneyCard
                .waitForDisplayed({ timeout: config.wait.M }))
                .waitForClickable({ timeout: config.wait.M }))
                .click();
        }
    }

    async playVideo() {
        await (await (await this.modalTipDetail.bannerImage.waitForDisplayed({ timeout: config.wait.M })).waitForClickable({ timeout: config.wait.M })).click();
    }

    async selectTab(category) {
        switch (category) {
            case 'account': 
                await this.tabsPage.cardTipTabAccount.waitForDisplayed({timeout: config.wait.L});
                await this.tabsPage.cardTipTabAccount.waitForClickable({timeout: config.wait.M});
                await this.tabsPage.cardTipTabAccount.click();
                break;
            case 'goals':
                await this.tabsPage.cardTipTabGoals.waitForDisplayed({ timeout: config.wait.L });
                await this.tabsPage.cardTipTabGoals.waitForDisplayed({ timeout: config.wait.M });
                await this.tabsPage.cardTipTabGoals.click();
                break;
            case 'saving':
                await this.tabsPage.cardTipTabSaving.waitForDisplayed({ timeout: config.wait.L });
                await this.tabsPage.cardTipTabSaving.waitForDisplayed({ timeout: config.wait.M });
                await this.tabsPage.cardTipTabSaving.click();
                break;
            case 'security':
                await this.tabsPage.cardTipTabSecurity.waitForDisplayed({ timeout: config.wait.L });
                await this.tabsPage.cardTipTabSecurity.waitForDisplayed({ timeout: config.wait.M });
                await this.tabsPage.cardTipTabSecurity.click();
                break;
            case 'header account':
                await this.tabsPage.cardTipTabHeaderAccount.waitForDisplayed({ timeout: config.wait.L });
                await this.tabsPage.cardTipTabHeaderAccount.waitForDisplayed({ timeout: config.wait.M });
                await this.tabsPage.cardTipTabHeaderAccount.click();
                break;
            default:
                break;
        }
    }

}

export default new FinancialEducationPage();
