import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

import ProductDetail from './productDetail';

@page()
class FundProductDetail extends ProductDetail {
    constructor() {
        super({
            root: '#cells-template-traditionalInvestmentFund[state="active"]',
            elements: {
                fundItem: '[id="__FUND_ID__"]',
                radioButtonSingle: '[data-tag-name="bbva-form-radio-group"] #singleRadio',
                radioButtonMulti: '[data-tag-name="bbva-form-radio-group"] #multipleRadio',
                confirmButton: '.help-modal .modal-main .modal-footer [data-tag-name="bbva-button-default"][text="Confirmar"]',
                buttonYear: '[data-tag-name="bbva-form-select"]#selectYearInput #button',
                buttonMonthly: '[data-tag-name="bbva-form-select"]#selectMonthInput #button',
                modal: {
                    properties: {root: 'fund-information-monthly-statement-enquiry-fund'},
                    selectYear: '[data-tag-name="bbva-form-option"][value="__value__"]',
                    modalNotStatement: '#statementsModal [data-tag-name="bbva-type-text"][text="No tienes estados de cuenta disponibles para consultar"]',
                    withoutStatement: '#statementsModal',
                    modalFirtsStatement: '#statementsModal [data-tag-name="bbva-type-text"][text="Solo tienes disponible un estado de cuenta para consultar."]',
                    labelFirtsStatement: '#statementsModal [data-tag-name="bbva-type-text"][text="Último estado de cuenta"]',
                },
                fund: {
                    properties: {
                        root: '[data-tag-name="traditional-fund-mx"]'
                    },
                    header: '[variant="first-level-sequential"]',
                    details: '[data-tag-name="bbva-type-link"]',
                    fundsList: '.portfolio-list',
                    noFundsMessage: '.empty-state [data-tag-name="bbva-type-text"]',
                    operations: '[data-tag-name="bbva-button-action"]',
                    help: '.title-funds [data-tag-name="bbva-type-icon"]',
                    terms: [BbvaHelpModal, {
                        modifiers: '[visible]',
                        additionalElements: {
                            title: '#helpModalTitle',
                            bullets: '.content',
                        }
                    }],
                },
            },
            requiredElements: [
                'fund'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'fund contract':
                await this.fund.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'funds help tooltip':
                await this.fund.help.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fund operations buttons':
                await this.fund.operations.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fund list':
                await this.fund.fundsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no funds message':
                await this.fund.noFundsMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'without statements':
                await this.modal.modalNotStatement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button':
                await this.confirmButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'firts statement':
                await this.modal.modalFirtsStatement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label statement':
                await this.modal.labelFirtsStatement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'radio button monthly':
                await this.buttonMonthly.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'radio button year':
                await this.buttonYear.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'radio button single':
                await this.radioButtonSingle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'radio button multiple':
                await this.radioButtonMulti.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal without statement':
                await this.modal.withoutStatement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms modal header':
                await this.fund.terms.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms modal close':
                await this.fund.terms.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms modal title':
                await this.fund.terms.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms modal bullets':
                await this.fund.terms.additionalElements.bullets.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessToMoreInfoPage() {
        await (await this.fund.details.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async showTermsModal() {
        await (await this.fund.help.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async accessToFundDetail(id) {
        const fundId = id || global.user.products.investmentFunds[0].funds[0].fundId;
        const fundBtn = this.fundItem.specifySelector({placeholder: '__FUND_ID__', value: fundId});
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.M
        });
        await fundBtn.waitForClickable({timeout: config.wait.M});
        await fundBtn.click();
    }

    async accessToOperative(operative) {
        const operatives = {
            'new': 0,
            'monthly statement': 1,
            'edit alias': 2,
        };
        await this.waitForElementsExist(this.fund.operations);
        const button = (await this.fund.operations.elements()).value[operatives[operative]];
        await (await button.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async accesessSingleDate() {
        await (await this.radioButtonSingle.waitForClickable({timeout: config.wait.M})).click();
        await (await this.confirmButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async accesessMultipleDate(year, month) {
        await (await this.radioButtonMulti.waitForClickable({timeout: config.wait.M})).click();
        await (await this.buttonYear.waitForClickable({timeout: config.wait.M})).click();
        const years = this.modal.selectYear.specifySelector({placeholder: '__value__', value: year});
        await this.waitByLastDigits(years);
        await years.click();
        await (await this.buttonMonthly.waitForClickable({timeout: config.wait.M})).click();
        const monthly = this.modal.selectYear.specifySelector({placeholder: '__value__', value: month});
        await this.waitByLastDigits(monthly);
        await monthly.click();
        await (await this.confirmButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async waitByLastDigits(lastDigits) {
        const element = typeof lastDigits === 'string'
            ? this.card.specifySelector({placeholder: '__LAST_DIGITS__', value: lastDigits})
            : lastDigits;
        return element;
    }
}

export default new FundProductDetail();
