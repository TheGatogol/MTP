import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';
import BbvaHelpModalSpherica from '../../components/bbva-help-modal-spherica';

@page()
class OnBoardingDigitalAccount extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-openDigitalAccount[state="active"]',
            elements: {
                header: '#headerDigitalAccount',
                returnBtn: '#headerDigitalAccount #btn-left-primary',
                notificationMessage: 'bbva-notification-message',
                considerations: 'bbva-aggregation-bullet-list',
                buttonMoreInfo: 'bbva-notification-message [data-tag-name="bbva-link"]',
                privacyMessage: 'bbva-notification-message + bbva-link',
                btnOpenAccount: '[data-tag-name="bbva-panel-button"]',
                modalMoreInfoAccountDigital: [
                    BbvaHelpModal,
                    {
                        modifiers: '#levelTwoAccountLimits',
                        additionalElements: {
                            contentMoreInfo: '#helpModalContent'
                        }
                    }
                ],
                modalPrivacyNotice: [
                    BbvaHelpModal,
                    {
                        modifiers: '#privacyNoticeModal',
                        additionalElements: {
                            contentPrivacy: '[class="modal-content-wrapper"]'
                        }
                    }
                ]
            },
            elementsSpherica: {
                modalMoreInfoAccountDigital: [
                    BbvaHelpModalSpherica
                ],
                modalPrivacyNotice: [
                    BbvaHelpModalSpherica
                ],
                header: 'bbva-header-main-spherica',
                considerations: 'bbva-aggregation-bullet-list-spherica',
                notificationMessage: 'bbva-notification-message-spherica',
                privacyMessage: 'bbva-notification-message-spherica + bbva-type-link',
                buttonMoreInfo: 'bbva-notification-message-spherica [data-tag-name="bbva-type-link"]',
                btnOpenAccount: '[data-tag-name="bbva-button-default-spherica"]',
                returnBtn: '[data-tag-name="bbva-header-main-spherica"] #btn-close',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async goToAccountDigital() {
        await this.buttonMoreInfo.scrollIntoView();
        await (await (await this.btnOpenAccount.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async closeDigitalAccount() {
        await (await (await this.returnBtn.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async modalInformationPrivacy(modal) {
        switch (modal.toLowerCase()) {
            case 'more information':
                await this.buttonMoreInfo.scrollIntoView();
                await (await (await this.buttonMoreInfo.waitForDisplayed({timeout: config.wait.L})).waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'privacy notice':
                await this.privacyMessage.scrollIntoView();
                await (await (await this.privacyMessage.waitForDisplayed({timeout: config.wait.L})).waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`${modal} is not a valid option`);
        }
    }

    async closeMoreInfoModal(element) {
        switch (element.toLowerCase()) {
            case 'x':
                await (await (await this.modalMoreInfoAccountDigital.closeBtn.waitForAnimation({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'accept':
                await (await (await this.modalMoreInfoAccountDigital.acceptBtn.waitForAnimation({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${element} is not a valid option`);
        }
    }

    async closePrivacyNoticeModal(element) {
        switch (element.toLowerCase()) {
            case 'x':
                await (await (await this.modalPrivacyNotice.closeBtn.waitForAnimation({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'accept':
                await (await (await this.modalPrivacyNotice.acceptBtn.waitForAnimation({timeout: config.wait.M}))
                    .waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${element} is not a valid option`);
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'considerations':
                await (await this.considerations.scrollIntoView()).waitForDisplayed({timeout: config.wait.L});
                break;
            case 'notification message':
                await (await this.notificationMessage.scrollIntoView()).waitForDisplayed({timeout: config.wait.L});
                break;
            case 'privacy message':
                await this.privacyMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'view more info':
                await (await this.buttonMoreInfo.scrollIntoView({block: 'center'})).waitForDisplayed({timeout: config.wait.L});
                break;
            case 'open account':
                await this.btnOpenAccount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header more info modal':
                await this.modalMoreInfoAccountDigital.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description more info modal':
                await this.modalMoreInfoAccountDigital.additionalElements.contentMoreInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button more info modal':
                await this.modalMoreInfoAccountDigital.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button more info modal':
                await this.modalMoreInfoAccountDigital.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header privacy modal':
                await this.modalPrivacyNotice.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description privacy modal':
                await this.modalPrivacyNotice.additionalElements.contentPrivacy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button privacy modal':
                await this.modalPrivacyNotice.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button privacy modal':
                await this.modalPrivacyNotice.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new OnBoardingDigitalAccount();
