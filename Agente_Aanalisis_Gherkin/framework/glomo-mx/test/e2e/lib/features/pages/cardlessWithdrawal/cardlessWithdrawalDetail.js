import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound} from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

class CardlessWithdrawalDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardlessWithdrawalDetail[state="active"]',
            elements: {
                // upper side
                header: 'h1#titleZone',
                backButton: 'button#btnLeft',
                detail: 'cells-transaction-detail section.transaction-info div.transaction-info',
                btnCancelWithdrawal: 'cells-successful-response #body-section cells-operations-list ul li:nth-child(4) button',
                btnCommerceWithdrawal: 'cells-successful-response li[data-selector="commerce"]',
                lblCancelWithdrawalDetail: 'cells-transaction-detail [class="status error"]',
                lblExpiredWithdrawalDetail: 'cells-transaction-detail [data-selector="cells-key-values-key"]',
                lblConceptWithdrawalDetail: 'cells-transaction-detail [class="transaction-info__item-values"]',
                lblCancellationDate: 'cells-transaction-detail [class="operation-date-value"]',
                infoIcon: 'cells-successful-response section#header-section section.advice-container p.advice-pagraph cells-atom-icon#icon-clic-help',
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements:{
                            buttonModalError: 'cells-st-button:first-child',
                            helpIcon: '.paragraph-template .paragraph-icon cells-atom-icon',
                            text: 'div p.paragraph-template-text',
                        }
                    }
                ],
            },
            elementsSpherica: {
                // upper side
                detail: 'cells-transaction-detail-spherica section.transaction-info div.transaction-info',
                btnCancelWithdrawal: 'cells-successful-response-spherica #body-section cells-operations-list-spherica ul li:nth-child(4) button',
                btnCommerceWithdrawal: 'cells-successful-response-spherica li[data-selector="commerce"]',
                lblCancelWithdrawalDetail: 'cells-transaction-detail-spherica [class="status error"]',
                lblExpiredWithdrawalDetail: 'cells-transaction-detail-spherica [data-selector="cells-key-values-spherica-key"]',
                lblConceptWithdrawalDetail: 'cells-transaction-detail-spherica [class="transaction-info__item-values"]',
                lblCancellationDate: 'cells-transaction-detail-spherica [class="operation-date-value"]',
                infoIcon: 'cells-successful-response-spherica section#header-section section.advice-container p.advice-pagraph cells-atom-icon-spherica#icon-clic-help',
                infoIconDetail: 'cells-successful-response-spherica #icon-clic-help iron-icon',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements:{
                            buttonModalError: 'cells-st-button-spherica:first-child',
                            helpIcon: '.paragraph-template .paragraph-icon cells-atom-icon-spherica',
                            text: 'div p.paragraph-template-text',
                        }
                    }
                ],
            },
            requiredElements: ['header'],
        });
    }

    async _screenValidation({item, value} = {}) {

        const reverseWaitForVisible = value === 'not visible';

        switch (item.toLowerCase()) {
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'label cancel':
                await this.lblCancelWithdrawalDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label expired':
                await this.lblExpiredWithdrawalDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label concept':
                await this.lblConceptWithdrawalDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label date':
                await this.lblCancellationDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bullets list':
                await this.bulletsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.acceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});

        }
    }

    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'modal error':
                await this.dialogOperations.additionalElements.buttonModalError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text error':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.MAIN_TEXT});
                break;
            case 'cancel withdrawal':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON});
                break;
            case 'header error':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER_HALF});
                break;
            case 'icon error':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CONTAINER_ICON_PARAGRAPH});
                break;
            case 'error exit':
                await this.dialogOperations.additionalElements.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info icon':
                await this.dialogOperations.additionalElements.helpIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item});
        }
    }

    async cancelWithdrawal(){
        await this.btnCancelWithdrawal.scrollIntoView();
        await this.btnCancelWithdrawal.waitForAnimation({timeout: config.wait.L});
        await this.btnCancelWithdrawal.click();
    }
    async goInfo(){
        const element = this.isSpherica() ? this.infoIconDetail : this.infoIcon;
        await element.waitForClickable({timeout: config.wait.M});
        await element.click();
    }

    async goBack() {
        await this.backButton.waitForClickable({timeout: config.wait.M});
        await this.backButton.click();
    }

    async goCommerce(){
        await this.btnCommerceWithdrawal.scrollIntoView();
        await this.btnCommerceWithdrawal.waitForAnimation({timeout: config.wait.L});
        await this.btnCommerceWithdrawal.click();
    }

}
export default new CardlessWithdrawalDetail();
