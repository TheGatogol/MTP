import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('CarSimulator')
class CarSimulator extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-carSimulator[state="active"]',
            elements: {
                simulator: '[data-tag-name="sustainability-sustainable-car-simulator"]',
                header: '#main-header',
                products: '[data-tag-name="sustainability-sustainable-products-gl"] .products-section',
                productsLinks: '[data-tag-name="sustainability-sustainable-products-gl"] [data-tag-name="bbva-type-link"]',
                backBtn: '#main-header #btn-back'
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async goToProductAccess() {
        await this.productsLinks.waitForDisplayed({timeout: config.wait.M});
        await this.productsLinks.click();
    }

    async goBack() {
        await this.backBtn.waitForDisplayed({timeout: config.wait.M});
        await this.backBtn.click();
    }

    async checkFeatures(table) {
        const togglesMap = {
            'products': 'products',
        };
        const features = table.raw();
        await this.simulator.waitForDisplayed({timeout: config.wait.XL});
        const toggles = await this.simulator.getProperty({ name: '_toggles' });
        features.forEach(([feature, status]) => {
            const active = status === 'available';
            assert(toggles[togglesMap[feature]] === active, `${feature} should be ${status}`);
        });
    }
}

export default new CarSimulator();
