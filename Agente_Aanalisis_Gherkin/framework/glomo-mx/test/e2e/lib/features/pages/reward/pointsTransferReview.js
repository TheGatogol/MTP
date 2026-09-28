import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

//Components
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import CellsConfirmButtonsSpherica from '../../components/cells-confirm-buttons-spherica';

@page()
class PointsTransferReview extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-pointsTransferReview[state="active"]',
            elements: {

                acceptButton: {
                    component: {
                        ComponentClass: CellsConfirmButtonsSpherica
                    }
                },

                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },

                //Cards Modal Selector
                receipt: {
                    properties: {
                        root: 'cells-successful-response-spherica'
                    },
                    successIcon: '#header-section .image-div .icon cells-atom-icon-spherica',
                    operationStatus: '#header-section .title',
                    description: '#header-section p',
                    additionalInfoItem: '#body-section ul.additional-info [data-selector="__ITEM__"]',
                    pointsTransferTitle: '#body-section ul.additional-info [data-selector="Puntos transferidos"] .key',
                    pointsTransferValue: '#body-section ul.additional-info [data-selector="Puntos transferidos"] .value',
                    operationTypeTitle: '#body-section .additional-info li:nth-of-type(6) span.key',
                    operationType: '#body-section .additional-info li:nth-of-type(6) span.value',
                    operationNumberTitle: '#body-section .additional-info li:nth-of-type(7) span.key',
                    operationNumber: '#body-section .additional-info li:nth-of-type(7) span.value',
                }

            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            case 'success operation icon':
                await this.receipt.successIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success operation information':
                await this.operationInformation();
                break;
            case 'operation date':
                await this.getAdditionalInfoItem('Fecha de operación').waitForDisplayed({timeout: config.wait.M});
                break;
            case 'source card information':
                await this.sourceCardInformation();
                break;
            case 'target card information':
                await this.targetCardInformation();
                break;
            case 'points transferred':
                await this.pointsTransferred();
                break;
            case 'operation type description':
                await this.operationTypeDescription();
                break;
            case 'operation number':
                await this.operationNumberInformation();
                break;
            case 'exit button':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }

    }

    async canConfirm() {
        await this.acceptButton.canConfirm();
    }

    async operationInformation() {
        await this.receipt.operationStatus.waitForDisplayed({timeout: config.wait.S});
        await this.receipt.description.waitForDisplayed({timeout: config.wait.S});
    }

    async sourceCardInformation() {
        await this.getAdditionalInfoItem('Tarjeta de origen').waitForDisplayed({timeout: config.wait.M});
    }

    async targetCardInformation() {
        await this.getAdditionalInfoItem('Tarjeta de destino').waitForDisplayed({timeout: config.wait.M});
    }

    getAdditionalInfoItem(itemName) {
        return this.receipt.additionalInfoItem.specifySelector({
            placeholder: '__ITEM__',
            value: itemName
        });
    }

    async pointsTransferred() {
        await this.receipt.pointsTransferTitle.waitForText();
        await this.receipt.pointsTransferValue.waitForText();
    }

    async operationTypeDescription() {
        await this.receipt.operationTypeTitle.waitForText();
        await this.receipt.operationType.waitForText();
    }

    async operationNumberInformation() {
        await this.receipt.operationNumberTitle.waitForText();
        await this.receipt.operationNumber.waitForText();
    }

    async goBack(expectExitBtn) {
        switch (expectExitBtn.toLowerCase()) {
            case 'icon header':
                await this.header.actionRight();
                break;
            case 'exit':
                await this.acceptButton.confirmAction();
                break;
            default:
                throw new Error(`The item must be "icon header" or "exit", received: ${expectExitBtn}`);
        }
    }

}

export default new PointsTransferReview();
