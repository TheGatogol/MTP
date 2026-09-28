import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsSignOperationModal from '../../components/cells-sign-operation-modal';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page()
class BlackhawkPurchase extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-blackhawkPurchaseDetail[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                cardSelector: {
                    properties: { root: 'cells-step-option-selector-spherica' },
                    generalCardInformation: 'cells-step cells-text-description-spherica',
                    specificCardInformation: 'cells-step cells-lists-spherica',
                    listAvaiableCards: {
                        properties: { root: 'cells-aggregation-card-select-spherica' },
                        fixedAmountCard: {
                            properties: { root: 'cells-card-select-spherica[id="0"]' },
                            selectCardToBuy: 'div.card-select.blue-core cells-radio-button-spherica.card-select__radio',
                            titleCard : 'div.content p.title',
                            informationCard : 'div.content p.subinfo',
                            extraInfoDateCard : 'div.content p.extraInfo.extra-info-italic',
                            amountCard: 'div.content div.amount-container cells-atom-amount-spherica',
                            cardDetailButton: 'div.content div.button-container cells-st-button-spherica button'
                        },
                        customAmountCard: {
                            properties: { root: 'cells-card-select-spherica[id="1"]' },
                            selectCardToBuy: 'div.card-select.blue-core cells-radio-button-spherica.card-select__radio',
                            titleCard : 'div.content p.title',
                            informationCard : 'div.content p.subinfo',
                            extraInfoDateCard : 'div.content p.extraInfo.extra-info-italic',
                            amountCard: 'div.content div.amount-container cells-atom-amount-spherica',
                            cardDetailButton: 'div.content div.button-container cells-st-button-spherica button'
                        },
                    },
                    continueCardSelectionButton: 'cells-sticky-container-spherica cells-summary-view-spherica div#collapser'

                },
                customAmountStep: {
                    properties: { root: 'cells-step-simulation-operation-spherica' },
                    title: 'h2',
                    amountTextArea: 'cells-enter-limited-amount-spherica cells-molecule-amount-input-spherica input#input',
                    informationLimitsAmount: 'cells-enter-limited-amount-spherica  div.cells-enter-limited-amount__range',
                    errorInformationLimitsAmount: 'cells-enter-limited-amount-spherica  div.cells-enter-limited-amount__error',
                    continueBtn: 'cells-enter-limited-amount-spherica cells-st-button-spherica button#enterAmountBtn',
                },
                listAvaiableCardsBlockStep: 'cells-step-option-selector-spherica __DISABLED__',
                customizableAmountBlockStep: 'cells-step-simulation-operation-spherica#cells-step-simulation-operation cells-step-spherica __DISABLED__',
                selectAccountBlockStep: 'cells-step-product-selector-spherica __DISABLED__',
                termsBlockStep: 'cells-step-card-checklist-contract-spherica __DISABLED__',
                selectAccountStep: {
                    properties: { root: 'cells-step-product-selector-spherica' },
                    title: 'h2',
                    accountSelectionOne: 'div.full cells-product-selector-spherica cells-product-item-spherica[data-index="0"]',
                    errorMessaggeBalance: 'cells-step-spherica cells-product-item-spherica#oneProductItem',
                    continueOneAccountBtn: 'cells-molecule-actions#defaultActions cells-st-button.primary button'
                },
                termsStep: {
                    properties: { root: 'cells-step-card-checklist-contract-spherica' },
                    title: 'h2',
                    chkBox: 'cells-checkbox-button-spherica',
                    continueBtn: '[data-selector="cells-step-card-checklist-contract-continue"]',
                    queryBtn: '#changeBtn',
                },
                summaryBtn: 'div.cells-st-button-spherica-container > cells-st-button-spherica.positive.full',
                dialogOperations: {
                    component: {
                        ComponentClass: GlomoAlertManager
                    }
                },
                signConnector: CellsSignOperationModal
            },
            elementsSpherica: {
                signConnector: CellsSignOperationModalSpherica
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async buyFixedAmountCard() {
        await (await this.cardSelector.listAvaiableCards.fixedAmountCard.selectCardToBuy.waitForClickable({timeout: config.wait.M})).click();
        await this.continueWithTheSelectionCard();
    }

    async buyCustomAmountCard() {
        await (await this.cardSelector.listAvaiableCards.customAmountCard.selectCardToBuy.waitForClickable({timeout: config.wait.M})).click();
        await this.continueWithTheSelectionCard();
    }

    async continueWithTheSelectionCard() {
        await this.cardSelector.continueCardSelectionButton.waitForDisplayed({timeout: config.wait.M});
        await this.cardSelector.continueCardSelectionButton.waitForAnimation({timeout: config.wait.M});
        await this.cardSelector.continueCardSelectionButton.waitForEnabled({timeout: config.wait.M});
        await this.cardSelector.continueCardSelectionButton.click();
    }

    async enterCorrectAmount(value) {
        await this.customAmountStep.amountTextArea.waitForAnimation({timeout: config.wait.M});
        await this.customAmountStep.amountTextArea.waitForEnabled({timeout: config.wait.M});
        await this.customAmountStep.amountTextArea.setValue({value: value, slow: true});
        await this.customAmountStep.continueBtn.waitForAnimation({timeout: config.wait.M});
        await this.customAmountStep.continueBtn.waitForEnabled({timeout: config.wait.M});
        await (await this.customAmountStep.continueBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async enterErrorAmount(value) {
        await this.customAmountStep.amountTextArea.waitForAnimation({timeout: config.wait.M});
        await this.customAmountStep.amountTextArea.waitForEnabled({timeout: config.wait.M});
        await this.customAmountStep.amountTextArea.setValue({value: value, slow: true});
    }

    async selectAccountWithFunds() {
        await this.selectAccountStep.accountSelectionOne.waitForDisplayed({timeout: config.wait.M});
        await this.selectAccountStep.accountSelectionOne.waitForAnimation({timeout: config.wait.M});
        await this.selectAccountStep.accountSelectionOne.waitForEnabled({timeout: config.wait.M});
        await this.selectAccountStep.accountSelectionOne.click();
    }

    async checkTerms() {
        await this.termsStep.chkBox.waitForDisplayed({timeout: config.wait.M});
        await this.termsStep.chkBox.waitForAnimation({timeout: config.wait.M});
        await this.termsStep.chkBox.waitForEnabled({timeout: config.wait.M});
        await this.termsStep.chkBox.click();
        await (await this.termsStep.continueBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async finishCardPurchase() {
        await this.summaryBtn.waitForDisplayed({timeout: config.wait.M});
        await this.summaryBtn.waitForAnimation({timeout: config.wait.M});
        await this.summaryBtn.waitForEnabled({timeout: config.wait.M});
        await this.summaryBtn.click();
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await (this.header.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'amount header':
                await (this.customAmountStep.title.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'amount error message':
                await (this.customAmountStep.errorInformationLimitsAmount.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'continue amount button':
                await this.customAmountStep.continueBtn.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'account header':
                await (this.selectAccountStep.title.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'account error message':
                await (this.selectAccountStep.errorMessaggeBalance.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'available cards step':
                await this.verifyElement(this.listAvaiableCardsBlockStep.specifySelector({placeholder: '__DISABLED__', value:value !== 'active' ? '' : '[active]'}));
                break;
            case 'customizable amount step':
                await this.verifyElement(this.customizableAmountBlockStep.specifySelector({placeholder: '__DISABLED__', value:value !== 'active' ? '' : '[active]'}));
                break;
            case 'account step':
                await this.verifyElement(this.selectAccountBlockStep.specifySelector({placeholder: '__DISABLED__', value:value !== 'active' ? '' : '[active]'}));
                break;
            case 'continue account button':
                await this.selectAccountStep.continueOneAccountBtn.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'terms step':
                await this.verifyElement(this.termsBlockStep.specifySelector({placeholder: '__DISABLED__', value:value !== 'active' ? '' : '[active]'}));
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async verifyElement(element = '') {
        await element.scrollIntoView();
        await element.waitForDisplayed({timeout: config.wait.M});
    }

}

export default new BlackhawkPurchase();
