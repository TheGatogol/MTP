import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsTransactionsList from '../../components/cells-transactions-list';
import CellsMoleculeTransactionsListItem from '../../components/cells-molecule-transaction-list-item';

@page()
class ChecksDepositsList extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-checksDepositsList[state="active"]',
            elements: {
                title: 'cells-molecule-header h1#titleZone',
                backButton: 'cells-molecule-header button#btnLeft',
                topDescription: 'cells-text-description#mainDescription p[data-selector="mainDescription-0"]',
                bottomDescription: 'cells-text-description#bottomDescription p[data-selector="secondaryDescription-0"]',
                checkDate: 'cells-molecule-group-transactions-list .transaction-group__date',
                viewMore: 'cells-molecule-header',
                viewAll: 'cells-transactions-list div.list div.list__header cells-st-button',
                orderButton: 'filter-tags .sort-by',
                filterButton: 'cells-transactions-list button[class="floated-button"] iron-icon',
                filterTag: 'filter-tags cells-molecule-link-icon span',
                filterTagCloseIcon: 'filter-tags cells-molecule-link-icon cells-atom-icon:nth-of-type(__INDEX__)',
                chargedCheck: '[data-selector="0000052"] cells-molecule-transaction-list-item .transaction-status.fulfillment-status.success',
                rejectedCheck: 'cells-molecule-transaction-list-item .transaction-status.fulfillment-status.error',
                checksListItem: {
                    component: {
                        ComponentClass: CellsMoleculeTransactionsListItem,
                    }
                },
                checksList: {
                    component: {
                        ComponentClass: CellsTransactionsList,
                    }
                }
            },
            requiredElements: [
                'title'
            ],
        });
    }

    async _validateCheckItems({ qty, status, query }) {
        const checksQuantity = qty ? parseInt(qty) : 1;
        const type = {
            charged: '.success',
            rejected: '.error'
        }[status] || '';
        const itemSelector = '.transaction-list__item cells-molecule-transaction-list-item';
        const itemTypeSelector = `.transaction-status.fulfillment-status${type}`;

        //Get all checks groups (all groups by dates)
        const els = (await this.checksList.transactionsListGroup.elements()).value;

        //Get checks from group that have <checksQuantity> with <status>
        const getChecksByType = async dateElement => {
            const checkElements = await dateElement.$$({selector: itemSelector});

            const filterElements = [];
            for (const checkElement of checkElements) {
                if ((await checkElement.is.visible()) && (await checkElement.$$({selector: itemTypeSelector})).length > 0) {
                    filterElements.push(checkElement);
                }
            }

            return filterElements;
        };

        const checks = [];

        switch (query) {
            case 'sameDate':
                for (const dateElement of els) {
                    const checksOfType = await getChecksByType(dateElement);
                    if (checksOfType.length >= checksQuantity) {
                        checks.push(checksOfType);
                    }
                }

                if (checks.length === 0) {
                    throw new Error(`Cannot find ${qty || ''} ${status} checks the same day`);
                }
                break;
            case 'differentDate':
                for (const dateElement of els) {
                    const checksOfType = await getChecksByType(dateElement);
                    checks.push(..._.castArray(checksOfType));
                }

                if (checks.length < checksQuantity) {
                    throw new Error(`Cannot find ${qty || ''} ${status} checks at different dates`);
                }
                break;
            default:
                break;
        }
    }

    async _validateFilterTags(item, value) {
        const text = {
            'today': 'Hoy',
            'from label': 'Desde $100',
            'last month': 'Último mes',
        }[value];

        await item.waitForText({ text });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text':
                await this.topDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text bottom':
                await this.bottomDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'order button':
                await this.orderButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no items asset':
                await this.checksList.transactionsEmptyListImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no items text':
                await this.checksList.transactionsEmptyListText.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'last deposited checks title':
                await this.checksList.transactionsListTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check date':
                await this.checkDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check id':
                await this.checksListItem.transactionConcept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check amount':
                await this.checksListItem.transactionAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check item':
                await this._validateCheckItems({ qty: value, query: 'differentDate'});
                break;
            case 'check item charged':
                await this._validateCheckItems({ qty: value, query: 'differentDate', status: 'charged'});
                break;
            case 'check item rejected':
                await this._validateCheckItems({ qty: value, query: 'differentDate', status: 'rejected'});
                break;
            case 'same date with charged checks':
                await this._validateCheckItems({ qty: value, query: 'sameDate', status: 'charged'});
                break;
            case 'same date with rejected checks':
                await this._validateCheckItems({ qty: value, query: 'sameDate', status: 'rejected'});
                break;
            case 'check items ordered by':
                await this._validateCheckItems({ qty: 3, query: value, status: 'rejected'});
                break;
            case 'add floating button':
            case 'filter floating button':
                await this.checksList.floatingButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view more link':
                await this.viewAll.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'filtered labels':
                await this._validateFilterTags(this.filterTag, value);
                break;
            case 'empty filter tags':
                await this.filterTag.waitForDisplayed({timeout: config.wait.XL, reverse: true});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goBack() {
        await this.backButton.waitForDisplayed({timeout: config.wait.L});
        await this.backButton.click();
    }

    async viewMoreChecks() {
        await this.viewAll.scrollIntoView();
        await this.viewAll.waitForDisplayed({timeout: config.wait.M});
        await this.viewAll.waitForClickable({timeout: config.wait.M});
        await this.viewAll.click();
    }

    async applyFilter() {
        await this.filterButton.waitForDisplayed({timeout: config.wait.L});
        await this.filterButton.waitForClickable({timeout: config.wait.L});
        await this.filterButton.click();
    }

    async orderList(order) {
        await this.orderButton.waitForDisplayed({timeout: config.wait.L});
        await this.orderButton.click();
        if (order === 'ascending') {
            await this.orderButton.click();
        }
    }

    async removeFilterLabel(index) {
        const icon = this.filterTagCloseIcon.specifySelector({placeholder: '__INDEX__', value: index});
        await icon.waitForDisplayed({timeout: config.wait.L});
        await icon.click();
    }

    async goToChecksDepositDetail(status) {
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.XXXL});
        await this[`${status}Check`].waitForDisplayed({timeout: config.wait.L});
        await this[`${status}Check`].click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

    async goToChecksDepositsAdd() {
        await this.checksList.floatingButton.waitForDisplayed({timeout: config.wait.L});
        await this.checksList.floatingButton.click();
    }

    async retryOperative(times) {
        let i = 0;
        while (i < times) {
            await this.errorDialogOperations.confirmDialog({expectToDisappear: false});
            i++;
        }
    }
}

export default new ChecksDepositsList();
