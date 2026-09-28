import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('cardLinkAndActivationQrCard')
class CardLinkAndActivationQrCard extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-cardLinkAndActivationQrCard[state="active"] bbva-feature-card-link-and-activation-qr-card-mx',
            elements: {
                title: '#landingPage #helpModalHeader #text h1',
                helpButton: '#landingPage #helpModalHeader #btn-help',
                exitButton: '#landingPage #helpModalHeader #btn-close',
                moreInfoLink: '#landingPage #infoMessage bbva-type-link',
                continueButton: '#landingPage #btnLandingContinue',
                cancelButton: '#landingPage #btnLandingCancel',
                exitModal: {
                    properties: {
                        root: '#preventExit div.modal-footer'
                    },
                    exitButton: 'bbva-button-default:nth-child(1)',
                    continueButton: 'bbva-button-default:nth-child(2)'
                },
                faqSection: {
                    properties: {
                        root: 'link-activation-qr-card-activate-faq help-faqs-aem',
                    },
                    header: {
                        faqsHeader: 'bbva-help-modal:not(#content-modal) #helpModalHeader #text h1',
                        faqsTitle: 'bbva-help-modal:not(#content-modal) bbva-header-category bbva-type-text',
                        closeButton: 'bbva-help-modal:not(#content-modal) #helpModalHeader #btn-close',
                    },
                    faqs: {
                        cardWithoutNumbersLink: 'div:nth-child(1) [data-tag-name="bbva-type-link"]',
                        useQrCardCodeLink: 'div:nth-child(2) [data-tag-name="bbva-type-link"]',
                        safeQrLink: 'div:nth-child(3) [data-tag-name="bbva-type-link"]',
                        qrCodeAnotherPersonLink: 'div:nth-child(4) [data-tag-name="bbva-type-link"]',
                        qrCodeTransfersLink: 'div:nth-child(5) [data-tag-name="bbva-type-link"]',
                    }
                },
                faqDetailSection: {
                    properties: {
                        root: 'link-activation-qr-card-activate-faq help-faqs-aem #content-modal',
                    },
                    header: {
                        closeQuestion: '#helpModalHeader #btn-close',
                    },
                    content: {
                        titleQuestion: 'section div.content bbva-type-text',
                        answerQuestion: 'section div.detail-content'
                    }
                }
            },
            requiredElements: [
                'title',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.title.waitForDisplayed();
                break;
            case 'help button':
                await this.helpButton.waitForDisplayed();
                break;
            case 'exit button':
                await this.exitButton.waitForDisplayed();
                break;
            case 'more info link':
                await this.moreInfoLink.waitForDisplayed();
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed();
                break;
            case 'cancel button':
                await this.cancelButton.waitForDisplayed();
                break;
            case 'faqs title':
                await this.faqSection.header.faqsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs header':
                await this.faqSection.header.faqsHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs content':
                await this.faqSection.faqs.cardWithoutNumbersLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title question':
                await this.faqDetailSection.content.titleQuestion.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'answer':
                await this.faqDetailSection.content.answerQuestion.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'close question':
                await this.faqDetailSection.header.closeQuestion.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeOption() {
        await this.exitButton.waitForClickable({timeout: config.wait.S});
        await this.exitButton.click();
    }

    async chooseOptionModal(option) {
        if (option === 'exit button') {
            await this.exitModal.exitButton.waitForClickable({timeout: config.wait.S});
            await this.exitModal.exitButton.click();
        } else {
            await this.exitModal.continueButton.waitForClickable({timeout: config.wait.S});
            await this.exitModal.continueButton.click();
        }
    }

    async accessToMoreInfo() {
        await this.helpButton.waitForClickable({timeout: config.wait.S});
        await this.helpButton.click();
    }

    async accessInfoSection() {
        await this.moreInfoLink.waitForClickable({timeout: config.wait.S});
        await this.moreInfoLink.click();
    }

    async closeMoreInfo() {
        await this.faqSection.header.closeButton.waitForClickable({timeout: config.wait.S});
        await this.faqSection.header.closeButton.click();
    }

    async accessQuestion(subject) {
        switch (subject) {
            case 'card without numbers':
                await this.faqSection.faqs.cardWithoutNumbersLink.waitForClickable({timeout: config.wait.S});
                await this.faqSection.faqs.cardWithoutNumbersLink.click();
                break;
            case 'use qr card code':
                await this.faqSection.faqs.useQrCardCodeLink.waitForClickable({timeout: config.wait.M});
                await this.faqSection.faqs.useQrCardCodeLink.click();
                break;
            case 'safe qr':
                await this.faqSection.faqs.safeQrLink.waitForClickable({timeout: config.wait.S});
                await this.faqSection.faqs.safeQrLink.click();
                break;
            case 'qr code another person':
                await this.faqSection.faqs.qrCodeAnotherPersonLink.waitForClickable({timeout: config.wait.S});
                await this.faqSection.faqs.qrCodeAnotherPersonLink.click();
                break;
            case 'qr code transfers':
                await this.faqSection.faqs.qrCodeTransfersLink.waitForClickable({timeout: config.wait.S});
                await this.faqSection.faqs.qrCodeTransfersLink.click();
                break;
            default:
                await this.faqSection.faqs.cardWithoutNumbersLink.waitForClickable({timeout: config.wait.S});
                await this.faqSection.faqs.cardWithoutNumbersLink.click();
                break;
        }
    }

    async closeFAQDetail() {
        await this.faqDetailSection.header.closeQuestion.waitForClickable({timeout: config.wait.S});
        await this.faqDetailSection.header.closeQuestion.click();
    }
}
export default new CardLinkAndActivationQrCard();
