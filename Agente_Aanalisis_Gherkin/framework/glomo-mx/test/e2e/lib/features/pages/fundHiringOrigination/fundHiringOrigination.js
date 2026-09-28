import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class FundHiringOrigination extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-fundsHiringOrigination[state="active"] [data-tag-name="fund-origination-oc-fund-mx"]',
            elements: {
                onboarding: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="fund-origination-oc-fund-mx-onboarding"]',
                        additionalElements: {
                            btnOnboardingClose: '.container .controls button.close'
                        }
                    }
                ],
                init: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="fund-origination-oc-fund-mx-init"]',
                        additionalElements: {
                            btnDocumentView: '.link-container [data-tag-name="bbva-type-text"]',
                            btnCallMeBack: '#helpModalHeader #btn-call'
                        }
                    }
                ],
                detail: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="fund-origination-oc-fund-mx-fund-detail"]',
                        additionalElements: {
                            btnClose: '[data-tag-name="bbva-header-main"] [data-tag-name="bbva-type-icon"]',
                            secondaryHeader: '.content .heading [data-tag-name="bbva-type-text"][font-type="title-secondary"]',
                            priceButtonModal: '[data-tag-name="fund-origination-oc-fund-mx-list-default"].price-label [data-tag-name="bbva-button-default"]',
                            riskButtonModal: '[data-tag-name="fund-origination-oc-fund-mx-list-default"].risk-label [data-tag-name="bbva-button-default"]',
                            availabilityButtonModal: '[data-tag-name="fund-origination-oc-fund-mx-list-default"].availability-label [data-tag-name="bbva-button-default"]',
                            liquidityButtonModal: '[data-tag-name="fund-origination-oc-fund-mx-list-default"].liquidity-type [data-tag-name="bbva-button-default"]',
                            serieButtonModal: '[data-tag-name="fund-origination-oc-fund-mx-list-default"].serie-label [data-tag-name="bbva-button-default"]',
                            typeButtonModal: '[data-tag-name="fund-origination-oc-fund-mx-list-default"].type-fund [data-tag-name="bbva-button-default"]',
                            performanceButtonModal: '.performance-panel [data-tag-name="bbva-type-link"]',
                            accordionDocumentsButton: '.accordion-document .right-icon',
                            diciButtonModal: '[data-tag-name="fund-origination-oc-fund-mx-list-file"]:nth-child(1)'
                        }
                    }
                ],
                multistep: {
                    properties: {
                        root: '[data-tag-name="fund-origination-oc-fund-mx-multistep"]'
                    },
                    modifyButtonStepFund: '#selectFundStep #editButton',
                    stepAccount: {
                        properties: {
                            root: '#selectAccountStep'
                        },
                        listAccountItem: '[data-tag-name="fund-origination-oc-fund-mx-list-accounts"] .account-title',
                        modifyButtonStepAccount: '#editButton'
                    },
                    stepAmount: {
                        properties: {
                            root: '#fundAmountStep'
                        },
                        inputAmount: '[data-tag-name="bbva-form-amount"] input',
                        amountPay: '[data-tag-name="bbva-type-amount"]',
                        btnStpAmount: '[data-tag-name="fund-origination-oc-fund-mx-fund-amount"] [data-tag-name="bbva-button-default"]#btnAmount',
                        modifyButtonStepAmount: '#editButton',
                        headerStepAmount: '[data-tag-name="bbva-type-text"][text="Monto de inversión"]',
                    },
                    stepName: {
                        properties: {
                            root: '#fundNameStep'
                        },
                        inputName: '[data-tag-name="bbva-form-input"] input',
                        btnContinueName: '[data-tag-name="fund-origination-oc-fund-mx-fund-name"] [data-tag-name="bbva-button-default"]:not(.clear)',
                        modifyButtonStepName: '#editButton',
                        nameInvestment: '.summary [data-tag-name="bbva-type-text"]',
                    },
                    stepTermsAndConditions: {
                        properties: {
                            root: '#termsAndConditionsStep '
                        },
                        headerStepTermsAndConditions: '.header-step',
                        checkboxFirstItem: '#superCheck',
                        btnContinueTermsAndConditions: '#btnContinueTAC',
                        accordionDocumentsTermsButton: '.accordion-card .right-icon',
                        contractDocumentButton: '[data-tag-name="fund-origination-oc-fund-mx-list-file"]:nth-child(1)',
                        modifyButtonStepTermsAndConditions: '[data-tag-name="bbva-type-link"]#editButton',
                        checkTermsAndConditions: '.check[status="checked"]',
                    },
                    stepListFunds: {
                        btnHeaderCloseListFunds: '#btn-close',
                        headerStepListFunds: '[data-tag-name="bbva-expandable-step"] [data-tag-name="bbva-type-text"][text="Fondo de inversión"]',
                        filterButtons: '[data-tag-name="bbva-button-group"] .buttons',
                        filterByTerm: '.buttons [data-tag-name="bbva-button-group-item"][value="__TERM__"]',
                        sortBy: '[data-tag-name="fund-origination-oc-fund-mx-list-found"] [data-tag-name="bbva-form-select-filter"] .select-icon',
                        listFunds: '.content-funds',
                        listFundsItem: '.content-funds .fund-summary-container .fund-summary-container [data-tag-name="bbva-type-text"][text="__NAME__"]',
                    },
                    btnConfirm: '.confirm-step .confirm-step-button',
                    headerListFunds: '#helpModalHeader[text="Invertir en fondos"]',
                    closeModalButton: '#helpModalHeader #btn-close',
                },
                success: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="fund-origination-oc-fund-mx-success"]',
                        additionalElements: {
                            viewDocumentButton: '[data-tag-name="bbva-button-row"] .button-row .list-item:nth-child(1) [data-tag-name="bbva-button-action"]',
                            shareReceiptButton: '[data-tag-name="bbva-button-row"] .button-row .list-item:nth-child(2) [data-tag-name="bbva-button-action"]',
                            viewFundsButton: '.banner [data-tag-name="bbva-type-link"]',
                            titleRecipt: '.heading [data-tag-name="bbva-type-text"][tag="h2"]',
                            descriptionRecipt: '.heading [data-tag-name="bbva-type-text"][alignment="center"][tag="p"]'
                        }
                    }
                ],
                defaultModal: [
                    BbvaHelpModal,
                    {
                        prefix: '[data-tag-name="fund-origination-oc-fund-mx-help-modal"]',
                        additionalElements: {
                            linkButton: '.content .modal-footer [data-tag-name="bbva-button-default"][variant="link"]',
                            contentModal: '.modal-main',
                        }
                    }
                ]
            },
            requiredElements: ['root']
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header list funds':
                await this.multistep.headerListFunds.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'close modal button':
                await this.multistep.closeModalButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'button close list funds':
                await this.multistep.stepListFunds.btnHeaderCloseListFunds.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'header step list funds':
                await this.multistep.stepListFunds.headerStepListFunds.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'filter buttons':
                await this.multistep.stepListFunds.filterButtons.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'sort by':
                await this.multistep.stepListFunds.sortBy.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'list funds':
                await this.multistep.stepListFunds.listFunds.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'header detail fund':
                await this.detail.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'button close detail fund':
                await this.detail.additionalElements.btnClose.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'secondary header detail fund':
                await this.detail.additionalElements.secondaryHeader.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'button footer detail':
                await this.detail.acceptBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'price fund detail':
                await this.detail.additionalElements.priceButtonModal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'risk fund detail':
                await this.detail.additionalElements.riskButtonModal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'availability fund detail':
                await this.detail.additionalElements.availabilityButtonModal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'liquidity fund detail':
                await this.detail.additionalElements.liquidityButtonModal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'serie fund detail':
                await this.detail.additionalElements.serieButtonModal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'type fund detail':
                await this.detail.additionalElements.typeButtonModal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'performance fund detail':
                await this.detail.additionalElements.performanceButtonModal.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modify button step fund':
                await this.multistep.modifyButtonStepFund.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modify button step amount':
                await this.multistep.stepAmount.modifyButtonStepAmount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modify button step name':
                await this.multistep.stepName.modifyButtonStepName.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'modify button step terms and conditions':
                await this.multistep.stepTermsAndConditions.modifyButtonStepTermsAndConditions.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'header step terms and conditions':
                await this.multistep.stepTermsAndConditions.headerStepTermsAndConditions.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'checkbox select all':
                await this.multistep.stepTermsAndConditions.checkboxFirstItem.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'button continue terms and conditions':
                await this.multistep.stepTermsAndConditions.btnContinueTermsAndConditions.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'button confirm steps':
                await this.multistep.btnConfirm.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'view funds button':
                await this.success.additionalElements.viewFundsButton.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'exit modal':
                await this.defaultModal.iconCloseBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'check terms and conditions':
                await this.multistep.stepTermsAndConditions.checkTermsAndConditions.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'header modal':
                await this.defaultModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list account':
                await this.multistep.selectAccount.listAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary name found':
                await this.multistep.stepName.nameInvestment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit modal warning':
                await this.defaultModal.additionalElements.linkButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link button':
                await this.defaultModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'content modal':
                await this.defaultModal.additionalElements.contentModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label amount step':
                await this.multistep.stepAmount.headerStepAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'input amount field':
                await this.multistep.stepAmount.inputAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disabled continue amount':
                await this.multistep.stepAmount.btnStpAmount.waitForDisabled({timeout: config.wait.S});
                break;
            case 'button view documents':
                await this.success.additionalElements.viewDocumentButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button share receipt':
                await this.success.additionalElements.shareReceiptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header text':
                await this.success.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header button':
                await this.success.iconCloseBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title recipt':
                await this.success.additionalElements.titleRecipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description recipt':
                await this.success.additionalElements.descriptionRecipt.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'btn call me back':
                await this.init.additionalElements.btnCallMeBack.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async continueOnboarding() {
        const closeBtn = this.onboarding.additionalElements.btnOnboardingClose;
        await closeBtn.waitForDisplayed({ timeout: config.wait.M });
        await closeBtn.click();
    }

    async continueOffer() {
        const closeBtn = this.init.acceptBtn;
        await closeBtn.waitForDisplayed({ timeout: config.wait.M });
        await closeBtn.waitForAnimation({ timeout: config.wait.S });
        await closeBtn.click();
    }

    async goToDetailFund(fundName) {
        const funds = {
            BBVA: 'FONDO DE CRECIMIENTO DOLARIZADO B+CRRAL',
            BBVAGB2: 'CORTO PLAZO GUBERNAMENTAL 2 BBVAGB2',
            BBVAGOB: 'CORTO PLAZO GUBERNAMENTAL BBVAGOB',
        };
        const fundSelect = this.multistep.stepListFunds.listFundsItem.specifySelector({placeholder: '__NAME__', value: funds[fundName]});
        await fundSelect.waitForDisplayed({timeout: config.wait.M});
        await fundSelect.click();
    }

    async goToSelectFund() {
        const buttonFooter = this.detail.acceptBtn;
        await buttonFooter.waitForDisplayed({ timeout: config.wait.M });
        await buttonFooter.click();
    }

    async selectAccount () {
        const itemAccount = this.multistep.stepAccount.listAccountItem;
        await itemAccount.waitForDisplayed({ timeout: config.wait.M });
        await itemAccount.click();
    }

    async completeStepAmount (errorCase = false) {
        await this.enterAmount();
        if(!errorCase) {
            const button = this.multistep.stepAmount.btnStpAmount;
            await button.waitForDisplayed({timeout: config.wait.S});
            await button.click();
        }
    }

    async enterAmount (amount= '250') {
        await (await (await this.multistep.stepAmount.inputAmount.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.S}))
            .setValue({value: amount});
        await this.multistep.stepAmount.amountPay.click();
    }

    async addName ({ empty = false, value = 'ahorro' } = {}) {
        const nameValue = empty ? '' : value;
        await (await (await this.multistep.stepName.inputName.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.S}))
            .setValue({value: nameValue});
        const btn = this.multistep.stepName.btnContinueName;
        await btn.waitForDisplayed({timeout: config.wait.L});
        await btn.click();
    }

    async checkTermsAndConditions () {
        const checkBtn = this.multistep.stepTermsAndConditions.checkboxFirstItem;
        await checkBtn.waitForDisplayed({timeout: config.wait.M});
        await checkBtn.waitForAnimation({timeout: config.wait.S});
        await checkBtn.click();

        const btnContinue = this.multistep.stepTermsAndConditions.btnContinueTermsAndConditions;
        await btnContinue.waitForDisplayed({timeout: config.wait.M});
        await btnContinue.click();
    }

    async completeSteps () {
        const confirm = this.multistep.btnConfirm;
        await confirm.waitForDisplayed({timeout: config.wait.M});
        await confirm.click();
    }

    async viewFundInformationFromBlockingModal() {
        await this.defaultModal.additionalElements.linkButton.waitForDisplayed({timeout: config.wait.M});
        await this.defaultModal.additionalElements.linkButton.click();
    }

    async selectLiquidity(liquidityPlace) {
        const places = { long: 'LARGO PLAZO', short: 'CORTO PLAZO', all: '' };
        const termFilter = this.multistep.stepListFunds.filterByTerm.specifySelector({placeholder: '__TERM__', value: places[liquidityPlace]});

        await termFilter.waitForDisplayed({timeout: config.wait.M});
        await termFilter.waitForAnimation({timeout: config.wait.S});
        await termFilter.click();
    }

    async openLink(modalName) {
        switch (modalName) {
            case 'performance':
                await this.detail.additionalElements.performanceButtonModal.waitForDisplayed({timeout: config.wait.M});
                await this.detail.additionalElements.performanceButtonModal.click();
                break;
            case 'risk':
                await this.detail.additionalElements.riskButtonModal.waitForDisplayed({timeout: config.wait.M});
                await this.detail.additionalElements.riskButtonModal.click();
                break;
            case 'price':
                await this.detail.additionalElements.priceButtonModal.waitForDisplayed({timeout: config.wait.M});
                await this.detail.additionalElements.priceButtonModal.click();
                break;
            case 'availability':
                await this.detail.additionalElements.availabilityButtonModal.waitForDisplayed({timeout: config.wait.M});
                await this.detail.additionalElements.availabilityButtonModal.click();
                break;
            case 'liquidity':
                await this.detail.additionalElements.liquidityButtonModal.waitForDisplayed({timeout: config.wait.M});
                await this.detail.additionalElements.liquidityButtonModal.click();
                break;
            case 'serie':
                await this.detail.additionalElements.serieButtonModal.waitForDisplayed({timeout: config.wait.M});
                await this.detail.additionalElements.serieButtonModal.click();
                break;
            case 'type':
                await this.detail.additionalElements.typeButtonModal.waitForDisplayed({timeout: config.wait.M});
                await this.detail.additionalElements.typeButtonModal.click();
                break;
            case 'dici':
                await this.detail.additionalElements.accordionDocumentsButton.waitForDisplayed({timeout: config.wait.M});
                await this.detail.additionalElements.accordionDocumentsButton.click();
                await this.detail.additionalElements.diciButtonModal.waitForDisplayed({timeout: config.wait.M});
                await this.detail.additionalElements.diciButtonModal.click();
                break;
            case 'contract':
                await this.multistep.stepTermsAndConditions.accordionDocumentsTermsButton.waitForDisplayed({timeout: config.wait.M});
                await this.multistep.stepTermsAndConditions.accordionDocumentsTermsButton.click();
                await this.multistep.stepTermsAndConditions.contractDocumentButton.waitForDisplayed({timeout: config.wait.M});
                await this.multistep.stepTermsAndConditions.contractDocumentButton.click();
                break;
            case 'initial-document':
                await this.init.additionalElements.btnDocumentView.waitForDisplayed({timeout: config.wait.M});
                await this.init.additionalElements.btnDocumentView.click();
                break;
            case 'document':
                await this.success.additionalElements.viewDocumentButton.waitForDisplayed({timeout: config.wait.M});
                await this.success.additionalElements.viewDocumentButton.click();
                break;
            case 'share':
                await this.success.additionalElements.shareReceiptButton.waitForDisplayed({timeout: config.wait.M});
                await this.success.additionalElements.shareReceiptButton.click();
                break;
            case 'view funds':
                await this.success.additionalElements.viewFundsButton.waitForDisplayed({timeout: config.wait.M});
                await this.success.additionalElements.viewFundsButton.click();
                break;
            case 'exit modal':
                await this.defaultModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                await this.defaultModal.acceptBtn.click();
                break;
            default:
                throw new Error(`Unknown modal name: ${modalName}`);
        }
    }

    async goUntilFundHiringStep(untilStep, options = {}) {
        const {
            fundName = 'BBVA',
            includeAccountStep = false
        } = options;

        switch (untilStep) {
            case 'onboarding':
                await this.continueOnboarding();
                break;
            case 'offer':
                await this.goUntilFundHiringStep('onboarding', options);
                await this.continueOffer();
                break;
            case 'detail':
                await this.goUntilFundHiringStep('offer', options);
                await this.goToDetailFund(fundName);
                break;
            case 'select':
                await this.goUntilFundHiringStep('detail', options);
                await this.goToSelectFund();
                break;
            case 'account':
                await this.goUntilFundHiringStep('select', options);
                await this.selectAccount();
                break;
            case 'amount':
                await this.goUntilFundHiringStep('select', options);

                if (includeAccountStep || await this.multistep.stepAccount.listAccountItem.isDisplayed()) {
                    await this.selectAccount();
                }

                await this.completeStepAmount();
                break;
            case 'name':
                await this.goUntilFundHiringStep('amount', options);
                await this.addName();
                break;
            case 'terms':
                await this.goUntilFundHiringStep('name', options);
                await this.checkTermsAndConditions();
                break;
            case 'confirm':
                await this.goUntilFundHiringStep('terms', options);
                await this.completeSteps();
                await this.fillOtp('12345678');
                break;
            default:
                throw new Error(`Unknown step name: ${untilStep}`);
        }
    }

    async modifyStep(step) {
        switch (step) {
            case 'fund': {
                const modifyButton = this.multistep.modifyButtonStepFund;
                await modifyButton.waitForDisplayed({timeout: config.wait.M});
                await modifyButton.click({ useActions: false});
                await this.openLink('exit modal');
                break;
            }
            case 'account': {
                const modifyButton = this.multistep.stepAccount.modifyButtonStepAccount;
                await modifyButton.waitForDisplayed({timeout: config.wait.M});
                await modifyButton.click();
                await this.selectAccount();
                break;
            }
            case 'amount': {
                await this.multistep.stepAmount.modifyButtonStepAmount.waitForDisplayed({timeout: config.wait.M});
                await this.multistep.stepAmount.modifyButtonStepAmount.click();
                await this.completeStepAmount();
                break;
            }
            default:
                throw new Error(`Unknown step name: ${step}`);
        }
    }

    async closeTooltip() {
        const closeTooltipBtn = this.defaultModal.iconCloseBtn;
        await closeTooltipBtn.waitForDisplayed({timeout: config.wait.M});
        await closeTooltipBtn.click();
    }

    async goToTermsandConditions() {
        await this.goToSelectFund();
        await this.completeStepAmount();
        await this.addName();
        await this.checkTermsAndConditions();
    }
}

export default new FundHiringOrigination();
