import AbstractGlomoPage from '../abstract-glomo-page';
import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('ocSecureLoanLead')
class OcSecureLoanLead extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocSecureLoan[state="active"]',
            elements: {
                offerPage: [BbvaHelpModal, {
                    modifiers: '#offerPage[visible]',
                    additionalElements: {
                        title: '[data-tag-name="bbva-header-main"][text="lmo-oc-secure-loan-lead-offer-page-modal-title"]',
                        iconCloseBtn: '[data-tag-name="bbva-header-main"][text="lmo-oc-secure-loan-lead-offer-page-modal-title"] [data-id="iconsRight"] #btn-close',
                    }
                }],
                simulationPage: [BbvaHelpModal, {
                    modifiers: '#simulationPage[visible]',
                    additionalElements: {
                        simulationTitle: '[data-tag-name="bbva-core-heading"]#heading',
                        buttonExitSimulation: '[data-tag-name="bbva-header-main"][text="lmo-oc-secure-loan-lead-simulation-page-modal-title"] [data-id="iconsRight"] #btn-close',
                        errorInputAmount: '[data-tag-name="bbva-form-amount"][error-message="__VALUE__"] input',
                        editButtonSummary: '[data-tag-name="bbva-expandable-multistep"] .header.header-ellipsis:has(+div) #editButton',
                        selectContract: '[data-tag-name="bbva-form-select"][label="Contrato"] #button',
                        inputLbl: '[data-tag-name="bbva-form-input"][label="lmo-oc-secure-loan-lead-simulation-page-loan-amount-label"]',
                        inputClearBtn: '[data-tag-name="bbva-form-input"][label="lmo-oc-secure-loan-lead-simulation-page-loan-amount-label"] [data-tag-name="bbva-form-amount"] [data-tag-name="bbva-button-default"].clear [data-tag-name="bbva-type-icon"]',
                        inputAmount: '[data-tag-name="bbva-form-input"][label="lmo-oc-secure-loan-lead-simulation-page-loan-amount-label"] [data-tag-name="bbva-form-amount"] input',
                        loanGuaranteeModule: '[data-tag-name="bbva-expandable-accordion"]#loanGuarantee',
                        editGuaranteeLink: '[data-tag-name="lmo-oc-secure-loan-lead-list"][item-link="Editar garantía"] [data-tag-name="bbva-type-link"]',
                        interestRateModule: '[data-tag-name="bbva-form-radio-button"][name="typesInterestRate"]',
                        fixedRadioBtn: '[data-tag-name="bbva-form-radio-button"][name="typesInterestRate"] [data-tag-name="bbva-form-radio-button-input"][value="FIXED"]',
                        variableRadioBtn: '[data-tag-name="bbva-form-radio-button"][name="typesInterestRate"] [data-tag-name="bbva-form-radio-button-input"][value="VARIABLE"]',
                        paymentDetailModule: '[data-tag-name="bbva-expandable-accordion"]#paymentDetail',
                        catTooltip: '[data-tag-name="bbva-type-link"][icon-size="24"]',
                        continueSimulationBtn: '[data-tag-name="bbva-button-default"][text="lmo-oc-secure-loan-lead-simulation-page-sticky-button"]',
                        confirmSummaryBtn: '[data-tag-name="bbva-button-default"][text="lmo-oc-secure-loan-lead-simulation-page-confirm-button"]',
                        iconCloseBtn: '[data-tag-name="bbva-header-main"][text="lmo-oc-secure-loan-lead-simulation-page-modal-title"] [data-id="iconsRight"] #btn-close',
                        summaryInfo: '[data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"][completed]'
                    }
                }],
                guaranteePage: [BbvaHelpModal, {
                    modifiers: '#editGuaranteePage[visible]',
                    additionalElements: {
                        fixedTab: '[data-tag-name="bbva-tab-default"] #tab-0',
                        variableTab: '[data-tag-name="bbva-tab-default"] #tab-1',
                        fixedList: '[data-tag-name="bbva-tab-default"] [data-tag-name="bbva-form-container"]#fixedAssetsList',
                        variableList: '[data-tag-name="bbva-tab-default"] [data-tag-name="bbva-form-container"]#variableAssetsList',
                        description: '.sticky-fixed [data-tag-name="bbva-type-text"][text="lmo-oc-secure-loan-lead-edit-guarantee-page-sticky-text"]',
                        amount: '.sticky-fixed [data-tag-name="bbva-type-amount"]',
                        saveChangesBtn: '.sticky-fixed [data-tag-name="bbva-button-default"][text="lmo-oc-secure-loan-lead-edit-guarantee-page-sticky-button"]',
                        checkboxGuarantee: '[data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"][name="__VALUE__"] [data-tag-name="bbva-type-text"]',
                        checkboxGuaranteeSingle: '[data-tag-name="lmo-oc-secure-loan-lead-list"][item-title="__VALUE__"]',
                        editPercentageLink: '[data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"][name="__VALUE__"] [data-tag-name="lmo-oc-secure-loan-lead-list"] [data-tag-name="bbva-type-link"]',
                        editPercentageLinkSingle: '[data-tag-name="lmo-oc-secure-loan-lead-list"][item-title="__VALUE__"] [data-tag-name="bbva-type-link"]',
                        amountGuaranteeZero: '[data-tag-name="lmo-oc-secure-loan-lead-list"] .container__list [data-tag-name="bbva-type-amount"][aria-disabled="true"]',
                        amountPercentageZero: '[data-tag-name="bbva-type-amount"][symbol="%"][aria-disabled="true"]',
                        checkAssetDisable: '[data-tag-name="bbva-form-control-input"]:not([checked])',
                        checkAssetEnable: '[data-tag-name="bbva-form-control-input"][value="BBVALIQ"][checked]',
                        amountGuarantee: '[data-tag-name="bbva-form-control-input"][value="BBVALIQ"] [data-tag-name="lmo-oc-secure-loan-lead-list"] .container__list [data-tag-name="bbva-type-amount"]',
                        amountPercentage: '[data-tag-name="bbva-form-control-input"][value="BBVALIQ"] [data-tag-name="bbva-type-amount"][symbol="%"]',
                    }
                }],
                successPage: [BbvaHelpModal, {
                    modifiers: '#successPage[visible]',
                    additionalElements: {
                        exitButton: '[data-tag-name="bbva-header-main"][text="lmo-oc-secure-loan-lead-success-page-modal-header"] [data-id="iconsRight"] #btn-close',
                        successIcon: '[data-tag-name="bbva-clip-box"]',
                        guaranteeDetail: '.success-page-container #loanGuarantee',
                        guaranteeDetailList: '.success-page-container #loanGuarantee .container__list',
                        paymentDetail: '.success-page-container #paymentDetail',
                        emailNotification: '[data-tag-name="bbva-notification-message"]',
                        sharedBtn: '.list-item.only-one-item [data-tag-name="bbva-button-action"]',
                    }
                }],
                modals: {
                    percentageModal: [BbvaHelpModal, {
                        modifiers: '#editPercentageModal[visible]',
                        additionalElements: {
                            saveChanges: '[data-tag-name="bbva-button-default"].footer-button',
                            percentageHight: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-amount"][error-message="lmo-oc-secure-loan-lead-edit-percentage-modal-percentage-maximum-error-message"]',
                            percentageLess: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-amount"][error-message="lmo-oc-secure-loan-lead-edit-percentage-modal-percentage-minimum-error-message"]',
                            input: '[data-tag-name="bbva-form-input"] [data-tag-name="bbva-form-amount"] [aria-label="lmo-oc-secure-loan-lead-edit-percentage-modal-percentage-label"]',
                            capitalNotification: '[data-tag-name="bbva-notification-message"]',
                            assetContent: '.list-container',
                        }
                    }],
                    exit: [BbvaHelpModal, {
                        modifiers: '#exit[visible]',
                        additionalElements: {
                            buttonExit: '.help-modal [data-tag-name="bbva-button-default"][text="Salir"]',
                            continueSimulation: '.help-modal [data-tag-name="bbva-button-default"][text="Continuar en la simulación"]',
                            buttonCloseModal: '[data-tag-name="bbva-header-main"][text="Salir"] [data-id="iconsRight"] #btn-close',
                        }
                    }],
                    cat: [BbvaHelpModal, {
                        modifiers: '#tooltip[visible]',
                        additionalElements: {
                            title: '[data-tag-name="bbva-header-main"][text="CAT"]',
                            msg: '#helpModalContent [data-tag-name="bbva-type-text"]',
                            iconCloseBtn: '[data-tag-name="bbva-header-main"][text="CAT"] [data-id="iconsRight"] #btn-close',
                        }
                    }],
                    advice: [BbvaHelpModal, {
                        modifiers: '#advice[visible]',
                        additionalElements: {
                            titleWarning: '[data-tag-name="bbva-header-main"][text="Aviso"]',
                            exitButton: '[data-tag-name="bbva-header-main"][text="Aviso"] [data-id="iconsRight"] #btn-close',
                            labelNotice: '#title-text',
                            contentInf: '[tag="p"]',
                            acceptButton: '.slot-footer [data-tag-name="bbva-button-default"][text="Aceptar"]',
                        }
                    }],
                    insufficientGuarantee: [BbvaHelpModal, {
                        modifiers: '#insufficient-guarantee[visible]',
                        additionalElements: {
                            titleWarning: '[data-tag-name="bbva-header-main"][text="Aviso"]',
                            labelNotice: '#title-text',
                            contentInf: '[tag="p"]',
                            acceptButton: '.slot-footer [data-tag-name="bbva-button-default"][text="Aceptar"]',
                        }
                    }],
                },
            },
            requiredElements: [
                'offerPage.additionalElements.title',
            ]
        });
    }

    async _screenValidation({ item, value }) {
        switch (item.toLowerCase()) {
            case 'btn exit simulation':
                await this.simulationPage.additionalElements.iconCloseBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'simulation title':
                await this.simulationPage.additionalElements.simulationTitle.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'simulation contracts':
                await this.simulationPage.additionalElements.selectContract.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'simulation input label':
                await this.simulationPage.additionalElements.inputLbl.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'fixed radio button':
                await this.simulationPage.additionalElements.fixedRadioBtn.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'variable radio button':
                await this.simulationPage.additionalElements.variableRadioBtn.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'message minimum amount':
                await (await this.simulationPage.additionalElements.errorInputAmount.specifySelector({ placeholder: '__VALUE__', value: global.user.messageamount.errorInputAmountLess }))
                    .waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'message maximum amount':
                await (await this.simulationPage.additionalElements.errorInputAmount.specifySelector({ placeholder: '__VALUE__', value: global.user.messageamount.errorInputAmountHigh }))
                    .waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'simulation loan guarantee':
                await this.simulationPage.additionalElements.loanGuaranteeModule.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'simulation interest rate':
                await this.simulationPage.additionalElements.interestRateModule.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'simulation payment detail':
                await this.simulationPage.additionalElements.paymentDetailModule.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'guarantee tabs fixed':
                await this.guaranteePage.additionalElements.fixedTab.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'guarantee tabs variable':
                await this.guaranteePage.additionalElements.variableTab.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'guarantee list variable':
                await this.guaranteePage.additionalElements.variableList.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'guarantee list fixed':
                await this.guaranteePage.additionalElements.fixedList.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'guarantee information':
                await this.guaranteePage.additionalElements.description.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'amount guarantee zero':
                await this.guaranteePage.additionalElements.amountGuaranteeZero.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'amount percentage zero':
                await this.guaranteePage.additionalElements.amountPercentageZero.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'check asset disable':
                await this.guaranteePage.additionalElements.checkAssetDisable.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'check asset enable':
                await this.guaranteePage.additionalElements.checkAssetEnable.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'amount guarantee':
                await this.guaranteePage.additionalElements.amountGuarantee.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'amount percentage':
                await this.guaranteePage.additionalElements.amountPercentage.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'message label minimum':
                await this.modals.percentageModal.additionalElements.percentageLess.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'message label maximum':
                await this.modals.percentageModal.additionalElements.percentageHight.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'percentage input amount':
                await this.modals.percentageModal.additionalElements.input.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'assets content':
                await this.modals.percentageModal.additionalElements.assetContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'percentage capital notification':
                await this.modals.percentageModal.additionalElements.capitalNotification.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'summary edit':
                await this.simulationPage.additionalElements.editButtonSummary.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'summary confirm button':
                await this.simulationPage.additionalElements.confirmSummaryBtn.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'information summary':
                await this.simulationPage.additionalElements.summaryInfo.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'success clipbox title':
                await this.successPage.additionalElements.successIcon.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'success loan guarantee':
                await this.successPage.additionalElements.guaranteeDetail.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'success loan guarantee asset':
                await this.successPage.additionalElements.guaranteeDetailList.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'success payment detail':
                await this.successPage.additionalElements.paymentDetail.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'success email notification':
                await this.successPage.additionalElements.emailNotification.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'success share button':
                await this.successPage.additionalElements.sharedBtn.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title modal advice':
                await this.modals.advice.additionalElements.titleWarning.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'exit modal advice':
                await this.modals.advice.additionalElements.exitButton.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'label modal advice':
                await this.modals.advice.additionalElements.labelNotice.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'text information advice':
                await this.modals.advice.additionalElements.contentInf.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'acept button advice':
                await this.modals.advice.additionalElements.acceptButton.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'title modal insufficient guarantee':
                await this.modals.insufficientGuarantee.additionalElements.titleWarning.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'label modal insufficient guarantee':
                await this.modals.insufficientGuarantee.additionalElements.labelNotice.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'text information insufficient guarantee':
                await this.modals.insufficientGuarantee.additionalElements.contentInf.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            case 'acept button insufficient guarantee':
                await this.modals.insufficientGuarantee.additionalElements.acceptButton.waitForDisplayed({ timeout: config.wait.M, reverse: value === 'disable' });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async goToStep(step, lastStepInitialized = false) {
        switch (step.toLowerCase()) {
            case 'offer':
                await (await this.offerPage.acceptBtn.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'simulation':
                if (!lastStepInitialized) await this.goToStep('offer');
                await (await this.simulationPage.additionalElements.continueSimulationBtn.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'summary':
                if (!lastStepInitialized) await this.goToStep('simulation');
                await (await this.simulationPage.additionalElements.confirmSummaryBtn.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'guarantee':
                await this.goToStep('offer');
                await (await this.simulationPage.additionalElements.editGuaranteeLink.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'percentage':
                await this.goToStep('guarantee');
                await this.selectGuarantee();
                break;
            default:
                throw new Error(`${step} tooltip is not available reason...`);
        }
    }

    async updateInterestRate(rate) {
        switch (rate) {
            case 'variable':
                await (await this.simulationPage.additionalElements.variableRadioBtn.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'fixed':
                await (await this.simulationPage.additionalElements.fixedRadioBtn.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            default:
                throw new Error(`Unknown rate: ${rate}`);
        }
    }

    async completeSimulationChangeAmount() {
        await this.viewMessageAmount('valid');
        await this.goToStep('simulation', true);
        await this.goToStep('summary', true);
    }

    async viewMessageAmount(amount) {
        await this.goToStep('offer');
        await this.updateAmount(amount);
    }

    async updateAmount(amount) {
        const amountsMap = {
            maximum: global.user.loanAmount.maximum,
            minimum: global.user.loanAmount.minimum,
            valid: global.user.loanAmount.valid
        };
        await (await this.simulationPage.additionalElements.inputClearBtn.waitForDisplayed({ timeout: config.wait.M })).click();
        await this.simulationPage.additionalElements.inputAmount.waitForDisplayed({ timeout: config.wait.M });
        await this.simulationPage.additionalElements.inputAmount.setValue(amountsMap[amount]);
    }

    async handlePercentageUpdate(typeAmount, asset, investmentName) {
        await this.goToStep('guarantee');
        await this.selectGuarantee(asset, investmentName);
        await this.updatePercentage(typeAmount);
    }

    async updatePercentage(percentage) {
        const { maximum, minimum, valid } = global.user.typePercentage;
        const map = {
            'maximum percentage': maximum,
            'minimum percentage': minimum,
            valid
        };
        const valueToUpdate = map[percentage];
        await this.modals.percentageModal.additionalElements.input.waitForDisplayed({ timeout: config.wait.M });
        await this.modals.percentageModal.additionalElements.input.setValue(valueToUpdate);
    }

    async closeCatModal() {
        await (await this.simulationPage.additionalElements.catTooltip.waitForDisplayed({ timeout: config.wait.M })).click();
        await (await this.modals.cat.additionalElements.iconCloseBtn.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async discardAsset(asset) {
        await this.goToStep('guarantee');
        const investmentName = Object.values(global.user.listGuarantees[asset])[0];
        if (asset === 'variable') {
            await this.changeIncomeAsset();
        }
        await this.selectGuarantee(asset, investmentName, 'checkbox');
    }

    async selectGuarantee(asset = 'fixed', investmentName = 'BBVALIQ', action = 'link') {
        const assetType = (asset === 'single')? 'single': 'multiple';
        const editGuarenteeType = assetType + action;

        switch (editGuarenteeType) {
            case 'singlecheckbox':
                await this.guaranteePage.additionalElements.checkboxGuaranteeSingle.specifySelector({ placeholder: '__VALUE__', value: investmentName })
                    .click();
                break;
            case 'singlelink':
                await this.guaranteePage.additionalElements.editPercentageLinkSingle.specifySelector({ placeholder: '__VALUE__', value: investmentName })
                    .click();
                break;
            case 'multiplecheckbox':
                await this.guaranteePage.additionalElements.checkboxGuarantee.specifySelector({ placeholder: '__VALUE__', value: investmentName })
                    .click();
                break;
            case 'multiplelink':
                await this.guaranteePage.additionalElements.editPercentageLink.specifySelector({ placeholder: '__VALUE__', value: investmentName })
                    .click();
                break;
            default:
                throw new Error(`Unknown guarantee type: ${editGuarenteeType}`);
        }
    }

    async changeIncomeAsset() {
        await (await this.guaranteePage.additionalElements.variableTab.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async completeClearOptionsGuarantee(asset) {
        await this.goToStep('guarantee');
        await this.accessCleanAllInvestment(asset);
    }

    async accessCleanAllInvestment(asset) {
        const assetType = asset.toLowerCase();
        const configAssets = {
            'all asset': { fixed: ['idLiq'], variable: ['idNdq', 'idGld', 'idSbx', 'idApl'] },
            'insufficient guarantee': { fixed: ['idLiq'], variable: ['idApl', 'idGld', 'idNdq'] },
            'an asset': { fixed: ['idLiq']}
        };
        const selection = configAssets[assetType];
        await this.completeSelectGuarantee(selection.fixed);
        if (selection.variable && selection.variable.length > 0) {
            await (await this.guaranteePage.additionalElements.variableTab.waitForDisplayed({ timeout: config.wait.M })).click();
            await this.completeSelectGuarantee(selection.variable);
        }
    }

    async completeSelectGuarantee(idGuaranteeArray) {
        const guarantees = global.user.listGuarantees;
        for (const idGuarantee of idGuaranteeArray) {
            const nameGuarantee = guarantees.fixed[idGuarantee] || guarantees.variable[idGuarantee];
            if (nameGuarantee) {
                const selector = this.guaranteePage.additionalElements.checkboxGuarantee.specifySelector({placeholder: '__VALUE__', value: nameGuarantee});
                await selector.click();
            }
        }
    }

    async accessExitModal(asset, option) {
        await this.completeClearOptionsGuarantee(asset);
        switch (option) {
            case 'accept button':
                await (await this.modals.advice.additionalElements.acceptButton.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'exit button':
                await (await this.modals.advice.additionalElements.exitButton.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            default:
                throw new Error(`Unknown option ${option}`);
        }
    }

    async completeChangePercentage() {
        await this.handlePercentageUpdate('valid', 'fixed', global.user.listGuarantees.fixed.idLiq);
        await this.accessSavePercentage();
        await this.accessSavedGuarantee();
        await this.goToStep('simulation', true);
        await this.goToStep('summary', true);
    }

    async accessSavePercentage() {
        await (await this.modals.percentageModal.additionalElements.saveChanges.waitForDisplayed({ timeout: config.wait.M })).click();
    }
    async accessSavedGuarantee() {
        await (await this.guaranteePage.additionalElements.saveChangesBtn.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async exitSimulation({ option }) {
        switch (option.toLowerCase()) {
            case 'offer':
                await (await this.offerPage.additionalElements.iconCloseBtn.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'modify simulation page':
                await this.goToStep('offer');
                await this.updateInterestRate('variable');
                await this.confirmExit();
                break;
            case 'exit simulation page':
                await this.goToStep('offer');
                await (await this.simulationPage.additionalElements.iconCloseBtn.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'success':
                await this.goToStep('summary');
                await (await this.successPage.additionalElements.exitButton.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            default:
                throw new Error(`${option} closeModal is not available reason...`);
        }
    }

    async confirmExit() {
        await (await this.simulationPage.additionalElements.buttonExitSimulation.waitForDisplayed({ timeout: config.wait.M })).click();
        await (await this.modals.exit.additionalElements.buttonExit.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async handleSimulationExit(viewOption, closemodal) {
        switch (viewOption.toLowerCase()) {
            case 'exit simulation step':
                await this.goToStep('offer');
                await this.updateInterestRate('variable');
                await (await this.simulationPage.additionalElements.iconCloseBtn.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'exit resume simulation':
                await this.goToStep('simulation');
                await (await this.simulationPage.additionalElements.iconCloseBtn.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            default:
                throw new Error(`${viewOption} viewOption is not available reason...`);
        }
        await this.closeModalSimulation(closemodal);
    }

    async closeModalSimulation(closeModal) {
        switch (closeModal.toLowerCase()) {
            case 'continue simulation':
                await (await this.modals.exit.additionalElements.continueSimulation.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'exit modal':
                await (await this.modals.exit.additionalElements.buttonCloseModal.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            default:
                throw new Error(`${closeModal} closeModal is not available reason...`);
        }
    }

    async completeRemoveAsset() {
        await this.goToStep('guarantee');
        await this.accessCleanAllInvestment('an asset');
        await this.accessSavedGuarantee();
        await (await this.simulationPage.additionalElements.editGuaranteeLink.waitForDisplayed({ timeout: config.wait.M })).click();
        await this.accessCleanAllInvestment('an asset');
    }

    async completePercentageAsset(typeAmount = 'valid', asset = 'fixed', investmentName = 'BBVALIQ') {
        await this.goToStep('guarantee');
        await this.selectGuarantee(asset, investmentName);
        await this.updatePercentage(typeAmount);
        await this.accessSavePercentage();
        await this.accessCleanAllInvestment('an asset');
        await this.accessSavedGuarantee();
        await (await this.simulationPage.additionalElements.editGuaranteeLink.waitForDisplayed({ timeout: config.wait.M })).click();
    }
}

export default new OcSecureLoanLead();
