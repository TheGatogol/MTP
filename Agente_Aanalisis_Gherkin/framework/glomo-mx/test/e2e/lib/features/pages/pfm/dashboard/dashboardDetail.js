import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page, Commands} from '@csqe/radish';
import CellsNavigationBar from '../../../components/cells-navigation-bar';
@page('dashboardDetail')
class DashboardDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pfmDashboardDetail[state="active"]',
            elements: {
                pfmPfmDashboard: '[data-tag-name="pfm-pfm-dashboard-gl"]',
                back: '[data-tag-name="bbva-header-main"] button#btn-back',
                header: '[data-tag-name="bbva-header-main"]',
                incExpHeaderPfmPeriod: '[data-tag-name="bbva-header-category"][variant="date"] [data-tag-name="bbva-core-heading"]',
                headerProducts: '[data-tag-name="pfm-pfm-dashboard-gl"] [data-tag-name="bbva-header-category"] [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"] .text',
                settingsButton: '[data-tag-name="bbva-global-retail-financial-overview-api-dm"] + [data-tag-name="bbva-header-category"]:nth-of-type(1) .options-right [data-tag-name="bbva-type-link"].link',
                catTab: {
                    properties: {
                        root: '[data-tag-name="bbva-tab-default"]'
                    },
                    categTabExpensesHeaderTitle: '.group .tabs .tab:nth-of-type(1)',
                    categTabExpensesMoreAccess: '.panel:nth-of-type(1) [data-tag-name="bbva-header-category"] .options-right [data-tag-name="bbva-type-link"].link',
                    categTabIncomeHeaderTitle: '.group .tabs .tab:nth-of-type(2)',
                    categTabIncomeMoreAccess: '.panel:nth-of-type(2) [data-tag-name="bbva-header-category"] .options-right [data-tag-name="bbva-type-link"].link',
                    categTabInvestmentsHeaderTitle: '.group .tabs .tab:nth-of-type(4)',
                    categTabInvestmentMoreAccess: '.panel:nth-of-type(4) [data-tag-name="bbva-header-category"] .options-right [data-tag-name="bbva-type-link"].link',
                    categTabSaveHeaderTitle: '.group .tabs .tab:nth-of-type(3)',
                    categTabSaveMoreAccess: '.panel:nth-of-type(3) [data-tag-name="bbva-header-category"] .options-right [data-tag-name="bbva-type-link"].link',
                    expensesCategories: '.panel:nth-of-type(1) [data-tag-name="pfm-pfm-dashboard-gl-list-movement"]',
                    expensesCategoriesAmount: '.panel:nth-of-type(1) [data-tag-name="pfm-pfm-dashboard-gl-list-movement"] .title-row [data-tag-name="bbva-type-amount"]'
                },
                incExpExpenses: {
                    properties: {
                        root: '[data-tag-name="pfm-pfm-dashboard-gl-list-progress"]:nth-of-type(2)'
                    },
                    incExpExpensesAmount: '[data-tag-name="bbva-type-amount"]',
                    incExpExpensesProgressBar: '[data-tag-name="bbva-data-visualization-bar"]',
                    incExpExpensesTitle: '[data-tag-name="bbva-type-text"]'
                },
                incExpIncomes: {
                    properties: {
                        root: '[data-tag-name="pfm-pfm-dashboard-gl-list-progress"]:nth-of-type(1)'
                    },
                    incExpIncomeAmount: '[data-tag-name="bbva-type-amount"]',
                    incExpIncomeProgressBar: '[data-tag-name="bbva-data-visualization-bar"]',
                    incExpIncomeTitle: '[data-tag-name="bbva-type-text"]',
                },
                proactivityMessage: {
                    properties: {
                        root: '[data-tag-name="proactivity-message"]'
                    },
                    message: '[data-tag-name="bbva-notification-contextual"]',
                    messageClose: '[type="relevantFact"] [data-tag-name="bbva-button-default"]'
                },
                savingTools: {
                    properties: {
                        root: '[data-tag-name="pfm-saving-tools-gl-gl"]'
                    },
                    goalsCard: '[role="list"] [data-tag-name="pfm-saving-tools-gl-list-default"]#bbvaListDefaultGoals',
                    goalsHeaderTitle: '[role="list"] [data-tag-name="pfm-saving-tools-gl-list-default"]#bbvaListDefaultGoals .header [data-tag-name="bbva-type-text"]',
                    pettyExpensesCard: '[role="list"] [data-tag-name="pfm-saving-tools-gl-list-default"]#bbvaListDefaultPettyExpenses',
                    pettyExpensesTitle: '[role="list"] [role="listitem"] [data-tag-name="pfm-saving-tools-gl-list-default"]#bbvaListDefaultPettyExpenses .header-wrapper [data-tag-name="bbva-type-text"]',
                    pettyExpensesIcon: '[role="list"] [role="listitem"] [data-tag-name="pfm-saving-tools-gl-list-default"]#bbvaListDefaultPettyExpenses .header-wrapper [data-tag-name="bbva-type-icon"]',
                    pettyExpensesDescription: '[role="list"] [role="listitem"] [data-tag-name="pfm-saving-tools-gl-list-default"]#bbvaListDefaultPettyExpenses [data-tag-name="bbva-type-text"]',
                    pettyExpensesBadgeText: '[role="list"] [role="listitem"] [data-tag-name="pfm-saving-tools-gl-list-default"]#bbvaListDefaultPettyExpenses [data-tag-name="bbva-badge-default"]',
                    piggyBanksCard: '[role="list"] [data-tag-name="pfm-saving-tools-gl-list-default"]#bbvaListDefaultPiggyBanks',
                    programCard: '[role="list"] [data-tag-name="pfm-saving-tools-gl-list-default"]#bbvaListDefaultProgram',
                    programHeaderTitle: '[role="list"] [data-tag-name="pfm-saving-tools-gl-list-default"]#bbvaListDefaultProgram .header [data-tag-name="bbva-type-text"]',
                    toolsContainerText: '[data-tag-name="bbva-header-category"]',
                    toolsPlanCard: '[role="listitem"]:nth-of-type(1) [data-tag-name="pfm-saving-tools-gl-list-default"]',
                    toolsPlanCardText: '[role="listitem"]:nth-of-type(1) [data-tag-name="pfm-saving-tools-gl-list-default"] [data-tag-name="bbva-type-text"] .text',
                    toolsInvestCard: '[role="listitem"]:nth-of-type(2) [data-tag-name="pfm-saving-tools-gl-list-default"]',
                    toolsInvestCardText: '[role="listitem"]:nth-of-type(2) [data-tag-name="pfm-saving-tools-gl-list-default"] [data-tag-name="bbva-type-text"] .text',
                    pastPeriod: '[data-tag-name="bbva-panel-container"]',
                    pastPeriodCard: {
                        properties: {
                            root: '[data-tag-name="bbva-panel-container"]'
                        },
                        amount: '[data-tag-name="pfm-saving-tools-gl-panel-process"] [data-tag-name="bbva-type-amount"]',
                        text: '[data-tag-name="pfm-saving-tools-gl-panel-process"] [data-tag-name="bbva-type-text"]:nth-of-type(2)',
                        title: '[data-tag-name="pfm-saving-tools-gl-panel-process"] [data-tag-name="bbva-type-text"]:nth-of-type(1)'
                    },
                },
                incomesModule: {
                    properties: {
                        root: '[data-tag-name="pfm-pfm-dashboard-gl"] [data-tag-name="bbva-tab-default"]'
                    },
                    incomesTab: '.group .tabs button#tab-1',
                    incomesHeaderText: '[slot="content-1"] [data-tag-name="bbva-header-category"] [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"] .text',
                    incomesHeaderLink: '[slot="content-1"] [data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"]',
                    incomesContent: '[slot="content-1"] [data-tag-name="pfm-pfm-dashboard-gl-panel-info"]'
                },
                errorMessages: {
                    properties: {
                        root: '[data-tag-name="pfm-pfm-dashboard-gl"]'
                    },
                    errorMessageText: '[data-tag-name="bbva-panel-container"] .container .content0 [data-tag-name="bbva-notification-message"] .container-text .wrapper-icon-title [data-tag-name="bbva-type-text"] .text',
                    errorMessageLink: '[data-tag-name="bbva-panel-container"] .container .content0 [data-tag-name="bbva-notification-message"] .container-text .link [data-tag-name="bbva-type-link"]',
                    errorMessageListTitle: '[data-tag-name="bbva-tab-default"] [slot="content-0"] [data-tag-name="bbva-notification-message"] .container-text .wrapper-icon-title [data-tag-name="bbva-type-text"].title .text',
                    errorMessageListText: '[data-tag-name="bbva-tab-default"] [slot="content-0"] [data-tag-name="bbva-notification-message"] .container-text .message .paragraph [data-tag-name="bbva-type-text"] .text',
                    errorMessageListLink: '[data-tag-name="bbva-tab-default"] [slot="content-0"] [data-tag-name="bbva-notification-message"] .container-text .link [data-tag-name="bbva-type-link"]'
                },
                modalsContainer: {
                    properties: {
                        root: {
                            web: '.__modals-container [data-tag-name="bbva-help-modal"]',
                            isWithoutRoot: true
                        }
                    },
                    onBoarding: '[class="footer mobile"] .action-buttons [data-tag-name="bbva-button-default"]',
                },
                linkViewCreditStatus: '[role="list"] #bbvaListDefaultBcScore',
                /** footer */
                navigationBar: CellsNavigationBar
            },
            elementsSpherica: {
                settingsButton: '#dmRetailFinancialOverview + [data-tag-name="bbva-header-category"]:nth-of-type(1) .options-right [data-tag-name="bbva-type-link"].link',
                incExpHeaderPfmPeriod: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-date"]',
                savingTools: {
                    properties: {
                        root: '[data-tag-name="pfm-saving-tools-gl"]'
                    },
                    goalsHeaderTitle: '[role="list"] [data-tag-name="pfm-saving-tools-gl-list-default"]#bbvaListDefaultGoals .header-wrapper [data-tag-name="bbva-type-text"]',
                    programHeaderTitle: '[role="list"] [data-tag-name="pfm-saving-tools-gl-list-default"]#bbvaListDefaultProgram .header-wrapper [data-tag-name="bbva-type-text"]'
                },
                tooltip: '[data-tag-name="bbva-help-tooltip"][opened] .footer-container [data-tag-name="bbva-type-text"]'
            },
            requiredElements: [
                'pfmPfmDashboard'
            ],
        });
    }

    async creditStatus() {
        await this.linkViewCreditStatus.waitForDisplayed({timeout: config.wait.M});
        await this.linkViewCreditStatus.click();
    }

    async waitForLoaded(timeOut = config.wait.L) {
        await super.waitForLoaded(timeOut);
    }

    async accessSettings() {
        await this.settingsButton.waitForClickable({timeout: config.wait.M});
        await this.settingsButton.click();
    }

    async accessCategorizationExpenses() {
        await this.incExpExpenses.incExpExpensesTitle.waitForDisplayed({timeout: config.wait.M});
        await this.incExpExpenses.incExpExpensesTitle.click();
    }

    async accessCategorizationIncomes() {
        await this.incExpIncomes.incExpIncomeTitle.waitForDisplayed({timeout: config.wait.M});
        await this.incExpIncomes.incExpIncomeTitle.click();
    }

    async accessCategorizationExpensesViewMore() {
        await this.selectExpenseCard();
        await this.catTab.categTabExpensesMoreAccess.waitForDisplayed({timeout: config.wait.M});
        await this.catTab.categTabExpensesMoreAccess.click();
    }

    async accessCategorizationIncomesViewMore() {
        await this.selectIncomeCard();
        await this.catTab.categTabIncomeMoreAccess.waitForDisplayed({timeout: config.wait.M});
        await this.catTab.categTabIncomeMoreAccess.click();
    }

    async accessCategorizationSavingViewMore() {
        await this.selectSaveCard();
        await this.catTab.categTabSaveMoreAccess.waitForDisplayed({timeout: config.wait.M});
        await this.catTab.categTabSaveMoreAccess.click();
    }

    async closeOnBoardingAndTooltips() {
        await this.modalsContainer.onBoarding.waitForDisplayed({timeout: config.wait.M});
        await this.modalsContainer.onBoarding.click();
        for (let i = 0; i < 3; i++) {
            await this.tooltip.waitForDisplayed({timeout: config.wait.M});
            await this.tooltip.click();
        }
    }

    async closeTooltips() {
        for (let i = 0; i < 3; i++) {
            await this.tooltip.waitForDisplayed({timeout: config.wait.M});
            await this.tooltip.click();
        }
    }

    async accessCategorizationInvestmentViewMore() {
        await this.selectInvestmentCard();
        await this.catTab.categTabInvestmentMoreAccess.waitForDisplayed({timeout: config.wait.M});
        await this.catTab.categTabInvestmentMoreAccess.click();
    }

    async accessCategorizationExpensesCategory() {
        await this.selectExpenseCard();
        await this.catTab.expensesCategories.waitForDisplayed({timeout: config.wait.M});
        await this.catTab.expensesCategories.click();
    }

    async closeProactivityMessage(times) {
        let i = 0;
        while (i < times) {
            await this.proactivityMessage.message.waitForAnimation({timeout: config.wait.M});
            await this.proactivityMessage.messageClose.waitForClickable({timeout: config.wait.M});
            await this.proactivityMessage.messageClose.click();
            i++;
        }
    }

    async accessInvestments() {
        await this.savingTools.programCard.waitForDisplayed({timeout: config.wait.M});
        await this.savingTools.programCard.click();
    }

    async accessDashboard() {
        await this.back.waitForDisplayed({timeout: config.wait.M});
        await this.back.click();
    }

    async accessPockets() {
        await this.savingTools.piggyBanksCard.waitForDisplayed({timeout: config.wait.M});
        await this.savingTools.piggyBanksCard.click();
    }

    async getAccessFrom(accessFrom) {
        switch (accessFrom) {
            case 'incomes':
                await this.accessCategorizationIncomes();
                break;
            case 'expenses':
                await this.accessCategorizationExpenses();
                break;
            case 'link expenses':
                await this.accessCategorizationExpensesViewMore();
                break;
            case 'link incomes':
                await this.accessCategorizationIncomesViewMore();
                break;
            case 'link saving':
                await this.accessCategorizationSavingViewMore();
                break;
            case 'link investment':
                await this.accessCategorizationInvestmentViewMore();
                break;
            case 'category expense':
                await this.accessCategorizationExpensesCategory();
                break;
            default:
                throw new Error(`'${accessFrom}' is not a valid entry point value`);
        }
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header products':
                await this.headerProducts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header settings access':
                await this.settingsButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header back':
                await this.back.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pfm period dates':
                await this.incExpHeaderPfmPeriod.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income title':
                await this.incExpIncomes.incExpIncomeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income aggregated amount':
                await this.incExpIncomes.incExpIncomeAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'incomes progress chart':
                await this.incExpIncomes.incExpIncomeProgressBar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses title':
                await this.incExpExpenses.incExpExpensesTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses aggregated amount':
                await this.incExpExpenses.incExpExpensesAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses progress chart':
                await this.incExpExpenses.incExpExpensesProgressBar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investments tab title':
                await this.catTab.categTabInvestmentsHeaderTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'save tab title':
                await this.catTab.categTabSaveHeaderTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses tab title':
                await this.catTab.categTabExpensesHeaderTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses tab aggregated amount':
                await this.catTab.expensesCategoriesAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses view more access':
                await this.catTab.categTabExpensesMoreAccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expenses categories':
                await this.catTab.expensesCategories.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goals title':
                await this.savingTools.goalsHeaderTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'goals product summary cards':
                await this.savingTools.goalsCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'petty expenses card':
                await this.savingTools.pettyExpensesCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'petty expenses title':
                await this.savingTools.pettyExpensesTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'petty expenses icon':
                await this.savingTools.pettyExpensesIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'petty expenses description':
                await this.savingTools.pettyExpensesDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'petty expenses badge text':
                await this.savingTools.pettyExpensesBadgeText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investments title':
                await this.savingTools.programHeaderTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investments product summary cards':
                await this.savingTools.programCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'past period title':
                await this.savingTools.pastPeriodCard.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'past period amount':
                await this.savingTools.pastPeriodCard.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'past period text':
                await this.savingTools.pastPeriodCard.text.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tools container text':
                await this.savingTools.toolsContainerText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tools plan card':
                await this.savingTools.toolsPlanCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tools plan card text':
                await this.savingTools.toolsPlanCardText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tools invest card':
                await this.savingTools.toolsInvestCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tools invest card text':
                await this.savingTools.toolsInvestCardText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income tab title':
                await this.catTab.categTabIncomeHeaderTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'income tab view more access':
                await this.catTab.categTabIncomeMoreAccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'incomes header text':
                await this.incomesModule.incomesHeaderText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'incomes header link':
                await this.incomesModule.incomesHeaderLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'incomes content':
                await this.incomesModule.incomesContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message text':
                await this.errorMessages.errorMessageText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message link':
                await this.errorMessages.errorMessageLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message list title':
                await this.errorMessages.errorMessageListTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message list text':
                await this.errorMessages.errorMessageListText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error message list link':
                await this.errorMessages.errorMessageListLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movements tab title':
                await this.catTab.categTabSaveHeaderTitle.waitForDisplayed({timeout: config.wait.M});
                break; 
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectIncomeCard() {
        await this.catTab.categTabIncomeHeaderTitle.waitForDisplayed({timeout: config.wait.M});
        await this.catTab.categTabIncomeHeaderTitle.click();
    }

    async selectExpenseCard() {
        await this.catTab.categTabExpensesHeaderTitle.waitForDisplayed({timeout: config.wait.M});
        await this.catTab.categTabExpensesHeaderTitle.click();
    }

    async selectSaveCard() {
        await this.catTab.categTabSaveHeaderTitle.waitForDisplayed({timeout: config.wait.M});
        await this.catTab.categTabSaveHeaderTitle.click();
    }

    async selectInvestmentCard() {
        await this.catTab.categTabInvestmentsHeaderTitle.waitForDisplayed({timeout: config.wait.M});
        await this.catTab.categTabInvestmentsHeaderTitle.click();
    }

    async accessGoalFromSeeAll() {
        await this.pocketsSliderHeaderSeeAllAccess.waitForDisplayed({timeout: config.wait.L});
        await this.pocketsSliderHeaderSeeAllAccess.click();
    }

    async accessGoals(minor) {
        if (minor) {
            await this.setGoalsMinorLocalStorage();
        }
        await this.savingTools.goalsCard.waitForDisplayed({timeout: config.wait.L});
        await this.savingTools.goalsCard.click();
    }

    async goToPeriodContainer() {
        await this.savingTools.pastPeriod.waitForDisplayed({timeout: config.wait.L});
        await this.savingTools.pastPeriod.scrollIntoView();
    }

    async goToSavingTools() {
        await this.savingTools.toolsContainerText.waitForDisplayed({timeout: config.wait.L});
        await this.savingTools.toolsContainerText.scrollIntoView();
    }

    async selectIncomesModule() {
        await this.incomesModule.incomesTab.waitForDisplayed({timeout: config.wait.L});
        await this.incomesModule.incomesTab.click();
        await this.incomesModule.incomesTab.scrollIntoView();
    }

    async setGoalsMinorLocalStorage() {
        await Commands.execute({
            script: (key, val) => localStorage.setItem(key, val),
            args: ['goals_minor_onboarding', '{"onboarding":true}']
        });
    }

    async accessPettyExpenses() {
        await this.savingTools.pettyExpensesCard.waitForDisplayed({timeout: config.wait.L});
        await this.savingTools.pettyExpensesCard.click();
    }
}

export default new DashboardDetail();
