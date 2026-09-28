import { Given, When } from '@cucumber/cucumber';
import * as navigation from '../../navigation';
import financeTransactionPage from '../../pages/financeTransaction/financeTransaction';
import orangeCardProductDetail from '../../pages/productDetails/orangeCardProductDetail';
import digitalCardGenerate from '../../pages/card/digitalCardGenerate';
import * as utilsAdditionalCardsPage from '../../utils/utilsAdditionalCards';
import * as utilsRewardsPage from '../../utils/utilsRewards';
import movementsDetail from '../../pages/productDetails/movementsDetail';
import movements from '../../pages/productDetails/movements';
import * as utilsCardsPage from '../../utils/utilsCards';

const dictionaryStatus = {
    'operative': 'OPERATIVE',
    'inoperative': 'INOPERATIVE',
    'off': 'OFF',
    'on': 'ON',
    'blocked': 'BLOCKED',
    'overdraft': 'OVERDRAFT',
    'expired': 'EXPIRED',
    'pending delivery': 'PENDING_DELIVERY',
    'pending delivery virtual tdd': 'PENDING_DELIVERY_VIRTUAL_TDD',
    'pending embossing': 'PENDING_EMBOSSING',
    'virtual association': 'VIRTUAL_ASSOCIATION',
    'balance in favour': 'BALANCE_IN_FAVOUR',
    'one error': 'ONE_ERROR',
    'infinite error': 'INFINITE_ERROR',
    'switch error': 'SWITCH_ERROR',
    'mvf': 'MOVEMENTS',
    'less than 5 movements': 'LESS_THAN_5_MOVEMENTS',
    'not movements': 'NOT_MOVEMENTS',
    'day of month': 'ENDDATE>5',
    'number of days': 'ENDDATE<5',
    'with alias': 'WITH_ALIAS',
    'without alias': 'WITHOUT_ALIAS',
    'minimum amount payment': 'MINIMUM_AMOUNT_PAYMENT',
    'total amount payment': 'TOTAL_AMOUNT_PAYMENT',
    'service error': 'SERVICE_ERROR',
    'transaction error': 'TRANSACTION_ERROR',
    'in transit': 'IN_TRANSIT',
    'no virtual association': 'NO_VIRTUAL_ASSOCIATION',
    'associable with less than nine additional': 'ASSOCIABLE_WITH_LESS_THAN_NINE_ADDITIONAL',
    'associable with more than nine additional': 'ASSOCIABLE_WITH_MORE_THAN_NINE_ADDITIONAL',
    'no associable with less than nine additional': 'NO_ASSOCIABLE_WITH_LESS_THAN_NINE_ADDITIONAL',
    'error additional': 'ERROR_ADDITIONAL',
    'no additional': 'NO_ADDITIONAL',
    'blocked pdt.delivery': 'BLOCKED_PENDING_DELIVERY',
    'blocked without pdt.delivery': 'BLOCKED_NO_PENDING_DELIVERY',
    'clarifications management': 'CLARIFICATIONS_MANAGEMENT',
    'block card clarifications': 'BLOCK_CARD_CLARIFICATIONS',
    'clarifications payment': 'CLARIFICATION_PAYMENT',
    'clean card inoperative': 'CLEAN_CARD_INOPERATIVE',
    'clean card inoperative atm error': 'CLEAN_CARD_INOPERATIVE_ATM_ERROR',
    'clean card inoperative process error': 'CLEAN_CARD_INOPERATIVE_PROCESS_ERROR',
    'clean card inoperative exceeded attempts': 'CLEAN_CARD_INOPERATIVE_EXCEEDED_ATTEMPTS',
    'clean card operative': 'CLEAN_CARD_OPERATIVE',
    'clean card operative visualization error': 'CLEAN_CARD_OPERATIVE_ERROR',
    'clean card inoperative otp required': 'CLEAN_CARD_INOPERATIVE_OTP_REQUIRED',
    'multipurchase active': 'MULTIPURCHASE ACTIVE',
    'multipurchase more than 7 transactions': 'MULTIPURCHASE MORE THAN 7 TRANSACTIONS',
    'multipurchase less than 7 transactions': 'MULTIPURCHASE LESS THAN 7 TRANSACTIONS',
    'error multipurchase active': 'ERROR MULTIPURCHASE ACTIVE',
    'error financing multipurchase': 'ERROR FINANCING MULTIPURCHASE',
    'error selecting multipurchase': 'ERROR SELECTING MULTIPURCHASE',
    'without transactions': 'WITHOUT TRANSACTIONS',
    'not enought debt to finance': 'NOT ENOUGHT DEBT TO FINANCE',
    'active finance promotion': 'ACTIVE FINANCE PROMOTION',
    'surprassed credit limit': 'SURPRASSED CREDIT LIMIT',
    'overdue financing payments': 'OVERDUE FINANCING PAYMENTS',
    'personal finance plan': 'PERSONAL FINANCE PLAN',
    'insufficient balance': 'INSUFFICIENT BALANCE',
    'error pagination': 'ERROR PAGINATION',
    'surpass deferrable balance': 'SURPASS DEFERABLE BALANCE',
    'business': 'BUSINESS',
    'gold': 'GOLD_CARD',
    'infinite': 'INFINITE_CARD',
    'only 4 movements': 'ONLY_4_MOVEMENTS',
    'operative with pending movements': 'OPERATIVE_WITH_PENDING_MOVEMENTS',
    'blocked lost': 'BLOCKED_LOST',
    'blocked stolen': 'BLOCKED_STOLEN',
    'blocked renewal': 'BLOCKED_RENEWAL'

};

function getCamelCaseTableData(table) {
    return _.mapKeys(table.rowsHash(), (v, k) => _.camelCase(k));
}

function getDataCard(cardStatus, cardType) {
    const cardStatusDictionary = dictionaryStatus[cardStatus.toLowerCase()];
    let accountTransactions;
    let cardProduct;
    let additionalCardProduct;
    let isAdditional;
    if (cardType.toLowerCase() === 'credit') {
        switch (cardStatusDictionary.toUpperCase()) {
            case 'MULTIPURCHASE ACTIVE':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'OPERATIVE' && element.errorSimulationConfig === undefined && element.indicators.find(element => element.indicatorId === 'MULTIPURCHASE_FINANCING_AVAILABLE' && element.isActive === true)
                    && element.indicators.find(element => element.indicatorId === 'PERSONAL_FINANCE_PLAN' && element.isActive === false));
                break;
            case 'WITHOUT TRANSACTIONS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.indicators.find(element => element.indicatorId === 'MULTIPURCHASE_FINANCING_AVAILABLE' && element.isActive === true)
                    && element.indicators.find(element => element.indicatorId === 'NO_PURCHASES_TO_FINANCE' && element.isActive === true));
                break;
            case 'PERSONAL FINANCE PLAN':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.indicators.find(element => element.indicatorId === 'MULTIPURCHASE_FINANCING_AVAILABLE' && element.isActive === true)
                    && element.indicators.find(element => element.indicatorId === 'PERSONAL_FINANCE_PLAN' && element.isActive === true));
                break;
            case 'ACTIVE FINANCE PROMOTION':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.indicators.find(element => element.indicatorId === 'MULTIPURCHASE_FINANCING_AVAILABLE' && element.isActive === true)
                    && element.indicators.find(element => element.indicatorId === 'CARD_WITH_CAMPAIGN' && element.isActive === true));
                break;
            case 'INSUFFICIENT BALANCE':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.indicators.find(element => element.indicatorId === 'MULTIPURCHASE_FINANCING_AVAILABLE' && element.isActive === true)
                    && element.indicators.find(element => element.indicatorId === 'INSUFFICIENT_BALANCE' && element.isActive === true));
                break;
            case 'SURPRASSED CREDIT LIMIT':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.indicators.find(element => element.indicatorId === 'MULTIPURCHASE_FINANCING_AVAILABLE' && element.isActive === true)
                    && element.indicators.find(element => element.indicatorId === 'OVERDRAFT' && element.isActive === true));
                break;
            case 'OVERDUE FINANCING PAYMENTS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.indicators.find(element => element.indicatorId === 'MULTIPURCHASE_FINANCING_AVAILABLE' && element.isActive === true)
                    && element.indicators.find(element => element.indicatorId === 'OVERDUE_PAYMENTS' && element.isActive === true));
                break;
            case 'ERROR MULTIPURCHASE ACTIVE':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.errorSimulationConfig === 'ERROR MULTIPURCHASE ACTIVE');
                break;
            case 'ERROR PAGINATION':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.errorSimulationConfig === 'ERROR PAGINATION');
                break;
            case 'SURPASS DEFERABLE BALANCE':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.errorSimulationConfig === 'SURPASS DEFERABLE BALANCE');
                break;
            case 'NOT ENOUGHT DEBT TO FINANCE':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.errorSimulationConfig === 'NOT ENOUGHT DEBT TO FINANCE');
                break;
            case 'ERROR SELECTING MULTIPURCHASE':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.errorSimulationConfig === 'ERROR SELECTING MULTIPURCHASE');
                break;
            case 'ERROR FINANCING MULTIPURCHASE':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.errorSimulationConfig === 'ERROR FINANCING MULTIPURCHASE');
                break;
            case 'MULTIPURCHASE MORE THAN 7 TRANSACTIONS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.errorSimulationConfig === undefined && element.indicators.find(element => element.indicatorId === 'MULTIPURCHASE_FINANCING_AVAILABLE' && element.isActive === true)
                    && element.transactions.length > 14);
                break;
            case 'MULTIPURCHASE LESS THAN 7 TRANSACTIONS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.errorSimulationConfig === undefined && element.indicators.find(element => element.indicatorId === 'MULTIPURCHASE_FINANCING_AVAILABLE' && element.isActive === true)
                    && element.indicators.find(element => element.indicatorId === 'PERSONAL_FINANCE_PLAN' && element.isActive === false) && element.transactions.length < 7);
                break;
            case 'ON':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.activations[0].isActive === true && element.activations[0].activationId.toUpperCase() === 'ON_OFF');
                break;
            case 'OFF':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.activations[0].isActive === false && element.activations[0].activationId.toUpperCase() === 'ON_OFF');
                break;
            case 'ENDDATE>5':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.activations[0].isActive === true && element.activations[0].activationId === 'ON_OFF' && element.alias.toUpperCase() === 'ENDDATE>5');
                break;
            case 'ENDDATE<5':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.activations[0].isActive === true && element.activations[0].activationId === 'ON_OFF' && element.alias.toUpperCase() === 'ENDDATE<5');
                break;
            case 'PAYDAY_GREATER_THAN_5_DAYS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.paymentMethods[0].id.toUpperCase() === 'PAYDAY_GREATER_THAN_5_DAYS');
                break;
            case 'PAYDAY_YESTERDAY':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.paymentMethods[0].id.toUpperCase() === 'PAYDAY_YESTERDAY');
                break;
            case 'MINIMUM_AMOUNT_PAYMENT':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.paymentMethods[0].id.toUpperCase() === 'MINIMUM_AMOUNT_PAYMENT');
                break;
            case 'TOTAL_AMOUNT_PAYMENT':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.paymentMethods[0].id.toUpperCase() === 'TOTAL_AMOUNT_PAYMENT');
                break;
            case 'WITH_ALIAS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'OPERATIVE' && element.alias !== undefined);
                break;
            case 'WITHOUT_ALIAS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.alias === undefined && element.status.id === 'OPERATIVE');
                break;
            case 'MOVEMENTS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.transactions.length > 3);
                break;
            case 'NOT_MOVEMENTS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.transactions.length === 0);
                break;
            case 'LESS_THAN_5_MOVEMENTS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.transactions.length < 6 &&
                    element.transactions.length > 0);
                break;
            case 'SERVICE_ERROR':
                cardProduct = global.user.products.cards.find(card => card.cardType.id === 'CREDIT_CARD' && card.status.id === 'OPERATIVE' &&
                    card.physicalSupport.id === 'NORMAL_PLASTIC' && card.errorSimulationConfig !== undefined);
                break;
            case 'TRANSACTION_ERROR':
                cardProduct = global.user.products.cards.find(card => card.cardType.id === 'CREDIT_CARD' && card.status.id === 'OPERATIVE' &&
                    card.physicalSupport.id === 'NORMAL_PLASTIC' && card.errorSimulationConfig === 'TRANSACTION_ERROR');
                break;
            case 'IN_TRANSIT':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.transactions[0].status.id === 'PENDING');
                break;
            case 'ASSOCIABLE_WITH_LESS_THAN_NINE_ADDITIONAL':
                isAdditional = global.user.products.cards.filter(element => element.indicators.find(element => element.name === 'IS_ADDITIONAL'));
                for (let nAgreements = 0; nAgreements < isAdditional.length; nAgreements++) {
                    const numAgreement = isAdditional[nAgreements].cardAgreement;
                    additionalCardProduct = isAdditional.filter(element => element.cardAgreement === numAgreement);
                    if (additionalCardProduct.length < 9 && additionalCardProduct.length > 1) {
                        cardProduct = global.user.products.cards.find(element => element.cardAgreement === additionalCardProduct[0].cardAgreement);
                        break;
                    }
                }
                break;
            case 'ASSOCIABLE_WITH_MORE_THAN_NINE_ADDITIONAL':
                isAdditional = global.user.products.cards.filter(element => element.indicators.find(element => element.name === 'IS_ADDITIONAL'));
                for (let nAgreements = 0; nAgreements < isAdditional.length; nAgreements++) {
                    const numAgreement = isAdditional[nAgreements].cardAgreement;
                    additionalCardProduct = isAdditional.filter(element => element.cardAgreement === numAgreement);
                    if (additionalCardProduct.length > 9) {
                        cardProduct = global.user.products.cards.find(element => element.cardAgreement === additionalCardProduct[0].cardAgreement);
                        break;
                    }
                }
                break;
            case 'NO_ASSOCIABLE_WITH_LESS_THAN_NINE_ADDITIONAL':
                isAdditional = global.user.products.cards.filter(element => element.indicators.find(element =>
                    element.indicatorId === 'ASSOCIABLE_TO_ADDITIONAL_CARDS' && element.isActive === false));
                for (let nAgreements = 0; nAgreements < isAdditional.length; nAgreements++) {
                    const numAgreement = isAdditional[nAgreements].cardAgreement;
                    additionalCardProduct = isAdditional.filter(element => element.cardAgreement === numAgreement);
                    if (additionalCardProduct.length < 9) {
                        cardProduct = global.user.products.cards.find(element => element.cardAgreement === additionalCardProduct[0].cardAgreement);
                        break;
                    }
                }
                break;
            case 'ERROR_ADDITIONAL':
                cardProduct = global.user.products.cards.find(card => card.cardType.id === 'CREDIT_CARD' && card.status.id === 'OPERATIVE' &&
                    card.physicalSupport.id === 'NORMAL_PLASTIC' && card.errorSimulationConfig === 'additional_errors');
                break;
            case 'NO_ADDITIONAL':
                isAdditional = global.user.products.cards.filter(card => _.get(card, 'indicators', []).find(item => item.indicatorId === 'ASSOCIABLE_TO_ADDITIONAL_CARDS' && item.isActive === false));
                for (let nAgreements = 0; nAgreements < isAdditional.length; nAgreements++) {
                    const numAgreement = isAdditional[nAgreements].cardAgreement;
                    additionalCardProduct = global.user.products.cards.filter(element => element.cardAgreement === numAgreement);
                    if (additionalCardProduct.length === 1) {
                        cardProduct = global.user.products.cards.find(element => element.cardAgreement === additionalCardProduct[0].cardAgreement);
                        break;
                    }
                }
                break;
            case 'CLEAN_CARD_INOPERATIVE':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'INOPERATIVE' && element.indicators.find(element => element.id === 'IS_CLEAN_CARD'));
                break;
            case 'CLEAN_CARD_INOPERATIVE_ATM_ERROR':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'INOPERATIVE' && element.status.name === 'ATM ERROR' && element.indicators.find(element => element.id === 'IS_CLEAN_CARD'));
                break;
            case 'CLEAN_CARD_INOPERATIVE_OTP_REQUIRED':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'INOPERATIVE' && element.status.name === '403' && element.indicators.find(element => element.id === 'IS_CLEAN_CARD'));
                break;
            case 'CLEAN_CARD_INOPERATIVE_PROCESS_ERROR':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'INOPERATIVE' && element.status.name === 'GENERIC' && element.indicators.find(element => element.id === 'IS_CLEAN_CARD'));
                break;
            case 'CLEAN_CARD_INOPERATIVE_EXCEEDED_ATTEMPTS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'INOPERATIVE' && element.status.name === 'INT. MAX' && element.indicators.find(element => element.id === 'IS_CLEAN_CARD'));
                break;
            case 'CLEAN_CARD_OPERATIVE':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'OPERATIVE' && element.indicators.find(element => element.id === 'IS_CLEAN_CARD'));
                break;
            case 'CLEAN_CARD_OPERATIVE_ERROR':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'OPERATIVE' && element.status.name === 'GENERIC' && element.indicators.find(element => element.id === 'IS_CLEAN_CARD'));
                break;
            case 'CLARIFICATIONS_MANAGEMENT':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'OPERATIVE' && element.status.name === 'VIGENTE');
                break;
            case 'BLOCK_CARD_CLARIFICATIONS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'OPERATIVE' && element.status.name === 'VIGENTE');
                break;
            case 'CLARIFICATION_PAYMENT':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'OPERATIVE' && element.status.name === 'VIGENTE');
                break;
            case 'GOLD_CARD':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.product.name === 'ORO BBVA');
                break;
            case 'INFINITE_CARD':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.product.name === 'INFINITE BBVA');
                break;
            case 'BLOCKED_LOST':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status?.reason?.id === 'LOST');
                break;
            case 'BLOCKED_STOLEN':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status?.reason?.id === 'STOLEN');
                break;
            case 'BLOCKED_RENEWAL':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status?.reason?.id === 'EXPIRED');
                break;
            case 'OPERATIVE':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === 'OPERATIVE');
                break;
            default:
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.status.id === cardStatusDictionary.toUpperCase());
        }
    } else if (cardType.toLowerCase() === 'debit') {
        switch (cardStatusDictionary.toUpperCase()) {
            case 'ON':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.activations[0].isActive === true && element.activations[0].activationId.toUpperCase() === 'ON_OFF');
                break;
            case 'OFF':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.activations[0].isActive === false && element.activations[0].activationId.toUpperCase() === 'ON_OFF');
                break;
            case 'SWITCH_ERROR':
                cardProduct = global.user.products.cards.find(card => card.cardType.id === 'DEBIT_CARD' && card.errorSimulationConfig !== undefined);
                break;
            case 'MOVEMENTS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.transactions.length > 3);
                break;
            case 'LESS_THAN_5_MOVEMENTS':
                accountTransactions = global.user.products.accounts.find(element => element.transactions.length < 5 && element.transactions.length > 0);
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.relatedContracts[0].number === accountTransactions.number);
                break;
            case 'NOT_MOVEMENTS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.transactions.length === 0);
                break;
            case 'WITH_ALIAS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.status.id === 'OPERATIVE' && element.alias !== undefined);
                break;
            case 'WITHOUT_ALIAS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.alias === undefined && element.status.id === 'OPERATIVE');
                break;
            case 'TRANSACTION_ERROR':
                cardProduct = global.user.products.cards.find(card => card.cardType.id === 'DEBIT_CARD' && card.status.id === 'OPERATIVE' &&
                    card.physicalSupport.id === 'NORMAL_PLASTIC' && card.errorSimulationConfig === 'TRANSACTION_ERROR');
                break;
            case 'IN_TRANSIT':
                accountTransactions = global.user.products.accounts.find(element => element.transactions[0].status.id === 'PENDING');
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.relatedContracts[0].number === accountTransactions.number);
                break;
            case 'OPERATIVE_WITH_PENDING_MOVEMENTS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element?.title?.name.includes(`BBVA operative ${cardType} card`) && element?.transactions.length > 0);
                break;
            case 'NO_VIRTUAL_ASSOCIATION':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.status.name === cardStatusDictionary.toUpperCase());
                break;
            case 'BLOCKED_PENDING_DELIVERY':
                cardProduct = global.user.products.cards.find(element => element.blocks.filter(element => element !== undefined) && element.cardType.id === 'DEBIT_CARD' &&
                    element.blocks[0].reason.id === 'PDT.REMESA');
                break;
            case 'BLOCKED_NO_PENDING_DELIVERY':
                additionalCardProduct = global.user.products.cards.filter(element => element.blocks.length === 1);
                cardProduct = additionalCardProduct.find(element => element.cardType.id === 'DEBIT_CARD' && element.blocks[0].reason.id === 'LOST');
                break;
            case 'BLOCKED_LOST':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.status?.reason?.id === 'LOST');
                break;
            case 'BLOCKED_STOLEN':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.status?.reason?.id === 'STOLEN');
                break;
            case 'BLOCKED_RENEWAL':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.status?.reason?.id === 'EXPIRED');
                break;
            case 'OPERATIVE':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.status.id === 'OPERATIVE');
                break;
            case 'OVERDRAFT':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.grantedCredits[0].amount < element.disposedBalance.currentBalances[0].amount);
                break;
            case 'PENDING_DELIVERY_VIRTUAL_TDD':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.physicalSupport.hasPendingDelivery);
                break;
            case 'BUSINESS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD');
                break;
            case 'ONLY_4_MOVEMENTS':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.transactions.length < 6 &&
                    element.transactions.length > 0);
                break;
            default:
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'DEBIT_CARD' && element.status.id === cardStatusDictionary.toUpperCase());
        }
    } else if (cardType === 'digital credit') {
        switch (cardStatusDictionary.toUpperCase()) {
            case 'ON':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.activations[0].isActive === true && element.activations[0].activationId.toUpperCase() === 'ON_OFF' && element.physicalSupport.id === 'NORMAL_PLASTIC');
                break;
            case 'OFF':
                cardProduct = global.user.products.cards.find(element => element.cardType.id === 'CREDIT_CARD' && element.activations[0].isActive === false && element.activations[0].activationId.toUpperCase() === 'ON_OFF' && element.physicalSupport.id === 'NORMAL_PLASTIC');
                break;
            default:
                throw new Error(`Unknown status: ${cardStatusDictionary}`);
        }
    }
    storage['selectedProduct'] = cardProduct;
}

When(/^the user accesses to more information card$/, async function () {
    await orangeCardProductDetail.moreInfoCard();
});

When(/^the user accesses to copy card number$/, async function () {
    await orangeCardProductDetail.copyCardNumber();
});

When(/^the user accesses to the "([^"]*)" "([^"]*)" card product detail$/, async function (cardStatus, cardType) {
    getDataCard(cardStatus, cardType);
    await navigation.dashboard.go();
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId });
});

When(/^the user accesses to the "([^"]*)" "([^"]*)" card product details$/, async function (cardStatus, cardType) {
    getDataCard(cardStatus, cardType);
    await navigation.dashboard.go();
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId });
});

When(/^the user accesses to the "([^"]*)" card product detail with "([^"]*)" payday format$/, async function (cardType, cardStatus) {
    getDataCard(cardStatus, cardType);
    await navigation.dashboard.go();
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId });
});

When(/^the user accesses to the "([^"]*)" "([^"]*)" card product detail for the first time$/, async function (cardStatus, cardType) {
    getDataCard(cardStatus, cardType);
    await navigation.dashboard.go();
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId });
});

When(/^the user "([^"]*)" finishes the turn "([^"]*)" and "([^"]*)" of "([^"]*)" card$/, async function (state, onOff, offOn, cardType) {
    getDataCard(offOn, cardType);
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId });
    await orangeCardProductDetail.onOffSwitch(onOff, state);
    await orangeCardProductDetail.closeOnOffModal();
    await orangeCardProductDetail.onOffSwitch(offOn, state);
});

When(/^the user accesses to detail information card$/, async function () {
    await orangeCardProductDetail.moreInfoCard();
    await orangeCardProductDetail.cardDetailInfo();
});

When(/^the user accesses to link of balance in favour$/, async function () {
    await orangeCardProductDetail.favourBalance();
});

When(/^the user "([^"]*)" turns "([^"]*)" the card$/, async function (state, onOff) {
    await orangeCardProductDetail.onOffSwitch(onOff, state);
});

When(/^the user exits the help screen$/, async function () {
    await currentPage.closeModal();
});

When(/^the user closes the help screen$/, async function () {
    await orangeCardProductDetail.closeHelpModalScreen();
});

When(/^the user accesses to all movements$/, async function () {
    await navigation.card.movements.go();
});

When(/^the user accesses to all "([^"]*)" movements$/, async function (cardType) {
    switch (cardType.toLowerCase()) {
        case 'credit':
            await navigation.card.movements.go();
            break;
        case 'debit':
            await orangeCardProductDetail.openAllMovementsDebitCard();
            break;
        default:
            throw new Error(`The navigation assertion in page: ${cardType} movements is not implemented`);
    }
});

When(/^the user opens "([^"]*)" help modal message$/, async function (cardType) {
    switch (cardType.toLowerCase()) {
        case 'credit':
            await movements.helpModal();
            break;
        case 'debit':
            await orangeCardProductDetail.helpAllMovementsDebitCard();
            break;
        default:
            throw new Error(`The action in page: ${cardType} is not implemented`);
    }
});

When(/^the user selects a "([^"]*)" movement in "([^"]*)" transaction$/, async function (movementType, movementSelector) {
    if (movementSelector === 'debit' && movementType === 'pending') {
        await navigation.card.movementsDetail.go({ movementSelector });
    } else if (movementSelector === 'debit' && movementType === 'settled') {
        await navigation.account.accountTransactionDetail.go({ origin: 'detail product' });
    } else {
        await navigation.card.movementsDetail.go({movementType, movementSelector});
    }
});

When(/^the user opens the merchant location map$/, async function () {
    await movementsDetail.accessTransactionLocation();
});

When(/^the user opens merchant details$/, async function () {
    await movementsDetail.merchantDetails();
});

When(/^the user opens pending movement info modal$/, async function () {
    await movementsDetail.openModalInfo();
});

When(/^the user opens in transit info modal$/, async function() {
    await movementsDetail.openModaInTransitModal();
});

When(/^the user scrolls to credit module$/, async function () {
    await orangeCardProductDetail.displayCreditCardModule();
});

When(/^the user accesses to payment detail tooltip$/, async function () {
    await orangeCardProductDetail.accessPaymentDetailTooltip();
});

When(/^the user verifies date format is equal to "([^"]*)"$/, async function (dateFormat) {
    await orangeCardProductDetail.verifyFormatDate(dateFormat);
});

When(/^the user retries access "([^"]*)" times$/, async function (times) {
    await currentPage.retryAccess(times);
});

When(/^the user scrolls to points module$/, async function () {
    await orangeCardProductDetail.locateModulePoints();
});

When(/^the user verifies "([^"]*)" format message$/, async function (pointsFormat) {
    await orangeCardProductDetail.verifyFormatPoints(pointsFormat);
});

When(/^the user displays the additional credit cards module$/, async function () {
    await orangeCardProductDetail.displayAdditionalCcModule();
});

Given(/^the user accesses the list of the additional "([^"]*)" "([^"]*)" card from the associated "([^"]*)"$/, async function (additionalStatus, additionalDescriptionStatus, cardType) {
    utilsAdditionalCardsPage.getDataCard(additionalStatus, additionalDescriptionStatus, cardType);
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId });
    await orangeCardProductDetail.displayAdditionalCcModule();
});

When(/^the user accesses to movement detail from a "([^"]*)" within Product detail$/, async function (cardType) {
    utilsRewardsPage.getDataCardPoints(cardType);
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId });
    await navigation.card.movementsDetail.go();
});

When(/^the user accesses to movement detail from a "([^"]*)" within Movements list$/, async function (cardType) {
    utilsRewardsPage.getDataCardPoints(cardType);
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId });
    await orangeCardProductDetail.closeTooltipDigitalCard();
    await navigation.card.movementsDetail.go();
});

When(/^the user selects the "([^"]*)" "([^"]*)" option of clarifications payment$/, async function (cardStatus, cardType) {
    getDataCard(cardStatus, cardType);
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId });
});

Given(/^the user accesses to switch to instalments from a fundable movement$/, async function () {
    utilsRewardsPage.getDataCardPoints('card with points');
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId });
    await navigation.card.financeTransaction.financeTransaction.go();
    await financeTransactionPage.acceptFinancingConsiderations();
});

Given(/^the user attempts to finance transaction$/, async function () {
    await navigation.card.financeTransaction.financeTransaction.attempt();
    await financeTransactionPage.acceptFinancingConsiderations();
});

Given(/^the user attempts to finance considerations$/, async function () {
    await navigation.card.financeTransaction.financeTransaction.attempt();
});

When(/^the user accesses more operations with "([^"]*)" "([^"]*)" card$/, async function (cardStatus, cardType) {
    getDataCard(cardStatus, cardType);
    const pageName = 'operatives';
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId, pageName});
});

When(/^the user generate digital card$/, async function () {
    await digitalCardGenerate.createDigitalCard();
});

When(/^the user selects expense control$/, async function () {
    const pageName = 'operatives';
    await navigation.operationalLimitsConfiguration.listCreditCardLimits.go({pageName});
});

When(/^the user exit digital card activation/, async function () {
    await navigation.card.orangeCardProductDetail.go();
});

When(/^the user turns "([^"]*)" the card$/, async function (onOff) {
    await orangeCardProductDetail.errorOnOff(onOff);
});

When(/^the user retries "([^"]*)"$/, async function (times) {
    await orangeCardProductDetail.retryAccess(times);
});

When(/^the user access to "([^"]*)"$/, async function (type) {
    switch (type.toLowerCase()) {
        case 'payment detail':
            await orangeCardProductDetail.selectPaymentDetail();
            break;
        case 'payment detail and close the modal':
            await orangeCardProductDetail.closeModalPaymentDetail();
            break;
        case 'simulate interests':
            await orangeCardProductDetail.selectCalculateInterest();
            break;
        case 'buy with a digital card':
            await navigation.card.cardDynamicCvv.go();
            break;
        case 'pay card':
            await navigation.card.cardCreditCardPayment.go();
            break;
        case 'account status':
            await navigation.monthlyStatementEnquiry.card.go();
            break;
        case 'activate digital card':
            await navigation.card.cardGenerateVirtual.go();
            break;
        case 'digital card generate':
            await navigation.card.digitalCardGenerate.go();
            break;
        case 'view more operatives':
            await orangeCardProductDetail.viewMoreOperatives();
            break;
        default:
            throw new Error(`The navigation assertion in page: ${type} is not implemented`);
    }
});

When(/^the user selects "([^"]*)" card operative$/, async function (type) {
    await orangeCardProductDetail.accessToOperative(type);
});

When(/^the user selects card details info$/, async function () {
    await orangeCardProductDetail.cardDetailInfo();
});

When(/^the user selects activate digital card$/, async function () {
    await orangeCardProductDetail.accessDigitalCard();
});

When(/^the user request an additional credit card$/, async function () {
    await navigation.card.newAdditionalCard.go();
});

When(/^the user selects the date filter$/, async function() {
    await orangeCardProductDetail.accessToDates();
});

When(/^the user selects the categories$/, async function () {
    await orangeCardProductDetail.accessToCategories();
});

When(/^the user enters the card and a movement with "([^"]*)"$/, async function (option) {
    utilsRewardsPage.getDataCardPoints('card with points');
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId });
    await navigation.card.movementsDetail.go(option);
});

When(/^the user accesses to "([^"]*)" "([^"]*)" card detail in stand in mode/, async function (cardStatus, cardType) {
    getDataCard(cardStatus, cardType);
    await navigation.dashboard.go();
    await navigation.card.orangeCardProductDetail.go({ card: storage['selectedProduct'].cardId, standIn: true });
});

When(/^the user copies pan number card$/, async function () {
    await orangeCardProductDetail.copyPanNumber();
});

When(/^the user accesses card block management operative with "([^"]*)" "([^"]*)" card$/,
    async function (cardStatus, cardType) {
        getDataCard(cardStatus, cardType);
        await navigation.card.orangeCardProductDetail.go({
            card: storage['selectedProduct'].cardId,
            standIn: false
        });
        if (cardStatus !== 'blocked renewal'){
            await orangeCardProductDetail.viewMoreOperatives();
        }
        await navigation.card.cardBlockManagement.go({cardStatus});
    }
);

When(/^the user attempts to access card block management operative with "([^"]*)" "([^"]*)" card$/,
    async function (cardStatus, cardType) {
        getDataCard(cardStatus, cardType);
        await navigation.card.orangeCardProductDetail.go({
            card: storage['selectedProduct'].cardId,
            standIn: false
        });
        await orangeCardProductDetail.viewMoreOperatives();
        await navigation.card.cardBlockManagement.attempt();
    }
);

When(/^the user accesses the detail of a card with the following criteria$/, async function (table) {
    const tableData = getCamelCaseTableData(table);
    const isAdditional = tableData.additional === 'yes';
    const cardId = utilsCardsPage.findCardByCriteria(tableData);
    if (isAdditional) {
        await navigation.card.additionalCardDetail.go({ card: cardId });
    } else {
        await navigation.card.orangeCardProductDetail.go({ card: cardId });
    }

});

When(/^the user selects the show more option for "([^"]*)" card/, async function (cardStatus) {
    if (cardStatus === 'operative') {
        await orangeCardProductDetail.viewMoreOperatives();
    }
});

When(/^the user goes to clarification care$/, async function() {
    await navigation.clarifications.clarificationsManagementCarePage.go();
});
