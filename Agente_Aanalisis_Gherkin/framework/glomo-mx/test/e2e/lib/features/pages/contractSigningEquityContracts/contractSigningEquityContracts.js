import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class ContractSigningEquityContracts extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-deferredSignatureEquityContract[state="active"]',
            elements: {
                mainModal: {
                    properties: {
                        root: '[data-tag-name="bbva-help-modal"][avoid-icon-close-modal]'
                    },
                    header: '#helpModalHeader',
                    closeButton: '#btn-close',
                },
                contractNotAvailableModal: {
                    properties: {
                        root: '[data-tag-name="bbva-help-modal-spherica"]'
                    },
                    header: '#helpModalHeader',
                    closeButton: '#btn-close',
                    helpModalTitle: '#helpModalTitle',
                    typeText: '[data-tag-name="bbva-type-text-spherica"]',
                    notificationMessage: '[data-tag-name="bbva-notification-message-spherica"]',
                },
                multistep: {
                    properties: {
                        root: '#expandableMultistepDeferredSignature'
                    },
                    selectedTermsConditions: '#stepTermsAndConditions .expandable-step-content .list-check [data-tag-name="bbva-form-checkbox"]:nth-child(__INDEX__)',
                    continueTermsConditions: '#stepTermsAndConditions .expandable-step-content #stepTermsAndConditionsBtn',
                    confirmButton: '#confirmDeferredSignature'
                },
                modalExit: {
                    properties: {
                        root: '[data-tag-name="bbva-help-modal"][modal-type="caution"]'
                    },
                    header: '#helpModalHeader',
                    closeButton: '#btn-close',
                    helpModalTitle: '#helpModalTitle',
                    helpModalContent: '#helpModalContent',
                    btnAccept: '.modal-footer .footer-button',
                    btnLink: '.modal-footer .link'
                },
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                ],
            },
            requiredElements: ['root']
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'modal exit header':
                await this.modalExit.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal exit close button':
                await this.modalExit.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal exit title':
                await this.modalExit.helpModalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal exit body':
                await this.modalExit.helpModalContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal exit accept button':
                await this.modalExit.btnAccept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal exit link button':
                await this.modalExit.btnLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract not available modal header':
                await this.contractNotAvailableModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract not available modal close button':
                await this.contractNotAvailableModal.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract not available modal title':
                await this.contractNotAvailableModal.helpModalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract not available modal body':
                await this.contractNotAvailableModal.typeText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract not available modal notification message':
                await this.contractNotAvailableModal.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry modal header':
                await this.dialogOperations.headerHalf.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry modal close button':
                await this.dialogOperations.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry modal message':
                await this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry modal accept button':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry modal cancel button':
                await this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async executeStepAction(step) {
        switch (step.toLowerCase()) {
            case 'confirm operation':
                await (await this.multistep.selectedTermsConditions.specifySelector({placeholder: '__INDEX__', value: 1})
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                await (await this.multistep.selectedTermsConditions.specifySelector({placeholder: '__INDEX__', value: 2})
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                await (await this.multistep.continueTermsConditions.waitForClickable({timeout: config.wait.M})).click();
                await (await this.multistep.confirmButton.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'close operative':
                await (await this.mainModal.closeButton.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`The step: ${step} is not implemented`);
        }
    }
}

export default new ContractSigningEquityContracts();
