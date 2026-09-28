import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
@page()
class PinRequest extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pinRequest[state="active"]',
            elements: {
                headerText: '#header-main #text span',
                btnExit: '#header-main #btn-right-primary',
                inputField: '[data-tag-name="bbva-transition-container"] div [data-tag-name="bbva-form-password"] input',
                cleanButton: '#btnMainIcon[role="button"]',
                infoIcon: 'div.label-help-text div.input-icon cells-atom-icon',
                labelError: 'div.label-help-text div.error-message span.error-text',
                enterCVVLabel: 'glomo-cvv-request div span.indication-text',
                cardDataLabel: 'glomo-cvv-request div div.title-pin-container span',
                iconBoxMessage: 'bbva-notification-message [data-tag-name="bbva-icon"]',
                boxMessage: 'bbva-notification-message [data-tag-name="bbva-text"]',
                labelDataCard: '#header-category [data-tag-name="bbva-text"]',
                linkDataCard: '#header-category [data-tag-name="bbva-icon"]',
                labelInputCvv: '[data-tag-name="bbva-form-password"] [data-tag-name="bbva-type-text"]#labelOutText',
                slotCvv: '[data-tag-name="bbva-form-password"] [slot="_input"]',
                messageThirdDigits: '[data-tag-name="bbva-form-password"] [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"]',
                btnContinueCvv: 'bbva-button-default div [data-tag-name="bbva-text"]',
                errorIncompleteCvv: '[data-tag-name="bbva-form-password"][invalid] [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"]',
                iconWarning: 'pin-view-modal-manager [data-tag-name="bbva-help-modal"] #helpModalTitle [data-tag-name="bbva-icon"]',
                titleWarning: 'pin-view-modal-manager [data-tag-name="bbva-help-modal"] #helpModalTitle',
                btnExitWarning: 'pin-view-modal-manager [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"]',
                btnContinueWarning: 'pin-view-modal-manager [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-link"]',
                messageCvv: 'pin-view-modal-manager [data-tag-name="bbva-help-modal"] #helpModalContent',
                btnCvvExit: 'pin-view-modal-manager [data-tag-name="bbva-help-modal"] #helpModalHeader #btn-right-primary',
                labelCvv: 'pin-view-modal-manager [data-tag-name="bbva-help-modal"] #helpModalHeader [data-tag-name="bbva-text"]',

                //Buttons
                continueBtn: 'cells-st-button.secondary button',

                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
            },
            elementsSpherica: {
                headerText: '#header-main #text h1',
                btnExit: '#header-main #header-main-btn-close',
                inputField: '[data-tag-name="bbva-transition-container"] div [data-tag-name="bbva-form-input"] input',
                iconBoxMessage: 'bbva-notification-message [data-tag-name="bbva-type-icon"]',
                boxMessage: 'bbva-notification-message [data-tag-name="bbva-type-text"]',
                labelDataCard: '.margin-title h1',
                linkDataCard: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-password"] div.label-out [data-tag-name="bbva-button-default"]',
                labelInputCvv: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-type-text"]#labelOutText',
                slotCvv: '[data-tag-name="bbva-form-input"] [slot="_input"]',
                messageThirdDigits: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"]',
                btnContinueCvv: '#button-getcvv',
                errorIncompleteCvv: '[data-tag-name="bbva-form-input"][invalid] [data-tag-name="bbva-notification-help"] [data-tag-name="bbva-type-text"]',
                iconWarning: 'pin-view-modal-manager-spherica [data-tag-name="bbva-help-modal"] #helpModalTitle [data-tag-name="bbva-type-icon"]',
                titleWarning: 'pin-view-modal-manager-spherica [data-tag-name="bbva-help-modal"] #helpModalTitle',
                btnExitWarning: 'pin-view-modal-manager-spherica [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"]',
                btnContinueWarning: 'pin-view-modal-manager-spherica [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"]',
                messageCvv: 'pin-view-modal-manager-spherica [data-tag-name="bbva-help-modal"] #helpModalContent',
                btnCvvExit: 'pin-view-modal-manager-spherica [data-tag-name="bbva-help-modal"] #helpModalHeader #btn-close',
                labelCvv: 'pin-view-modal-manager-spherica [data-tag-name="bbva-help-modal"] #helpModalHeader [data-tag-name="bbva-type-text"]',

            },

            dialogOperations: [
                GlomoAlertManager,
                {
                    paragraphElements: {
                        iconMessage: 'div.icon-container',
                        btnAccept: 'glomo-alert-manager.app__transactional cells-alert-box#modal cells-bottom-modal#modal div.buttons-container cells-st-button.btn.main.secondary.btn--l button#acceptButton',
                    },
                }
            ],

            requiredElements: [
                'headerText',
                'btnExit',
            ]
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'info icon':
                await this.infoIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'enter cvv label':
                await this.enterCVVLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card data label':
                await this.cardDataLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button exit':
                await this.btnExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header text':
                await this.headerText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon box message':
                await this.iconBoxMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'box message':
                await this.boxMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label data card':
                await this.labelDataCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button data card':
                await this.linkDataCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label input cvv':
                await this.labelInputCvv.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message third digits':
                await this.messageThirdDigits.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message incomplete cvv':
                await this.errorIncompleteCvv.waitForDisplayed({
                    timeout: config.wait.M,
                    reverse: value === 'not visible'
                });
                break;
            case 'button continue cvv':
                await (await this.btnContinueCvv.waitForDisplayed({timeout: config.wait.L}))
                    .waitForEnabled({timeout: config.wait.L, reverse: value === 'disabled'});
                break;
            case 'icon warning':
                await this.iconWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message warning':
                await this.titleWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message cvv':
                await this.messageCvv.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn help cvv exit':
                await this.btnCvvExit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label cvv':
                await this.labelCvv.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn exit warning':
                await this.btnExitWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'btn continue warning':
                await this.btnContinueWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async save() {
        await (await this.continueBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'continue button':
                await this.dialogOperations.elementValidation({item: await this.dialogOperations.ACCEPT_BUTTON}, {forceScroll: true});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async entersCvv(cvv) {
        await this.slotCvv.waitForEnabled({timeout: config.wait.L});
        await this.slotCvv.click();
        await this.slotCvv.setValue({value: cvv});
    }

    async continueOperative(operative) {
        switch (operative.toLowerCase()) {
            case 'continue':
                await this.btnContinueCvv.waitForEnabled({timeout: config.wait.L});
                await this.btnContinueCvv.click();
                break;
            case 'exit':
                await this.btnExit.waitForEnabled({timeout: config.wait.L});
                await this.btnExit.click();
                break;
            case 'help':
                await this.linkDataCard.waitForEnabled({timeout: config.wait.L});
                await this.linkDataCard.click();
                break;
            case 'understand help':
                await this.btnExitWarning.waitForEnabled({timeout: config.wait.L});
                await this.btnExitWarning.click();
                break;
            case 'exit help':
                await this.btnCvvExit.waitForEnabled({timeout: config.wait.L});
                await this.btnCvvExit.click();
                break;
            default:
                throw new Error(`The button ${operative} is not implemented`);
        }
    }

    async goBackToDetailCard() {
        await this.btnExitWarning.waitForEnabled({timeout: config.wait.L});
        await this.btnExitWarning.click();
    }
}

export default new PinRequest();
