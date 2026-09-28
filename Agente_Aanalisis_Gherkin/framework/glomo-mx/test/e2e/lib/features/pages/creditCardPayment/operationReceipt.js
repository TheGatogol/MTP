import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page()
class OperationReceipt extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'ReceiptCreditCardPayment',
            root: '#cells-template-creditCardPaymentReview[state="active"]',
            elements: {
                // header-section
                operationStatus: '#header-section h2[data-selector="cells-successful-response-title-text"]',
                dateOperation: '#header-section cells-atom-date[data-selector="cells-successful-response-date"] #date',
                totalAmountTitle: '#header-section p[data-selector="cells-successful-response-amount-label"]',
                totalAmountValue: '#header-section cells-atom-amount[data-selector="cells-successful-response-charge-amount"] span.amount-wrapper',
                commission: 'cells-successful-response section#header-section div.fees-container p[data-selector="cells-summary-view-management-payment-fees"] cells-atom-amount',

                //header-section own cards
                typeOfPayment: '#header-section li[data-selector="cells-successful-response-header-list-info-payment-type"] .key span',
                typeOfPaymentValue: '#header-section li[data-selector="cells-successful-response-header-list-info-payment-type"] .value span',

                //header-section other cards(internal and other banks)
                otherCardsSentAmount: '#header-section ul.header-additional-info li:nth-of-type(1)',
                otherCardsSentAmountValue: '#header-section ul.header-additional-info li:nth-of-type(1) span.amount-wrapper',
                otherCardsChargedAmount: '#header-section ul.header-additional-info li:nth-of-type(2)',
                otherCardsChargedAmountValue: '#header-section ul.header-additional-info li:nth-of-type(2) span.amount-wrapper',
                otherCardsExchangeAmount: '#header-section .header-additional-info__row:nth-of-type(3)',
                otherCardsExchangeAmountValue: '#header-section ul.header-additional-info li:nth-of-type(3) span.amount-wrapper',

                //body-section own cards
                cardTitle: '#body-section li[data-selector="cells-successful-response-bottom-info-card"] .key',
                cardValue: '#body-section [data-selector="cells-successful-response-bottom-info-card"] .wrapper',
                accountTitle: '#body-section li[data-selector="cells-successful-response-bottom-info-account"] .key',
                accountValue: '#body-section li[data-selector="cells-successful-response-bottom-info-account"] .value',
                accountCC4: '#body-section li[data-selector="cells-successful-response-bottom-info-account"] div.wrapper',
                operationTypeTitle: '#body-section li[data-selector="cells-successful-response-bottom-info-operation-type"] .key',
                operationTypeValue: '#body-section li[data-selector="cells-successful-response-bottom-info-operation-type"] .value',
                digitalSheetInfoTitle: '#body-section li[data-selector="cells-successful-response-bottom-info-folio"] .key',
                digitalSheetInfoValue: '#body-section li[data-selector="cells-successful-response-bottom-info-folio"] .value',
                bankName: '#body-section li[data-selector="cells-successful-response-bottom-info-bank-name"] .key',

                // success body section
                otherInfoSection: '#body-section ul.otherInfo',
                shareOption: '#body-section [data-selector="cells-successful-response-operations"] button',
                shareLabel: '#body-section [data-selector="cells-successful-response-operations"] button .link__label',

                info: '#body-section span.message',
                saveButton: '#body-section cells-operations-list li:nth-of-type(2) button',
                saveButtonLabel: '#body-section cells-operations-list li:nth-of-type(2) .link__label',
                exitButtonLabel: 'cells-confirm-buttons button#primaryBtn',

                // Internal success screen
                ownCard: '#body-section.moreInfo.animated ul:nth-of-type(1) li:nth-of-type(1) span.value',
                otherCardsCardNumber: '#body-section ul:nth-of-type(1) li:nth-of-type(2) span.key',
                cardEntity: 'section ul:nth-of-type(2) li:nth-of-type(3) span.key',
                otherCardsAccountTitle: '#body-section ul:nth-of-type(2) li:nth-of-type(4) span.key',
                otherCardsAccountName: '#body-section ul:nth-of-type(2) li:nth-of-type(4) span.value',
                otherCardsCCC4: '#body-section ul:nth-of-type(2) cells-molecule-mask div.wrapper',
                otherCardsOperationTypeTitle: '#body-section ul:nth-of-type(2) li:nth-of-type(3) span.key',
                otherCardsOperationTypeValue: '#body-section ul:nth-of-type(2) li:nth-of-type(3) span.value',

                exitBtn: 'cells-confirm-buttons cells-st-button',

                header: CellsMoleculeHeader
            },
            elementsSpherica: {
                // header-section
                dateOperation: '#header-section cells-atom-date-spherica[data-selector="cells-successful-response-date"] #date',
                totalAmountValue: '#header-section [data-selector="cells-successful-response-charge-amount"] span.amount-wrapper',
                typeOfPayment: '#body-section [data-selector="cells-successful-response-bottom-info-payment-type"] span.key',
                typeOfPaymentFrequentOperations: '#header-section ul li cells-key-values-spherica div.value div span',
                typeOfPaymentValue: '#body-section [data-selector="cells-successful-response-bottom-info-payment-type"] span.value',

                saveButton: '#body-section cells-operations-list-spherica li:nth-of-type(2) button',
                saveButtonLabel: '#body-section cells-operations-list-spherica li:nth-of-type(2) .link__label',
                accountValue: '#body-section li[data-selector="cells-successful-response-bottom-info-account"] .masked-description-value-container .value',
                accountCC4: '#body-section li[data-selector="cells-successful-response-bottom-info-account"] cells-molecule-mask-spherica[masked]',
                otherCardsCCC4: '#body-section ul:nth-of-type(2) cells-molecule-mask-spherica div.wrapper',
                shareOption: '#body-section cells-operations-list-spherica ul li button',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                }

            },
            requiredElements: [
                'operationStatus',
            ],
        });
    }

    async _screenValidation({item, value}) {

        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            case 'operation status':
                await this.operationStatus.waitForText({timeout: config.wait.M});
                break;
            case 'operation date':
                await this.dateOperation.waitForText({timeout: config.wait.M});
                break;
            case 'amount title':
                await this.totalAmountTitle.waitForText({timeout: config.wait.M});
                break;
            case 'total amount':
                await this.totalAmountValue.waitForText({timeout: config.wait.M});
                break;
            case 'commission':
                await this.commissionVisibility(value !== '');
                break;
            //header section own cards
            case 'type of payment':
                await this.typeOfPayment.waitForText({timeout: config.wait.M});
                await this.typeOfPaymentValue.waitForText({timeout: config.wait.M});
                break;
            case 'type of payment frequent operations':
                await this.typeOfPaymentFrequentOperations.waitForText({timeout: config.wait.M});
                break;
            //header section other cards
            case 'sent amount':
                await this.otherCardsSentAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sent amount value':
                await this.otherCardsSentAmountValue.waitForText({timeout: config.wait.M});
                break;
            case 'charged amount':
                await this.otherCardsChargedAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'charged amount value':
                await this.otherCardsChargedAmountValue.waitForText({timeout: config.wait.M});
                break;
            case 'exchange amount':
                await this.exchangeAmountVisibility(value !== '');
                break;
            //body section own cards
            case 'body section own cards':
                await this.bodySectionOwnCardsVisibility();
                break;
            // body section other cards
            case 'card owner':
                await this.checkHolderName(value !== '');
                break;
            case 'card pan':
                await this.otherCardsCardNumber.waitForText({timeout: config.wait.XL});
                break;
            case 'card entity':
                await this.cardEntity.waitForText({timeout: config.wait.L});
                break;
            case 'message info':
                await this.info.waitForText({timeout: config.wait.L});
                break;
            case 'bank name':
                await this.bankName.waitForText({timeout: config.wait.L});
                break;
            case 'account title':
                await this.otherCardsAccountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account name':
                await this.otherCardsAccountName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account ccc4':
                await this.otherCardsCCC4.waitForText({timeout: config.wait.M});
                break;
            case 'operation type title':
                await this.otherCardsOperationTypeTitle.waitForText({timeout: config.wait.M});
                break;
            case 'operation type value':
                await this.otherCardsOperationTypeValue.waitForText({timeout: config.wait.M});
                break;
            case 'share button':
                await this.shareEnabled(value !== 'enabled');
                break;
            case 'share button label':
                await this.shareLabel.waitForText({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.header.actionRight();
                break;
            case 'exit button label':
                await this.header.secondaryBtnLabel.waitForText();
                break;
            case 'share option':
                await this.shareOption.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit option':
                await this.header.waitForDisplayed({isBtnRight: true, isBtnLeft: false});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async checkHolderName(reverse) {
        await this.ownCard.waitForDisplayed({timeout: config.wait.M, reverse: reverse});
    }

    async shareEnabled(reverse = false) {
        await this.shareOption.waitForEnabled({timeout: config.wait.M, reverse: reverse});
    }

    async goBack() {
        await this.header.actionRight();
    }

    async commissionVisibility(reverse = false) {
        await this.commission.waitForDisplayed({timeout: config.wait.M, reverse: reverse});
    }

    async exchangeAmountVisibility(reverse = false) {
        if (reverse) {
            await this.otherCardsExchangeAmount.waitForNotDisplayed();
            await this.otherCardsExchangeAmountValue.waitForNotDisplayed({timeout: config.wait.S});
        } else {
            await this.otherCardsExchangeAmount.waitForDisplayed({timeout: config.wait.S});
            await this.otherCardsExchangeAmountValue.waitForText();
        }
    }

    async bodySectionOwnCardsVisibility() {
        await this.cardTitle.waitForText({timeout: config.wait.L});
        await this.cardValue.waitForDisplayed({timeout: config.wait.L});
        await this.accountTitle.waitForText({timeout: config.wait.M});
        await this.accountCC4.waitForText({timeout: config.wait.M});
        await this.operationTypeTitle.waitForText({timeout: config.wait.M});
        await this.operationTypeValue.waitForText({timeout: config.wait.M});
        await this.digitalSheetInfoTitle.waitForText({timeout: config.wait.M});
        await this.digitalSheetInfoValue.waitForText({timeout: config.wait.M});
        if (!this.isSpherica()) {
            await this.accountValue.waitForText({timeout: config.wait.M});
            await this.bankName.waitForText({timeout: config.wait.M});
        }
    }
}

export default new OperationReceipt();
