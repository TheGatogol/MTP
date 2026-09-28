import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class PfmSettings extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-adviceConfiguration[state="active"]',
            elements: {
                products: {
                    properties: {
                        root: {
                            web: '[data-id="modalProducts"]',
                            isWithoutRoot: true
                        }
                    },
                    header: '[data-tag-name="bbva-header-main"]#helpModalHeader',
                    buttonAccept: '.modal-footer [data-tag-name="bbva-button-default"]',
                    productToogle: '.content-wrapper [data-tag-name="advice-fh-configuration-gl-products"] [data-tag-name="bbva-form-toggle-input"][name="__TYPE__"]',
                    selectMonth: '[data-tag-name="advice-fh-configuration-gl-products"] [data-tag-name="bbva-form-select"] button',
                    selectMonthValue: '[data-tag-name="advice-fh-configuration-gl-products"] [data-tag-name="bbva-form-select"] [data-tag-name="bbva-form-option"]',
                    titleInfo: '[data-tag-name="bbva-header-main"]#helpModalHeader',
                    headerRightButton: '[data-tag-name="bbva-header-main"]#helpModalHeader [data-id="iconsRight"] #btn-close',
                },
                confirmModal: {
                    properties: {
                        root: {
                            web: '#modal-confirmation-message',
                            isWithoutRoot: true
                        }
                    },
                    buttonConfirmChange: '[data-tag-name="bbva-button-default"]'
                },
                modalsContainer: {
                    properties: {
                        root: {
                            web: '[data-id="modalConfirmationExit"]',
                            isWithoutRoot: true
                        }
                    },
                    modalHeaderText: '.help-modal .modal-header [data-tag-name="bbva-header-main"]#helpModalHeader .header  #heading',
                    modalHeaderButton: '.help-modal .modal-header [data-tag-name="bbva-header-main"]#helpModalHeader [data-id="iconsRight"] button',
                    modalPrimaryText: '.help-modal .modal-main .modal-container .modal-content-wrapper #helpModalTitle [data-tag-name="bbva-type-text"]',
                    modalSecondaryText: '.help-modal .modal-main .modal-container .modal-content-wrapper #helpModalContent [data-tag-name="bbva-type-text"]',
                    modalExitButton: '.help-modal .modal-main .modal-footer .slot-footer [data-tag-name="bbva-button-default"]'
                },
                errorModalContainer: {
                    properties: {
                        root: {
                            web: '[data-id="modalError"]',
                            isWithoutRoot: true
                        }
                    },
                    errorModalHeaderButton: '.content .help-modal .modal-header #helpModalHeader [data-id="iconsRight"] #btn-close',
                    errorModalHeaderButtonText: '.content .help-modal .modal-header #helpModalHeader [data-id="iconsRight"] #btn-close [data-tag-name="bbva-type-text"]',
                    errorModalText: '.content .help-modal .modal-main .modal-container .modal-content-wrapper #helpModalContent .slot-content [data-tag-name="bbva-type-text"]',
                    errorModalButton: '.content .help-modal .modal-main .modal-footer .slot-footer [data-tag-name="bbva-button-default"]'
                },
            },
            elementsSpherica: {
                products: {
                    properties: {
                        root:{
                            web: '[data-id="modalProducts"]',
                            isWithoutRoot: true
                        },
                    },
                    productToogle: '[data-tag-name="advice-fh-configuration-gl-products"] [data-tag-name="bbva-form-toggle-input"][name="__TYPE__"]',
                    header: '[data-tag-name="bbva-header-main"]#helpModalHeader',
                },
            },
            requiredElements: [
                'products.header'
            ]
        });
    }

    async waitForLoaded(timeOut = config.wait.M) {
        await super.waitForLoaded(timeOut);
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.products.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'titleinfo':
                await this.products.titleInfo.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'producttoogle':
                await (await this.products.productToogle.specifySelector({
                    placeholder: '__TYPE__',
                    value: value
                })
                ).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'selectmonth':
                await this.products.selectMonth.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'buttonaccept':
                await this.products.buttonAccept.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modalheadertext':
                await this.modalsContainer.modalHeaderText.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modalheaderbutton':
                await this.modalsContainer.modalHeaderButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modalprimarytext':
                await this.modalsContainer.modalPrimaryText.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modalsecondarytext':
                await this.modalsContainer.modalSecondaryText.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modalexitbutton':
                await this.modalsContainer.modalExitButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'errormodalheaderbutton':
                await this.errorModalContainer.errorModalHeaderButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'errormodalheaderbuttontext':
                await this.errorModalContainer.errorModalHeaderButtonText.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'errormodaltext':
                await this.errorModalContainer.errorModalText.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'errormodalbutton':
                await this.errorModalContainer.errorModalButton.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async validateConfigButtonSettings(index) {
        await this.buttonConfig.specifySelector({placeholder: '_INDEX_', value: index}).waitForDisplayed({
            timeout: config.wait.M,
            errorMessage: `The ${this.buttonConfig} is not visible`
        });
    }

    async accessProducts() {
        await this.buttonConfig.specifySelector({placeholder: '_INDEX_', value: 1}).click();
    }

    async changeConfigProducts() {
        await this.products.selectMonth.waitForDisplayed({timeout: config.wait.M});
        await this.products.selectMonth.click();
        await this.waitForElementsExist(this.products.selectMonthValue);
        const month = (await this.products.selectMonthValue.elements()).value[2];
        await (await (await month.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
        await this.products.buttonAccept.waitForDisplayed({timeout: config.wait.S});
        await this.products.buttonAccept.click();
        await this.confirmModal.buttonConfirmChange.waitForDisplayed({timeout: config.wait.S});
        await this.confirmModal.buttonConfirmChange.click();
    }

    async changeConfigWithoutSaving(){
        await this.products.selectMonth.waitForDisplayed({timeout: config.wait.M});
        await this.products.selectMonth.click();
        await this.waitForElementsExist(this.products.selectMonthValue);
        const month = (await this.products.selectMonthValue.elements()).value[2];
        await (await (await month.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async selectsRightOption() {
        await this.products.headerRightButton.waitForDisplayed({timeout: config.wait.M});
        await this.products.headerRightButton.click();
    }
}

export default new PfmSettings();
