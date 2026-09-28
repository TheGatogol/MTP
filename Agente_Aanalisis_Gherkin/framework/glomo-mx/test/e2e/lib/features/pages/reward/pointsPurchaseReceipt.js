import AbstractGlomoPage from '../abstract-glomo-page';
import {Commands, ScreenValidationKeyNotFound, page} from '@csqe/radish';

//Components
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import CellsAtomAmountSpherica from '../../components/cells-atom-amount-spherica';
import CellsKeyValues from '../../components/cells-key-values';

@page()
class PointsPurchaseReceipt extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pointsRedeemPurchasesReview[state="active"]',
            elements: {
                //Header
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                amountRefunded: {
                    component: {
                        ComponentClass: CellsAtomAmountSpherica
                    }
                },
                dateOperation: 'cells-successful-response-spherica #body-section ul li:nth-of-type(8) span.value',
                creditCardName: 'cells-successful-response-spherica #body-section ul li div.masked-description-value-container span.value',
                cardImage: 'cells-contact-avatar div.wrapper',
                creditPanNumber: 'cells-successful-response-spherica #body-section ul li cells-molecule-mask-spherica div.wrapper',
                pointsUsed: 'div.fees-container p.fees:not([hidden])',
                featureName: 'cells-successful-response-spherica #body-section ul li:nth-of-type(5) span.value',
                purchaseConcept: 'cells-successful-response-spherica #body-section ul li span.key',
                purchaseAmount: 'cells-successful-response-spherica #header-section [data-selector="cells-successful-response-charge-amount"]',
                transactionFolio: 'cells-successful-response-spherica #body-section ul li:nth-of-type(7) span.value',
                advantageYourPointsMessage: 'cells-successful-response-spherica #body-section div.message cells-icon-message-spherica',
                shareOperation: 'li[data-selector="share"]',
                amountPendingToPay: [CellsKeyValues, {
                    keyText: 'Importe a pagar con tarjeta',
                }],
                previousBalance: [CellsKeyValues, {
                    keyText: 'Saldo anterior TDC',
                }],
                updatedBalance: [CellsKeyValues, {
                    keyText: 'Saldo actualizado TDC',
                }],
                exitButton: 'cells-molecule-header-spherica #btnRight',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header pay with points title':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header exit button':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation date':
                await this.dateOperation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit card image':
                await this.cardImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'points used':
                await this.pointsUsed.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount refunded':
                await this.amountRefunded.integer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount pending to pay':
                await this.amountPendingToPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'previous balance':
                await this.previousBalance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'updated balance':
                await this.updatedBalance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit card name':
                await this.creditCardName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit card pan5':
                await this.creditPanNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'feature name':
                await this.featureName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase concept':
                await this.purchaseConcept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase amount':
                await this.purchaseAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'transaction folio':
                await this.transactionFolio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'advantage your points message':
                await this.advantageYourPointsMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share operation':
                await this.shareOperation.scrollIntoView({block: 'start'});
                await this.shareOperation.waitForAnimation({timeout: config.wait.M});
                await this.shareOperation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'x button in header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CLOSE});
                break;
            case 'retry button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            case 'exit button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON});
                break;
            case 'error info text':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.TITLE});
                break;
            default:
                await super._modalElementValidation({item});
        }
    }

    async retryModal(times) {
        let i = 0;
        while (i < times) {
            await Commands.pause({time: config.wait.S});
            await this.dialogOperations.confirmDialog();
            i++;
        }
    }

    async exitReceipt(card) {
        if (card.type === 'go out') {
            await this.exitButton.waitForDisplayed({timeout: config.wait.L});
            await this.exitButton.click();
        } else if (card.type === 'cancel') {
            await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.L});
            await this.header.secondaryBtn.click();
        } else {
            throw new Error('Selected option is not available...');
        }
    }
}

export default new PointsPurchaseReceipt();
