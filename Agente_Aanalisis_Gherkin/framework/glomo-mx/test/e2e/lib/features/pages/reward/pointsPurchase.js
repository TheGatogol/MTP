import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

//Components
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import CellsAtomAmountSpherica from '../../components/cells-atom-amount-spherica';
import CellsStepRecipientSelectorSpherica from '../../components/cells-step-recipient-selector-spherica';
import CellsKeyValues from '../../components/cells-key-values';
import CellsOperationSummarySpherica from '../../components/cells-operation-summary-spherica';

@page()
class PointsPurchase extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pointsRedeemPurchases[state="active"]',
            elements: {

                //Header
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },

                cardRecipientSelector: {
                    component: {
                        ComponentClass: CellsStepRecipientSelectorSpherica
                    }
                },
                //body screen
                purchaseConcept: 'cells-step-transaction-selector-spherica div.item__title div.item__additional div.item__data',
                purchaseAmount: {
                    component: {
                        ComponentClass: CellsAtomAmountSpherica
                    }
                },
                purchasePointsEquivalence: 'cells-step-transaction-selector-spherica div.collapsed div.item__quantities span.amount-label',
                onePointValueEquivalence: 'cells-icon-message-spherica.inline span.message',
                amountToPayWithPoints: [CellsKeyValues, {
                    keyText: 'Importe a pagar con puntos',
                }],
                pointToUse: [CellsKeyValues, {
                    keyText: 'Puntos a utilizar',
                }],
                pointsLeft: [CellsKeyValues, {
                    keyText: 'Puntos restantes',
                }],
                amountPendingToPay: [CellsKeyValues, {
                    keyText: 'Importe a pagar con tarjeta',
                }],
                payWithPointsRegards: 'cells-lists-spherica#secondList',
                payWithPointsRegardsChecked: 'cells-step-conditions-spherica.points-redeem-purchases div.filled',
                continueButton: '#points-redeem-purchases-step-conditions #continueBtn',
                payButton: {
                    component: {
                        ComponentClass: CellsOperationSummarySpherica
                    }
                }
            },
            requiredElements: [
                'header',
                'continueButton'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header pay with points title':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header faq button':
                await this.header.faqsBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header exit button':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit card image':
                await this.cardRecipientSelector.cardImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'credit card pan5':
                await this.cardRecipientSelector.pan4.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'balance used':
                await this.cardRecipientSelector.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cut off date':
            case 'payment limit date':
                await this.cardRecipientSelector.additionalInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase concept':
                await this.purchaseConcept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase amount':
                await this.purchaseAmount.container.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purchase points equivalence':
                await this.purchasePointsEquivalence.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'one point value equivalence':
                await this.onePointValueEquivalence.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount to pay with points':
                await this.amountToPayWithPoints.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'points to use':
                await this.pointToUse.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'points left':
                await this.pointsLeft.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount pending to pay':
                await this.amountPendingToPay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'infobox information':
                await this.infoBoxInformation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'infobox points generated':
                await this.pointsGenerated.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay with points regards':
                await this.payWithPointsRegards.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay with points regards viewed':
                await this.payWithPointsRegardsChecked.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay with points button':
                if (item.toLowerCase() === 'enable'){
                    await this.payButton.acceptBtn.waitForAttribute({attribute: 'aria-disabled', reverse: true});
                } else {
                    await this.payButton.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
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

    async continueProcess() {
        await this.continueButton.waitForAnimation({timeout: config.wait.M});
        await this.continueButton.waitForClickable({timeout: config.wait.M});
        await this.continueButton.click();
    }

    async payProcess() {
        await this.payButton.acceptBtn.waitForAnimation({timeout: config.wait.M});
        await this.payButton.acceptBtn.waitForClickable({timeout: config.wait.M});
        await this.payButton.acceptBtn.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.XXL});
    }

    async accessFaqInfo() {
        await this.header.faqsBtn.waitForClickable({timeout: config.wait.M});
        await this.header.faqsBtn.click();
    }

    async retryModal(times) {
        let i = 0;
        while (i < times) {
            await this.confirmDialog();
            i++;
        }
    }

    async verifySummary() {
        await this.payButton.verifySummary();
    }
    async clousePay() {
        await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
        await this.header.secondaryBtn.click();
    }
}

export default new PointsPurchase();
