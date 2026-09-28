import AbstractGlomoPage from '../abstract-glomo-page.js';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page('cardCutOffDate')
class CutOffDate extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardCutOffDate[state="active"]',
            elements: {
                cutOffDateComponent: '[data-tag-name="card-configuration-cut-off-date"]',
                cutOffDateModal: {
                    properties: {
                        root: '[data-tag-name="card-configuration-cut-off-date"]'
                    },
                    cutOffDateSelection: {
                        properties: {
                            root: '.date-selection'
                        },
                        header: '#helpModalHeader',
                        headerCloseButton: '#helpModalHeader #btn-close',
                        currentPaymentDate: '.content-multistep .card-configuration-cut-off-date-container .body-content-wrapper .step-container-opened .margin-next-dates',
                        dateOptions: '#radioButtons',
                        dateOption: '#radioButtons bbva-form-radio-button ul li:nth-child(1) bbva-form-radio-button-input',
                        confirmButton: '.content-multistep .card-configuration-cut-off-date-container .body-content-wrapper .summary-step-container .general-section [data-tag-name="bbva-button-default"]'
                    },
                    cutOffDateSuccess: {
                        properties: {
                            root: '[data-tag-name="bbva-help-modal"][data-selector="modal-successModal"]'
                        },
                        header: '#helpModalHeader',
                        headerCloseButton: '#helpModalHeader #btn-close',
                        panelSuccess: 'div[slot="slot-content"] .success-wrapper div.success-header',
                        newCutOffDate: 'div[slot="slot-content"] .success-wrapper div.success-main div.key-value-content',
                        notificationMessage: 'div[slot="slot-content"] .success-wrapper div.success-main div.value-content'
                    },
                    restrictiveErrorModal: {
                        properties: {
                            root: '[data-tag-name="bbva-help-modal"].restrictive-modals'
                        },
                        header: '#helpModalHeader',
                        headerCloseButton: '#helpModalHeader #btn-close',
                        warningIcon: '#helpModalTitle',
                        content: '#helpModalContent',
                        acceptButton: 'div div.content .help-modal div.modal-main div.modal-footer slot div.slot-footer [data-tag-name="bbva-button-default"].footer-button',
                        cancelButton: 'div div.content .help-modal div.modal-main div.modal-footer slot div.slot-footer [data-tag-name="bbva-button-default"].link'
                    }
                }
            },
            requiredElements: ['cutOffDateModal']
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header success':
                await this.cutOffDateModal.cutOffDateSuccess.header.waitForDisplayed();
                break;
            case 'panel success':
                await this.cutOffDateModal.cutOffDateSuccess.panelSuccess.waitForDisplayed();
                break;
            case 'new cut off date':
                await this.cutOffDateModal.cutOffDateSuccess.newCutOffDate.waitForDisplayed();
                break;
            case 'email notification message success':
                await this.cutOffDateModal.cutOffDateSuccess.notificationMessage.waitForDisplayed();
                break;
            case 'header cut off date':
                await this.cutOffDateModal.cutOffDateSelection.header.waitForDisplayed();
                break;
            case 'header close button':
                await this.cutOffDateModal.cutOffDateSelection.headerCloseButton.waitForDisplayed();
                break;
            case 'current payment date':
                await this.cutOffDateModal.cutOffDateSelection.currentPaymentDate.waitForDisplayed();
                break;
            case 'date options':
                await this.cutOffDateModal.cutOffDateSelection.dateOptions.waitForDisplayed();
                break;
            case 'confirm button':
                await this.cutOffDateModal.cutOffDateSelection.confirmButton.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectDate(option) {
        if (option === 'selects') {
            await this.cutOffDateModal.cutOffDateSelection.dateOption.waitForDisplayed({timeout: config.wait.L});
            await this.cutOffDateModal.cutOffDateSelection.dateOption.waitForClickable();
            await this.cutOffDateModal.cutOffDateSelection.dateOption.click();
        } else {
            const { dateSelected } = global.user;
            await this.cutOffDateComponent.execute({
                script: (value) => {
                    this._selectedPaymentDateId = value;
                },
                args: [dateSelected],
            });
        }
    }

    async confirmOperation() {
        await this.cutOffDateModal.cutOffDateSelection.confirmButton.waitForDisplayed();
        await this.cutOffDateModal.cutOffDateSelection.confirmButton.waitForEnabled();
        await this.cutOffDateModal.cutOffDateSelection.confirmButton.click();
    }

    async interactsWithModal(action) {
        switch (action.toLowerCase()) {
            case 'accepts':
                await this.cutOffDateModal.restrictiveErrorModal.acceptButton.waitForDisplayed({timeout: config.wait.L});
                await this.cutOffDateModal.restrictiveErrorModal.acceptButton.waitForClickable();
                await this.cutOffDateModal.restrictiveErrorModal.acceptButton.click();
                break;
            case 'exits':
                await this.cutOffDateModal.restrictiveErrorModal.cancelButton.waitForDisplayed({timeout: config.wait.L});
                await this.cutOffDateModal.restrictiveErrorModal.cancelButton.waitForClickable();
                await this.cutOffDateModal.restrictiveErrorModal.cancelButton.click();
                break;
            case 'closes':
                await this.cutOffDateModal.restrictiveErrorModal.headerCloseButton.waitForDisplayed({timeout: config.wait.L});
                await this.cutOffDateModal.restrictiveErrorModal.headerCloseButton.waitForClickable();
                await this.cutOffDateModal.restrictiveErrorModal.headerCloseButton.click();
                break;
            default:
                throw new Error(`Action '${action}' is not implemented`);
        }
    }

    async exitOperative(action) {
        await this.cutOffDateModal.cutOffDateSelection.headerCloseButton.waitForDisplayed({timeout: config.wait.L});
        await this.cutOffDateModal.cutOffDateSelection.headerCloseButton.waitForClickable();
        await this.cutOffDateModal.cutOffDateSelection.headerCloseButton.click();
        if (action !== 'accepts') {
            await this.interactsWithModal(action);
        }
    }
}

export default new CutOffDate();
