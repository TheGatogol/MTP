import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeAmountInput from '../../components/cells-molecule-amount-input';
import moment from 'moment';

@page()
class ChecksManagementListSearcher extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-checksManagementListSearcher[state="active"]',
            elements: {
                title: 'cells-molecule-header h1#titleZone',
                closeButton: 'cells-molecule-header button#btnRight',
                dateFilterTitle: 'glomo-transactions-searcher glomo-date-filter cells-heading',
                dateFilterSelector: 'glomo-transactions-searcher glomo-date-filter cells-select-modal[item-selected=__ITEM__]',
                dateFilterModalItem: 'cells-middle-modal ul#itemList.list',
                dateFilterFrom: 'glomo-transactions-searcher glomo-date-filter .datePicker cells-date-input[name=minDate]',
                dateFilterTo: 'glomo-transactions-searcher glomo-date-filter .datePicker cells-date-input[name=maxDate]',
                amountFilterTitle: 'glomo-transactions-searcher glomo-amount-filter cells-heading',
                amountFilterFrom: {
                    component: {
                        ComponentClass: CellsMoleculeAmountInput,
                        args: {
                            root: `glomo-transactions-searcher glomo-amount-filter ${CellsMoleculeAmountInput._baseRoot}#enterAmountMin.amount-min `,
                        }
                    }
                },
                amountFilterTo: {
                    component: {
                        ComponentClass: CellsMoleculeAmountInput,
                        args: {
                            root: `glomo-transactions-searcher glomo-amount-filter ${CellsMoleculeAmountInput._baseRoot}#enterAmountMax.amount-max`,
                        }
                    }
                },
                categoryFilterTitle: 'glomo-transactions-searcher glomo-category-filter cells-heading',
                categoryFilterAll: 'glomo-transactions-searcher glomo-category-filter cells-radio-group cells-radio-button:nth-of-type(1)__CHECKED__',
                categoryFilterDeposited: 'glomo-transactions-searcher glomo-category-filter cells-radio-group cells-radio-button:nth-of-type(2)__CHECKED__',
                categoryFilterRejected: 'glomo-transactions-searcher glomo-category-filter cells-radio-group cells-radio-button:nth-of-type(3)__CHECKED__',
                filterButton: 'cells-confirm-buttons button.button__primary__DISABLED__',
                deleteButton: 'cells-confirm-buttons button.button__secondary__DISABLED__'
            },
            requiredElements: [
                'title'
            ],
        });
    }

    async _validateDateFilter(item, value) {
        const text = {
            'empty date': 'Seleccionar fecha',
            'today': 'Hoy',
        }[value];

        const ob = (await item.$$({selector: 'cells-atom-date span#date'}))[0];
        await ob.waitForText({text});
    }

    async _validateAmountFilter(item, value) {
        await item.waitForDisplayed();
        await item.input.waitForText({value});
    }

    _getDateSelector(item, value = 'not selected') {
        const selector = {
            'not selected': 'Selecciona un periodo',
            'selected': 'Hoy',
            'today': 'Hoy',
            'last week': 'Última semana',
            'last month': 'Último mes'
        }[value];
        return item.specifySelector({placeholder: '__ITEM__', value: `'${selector}'`});
    }

    _getDateModalSelector(item, value = 'not selected') {
        const selector = {
            'selected': '2',
            'not selected': '1',
            'today': '2',
            'last week': '3',
            'last month': '4'
        }[value];
        return item.specifySelector({placeholder: '__ITEM__', value: selector});
    }

    _getCategoryFilter(item, value = 'not selected') {
        const selector = {
            'selected': '[checked]',
            'not selected': ':not([checked])',
        }[value];
        return item.specifySelector({placeholder: '__CHECKED__', value: selector});
    }

    _getButtonFilter(item, value = 'enabled') {
        const selector = {
            'disabled': '[disabled]',
            'enabled': ':not([disabled])',
        }[value];
        return item.specifySelector({placeholder: '__DISABLED__', value: selector});
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'title':
                await this.title.waitForDisplayed();
                break;
            case 'close button':
                await this.closeButton.waitForDisplayed();
                break;
            case 'date title':
                await this.dateFilterTitle.waitForDisplayed();
                break;
            case 'date selector':
                await this._getDateSelector(this.dateFilterSelector, value).waitForDisplayed();
                break;
            case 'from date picker':
                await this._validateDateFilter(this.dateFilterFrom, value);
                break;
            case 'to date picker':
                await this._validateDateFilter(this.dateFilterTo, value);
                break;
            case 'amount title':
                await this.amountFilterTitle.waitForDisplayed();
                break;
            case 'from amount':
                await this._validateAmountFilter(this.amountFilterFrom, value);
                break;
            case 'to amount':
                await this._validateAmountFilter(this.amountFilterTo, value);
                break;
            case 'status title':
                await this.categoryFilterTitle.waitForDisplayed();
                break;
            case 'all status radio button':
                await this._getCategoryFilter(this.categoryFilterAll, value).waitForDisplayed();
                break;
            case 'deposited radio button':
                await this._getCategoryFilter(this.categoryFilterDeposited, value).waitForDisplayed();
                break;
            case 'rejected radio button':
                await this._getCategoryFilter(this.categoryFilterRejected, value).waitForDisplayed();
                break;
            case 'filter button':
                await this._getButtonFilter(this.filterButton, value).waitForDisplayed();
                break;
            case 'delete filter button':
                await this._getButtonFilter(this.deleteButton, value).waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goBack() {
        await this.backButton.waitForDisplayed();
        await this.backButton.click();
    }

    async doFilter() {
        const button = await this._getButtonFilter(this.filterButton);
        await button.waitForDisplayed({timeout: config.wait.L});
        await button.click();
    }

    async deleteFilters() {
        const button = await this._getButtonFilter(this.deleteButton);
        await button.waitForDisplayed();
        await button.click();
    }

    async editFilter({dateSelector, fromDate, toDate, fromAmount, toAmount, status}) {
        if (dateSelector && dateSelector !== 'not selected') {
            await this._editPeriod(dateSelector);
        }
        if (fromDate === 'date') {
            await this._editDate(this.dateFilterFrom);
        }
        if (toDate === 'date') {
            await this._editDate(this.dateFilterTo);
        }
        if (fromAmount === 'amount') {
            await this._editAmount(this.amountFilterFrom, 'small amount');
        }
        if (toAmount != null && toAmount !== 'empty amount') {
            await this._editAmount(this.amountFilterTo, toAmount);
        }
        if (status && status !== 'all') {
            await this._editStatus(status);
        }
    }

    async _editPeriod(value) {
        const dateSelector = await this._getDateSelector(this.dateFilterSelector, 'not selected');
        await dateSelector.waitForDisplayed();
        await dateSelector.click();
        const item = await this._getDateModalSelector(this.dateFilterModalItem, value);
        await item.click();
    }

    async _editDate(filter) {
        const commonFormat = 'YYYY-MM-DD';
        const date = moment();
        const input = (await filter.$$({selector: 'input.input-date'}))[0];
        await input.waitForEnabled();
        await input.setValue({value: date.format(commonFormat)});
    }

    async _editAmount(filter, amount) {
        const value = {
            'amount': '1000',
            'maxAmount': '9999999',
            'medium amount': '100',
            'small amount': '10'
        }[amount];
        await filter.setValue({value});
    }

    async _editStatus(value) {
        const item = {
            'other than all': this.categoryFilterDeposited,
            'charged': this.categoryFilterDeposited,
            'deposited': this.categoryFilterDeposited,
            'rejected': this.categoryFilterRejected
        }[value];

        await (await (await this._getCategoryFilter(item)
            .waitForAnimation({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async checkNumberErrorIsShown() {
        await this.amountFilterTo.errorMessageSpan.waitForDisplayed();
        await this.amountFilterTo.errorMessageIcon.waitForDisplayed();
    }
}

export default new ChecksManagementListSearcher();
