import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class FundOriginationOcFund extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-fundOriginationOcFund[state="active"] [data-tag-name="fund-origination-oc-fund"]',
            elements: {
                header: {
                    properties: {
                        root: '[data-tag-name="bbva-help-modal"][full-height][visible]'
                    },
                    iconInfo: '#btn-help',
                    title: '#helpModalHeader #heading',
                    exit: '#btn-help + #btn-close'
                },
                multiStep: {
                    stepOffer: {
                        properties: {
                            root: '#offerContent'
                        },
                        fundDetailLink: 'div.offer-content div.offer-header [data-tag-name="bbva-type-link"]',
                        offerBanner: 'div.offer-content',
                        characteristicPoints: '.offer-content .benefit-list [data-tag-name="bbva-header-category"]',
                        inputOffer: '#input [data-tag-name="bbva-form-amount"] input',
                        messageInputOffer: '#input [data-tag-name="bbva-form-amount"] div.message [data-tag-name="bbva-notification-help"]',
                        amountSimulationOffer: '#cells-template-ocFundSimple [data-tag-name="fund-origination-oc-fund"] #offerContent #sticky',
                        inputTextTitle: 'div.offer-content div.investment-block [data-tag-name="bbva-header-category"] div.title-container [data-tag-name="bbva-core-heading"]',
                        continueButtonOffer: 'div.footer [data-tag-name="bbva-button-default"]',
                        iconSimulateAmount: '#invest',
                    },
                    stepAccount: {
                        properties: {
                            root: '#accountStep'
                        },
                        editButton: '.header.header-ellipsis:has(+ div) #editButton',
                        titleStepAcc: '#headingLabel',
                        stepNumberAcc: '#currentStep [data-tag-name="bbva-type-text"]',
                        descriptionStepAcc: '[data-tag-name="account-step-content"] [data-tag-name="bbva-type-text"]',
                        titleListAcc: '[data-tag-name="account-step-content"] [data-tag-name="bbva-header-category"] div.title-container',
                        accountList: {
                            properties: {
                                root: '[data-tag-name="account-step-content"] [data-tag-name="account-list"]'
                            },
                            firstAccount: 'button.account-item:first-child',
                            accountItem: 'button.account-item[number$="_ID_"]',
                        },
                        summary: '.completed-content ',
                        viewAllBtn: '[data-tag-name="account-step-content"] [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                    },
                    stepTerms: {
                        properties: {
                            root: '#legalStep'
                        },
                        editButton: '.header.header-ellipsis:has(+ div) #editButton',
                        titleStepTerms: '#headingLabel',
                        stepNumberTerms: '#currentStep [data-tag-name="bbva-type-text"]',
                        descriptionStepTerms: '#legalContent [data-tag-name="bbva-type-text"]',
                        documentList: '#legalContent [data-tag-name="document-list"]',
                        documentListItem: '#legalContent [data-tag-name="document-list"] .file-content:nth-child(_INDEX_)',
                        superCheck: '#legalContent [data-tag-name="bbva-form-checkbox"] #input',
                        checkboxList: '#legalContent .check-boxes',
                        continueButtonTerms: '#legalContent [data-tag-name="bbva-button-default"]',
                        summary: '.completed-content ',
                    },
                    summary: {
                        properties: {
                            root: '#multistep'
                        },
                        investButton: 'div.confirm-step [data-tag-name="bbva-button-default"]',
                    },
                },
                modals: {
                    documents: {
                        properties: {
                            root: '#documentsModal'
                        },
                        documentListModal: '[data-tag-name="document-list"]',
                        exitModal: '#helpModalHeader #btn-close',
                    },
                    fundAlert: {
                        properties: {
                            root: '#errorModal #modalError'
                        },
                        titleModal: '#helpModalHeader #text',
                        exitHeaderButton: '#helpModalHeader #btn-close',
                        iconModal: '#helpModalTitle [data-tag-name="bbva-type-icon"]',
                        contentTextModal: '#helpModalContent [data-tag-name="bbva-type-text"]',
                        exitPrimaryButton: '.footer-button.link[data-tag-name="bbva-button-default"]',
                        continueButton: '[data-tag-name="bbva-button-default"]:first-child',
                    },
                    fundHelp: {
                        properties: {
                            root: '#fundHelpModal #modalHelp'
                        },
                        iconModalHelp: '#helpModalTitle slot [data-tag-name="bbva-type-icon"]',
                        titleModalHelp: '#helpModalHeader #text'
                    },
                    faqsList: {
                        properties: {
                            root: '#faqsModal [data-tag-name="bbva-help-modal"][visible]'
                        },
                        listItem: 'div[slot="slot-content"] div:nth-child(_INDEX_) [data-tag-name="bbva-type-link"]',
                        titleModal: '[data-tag-name="bbva-header-main"] #heading',
                        exitButton: '[data-tag-name="bbva-header-main"] #btn-close',
                        listFaqs: 'div[slot="slot-content"]',
                        contentTextModalFaqs: 'div.detail-content [data-tag-name="bbva-type-text"]',
                    },
                    fundDetail: {
                        properties: {
                            root: '#fundDetailModal'
                        },
                        historicalPerformanceSection: '#profit',
                        performanceNotification: '[data-tag-name="bbva-notification-message"]',
                        amountItem: '[data-tag-name="summary-list"] .amount-item',
                        iconHistorical: '#profit .title-container [data-tag-name="bbva-type-link"]',
                        iconRisk: '[data-tag-name="summary-list"]:nth-child(6) div:nth-child(2) [data-tag-name="bbva-type-icon"]',
                        iconAvailability: '[data-tag-name="summary-list"]:nth-child(6) div:nth-child(3) [data-tag-name="bbva-type-icon"]',
                        documentSection: '[data-tag-name="document-list"]',
                    },
                    account: {
                        properties: {
                            root: '#accountModal'
                        },
                        accountListModal: '[data-tag-name="account-list"]',
                        exitModal: '#helpModalHeader #btn-close',
                        titleModal: '#helpModalHeader #text h1'
                    },
                    receipt: {
                        properties: {
                            root: '#fundSuccessModal #modalSuccess'
                        },
                        headerReceipt: 'div.heading',
                        exitButton: '#helpModalHeader #btn-help + #btn-close',
                        checkIcon: 'div.heading.success [data-tag-name="bbva-clip-box"]',
                        investmentText: '.heading.success [data-tag-name="bbva-type-text"][tag="h2"]',
                        investmentAmount: '.heading.success [data-tag-name="bbva-type-amount"]',
                        investmentListData: '[data-tag-name="summary-list"]',
                        investmentInfoNotification: '[data-tag-name="bbva-notification-message"]',
                        investmentButtonRowReceipt: '[data-tag-name="bbva-button-row"]',
                        investmentBannerReceipt: 'div .banner',
                        investmentLink: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-type-link"]',
                        viewDocumentsButton: '[data-tag-name="bbva-button-row"] #buttons .list-item:first-child [data-tag-name="bbva-button-action"]',
                        shareButton: '[data-tag-name="bbva-button-row"] #buttons .list-item:nth-child(2) [data-tag-name="bbva-button-action"]',
                    }
                }
            },
            requiredElements: ['header']
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.title.scrollIntoView({ block: 'nearest' });
                await this.header.title.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'help header icon':
                await this.header.iconInfo.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'exit button':
                await this.header.exit.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'offer banner':
                await this.multiStep.stepOffer.offerBanner.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'characteristic points':
                await this.multiStep.stepOffer.characteristicPoints.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'input text title':
                await this.multiStep.stepOffer.inputTextTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'input offer':
                await this.multiStep.stepOffer.inputOffer.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'message input offer':
                await this.multiStep.stepOffer.messageInputOffer.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'amount simulation offer':
                await this.multiStep.stepOffer.amountSimulationOffer.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'continue button offer':
                await this.multiStep.stepOffer.continueButtonOffer.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'disabled continue button offer':
                await this.multiStep.stepOffer.continueButtonOffer.waitForDisabled({ timeout: config.wait.M });
                break;
            case 'title step account':
                await this.multiStep.stepAccount.titleStepAcc.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'step number account':
                await this.multiStep.stepAccount.stepNumberAcc.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'description step account':
                await this.multiStep.stepAccount.descriptionStepAcc.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title list account':
                await this.multiStep.stepAccount.titleListAcc.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'account list':
                await this.multiStep.stepAccount.accountList.firstAccount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title step terms':
                await this.multiStep.stepTerms.titleStepTerms.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'step number terms':
                await this.multiStep.stepTerms.stepNumberTerms.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'description step terms':
                await this.multiStep.stepTerms.descriptionStepTerms.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'document list':
                await this.multiStep.stepTerms.documentList.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal document list':
                await this.modals.documents.documentListModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal document exit button':
                await this.modals.documents.exitModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'super check':
                await this.multiStep.stepTerms.superCheck.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'checkbox list':
                await this.multiStep.stepTerms.checkboxList.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'continue button terms':
                await this.multiStep.stepTerms.continueButtonTerms.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'summary button':
                await this.multiStep.summary.investButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'header receipt':
                await this.modals.receipt.headerReceipt.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'check icon':
                await this.modals.receipt.checkIcon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'investment text':
                await this.modals.receipt.investmentText.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'investment amount':
                await this.modals.receipt.investmentAmount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'investment list data':
                await this.modals.receipt.investmentListData.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'investment info notification':
                await this.modals.receipt.investmentInfoNotification.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'investment button row receipt':
                await this.modals.receipt.investmentButtonRowReceipt.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'investment banner receipt':
                await this.modals.receipt.investmentBannerReceipt.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title faqs':
                await this.modals.faqsList.titleModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'exit button faqs':
                await this.modals.faqsList.exitButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'content text modal faqs':
                await this.modals.faqsList.contentTextModalFaqs.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'faqs list':
                await this.modals.faqsList.listFaqs.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'historical performance section':
                await this.modals.fundDetail.historicalPerformanceSection.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'performance notification':
                await this.modals.fundDetail.performanceNotification.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'document section':
                await this.modals.fundDetail.documentSection.scrollIntoView({ block: 'nearest' });
                await this.modals.fundDetail.documentSection.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'icon modal help':
                await this.modals.fundHelp.iconModalHelp.scrollIntoView({ block: 'nearest' });
                await this.modals.fundHelp.iconModalHelp.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title modal help':
                await this.modals.fundHelp.titleModalHelp.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title modal':
                await this.modals.fundAlert.titleModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'exit header button':
                await this.modals.fundAlert.exitHeaderButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'icon modal':
                await this.modals.fundAlert.iconModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'content text modal':
                await this.modals.fundAlert.contentTextModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'exit primary button':
                await this.modals.fundAlert.exitPrimaryButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'continue button':
                await this.modals.fundAlert.continueButton.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'list account modal':
                await this.modals.account.accountListModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title account modal':
                await this.modals.account.titleModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'exit button modal':
                await this.modals.account.exitModal.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'step account summary':
                await this.multiStep.stepAccount.summary.waitForDisplayed({ timeout: config.wait.S });
                break;
            case 'step legals summary':
                await this.multiStep.stepTerms.summary.waitForDisplayed({ timeout: config.wait.S });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async goToStep(step) {
        const stepList = ['offer', 'account', 'legals', 'summary'];
        const currentStep = this.currentStep ? stepList.indexOf(this.currentStep) : 0;
        const stepPath = stepList.slice(currentStep, stepList.indexOf(step));
        if (stepPath.length) {
            for (const stepName of stepPath) {
                await this.happyPathActions(stepName);
            }
        }
    }

    async happyPathActions(step) {
        switch (step) {
            case 'offer':
                await this.enterAmount('500');
                await this.multiStep.stepOffer.continueButtonOffer.waitForClickable({ timeout: config.wait.M });
                await this.multiStep.stepOffer.continueButtonOffer.click();
                break;
            case 'account': {
                const accountBtn = await this.multiStep.stepAccount.accountList.firstAccount;
                const isLegals = await this.multiStep.stepTerms.superCheck.isDisplayed({ timeout: config.wait.S });
                if (!isLegals) {
                    await accountBtn.click();
                }
                break;
            }
            case 'legals':
                await this.multiStep.stepTerms.superCheck.waitForDisplayed({ timeout: config.wait.S });
                await this.multiStep.stepTerms.superCheck.waitForClickable({ timeout: config.wait.S });
                await this.multiStep.stepTerms.superCheck.click();
                await this.multiStep.stepTerms.continueButtonTerms.waitForClickable({ timeout: config.wait.S });
                await this.multiStep.stepTerms.continueButtonTerms.click();
                this.currentStep = 'summary';
                break;
            case 'summary':
                await this.confirmPurchase();
                break;
            default:
                throw new Error(`Unknown step name: ${step}`);
        }
    }

    async closeOperative({ option }) {
        if (option === 'multistep') {
            await this.confirmExitOperative();
        } else {
            const btn = await this.modals.receipt.exitButton;
            await btn.scrollIntoView({ block: 'nearest' });
            await btn.waitForClickable({ timeout: config.wait.S });
            await btn.click();
        }
    }

    async confirmDialog({ isConfirmed = true }) {
        const btnName = isConfirmed ? 'exitPrimaryButton' : 'continueButton';
        const btn = await this.modals.fundAlert[btnName];
        await btn.waitForClickable({ timeout: config.wait.M });
        await btn.click();
    }

    async confirmExitOperative() {
        await this.exitPage();
        const acceptBtn = await this.modals.fundAlert.continueButton;
        await acceptBtn.waitForClickable({ timeout: config.wait.S });
        await acceptBtn.click();
    }

    async confirmPurchase() {
        await this.multiStep.summary.investButton.waitForClickable({ timeout: config.wait.M });
        await this.multiStep.summary.investButton.click();
    }

    async enterAmount(amount) {
        await this.multiStep.stepOffer.inputOffer.waitForDisplayed({ timeout: config.wait.S });
        await this.multiStep.stepOffer.inputOffer.setValue({ value: amount });
        await this.multiStep.stepOffer.inputTextTitle.waitForClickable({ timeout: config.wait.M });
        await this.multiStep.stepOffer.inputTextTitle.click();
    }

    async enterModal(modalName) {
        let btn;
        switch (modalName.toLowerCase()) {
            case 'aem help':
                btn = await this.header.iconInfo;
                break;
            case 'account list':
                btn = await this.multiStep.stepAccount.viewAllBtn;
                break;
            case 'fund detail':
                btn = await this.multiStep.stepOffer.fundDetailLink;
                break;
            case 'historical performance':
                btn = await this.modals.fundDetail.iconHistorical;
                break;
            case 'risk':
                btn = await this.modals.fundDetail.iconRisk;
                break;
            case 'availability':
                btn = await this.modals.fundDetail.iconAvailability;
                break;
            case 'final invest amount':
                btn = await this.multiStep.stepOffer.iconSimulateAmount;
                break;
            case 'view documents':
                btn = await this.modals.receipt.viewDocumentsButton;
                break;
            default:
                throw new Error(`Unknown modal name: ${modalName}`);
        }

        await btn.waitForDisplayed({ timeout: config.wait.M });
        await btn.waitForClickable({ timeout: config.wait.M });
        await btn.click();
    }

    async exitPage() {
        await this.header.exit.scrollIntoView({ block: 'nearest' });
        await this.header.exit.waitForDisplayed({ timeout: config.wait.M });
        await this.header.exit.waitForClickable({ timeout: config.wait.M });
        await this.header.exit.click();
    }

    async fillOtp() {
        await super.fillOtp('12345678');
    }

    async finish() {
        await this.goToStep('summary');
        await this.confirmPurchase();
        await this.fillOtp();
    }

    async openFaq(faq) {
        const index = global.user.faqIndexMap[faq.toLowerCase()];
        const btn = this.modals.faqsList.listItem.specifySelector({ placeholder: '_INDEX_', value: index });
        await btn.waitForClickable({ timeout: config.wait.S });
        await btn.click();
    }

    async retryWarningSmallModal() {
        const btn = await this.modals.fundAlert.continueButton;
        await btn.waitForClickable({ timeout: config.wait.S });
        await btn.click();
    }

    async selectsAccount() {
        const accountBtn = this.multiStep.stepAccount.accountList.accountItem.specifySelector({ placeholder: '_ID_', value: global.user.userAccount });
        await accountBtn.click();
    }

    async selectsDocument(doc) {
        const index = global.user.documentIndexMap[doc.toLowerCase()];
        const btn = this.multiStep.stepTerms.documentListItem.specifySelector({ placeholder: '_INDEX_', value: index });
        await btn.waitForClickable({ timeout: config.wait.S });
        await btn.click();
    }

    async selectsOperative({ operative }) {
        const btn = operative === 'share receipt' ? this.modals.receipt.shareButton : this.modals.receipt.investmentLink;
        await btn.waitForClickable({ timeout: config.wait.S });
        await btn.click();
    }

    async uncollapse(step) {
        const btn = step.toLowerCase() === 'account' ? this.multiStep.stepAccount.editButton : this.multiStep.stepTerms.editButton;
        await btn.waitForDisplayed({ timeout: config.wait.S });
        await btn.waitForClickable({ timeout: config.wait.S });
        await btn.click();
        this.currentStep = step;
    }
}

export default new FundOriginationOcFund();
