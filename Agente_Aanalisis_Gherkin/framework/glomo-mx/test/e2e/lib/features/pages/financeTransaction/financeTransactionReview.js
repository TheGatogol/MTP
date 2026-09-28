import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

import CellsConfirmButtons from '../../components/cells-confirm-buttons';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class FinancingPurchaseReview extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'FinancingPurchaseReview',
            root: '#cells-template-financingPurchaseReview[state="active"]',
            elements: {
                //header
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },

                // header-section
                operationStatus: '#header-section h2[data-selector="cells-successful-response-title-text"]',
                dateOperation: '#header-section cells-atom-date[data-selector="cells-successful-response-date"] #date',
                monthlyPayLabel: '#header-section p[data-selector="cells-successful-response-amount-label"]',
                monthlyPayValue: '#header-section cells-atom-amount[data-selector="cells-successful-response-charge-amount"] span.amount-wrapper',
                deferredAmountLabel: '[data-selector="glomo-financing-purchase-deferred-amount"] [data-selector="cells-key-values-key"]',
                deferredAmountValue: '[data-selector="glomo-financing-purchase-deferred-amount"] .value .value-item.value-item-0 .value-simple',
                annualInterestLabel: '[data-selector="glomo-financing-revire-percentage-list"] [data-selector="cells-key-values-key"]',
                annualInterestValue: '[data-selector="glomo-financing-revire-percentage-list"] .value .value-item.value-item-0 .value-simple',
                totalAmountLabel: '[data-selector="glomo-financing-purchase-total-amount"] [data-selector="cells-key-values-key"]',
                totalAmountValue: '[data-selector="glomo-financing-purchase-total-amount"] .value .value-item.value-item-0 .value-simple',

                //body-section
                cardImage: '[data-selector="cells-successful-response-origin-avatar"] .cells-contact-avatar__image',
                cardAlias: '[data-selector="cells-successful-response-top-info-card"] span.key',
                cardPan4: '[data-selector="cells-successful-response-top-info-card"] cells-molecule-mask .wrapper',
                commerceLabel: '#body-section li[data-selector="cells-successful-response-top-info-commerce"] .key',
                commerceValue: '#body-section li[data-selector="cells-successful-response-top-info-commerce"] .value',
                monthLabel: '#body-section li[data-selector="cells-successful-response-top-info-info-month"] .key',
                monthValue: '#body-section li[data-selector="cells-successful-response-top-info-info-month"] .value',
                pointsDiscardedLabel: '#body-section li[data-selector="cells-successful-response-top-info-points"] .key',
                pointsDiscardedValue: '#body-section li[data-selector="cells-successful-response-top-info-points"] .value',
                folioTitle: '#body-section li[data-selector="cells-successful-response-top-info-folio"] .key',
                folioValue: '#body-section li[data-selector="cells-successful-response-top-info-folio"] .value',
                info: '#body-section span.message',

                exit: {
                    component: {
                        ComponentClass: CellsConfirmButtons
                    }
                }

            },
            requiredElements: [
                'operationStatus',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            //header
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            //header section
            case 'operation status':
                await this.operationStatus.waitForText({timeout: config.wait.M});
                break;
            case 'operation date':
                await this.dateOperation.waitForText({timeout: config.wait.M});
                break;
            case 'monthly payment':
                await this.monthlyPayLabel.waitForDisplayed({timeout: config.wait.M});
                await this.monthlyPayLabel.waitForText({timeout: config.wait.M});
                await this.monthlyPayValue.waitForDisplayed({timeout: config.wait.M});
                await this.monthlyPayValue.waitForText({timeout: config.wait.M});
                break;
            case 'deferred amount':
                await this.deferredAmountLabel.waitForDisplayed({timeout: config.wait.M});
                await this.deferredAmountLabel.waitForText({timeout: config.wait.M});
                await this.deferredAmountValue.waitForDisplayed({timeout: config.wait.M});
                await this.deferredAmountValue.waitForText({timeout: config.wait.M});
                break;
            case 'annual interest rate':
                await this.annualInterestLabel.waitForDisplayed({timeout: config.wait.M});
                await this.annualInterestLabel.waitForText({timeout: config.wait.M});
                await this.annualInterestValue.waitForDisplayed({timeout: config.wait.M});
                await this.annualInterestValue.waitForText({timeout: config.wait.M});
                break;
            case 'total amount due':
                await this.totalAmountLabel.waitForDisplayed({timeout: config.wait.M});
                await this.totalAmountLabel.waitForText({timeout: config.wait.M});
                await this.totalAmountValue.waitForDisplayed({timeout: config.wait.M});
                await this.totalAmountValue.waitForText({timeout: config.wait.M});
                break;
            //body section
            case 'card image':
                await this.cardImage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'card alias':
                await this.cardAlias.waitForDisplayed({timeout: config.wait.L});
                await this.cardAlias.waitForText({timeout: config.wait.L});
                break;
            case 'card pan4':
                await this.cardPan4.waitForDisplayed({timeout: config.wait.L});
                await this.cardPan4.waitForText({timeout: config.wait.L});
                break;
            case 'commerce':
                await this.commerceLabel.waitForDisplayed({timeout: config.wait.M});
                await this.commerceLabel.waitForText({timeout: config.wait.M});
                await this.commerceValue.waitForDisplayed({timeout: config.wait.M});
                await this.commerceValue.waitForText({timeout: config.wait.M});
                break;
            case 'months without interest':
            case 'months with interest':
                await this.monthLabel.waitForDisplayed({timeout: config.wait.M});
                await this.monthLabel.waitForText({timeout: config.wait.M});
                await this.monthValue.waitForDisplayed({timeout: config.wait.M});
                await this.monthValue.waitForText({timeout: config.wait.M});
                break;
            case 'points to be discarded':
                await this.pointsDiscardedLabel.waitForDisplayed({timeout: config.wait.M});
                await this.pointsDiscardedLabel.waitForText({timeout: config.wait.M});
                await this.pointsDiscardedValue.waitForDisplayed({timeout: config.wait.M});
                await this.pointsDiscardedValue.waitForText({timeout: config.wait.M});
                break;
            case 'folio':
                await this.folioTitle.waitForDisplayed({timeout: config.wait.L});
                await this.folioTitle.waitForText({timeout: config.wait.L});
                await this.folioValue.waitForDisplayed({timeout: config.wait.L});
                await this.folioValue.waitForText({timeout: config.wait.L});
                break;
            case 'infobox message':
                await this.info.waitForDisplayed({timeout: config.wait.L});
                await this.info.waitForText({timeout: config.wait.L});
                break;
            //buttons
            case 'exit':
                await this.exit.canConfirm();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    /**
     * Through this function and the modal-specific step, we will be able to validate our modal.
     * By default, this function uses the elementValidation function from glomo-alert-manager
     *
     * Screen specific implementations or terminology of our modal cam be implemented here,
     * using the default option for the glomo-alert-manager default validation function
     * @param {object} [options] Options passed as columns on step
     */
    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'error icon':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HERO_IMAGE});
                break;
            case 'tittle':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.TITLE});
                break;
            case 'description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            case 'accept':
            case 'retry':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            case 'exit':
                await this.dialogOperations.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }
}

export default new FinancingPurchaseReview();
