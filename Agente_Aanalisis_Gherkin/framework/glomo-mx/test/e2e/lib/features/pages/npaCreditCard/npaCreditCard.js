import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaHelpModal from '../../components/bbva-help-modal';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class NpaCreditCard extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-npaCreditCard[state="active"]',
            elements: {
                offerPage: [BbvaHelpModal, {
                    prefix: 'card-origination-non-pre-approved-credit-card-mx-offer-page',
                    additionalElements: {
                        closeButton: '[data-tag-name="bbva-header-main"][text="Solicitud de tarjeta de crédito"] #btn-close.icon span',
                        panelTitle: 'bbva-panel-container [font-type="title-secondary"]',
                        linkDetail: '[data-tag-name="bbva-type-link"]',
                        listBenefits: '[data-tag-name="bbva-list-bullet"]'
                    }
                }],
                checksPage: [BbvaHelpModal, {
                    prefix: 'card-origination-non-pre-approved-credit-card-mx-checks-page',
                    additionalElements: {
                        closeButton: '[data-tag-name="bbva-header-main"][text="Solicitud de tarjeta de crédito"] #btn-close',
                        panel: 'bbva-panel-container',
                        panelTitle: 'bbva-panel-container [font-type="title-secondary"]',
                        panelSubtitle: '[data-tag-name="bbva-header-category"]',
                        subtitleBureau: '.list [font-type="body"]',
                        textChecks: 'div.header [data-tag-name="bbva-type-text"] p.text',
                        linkAuthorization: 'div.panel-content.panel-content-link-hover',
                        checkMain: '[data-tag-name="bbva-form-checkbox"] [name="main"]',
                        checkOnly: '[data-tag-name="bbva-form-checkbox-input"]'
                    }
                }],
                successPage: [BbvaHelpModal, {
                    prefix: 'card-origination-non-pre-approved-credit-card-mx-success-page',
                    additionalElements: {
                        closeButton: '[data-tag-name="bbva-header-main"][text="Solicitud de tarjeta de crédito"] #btn-close.icon span',
                    }
                }],
                exitProcess: {
                    properties: {
                        root: '#exit-process'
                    },
                    closeButton: '[data-tag-name="bbva-header-main"][text="Salir"] #btn-close',
                    buttonExit: '.footer-button',
                    buttonBack: '.footer-button.link'
                },
                lackOfInformation: {
                    properties: {
                        root: '#lackOfInformation'
                    },
                    closeButton: '[data-tag-name="bbva-header-main"][text="Solicitud de tarjeta de crédito"] #btn-close.icon span',
                    buttonProfile: '.footer-button',
                    buttonExit: '.footer-button.link'
                },
                genericRejection: {
                    properties: {
                        root: '#rejection'
                    },
                    closeButton: '[data-tag-name="bbva-header-main"][text="Solicitud de tarjeta de crédito"] #btn-close.icon span',
                    buttonExit: '[data-tag-name="bbva-button-default"]',
                },
                internalBureau: {
                    properties: {
                        root: '#internalBureau'
                    },
                    title: '#title-text',
                    bullets: '#helpModalContent',
                    buttonExit: '.footer-button',
                    buttonInfo: '.footer-button.link'
                },
                externalLink: {
                    properties: {
                        root: '#externalLink'
                    },
                    closeButton: '[data-tag-name="bbva-header-main"][text="Salir de la app"] #btn-close.icon span',
                    buttonBack: '.footer-button.link'
                },
                authorizationClose: '#authorization [data-tag-name="bbva-header-main"][text="Autorización de consulta de historial de crédito"] #btn-close',
                benefitsClose: '#benefits [data-tag-name="bbva-header-main"][text="Detalles del beneficio"] #btn-close.icon span',
                retryButton: '#unavailable .footer-button'
            },
            requiredElements: [
                'offerPage.acceptBtn',
            ],
        });
    }

    async _screenValidation({ item } = {}) {
        switch (item.toLowerCase()) {
            case 'panel offer title':
                await this.offerPage.additionalElements.panelTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link detail':
                await this.offerPage.additionalElements.linkDetail.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'list benefits':
                await this.offerPage.additionalElements.listBenefits.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button continue':
                await this.offerPage.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'close button checks':
                await this.checksPage.additionalElements.closeButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'panel checks':
                await this.checksPage.additionalElements.panel.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'panel checks title':
                await this.checksPage.additionalElements.panelTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'panel checks subtitle':
                await this.checksPage.additionalElements.panelSubtitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'panel bureau':
                await this.checksPage.additionalElements.subtitleBureau.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text checks':
                await this.checksPage.additionalElements.textChecks.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'link authorization':
                await this.checksPage.additionalElements.linkAuthorization.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'check main':
                await this.checksPage.additionalElements.checkMain.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'check only':
                await this.checksPage.additionalElements.checkOnly.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button continue checks':
                await this.checksPage.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'internal bureau title':
                await this.internalBureau.title.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'internal bureau bullets':
                await this.internalBureau.bullets.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'internal bureau button exit':
                await this.internalBureau.buttonExit.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'internal bureau button info':
                await this.internalBureau.buttonInfo.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async goProfileFromLackOfInfoModal() {
        await this.lackOfInformation.buttonProfile.waitForDisplayed({ timeout: config.wait.M });
        await this.lackOfInformation.buttonProfile.click();
    }

    async _exitLackOfInfoModal() {
        await this.lackOfInformation.buttonExit.waitForDisplayed({ timeout: config.wait.M });
        await this.lackOfInformation.buttonExit.click();
    }

    async _closeLackOfInfoModal() {
        await this.lackOfInformation.closeButton.waitForDisplayed({ timeout: config.wait.M });
        await this.lackOfInformation.closeButton.click();
    }

    async exitOfferPage() {
        await this.offerPage.additionalElements.closeButton.waitForDisplayed({ timeout: config.wait.M });
        await this.offerPage.additionalElements.closeButton.click();
    }

    async continueOfferPage() {
        await this.offerPage.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
        await this.offerPage.acceptBtn.click();
    }

    async openBenefitsModal() {
        await this.offerPage.additionalElements.linkDetail.waitForDisplayed({ timeout: config.wait.M });
        await this.offerPage.additionalElements.linkDetail.click();
    }

    async closeBenefitsModal() {
        await this.benefitsClose.waitForDisplayed({ timeout: config.wait.M });
        await this.benefitsClose.click();
    }

    async _selectChecksMain() {
        await this.checksPage.additionalElements.checkMain.waitForDisplayed({ timeout: config.wait.M });
        await this.checksPage.additionalElements.checkMain.click();
    }

    async _selectChecksOnly() {
        await this.checksPage.additionalElements.checkOnly.waitForDisplayed({ timeout: config.wait.M });
        await this.checksPage.additionalElements.checkOnly.click();
    }

    async _closeChecksPage() {
        await this.checksPage.additionalElements.closeButton.waitForDisplayed({ timeout: config.wait.M });
        await this.checksPage.additionalElements.closeButton.click();
    }

    async _continueChecksPage() {
        await this.checksPage.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
        await this.checksPage.acceptBtn.click();
    }

    async openAuthorizationModal() {
        await this.checksPage.additionalElements.linkAuthorization.waitForDisplayed({ timeout: config.wait.M });
        await this.checksPage.additionalElements.linkAuthorization.click();
    }

    async closeAuthorizationModal() {
        await this.authorizationClose.waitForDisplayed({ timeout: config.wait.M });
        await this.authorizationClose.click();
    }

    async _backChecksPage() {
        await this.exitProcess.buttonBack.waitForDisplayed({ timeout: config.wait.M });
        await this.exitProcess.buttonBack.click();
    }

    async exitChecksPage() {
        await this.exitProcess.buttonExit.waitForDisplayed({ timeout: config.wait.M });
        await this.exitProcess.buttonExit.click();
    }

    async _closeExitModal() {
        await this.exitProcess.closeButton.waitForDisplayed({ timeout: config.wait.M });
        await this.exitProcess.closeButton.click();
    }

    async _continueOTP() {
        await this.fillOtp('86372006');
    }

    async _closeGenericRejectionModal() {
        await this.genericRejection.closeButton.waitForDisplayed({ timeout: config.wait.M });
        await this.genericRejection.closeButton.click();
    }

    async _exitGenericRejectionModal() {
        await this.genericRejection.buttonExit.waitForDisplayed({ timeout: config.wait.M });
        await this.genericRejection.buttonExit.click();
    }

    async _closeExternalLinkModal() {
        await this.externalLink.closeButton.waitForDisplayed({ timeout: config.wait.M });
        await this.externalLink.closeButton.click();
    }

    async _exitExternalLinkModal() {
        await this.externalLink.buttonBack.waitForDisplayed({ timeout: config.wait.M });
        await this.externalLink.buttonBack.click();
    }

    async continueSuccessPage() {
        await this.successPage.acceptBtn.waitForDisplayed({ timeout: config.wait.M });
        await this.successPage.acceptBtn.click();
    }

    async successCase() {
        await this._selectChecksOnly();
        await this._continueChecksPage();
        await this._continueOTP();
    }

    async rejectionCase() {
        await this._selectChecksMain();
        await this._continueChecksPage();
        await this._continueOTP();
    }

    async clickCloseChecksPage() {
        await this._selectChecksMain();
        await this._closeChecksPage();
    }

    async returnChecksPage(value) {
        if(value.toLowerCase() === 'close') {
            await this._closeExitModal();
        } else {
            await this._backChecksPage();
        }
    }

    async returnEntryPoint(value) {
        if(value.toLowerCase() === 'close') {
            await this._closeLackOfInfoModal();
        } else {
            await this._exitLackOfInfoModal();
        }
    }

    async closeRejectionModal(value) {
        if (value.toLowerCase() === 'close') {
            await this._closeGenericRejectionModal();
        } else {
            await this._exitGenericRejectionModal();
        }
    }

    async closeExternalLinkModal(value) {
        if (value.toLowerCase() === 'close') {
            await this._closeExternalLinkModal();
        } else {
            await this._exitExternalLinkModal();
        }
    }

    async moreInformation() {
        await this.internalBureau.buttonInfo.waitForDisplayed({ timeout: config.wait.M });
        await this.internalBureau.buttonInfo.click();
    }

    async closeWaitingModal() {
        await this.successPage.additionalElements.closeButton.waitForDisplayed({ timeout: config.wait.M });
        await this.successPage.additionalElements.closeButton.click();
    }

}

export default new NpaCreditCard();
