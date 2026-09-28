import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

import AbstractGlomoPage from '../abstract-glomo-page';
@page()
class LoanPage extends AbstractGlomoPage {
    constructor() {
        const sustainableHelpModal = 'bbva-widget-product-detail-sustainable-loans [data-tag-name="bbva-help-modal"]';
        super({
            root: '#cells-template-loan[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                pendingBalance: 'cells-product-summary-loan cells-product-summary div.optional-items div.cells-key-values-list div:nth-child(1)',
                grantedCredit: 'cells-product-summary-loan cells-product-summary div.optional-items div.cells-key-values-list div:nth-child(2)',
                grantedCreditMaskedAmount: 'cells-product-summary-loan-spherica .optional-items [data-selector="cells-key-values-atom-amount-0"]',
                moreInfoBtn: 'cells-product-summary-loan cells-product-summary #moreInfoButton',
                paymentDetail: 'cells-product-summary-loan div.installment-title',
                infoMessage: 'cells-product-summary-loan #installment cells-icon-message',
                aliasButton: 'cells-operations-list ul li[data-selector="editAlias"] button.link',
                aliasText: 'cells-product-summary-loan cells-product-summary #headerText',
                payCreditButton: 'cells-operations-list ul li[data-selector="billPay"] button.link',
                messageModalLink: 'cells-product-summary-loan#summaryLoan [data-tag-name="bbva-notification-message"][slot="sustainableMessage"] [data-tag-name="bbva-link"].no-space',
                messageModalDays: 'cells-product-summary-loan#summaryLoan [data-tag-name="bbva-notification-message"][slot="sustainableMessage"]  div.paragraph [data-tag-name="bbva-text"]',
                messageApprobation: 'cells-product-summary-loan#summaryLoan [data-tag-name="bbva-progress-step"][slot="progressStep"] div.container ol li.pending',
                uploadFiles:'cells-operations-list-indicators cells-operations-list .list .list__item[data-selector="uploadInvoice"][data-index="2"] button.link',
                sustainableNotificationMessageLink: 'cells-product-summary-loan#summaryLoan [data-tag-name="bbva-notification-message"][slot="sustainableMessage"] [data-tag-name="bbva-link"].no-space',
                modalKnowMore: `${sustainableHelpModal}`,
                modalKnowMoreTitle: `${sustainableHelpModal} div[slot="slot-content"] .titlePadding`,
                modalKnowMoreSteps: `${sustainableHelpModal} div[slot="slot-content"] .stepsPadding`,
                modalKnowMoreNotificationMessage: `${sustainableHelpModal} div[slot="slot-content"] [data-tag-name="bbva-notification-message"].messageMargin`,
                modalKnowMoreClose: `${sustainableHelpModal} #btn-close`,
                modalKnowMoreHeader: '#helpModalHeader',
                contractingText: '[data-select="progressStep"] .steps li.content.completed [data-tag-name="bbva-type-text"].title',
                approvalText: '[data-select="progressStep"] .steps li.content.pending [data-tag-name="bbva-type-text"].title',
                preferentialRateText: '[data-select="progressStep"] .steps li.content.pending [data-tag-name="bbva-type-text"].subtitle',

            },
            elementsSpherica: {
                pendingBalance: 'cells-product-summary-spherica div.optional-items div.cells-key-values-list',
                grantedCredit: 'cells-product-summary-loan-spherica cells-product-summary-spherica div.optional-items cells-key-values-spherica',
                moreInfoBtn: 'cells-product-summary-loan-spherica cells-product-summary-spherica #moreInfoButton',
                paymentDetail: 'cells-product-summary-loan-spherica div.installment-title',
                aliasButton: 'cells-operations-list-spherica ul li[data-selector="editAlias"] button.link',
                aliasText: 'cells-product-summary-loan-spherica cells-product-summary-spherica #headerText',
                payCreditButton: 'cells-operations-list-spherica ul li[data-selector="billPay"] button.link',
                messageModalLink: 'cells-product-summary-loan-spherica#summaryLoan [data-tag-name="bbva-notification-message"][slot="sustainableMessage"] [data-tag-name="bbva-type-link"].no-space',
                messageModalDays: 'cells-product-summary-loan-spherica#summaryLoan [data-tag-name="bbva-notification-message"][slot="sustainableMessage"]  div.paragraph [data-tag-name="bbva-type-text"]',
                sustainableNotificationMessageLink: 'cells-product-summary-loan-spherica#summaryLoan [data-tag-name="bbva-notification-message"][slot="sustainableMessage"] [data-tag-name="bbva-link"].no-space',
                uploadFiles:'cells-operations-list-indicators-spherica cells-operations-list-spherica .list .list__item[data-selector="uploadInvoice"][data-index="2"] button.link',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            case 'pending balance':
                await this.pendingBalance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'granted credit':
                if(this.isSpherica()) {
                    await (await this.grantedCredit.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.grantedCredit.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'more info':
                await this.moreInfoBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment detail':
                await this.paymentDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info message':
                await this.infoMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'alias button':
                await this.aliasButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay credit button':
                await this.payCreditButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message link':
                await this.sustainableNotificationMessageLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contracting text':
                await this.contractingText.waitForDisplayed({timeout: config.wait.M});
                await this.contractingText.waitForText({text: 'Contratación'});
                break;
            case 'approval text':
                await this.approvalText.waitForDisplayed({timeout: config.wait.M});
                await this.approvalText.waitForText({text: 'Aprobación'});
                break;
            case 'preferential rate text':
                await this.preferentialRateText.waitForDisplayed({timeout: config.wait.M});
                await this.preferentialRateText.waitForText({text: 'Tasa preferente'});
                break;
            case 'granted credit masked amount':
                await this.grantedCreditMaskedAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal more info':
                await this.modalKnowMore.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal more info header':
                await this.modalKnowMoreHeader.waitForDisplayed({timeout: config.wait.M});
                await this.modalKnowMoreHeader.waitForText({text: 'Mejorar tasa'});
                break;
            case 'modal more info title':
                await this.modalKnowMoreTitle.waitForDisplayed({timeout: config.wait.M});
                await this.modalKnowMoreTitle.waitForText({text: 'Para comprobar tu préstamo'});
                break;
            case 'modal more info steps':
                await this.modalKnowMoreSteps.waitForDisplayed({timeout: config.wait.M});
                await this.modalKnowMoreSteps.waitForText({text: 'Sigue estos sencillos pasos:'});
                break;
            case 'modal more info notification message':
                await this.modalKnowMoreNotificationMessage.waitForDisplayed({timeout: config.wait.M});
                await this.modalKnowMoreNotificationMessage.waitForText({text: 'La resolución no podrá ser modificada. Te sugerimos atender los requisitos.'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async verifyAliasLoanName(newAlias) {
        await this.aliasText.waitForDisplayed({timeout: config.wait.M});
        await this.aliasText.waitForText({timeout: config.wait.M, text: newAlias, errorMessage: 'The loan alias value is different'});
    }

    async accessMoreInfoLoan() {
        await this.moreInfoBtn.scrollIntoView({block: 'start'});
        await this.moreInfoBtn.waitForClickable({timeout: config.wait.L});
        await this.moreInfoBtn.click();
    }

    async accessSustainabilityLoan() {
        await this.uploadFiles.waitForDisplayed({block: 'start'});
        await this.uploadFiles.scrollIntoView({block: 'start'});
        await this.uploadFiles.waitForAnimation({timeout: config.wait.L});
        await this.uploadFiles.click();
    }

    async accessEditAliasLoan() {
        await this.aliasButton.scrollIntoView({block: 'start'});
        await this.aliasButton.waitForClickable({timeout: config.wait.L});
        await this.aliasButton.click();
    }

    async accessPayCreditLoan() {
        await this.payCreditButton.scrollIntoView();
        await this.payCreditButton.waitForClickable({timeout: config.wait.M});
        await this.payCreditButton.click();
    }

    async accessModalMoreInfo() {
        await this.sustainableNotificationMessageLink.scrollIntoView({block: 'start'});
        await this.sustainableNotificationMessageLink.waitForAnimation({timeout: config.wait.L});
        await this.sustainableNotificationMessageLink.click();
    }

    async closeModalMoreInfo() {
        await this.modalKnowMoreClose.waitForClickable({timeout: config.wait.M});
        await this.modalKnowMoreClose.click();
    }
}

export default new LoanPage();
