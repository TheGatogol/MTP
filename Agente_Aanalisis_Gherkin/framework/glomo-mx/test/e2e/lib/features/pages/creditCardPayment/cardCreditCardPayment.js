import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

//Components
import CellsStepRecipientSelector from '../../components/cells-step-recipient-selector';
import CellsStepEnterAmountCreditCard from '../../components/cells-step-enter-amount-credit-card';
import CellsStepProductSelector from '../../components/cells-step-product-selector';
import CellsOperationSummary from '../../components/cells-operation-summary';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
import CellsStepEnterAmountCreditCardSpherica from '../../components/cells-step-enter-amount-credit-card-spherica';
import CellsStepProductSelectorSpherica from '../../components/cells-step-product-selector-spherica';
import CellsOperationSummarySpherica from '../../components/cells-operation-summary-spherica';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import CellsStepRecipientSelectorSpherica from '../../components/cells-step-recipient-selector-spherica';

@page()
class CardCreditCardPayment extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'CardCreditCardPayment',
            root: '#cells-template-cardCreditCardPayment[state="active"]',
            elements: {
                cardToPayLabel: 'cells-step-recipient-selector #stepContainer .cells-step__header',
                amountLabel: 'cells-step-enter-amount-credit-card #stepContainer',

                //collapsed step
                cardCollapsedStep: 'cells-step-recipient-selector[collapsed]',

                cardToPayStep: {
                    component: {
                        ComponentClass: CellsStepRecipientSelector
                    }
                },

                amountCreditCard: {
                    component: {
                        ComponentClass: CellsStepEnterAmountCreditCard
                    }
                },

                accountProductSelector: {
                    component: {
                        ComponentClass: CellsStepProductSelector
                    }
                },

                summary: {
                    component: {
                        ComponentClass: CellsOperationSummary
                    }
                },

                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },

                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements:{
                            xlTitle: '.xl-weigth-medium',
                        }
                    }
                ]
            },
            elementsSpherica: {
                cardToPayLabel: 'cells-step-recipient-selector-spherica #stepContainer .cells-step__header',

                //collapsed step
                cardCollapsedStep: 'cells-step-recipient-selector-spherica[collapsed]',
                additionalInfo: CellsStepRecipientSelectorSpherica,
                cardToPayStep: CellsStepRecipientSelectorSpherica,
                amountCreditCard: CellsStepEnterAmountCreditCardSpherica,
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements:{
                            xlTitle: 'div.paragraph-template [data-selector="paragraph-template-text"]',
                        }
                    }
                ],
                accountProductSelector: CellsStepProductSelectorSpherica,
                summary: CellsOperationSummarySpherica,
                header: CellsMoleculeHeaderSpherica,
                cutBalance: '#item div.item__additional-information > span.additional-info-separate-values',
                productItem: '#item'
            },
            requiredElements: [
                'cardCollapsedStep'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({ isBtnRight: true });
                break;
            case 'card to pay collapsed':
                await this.cardToPayStep.validatePayCardCollapsed(false);
                break;
            case 'type of payment collapsed':
                await this.amountCreditCard.validateAmountCollapsed();
                break;
            case 'account info collapsed':
                await this.accountProductSelector.validateAccountCollapsed();
                break;
            case 'summary':
                await this.summary.verifySummary();
                break;
            case 'card to pay':
                await this.cardToPayLabel.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount':
                await this.additionalInfo.amountLabel.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'cut balance':
                await this.cutBalance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product item':
                await this.productItem.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'xl title':
                await this.dialogOperations.additionalElements.xlTitle.waitForDisplayed();
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async selectAccount(account) {
        await this.accountProductSelector.selectAccount(account);
    }

    async selectTypeOfPayment(paymentTypeButton, amount) {
        await this.amountCreditCard.selectTypeOfPayment(paymentTypeButton, amount);
    }

    async confirmSummary() {
        await this.summary.confirm();
    }

    async checkModal(type) {
        await this.dialogOperations.checkModal(type);
    }

    async changeAmount() {
        await this.amountCreditCard.changeAmount();
    }

    async exitScreen() {
        await this.header.waitForDisplayed({isBtnRight: true});
        await this.header.actionRight();
    }

}

export default new CardCreditCardPayment();
