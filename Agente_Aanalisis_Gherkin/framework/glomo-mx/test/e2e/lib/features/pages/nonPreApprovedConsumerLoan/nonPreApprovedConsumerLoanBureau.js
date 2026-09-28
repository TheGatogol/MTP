import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class NonPreApprovedConsumerLoanBureau extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'NonPreApprovedConsumerLoanBureau',
            root: '#cells-template-nonPreApprovedConsumerLoanBureau[state="active"]',
            elements: {
                header: 'cells-molecule-header-spherica',
                checklistStepContainer: 'cells-step-card-checklist-contract-spherica #checklistStepContainer .div',
                headerImage: 'cells-image-text-amount-cover-spherica div img',
                headerTitle: 'cells-image-text-amount-cover-spherica div h1',
                checkboxCreditBureau: 'cells-step-card-checklist-contract-spherica #checkbox',
                checkboxTermsConditions: 'cells-step-card-checklist-contract-spherica #checklistStepContainer .full main .checkbox-list-section cells-checkbox-button-spherica:nth-of-type(2) .checkbox',
                acceptButton: 'cells-step-card-checklist-contract-spherica .full main cells-st-button-spherica button',
                creditHistoryInquiryTermsBtn: 'cells-step-card-checklist-contract-spherica #checklistStepContainer .full main section.file-list-section cells-list-file-spherica .list-file-container .body [data-id="modal-check-history-event"]',
                message: 'cells-step-card-checklist-contract-spherica #checklistStepContainer div:nth-of-type(2) div main section.message-info-list-section cells-icon-message-change-data-spherica cells-icon-message-spherica',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        paragraphElements: {
                            text: 'div [data-selector="paragraph-template-text"]',
                            leftItem: 'cells-alert-box-spherica.text-align-left'
                        },
                        additionalElements: {
                            shareBtn: 'cells-molecule-link-icon-spherica#\\30',
                            findBranchBtn: 'cells-molecule-link-icon-spherica#\\31',
                            heroImage: 'div.main-container img',
                            headerNotFullHeight: 'cells-bottom-modal-spherica#modal header'
                        },
                    }
                ]
            },
            requiredElements: [
                'header',
            ]
        });

    }

    async _screenValidation({ item } = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'image':
                await this.headerImage.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'title':
                await this.headerTitle.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'terms and conditions button':
                await this.creditHistoryInquiryTermsBtn.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'credit bureau check':
                await this.checkboxCreditBureau.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'terms and conditions check':
                await this.checkboxTermsConditions.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'message':
                await this.message.waitForDisplayed({ timeout: config.wait.L });
                break;
            case 'continue button':
                await this.acceptButton.waitForDisplayed({ timeout: config.wait.L });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async _modalElementValidation({ item, value, ...args } = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.dialogOperations.elementValidation({ item: 'header' });
                break;
            case 'header without full height':
                await this.dialogOperations.additionalElements.headerNotFullHeight.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'authorization icon message':
                await this.dialogOperations.elementValidation({ item: 'paragraph icon' });
                break;
            case 'title':
                await this.dialogOperations.elementValidation({ item: 'title' });
                break;
            case 'authorization message':
                await this.dialogOperations.paragraphElements.text.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'accept button':
                await this.dialogOperations.elementValidation({ item: 'accept button' });
                break;
            case 'missing documents icon':
                await this.dialogOperations.elementValidation({ item: 'hero image' });
                break;
            case 'modal image':
                await this.dialogOperations.additionalElements.heroImage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'missing documents message':
                await this.dialogOperations.elementValidation({ item: 'message' });
                break;
            case 'missing documents list':
                await this.dialogOperations.elementValidation({ item: 'bullets list' });
                break;
            case 'missing documents icon message':
                await this.dialogOperations.elementValidation({ item: 'icon message' });
                break;
            case 'share button':
                await this.dialogOperations.additionalElements.shareBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'find branch button':
                await this.dialogOperations.additionalElements.findBranchBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal left paragraph':
                await this.dialogOperations.additionalElements.leftItem.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                await super._modalElementValidation({ item, value, ...args });
        }
    }

    async acceptAllConditions() {
        await this.checkboxCreditBureau.waitForClickable({ timeout: config.wait.XL });
        await this.checkboxCreditBureau.click();
        await this.checkboxTermsConditions.waitForClickable({ timeout: config.wait.XL });
        await this.checkboxTermsConditions.click();
    }

    async acceptCreditBureauApplication(otp = '12345678') {
        await this.acceptButton.waitForClickable({ timeout: config.wait.XL });
        await this.acceptButton.click();
        await this.fillOtp(otp);
    }

    async continueProccess() {
        await this.acceptButton.waitForClickable({ timeout: config.wait.XL });
        await this.acceptButton.click();
    }

    async openCreditHistoryInquiryTerms() {
        await (await this.creditHistoryInquiryTermsBtn.waitForDisplayed({ timeout: config.wait.M })).click();
    }
}

export default new NonPreApprovedConsumerLoanBureau();
