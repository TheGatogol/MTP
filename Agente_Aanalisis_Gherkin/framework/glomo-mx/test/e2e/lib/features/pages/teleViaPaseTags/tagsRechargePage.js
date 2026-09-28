import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class TagsRecharge extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-rechargeTag[state="active"]',
            elements: {
                title: 'h1',
                detailSection: '.description-img',
                stepTag: {
                    amount: {
                        properties: {root: '.pase-tag'},
                        title: 'h2',
                        btnAmount: 'button[aria-label="__AMOUNT__ "]',
                        inputAmount: 'input',
                        moreInfoBtn: '#third-button',
                        continueBtn: '#enterAmountBtn',
                        maxError: '.cells-enter-limited-amoun-spherica__error',
                        changeBtn: '#changeBtn button',
                    },
                    account: {
                        properties: {root: 'cells-step-product-selector-spherica[last-step]'},
                        title: 'h2',
                        changeBtn: '#changeBtn button',
                        card: 'cells-product-item-spherica__SKELETON__[data-id="__CARDLIST__"]',
                        changeAcccount: '#primaryButton',
                        keepBtn: '#secondaryButton',
                        viewMoreBtn: '#viewMore',
                        errorMsg: '#notInline',
                    },
                    modal: {
                        properties: {root: 'cells-bottom-modal-spherica'},
                        title: 'header',
                        crossBtn: 'button.btn-close',
                        closeBtn: '#closeButton',
                        cards: 'cells-product-item-spherica__SKELETON__'
                    }
                },
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            title: 'h1',
                            txt: '.templates-wrapper',
                            btnClose: '.btn-close',
                        }
                    }
                ],
                operationSummary: 'cells-operation-summary-spherica',
                rechargeBtn: 'cells-operation-summary-spherica .tertiary',
            },
            requiredElements: [
                'title'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'know more':
                await this.dialogOperations.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                await this.dialogOperations.additionalElements.txt.waitForDisplayed({timeout: config.wait.M});
                await this.dialogOperations.additionalElements.btnClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary':
                await this.rechargeBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'account':
                await this.stepTag.account.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view more button':
                await (await this.stepTag.account.viewMoreBtn.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async rechargeTag() {
        await (await this.rechargeBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async amountSelect(amount) {
        await (await this.stepTag.amount.btnAmount.specifySelector({placeholder: '__AMOUNT__', value: amount}).waitForClickable({timeout: config.wait.M})).click();
    }

    async amountManual(amount) {
        await (await this.stepTag.amount.inputAmount.waitForDisplayed({timeout: config.wait.M})).setValue({value: amount});
        await this.stepTag.amount.continueBtn.waitForAnimation({timeout: config.wait.L});
        await (await this.stepTag.amount.continueBtn.waitForClickable({timeout: config.wait.L})).click();
    }

    async amountBtnEnabled(amount, flag) {
        flag ?
            await this.stepTag.amount.btnAmount.specifySelector({placeholder: '__AMOUNT__', value: amount}).waitForEnabled({timeout: config.wait.L}) :
            await this.stepTag.amount.btnAmount.specifySelector({placeholder: '__AMOUNT__', value: amount}).waitForEnabled({timeout: config.wait.L, reverse: true});
    }

    cardSelect(card, attr) {
        return this.stepTag.account.card.specifySelector({placeholder: '__CARDLIST__', value: card}).specifySelector({placeholder: '__SKELETON__', value: attr});
    }

    async selectFewAmount({status, firstValue, secondValue} = {}) {
        switch (status) {
            case 'few':
                await this.amountBtnEnabled(firstValue, true);
                await this.amountBtnEnabled(secondValue, true);
                await this.amountBtnEnabled('500', false);
                await this.amountSelect(firstValue);
                break;
            case 'any':
                await this.amountBtnEnabled('200', false);
                break;
            default:
                throw new Error(`Status '${status}' not found in status list.`);
        }
    }

    async doSection(section, manual, value) {
        switch (section) {
            case 'amount':
                manual ?
                    await this.amountSelect(value) :
                    await this.amountManual(value);
                break;
            case 'account':
                manual ?
                    await this.amountSelect(value) :
                    await this.amountManual(value);
                await (await (await this.cardSelect('00740680001500018265', '').waitForAnimation({timeout: config.wait.M})).waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`Section '${section}' not found in section list.`);
        }
    }

    async editAmount(flag) {
        await this.stepTag.amount.changeBtn.waitForDisplayed({timeout: config.wait.M});
        await (await this.stepTag.amount.changeBtn.waitForClickable({timeout: config.wait.M})).click();
        flag ?
            await this.amountSelect('300') :
            await this.amountManual('200');
    }

    async editAccount(acc) {
        await this._hideOperationSummary(true);
        await (await (await this.stepTag.account.changeBtn.scrollIntoView()).waitForClickable({timeout: config.wait.L})).click();
        switch (acc) {
            case 'change':
                await (await (await this.stepTag.account.changeAcccount
                    .waitForAnimation({timeout: config.wait.L}))
                    .waitForDisplayed({timeout: config.wait.L}))
                    .click();
                await (await (await this.cardSelect('00740680001500018265', '').waitForAnimation({timeout: config.wait.L})).waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'keep':
                await (await (await this.stepTag.account.keepBtn
                    .waitForAnimation({timeout: config.wait.L}))
                    .waitForDisplayed({timeout: config.wait.L}))
                    .click();
                break;
            default:
                throw new Error(`Action '${acc}' not found in action list.`);
        }
        await this._hideOperationSummary(false);
    }

    async editSection(section, acc, flag) {
        switch (section) {
            case 'amount':
                await this.editAmount(flag);
                break;
            case 'account':
                await this.editAccount(acc);
                break;
            default:
                throw new Error(`Section '${section}' not found in section list.`);
        }
    }

    async toKnowMore() {
        await (await this.stepTag.amount.moreInfoBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async viewMoreAccounts(action) {
        await this.stepTag.account.title.waitForDisplayed({timeout: config.wait.M});
        await (await this.stepTag.account.viewMoreBtn.waitForDisplayed({timeout: config.wait.M})).click();

        await this.stepTag.modal.title.waitForDisplayed({timeout: config.wait.XL});
        await this.stepTag.modal.crossBtn.waitForDisplayed({timeout: config.wait.XL});
        await this.stepTag.modal.closeBtn.waitForDisplayed({timeout: config.wait.XL});
        const cardsNum = (await this.stepTag.modal.cards.specifySelector({placeholder: '__SKELETON__', value: ''}).elements()).length;
        assert(cardsNum > 3, 'There are 3 or less accounts');
        switch (action) {
            case 'select one':
                await (await this.stepTag.modal.cards.specifySelector({placeholder: '__SKELETON__', value: '[data-index="0"]'}).waitForDisplayed({timeout: config.wait.M})).click();
                await this.rechargeBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'close':
                await (await this.stepTag.modal.closeBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`Action '${action}' not found in action list.`);
        }
    }

    async viewAccount(status) {
        switch (status) {
            case 'active':
                await (await this.cardSelect('00740680001500018265', '').waitForDisplayed({timeout: config.wait.M})).isClickable();
                break;
            case 'blocked':
                assert(!(await this.cardSelect('00740680001500018257', 'disabled').isClickable()), 'Button is clickable');                break;
            default:
                throw new Error(`Status '${status}' not found in status list.`);
        }
    }

    async _hideOperationSummary(attributeValue) {
        await this.operationSummary.execute({
            script: () => this.setAttribute('hidden', true),
            args: [attributeValue]
        });
    }
}

export default new TagsRecharge();
