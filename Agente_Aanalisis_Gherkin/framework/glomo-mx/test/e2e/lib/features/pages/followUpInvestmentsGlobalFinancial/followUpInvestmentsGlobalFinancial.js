import { page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page()
class FollowUpInvestmentsGlobalFinancial extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-followUpInvestmentsGlobalFinancial[state="active"]',
            inputPlace: 'cells-molecule-input #input',
            elements: {
                signModal: CellsSignOperationModalSpherica,
                initScreen: '[data-tag-name="follow-up-investments-global-financial-position-mx"]',
                page: {
                    header: '#headerFollowUp',
                    backButton: '#btn-back',
                    headerMovements: '#headerFollowUp[text="Movimientos"]',
                    headerInstrumentList: '.transition-container [text="Fondos"]',
                    backButtonInstrumentList: '.transition-container [text="Fondos"] #btn-back',
                    headerInstrumentSearch: '.first-level-sequential .heading-wrapper',
                    consolidatedSection: '[data-tag-name="bbva-tab-default"] #tab-0 [data-tag-name="bbva-type-text"][text="Consolidado"]',
                    accountsSection: '[data-tag-name="bbva-tab-default"] #tab-1 [data-tag-name="bbva-type-text"][text="Cuentas"]',
                    retryButton: '[data-tag-name="follow-up-investments-global-accounts"] [data-tag-name="follow-up-investments-global-message-modal"] [data-tag-name="bbva-help-modal"] [data-tag-name="bbva-button-default"].footer-button[text="Reintentar"]',
                },
                consolidated: {
                    properties: {
                        root: '[data-tag-name="follow-up-investments-global-financial-position-mx"] [data-tag-name="follow-up-investments-global-consolidated"]',
                    },
                    annualSummary: '.bp-summary-card-container',
                    buttonConsolidatedAccounts: '.bp-section .bp-link-card',
                    evolutionSectionConsolidated: '.evolution',
                    patrimonialDistibutionConsolidated: '.distribution',
                    buttonEvolutionPeriod: '.evolution-tabs [data-tag-name=bbva-button-group-item][tabindex="-1"]',
                    evolutionPerformance: '.period-performance',
                    patrimonialActive: '.distribution [data-tag-name=bbva-button-group-item][tabindex="0"]',
                },
                accountPage: {
                    properties: {
                        root: '[data-tag-name="follow-up-investments-global-financial-position-mx"] [data-tag-name="follow-up-investments-global-accounts"]',
                    },
                    movementsList: '.accounts-link-card',
                    valueContainer: '.total-amount-account-container',
                    annualSummary: '.summary-account-container',
                    evolutionSectionAccounts: '.evolution',
                    patrimonialDistributionAccounts:'.distribution',
                    selectAccount:'[data-tag-name="bbva-form-option"][value="__ID__"]',
                    selectAccountButton:'.select-accounts .button',
                    activeDistributionOption: '.distribution [data-tag-name="bbva-button-group-item"][value="active"]',
                    productButton: '.distribution [data-tag-name="bbva-button-group-item"][value="product"]',
                    patrimonialActiveInfoCard: '#dist-surface-Liquidez',
                    patrimonialProductInfoCard: '#dist-surface-Fondos',
                    evolutionPeriodAccounts: '.evolution-tabs [data-tag-name=bbva-button-group-item][tabindex="-1"]',
                },
                instrumentDetail: {
                    properties: {
                        root: '[data-tag-name="follow-up-investments-global-financial-position-mx"] [data-tag-name="follow-up-investments-global-instruments-detail"]',
                    },
                    instrumentDetail: '.instrument-detail',
                    instrumentTabs: '.evolution-tabs-buttons',
                    performanceGraph: '.chart',
                    periodPerformance: '.period-performance',
                },
                instrumentsList: {
                    properties: {
                        root: '[data-tag-name="follow-up-investments-global-financial-position-mx"] [data-tag-name="follow-up-investments-global-instruments-list"]',
                    },
                    searchLabel: '.search-block [data-tag-name="bbva-type-text"]',
                    selectInstrument:'.instrument-card-container:nth-child(1)',
                    searchInstrumentOption: '[data-tag-name="bbva-form-search"]',
                    searchInstrument: '[data-tag-name="bbva-form-search"]',
                    productInstrumentsList: '.instrument-list [data-tag-name="bbva-panel-container"]',
                },
                instrumentSearchModal: {
                    properties: {
                        root: '[data-tag-name="follow-up-investments-global-financial-position-mx"] [data-tag-name="follow-up-investments-global-instruments-list"] [data-tag-name="follow-up-investments-global-instruments-search-modal"]',
                    },
                    closeButtonInstrument: '.transition-container #helpModalHeader #btn-close',
                    searchLabelInstrument: '[data-tag-name="bbva-type-text"][text="Busca un instrumento por nombre o clave."]',
                    searchInputContainer: '[data-tag-name="bbva-form-predictive"] [data-tag-name="bbva-form-input"] input',
                    instrumentsList: '.list .list-item',
                },
                movementsPage: {
                    properties: {
                        root: '[data-tag-name="follow-up-investments-global-financial-position-mx"] [data-tag-name="follow-up-investments-global-movements"]',
                    },
                    movementsDate: '.movement-day-label',
                    movementsAmount: '.amount-content',
                    movementsType: '.movement-type',
                    movementsName: '.movement-card:nth-child(2)',
                },
                consolidateAccounts: {
                    headerConsolidateAccounts: '.transition-container [text="Cuentas consolidadas"]',
                    backButtonConsolidateAccounts: '.transition-container [text="Cuentas consolidadas"] #btn-back',
                    listAccounts: '[data-tag-name="follow-up-investments-global-consolidated-accounts"] .accounts-list',
                },
                infoModal: {
                    properties: {
                        root: '[data-tag-name="follow-up-investments-global-financial-position-mx"] [data-tag-name="follow-up-investments-global-consolidated"] [data-tag-name="follow-up-investments-global-help-message-modal"]',
                    },
                    headerInfoModal:'#helpModalHeader .header .heading-wrapper',
                    closeButton:'[data-tag-name="bbva-help-modal"] #helpModalHeader header .header-icons.right-group',
                    infoIcon:'.transition-container .modal-content-wrapper #helpModalTitle',
                    infoDetails:'[data-tag-name="bbva-help-modal"]',
                    exitButton:'[data-tag-name="bbva-help-modal"] .content .transition-container .modal-main .modal-footer [data-tag-name="bbva-button-default"]'
                },
                errorMediaModal: {
                    properties: {
                        root: '[data-tag-name="follow-up-investments-global-financial-position-mx"] [data-tag-name="follow-up-investments-global-message-modal"]',
                    },
                    warningMicroilustration: '#helpModalTitle  [data-tag-name="bbva-type-icon"]',
                    titleError: '#title-text',
                    errorDescription: '#description-text',
                    retryButton: '[data-tag-name="bbva-button-default"].footer-button[text="Reintentar"]',
                },
                errorFullModal: {
                    properties: {
                        root: '[data-tag-name="follow-up-investments-global-financial-position-mx"] [data-tag-name="follow-up-investments-global-message-modal"][visible]',
                    },
                    titleError: '#title-text',
                    errorMessage: '#helpModalContent .slot-content',
                    closeButtonError: '#btn-close',
                }
            },
            requiredElements: [
                'initScreen',
            ]
        });
    }
    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'patrimonial balance header':
                await this.page.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'consolidated section':
                await this.page.consolidatedSection.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'evolution period performance with graph':
                await this.consolidated.evolutionPerformance.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'annual summary container':
                await this.consolidated.annualSummary.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'consolidated accounts button':
                await this.consolidated.buttonConsolidatedAccounts.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'evolution section':
                await this.consolidated.evolutionSectionConsolidated.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'patrimonial distribution section':
                await this.consolidated.patrimonialDistibutionConsolidated.waitForDisplayed({timeout: config.wait.S});
                await this.consolidated.patrimonialActive.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'evolution period performance':
                await this.consolidated.evolutionPerformance.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'patrimonial active info card':
                await this.consolidated.patrimonialActiveInfoCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accounts tab':
                await this.page.accountsSection.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'total value container':
                await this.accountPage.valueContainer.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'annual summary container accounts':
                await this.accountPage.annualSummary.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'evolution section accounts':
                await this.accountPage.evolutionSectionAccounts.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'patrimonial distribution accounts':
                await this.accountPage.patrimonialDistributionAccounts.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'consolidated accounts header':
                await this.consolidateAccounts.headerConsolidateAccounts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.consolidateAccounts.backButtonConsolidateAccounts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'consolidated accounts list':
                await this.consolidateAccounts.listAccounts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movements header':
                await this.page.headerMovements.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movements date':
                await this.movementsPage.movementsDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movements amount':
                await this.movementsPage.movementsAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movements type':
                await this.movementsPage.movementsType.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movements name':
                await this.movementsPage.movementsName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'instrument detail header':
                await this.page.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'instrument detail section':
                await this.instrumentDetail.instrumentDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'instrument tabs':
                await this.instrumentDetail.instrumentTabs.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'performance graph':
                await this.instrumentDetail.performanceGraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'period performance':
                await this.instrumentDetail.periodPerformance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search label':
                await this.instrumentsList.searchLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search input instrument':
                await this.instrumentsList.searchInstrument.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button instrument list':
                await this.page.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product instrument header':
                await this.page.headerInstrumentList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product instrument back button':
                await this.page.backButtonInstrumentList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product instruments list':
                await this.instrumentsList.productInstrumentsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header search instrument':
                await this.page.headerInstrumentSearch.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close search button':
                await this.instrumentSearchModal.closeButtonInstrument.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search label instrument':
                await this.instrumentSearchModal.searchLabelInstrument.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search input':
                await this.instrumentSearchModal.searchInputContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'instrument list':
                await this.instrumentSearchModal.instrumentsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header info modal':
                await this.infoModal.headerInfoModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button modal':
                await this.infoModal.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info tooltip icon':
                await this.infoModal.infoIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information details':
                await this.infoModal.infoDetails.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.infoModal.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'warning microilustration':
                await (await this.errorMediaModal.warningMicroilustration.elements()).value[1].waitForDisplayed();
                break;
            case 'title operation not completed':
                await (await this.errorMediaModal.titleError.elements()).value[1].waitForDisplayed();
                break;
            case 'unavailable text info':
                await (await this.errorMediaModal.errorDescription.elements()).value[1].waitForDisplayed();
                break;
            case 'retry button':
                await (await this.errorMediaModal.retryButton.elements()).value[1].waitForDisplayed();
                break;
            case 'title operation not available':
                await this.errorFullModal.titleError.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'unavailable info':
                await this.errorFullModal.errorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button modal':
                await this.errorFullModal.closeButtonError.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async viewsConsolidatedAccounts() {
        await (await this.consolidated.buttonConsolidatedAccounts.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async evolutionPeriodConsolidated() {
        await (await this.consolidated.buttonEvolutionPeriod.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async loadPatrimonialDistributionSection() {
        await (await this.consolidated.patrimonialActive.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async viewInfoAccount() {
        await (await this.page.accountsSection.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectAccount() {
        await (await this.accountPage.selectAccount.specifySelector({placeholder: '__ID__', value: global.user.account.id}).waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectProduct() {
        await (await this.accountPage.patrimonialProductInfoCard.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async viewSelectAccount() {
        await (await this.accountPage.selectAccountButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async lastMovementsSection() {
        await (await this.accountPage.movementsList.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectAnEvolutionPeriod() {
        await (await this.accountPage.evolutionPeriodAccounts.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectAsset() {
        await (await this.accountPage.patrimonialActiveInfoCard.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectAssetAccount() {
        await (await this.accountPage.activeDistributionOption.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async viewInfoProduct() {
        await (await this.accountPage.productButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectInstrument() {
        await (await this.instrumentsList.selectInstrument.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async searchesForInstruments() {
        await (await this.instrumentsList.searchInstrumentOption.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async findByCode(value = 'C') {
        const searchInput = this.instrumentSearchModal.searchInputContainer;
        await searchInput.click();
        await this.instrumentSearchModal.searchInputContainer.setValue({ value: value, slow: true });
    }

    async retryWarningSmallModal() {
        await this.errorMediaModal.retryButton.waitForEnabled({timeout: config.wait.M});
        await this.errorMediaModal.retryButton.click({useActions: false, scrollOptions: {block: 'end'}});
    }
}
export default new FollowUpInvestmentsGlobalFinancial();

