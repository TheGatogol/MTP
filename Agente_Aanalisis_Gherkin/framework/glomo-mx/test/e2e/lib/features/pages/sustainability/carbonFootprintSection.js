import AbstractGlomoPage from '../abstract-glomo-page.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('CarbonFootprintPage')
class CarbonFootprint extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-carbonFootprintSection[state="active"]',
            elements: {
                carbonFootprint: '[data-tag-name="sustainability-carbon-footprint-section"]',
                header: '#main-header',
                backBtn: '#main-header #btn-back',
                closeBtn: '#btn-close [icon="spherica:close"]',
                faqsBtn: '#main-header #btn-info',
                monthlyEmissions: '.monthly-emissions',
                lastTwelveMonths: '.last-12-months-container',
                donutChart: '.last-12-months-container .donut-container',
                donutLegend: '.last-12-months-container .legend-container',
                equivalence: '.equivalence-container',
                comparative: '.compare-emissions-container',
                comparativeNotification: '.compare-emissions-container [data-tag-name="bbva-notification-message"]  ',
                carousel: '#carouselSlides',
                atmosCarouselCard: '#carouselSlides #sustainability-footprint-section-carousel-card-0',
                noDataInfo: '.no-data-information-container',
                noDataEmissions: '.last-12-months-container .last-12-months-no-transactions',
                scheduleReceiptsLink: '.no-data-information-container .billing-actions-card:nth-of-type(1)',
                payReceiptsLink: '.no-data-information-container .billing-actions-card:nth-of-type(2)',
                legendToggle: '.toggle-panel [data-tag-name="bbva-expandable-panel"]',
                actionsLink: '.sustainability-carbon-footprint-section-actions [data-tag-name="bbva-header-category"] div.options-right [data-tag-name="bbva-type-link"]',
                atmosLink: '#sustainability-footprint-section-carousel-card-0 [data-tag-name="bbva-type-link"]',
                simulatorLink: '[data-tag-name="sustainability-carbon-footprint-section-simulators"] .simulator-card .simulator-link',
                forestryLink: '.actions-list-container .actions-list-forestry [data-tag-name="bbva-type-link"]',
                subcategoryLinks: '.last-12-months-container bbva-type-link',
                subcategoryText: '.last-12-months-container bbva-type-link bbva-type-text',
                faqs: {
                    properties: {
                        root: '[data-tag-name="bbva-help-modal"]'
                    },
                    faqsTitle: '[data-tag-name="bbva-header-category"]',
                    faqsQuestion1: '.link-list-container:nth-of-type(1)',
                    faqsQuestion2: '.link-list-container:nth-of-type(2)',
                    faqsQuestion3: '.link-list-container:nth-of-type(3)'
                }
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async accessToDetail(subcat) {
        const subcategories = {
            light: 'Luz',
            fuel: 'Gasolina',
            gas: 'Gas'
        };
        const expectedText = subcategories[subcat];
        await this.waitForElementsExist(this.subcategoryLinks);
        const links = await this.subcategoryLinks.elements();
        await this.waitForElementsExist(this.subcategoryText);
        const text = await this.subcategoryText.elements();

        for(let i = 0; i < links.length; i++){
            if(await text[i].verifyText({text: expectedText, foreCase: true, exactMatch: true })){
                await links[i].waitForDisplayed({ timeout: config.wait.M });
                await links[i].click();
                return;
            }
        }

        throw new Error(`Subcategory link with text "${expectedText}" not found.`);
    }

    async expandLegend() {
        await this.legendToggle.waitForDisplayed({timeout: config.wait.M});
        await this.legendToggle.click();
    }

    async accessToGasDetail() {
        await this.gasSubcategory.waitForDisplayed({timeout: config.wait.M});
        await this.gasSubcategory.click();
    }

    async accessToFuelDetail() {
        await this.fuelSubcategory.waitForDisplayed({timeout: config.wait.M});
        await this.fuelSubcategory.click();
    }

    async accessToLightDetail() {
        await this.lightSubcategory.waitForDisplayed({timeout: config.wait.M});
        await this.lightSubcategory.click();
    }

    async accessToActionsList() {
        await this.actionsLink.waitForDisplayed({timeout: config.wait.M});
        await this.actionsLink.click();
    }

    async accessToFAQs() {
        await this.faqsBtn.waitForDisplayed({timeout: config.wait.M});
        await this.faqsBtn.click();
    }

    async goToSimulator() {
        await this.simulatorLink.waitForDisplayed({timeout: config.wait.M});
        await this.simulatorLink.click();
    }

    async goToPayReceipts() {
        await this.payReceiptsLink.waitForDisplayed({timeout: config.wait.M});
        await this.payReceiptsLink.click();
    }

    async goToSchedulePayReceipts() {
        await this.scheduleReceiptsLink.waitForDisplayed({timeout: config.wait.M});
        await this.scheduleReceiptsLink.click();
    }

    async goToAtmosFromActions(){
        await this.forestryLink.waitForDisplayed({timeout: config.wait.M});
        await this.forestryLink.click();
    }

    async goToAtmos(){
        await this.atmosLink.waitForDisplayed({timeout: config.wait.M});
        await this.atmosLink.click();
    }

    async goBack() {
        await this.backBtn.waitForDisplayed({timeout: config.wait.M});
        await this.backBtn.click();
    }

    async checkFeatures(table) {
        const togglesMap = {
            'legitimate interest mark': 'legitimateInterestMark',
            'insights': 'insights',
            'comparative': 'comparative',
            'simulators': 'simulators',
            'forestry projects': 'forestryProjects'
        };
        const features = table.raw();

        await this.carbonFootprint.waitForDisplayed({timeout: config.wait.XL});
        const toggles = await this.carbonFootprint.getProperty({name: '_toggles'});

        features.forEach(([feature, status]) => {
            const active = status === 'available';
            assert(toggles[togglesMap[feature]] === active, `${feature} should be ${status}`);
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'monthly emissions':
                await this.monthlyEmissions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'donut chart':
                await this.donutChart.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'donut legend':
                await this.donutLegend.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'equivalence':
                await this.equivalence.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'comparative':
                await this.comparative.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'comparative notification':
                await this.comparativeNotification.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'carousel':
                await this.carousel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'atmos carousel card':
                await this.atmosCarouselCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'actions list':
                await this.actionsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no data info':
                await this.noDataInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no data emissions':
                await this.noDataEmissions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs title':
                await this.faqs.faqsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs question 1':
                await this.faqs.faqsQuestion1.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs question 2':
                await this.faqs.faqsQuestion2.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'faqs question 3':
                await this.faqs.faqsQuestion3.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new CarbonFootprint();
