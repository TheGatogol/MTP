
import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('Categorization')
class Categorization extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pfmCategorization[state="active"]',
            elements: {
                categorization: {
                    properties: {
                        root: '[data-tag-name="pfm-categorization-detail-gl"]'
                    },
                    back: '[data-tag-name="bbva-header-main"]#main-header [data-id="iconsLeft"] button#btn-back',
                    catMovementsTab: '#categoryPage [data-tag-name="bbva-tab-default"] #tabs button#tab-0',
                    catMovementElement: '#categoryPage [data-tag-name="pfm-categorization-detail-gl-group-detail"] [data-tag-name="bbva-tab-default"] [slot="content-0"] [data-tag-name="pfm-categorization-detail-gl-movements"] [data-tag-name="bbva-list-swipe"]',
                    elementsTab: '[data-tag-name="bbva-tab-default"]',
                    historyAnnualTab: '#historyPage [data-tag-name="pfm-categorization-detail-gl-history"] [data-tag-name="bbva-tab-default"] #tab-1',
                    historyAnnualVisualizationLinear: '#historyPage [data-tag-name="pfm-categorization-detail-gl-history"] [data-tag-name="bbva-tab-default"] [slot="content-1"] [data-tag-name="pfm-categorization-detail-gl-chart"] [data-tag-name="bbva-data-visualization-linear"]',
                    historyMonthlyTab: '#historyPage [data-tag-name="pfm-categorization-detail-gl-history"] [data-tag-name="bbva-tab-default"] #tab-0',
                    subcatMovementElement: '#subcategoryPage [data-tag-name="pfm-categorization-detail-gl-subcategory-detail"] [data-tag-name="pfm-categorization-detail-gl-movements"] [data-tag-name="bbva-list-swipe"]',
                    subcategoryTab: '#categoryPage [data-tag-name="bbva-tab-default"] #tabs button:nth-child(2)',
                    subcategoryMovement: '#categoryPage [data-tag-name="pfm-categorization-detail-gl-group-detail"] [data-tag-name="bbva-tab-default"] [slot="content-1"] [data-tag-name="bbva-list-swipe"]:nth-of-type(1) [data-tag-name="pfm-categorization-detail-gl-list-movement"]',
                },
                categorizationDetail: {
                    properties: {
                        root: '[data-tag-name="pfm-categorization-detail-gl-group-detail"].container-wrapper'
                    },
                    categorizationEditPeriodHeader: '[data-tag-name="bbva-global-brands-balances-search-api-dm"]+[data-tag-name="bbva-header-category"][variant="date"]:nth-of-type(1) .options-right [data-tag-name="bbva-type-link"]',
                    movementElement: '[data-tag-name="bbva-tab-default"] [slot="content-0"] [data-tag-name="pfm-categorization-detail-gl-movements"] [data-tag-name="bbva-list-swipe"]',
                },
                defaultTab: {
                    properties: {
                        root: '[data-tag-name="bbva-tab-default"] #tabs'
                    },
                    categoryDatesTab: 'button:nth-child(1)',
                    categoryTab: 'button:nth-child(2)',
                    movementsTab: 'button#tab-0',
                },
                header: '[data-tag-name="pfm-categorization-detail-gl"] [data-tag-name="bbva-header-main"]#main-header',
                backCategory: '#categoryPage [data-tag-name="bbva-header-main"] [data-id="iconsLeft"] button#btn-back',
                buttonEditPeriod: '[id-modal="date-filter"] .modal-footer [data-tag-name="bbva-button-default"]',
                historyAmount: '[data-tag-name="pfm-categorization-detail-gl-history"] [data-tag-name="pfm-categorization-detail-gl-list-definition-amount"]',
                historyBack: '#historyPage [data-tag-name="bbva-header-main"] [data-id="iconsLeft"] button#btn-back',
                historyCategoryTitle: '[data-tag-name="bbva-header-category"].detail-movements',
                historyVisualizationLinear: '[data-tag-name="bbva-data-visualization-linear"]',
                radioButtonPastPeriod: 'form [data-tag-name="bbva-form-radio-group"] [data-tag-name="bbva-form-radio-button"]:nth-of-type(4)'
            },
            elementsSpherica: {
                categorization: {
                    properties: {
                        root: '[data-tag-name="pfm-categorization-detail-gl"]'
                    },
                    categorizationEditPeriodHeader: '#dateFilterModal .modal-header [data-tag-name="bbva-header-main"]',
                },
                categorizationDetail: {
                    properties: {
                        root: '#categoryPage [data-tag-name="pfm-categorization-detail-gl-group-detail"]'
                    },
                    detailElementsTab: '[data-tag-name="bbva-tab-default"]',
                    movementElement: '[data-tag-name="bbva-tab-default"] [slot="content-0"] [data-tag-name="pfm-categorization-detail-gl-movements"] [data-tag-name="bbva-list-swipe"]',
                },
                categorizationDetailCategories: {
                    properties: {
                        root: '[data-tag-name="pfm-categorization-detail-gl"]'
                    },
                    categoryExpensesLink: '[data-tag-name="pfm-categorization-detail-gl-group-detail"].container-wrapper [data-tag-name="bbva-header-category"].skeleton [data-tag-name="bbva-type-link"].link',
                    categoryExpensesAmount: '[data-tag-name="pfm-categorization-detail-gl-group-detail"].container-wrapper [data-tag-name="pfm-categorization-detail-gl-list-definition-amount"]:nth-of-type(1)',
                    categoryExpensesCategories: '[data-tag-name="pfm-categorization-detail-gl-group-detail"].container-wrapper [data-tag-name="bbva-tab-default"] div[slot="content-1"] [data-tag-name="bbva-list-swipe"]:nth-of-type(1) div[slot="invoker"] [data-tag-name="pfm-categorization-detail-gl-list-movement"]',
                    categoryExpensesSubcategory: '[data-tag-name="bbva-transition-container"]#categoryPage div[slot="slot-content"] [data-tag-name="pfm-categorization-detail-gl-group-detail"] [data-tag-name="bbva-tab-default"] div[slot="content-1"] [data-tag-name="bbva-list-swipe"]:nth-of-type(1) div[slot="invoker"] [data-tag-name="pfm-categorization-detail-gl-list-movement"]',
                    categoryExpensesSubcategoryList: '[data-tag-name="bbva-transition-container"]#subcategoryPage div[slot="slot-content"] [data-tag-name="pfm-categorization-detail-gl-subcategory-detail"] [data-tag-name="pfm-categorization-detail-gl-movements"]',
                    categoryExpensesHistoryLink: '[data-tag-name="pfm-categorization-detail-gl-group-detail"].container-wrapper [data-tag-name="bbva-panel-container"] div.container div.content0 [data-tag-name="bbva-type-link"].link-container',
                    categoryExpensesHistoryCategories: '[data-tag-name="bbva-transition-container"] div[slot="slot-content"] [data-tag-name="pfm-categorization-detail-gl-history"] div.comparative-table [data-tag-name="bbva-panel-container"]:nth-of-type(1) div.container div.content0 div:nth-of-type(2) div.c-list [data-tag-name="bbva-type-link"]',
                    categoryExpensesHistorySubcategoriesList: '[data-tag-name="bbva-transition-container"] div[slot="slot-content"] [data-tag-name="pfm-categorization-detail-gl-group-detail"] [data-tag-name="bbva-tab-default"] div[slot="content-1"]',
                    categoryExpensesErrorHeader: 'section [data-tag-name="bbva-header-main"]#main-header header.button-1 div.header div#heading [data-tag-name="bbva-type-text"]#text',
                    categoryExpensesErrorHeaderButton: 'section [data-tag-name="bbva-header-main"]#main-header header.button-1 div:nth-of-type(1) button#btn-back',
                    categoryExpensesErrorTitle: '[data-tag-name="pfm-categorization-detail-gl-group-detail"].container-wrapper [data-tag-name="pfm-categorization-detail-gl-panel-info"] [data-tag-name="bbva-type-text"].title h2.text',
                    categoryExpensesErrorText: '[data-tag-name="pfm-categorization-detail-gl-group-detail"].container-wrapper [data-tag-name="pfm-categorization-detail-gl-panel-info"] [data-tag-name="bbva-type-text"].description span.text',
                    categoryExpensesErrorFooterButton: '[data-tag-name="pfm-categorization-detail-gl-group-detail"].container-wrapper [data-tag-name="pfm-categorization-detail-gl-panel-info"] [data-tag-name="bbva-button-default"]',
                    categorySavingAndInvestmentsHeader: 'section [data-tag-name="bbva-header-main"]#main-header header.button-1 div.header div#heading [data-tag-name="bbva-type-text"]#text',
                    categorySavingAndInvestmentsDate: '[data-tag-name="pfm-categorization-detail-gl-group-detail"].container-wrapper [data-tag-name="bbva-header-category"].skeleton [data-tag-name="bbva-core-heading"] [data-tag-name="bbva-type-text"]',
                    categorySavingAndInvestmentsLink: '[data-tag-name="pfm-categorization-detail-gl-group-detail"].container-wrapper [data-tag-name="bbva-header-category"].skeleton [data-tag-name="bbva-type-link"].link',
                    categorySavingAndInvestmentsContent: '[data-tag-name="pfm-categorization-detail-gl-group-detail"].container-wrapper [data-tag-name="bbva-tab-default"] div[slot="content-1"]'
                },
                buttonEditPeriod: '#dateFilterModal .modal-footer [data-tag-name="bbva-button-default"]',
                radioButtonPastPeriod: '#dateFilterModal [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"]:nth-of-type(2)',
                radioButtonPastYearPeriod: '#dateFilterModal [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"]:nth-of-type(4)',
                radioButtonPerzonalizedPeriod: '#dateFilterModal [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"]:nth-of-type(5)',
                radioButtonPerzonalizedPeriodText: '#dateFilterModal [data-tag-name="bbva-form-container"] [data-tag-name="bbva-form-control-input"]:nth-of-type(5) div[slot="right"] [data-tag-name="bbva-type-text"]:nth-of-type(2) .text'
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async waitForLoaded(timeOut = config.wait.L) {
        await super.waitForLoaded(timeOut);
    }

    async selectTabMovements() {
        await this.defaultTab.movementsTab.waitForDisplayed({timeout: config.wait.M});
        await this.defaultTab.movementsTab.click();
    }

    async selectCatTabMovements() {
        await this.categorization.catMovementsTab.waitForDisplayed({timeout: config.wait.M});
        await this.categorization.catMovementsTab.click();
    }

    async accessCategorizationCategory() {
        await this.accessCategorizationCategoryTab();
        await this.defaultTab.categoryTab.waitForDisplayed({timeout: config.wait.M});
        await this.categorizationDetailCategories.categoryExpensesCategories.click();
    }

    async accessCategorizationDatesTab() {
        await this.defaultTab.categoryDatesTab.waitForDisplayed({timeout: config.wait.M});
        await this.defaultTab.categoryDatesTab.click();
    }

    async accessCategorizationCategoryTab() {
        await this.defaultTab.categoryTab.waitForDisplayed({timeout: config.wait.M});
        await this.defaultTab.categoryTab.click();
    }

    async accessCategorizationSubcategory() {
        await this.categorization.subcategoryTab.waitForDisplayed({timeout: config.wait.M});
        await this.categorization.subcategoryMovement.click();
    }

    async accessTransactionDetail() {
        await this.categorizationDetail.movementElement.waitForDisplayed({timeout: config.wait.M});
        await this.categorizationDetail.movementElement.click();
    }

    async accessCatTransactionDetail() {
        await this.categorization.catMovementElement.waitForDisplayed({timeout: config.wait.M});
        await this.categorization.catMovementElement.click();
    }

    async accessSubcatTransactionDetail() {
        await this.categorization.subcatMovementElement.waitForDisplayed({timeout: config.wait.M});
        await this.categorization.subcatMovementElement.click();
    }

    async accessCategorizationExpensesHistory() {
        await this.categorizationDetailCategories.categoryExpensesHistoryLink.waitForDisplayed({timeout: config.wait.M});
        await this.categorizationDetailCategories.categoryExpensesHistoryLink.click();
    }

    async categorizationExpensesHistoryCategories() {
        await this.categorizationDetailCategories.categoryExpensesHistoryCategories.waitForDisplayed({timeout: config.wait.L});
        await this.categorizationDetailCategories.categoryExpensesHistoryCategories.scrollIntoView();
        await this.categorizationDetailCategories.categoryExpensesHistoryCategories.click();
    }

    async accessMovementDetailSubcategory() {
        await this.categorizationDetailCategories.categoryExpensesCategories.waitForDisplayed({timeout: config.wait.L});
        await this.categorizationDetailCategories.categoryExpensesCategories.click();
        await this.categorizationDetailCategories.categoryExpensesSubcategory.waitForDisplayed({timeout: config.wait.L});
        await this.categorizationDetailCategories.categoryExpensesSubcategory.click();
    }

    async selectTabHistoryMonthly() {
        await this.categorization.historyMonthlyTab.waitForDisplayed({timeout: config.wait.M});
        await this.categorization.historyMonthlyTab.click();
    }

    async selectTabHistoryAnnual() {
        await this.categorization.historyAnnualTab.waitForDisplayed({timeout: config.wait.M});
        await this.categorization.historyAnnualTab.click();
    }

    async accessCategorizationDefinePeriod(){
        await this.categorizationDetailCategories.categoryExpensesAmount.waitForDisplayed({timeout: config.wait.M});
        await this.categorizationDetailCategories.categoryExpensesLink.waitForClickable({timeout: config.wait.M});
        await this.categorizationDetailCategories.categoryExpensesLink.click();
    }

    async editPeriod() {
        await this.accessCategorizationDefinePeriod();
        await this.radioButtonPastPeriod.waitForDisplayed({timeout: config.wait.M});
        await this.radioButtonPastPeriod.click();
        await this.buttonEditPeriod.waitForDisplayed({timeout: config.wait.M});
        await this.buttonEditPeriod.click();
    }

    async editPeriodPastYear() {
        await this.accessCategorizationDefinePeriod();
        await this.radioButtonPastYearPeriod.waitForDisplayed({timeout: config.wait.M});
        await this.radioButtonPastYearPeriod.click();
        await this.buttonEditPeriod.waitForDisplayed({timeout: config.wait.M});
        await this.buttonEditPeriod.click();
    }

    async editPeriodPersonalized() {
        await this.accessCategorizationDefinePeriod();
        await this.radioButtonPerzonalizedPeriod.waitForDisplayed({timeout: config.wait.M});
        await this.radioButtonPerzonalizedPeriod.click();
    }

    async accessPfmDashboardfromSubcategory() {
        await this.backCategory.waitForDisplayed({timeout: config.wait.M});
        await this.backCategory.click();
        await this.categorization.back.waitForDisplayed({timeout: config.wait.M});
        await this.categorization.back.click();
    }

    async returnFromCategorization() {
        await this.categorization.back.waitForDisplayed({timeout: config.wait.M});
        await this.categorization.back.click();
    }

    async returnFromHistory() {
        await this.historyBack.waitForDisplayed({timeout: config.wait.M});
        await this.historyBack.click();
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header back button':
                await this.categorization.back.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'elements tab':
                await this.categorization.elementsTab.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'detail elements tab':
                await this.categorizationDetail.detailElementsTab.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'movements tab':
                await this.defaultTab.movementsTab.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'group detail data':
                await this.categorizationDetailCategories.categoryExpensesLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'group detail total amount':
                await this.categorizationDetailCategories.categoryExpensesAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category tab':
                await this.defaultTab.categoryTab.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'history amount':
                await this.historyAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'history visualization linear':
                await this.historyVisualizationLinear.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'history annual visualization linear':
                await this.categorization.historyAnnualVisualizationLinear.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'history category title':
                await this.historyCategoryTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'history annual tab':
                await this.categorization.historyAnnualTab.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'history monthly tab':
                await this.categorization.historyMonthlyTab.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'radio button period':
                await this.radioButtonPastPeriod.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit period button':
                await this.buttonEditPeriod.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'period header':
                await this.categorization.categorizationEditPeriodHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category saving and investments header':
                await this.categorizationDetailCategories.categorySavingAndInvestmentsHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category saving and investments date':
                await this.categorizationDetailCategories.categorySavingAndInvestmentsDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category saving and investments link':
                await this.categorizationDetailCategories.categorySavingAndInvestmentsLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category saving and investments content':
                await this.categorizationDetailCategories.categorySavingAndInvestmentsContent.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'radio button perzonalized period text':
                await this.radioButtonPerzonalizedPeriodText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category expenses subcategory list':
                await this.categorizationDetailCategories.categoryExpensesSubcategoryList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category expenses history subcategories list':
                await this.categorizationDetailCategories.categoryExpensesHistorySubcategoriesList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category expenses error header':
                await this.categorizationDetailCategories.categoryExpensesErrorHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category expenses error header button':
                await this.categorizationDetailCategories.categoryExpensesErrorHeaderButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category expenses error title':
                await this.categorizationDetailCategories.categoryExpensesErrorTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category expenses error text':
                await this.categorizationDetailCategories.categoryExpensesErrorText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'category expenses error footer button':
                await this.categorizationDetailCategories.categoryExpensesErrorFooterButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new Categorization();
