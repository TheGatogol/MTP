import AbstractGlomoPage from '../abstract-glomo-page.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('SustainabilityPage')
class Sustainability extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-sustainability',
            elements: {
                header: '#main-header',
                back: '#main-header #btn-back',
                overview: '[data-tag-name="sustainability-carbon-footprint-overview"][mode="tracker"]',
                newsSection: '#newsAction div.button-list',
                glossarySection: '#glossaryAction div.button-list',
                noFootprintSection: '.card-banner-alert--special',
                applianceSimulator: '#home-elec-newappl .link',
                carSimulator: '#tran-fuel-elec-car .link',
                solarPanelsSimulator: '#home-elec-panels .link',
                payReceiptsLink: '[data-tag-name="bbva-banner-marquee"] #payReceipts [data-tag-name="bbva-link"]'
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async accessToNews() {
        await this.newsSection.waitForDisplayed({timeout: config.wait.M});
        await this.newsSection.scrollIntoView();
        await this.newsSection.click();
    }

    async accessToGlossary() {
        await this.glossarySection.waitForDisplayed({timeout: config.wait.M});
        await this.glossarySection.scrollIntoView();
        await this.glossarySection.click();
    }

    async accessToApplianceSimulator() {
        await this.applianceSimulator.waitForDisplayed({timeout: config.wait.XL});
        await this.applianceSimulator.click();
    }

    async accessToCarSimulator() {
        await this.carSimulator.waitForDisplayed({timeout: config.wait.XL});
        await this.carSimulator.click();
    }

    async accessToSolarPanelsSimulator() {
        await this.solarPanelsSimulator.waitForDisplayed({timeout: config.wait.XL});
        await this.solarPanelsSimulator.click();
    }

    async goToPayReceipts() {
        await this.payReceiptsLink.waitForDisplayed({timeout: config.wait.XL});
        await this.payReceiptsLink.click();
    }

    async goBack() {
        await this.back.waitForDisplayed({timeout: config.wait.M});
        await this.back.click();
    }

    async checkFeatures(table) {
        const togglesMap = {
            'sustainable actions section': 'tips',
            'sustainable products info section': 'products',
            'promotions section': 'promotions',
            'collective achievements': 'collectiveAchievements',
            'more info section': 'otherActions',
            'carbon calculation info': 'ecodes',
            'feedback section': 'feedback',
            'onboarding guided tour': 'onboarding',
            'action engagement section': 'recommendationCommitment',
            'equivalence sharing option': 'shareEquivalences',
            'idea sharing option': 'shareIdeas',
            'action filtering': 'recommendationsConfig',
            'carbon emissions detail area': 'emissionsList',
            'insights info': 'insights',
        };
        const features = table.raw();

        await this.overview.waitForDisplayed({timeout: config.wait.XL});
        const toggles = await this.overview.getProperty({name: '_toggles'});

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
            case 'overview':
                await this.overview.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'no footprint section':
                await this.noFootprintSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'news section':
                await this.newsSection.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'glossary section':
                await this.glossarySection.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new Sustainability();
