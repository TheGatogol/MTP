import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page} from '@csqe/radish';

import BbvaHeaderMain from '../../components/bbva-header-main';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class TransfersPendingMovements extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-transfersPendingMovements[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain,
                        args: {
                            prefix: 'bbva-feature-alwayson-mx #always-on-pending-movements[data-tag-name="bbva-transition-container"] [data-tag-name="alwayson-pending-movements"]',
                        }
                    }
                },
                movementsList: {
                    properties: { root: 'bbva-feature-alwayson-mx #always-on-pending-movements[data-tag-name="bbva-transition-container"]' },
                    container: 'div [data-tag-name="alwayson-pending-movements"] div.movements__container',
                    movement: 'div [data-tag-name="alwayson-pending-movements"] div.movements__container div.movement-card',
                    emptyIllustration: '.movements__container .empty-screen [data-tag-name="bbva-clip-microillustration"][microillustration="emptystateday"]',
                    emptyText: '.movements__container .empty-screen .empty-screen__content [data-tag-name="bbva-text"]'
                },
                movementDetail: {
                    properties: { root: 'bbva-feature-alwayson-mx #alwaysonMovementDetail[data-tag-name="bbva-transition-container"] [data-tag-name="alwayson-movement-detail"]' },
                    statusIcon: '.movement__summary .movement__status [data-tag-name="bbva-link"]',
                    movementAmount: '.movement__summary .movement__amount',
                    operationButton: 'div.movement__content [data-tag-name="bbva-button-row"] [data-tag-name="bbva-button-action"]',
                    operationButtons: '.movement__content [data-tag-name="bbva-button-row"] #buttons',
                    detailsList: '.movement__content .detail-list',
                    acceptOperationButton: '[data-tag-name="bbva-help-modal"] div div.content [data-tag-name="bbva-button-default"]',
                    infoModal: {
                        component: {
                            ComponentClass: BbvaHelpModal,
                            args: {
                                additionalElements: {
                                    infoIcon: '.content .help-modal .modal-container #helpModalTitle [data-tag-name="bbva-icon"][icon="bbva:help"]',
                                    infoTitle: '.content .help-modal .modal-container #helpModalTitle #title-text',
                                    infoText: '.content .help-modal .modal-container #helpModalContent .slot-content'
                                }
                            }
                        }
                    }
                },
                successCancellationModal: {
                    component: {
                        ComponentClass: BbvaHelpModal,
                        args: {
                            prefix: 'bbva-feature-alwayson-mx',
                            modifiers: '#cancel-success.always-on-modal',
                            additionalElements: {
                                title: '[data-tag-name="bbva-text"][text="Operación cancelada"]',
                                description: '[data-tag-name="bbva-text"][text="No se realizará el movimiento y tus saldos no se verán afectados."]'
                            }
                        }
                    }
                },
            },
            requiredElements: ['header', 'movementsList.container'],
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'movement amount':
                await this.movementDetail.movementAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement operations':
                await this.movementDetail.operationButtons.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement details list':
                await this.movementDetail.detailsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal success header':
                await this.successCancellationModal.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modal success icon':
                await this.successCancellationModal.icon.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modal success title':
                await this.successCancellationModal.additionalElements.title.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modal success description':
                await this.successCancellationModal.additionalElements.description.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modal success exit button':
                await this.successCancellationModal.acceptBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'movement detail modal info icon':
                await this.movementDetail.infoModal.additionalElements.infoIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement detail modal info title':
                await this.movementDetail.infoModal.additionalElements.infoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement detail modal info text':
                await this.movementDetail.infoModal.additionalElements.infoText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'empty movements illustration':
                await this.movementsList.emptyIllustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'empty movements text':
                await this.movementsList.emptyText.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async selectPendingMovement() {
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M});
        await this.movementsList.movement.waitForDisplayed({timeout: config.wait.L});
        await this.movementsList.movement.waitForClickable({timeout: config.wait.L});
        await this.movementsList.movement.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M});
    }

    async cancelPendingMovement() {
        await (await this.movementDetail.operationButton.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
        await (await this.movementDetail.operationButton.elements()).value[1].waitForClickable({timeout: config.wait.M});
        await (await this.movementDetail.operationButton.elements()).value[1].click();
    }

    async acceptCancelPendingMovement() {
        await this.movementDetail.acceptOperationButton.waitForDisplayed({timeout: config.wait.M});
        await this.movementDetail.acceptOperationButton.waitForClickable({timeout: config.wait.M});
        await this.movementDetail.acceptOperationButton.click({timeout: config.wait.M});
        await this.fillOtp('11111111');
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M});
    }

    async openPendingMovementsInfoModal() {
        await this.movementDetail.statusIcon.waitForDisplayed({timeout: config.wait.M});
        await this.movementDetail.statusIcon.waitForClickable({timeout: config.wait.M});
        await this.movementDetail.statusIcon.click();
    }
}

export default new TransfersPendingMovements();
