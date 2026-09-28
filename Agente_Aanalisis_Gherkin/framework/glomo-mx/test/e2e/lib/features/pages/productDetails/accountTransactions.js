import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import BbvaHeaderMain from '../../components/bbva-header-main';

@page()
class AccountTransactions extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-accountTransactions[state="active"]',
            elements: {
                header: [BbvaHeaderMain],
                infoMessage: 'glomo-icon-message.transactions-modal',
                movements: 'cells-transactions-list cells-molecule-group-transactions-list .transaction-group .transaction-list__item',
                transactionsList: '.transactionsViewAll .list #account-transactions',
                seeMovementDetailItem: '.transactionsViewAll .list #account-transactions #item-list-0-0-0',
                seeMovementDetailLoan: '#settled #account-transactions [data-selector="Pago de prestamo"]',
                lastMovement: '#settled #account-transactions cells-molecule-transaction-list-item:last-of-type',
                noMovements:'#settled .no-more-items__text',
                seeMovement: '.transactionsViewAll .list #account-transactions #item-list-0-0-1',
                movementsDate: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-core-heading"]',
                movementAmount: '.transaction-group [data-tag-name="transaction-item"] .transaction-container #amount',
                movementCategory: '.transaction-group [data-tag-name="transaction-item"] .transaction-container #title',
                helpButton: 'cells-molecule-header #btnRight',
                listMovements: 'cells-transactions-list #account-transactions',
                entirePage: 'glomo-transactions',
                directDebitMovement: '#cells-template-accountTransactions glomo-transactions #settled #account-transactions #item-list-0-3-5',
                directDebitClarificationMovement: '#cells-template-accountTransactions glomo-transactions #settled #account-transactions #item-list-0-3-3',
                clarificationsButton: 'cells-transaction-detail.cardDetailTransactions div.claim-transaction',
                movementClarificationsDebit: 'glomo-transactions div.transaction-list__item[data-selector*="__CONCEPT__"i]',
                returnButton: '[id="btnLeft"]',
                modalInfo: [
                    BbvaHelpModal,
                ],
                dialogOperations: [
                    GlomoAlertManager
                ],
            },
            requiredElements: [
                'root'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'info message':
                await this.infoMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'transactions list':
                await this.transactionsList.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'header modal':
                await this.modalInfo.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button right modal':
                await this.modalInfo.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description modal':
                await this.modalInfo.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title modal':
                await this.modalInfo.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list movements':
                await this.listMovements.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date movements':
                await this.movementsDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount movements':
                await this.movementAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category movements':
                await this.movementCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message icon':
                await this.dialogOperations.paragraphIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text':
                await this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help button':
                await this.helpButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async seeOneMovement({item, movementSelector}){
        switch (item.toLowerCase()) {
            case 'loan payment':
                await this.noMovements.waitForDisplayed({timeout: config.wait.L});
                await this.noMovements.scrollIntoView();
                await this.seeMovementDetailLoan.waitForDisplayed({timeout: config.wait.L});
                await this.seeMovementDetailLoan.scrollIntoView();
                await this.seeMovementDetailLoan.click();
                break;
            case 'direct debit movement':
                await this.selectMovementProductDetailForDirectDebit(movementSelector);
                break;
            case 'direct debit clarification movement':
                await this.directDebitClarificationMovement.waitForDisplayed({timeout: config.wait.M});
                await this.directDebitClarificationMovement.scrollIntoView();
                await this.directDebitClarificationMovement.click();
                break;
            default:
                throw new Error(`The ${item} is not implemented.`);
        }
    }

    async seeMovementDetail() {
        await this.seeMovementDetailItem.scrollIntoView({block: 'end'});
        await this.seeMovementDetailItem.waitForClickable({timeout: config.wait.XL});
        await this.seeMovementDetailItem.click();
    }

    async accessListMovements() {
        await (await this.movements.elements()).value[9].waitForDisplayed({timeout: config.wait.M});
        await (await this.movements.elements()).value[9].scrollIntoView();
        await (await this.movements.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
        await (await this.movements.elements()).value[1].scrollIntoView();
        await (await this.movements.elements()).value[19].waitForDisplayed({timeout: config.wait.M});
        await (await this.movements.elements()).value[19].scrollIntoView();
    }

    async openHelpModal() {
        await this.helpButton.waitForDisplayed({timeout: config.wait.M});
        await this.helpButton.click();
    }

    async seeMovementDetailLast() {
        await this.seeMovement.scrollIntoView();
        await this.seeMovement.waitForClickable();
        await this.seeMovement.click();
    }

    async goToMoreMovements(flag) {
        if(flag === 'with') {
            await this.noMovements.waitForDisplayed({timeout: config.wait.M});
            await this.noMovements.scrollIntoView({block: 'end'});
        }
        await this.entirePage.waitForDisplayed({timeout: config.wait.M});
        await this.entirePage.scrollIntoView({block: 'end'});
    }

    async selectMovementProductDetailForDirectDebit(movementSelector) {
        const movementExist = user.products.account[0].movements.find( currentElement => currentElement.data.concept === movementSelector);
        if(user.products.account[0].movements && movementExist) {
            const element = this.movementClarificationsDebit.specifySelector({placeholder: '__CONCEPT__', value: movementSelector});
            await element.waitForDisplayed({timeout: config.wait.M});
            await element.click();
        }
    }

    async goBack() {
        await this.returnButton.waitForClickable();
        await this.returnButton.click();
    }
}

export default new AccountTransactions();
