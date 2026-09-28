import {page, ScreenValidationKeyNotFound, ElementNotFoundError} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('Accounts Other Operatives')
class AccountsOtherOperatives extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-operations[state="active"]',
            elements: {
                backButton: 'button#btnLeft',
                operativesTitle: 'glomo-operations-list-group[continue="account"] div.list h1.title',
                operationList: 'cells-operation-swipe-list .operation-info cells-left-swipe-action:nth-of-type(5) div div .operation-name',
                listOperations: 'cells-operation-swipe-list',
                editAliasButton: 'cells-operations-list ul li[data-selector="editAlias"] button.link',
                payCardBtn: 'cells-operations-list ul li[data-selector="creditCardPayment"] button.link',
                cardlessWithdrawal: 'cells-operations-list ul li[data-selector="cardLessWithdrawal"] button.link',
                internationalTransferButton: 'cells-operations-list ul li[data-selector="international_transfers"] button.link',
                checksSectionButton: 'cells-operations-list ul li[data-selector="checksSection"] button.link',
                creditCardPaymentButton: 'cells-operations-list ul li[data-selector="creditCardPayment"] button.link',
                transfersButton: 'cells-operations-list ul li[data-selector="transfers"] button.link',
                billPaymentButton: 'cells-operations-list ul li[data-selector="billPayment"] button.link',
                cardLessWithdrawaltButton: 'cells-operations-list ul li[data-selector="cardLessWithdrawal"] button.link',
                buyAiretButton: 'cells-operations-list ul li[data-selector="buyAire"] button.link',
                statemensButton: 'cells-operations-list ul li[data-selector="statemens"] button.link',
                changePayrollButton: 'cells-operations-list-indicators #operations ul li:nth-child(6) button',
                receivePayrollButton: 'cells-operations-list ul li[data-selector="receivePayroll"] button.link',
                codiButton: 'cells-operations-list ul li[data-selector="codi"] button.link',
                internationalTransfersButton: 'cells-operations-list ul li[data-selector="international_transfers"] button.link',
                checksOperative: 'cells-operations-list ul li[data-selector="checksSection"] button.link',
                codicelSendButton: 'cells-operations-list ul li[data-selector="codicelSend"] button.link',
                vinculationDesvinculationCodicel: 'cells-operations-list ul li[data-selector="codicelConsent"] button.link',
                addVideoSelfieButton: 'cells-operations-list ul li[data-selector="videoSelfie"] button.link',
                upgradeAccountButton: 'cells-operations-list ul li[data-selector="upgrade"] button.link',
            },
            requiredElements: [
                'operativesTitle',
            ],
        });
    }

    async _screenValidation({item, value}) {
        const errorMessage = `${item} is not visible`;
        switch (item.toLowerCase()) {
            case 'check management':
                await this.checksSectionButton.waitForDisplayed({timeout: config.wait.M, errorMessage: errorMessage, reverse: value === 'not visible'});
                break;
            case 'credit card payment':
                if (value === 'not visible') {
                    await this.creditCardPaymentButton.waitForNotDisplayed({timeout: config.wait.L});
                } else {
                    await this.creditCardPaymentButton.waitForDisplayed({timeout: config.wait.M, errorMessage: errorMessage});
                }
                break;
            case 'transfer':
                await this.transfersButton.waitForDisplayed({timeout: config.wait.M, errorMessage: errorMessage});
                break;
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M, errorMessage: errorMessage});
                break;
            case 'bill Payment':
                await this.billPaymentButton.waitForDisplayed({timeout: config.wait.XL, errorMessage: errorMessage});
                break;
            case 'refills and packages':
                await this.buyAiretButton.waitForDisplayed({timeout: config.wait.M, errorMessage: errorMessage});
                break;
            case 'statements':
                await this.statemensButton.waitForDisplayed({timeout: config.wait.M, errorMessage: errorMessage});
                break;
            case 'change payroll':
                await this.changePayrollButton.waitForDisplayed({timeout: config.wait.M, errorMessage: errorMessage});
                break;
            case 'receive payroll':
                await this.receivePayrollButton.waitForDisplayed({timeout: config.wait.M, errorMessage: errorMessage});
                break;
            case 'codi':
                await this.codiButton.waitForDisplayed({timeout: config.wait.M, errorMessage: errorMessage});
                break;
            case 'codicel send':
                await this.codicelSendButton.waitForDisplayed({timeout: config.wait.M, errorMessage});
                break;
            case 'international transfers':
                await this.internationalTransfersButton.waitForDisplayed({timeout: config.wait.M, errorMessage: errorMessage});
                break;
            case 'edit alias':
                await this.editAliasButton.waitForDisplayed({timeout: config.wait.M, errorMessage: errorMessage});
                break;
            case 'checks operative':
                await this.checksOperative.waitForClickable({timeout: config.wait.M, errorMessage: errorMessage, reverse: value === 'not visible'});
                break;
            case 'expand account':
                await this.upgradeAccountButton.waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goBack() {
        await this.backButton.waitForClickable({timeout: config.wait.M});
        await this.backButton.click();
    }

    async accessTheCheckSection() {
        await this.checksSectionButton.waitForClickable({timeout: config.wait.M});
        await this.checksSectionButton.click();
    }

    async accessEditAlias() {
        await this.editAliasButton.waitForClickable({timeout: config.wait.L});
        await this.editAliasButton.click();
    }

    async accessUpgradeAccountHybrid() {
        await this.upgradeAccountButton.waitForDisplayed({timeout: config.wait.M});
        await this.upgradeAccountButton.waitForAnimation({timeout: config.wait.M});
        await this.upgradeAccountButton.waitForClickable({timeout: config.wait.M});
        await this.upgradeAccountButton.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async accessPayCard() {
        await this.payCardBtn.waitForClickable({timeout: config.wait.L});
        await this.payCardBtn.click();
    }

    async openBuyAire() {
        await this.buyAiretButton.waitForClickable({timeout: config.wait.L});
        await this.buyAiretButton.click();
    }

    async operations(operative) {
        const errorMessage = `${operative} is not visible`;
        switch (operative.toLowerCase()) {
            case 'edit alias':
                await this.editAliasButton.waitForClickable({timeout: config.wait.L});
                await this.editAliasButton.click();
                break;
            case 'cardless withdrawal':
                await this.cardlessWithdrawal.waitForClickable({timeout: config.wait.M, errorMessage});
                await this.cardlessWithdrawal.click();
                break;
            case 'codi':
                await this.codiButton.waitForClickable({timeout: config.wait.M, errorMessage});
                await this.codiButton.click();
                break;
            case 'codicel send':
                await this.codicelSendButton.waitForClickable({timeout: config.wait.M, errorMessage});
                await this.codicelSendButton.click();
                break;
            case 'statement account':
                await this.statemensButton.waitForClickable({timeout: config.wait.M, errorMessage});
                await this.statemensButton.click();
                break;
            case 'pay credit card':
                await this.payCardBtn.waitForClickable({timeout: config.wait.M, errorMessage});
                await this.payCardBtn.click();
                break;
            case 'payroll portability':
                await this.receivePayrollButton.waitForClickable({timeout: config.wait.M, errorMessage});
                await this.receivePayrollButton.click();
                break;
            case 'bill payment':
                await this.billPaymentButton.waitForClickable({timeout: config.wait.M, errorMessage});
                await this.billPaymentButton.click();
                break;
            case 'mobile top up':
                await this.buyAiretButton.waitForClickable({timeout: config.wait.M, errorMessage});
                await this.buyAiretButton.click();
                break;
            case 'expand account':
                await this.upgradeAccountButton.waitForClickable({timeout: config.wait.M});
                await this.upgradeAccountButton.click();
                break;
            default:
                throw new ElementNotFoundError({key: operative, args: arguments[0]});
        }
    }
    async doInternationalTransfer() {
        await this.internationalTransferButton.waitForClickable({timeout: config.wait.L});
        await this.internationalTransferButton.click();
    }
    async goToCardlessWithdrawal() {
        await this.operations('cardless withdrawal');
    }

    async accessPayrollAccount(){
        await this.receivePayrollButton.waitForClickable({timeout: config.wait.L});
        await this.receivePayrollButton.click();
    }
    async goToPayCard() {
        await this.operations('pay credit card');
    }
    async goToPayrollPortability() {
        await this.operations('payroll portability');
    }

    async goToCodicelSendMoney() {
        await this.codicelSendButton.waitForClickable({timeout: config.wait.M});
        await this.codicelSendButton.click();
    }
    async goToDesvinculationVinculationCodicel() {
        await (await (await this.vinculationDesvinculationCodicel.waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async goToAddVideoSelfie() {
        await (await this.addVideoSelfieButton.waitForClickable({timeout: config.wait.M}))
            .click();
    }
}

export default new AccountsOtherOperatives();
