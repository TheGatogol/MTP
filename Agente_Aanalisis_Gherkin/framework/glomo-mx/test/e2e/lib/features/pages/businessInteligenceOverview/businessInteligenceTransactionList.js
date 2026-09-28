import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class BusinessInteligenceTransactionList extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-businessIntelligencePaymentsTransactionList[state="active"]',
            elements: {
                aceptButtonOnboarding: '[data-tag-name="onboarding-full-screen-carousel-single-slide"] .single__footer [data-tag-name="bbva-button-default"]',
                tootltips: {
                    tooltipPeriod: '.period #tooltip .link',
                    tooltipSales: '[heading="Ventas totales"] #tooltip .link',
                    tooltipPanel: '.panelWithoutTab #tooltip .link',
                    tooltipGraph: '.graph #tooltip .link',
                    tooltipSearch: '.search #tooltip .link',
                    tooltipMovements: '[heading="Lista de movimientos"] #tooltip .link',
                },
                mainHeader: '.main-header-wrapper',
                category: {
                    properties: { root: '[data-tag-name="bbva-header-category"]' },
                    headerCategory: '.header-category-amount',
                    labelBusinessWeek: '[text="Últimos 7 días"]',
                    labelBusinessForthNight: '[text="Últimos 15 días"]',
                    labelBusinessMonth: '[text="Mes"]',
                    labelBusinessSixMonth: '[text="Últimos 6 meses"]',
                    labelBusinessThreeMonth: '[text="Últimos 3 meses"]',
                    labelBusinessYear: '[text="Año en curso"]',
                },
                panelProcess: '[data-tag-name="payments-business-inteligence-overview-panel-detail"]',
                dataVisualizationLines: '[data-tag-name="bbva-data-visualization-lines"]',
                buttonGroup: '[data-tag-name="payments-business-inteligence-overview-date-range-selector"]',
                seeDetails: '.sales-info-container [data-tag-name="bbva-link"]',
                searchMovements: '[data-tag-name="bbva-button-action"]',
                notificationMessage: '[data-tag-name="bbva-notification-message"]',
                buttonWeek: '[data-tag-name="payments-business-inteligence-overview-date-range-selector"] [data-tag-name="bbva-button-group"] [data-tag-name="bbva-button-group-item"][value="week"]',
                buttonFortNight: '[data-tag-name="payments-business-inteligence-overview-date-range-selector"] [data-tag-name="bbva-button-group"] [data-tag-name="bbva-button-group-item"][value="fortnight"]',
                buttonMonth: '[data-tag-name="payments-business-inteligence-overview-date-range-selector"] [data-tag-name="bbva-button-group"] [data-tag-name="bbva-button-group-item"][value="months-1"]',
                buttonSeeDetail: 'payments-business-inteligence-overview [data-tag-name="bbva-button-default"][text="Mostrar detalle"]',
                buttonEdit: '[data-tag-name="bbva-button-group"] [data-tag-name="bbva-type-link"]',
                optionPeriodthree: '[data-tag-name="bbva-form-radio-button"][name="groupButton"] [data-tag-name="bbva-form-radio-button-input"][label="Últimos 3 meses"]',
                optionPeriodSix: '[data-tag-name="bbva-form-radio-button"][name="groupButton"] [data-tag-name="bbva-form-radio-button-input"][label="Últimos 6 meses"]',
                optionPeriodYear: '[data-tag-name="bbva-form-radio-button"][name="groupButton"] [data-tag-name="bbva-form-radio-button-input"][label="Año en curso"]',
                buttonSavePeriod: '[data-tag-name="bbva-button-default"][text="Guardar"]',
                labelSeeDetailWeek: '#tabs [data-tag-name="bbva-type-text"][text="Últimos 7 días"]',
                labelSeeDetailFortNight: '#tabs [data-tag-name="bbva-type-text"][text="Últimos 15 días"]',
                labelSeeDetailMonth: '#tabs [data-tag-name="bbva-type-text"][text="Mes"]',
                labelSeeDetailThree: '#tabs [data-tag-name="bbva-type-text"][text="Últimos 3 meses"]',
                labelSeeDetailSix: '#tabs [data-tag-name="bbva-type-text"][text="Últimos 6 meses"]',
                labelSeeDetailYear: '#tabs [data-tag-name="bbva-type-text"][text="Año en curso"]',

                operationList: {
                    properties: { root: '[data-tag-name="payments-business-inteligence-overview-details"]' },
                    modalWithoutMovements: '[data-tag-name="payments-business-inteligence-overview-panel-info"][content-title="Aún no existen movimientos"]',
                    imgWithoutMovements: '[data-tag-name="payments-business-inteligence-overview-panel-info"][content-title="Aún no existen movimientos"] [data-tag-name="bbva-clip-microillustration"]',
                    labelWithoutMovements: '[data-tag-name="payments-business-inteligence-overview-panel-info"][content-title="Aún no existen movimientos"] [data-tag-name="bbva-type-text"]',
                },
            },
            requiredElements: ['mainHeader'],
        });
    }

    async _screenValidation({ item, value }) {
        const reverseValue = value === 'invisible' || value === 'disable';
        switch (item.toLowerCase()) {
            case 'header info':
                await this.category.headerCategory.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'panel info':
                await this.panelProcess.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'data graph':
                await this.dataVisualizationLines.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'period selector':
                await this.buttonGroup.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'see details info':
                await this.seeDetails.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'search movements':
                await this.searchMovements.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'notification message':
                await this.notificationMessage.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'operation list':
                await this.operationList.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'modal without movements':
                await this.operationList.modalWithoutMovements.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'img without movements':
                await this.operationList.imgWithoutMovements.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'label without movements':
                await this.operationList.labelWithoutMovements.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button see detail':
                await this.buttonSeeDetail.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button edit period':
                await this.buttonEdit.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'label business week':
                await this.category.labelBusinessWeek.waitForEnabled({ timeout: config.wait.M, reverse: reverseValue });
                break;
            case 'label business fort night':
                await this.category.labelBusinessForthNight.waitForEnabled({ timeout: config.wait.M, reverse: reverseValue });
                break;
            case 'label business month':
                await this.category.labelBusinessMonth.waitForEnabled({ timeout: config.wait.M, reverse: reverseValue });
                break;
            case 'label business six month':
                await this.category.labelBusinessSixMonth.waitForEnabled({ timeout: config.wait.M, reverse: reverseValue });
                break;
            case 'label business three month':
                await this.category.labelBusinessThreeMonth.waitForEnabled({ timeout: config.wait.M, reverse: reverseValue });
                break;
            case 'label business year':
                await this.category.labelBusinessYear.waitForEnabled({ timeout: config.wait.M, reverse: reverseValue });
                break;
            case 'label see detail week':
                await this.labelSeeDetailWeek.waitForEnabled({ timeout: config.wait.M, reverse: reverseValue });
                break;
            case 'label see detail fort night':
                await this.labelSeeDetailFortNight.waitForEnabled({ timeout: config.wait.M, reverse: reverseValue });
                break;
            case 'label see detail month':
                await this.labelSeeDetailMonth.waitForEnabled({ timeout: config.wait.M, reverse: reverseValue });
                break;
            case 'label see detail three':
                await this.labelSeeDetailThree.waitForEnabled({ timeout: config.wait.M, reverse: reverseValue });
                break;
            case 'label see detail six':
                await this.labelSeeDetailSix.waitForEnabled({ timeout: config.wait.M, reverse: reverseValue });
                break;
            case 'label see detail year':
                await this.labelSeeDetailYear.waitForEnabled({ timeout: config.wait.M, reverse: reverseValue });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async accessEditPeriod({ option }) {
        await (await this.buttonEdit.waitForClickable({ timeout: config.wait.M })).click();
        switch (option.toLowerCase()) {
            case 'three':
                await (await this.optionPeriodthree.waitForClickable({ timeout: config.wait.M })).click();
                break;
            case 'six':
                await (await this.optionPeriodSix.waitForClickable({ timeout: config.wait.M })).click();
                break;
            case 'year':
                await (await this.optionPeriodYear.waitForClickable({ timeout: config.wait.M })).click();
                break;
            default:
                throw new Error(`${option} is not a valid option`);
        }
        await (await this.buttonSavePeriod.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async accessTypePeriod({ option }) {
        switch (option.toLowerCase()) {
            case 'week':
                await (await this.buttonWeek.waitForClickable({ timeout: config.wait.M })).click();
                break;
            case 'fort night':
                await (await this.buttonFortNight.waitForClickable({ timeout: config.wait.M })).click();
                break;
            case 'month':
                await (await this.buttonMonth.waitForClickable({ timeout: config.wait.M })).click();
                break;
            default:
                throw new Error(`${option} is not a valid option`);
        }
    }

    async accessDetail() {
        await (await this.buttonSeeDetail.waitForClickable({ timeout: config.wait.M })).click();
    }

    async accessOnboarding() {
        await (await this.aceptButtonOnboarding.waitForClickable({ timeout: config.wait.M })).click();
        await (await this.tootltips.tooltipPeriod.waitForClickable({ timeout: config.wait.M })).click();
        await (await this.tootltips.tooltipSales.waitForClickable({ timeout: config.wait.M })).click();
        await (await this.tootltips.tooltipPanel.waitForClickable({ timeout: config.wait.M })).click();
        await (await this.tootltips.tooltipGraph.waitForClickable({ timeout: config.wait.M })).click();
        await (await this.tootltips.tooltipSearch.waitForClickable({ timeout: config.wait.M })).click();
        await (await this.tootltips.tooltipMovements.waitForClickable({ timeout: config.wait.M })).click();
    }
}

export default new BusinessInteligenceTransactionList();
