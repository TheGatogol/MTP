import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica.js';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

const BRAND = {
    'first':'bannerGoogle Play',
    'second':'bannerUber',
    'third':'bannerUber eats',
    'fourth':'bannerXbox Gift Card',
    'fifth':'bannerXbox Live Gold',
    'sixth':'bannerXbox Game Ultimate',
    'seventh':'bannerSpotify',
    'eighth':'bannerAmazon',
    'ninth':'bannerPlayStation',
    'tenth':'bannerMinecraft',
    'eleventh':'bannerBattle.Net'
};

@page()
class BlackhawkCardList extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-blackhawkPurchase[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                informationMessagge: 'cells-text-description#blackhawk-purchase-text-description',
                listBrandsBlock: 'cells-oc-banner-list ul.oc-banner-list',
                listCards: {
                    properties: { root: 'cells-oc-banner-list ul.oc-banner-list' },
                    iconCard: 'li[id="__BRAND__"] cells-oc-banner iron-collapse img',
                    title: 'li[id="__BRAND__"] cells-oc-banner iron-collapse h1',
                    informationCardText: 'li[id="__BRAND__"] cells-oc-banner iron-collapse p',
                    informationButtonCard:'li[id="__BRAND__"] cells-oc-banner cells-st-button button.banner__link',
                    availableBrandbuttonCard: 'li[id="__BRAND__"] cells-oc-banner cells-st-button.primary',
                },
                notificationMessage: {
                    properties: { root: 'cells-icon-message-change-data' },
                    informationBox: 'cells-icon-message',
                    moreInfoBtn: 'cells-st-link'
                },
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            titleText: 'div.templates-wrapper div.paragraph-template h2',
                            textInformation: 'div.templates-wrapper div.text-with-icon p',
                        }
                    }
                ],
            },
            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                informationMessagge: 'cells-text-description-spherica#blackhawk-purchase-text-description',
                listBrandsBlock: 'cells-oc-banner-list-spherica ul.oc-banner-list',
                listCards: {
                    properties: { root: 'cells-oc-banner-list-spherica ul.oc-banner-list' },
                    iconCard: 'li[id="__BRAND__"] cells-oc-banner-spherica iron-collapse img',
                    title: 'li[id="__BRAND__"] cells-oc-banner-spherica iron-collapse h1',
                    informationCardText: 'li[id="__BRAND__"] cells-oc-banner-spherica iron-collapse p',
                    informationButtonCard:'li[id="__BRAND__"] cells-oc-banner-spherica cells-st-button-spherica button.banner__link',
                    availableBrandbuttonCard: 'li[id="__BRAND__"] cells-oc-banner-spherica cells-st-button-spherica button.banner__button',
                },
                notificationMessage: {
                    properties: { root: 'cells-icon-message-change-data-spherica' },
                    informationBox: 'cells-icon-message-spherica',
                    moreInfoBtn: 'cells-st-link-spherica'
                },
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            titleText: 'div.templates-wrapper div.paragraph-template h2',
                            textInformation: 'div.templates-wrapper div.text-with-icon p',
                        }
                    }
                ],
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async goToSectionInfoCard() {
        await this.notificationMessage.informationBox.scrollIntoView();
        await (await this.notificationMessage.moreInfoBtn.waitForClickable({timeout: config.wait.M})).click();
        await this.isModalPresent();
    }

    async infoBrandCard(brand) {
        const element = this.listCards.informationButtonCard.specifySelector({placeholder: '__BRAND__', value:BRAND[brand]});
        await (await element.waitForClickable({timeout: config.wait.M})).click();
        await this.isModalPresent();
    }

    async accessToFaqs() {
        await this.header.actionRight();
    }

    async accessToCardPurchase(brand) {
        const element = this.listCards.availableBrandbuttonCard.specifySelector({placeholder: '__BRAND__', value:BRAND[brand]});
        await (await element.waitForClickable({timeout: config.wait.M})).click();
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'header':
                await (this.header.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'information message':
                await (this.informationMessagge.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'list of brands':
                await (this.listBrandsBlock.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'notification message':
                await (this.notificationMessage.informationBox.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'title':
                await (this.dialogOperations.additionalElements.titleText.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'information text':
                await (this.dialogOperations.additionalElements.textInformation.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'icon image':
                await (this.dialogOperations.heroImage.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'container image':
                await (this.dialogOperations.containerImage.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'close button':
                await (this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'modal header':
                await (this.dialogOperations.header.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'error title':
                await (this.dialogOperations.titles.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'error text':
                await (this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'retry button':
                await (this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'cancel button':
                await (this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'close button right':
                await (this.dialogOperations.closeBtn.waitForDisplayed({timeout: config.wait.M}));
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new BlackhawkCardList();
