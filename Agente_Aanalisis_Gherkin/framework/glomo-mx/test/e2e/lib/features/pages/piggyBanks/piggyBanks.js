import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('piggyBanks')
class PiggyBanks extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-piggyBanks[state="active"]',
            elements: {
                piggyBanks: {
                    properties: {
                        root: '[data-tag-name="piggy-banks-piggy-banks-mx"]',
                    },
                    header: '#main-header',
                    back: '#main-header .left-group .icon',
                    piggyBanksList: {
                        properties: {
                            root: '[data-tag-name="piggy-banks-list"]'
                        },
                        emptyPiggyBanksList: '[data-tag-name="piggy-banks-panel-info"]',
                        associatedAccount: '[data-tag-name="bbva-panel-container"]',
                        piggyBanksOperations: '[data-tag-name="bbva-button-row"]',
                        piggyBanksInAccount: '[data-tag-name="bbva-header-category"]',
                        piggyBank: '[element-id="__ID__"]',
                        filterPiggyBanks: '.items',
                    },
                    onboarding: {
                        properties: {
                            root: '#newOnboardingModal'
                        },
                        accept: '.action-button',
                        play: '.play',
                        nextSlide: '.next',
                        close: '.close'
                    },
                    creationMultistep: {
                        properties: {
                            root: '[data-tag-name="piggy-banks-content-modal-create"]'
                        },
                        accountStep: ' #step-1',
                        creationStep: {
                            properties: {
                                root: '#step-2 '
                            },
                            piggyBankData: '#heading',
                            piggyBankName: '[data-tag-name="bbva-form-text"] input',
                            piggyBankAmount: '[data-tag-name="bbva-form-amount"] input',
                            piggyBankAmountWarning: '[variant="alert"]',
                            clearName: '[data-tag-name="bbva-form-text"] .clear',
                            addRule: '[data-tag-name="bbva-form-toggle-input"]',
                            continue: '.action',
                            edit: '#editButton'
                        },
                        rulesStep: {
                            properties: {
                                root: '#step-3 '
                            },
                            automaticSavings: '#heading',
                            savingFrequency: '[data-tag-name="bbva-form-select"]',
                            frequency: '#selector [value="__FREQUENCY__"]',
                            savingAmount: '[data-tag-name="bbva-form-amount"] input',
                            continue: '.action',
                            edit: '#editButton'
                        },
                        confirm: '[data-tag-name="piggy-banks-panel-button"] [data-tag-name="bbva-button-default"]',
                    },
                    piggyBankDetails: {
                        properties: {
                            root: '#detail'
                        },
                        header: '.first-level-sequential',
                        close: '[data-id="iconsLeft"] .icon',
                        detailLink: '[data-tag-name="bbva-type-link"]',
                        operations: '.items',
                        lastMovementsTitle: '[data-tag-name="bbva-header-category"][text-size="L"]',
                        date: '#contributionHeader-0',
                        movement: '[id=contributionMovement-__ID__]'
                    },
                    piggyBankMoreDetail: {
                        properties: {
                            root: '#moreDetail'
                        },
                        header: '.first-level-sequential',
                        close: '.left-group button',
                        name: '[data-tag-name="piggy-banks-list-simple"]',
                        associatedAccount: '.pocket-detail',
                        accountDetail: '[data-tag-name="piggy-banks-list-card"]'
                    },
                    automaticContributions: {
                        properties: {
                            root: '#rules'
                        },
                        header: '.first-level-sequential',
                        close: '.left-group button',
                        account: '[data-tag-name="piggy-banks-rules"] [data-tag-name="bbva-type-text"]',
                        addRule: '[data-tag-name="bbva-button-action"]',
                        noRulesPanel: '[data-tag-name="piggy-banks-panel-info"]',
                        payrollRule: '[data-tag-name="bbva-form-toggle-input"]',
                        ruleSettings: '[data-tag-name="bbva-type-link"]'
                    },
                    filterResults: {
                        properties: {
                            root: '#filter'
                        },
                        header: '.first-level-sequential',
                        close: '.left-group button',
                        resultsPanel: '[data-tag-name="bbva-form-filter"]',
                        result: '[data-tag-name="piggy-banks-list-movement"]',
                        noResult: '[data-tag-name="piggy-banks-panel-info"]'
                    },
                    createNewRule: '#createNewRuleList [data-tag-name="bbva-type-link"]',
                    piggyBankSuccess: [BbvaHelpModal, {
                        modifiers: '#modalSuccess[visible]',
                        additionalElements: {
                            header: '[data-tag-name="bbva-header-main"]',
                            close: '#btn-close',
                            successIcon: '[data-tag-name="piggy-banks-panel-process"] [data-tag-name="bbva-clip-box"]',
                            title: '[data-tag-name="piggy-banks-panel-process"] [data-tag-name="bbva-type-text"]',
                            amount: '[data-tag-name="piggy-banks-panel-process"] [data-tag-name="bbva-type-amount"]',
                            operations: '.items',
                        }
                    }],
                    createPiggyBank: [BbvaHelpModal, {
                        modifiers: '#modalCreatePiggyBank[visible]',
                        additionalElements: {
                            header: '[data-tag-name="bbva-header-main"][variant="modal-initial-secondary"]',
                            close: '[data-tag-name="bbva-header-main"][variant="modal-initial-secondary"] #btn-close',
                            editionHeader: '[data-tag-name="bbva-header-main"][variant="modal-initial"]',
                            editionClose: '[data-tag-name="bbva-header-main"][variant="modal-initial-secondary"] #btn-close',
                        }
                    }],
                    leaveOperation: [BbvaHelpModal, {
                        modifiers: '#exitConfirmationModal[visible]',
                        additionalElements: {
                            header: '#heading',
                            close: '[data-id="iconsRight"]',
                            warning: '#helpModalTitle',
                            exit: '[data-tag-name="bbva-button-default"]',
                            continue: '[data-tag-name="bbva-button-default"][variant="link"]'
                        }
                    }],
                    addRefundMoney: [BbvaHelpModal, {
                        modifiers: '#modalAddDeleteMoney[visible]',
                        additionalElements: {
                            amount:'[data-tag-name="bbva-form-amount"] input',
                            warning: '[variant="alert"]',
                            confirm: '[data-tag-name="bbva-button-default"]'
                        }
                    }],
                    seeMore: [BbvaHelpModal, {
                        modifiers: '#seeMoreModal[visible]',
                        additionalElements: {
                            close: '[data-id="iconsRight"]',
                            editName: '#Edit',
                            delete: '#Delete'
                        }
                    }],
                    piggyBankName: [BbvaHelpModal, {
                        modifiers: '#piggyBankNameModal[visible]',
                        additionalElements: {
                            piggyBankName: '[data-tag-name="bbva-form-input"][type="text"]',
                            clear: '[data-tag-name="bbva-form-text"] .clear',
                            warning: '[variant="alert"]'
                        }
                    }],
                    listFilter: [BbvaHelpModal, {
                        modifiers: '#modalListFilter[visible]',
                        additionalElements: {
                            piggyBankName: '[data-tag-name="bbva-form-text"] input',
                            confirm: '[data-tag-name="bbva-button-default"]'
                        }
                    }],
                    addNewRule: [BbvaHelpModal, {
                        modifiers: '#modalCreateNewRulePiggyBank[visible]',
                        additionalElements: {
                            name:'[data-tag-name="bbva-form-input"][type="text"]',
                            amount:'[data-tag-name="piggy-banks-content-modal-rules-form"]',
                            savingFrequency: '[data-tag-name="bbva-form-select"]',
                            frequency: '#selector [value="__FREQUENCY__"]',
                            confirm: '.slot-footer:not([hidden]) .footer-button',
                            percentage: '[value="PERCENTAGE"]',
                        }
                    }],
                    ruleActivationSuccess: [BbvaHelpModal, {
                        modifiers: '#rulesActivationSuccessModal[visible]',
                        additionalElements: {
                            header: '[data-tag-name="bbva-header-main"]',
                            close: '#btn-close',
                            successIcon: '[data-tag-name="piggy-banks-panel-process"] [data-tag-name="bbva-clip-box"]',
                            title: '[data-tag-name="piggy-banks-panel-process"] [data-tag-name="bbva-type-text"]',
                            amount: '[data-tag-name="piggy-banks-panel-process"] [data-tag-name="bbva-type-amount"]',
                            ruleDetails: '[data-tag-name="bbva-panel-container"]'
                        }
                    }],
                    configureRule: [BbvaHelpModal, {
                        modifiers: '#configureModal[visible]',
                        additionalElements: {
                            deleteRule: '#Delete',
                        }
                    }],
                    confirmDeletion: [BbvaHelpModal, {
                        modifiers: '#deleteConfirmationModal[visible]',
                        additionalElements: {
                            confirm: '[data-tag-name="bbva-button-default"]:not([variant="link"])',
                        }
                    }],
                    confirmPiggyBankDeletion: [BbvaHelpModal, {
                        modifiers: '#confirmationModal[visible]',
                        additionalElements: {
                            confirm: '[data-tag-name="bbva-button-default"]:not([variant="link"])',
                        }
                    }],
                },
            },
            requiredElements: ['piggyBanks'],
        });
    }

    async closeOnboarding() {
        await this.piggyBanks.onboarding.__root.scrollIntoView({block: 'end'});
        await (await (await this.piggyBanks.onboarding.accept.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async pauseOnboarding() {
        await (await this.piggyBanks.onboarding.play.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async nextSlide(slide) {
        let i = 0;
        const slides = {
            'save easy': 0,
            'hidden money': 1,
            'automatic saving rules': 2,
            'safe money': 3,
        };
        await (await (await this.piggyBanks.onboarding.__root.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .scrollIntoView({block: 'end'});
        await this.pauseOnboarding();
        while (i < slides[slide]) {
            await (await this.piggyBanks.onboarding.nextSlide.waitForDisplayed({timeout: config.wait.M}))
                .click();
            i++;
        }
        await (await this.piggyBanks.onboarding.close.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async nextStep(step) {
        const steps = {
            2: this.piggyBanks.creationMultistep.creationStep.continue,
            3: this.piggyBanks.creationMultistep.rulesStep.continue
        };
        const element = steps[step];
        await (await (await element.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async modifyStep(step) {
        let currentStep = this.piggyBanks.creationMultistep.creationStep.edit;
        if(step === 'automatic savings') {
            currentStep = this.piggyBanks.creationMultistep.rulesStep.edit;
        }
        await this.waitForElementsExist(currentStep);
        const editLink = (await currentStep.elements()).value[0];
        await (await (await editLink.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async setPiggyBankName(value = 'Prueba') {
        if (!await this.piggyBanks.creationMultistep.accountStep.waitForDisplayed({timeout: config.wait.M, failOnError: false})){
            await this.piggyBanks.creationMultistep.accountStep.scrollIntoView();
        }
        await (await this.piggyBanks.creationMultistep.creationStep.piggyBankName.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: value});
    }

    async setPiggyBankAmount(value = '10000') {
        await (await this.piggyBanks.creationMultistep.creationStep.piggyBankAmount.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: value});
    }

    async addRule() {
        await (await this.piggyBanks.creationMultistep.creationStep.addRule.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async onOffPayrollRule() {
        await (await this.piggyBanks.automaticContributions.payrollRule.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async moreOperations() {
        await this.waitForElementsExist(this.piggyBanks.piggyBankDetails.operations, config.wait.M);
        await (await (await this.piggyBanks.piggyBankDetails.operations.elements()).value[3]
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async showEditName() {
        await (await this.piggyBanks.seeMore.additionalElements.editName.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async editName() {
        await this.piggyBanks.piggyBankName.__root.waitForAnimation({timeout: config.wait.M});
        await (await this.piggyBanks.piggyBankName.additionalElements.piggyBankName.waitForDisplayed({timeout: config.wait.M}))
            .execute({script: () => this.value = 'Piggy Bank'});
    }

    async clearName() {
        await (await this.piggyBanks.piggyBankName.additionalElements.clear.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async showDeletePiggyBank() {
        await (await this.piggyBanks.seeMore.additionalElements.delete.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async closeMoreOperations() {
        await (await this.piggyBanks.seeMore.additionalElements.close.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async confirmPiggyBankDeletion() {
        await this.piggyBanks.confirmPiggyBankDeletion.__root.waitForDisplayed({timeout: config.wait.M});
        await this.piggyBanks.confirmPiggyBankDeletion.__root.waitForAnimation({timeout: config.wait.M});
        await (await this.piggyBanks.confirmPiggyBankDeletion.additionalElements.confirm.waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: false, scrollOptions: {block: 'center'}});
    }

    async setSavingAmount() {
        await (await this.piggyBanks.creationMultistep.rulesStep.savingAmount.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: '1000'});
    }

    async setSavingFrequency(frequency) {
        const value = frequency === 'biweekly' ? 'EVERY_TWO_WEEKS' : frequency.toUpperCase();
        await this.piggyBanks.creationMultistep.rulesStep.savingFrequency.execute({script: () => this.setAttribute('native-selector', true)});
        if (value === 'MONTHLY') {
            await (await this.piggyBanks.creationMultistep.rulesStep.savingFrequency.waitForDisplayed({timeout: config.wait.M}))
                .click();
            const frequencyOption = await this.piggyBanks.creationMultistep.rulesStep.frequency.specifySelector({placeholder: '__FREQUENCY__', value: 'EVERY_TWO_WEEKS'});
            await (await frequencyOption.waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
        await (await this.piggyBanks.creationMultistep.rulesStep.savingFrequency.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await (await this.piggyBanks.creationMultistep.rulesStep.frequency.specifySelector({placeholder: '__FREQUENCY__', value: value}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async leaveOperation() {
        await (await this.piggyBanks.leaveOperation.additionalElements.exit.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async closeDialog() {
        await this.piggyBanks.createPiggyBank.__root.waitForAnimation({timeout: config.wait.M});
        await (await this.piggyBanks.createPiggyBank.additionalElements.editionClose.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async showPiggyBankDetails() {
        await (await (await this.piggyBanks.piggyBanksList.piggyBank.specifySelector({placeholder: '__ID__', value: global.user.piggyBankId}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async showPiggyBankFilter() {
        await this.waitForElementsExist(this.piggyBanks.piggyBanksList.filterPiggyBanks, config.wait.M);
        await (await (await this.piggyBanks.piggyBanksList.filterPiggyBanks.elements()).value[1]
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async searchPiggyBank(coincidences) {
        const value = coincidences === 'with' ? 'Viaje' : 'Vacaciones';
        await (await this.piggyBanks.listFilter.additionalElements.piggyBankName.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: value});
        await (await this.piggyBanks.listFilter.additionalElements.confirm.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async setPercentageRule() {
        await (await this.piggyBanks.addNewRule.additionalElements.percentage.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await this.piggyBanks.addNewRule.additionalElements.confirm.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async showGeneralDetails() {
        await this.showPiggyBankDetails();
        await (await this.piggyBanks.piggyBankDetails.detailLink.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async addMoney() {
        await this.waitForElementsExist(this.piggyBanks.piggyBankDetails.operations, config.wait.M);
        await (await (await this.piggyBanks.piggyBankDetails.operations.elements()).value[0]
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async refundMoney() {
        await this.waitForElementsExist(this.piggyBanks.piggyBankDetails.operations, config.wait.M);
        await (await (await this.piggyBanks.piggyBankDetails.operations.elements()).value[1]
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async setAmountTransaction() {
        await (await this.piggyBanks.addRefundMoney.additionalElements.amount.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: '100'});
    }

    async confirmTransaction() {
        await (await this.piggyBanks.addRefundMoney.additionalElements.confirm.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async openAutomaticContributions() {
        await this.waitForElementsExist(this.piggyBanks.piggyBankDetails.operations, config.wait.M);
        await (await (await this.piggyBanks.piggyBankDetails.operations.elements()).value[2]
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async addAutomaticContribution() {
        await (await this.piggyBanks.automaticContributions.addRule.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await this.piggyBanks.createNewRule.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async setAutomaticContribution(frequency) {
        const value = frequency === 'biweekly' ? 'EVERY_TWO_WEEKS' : frequency.toUpperCase();
        await (await this.piggyBanks.addNewRule.additionalElements.name.waitForDisplayed({timeout: config.wait.M}))
            .execute({script: () => this.value = 'Mi primera regla'});
        await (await this.piggyBanks.addNewRule.additionalElements.amount.waitForDisplayed({timeout: config.wait.M}))
            .execute({script: () => this._amount = '1000'});
        await (await this.piggyBanks.addNewRule.additionalElements.savingFrequency.waitForDisplayed({timeout: config.wait.M}))
            .execute({script: () => this.setAttribute('native-selector', true)});
        if (frequency === 'daily') {
            await (await this.piggyBanks.addNewRule.additionalElements.savingFrequency.waitForDisplayed({timeout: config.wait.M}))
                .click();
            const frequencyOption = await this.piggyBanks.addNewRule.additionalElements.frequency.specifySelector({placeholder: '__FREQUENCY__', value: 'WEEKLY'});
            await (await frequencyOption.waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
        await (await this.piggyBanks.addNewRule.additionalElements.savingFrequency.waitForDisplayed({timeout: config.wait.M}))
            .click();
        const frequencyOption = await this.piggyBanks.addNewRule.additionalElements.frequency.specifySelector({placeholder: '__FREQUENCY__', value: value});
        await (await frequencyOption.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await this.piggyBanks.addNewRule.additionalElements.confirm.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async configureRule() {
        await (await this.piggyBanks.automaticContributions.ruleSettings.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async deleteRule() {
        await (await this.piggyBanks.configureRule.additionalElements.deleteRule.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async confirmDeletion() {
        await (await this.piggyBanks.confirmDeletion.additionalElements.confirm.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async goBack() {
        await (await this.piggyBanks.back.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async confirmCreation() {
        await ( await this.piggyBanks.creationMultistep.confirm.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async namePiggyBank(closeOnboarding = true) {
        if (closeOnboarding) {
            await this.closeOnboarding();
        }
        await this.setPiggyBankName();
    }

    async createPiggyBank(rule, frequency, step) {
        const rules = {
            'insufficient amount': {amount: true, setRule: false, create: false, insufficient: true},
            'payroll': {amount: true, setRule: true},
            'payroll no initial amount': {amount: false, setRule: true},
            'periodic': {amount: true, setRule: true},
            'initial amount': {amount: true, setRule: false, create: false},
        };
        const {amount, setRule, create = true, insufficient = false} = rules[rule] || {};
        const setFrequency = rule === 'periodic';
        const steps = [
            () => this.namePiggyBank(),
            amount && (() => this.setPiggyBankAmount()),
            setRule && (() => this.addRule()),
            !insufficient && (() => this.nextStep(2)),
            setFrequency && (() => this.setSavingFrequency(frequency)),
            setRule && (() => this.setSavingAmount()),
            setRule && (() => this.nextStep(3)),
            step && (() => this.modifyStep(step)),
            create && !step &&  (() => this.confirmCreation())

        ].filter(Boolean);

        for (const step of steps) {
            await step();
        }
    }

    async backToProductDetail() {
        await this.closeDialog();
        await this.leaveOperation();
        await this.goBack();
    }

    async addRefundPiggyBank(operation) {
        const save = operation.toLowerCase() === 'saves' || operation.toLowerCase().includes('save');
        await this.showPiggyBankDetails();
        if (save) {
            await this.addMoney();
        } else {
            await this.refundMoney();
        }
        await this.setAmountTransaction();
        if (!operation.toLowerCase().includes('tries')) {
            await this.confirmTransaction();
        }
    }

    async showAutomaticContributions() {
        await this.showPiggyBankDetails();
        await this.openAutomaticContributions();
    }

    async pauseRule() {
        await this.showAutomaticContributions();
        await this.onOffPayrollRule();
    }

    async addNewRule(frequency) {
        await this.showAutomaticContributions();
        await this.addAutomaticContribution();
        await this.setAutomaticContribution(frequency);
    }

    async leaveCreation(){
        await this.closeOnboarding();
        await this.closeDialog();
    }

    async remainCreation(operation){
        await this.leaveCreation();
        const element = operation === 'continue operation' ? this.piggyBanks.leaveOperation.additionalElements.continue : this.piggyBanks.leaveOperation.additionalElements.close;
        await (await element.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async showPiggyBanksDashboard() {
        await this.leaveCreation();
        await this.leaveOperation();
    }

    async deleteCurrentRule() {
        await this.showAutomaticContributions();
        await this.configureRule();
        await this.deleteRule();
        await this.confirmDeletion();
    }

    async enableAutomaticContributions() {
        await this.namePiggyBank(false);
        await this.setPiggyBankAmount();
        await this.addRule();
        await this.nextStep(2);
    }

    async openCloseMoreOperations() {
        await this.showPiggyBankDetails();
        await this.moreOperations();
        await this.closeMoreOperations();
    }

    async editPiggyBankName() {
        await this.showPiggyBankDetails();
        await this.moreOperations();
        await this.showEditName();
        await this.editName();
        await this.clearName();
    }

    async deletePiggyBank() {
        await this.showPiggyBankDetails();
        await this.moreOperations();
        await this.showDeletePiggyBank();
        await this.confirmPiggyBankDeletion();
    }

    async filterPiggyBanks(coincidences) {
        await this.showPiggyBankFilter();
        await this.searchPiggyBank(coincidences);
    }

    async addPercentageRule() {
        await this.showAutomaticContributions();
        await this.addAutomaticContribution();
        await this.setPercentageRule();
    }

    async performRuleOperation(operation) {
        switch (operation.toLowerCase()) {
            case 'go to':
                await this.showAutomaticContributions();
                break;
            case 'disable':
                await this.pauseRule();
                break;
            case 'delete':
                await this.deleteCurrentRule();
                break;
            default:
                throw new Error(`Operation: "${operation}" is not defined`);
        }
    }

    async exitsCreationPiggyBank(operation) {
        await this.waitForElementsExist(this.piggyBanks.piggyBankSuccess.additionalElements.operations, config.wait.M);
        switch (operation.toLowerCase()) {
            case 'go piggy bank':
                await (await (await this.piggyBanks.piggyBankSuccess.additionalElements.operations.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            case 'all piggy banks':
                await (await (await this.piggyBanks.piggyBankSuccess.additionalElements.operations.elements()).value[1]
                    .waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            case 'create new':
                await (await (await this.piggyBanks.piggyBankSuccess.additionalElements.operations.elements()).value[2]
                    .waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            case 'dashboard piggy banks':
                await (await this.piggyBanks.piggyBankSuccess.additionalElements.close
                    .waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`Operation: "${operation}" is not defined`);
        }
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'success header':
                await (await (await this.piggyBanks.piggyBankSuccess.__root.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .scrollIntoView({block: 'end'});
                await this.piggyBanks.piggyBankSuccess.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success exit button':
                await this.piggyBanks.piggyBankSuccess.additionalElements.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success checkmark':
                await this.piggyBanks.piggyBankSuccess.additionalElements.successIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success title':
                await this.piggyBanks.piggyBankSuccess.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success amount':
                await this.piggyBanks.piggyBankSuccess.additionalElements.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'go piggy bank button':
                await this.waitForElementsExist(this.piggyBanks.piggyBankSuccess.additionalElements.operations, config.wait.M);
                await (await this.piggyBanks.piggyBankSuccess.additionalElements.operations.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'all piggy banks':
                await this.waitForElementsExist(this.piggyBanks.piggyBankSuccess.additionalElements.operations, config.wait.M);
                await (await this.piggyBanks.piggyBankSuccess.additionalElements.operations.elements()).value[1]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'create another button':
                await this.waitForElementsExist(this.piggyBanks.piggyBankSuccess.additionalElements.operations, config.wait.M);
                await (await this.piggyBanks.piggyBankSuccess.additionalElements.operations.elements()).value[2]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'create piggy bank header':
                await this.piggyBanks.createPiggyBank.__root.scrollIntoView();
                await this.piggyBanks.createPiggyBank.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'create piggy bank edition header':
                await (await (await this.piggyBanks.createPiggyBank.__root.waitForDisplayed({timeout: config.wait.M}))
                    .waitForAnimation({timeout: config.wait.M}))
                    .scrollIntoView({block: 'end'});
                await this.piggyBanks.createPiggyBank.additionalElements.editionHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'create piggy bank close':
                await this.piggyBanks.createPiggyBank.additionalElements.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'create piggy bank edition close':
                await this.piggyBanks.createPiggyBank.additionalElements.editionClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'create piggy bank data':
                await this.piggyBanks.creationMultistep.creationStep.piggyBankData.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank name input':
                await this.piggyBanks.creationMultistep.creationStep.piggyBankName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank name clear':
                await this.piggyBanks.creationMultistep.creationStep.clearName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank amount input':
                await this.piggyBanks.creationMultistep.creationStep.piggyBankAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'automatic savings':
                await this.piggyBanks.creationMultistep.__root.scrollIntoView();
                await this.piggyBanks.creationMultistep.rulesStep.automaticSavings.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'saving amount input':
                await this.piggyBanks.creationMultistep.rulesStep.savingAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank details header':
                await this.piggyBanks.piggyBankDetails.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank details close':
                await this.piggyBanks.piggyBankDetails.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank details detail link':
                await this.piggyBanks.piggyBankDetails.detailLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank details add money':
                await this.waitForElementsExist(this.piggyBanks.piggyBankDetails.operations, config.wait.M);
                await (await this.piggyBanks.piggyBankDetails.operations.elements()).value[0]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank details remove money':
                await this.waitForElementsExist(this.piggyBanks.piggyBankDetails.operations, config.wait.M);
                await (await this.piggyBanks.piggyBankDetails.operations.elements()).value[1]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank details automatic contribution':
                await this.waitForElementsExist(this.piggyBanks.piggyBankDetails.operations, config.wait.M);
                await (await this.piggyBanks.piggyBankDetails.operations.elements()).value[2]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank details more operations':
                await this.waitForElementsExist(this.piggyBanks.piggyBankDetails.operations, config.wait.M);
                await (await this.piggyBanks.piggyBankDetails.operations.elements()).value[3]
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy banks associated account':
                await this.piggyBanks.piggyBanksList.associatedAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy banks operations':
                await this.piggyBanks.piggyBanksList.piggyBanksOperations.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy banks in account':
                await this.piggyBanks.piggyBanksList.piggyBanksInAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first piggy bank':
                await (await this.piggyBanks.piggyBanksList.piggyBank.specifySelector({placeholder: '__ID__', value: global.user.piggyBankId}))
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second piggy bank':
                await (await this.piggyBanks.piggyBanksList.piggyBank.specifySelector({placeholder: '__ID__', value: global.user.secondPiggyBankId}))
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank last movements title':
                await this.piggyBanks.piggyBankDetails.lastMovementsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank last movement date':
                await this.piggyBanks.piggyBankDetails.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank first movement':
                await (await this.piggyBanks.piggyBankDetails.movement.specifySelector({placeholder: '__ID__', value: global.user.firstMovementId}))
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank second movement':
                await (await this.piggyBanks.piggyBankDetails.movement.specifySelector({placeholder: '__ID__', value: global.user.secondMovementId}))
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank more detail header':
                await this.piggyBanks.piggyBankMoreDetail.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank more detail close':
                await this.piggyBanks.piggyBankMoreDetail.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank more detail name':
                await this.piggyBanks.piggyBankMoreDetail.name.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank more detail associated account':
                await this.piggyBanks.piggyBankMoreDetail.associatedAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank more detail account detail':
                await this.piggyBanks.piggyBankMoreDetail.accountDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'automatic contributions header':
                await this.piggyBanks.automaticContributions.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'automatic contributions close':
                await this.piggyBanks.automaticContributions.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'automatic contributions account':
                await this.piggyBanks.automaticContributions.account.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'automatic contributions add rule':
                await this.piggyBanks.automaticContributions.addRule.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'automatic contributions no rules panel':
                await this.piggyBanks.automaticContributions.noRulesPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rule activation header':
                await this.piggyBanks.ruleActivationSuccess.__root.scrollIntoView({block: 'center'});
                await this.piggyBanks.ruleActivationSuccess.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rule activation close':
                await this.piggyBanks.ruleActivationSuccess.additionalElements.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rule activation success icon':
                await this.piggyBanks.ruleActivationSuccess.additionalElements.successIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rule activation title':
                await this.piggyBanks.ruleActivationSuccess.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rule activation amount':
                await this.piggyBanks.ruleActivationSuccess.additionalElements.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rule activation details':
                await this.piggyBanks.ruleActivationSuccess.additionalElements.ruleDetails.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'automatic contributions paused rule':
                await this.piggyBanks.automaticContributions.payrollRule.waitForAttribute({attribute: 'checked', timeout: config.wait.M, reverse: true});
                break;
            case 'piggy banks dashboard header':
                await this.piggyBanks.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy banks dashboard back':
                await this.piggyBanks.back.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy banks dashboard empty piggy banks list':
                await this.piggyBanks.piggyBanksList.emptyPiggyBanksList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank edit name warning':
                await this.piggyBanks.piggyBankName.additionalElements.warning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank add money warning':
                await this.piggyBanks.addRefundMoney.additionalElements.warning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank amount warning':
                await this.piggyBanks.creationMultistep.creationStep.piggyBankAmountWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank filter header':
                await this.piggyBanks.filterResults.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank filter back button':
                await this.piggyBanks.filterResults.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank filter panel':
                await this.piggyBanks.filterResults.resultsPanel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank filter with result':
                await this.piggyBanks.filterResults.result.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'piggy bank filter without result':
                await this.piggyBanks.filterResults.noResult.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'create piggy bank account':
                await this.piggyBanks.creationMultistep.accountStep.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new PiggyBanks();
