import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import moment from 'moment';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page('Goals')
class Goals extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-goals[state="active"]',
            elements: {
                header:{
                    goBack : '[data-tag-name="goals-saving-goals-mx"] #main-header [data-id="iconsLeft"] .icon',
                },
                listGoals: {
                    properties: {
                        root: '[data-tag-name="goals-saving-goals-mx-list-goals"]'
                    },
                    addAnotherGoal: '.wrapper [data-tag-name="goals-saving-goals-mx-list-link"]',
                    goal: '[role="list"] [data-tag-name="goals-saving-goals-mx-list-goal"]:nth-of-type(1)',
                    addGoal: '.wrapper [data-tag-name="goals-saving-goals-mx-list-link"]',
                    illustrationPalm: '.wrapper [data-tag-name="goals-saving-goals-mx-panel-info"]'
                },
                listGoalsDashboard: {
                    properties: {
                        root: '[data-tag-name="goals-saving-goals-mx-list-goals-dashboard"]'
                    },
                    goal: '[role="list"] [data-tag-name="goals-saving-goals-mx-list-goal"]:nth-of-type(1)',
                    addAnotherGoalBtn: '[data-tag-name="bbva-button-row"] #buttons .list-item [data-tag-name="bbva-button-action"]'
                },
                modalsContainer: {
                    properties: {
                        root: {
                            web: '.__modals-container',
                            isWithoutRoot: true
                        }
                    },
                    welcomeModalContinue: '[data-tag-name="bbva-help-modal"][data-id="welcomeModal"][visible] .modal-footer [data-tag-name="bbva-button-default"]',
                    goalDeletionConfirmDeletionModal: [BbvaHelpModal, {modifiers: '#confirmationModalId[visible]'}],
                    goalDetailConfirmDeletion: [BbvaHelpModal, {modifiers: '[data-id="removeGoalModal"][visible]'}],
                    withdrawSavingsSuccessModal: [BbvaHelpModal, {modifiers: '[data-id="deleteHelpModalSuccess"][visible]',
                        additionalElements: {
                            goalReceipt: '[data-tag-name="goals-saving-goals-mx-receipt"]',
                            goalSummary: '[data-tag-name="goals-saving-goals-mx-receipt"] [role="list"]',
                            closeBtn: '.slot-footer [data-tag-name="bbva-button-default"][role="button"][text*="Cerrar" i]',
                            createNewGoal: '.modal-footer bbva-button-default'
                        }
                    }],
                    createGoalForm: [BbvaHelpModal, {modifiers: '[data-id="createGoalMultistepForm"][visible]',
                        additionalElements: {
                            createGoalMultistepForm: '[data-tag-name="goals-saving-goals-mx-create-goal-multistep-form"]',
                            step1GoalPurpose: '#step-1 [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"][value="TRAVEL"]',
                            step1GoalPurposeBuy: '#step-1 [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"][value="PURCHASE"]',
                            step1Continue: '#step-1 [data-tag-name="bbva-button-default"][text*="Continuar" i]',
                            step1Edit: '[data-tag-name="bbva-expandable-step"][header="Motivo de tu meta"]#step-1 [data-tag-name="bbva-type-link"]#editButton',

                            step2GoalName: '#step-2 [data-tag-name="bbva-form-text"] input',
                            step2GoalAmount: '#step-2 [data-tag-name="bbva-form-amount"] input',
                            step2GoalDate: '#step-2 [data-tag-name="bbva-form-date"]',
                            step2Continue: '#step-2 .button-container [data-tag-name="bbva-button-default"]',

                            step3Algorithm:'#step-3 [data-tag-name="goals-saving-goals-mx-algorithm"]',
                            step3AdviceModal: '#step-3 #open-advice-modal',
                            step3Purchases: '#step-3 [data-tag-name="bbva-list-toggle"] [data-tag-name="bbva-form-toggle"] .container',
                            step3Continue: '#step-3 [data-tag-name="bbva-button-default"][text*="Continuar" i]',
                            step3HowPlanWorks: '#step-3 [data-tag-name="bbva-type-link"]',
                            step3ContributionPlanRecommendation:'#step-3 .list-goal-container',
                            step3ContributionPlanGetCloser:'#step-3 #open-advice-modal',
                            step3ContributionPlanForPurchases:'#step-3 #purchase-contribution [data-tag-name="bbva-form-toggle-input"]',
                            step3EditContributionPlanForPurchases:'#step-3 [data-tag-name="goals-saving-goals-mx-algorithm"] .algorithm-container .contribution-container #edit-contribution',
                            step3ContributionPlanScheduled:'#step-3 [data-tag-name="bbva-form-toggle-input"]',
                            step3EditContributionPlanScheduled:'#step-3 #link-periodic-modal-empty button#edit-contribution',
                            step3ContributionPlanNotification:'#step-3 .algorithm-container .contribution-container [data-tag-name="bbva-notification-message"]',

                            step4SelectedAccount: '#step-4 [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"][value="__ID__"]',
                            step4FirstCondition: '#step-4 [data-tag-name="bbva-form-checkbox"][value="firstCondition"]',
                            step4SecondCondition: '#step-4 [data-tag-name="bbva-form-checkbox"][value="secondCondition"]',
                            step4Continue: '#step-4 [data-tag-name="bbva-button-default"][role="button"]',
                            create: '[data-tag-name="bbva-button-default"]#create-goal',
                            summary: '[all-completed]'
                        }
                    }],

                    firstAccessModal: [BbvaHelpModal, {modifiers: '[visible]',
                        additionalElements: {
                            microillustration: '[data-tag-name="goals-saving-goals-mx-panel-info"] [data-tag-name="bbva-clip-microillustration"]',
                            title: '[data-tag-name="goals-saving-goals-mx-panel-info"] [data-tag-name="bbva-type-text"]:nth-of-type(1)',
                            description: '[data-tag-name="goals-saving-goals-mx-panel-info"] [data-tag-name="bbva-type-text"]:nth-of-type(2)',
                        }
                    }],

                    goalWithdrawalSuccess: [BbvaHelpModal, { modifiers: '#refundHelpModalSuccess[visible]',
                        additionalElements: {
                            modalHeader: '.help-modal',
                            goalReceipt: '[data-tag-name="goals-saving-goals-mx-receipt"]',
                            goalSummary: '[data-tag-name="goals-saving-goals-mx-receipt"] [role="list"]',
                        }
                    }],
                    moreInformationModal: [BbvaHelpModal, { modifiers: '#more-info-modal[visible]',
                        additionalElements: {
                            info: '.panel-info',
                            moreInfo: '[data-tag-name="bbva-expandable-accordion"]'
                        }
                    }],
                    goalDetailCompleted: [BbvaHelpModal, {modifiers: '#modalFinished[visible]',
                        additionalElements: {
                            helpModalTitle: '#helpModalTitle',
                            helpModalContent: '#helpModalContent',
                            continue: '[data-tag-name="bbva-button-default"][text*="Retirar" i]',
                            detail: '[data-tag-name="bbva-button-default"][variant="link"]'
                        }
                    }],
                    goalDeletionSuccess: [BbvaHelpModal, { modifiers: '#modalId[visible]',
                        additionalElements: {
                            modalHeader: '.help-modal',
                            goalReceipt: '[data-tag-name="goals-saving-goals-mx-receipt"]',
                            goalSummary: '[data-tag-name="goals-saving-goals-mx-receipt"] [role="list"]',
                        }
                    }],
                    goalContributionSuccess: [BbvaHelpModal, { modifiers: '[visible]#operationSuccessModal',
                        additionalElements: {
                            modalHeader: '.help-modal',
                            goalReceipt: '[data-tag-name="goals-saving-goals-mx-receipt"]',
                            goalSummary: '[data-tag-name="goals-saving-goals-mx-receipt"] [role="list"]',
                            closeBtn: '.slot-footer [data-tag-name="bbva-button-default"][role="button"]',
                            createNewGoal: '[data-tag-name="bbva-button-default"]'
                        }
                    }],
                    goalConfirmEditionModal: [BbvaHelpModal, {modifiers: '[visible]#redirectAutomaticSaveModal'}],
                    withdrawSavingsConfirmDeletionModal: [BbvaHelpModal, {modifiers: '#confirmationModalId[visible]'}],
                    withdrawSavings: [BbvaHelpModal, {modifiers: '[data-id="withdrawSavings"][visible]',
                        additionalElements: {
                            leave: '#helpModalHeader #iconsRight #btn-close',
                            account: '[data-tag-name="bbva-form-select"]',
                            selection: '[data-tag-name="bbva-form-option"][value="__ID__"]',
                            continue: '[data-tag-name="bbva-button-default"][text*="Continuar" i]',
                        }
                    }],
                    successPeriodicModal: [BbvaHelpModal, { modifiers: '[data-id="confirmationScheduledModal"][visible]',
                        additionalElements: {
                            summary: '[role="list"]',
                            image: '[data-tag-name="goals-saving-goals-mx-panel-process"] [data-tag-name="bbva-clip-box"]',
                            title: '[data-tag-name="goals-saving-goals-mx-panel-process"] [data-tag-name="bbva-type-text"]'
                        }
                    }],
                    exitModal: [BbvaHelpModal, {modifiers: '[visible]#exitConfirmModal'}],
                    deleteContributionConfirmation: [BbvaHelpModal, {modifiers: '[visible]#delete-contribution-confirmation'}],
                    contributionFormulas:  [BbvaHelpModal, {modifiers: '[data-id="contributionFormulasModal"]',
                        additionalElements: {
                            contributionHelp: '[data-tag-name="bbva-header-category"] .title-container [data-tag-name="bbva-type-link"]',
                            addContribution: '#periodic-modal-info-panel [data-tag-name="bbva-type-link"][role="button"]',
                            editPurchasesContribution: '#edit-contribution-formula-link',
                            deletePurchasesContribution: '#delete-per-purchase-link',
                            editPeriodicContribution: '#edit-scheduled-transfer-link',
                            addOtherContribution: '[data-tag-name="goals-saving-goals-mx-list-link"][header-text="Agregar aportación automática"]',
                            text: '.text-pre-line',
                            toggleContribution: '.box-shadow [data-tag-name="bbva-form-toggle-input"]',
                            editContribution: '#edit-scheduled-transfer-link',
                            deleteContribution: '#delete-scheduled-transfer-link',
                            successDeletion: '[data-tag-name="bbva-notification-toast"][show]',
                        }
                    }],
                    modalListFormulas: [BbvaHelpModal, {modifiers: '[visible]#modal-list-formula',
                        additionalElements: {
                            activateRounding: '[data-tag-name="goals-saving-goals-mx-panel-info"][microillustration="roundUpRule"] [data-tag-name="bbva-type-link"][text="Activar"]',
                            activatePeriodic: '[data-tag-name="goals-saving-goals-mx-panel-info"][microillustration="periodicContribution"] [data-tag-name="bbva-type-link"][text="Activar"]'
                        },
                    }],
                    periodicContribution: [BbvaHelpModal, {modifiers: '[visible]#periodic-modal',
                        additionalElements: {
                            amount: '#periodic-amount input',
                            origin: '#periodic-origin-account button',
                            account: '[data-tag-name="bbva-form-option"][value="__ID__"]',
                            frequency: '#periodic-frequency',
                            period: '[data-tag-name="bbva-form-option"][value="BIWEEKLY"]',
                            start: '#start-date',
                            end: '#end-date',
                            save: '.footer-button'
                        },
                    }],
                    periodicModal: [BbvaHelpModal, {modifiers: '[visible]#redirectPeriodicModal',
                        additionalElements: {
                            continue: '[data-tag-name="bbva-button-default"]'
                        },
                    }],
                    goalContribution: [BbvaHelpModal, {modifiers: '[data-id="contributeGoal"][visible]',
                        additionalElements: {
                            account: '[data-tag-name="bbva-form-select"]',
                            selection: '[data-tag-name="bbva-form-option"][value="__ID__"]',
                            amount: '[data-tag-name="bbva-form-amount"] input',
                            contribute: '[data-tag-name="bbva-button-default"][text*="Aportar" i]',
                        },
                    }],
                    goalWithdrawal: [BbvaHelpModal, {modifiers: '[data-id="refundGoals"][visible]',
                        additionalElements: {
                            account: '[data-tag-name="bbva-form-select"]',
                            selection: '[data-tag-name="bbva-form-option"][value="__ID__"]',
                            amount: '[data-tag-name="bbva-form-amount"] input',
                            withdraw: '[data-tag-name="bbva-button-default"][text*="Retirar" i]',
                        },
                    }],
                    goalEdition: [BbvaHelpModal, {modifiers: '[data-id="editGoal"][visible]',
                        additionalElements: {
                            goalName: '[data-tag-name="bbva-form-text"] input',
                            goalAmount: '[data-tag-name="bbva-form-amount"] input',
                            goalDate: '[data-tag-name="bbva-form-date"]',
                            save: '[data-tag-name="bbva-button-default"][text*="Guardar" i]',
                        }
                    }],
                    algorithm: [BbvaHelpModal, {modifiers: '[data-id="algorithmModal"][visible]',
                        additionalElements: {
                            continue: '[data-tag-name="bbva-button-default"][text*="Continuar" i]'
                        },
                    }],
                    goalDeletion: [BbvaHelpModal, {modifiers: '[data-id="deleteGoals"][visible]',
                        additionalElements: {
                            account: '[data-tag-name="bbva-form-select"]',
                            selection: '[data-tag-name="bbva-form-option"][value="__ID__"]',
                            continue: '[data-tag-name="bbva-button-default"][text*="Continuar" i]',
                        },
                    }],
                    successfulCreateGoal: [BbvaHelpModal, {modifiers: '[data-id="createGoalSuccessfulModal"][visible]',
                        additionalElements: {
                            panelInfo: '[data-tag-name="goals-saving-goals-mx-receipt"]',
                            summary: '[role="list"]',
                            goToMeta: '[data-tag-name="bbva-button-default"]:nth-of-type(1)',
                            exit: '.footer-button'
                        },
                    }],
                },
                goalDetail: {
                    properties: {
                        root: '[data-tag-name="goals-saving-goals-mx-detail-goal"][visible]'
                    },
                    goalEnd: '[data-tag-name="goals-saving-goals-mx-card-banner"] [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-date"]',
                    goalInfo: '[data-tag-name="goals-saving-goals-mx-card-banner"]',
                    goalProgress: '[data-tag-name="goals-saving-goals-mx-list-progress"]',
                    goalOperations: '[data-tag-name="bbva-button-row"]',
                    infoDetailGoal: '[data-tag-name="goals-saving-goals-mx-card-banner"]',
                    contributionPlan: '[data-tag-name="bbva-button-row"] #buttons [role="listitem"]:nth-child(1) [data-tag-name="bbva-button-action"]',
                    contributeGoal: '[data-tag-name="bbva-button-row"] #buttons [role="listitem"]:nth-child(2) [data-tag-name="bbva-button-action"]',
                    withdrawalGoal: '[data-tag-name="bbva-button-row"] #buttons [role="listitem"]:nth-child(3) [data-tag-name="bbva-button-action"]',
                    moreOptions: '[data-tag-name="bbva-button-row"] .more-container #buttons .button-more',
                    editGoal: '[data-tag-name="bbva-help-modal"] .container-link [data-tag-name="bbva-type-link"][text*="Editar" i]',
                    deleteGoal: '[data-tag-name="bbva-help-modal"] .container-link [data-tag-name="bbva-type-link"][text*="Eliminar" i]',
                    textMovements: '[data-tag-name="bbva-header-category"]:first-of-type',
                },
                successDeletion: '[data-tag-name="bbva-notification-toast"][show]'

            },
            requiredElements: ['__root']
        });
    }

    async createGoalFromWelcome() {
        await (await (await this.modalsContainer.welcomeModalContinue.waitForDisplayed({timeout: config.wait.L}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async createGoalFromList(fromDashboard=false) {
        await (fromDashboard
            ? await this.listGoalsDashboard.addAnotherGoalBtn.waitForDisplayed({timeout: config.wait.M})
            : await this.listGoals.addAnotherGoal.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async createGoalFromEmptyList() {
        await (await (await this.listGoals.addGoal.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click({scrollOptions: {block: 'end'}});
    }

    async viewGoalDetail(fromDashboard=false) {
        const goalElement = fromDashboard ? this.listGoalsDashboard.goal : this.listGoals.goal;
        await (await goalElement.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async accessContributionPlan() {
        await (await this.goalDetail.contributionPlan.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async readAboutPlan() {
        await (await this.modalsContainer.contributionFormulas.additionalElements.contributionHelp.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async addContributionFormula() {
        await (await this.modalsContainer.contributionFormulas.additionalElements.addContribution.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async editPurchasesContribution() {
        await (await this.modalsContainer.contributionFormulas.additionalElements.editPurchasesContribution.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async editPeriodicContribution() {
        await (await this.modalsContainer.contributionFormulas.additionalElements.editPeriodicContribution.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async deletePurchasesContribution() {
        await (await this.modalsContainer.contributionFormulas.additionalElements.deletePurchasesContribution.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async confirmDeletion() {
        await (await this.modalsContainer.deleteContributionConfirmation.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async confirmEdition() {
        await (await this.modalsContainer.goalConfirmEditionModal.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async withdrawComplete() {
        await (await this.modalsContainer.goalDetailCompleted.additionalElements.continue.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async viewDetailCompleted() {
        await (await this.modalsContainer.goalDetailCompleted.additionalElements.detail.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async closeWithdrawal() {
        await (await this.modalsContainer.withdrawSavings.iconCloseBtn.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async exitWithdrawal() {
        await (await this.modalsContainer.exitModal.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async confirmGoalDeletion(type) {
        switch (type.toLowerCase()) {
            case 'with':
                await (await this.modalsContainer.goalDeletionConfirmDeletionModal.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            case 'without':
                await (await this.modalsContainer.goalDetailConfirmDeletion.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            case 'complete':
                await (await this.modalsContainer.withdrawSavingsConfirmDeletionModal.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`${type} is not a valid operation for delete confirmation`);
        }
    }

    async addContribution(contribution) {
        await this.modalsContainer.modalListFormulas.__root.waitForAnimation({timeout: config.wait.M});
        if(contribution === 'periodic') {
            await (await this.modalsContainer.modalListFormulas.additionalElements.activatePeriodic.waitForDisplayed({timeout: config.wait.M}))
                .click();
        } else {
            await (await this.modalsContainer.modalListFormulas.additionalElements.activateRounding.waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
    }

    async navigateToSection(page) {
        switch (page.toLowerCase()) {
            case 'goal detail':
                await this.viewGoalDetail();
                break;
            case 'goal detail dashboard':
                await this.viewGoalDetail(true);
                break;
            case 'contribution plan':
                await this.reviewContributionPlan();
                break;
            case 'automatic contributions':
                await this.addAutomaticContribution();
                break;
            case 'goal contribution form':
                await  this.openContributionsForm('contributes');
                break;
            case 'goal withdrawal form':
                await  this.openContributionsForm('withdraws');
                break;
            case 'periodic contribution':
                await this.addContributionRule('periodic');
                break;
            case 'goal reason':
                await this.startGoalCreation('without plan');
                break;
            case 'goal form':
                await this.startGoalCreation('without goals', true);
                break;
            case 'plan simulator':
                await this.reviewSimulation('without goals');
                break;
            case 'plan simulator has goals':
                await this.reviewSimulation('with goals');
                break;
            case 'plan simulator without plan':
                await this.reviewSimulation('without plan');
                break;
            case 'summary':
                await this.openSummary();
                break;
            case 'account creation':
                await this.openAccountCreation();
                break;
            case 'periodic contribution step3':
                await this.addContributionRule('periodic');
                break;
            default:
                throw new Error(`${page} is not a valid page for goals`);
        }
    }

    async performGoalOperation(operation) {
        switch (operation.toLowerCase()) {
            case 'contributes':
                await (await this.goalDetail.contributeGoal.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            case 'withdraws':
                await (await this.goalDetail.withdrawalGoal.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            case 'edits':
            case 'deletes':
                await (await this.goalDetail.moreOptions.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                if(operation === 'edits') {
                    await (await this.goalDetail.editGoal.waitForDisplayed({timeout: config.wait.M}))
                        .click();
                } else {
                    await (await this.goalDetail.deleteGoal.waitForDisplayed({timeout: config.wait.M}))
                        .click();
                }
                break;
            default:
                throw new Error(`${operation} is not a valid operation for goals`);
        }
    }

    async startGoalCreation(accessPoint, goOn = false) {
        switch (accessPoint) {
            case 'welcome page':
            case 'without plan':
                await this.createGoalFromWelcome();
                break;
            case 'list goals':
            case 'with goals':
                await this.createGoalFromList();
                break;
            case 'empty goals list':
            case 'without goals':
                await this.createGoalFromEmptyList();
                break;
            case 'list goals dashboard':
                await this.createGoalFromList(true);
                break;
            case 'general multistep process':
                await this.openAccountCreation(true);
                break;
            default:
                throw new Error(`${accessPoint} is not a valid access point for goal creation`);
        }
        if(goOn) {
            await this.chooseGoalPurpose();
        }
    }

    async reviewContributionPlan() {
        await this.viewGoalDetail();
        await this.accessContributionPlan();
    }

    async addAutomaticContribution() {
        await this.reviewContributionPlan();
        await this.addContributionFormula();
    }

    async addContributionRule(rule) {
        await this.addAutomaticContribution();
        await this.addContribution(rule);
    }

    async openContributionsForm(operation) {
        await this.viewGoalDetail();
        await this.performGoalOperation(operation);
    }

    async chooseGoalPurpose() {
        await (await this.modalsContainer.createGoalForm.additionalElements.step1GoalPurposeBuy.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await this.modalsContainer.createGoalForm.additionalElements.step1Continue.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async editGoalPurpose() {
        await this.waitForElementsExist(this.modalsContainer.createGoalForm.additionalElements.step1Edit);
        const editLink = (await this.modalsContainer.createGoalForm.additionalElements.step1Edit.elements()).value[0];
        await (await (await editLink.waitForAnimation({timeout: config.wait.M}))
            .waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await this.modalsContainer.createGoalForm.additionalElements.step1GoalPurposeBuy.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await this.modalsContainer.createGoalForm.additionalElements.step1Continue.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async reviewSimulation(hasGoals) {
        await this.startGoalCreation(hasGoals, true);
        await this.fillGoalForm();
    }

    async openSummary() {
        await this.reviewSimulation('without goals');
        await this.showSummary();
    }

    async openAccountCreation(hasGoals = false) {
        if(hasGoals) {
            await this.createGoalFromList();
        } else {
            await this.createGoalFromWelcome();
        }
        await this.chooseGoalPurpose();
        await this.fillGoalForm();
        await this.showSummary();
    }

    async createGoal() {
        const {otp} = global.user;
        await this.createGoalFromWelcome();
        await this.chooseGoalPurpose();
        await this.fillGoalForm();
        await this.showSummary();
        await this.createAccount();
        await this.fillOtp(otp);
    }

    async createAccount() {
        await (await (await this.modalsContainer.createGoalForm.additionalElements.step4SelectedAccount.specifySelector({placeholder: '__ID__', value: global.user.associatedAccount.accountId}))
            .waitForExist({timeout: config.wait.M}))
            .click();
        await (await this.modalsContainer.createGoalForm.additionalElements.step4FirstCondition.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await this.modalsContainer.createGoalForm.additionalElements.step4SecondCondition.scrollIntoView({block: 'center'});
        await (await this.modalsContainer.createGoalForm.additionalElements.step4SecondCondition.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await this.modalsContainer.createGoalForm.additionalElements.step4Continue.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await this.completeCreation();
    }

    async makeContribution() {
        await (await this.modalsContainer.goalContribution.additionalElements.account.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await (await this.modalsContainer.goalContribution.additionalElements.selection.specifySelector({placeholder: '__ID__', value: global.user.principalAccount.accountId}))
            .waitForExist({timeout: config.wait.M}))
            .click();
        await (await this.modalsContainer.goalContribution.additionalElements.amount.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: 500});
        await (await this.modalsContainer.goalContribution.additionalElements.contribute.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async makeWithdrawal() {
        await (await this.modalsContainer.goalWithdrawal.additionalElements.amount.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: 500});
        await (await this.modalsContainer.goalWithdrawal.additionalElements.account.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await (await this.modalsContainer.goalWithdrawal.additionalElements.selection.specifySelector({placeholder: '__ID__', value: global.user.principalAccount.accountId}))
            .waitForExist({timeout: config.wait.M}))
            .click();
        await (await this.modalsContainer.goalWithdrawal.additionalElements.withdraw.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async editGoal() {
        await this.openContributionsForm('edits');
        await this.fillEditionForm();
        await this.confirmEdition();
        await this.continueEdition();
    }

    async deleteGoal(type) {
        await this.openContributionsForm('deletes');
        if(type === 'with') {
            await this.fillDeletionForm();
        }
        await this.confirmGoalDeletion(type);
    }

    async completeGoal() {
        await this.viewGoalDetail();
        await this.withdrawComplete();
        await this.fillWithdrawSavingsForm();
        await this.confirmGoalDeletion('complete');
    }

    async activatePeriodicContribution(enabled = true) {
        await this.fillForm(5000);
        if(enabled) {
            await (await this.modalsContainer.periodicModal.additionalElements.continue.waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
    }

    async createPeriodicContribution() {
        await this.navigateToSection('periodic contribution');
        await this.activatePeriodicContribution();
    }

    async modifyPeriodicContribution() {
        await this.navigateToSection('contribution plan');
        await this.editPeriodicContribution();
        await (await this.modalsContainer.periodicContribution.additionalElements.frequency.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await this.modalsContainer.periodicContribution.additionalElements.period.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await this.fillForm(9999);
    }

    async removePurchasesContribution() {
        await this.navigateToSection('contribution plan');
        await this.deletePurchasesContribution();
        await this.confirmDeletion();
    }

    async createGoalFromCompletion() {
        await this.completeGoal();
        await this.createNewGoal();
        await this.chooseGoalPurpose();
        await this.fillGoalForm();
        await this.showSummary();
        await this.completeCreation();
    }

    async leaveWithdrawal() {
        await this.viewGoalDetail();
        await this.withdrawComplete();
        await this.closeWithdrawal();
        await this.exitWithdrawal();
        await this.viewDetailCompleted();
    }

    async withdrawFromExpired() {
        await this.reviewContributionPlan();
        await this.fillWithdrawSavingsForm();
        await this.confirmGoalDeletion('complete');
    }

    async setUpPlan() {
        const {otp} = global.user;
        await this.openAccountCreation();
        await this.createAccount();
        await this.fillOtp(otp);
    }

    async turnOnOffContribution(scheduled) {
        if (scheduled) {
            await this.navigateToSection('contribution plan');
            await (await this.modalsContainer.contributionFormulas.additionalElements.toggleContribution.waitForDisplayed({timeout: config.wait.M}))
                .click();
        } else {
            await (await this.modalsContainer.createGoalForm.additionalElements.step3Purchases.waitForDisplayed({timeout: config.wait.M}))
                .click();
        }
    }

    async openAlgorithmAdvice() {
        await (await this.modalsContainer.createGoalForm.additionalElements.step3AdviceModal.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async showSummary() {
        await (await this.modalsContainer.createGoalForm.additionalElements.step3Continue.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async showMoreInfoPlan() {
        await (await this.modalsContainer.createGoalForm.additionalElements.step3HowPlanWorks.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async editContribution(contribution) {
        const element = contribution === 'periodic'
            ? this.modalsContainer.createGoalForm.additionalElements.step3EditContributionPlanScheduled
            : this.modalsContainer.createGoalForm.additionalElements.step3EditContributionPlanForPurchases;
        await (await element.waitForEnabled({timeout: config.wait.M}))
            .click();
    }

    async completeCreation() {
        await (await (await this.modalsContainer.createGoalForm.additionalElements.create.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async continueEdition() {
        await (await this.modalsContainer.algorithm.additionalElements.continue.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async createNewGoal() {
        await (await this.modalsContainer.withdrawSavingsSuccessModal.additionalElements.createNewGoal.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async fillGoalForm() {
        const start = moment().add(16, 'days').format('YYYY-MM-DD');
        await (await (await this.modalsContainer.createGoalForm.additionalElements.step2GoalName.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .setValue({value: 'Viaje a Madrid'});
        await (await this.modalsContainer.createGoalForm.additionalElements.step2GoalAmount.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: 9999});
        await this.setDate(this.modalsContainer.createGoalForm.additionalElements.step2GoalDate, start, true);
        await (await this.modalsContainer.createGoalForm.additionalElements.step2Continue.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await this.modalsContainer.createGoalForm.additionalElements.step3Algorithm.waitForAttribute({attribute:'callsimulation', timeout: config.wait.M});
    }

    async fillForm(amount) {
        const startDate = moment().add(5, 'days').format('YYYY-MM-DD');
        await (await this.modalsContainer.periodicContribution.additionalElements.amount.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: amount});
        await (await this.modalsContainer.periodicContribution.additionalElements.origin.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await (await this.modalsContainer.periodicContribution.additionalElements.account.specifySelector({placeholder: '__ID__', value: global.user.principalAccount.accountId}))
            .waitForExist({timeout: config.wait.M}))
            .click();
        await this.modalsContainer.periodicContribution.additionalElements.start.waitForDisplayed({timeout: config.wait.M});
        await this.setDate(this.modalsContainer.periodicContribution.additionalElements.start, startDate);
        await (await this.modalsContainer.periodicContribution.additionalElements.save.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async fillEditionForm() {
        const start = moment().add(1, 'years').format('YYYY-MM-DD');
        await (await this.modalsContainer.goalEdition.additionalElements.goalName.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: 'Viaje Kuala Lumpur'});
        await (await this.modalsContainer.goalEdition.additionalElements.goalAmount.waitForDisplayed({timeout: config.wait.M}))
            .setValue({value: 999999});
        await this.modalsContainer.goalEdition.additionalElements.goalDate.waitForDisplayed({timeout: config.wait.M});
        await this.setDate(this.modalsContainer.goalEdition.additionalElements.goalDate, start);
        await (await this.modalsContainer.goalEdition.additionalElements.save.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async fillDeletionForm() {
        await (await this.modalsContainer.goalDeletion.additionalElements.account.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await (await this.modalsContainer.goalDeletion.additionalElements.selection.specifySelector({placeholder: '__ID__', value: global.user.principalAccount.accountId}))
            .waitForExist({timeout: config.wait.M}))
            .click();
        await (await this.modalsContainer.goalDeletion.additionalElements.continue.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async fillWithdrawSavingsForm() {
        await (await this.modalsContainer.withdrawSavings.additionalElements.account.waitForDisplayed({timeout: config.wait.M}))
            .click();
        await (await (await this.modalsContainer.withdrawSavings.additionalElements.selection.specifySelector({placeholder: '__ID__', value: global.user.principalAccount.accountId}))
            .waitForExist({timeout: config.wait.M}))
            .click();
        await (await this.modalsContainer.withdrawSavings.additionalElements.continue.waitForDisplayed({timeout: config.wait.M}))
            .click();
    }

    async goBack() {
        await (await (await this.header.goBack.waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }

    async setDate(root, date, multistep = false) {
        if (multistep) {
            await this.modalsContainer.createGoalForm.additionalElements.createGoalMultistepForm.execute({
                script: (value) => {
                    this.endDate = value;
                },
                args: [date]
            }); } else {
            await root.execute({
                script: (value) => {
                    this.value = value;
                    this.dispatchEvent(new Event('input'));
                    this.dispatchEvent(new Event('form-field-input-blur'));
                },
                args: [date]
            });
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'periodic contribution success modal header':
                await this.modalsContainer.successPeriodicModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'periodic contribution success modal image':
                await this.modalsContainer.successPeriodicModal.additionalElements.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'periodic contribution success modal title':
                await this.modalsContainer.successPeriodicModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'periodic contribution success modal summary':
                await this.modalsContainer.successPeriodicModal.additionalElements.summary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'periodic contribution success modal accept button':
                await this.modalsContainer.successPeriodicModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'periodic contribution success modal cancel button':
                await this.modalsContainer.successPeriodicModal.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdrawal success modal header':
                await this.modalsContainer.goalWithdrawalSuccess.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdrawal success modal process':
                await this.modalsContainer.goalWithdrawalSuccess.additionalElements.goalReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdrawal success modal operation':
                await this.modalsContainer.goalWithdrawalSuccess.additionalElements.paneOperation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdrawal success modal summary':
                await this.modalsContainer.goalWithdrawalSuccess.additionalElements.goalSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdrawal success modal accept button':
                await this.modalsContainer.goalWithdrawalSuccess.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contribution success modal header':
                await this.modalsContainer.goalContributionSuccess.additionalElements.modalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contribution success modal process':
                await this.modalsContainer.goalContributionSuccess.additionalElements.goalReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contribution success modal operation':
                await this.modalsContainer.goalContributionSuccess.additionalElements.goalReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contribution success modal summary':
                await this.modalsContainer.goalContributionSuccess.additionalElements.goalSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contribution success modal accept button':
                await this.modalsContainer.goalContributionSuccess.additionalElements.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deletion success modal header':
                await this.modalsContainer.goalDeletionSuccess.additionalElements.modalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deletion success modal process':
                await this.modalsContainer.goalDeletionSuccess.additionalElements.goalReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deletion success modal operation':
                await this.modalsContainer.goalDeletionSuccess.additionalElements.paneOperation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deletion success modal summary':
                await this.modalsContainer.goalDeletionSuccess.additionalElements.goalSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'deletion success modal accept button':
                await this.modalsContainer.goalDeletionSuccess.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdraw savings success modal header':
                await this.modalsContainer.withdrawSavingsSuccessModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdraw savings success modal process':
                await this.modalsContainer.withdrawSavingsSuccessModal.additionalElements.goalReceipt.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdraw savings success modal operation':
                await this.modalsContainer.withdrawSavingsSuccessModal.additionalElements.paneOperation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdraw savings success modal summary':
                await this.modalsContainer.withdrawSavingsSuccessModal.additionalElements.goalSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdraw savings success modal accept button':
                await this.modalsContainer.withdrawSavingsSuccessModal.additionalElements.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdraw savings success modal create new goal button':
                await this.modalsContainer.withdrawSavingsSuccessModal.additionalElements.createNewGoal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goal completed modal title':
                await this.modalsContainer.goalDetailCompleted.additionalElements.helpModalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goal completed modal':
                await this.modalsContainer.goalDetailCompleted.additionalElements.helpModalContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goal detail end date':
                await this.goalDetail.goalEnd.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goal detail info':
                await this.goalDetail.goalInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goal detail progress':
                await this.goalDetail.goalProgress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goal detail operations':
                await this.goalDetail.goalOperations.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delete success toast':
                await this.modalsContainer.contributionFormulas.additionalElements.successDeletion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success toast':
                await this.successDeletion.waitForAttribute({attribute: 'show'});
                break;
            case 'successful create goal panel info':
                await this.modalsContainer.successfulCreateGoal.additionalElements.panelInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful create goal summary':
                await this.modalsContainer.successfulCreateGoal.additionalElements.summary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful create goal go to meta button':
                await this.modalsContainer.successfulCreateGoal.additionalElements.goToMeta.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successful create goal exit link':
                await this.modalsContainer.successfulCreateGoal.additionalElements.exit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first access header':
                await this.modalsContainer.firstAccessModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first access microillustration':
                await this.modalsContainer.firstAccessModal.additionalElements.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first access title':
                await this.modalsContainer.firstAccessModal.additionalElements.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first access description':
                await this.modalsContainer.firstAccessModal.additionalElements.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first access button':
                await this.modalsContainer.firstAccessModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goal detail card banner':
                await this.goalDetail.infoDetailGoal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goal detail movements':
                await this.goalDetail.textMovements.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'create goal':
                await this.modalsContainer.createGoalForm.additionalElements.step1GoalPurpose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'not created goals':
                await this.listGoals.illustrationPalm.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info header':
                await this.modalsContainer.moreInformationModal.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info panel':
                await this.modalsContainer.moreInformationModal.additionalElements.info.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'more info details':
                await this.modalsContainer.moreInformationModal.additionalElements.moreInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'automatic contributions header':
                await this.modalsContainer.contributionFormulas.additionalElements.contributionHelp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'automatic contributions rule':
                await this.modalsContainer.contributionFormulas.additionalElements.contributionHelp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'automatic contributions button':
                await this.modalsContainer.contributionFormulas.additionalElements.contributionHelp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contributions add button':
                await this.modalsContainer.contributionFormulas.additionalElements.addOtherContribution.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contributions text':
                await this.modalsContainer.contributionFormulas.additionalElements.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contributions toggle':
                await this.modalsContainer.contributionFormulas.additionalElements.toggleContribution.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contributions edit contribution':
                await this.modalsContainer.contributionFormulas.additionalElements.editContribution.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contributions delete contribution':
                await this.modalsContainer.contributionFormulas.additionalElements.deleteContribution.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'simulator faqs':
                await this.modalsContainer.createGoalForm.additionalElements.step3HowPlanWorks.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'simulator panel':
                await this.modalsContainer.createGoalForm.additionalElements.step3ContributionPlanRecommendation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'simulator advice':
                await this.modalsContainer.createGoalForm.additionalElements.step3ContributionPlanGetCloser.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'simulator purchases rule':
                await this.modalsContainer.createGoalForm.additionalElements.step3ContributionPlanForPurchases.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'simulator periodic rule':
                await this.modalsContainer.createGoalForm.additionalElements.step3ContributionPlanScheduled.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'simulator info':
                await this.modalsContainer.createGoalForm.additionalElements.step3ContributionPlanNotification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'automatic contribution rounding':
                await this.modalsContainer.modalListFormulas.additionalElements.activateRounding.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'automatic contribution periodic':
                await this.modalsContainer.modalListFormulas.additionalElements.activatePeriodic.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary info':
                await this.modalsContainer.createGoalForm.additionalElements.summary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goal list':
                await this.listGoals.goal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add goal':
                await this.listGoals.addAnotherGoal.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new Goals();
