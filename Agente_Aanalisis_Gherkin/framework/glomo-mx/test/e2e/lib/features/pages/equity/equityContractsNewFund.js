import {Commands, ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class EquityContractsNewFundPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-equityContractsNewFund[state="active"]',
            elements: {
                equityContract: '[data-tag-name="bbva-feature-oc-fund-equity-contract-mx"]',
                summaryStepEditButton: '#expandableMultistep #editButton',
                editInvest: '#expandableMultistep #investmentStep #editButton',
                editLegas: '#expandableMultistep #legalsStep #editButton',
                editFundList: '#expandableMultistep #fundListStep #editButton',
                multiStep: {
                    stepAmount: {
                        properties: {
                            root: '#investmentStep'
                        },
                        header: '#heading',
                        simulationMessage: '#inputAmount bbva-form-amount bbva-notification-help',
                        simulationSummary: '.invest-block',
                        simulationPerformanceBtn: '#investmentStepContent .footer bbva-button-default',
                        amountInput: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-amount"] input',
                        btnContinue: 'div.footer [data-tag-name="bbva-button-default"]',
                        btnInvestHelp: '[data-tag-name="step-summary"] .summary-item .summary-label .summary-help-button [data-tag-name="bbva-type-icon"]',
                        btnSimulate: '#investmentStepContent div.footer [data-tag-name="bbva-button-default"]',
                    },
                    stepFundList: {
                        properties: {
                            root: '#fundListStep'
                        },
                        categoryBtn: '[data-tag-name="fund-list"] div.fund-list-item .fund-item[data-id="_CATEGORY_"]',
                        categoryItem: '[data-tag-name="fund-list"] div.fund-list-item div.fund-item',
                        categoryList: '[data-tag-name="fund-list"]',
                        viewAllBtn: '.fundlist-heading [data-tag-name="bbva-type-link"]',
                        welcomeMessage: '#fundListStepContent .welcome',
                        header: '#heading',
                    },
                    stepLegals: {
                        properties: {
                            root: '#legalsStep'
                        },
                        confirmTerms: '.confirm-list [data-tag-name="bbva-form-checkbox"]',
                        diciDocument: '#legalsStepContent document-list .document-list .document',
                        btnContinue: '#legalsStepContent .footer bbva-button-default',
                        btnPrivacy: '#legalsStepContent .privacy-link bbva-type-link',
                    },
                    stepOffer: {
                        properties: {
                            root: '#offerStep'
                        },
                        header: '.heading'
                    },
                    stepSummary: {
                        properties: {
                            root: '[data-tag-name="confirm-pannel"]'
                        },
                        btnContinue: '[data-tag-name="bbva-button-default"]',
                        confirmMessage: '[data-tag-name="bbva-type-text"]',
                        purchaseAmount: '[data-tag-name="bbva-type-amount"]'
                    },
                },
                modals: {
                    fundAlert: {
                        properties: {
                            root: 'div.content-modals #alertModals'
                        },
                        fundKeySubtitle: '#investDefinitionModal [data-tag-name="bbva-type-text"]:nth-child(5)',
                        noFundsTitle: '#noFundsModal .subtitle',
                        btnRetry: '#retryErrorModal .content .transition-container .help-modal .slot-footer [data-tag-name="bbva-button-default"]',
                        fundKeyIcon: '#investDefinitionModal .main-icon',
                        fundKeyMessage: '#investDefinitionModal [data-tag-name="bbva-type-text"]:nth-child(3)',
                        noFundsIcon: '#noFundsModal .main-icon',
                        noFundsMessage: '#noFundsModal [data-tag-name="bbva-type-text"]:nth-child(3)'
                    },
                    fundDetail: {
                        properties: {
                            root: '#fundModals #fundDetailModal'
                        },
                        itemList: '.fund-profit [data-tag-name="step-summary"]',
                        returnBtn: '.modal-footer .slot-footer [data-tag-name="bbva-button-default"].footer-button.link',
                        closeBtn: '#helpModalHeader #btn-close',
                        detailMenu: '[data-tag-name="bbva-tab-default"]',
                        infoHeader: '#helpModalHeader',
                    },
                    fundFilter: {
                        properties: {
                            root: '#fundModals #fundFilterModal'
                        },
                        filterCheckbox: '#filterList [data-tag-name="bbva-form-radio-button"] [data-tag-name="bbva-form-radio-button-input"][value="_LIQUIDITY_"]',
                        continueBtn: '.footer-button[data-tag-name="bbva-button-default"]'
                    },
                    fundList: {
                        properties: {
                            root: '#fundModals #fundListModal'
                        },
                        btnBoard: '#inputSearch [data-tag-name="bbva-form-search"] input',
                        btnCloseModal: '#helpModalHeader #btn-close',
                        detailFund: 'div.fund-list-item div.link',
                        filterLink: '.search-block [data-tag-name="bbva-form-filter"] [data-tag-name="bbva-header-category"] .options-right [data-tag-name="bbva-type-link"]',
                        filterTag: '.search-block [data-tag-name="bbva-form-filter"] .tag[role="listitem"]',
                        itemList: '[data-tag-name="fund-list"]',
                        mainFundItem: '.main-list [data-id="_FUND_"]',
                        resultAnotherFundCategory: '.another-search-list [data-id="BBVALIQ"]',
                        resultFundItem: '.search-list [data-id="_FUND_"]',
                        resultIcon: '.results-block [data-tag-name="bbva-clip-microillustration"]',
                        searchInput: '#inputSearch [data-tag-name="bbva-form-search"] input',
                        tabCategoryBtn: '.search-block [data-tag-name="bbva-tab-default"] #_TAB_ID_',
                        tabDebtCategory: '.search-block [data-tag-name="bbva-tab-default"] .group #tabs #tab-1'
                    },
                    receipt: {
                        successfulPurchase: 'div div.slot-header div.slot-icon [data-tag-name="bbva-type-icon"]',
                        header: 'div div.slot-header [data-tag-name="bbva-type-text"]',
                        amount: '[data-tag-name="step-summary"] .amount-fund'
                    }
                }
            },
            requiredElements: ['multiStep.stepFundList']
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'contract detail header':
                await this.multiStep.stepOffer.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'fund section header':
                await this.multiStep.stepFundList.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category list item':
                await this.multiStep.stepFundList.categoryItem.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'welcome message':
                await this.multiStep.stepFundList.welcomeMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category list':
                await this.multiStep.stepFundList.categoryList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal fund item':
                await this.modals.fundList.itemList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal fund close button':
                await this.modals.fundList.btnCloseModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal fund menu':
                await this.modals.fundList.tabDebtCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal fund search input':
                await this.modals.fundList.searchInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal fund filter link':
                await this.modals.fundList.filterLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal fund filter tag':
                await this.modals.fundList.filterTag.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal fund search result icon':
                await this.modals.fundList.resultIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal fund search another result':
                await this.modals.fundList.resultAnotherFundCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal detail header':
                await this.modals.fundDetail.infoHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal detail menu':
                await this.modals.fundDetail.detailMenu.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal detail list':
                await this.modals.fundDetail.itemList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest section header':
                await this.multiStep.stepAmount.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest amount input':
                await this.multiStep.stepAmount.amountInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest simulation message':
                await this.multiStep.stepAmount.simulationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest simulation detail':
                await this.multiStep.stepAmount.simulationSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest simulation performance button':
                await this.multiStep.stepAmount.simulationPerformanceBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest amount continue button':
                await this.multiStep.stepAmount.btnSimulate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest help fund icon':
                await this.modals.fundAlert.fundKeyIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest help fund key title':
                await this.modals.fundAlert.fundKeySubtitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invest help fund key description':
                await this.modals.fundAlert.fundKeyMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no fund available icon':
                await this.modals.fundAlert.noFundsIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no fund available title':
                await this.modals.fundAlert.noFundsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no fund available message':
                await this.modals.fundAlert.noFundsMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'dici document':
                await this.multiStep.stepLegals.diciDocument.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'legals confirm terms':
                await this.multiStep.stepLegals.confirmTerms.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'legals continue button':
                await this.multiStep.stepLegals.btnContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'legals privacy button':
                await this.multiStep.stepLegals.btnPrivacy.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary continue button':
                await this.multiStep.stepSummary.btnContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary message':
                await this.multiStep.stepSummary.confirmMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary invest amount':
                await this.multiStep.stepSummary.purchaseAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful purchase':
                await this.modals.receipt.successfulPurchase.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header receipt':
                await this.modals.receipt.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount receipt':
                await this.modals.receipt.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeModal({selector}) {
        switch (selector.toLowerCase()) {
            case 'performance and detail':
                await this.modals.fundDetail.closeBtn.waitForClickable({timeout: config.wait.M});
                await this.modals.fundDetail.closeBtn.click();
                break;
            case 'performance and detail return':
                await this.modals.fundDetail.returnBtn.waitForClickable({timeout: config.wait.M});
                await this.modals.fundDetail.returnBtn.click();
                break;
            default:
                throw new Error(`Unknown modal name: ${selector}`);
        }
    }

    async confirmPurchase() {
        await this.multiStep.stepSummary.btnContinue.waitForClickable({timeout: config.wait.M});
        await this.multiStep.stepSummary.btnContinue.click();
    }

    async enterAmount() {
        if (await this.multiStep.stepAmount.amountInput.isDisplayed()) {
            await this.multiStep.stepAmount.amountInput.waitForDisplayed({timeout: config.wait.M});
            await this.multiStep.stepAmount.amountInput.setValue({value: 2000});
            await this.multiStep.stepAmount.btnSimulate.waitForClickable({timeout: config.wait.M});
            await this.multiStep.stepAmount.btnSimulate.click();
        }
    }

    async finish() {
        await this.goToStep('summary');
        await this.confirmPurchase();
        await this.fillOtp();
    }

    async fillOtp(code = '12345678') {
        await super.fillOtp(code);
    }

    async goToStep(step) {
        const stepList = ['fund list', 'amount', 'legals', 'summary'];
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
            case 'amount':
                await this.enterAmount();
                await Commands.wait({time: config.wait.S});
                if (await this.multiStep.stepAmount.btnContinue.isClickable()) {
                    await this.multiStep.stepAmount.btnContinue.waitForClickable({timeout: config.wait.M});
                    await this.multiStep.stepAmount.btnContinue.click();
                }
                break;
            case 'fund list':
                await this.selectFundCategory();
                await this.selectNewFund({selector:'BBVACOR'});
                break;
            case 'legals':
                await this.enterAmount();
                await this.openDiciDocument();
                await this.multiStep.stepLegals.confirmTerms.waitForClickable({timeout: config.wait.M});
                await this.multiStep.stepLegals.confirmTerms.click();
                await this.multiStep.stepLegals.btnContinue.waitForClickable({timeout: config.wait.M});
                await this.multiStep.stepLegals.btnContinue.click();
                break;
            case 'summary':
                await this.confirmPurchase();
                break;
            default:
                throw new Error(`Unknown step name: ${step}`);
        }
    }

    async openDiciDocument() {
        await this.multiStep.stepLegals.diciDocument.waitForClickable({timeout: config.wait.M});
        await this.multiStep.stepLegals.diciDocument.click();
    }

    async openFundDescriptionModal() {
        await this.modals.fundList.btnBoard.waitForClickable({timeout: config.wait.M});
        await this.modals.fundList.btnBoard.click();
    }

    async openFundDetailModal() {
        await this.modals.fundList.detailFund.waitForClickable({timeout: config.wait.M});
        await this.modals.fundList.detailFund.click();
    }

    async openInvestAmountModal() {
        await this.multiStep.stepAmount.btnInvestHelp.waitForClickable({timeout: config.wait.M});
        await this.multiStep.stepAmount.btnInvestHelp.click();
    }

    async openPrivacyModal() {
        await this.multiStep.stepLegals.btnPrivacy.waitForClickable({timeout: config.wait.M});
        await this.multiStep.stepLegals.btnPrivacy.click();
    }

    async openStep(section) {
        let buttons = {};
        switch (section.toLowerCase()) {
            case 'found list':
                await this.waitForElementsExist(this.editFundList);
                buttons = await this.editFundList.elements();
                await buttons.value[0].scrollIntoView();
                await buttons.value[0].waitForDisplayed({timeout: config.wait.XL});
                await buttons.value[0].click();
                break;
            case 'invest':
                await this.waitForElementsExist(this.editInvest);
                buttons = await this.editInvest.elements();
                await buttons.value[0].scrollIntoView();
                await buttons.value[0].waitForDisplayed({timeout: config.wait.XL});
                await buttons.value[0].click();
                break;
            case 'legals':
                await this.waitForElementsExist(this.editLegas);
                buttons = await this.editLegas.elements();
                await buttons.value[0].scrollIntoView();
                await buttons.value[0].waitForDisplayed({timeout: config.wait.XL});
                await buttons.value[0].click();
                break;
            default:
                throw new Error(`Unknown section name: ${section}`);
        }
    }

    async searchInvestmentFund({selector}) {
        await this.modals.fundList.searchInput.waitForDisplayed({timeout: config.wait.M});
        await this.modals.fundList.searchInput.setValue({value: selector});
        await Commands.wait({time: config.wait.XS});
    }

    async selectViewAllFunds() {
        await this.multiStep.stepFundList.viewAllBtn.waitForClickable({timeout: config.wait.M});
        await this.multiStep.stepFundList.viewAllBtn.click();
    }

    async selectCategoryFilter({selector}) {
        const tabId = {
            debt: 'tab-0',
            rent: 'tab-1',
            multistrategy: 'tab-2'
        }[selector.toLowerCase()];
        const btn = this.modals.fundList.tabCategoryBtn.specifySelector({placeholder: '_TAB_ID_', value: tabId});
        await btn.waitForClickable({timeout: config.wait.M});
        await btn.click();
    }

    async selectDebtCategory() {
        await this.modals.fundList.tabDebtCategory.waitForClickable({timeout: config.wait.M});
        await this.modals.fundList.tabDebtCategory.click();
    }

    async selectFundCategory({selector = 'debt'} = {}) {
        const categoryId = {
            debt: 'DEUDA',
            rent: 'RENTA',
            multistrategy: 'MULTIESTRATEGIA'
        }[selector.toLowerCase()];
        const btn = this.multiStep.stepFundList.categoryBtn.specifySelector({placeholder: '_CATEGORY_', value: categoryId});
        await btn.waitForClickable({timeout: config.wait.M});
        await btn.click();
        await Commands.wait({time: config.wait.XS});
    }

    async selectInvestmentFund({selector}, fundSelector) {
        const fund = fundSelector || this.modals.fundList.resultFundItem;
        const btn = fund.specifySelector({placeholder: '_FUND_', value: selector.toUpperCase()});
        this.setCurrentStep('amount');
        await btn.waitForClickable({timeout: config.wait.M});
        await btn.click();
    }

    async selectLiquidityFilter({selector}) {
        const liquidityId = {
            '24 hours': '24 horas',
            'same day': 'Mismo día'
        }[selector.toLowerCase()];
        const checkbox = this.modals.fundFilter.filterCheckbox.specifySelector({placeholder: '_LIQUIDITY_', value: liquidityId});
        await this.modals.fundList.filterLink.waitForClickable({timeout: config.wait.M});
        await this.modals.fundList.filterLink.click();
        await checkbox.waitForClickable({timeout: config.wait.M});
        await checkbox.click();
        await this.modals.fundFilter.continueBtn.waitForClickable({timeout: config.wait.M});
        await this.modals.fundFilter.continueBtn.click();
    }

    async selectNewFund({selector}) {
        const fundItem = this.modals.fundList.mainFundItem;
        await this.selectInvestmentFund({selector}, fundItem);
        await Commands.wait({time: config.wait.XS});
    }

    setCurrentStep(step) {
        this.currentStep = step;
    }

    async retryOperation() {
        await this.modals.fundAlert.btnRetry.waitForClickable({timeout: config.wait.M});
        await this.modals.fundAlert.btnRetry.click();
    }

    async waitForFullyLoaded() {
        await Commands.wait({time: config.wait.XS});
        await this.multiStep.stepFundList.categoryItem.waitForDisplayed({timeout: config.wait.M});
    }
}
export default new EquityContractsNewFundPage();
