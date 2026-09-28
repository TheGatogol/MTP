import AbstractGlomoPage from '../abstract-glomo-page.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('SustainabilityLandingSectionPage')
class SustainabilityLandingSection extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-sustainabilitySection[state="active"] sustainability-sustainability-section ',
            elements: {
                header: '#main-header',
                back: '#main-header #btn-back',
                solarPanelsCard: 'div bbva-panel-container div.container #solar-panels div.content',
                homeApplianceCard: 'div bbva-panel-container div.container #home-appliance div.content',
                carSimulatorCard: 'div bbva-panel-container div.container #car-simulator div.content',
                offersCard: 'div div bbva-carousel-default #carouselSlides',
                carouselOffersCard: 'div div bbva-carousel-default',
                carbonFootprintCard: 'div bbva-panel-container div.container #carbon-footprint div.content',
                forestryProyectCard: 'div bbva-panel-container div.container #forestry-project div.content',
                carbonFootprintCardLink: '#carbon-footprint button div.header div [data-tag-name="bbva-type-text"]',
                forestryProyectCardLink: '#forestry-project button div.header div [data-tag-name="bbva-type-text"]',
                offersCardLink: '[data-tag-name="bbva-carousel-default"] #carouselSlides div [data-tag-name="bbva-panel-container"] #offers div.content  [data-tag-name="bbva-type-link"]',
                homeApplianceCardLink: '#home-appliance .content [data-tag-name="bbva-type-link"]',
                carSimulatorCardLink: '#car-simulator .content [data-tag-name="bbva-type-link"]',
                solarPanelsCardLink: '#solar-panels .content [data-tag-name="bbva-type-link"]',
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async accessToApplianceSimulator() {
        await this.homeApplianceCardLink.waitForDisplayed({timeout: config.wait.M});
        await this.homeApplianceCardLink.click();
    }

    async accessToCarSimulator() {
        await this.carSimulatorCardLink.waitForDisplayed({timeout: config.wait.M});
        await this.carSimulatorCardLink.click();
    }

    async accessToSolarPanelsSimulator() {
        await this.solarPanelsCardLink.waitForDisplayed({timeout: config.wait.M});
        await this.solarPanelsCardLink.click();
    }

    async accessToCarbonFootprint() {
        await this.carbonFootprintCardLink.waitForDisplayed({timeout: config.wait.M});
        await this.carbonFootprintCardLink.click();
    }

    async accessToForestryProyectCardLink(){
        await this.forestryProyectCardLink.waitForDisplayed({timeout: config.wait.M});
        await this.forestryProyectCardLink.click();
    }

    async goToProduct() {
        await this.offersCardLink.waitForDisplayed({timeout: config.wait.M});
        await this.offersCardLink.click();
    }

    async goBack() {
        await this.back.waitForDisplayed({timeout: config.wait.M});
        await this.back.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'solar paneles simulator card':
                await this.solarPanelsCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'home appliance simulator card':
                await this.homeApplianceCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'car simulator card':
                await this.carSimulatorCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product card':
                await this.offersCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'carousel card':
                await this.carouselOffersCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'carbon footprint overview card':
                await this.carbonFootprintCard.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reforestry proyects':
                await this.forestryProyectCard.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new SustainabilityLandingSection();
