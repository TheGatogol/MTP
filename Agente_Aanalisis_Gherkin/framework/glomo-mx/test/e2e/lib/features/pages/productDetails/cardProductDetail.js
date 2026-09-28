import {Commands, ScreenValidationKeyNotFound, page} from '@csqe/radish';
import ProductDetail from './productDetail';

@page()
class CardProductDetail extends ProductDetail {
    constructor() {
        const templateMoreInfo = '#cells-template-cardMoreInfo[state="active"] ';

        super({
            root: '#cells-template-card[state="active"]',
            elements: {
                scroll: '',
                loadAnimation: 'cells-spinner-stripes#spinner',

                // Header
                title: '.header__title',
                obfuscatedCard: '.wrapper .number',

                // Type/alias
                cardNameLabel: '.card-alias',
                cardImage: '#image',
                lineaBBVALink: '.activate .card-status__text a',
                phoneBBVA: '//*[@resource-id="com.google.android.dialer:id/digits"]',
                status: '.card-status .message',
                copyPanAction: '.btn--show-copy',
                copyPanToast: 'cells-bottom-modal-message:nth-child(11) .message__text',

                // Available Balance
                availableLocalCurrency: '.optional-items .item-container:nth-child(2) span.currency:not([hidden])',
                availableBalanceLabel: '.optional-items .item-container:nth-child(2) slot[name="before-key" span',
                availableBalanceAmount: '.optional-items .item-container:nth-child(2) span.amount-wrapper',
                balance: 'cells-key-values div.value span.visible-amount span:not([hidden])',

                // Disposed Balance
                disposedLocalCurrency: '.optional-items .item-container:nth-child(1) span.currency:not([hidden])',
                disposedOtherCurrency: '.optional-items .item-container:nth-child(3) span.currency:not([hidden])',
                disposedBalanceLabel: '.optional-items .item-container:nth-child(1) slot[name="before-key" span',
                disposedBalanceOtherLabel: '.optional-items .item-container:nth-child(3) slot[name="before-key" span',
                disposedBalanceAmount: '.optional-items .item-container:nth-child(1) span.amount-wrapper',
                disposedBalanceOtherAmount: '.optional-items .item-container:nth-child(3) span.amount-wrapper',

                // Granted Limit
                grantedLimitLabel: '.additional-items ul.cells-key-values-list li:nth-child(1) slot[name="before-key"]',
                grantedLimitAmount: '.additional-items ul.cells-key-values-list li:nth-child(1) span.amount-wrapper',

                //Reward
                rewardBtnLink: 'button#rewards',
                rewardAmount: '.additional-items ul.cells-key-values-list li:nth-child(2) span.amount-wrapper',

                //more Information
                moreInfoBtn: '.more-info__btn',

                // Pago del mes
                monthPayLabel: '.payment-data__title',
                monthlyPaymentInfo: '.payment-data__title .link',
                crossButton: {
                    web: '#cells-template-__cross cells-alert-box button[aria-label=\'Cancelar\']',
                    isWithoutRoot: true,
                },
                cutOffDate: '.payment-data__row--border:nth-child(1) .date',
                endDate: '.payment-data__row--border:nth-child(3) .date',
                calendarReminder: '.payment-data__row--border:nth-child(5)',
                paymentData: '.payment-data',

                monthDebtLocal: '.payment-data__debt--border:nth-child(3) .title span',
                minimumAmountLocal: '.payment-data__debt--border:nth-child(3) .payment-data__row:nth-child(2) span.amount-wrapper',
                lastPeriodAmountLocal: '.payment-data__debt--border:nth-child(3) .payment-data__row:nth-child(3) span.amount-wrapper',
                totalDebt: '.payment-data__debt--border:nth-child(3) .payment-data__row:nth-child(4) span.amount-wrapper',

                monthDebtOther: '.payment-data__debt--border:nth-child(4) .title span',
                lastPeriodAmountOther: '.payment-data__debt--border:nth-child(4) .payment-data__row:nth-child(2) span.amount-wrapper',
                totalDebtOther: '.payment-data__debt--border:nth-child(4) .payment-data__row:nth-child(3) span.amount-wrapper',

                transactionModuleSkeleton: 'cells-transactions-list .skeleton',

                offersBannersType: 'cells-st-button[data-selector*="__OFFER_TYPE__"]',

                operationsModule: 'cells-operations-list',
                transactionModule: 'cells-molecule-group-transactions-list',
                transactionItem: '.transaction-list__item[data-selector="__MOVEMENT_TYPE__"] cells-molecule-transaction-list-item',
                blockCardBtn: 'cells-operations-list li[data-selector="blockcard"] button',
                blockCardBtnDisabled: 'cells-operations-list li[data-selector="blockcard"] button[aria-disabled]',
                blockCardBtnText: 'cells-operations-list cells-operations-list ',
                blockCardBtnIcon: 'cells-operations-list li[data-selector="blockcard"] .link__icon',
                payCardBtn: 'cells-operations-list li[data-selector="paycard"] button',
                payCardBtnDisabled: 'cells-operations-list li[data-selector="paycard"] button[aria-disabled]',
                payCardBtnText: 'cells-operations-list li[data-selector="paycard"] .link__label',
                payCardBtnIcon: 'cells-operations-list li[data-selector="paycard"] .link__icon',
                otherOperatives: 'cells-operations-list button#viewMoreLink',
                firstOperativeBtn: 'cells-operations-list li[data-index="0"] button',
                secondOperativeBtn: 'cells-operations-list li[data-index="1"] button',
                monthlyStatementButton: 'cells-operations-list li[data-selector="monthlystatement"] button',
                installmentsButton: 'cells-operations-list li[data-index="4"] button',

                //More Card Info
                sectionTitle: {
                    web: `${templateMoreInfo}.info-list .section-title`,
                    isWithoutRoot: true,
                },
                text: {
                    web: `${templateMoreInfo}dd > span`,
                    isWithoutRoot: true,
                },
                conditionsText: {
                    web: `${templateMoreInfo}div > div > span`,
                    isWithoutRoot: true,
                },
                debtAutomaticData: {
                    web: `${templateMoreInfo}.text-info span`,
                    isWithoutRoot: true,
                },
                moreViewBtn: {
                    web: `${templateMoreInfo}cells-st-button button`,
                    isWithoutRoot: true,
                },

                // Other Operatives
                templateOtherOperatives: '#cells-template-operations[state="active"]',
                installmentsOperationButton: {
                    web: '#cells-template-operations[state="active"] .primary li[data-index="4"] button',
                },

                onOffSwitch: '#switcher',
                onOffSwitchTurnedOn: '#switcher.on',
                onOffToast: 'cells-bottom-modal-message:nth-child(12) .message__text',

            },
            requiredElements: [
                'moreInfoBtn',
                'cardNameLabel'
            ],
        });
    }

    async _screenValidation({item, value}) {
        let element;
        let valueToVerify;
        switch (item) {
            case 'Obfuscated card number as title with 4 last digits':
                element = this.obfuscatedCard;
                break;
            case 'Card name':
                element = this.cardNameLabel;
                break;
            case 'Credit card image':
                element = this.cardImage;
                break;
            case 'Copy PAN action':
                element = this.copyPanAction;
                break;
            case 'Current available balance amount':
                element = this.availableBalanceAmount;
                break;
            case 'Disposed available balance amount':
                element = this.disposedBalanceAmount;
                break;
            case 'Disposed available balance other':
                element = this.disposedBalanceOtherAmount;
                break;
            case 'Granted credit':
                element = this.grantedLimitAmount;
                break;
            case 'More info. access':
                element = this.moreInfoBtn;
                break;
            case 'Pago del mes label':
                element = this.monthPayLabel;
                break;
            case 'CutOff date (fecha de cierre)':
                element = this.cutOffDate;
                break;
            case 'EndDate (fecha de vencimiento)':
                element = this.endDate;
                break;
            case 'Deuda del mes label   (local currency)':
                element = this.monthDebtLocal;
                break;
            case 'Minimum_amount (local currency)':
                element = this.minimumAmountLocal;
                break;
            case 'Last_period_amount (local currency)':
                element = this.lastPeriodAmountLocal;
                break;
            case 'Total_debt (local currency)':
                element = this.totalDebt;
                break;
            case 'Deuda del mes label   (other currency)':
                element = this.monthDebtOther;
                break;
            case 'Last_period_amount (other currency)':
                element = this.lastPeriodAmountOther;
                break;
            case 'Total_debt (other currency)':
                element = this.totalDebtOther;
                break;
            case 'Card payment operations module':
                element = this.operationsModule;
                break;
            case 'reward button':
                element = this.rewardBtnLink;
                break;
            case 'reward amount':
                element = this.rewardAmount;
                break;
            case 'Transactions module':
                element = this.transactionModule;
                break;
            case 'Title':
                element = this.dialogOperations.title;
                break;
            case 'Mobile icon':
                element = this.dialogOperations.heroImage;
                break;
            case 'Help texts':
                element = this.dialogOperations.infoModalText;
                break;
            case 'Information message':
                element = this.onOffModalInformationMessage;
                break;
            case 'Success message':
                element = this.onOffToast;
                await element.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'Status message':
                element = this.status;
                if (value === 'off') {
                    await Commands.pause({time: config.wait.S});
                    valueToVerify = 'Apagada';
                }
                break;
            case 'Switch on status':
                if (value === 'off') {
                    element = this.onOffSwitch;
                } else {
                    element = this.onOffSwitchTurnedOn;
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }

        await element.scrollIntoView({block: 'start'});
        await element.waitForDisplayed();

        if (valueToVerify) {
            await element.waitForText({text: valueToVerify});
        }
    }
}

export default new CardProductDetail();
