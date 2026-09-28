import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class MortgageMainTracking extends AbstractGlomoPage {
    constructor() {
        const mainPage = '[data-tag-name="bbva-feature-mortgage-tracking"] [data-tag-name="mortgage-tracking-main"]';
        const detailPage = '[data-tag-name="bbva-transition-container"] .container [data-tag-name="mortgage-tracking-detail"]';
        super({
            root: '#cells-template-mortgageMainTracking[state="active"]',
            elements: {
                //upper side
                header: `${mainPage} [data-tag-name="bbva-header-main"]`,
                //mid side
                mainPanel: `${mainPage} [data-tag-name="bbva-panel-detail"]`,
                mainPanelLink: `${mainPage} [data-tag-name="bbva-panel-detail"] [data-tag-name="bbva-link"]`,
                mainNotification: `${mainPage} [data-tag-name="bbva-notification-message"]`,
                mainTracking: `${mainPage} [data-tag-name="bbva-progress-vertical-step"]`,
                mainTrackingLink: `${mainPage} [data-tag-name="bbva-progress-vertical-step"] [data-tag-name="bbva-type-link"]`,
                // Page Detail
                detailHeader: `${detailPage} #detail-header`,
                listElementProduct: `${detailPage} #tracking-product`,
                listElementSubproduct: `${detailPage} #tracking-subproduct `,
                listElementDescription: `${detailPage} #tracking-description `,
                listElementFolio: `${detailPage} #tracking-folio `,
                listElementRequestDate: `${detailPage} #tracking-request-date `,
                listElementExpirateDate: `${detailPage} #tracking-expiration-date `,
                listElementRequestAmount: `${detailPage} #tracking-request-amount `,
                listElementTerm: `${detailPage} #tracking-term `,
                listElementMonthlyPayment: `${detailPage} #tracking-monthly-payment `,
                detailHeaderCategory: `${detailPage} #detail-category `,
                listElementTextInterestRate: `${detailPage} #detail-text-interest-rate `,
                listElementTextCat: `${detailPage} #detail-text-cat `,
                detailNotification: `${detailPage} #detail-notification `,
                tooltipExpirateDateLink: `${detailPage} #tracking-expiration-date [data-tag-name="bbva-core-icon"] `,
                tooltipRequestAmountLink: `${detailPage} #tracking-request-amount [data-tag-name="bbva-core-icon"] `,
                tooltipMonthlyPaymentLink: `${detailPage} #tracking-monthly-payment [data-tag-name="bbva-core-icon"] `,
                //Tooltip
                tooltipHeader: `${detailPage} [data-tag-name="mortgage-tracking-tooltip"] [data-tag-name="bbva-help-modal"] .modal-header`,
                tooltipTitle: `${detailPage} [data-tag-name="mortgage-tracking-tooltip"] [data-tag-name="bbva-help-modal"] .modal-main`,
                tooltipDescription: `${detailPage} [data-tag-name="mortgage-tracking-tooltip"] [data-tag-name="bbva-help-modal"] .modal-main`,
                tooltipButton: `${detailPage} [data-tag-name="mortgage-tracking-tooltip"] [data-tag-name="bbva-help-modal"] .modal-main .modal-footer`,
                // Modal Expiration Date
                modalExpirationDate: '[data-tag-name="bbva-feature-mortgage-tracking"] [data-tag-name="mortgage-tracking-modal"] [data-tag-name="bbva-help-modal"]',
                //Modal Status Tracking
                modalTrackingHeader: '[data-tag-name="bbva-feature-mortgage-tracking"] [data-tag-name="mortgage-tracking-modal"] [data-tag-name="bbva-help-modal"] .modal-header',
                modalTrackingTitle: '[data-tag-name="bbva-feature-mortgage-tracking"] [data-tag-name="mortgage-tracking-modal"] [data-tag-name="bbva-help-modal"] .modal-main',
                modalTrackingButton: '[data-tag-name="bbva-feature-mortgage-tracking"] [data-tag-name="mortgage-tracking-modal"] [data-tag-name="bbva-help-modal"] .modal-main .modal-footer',
            },
            requiredElements: ['header'],
        });
    }

    async visualizeDetail() {
        await (await this.mainPanelLink.waitForClickable({timeout: config.wait.M})).click();
    }

    async visualizeTooltipExpiration() {
        await this.tooltipExpirateDateLink.waitForDisplayed({timeout: config.wait.M});
        await this.tooltipExpirateDateLink.waitForClickable({timeout: config.wait.M});
        await this.tooltipExpirateDateLink.click();
    }

    async visualizeTooltipAmount() {
        await this.tooltipRequestAmountLink.waitForDisplayed({timeout: config.wait.M});
        await this.tooltipRequestAmountLink.waitForClickable({timeout: config.wait.M});
        await this.tooltipRequestAmountLink.click();
    }

    async visualizeTooltipPayment() {
        await this.tooltipMonthlyPaymentLink.waitForDisplayed({timeout: config.wait.M});
        await this.tooltipMonthlyPaymentLink.waitForClickable({timeout: config.wait.M});
        await this.tooltipMonthlyPaymentLink.click();
    }

    async visualizeMortgageStatusInformation() {
        await this.mainTrackingLink.waitForDisplayed({timeout: config.wait.M});
        await this.mainTrackingLink.waitForClickable({timeout: config.wait.M});
        await this.mainTrackingLink.click();
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.TITLE});
                break;
            case 'description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.TEXT});
                break;
            case 'delete':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON}, {forceScroll: true});
                break;
            case 'cancel':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON}, {forceScroll: true});
                break;
            default:
                await super._modalElementValidation(arguments[0]);
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'main panel':
                await this.mainPanel.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'main panel link':
                await this.mainPanelLink.waitForDisplayed({timeout: config.wait.LS});
                break;
            case 'main notification':
                await this.mainNotification.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'main tracking':
                await this.mainTracking.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'main tracking link':
                await this.mainTrackingLink.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'header detail':
                await this.detailHeader.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'product':
                await this.listElementProduct.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'credit name':
                await this.listElementSubproduct.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'subproduct credit':
                await this.listElementDescription.waitForDisplayed({timeout: config.wait.LS});
                break;
            case 'folio':
                await this.listElementFolio.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'request date':
                await this.listElementRequestDate.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'expiration date':
                await this.listElementExpirateDate.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'amount request':
                await this.listElementRequestAmount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'term':
                await this.listElementTerm.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'month payment':
                await this.listElementMonthlyPayment.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'second title':
                await this.detailHeaderCategory.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'interest rate':
                await this.listElementTextInterestRate.waitForDisplayed({timeout: config.wait.LS});
                break;
            case 'cat':
                await this.listElementTextCat.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'notification':
                await this.detailNotification.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'header tooltip':
                await this.tooltipHeader.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'title tooltip':
                await this.tooltipTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'description tooltip':
                await this.tooltipDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'button tooltip':
                await this.tooltipButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'warning modal':
                await this.modalExpirationDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal tracking header':
                await this.modalTrackingHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal tracking title':
                await this.modalTrackingTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal tracking button':
                await this.modalTrackingButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }
}
export default new MortgageMainTracking();

