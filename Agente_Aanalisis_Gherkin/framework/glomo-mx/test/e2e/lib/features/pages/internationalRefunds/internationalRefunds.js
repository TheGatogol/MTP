import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsKeyValues from '../../components/cells-key-values';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class InternationalRefunds extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'InternationalRefunds',
            root: '#cells-template-internationalRefunds[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                titleTransferData: 'cells-step-list #StepListContainer div div h2',
                sender: [
                    CellsKeyValues,
                    {
                        keyText: 'Remitente',
                        root: `cells-step-list ${CellsKeyValues._baseRoot}`
                    }
                ],
                senderBank: [
                    CellsKeyValues,
                    {
                        keyText: 'Banco de origen',
                        root: `cells-step-list ${CellsKeyValues._baseRoot}`
                    }
                ],
                senderAccount: [
                    CellsKeyValues,
                    {
                        keyText: 'Cuenta de origen',
                        root: `cells-step-list ${CellsKeyValues._baseRoot}`
                    }
                ],
                receiverAccount: [
                    CellsKeyValues,
                    {
                        keyText: 'Cuenta destino',
                        root: `cells-step-list ${CellsKeyValues._baseRoot}`
                    }
                ],
                sentMoney: [
                    CellsKeyValues,
                    {
                        keyText: 'Recibido en divisas',
                        root: `cells-step-list ${CellsKeyValues._baseRoot}`
                    }
                ],
                additionalInformationTitle: 'cells-step-economic-activity #step-container div div h2',
                additionalInformationFirstSelector: 'cells-step-economic-activity #first-selector',
                additionalInformationSecondSelector: 'cells-step-economic-activity #second-selector',
                additionalInformationFirstTextArea: 'cells-step-economic-activity #first-text-area #ironArea #textarea',
                additionalInformationCheckBox: 'cells-step-economic-activity #checkbox-btn',
                additionalInformationCheckBoxBtn: 'cells-step-economic-activity #checkbox-btn #checkbox-container',
                additionalInformationCheckBoxText: 'cells-step-economic-activity #checkbox-btn #label',
                additionalInformationSecondTextArea: 'cells-step-economic-activity #second-text-area #ironArea #textarea',
                relationshipToRecipientModal: 'cells-modal-selector#relationship-to-recipient #modal #content',
                reasonForTransferModal: 'cells-modal-selector#reason-for-transfer #modal #content',
                relationshipToRecipientOptions: 'cells-modal-selector#relationship-to-recipient li',
                reasonForTransferOptions: 'cells-modal-selector#reason-for-transfer li',
                additionalInformationContinueBtn: 'cells-step-economic-activity #continue-btn',
                operationSummaryTitle: 'cells-operation-summary #summary #operationTotal > p',
                operationSummaryAmount: 'cells-operation-summary #summary #operationTotal > cells-atom-amount',
                operationSummaryContinueBtn: 'cells-operation-summary #summary #collapser > cells-st-button.primary',
                modalError: [GlomoAlertManager]
            },
            elementsSpherica: {
                modalError: [GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            icon: '#modal > div > div.paragraph-template > p.paragraph-icon > cells-atom-icon-spherica',
                            descriptions: 'div.paragraph-template .paragraph-template-text:not([style="display: none;"])',
                        }
                    }
                ],
            },
            requiredElements: 'header'
        });
    }

    async openRelationshipToRecipient() {
        await (await this.additionalInformationFirstSelector.waitForClickable({timeout: config.wait.S})).click();
    }

    async fillAdditionalInformation() {
        await this._selectRelationshipToRecipient();
        await this._selectReasonForTransfer();
        await this._fillLocalEconomicActivity();
        await (await this.additionalInformationContinueBtn.waitForClickable({timeout: config.wait.S})).click();
    }

    async _selectRelationshipToRecipient() {
        await (await this.additionalInformationFirstSelector.waitForClickable({timeout: config.wait.S})).click();
        await this.relationshipToRecipientModal.waitForDisplayed({timeout: config.wait.S});
        await (await this.relationshipToRecipientOptions.elementByText({text: 'Comercial'})).click();
    }

    async _selectReasonForTransfer() {
        await (await this.additionalInformationSecondSelector.waitForClickable({timeout: config.wait.S})).click();
        await this.reasonForTransferModal.waitForDisplayed({timeout: config.wait.S});
        await (await this.reasonForTransferOptions.elementByText({text: 'Credito'})).click();
    }

    async _fillLocalEconomicActivity() {
        await (await this.additionalInformationFirstTextArea.waitForClickable({timeout: config.wait.S}))
            .setValue({value: 'Vendo zapatos', slow: true});
    }

    async confirmAdditionalInformation() {
        await (await this.operationSummaryContinueBtn.waitForClickable({timeout: config.wait.S})).click();
    }

    async _screenValidation({item} = {}) {
        switch(item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'title transfer data':
                await this.titleTransferData.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'sender':
                await this.sender.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'sender bank':
                await this.senderBank.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'sender account':
                await this.senderAccount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'receiver account':
                await this.receiverAccount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'sent money':
                await this.sentMoney.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'additional information step':
                await this.additionalInformationTitle.waitForDisplayed({timeout: config.wait.S});
                await this.additionalInformationFirstSelector.waitForDisplayed({timeout: config.wait.S});
                await this.additionalInformationFirstSelector.waitForDisplayed({timeout: config.wait.S});
                await this.additionalInformationFirstTextArea.waitForDisplayed({timeout: config.wait.S});
                await this.additionalInformationCheckBoxBtn.waitForDisplayed({timeout: config.wait.S});
                await this.additionalInformationCheckBoxText.waitForDisplayed({timeout: config.wait.S});
                await this.additionalInformationSecondTextArea.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'relationship to recipient modal':
                await this.relationshipToRecipientModal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'operation summary':
                await this.operationSummaryTitle.waitForDisplayed({timeout: config.wait.S});
                await this.operationSummaryAmount.waitForDisplayed({timeout: config.wait.S});
                await this.operationSummaryContinueBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'icon':
                if (this.isSpherica()) {
                    await this.modalError.additionalElements.icon.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.modalError.elementValidation({item: 'icon'} );
                }
                break;
            case 'title':
                await this.modalError.elementValidation({item: 'title'} );
                break;
            case 'description':
                if (this.isSpherica()) {
                    await this.modalError.additionalElements.descriptions.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.modalError.elementValidation({item: 'description'} );
                }
                break;
            case 'retry button':
                await this.modalError.elementValidation({item: 'accept button'} );
                break;
            case 'cancel button':
                await this.modalError.elementValidation({item: 'cancel button'} );
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }
}

export default new InternationalRefunds();
