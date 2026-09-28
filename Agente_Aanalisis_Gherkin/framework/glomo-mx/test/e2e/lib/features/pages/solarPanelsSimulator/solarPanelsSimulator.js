import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('SolarPanelsSimulator')
class SolarPanelsSimulator extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-solarPanelsSimulator[state="active"]',
            elements: {
                simulator: '[data-tag-name="sustainability-sustainable-solar-panels-simulator"]',
                header: '[data-tag-name="bbva-header-main"]',
                back: '[data-tag-name="sustainability-sustainable-solar-panels-simulator"] #btn-back [icon="bbva:backmini"]',
                products: '[data-tag-name="sustainability-sustainable-products-gl"] .products-section',
                productsLinks: '[data-tag-name="sustainability-sustainable-products-gl"] [data-tag-name="bbva-type-link"]',
                continue: '[data-tag-name="sustainability-sustainable-solar-panels-simulator"] .modal-footer [data-tag-name="bbva-button-default"] span',
                adviceLink: '#sustainability-sustainable-solar-panels-simulator-request-contact-modal #sustainability-sustainable-solar-panels-simulator-privacy-notice-link.request-contact-link .icon',
                externalLink: '#sustainability-sustainable-solar-panels-simulator-flexible-show-privacy-terms-modal #sustainability-sustainable-solar-panels-simulator-privacy-notice-link',
                exitBtn: '#sustainability-sustainable-solar-panels-simulator-exit-modal div.content div.transition-container.dynamic-height div.modal-main [data-tag-name="bbva-button-default"]'
            },
            elementsSpherica: {
                back: '[data-tag-name="sustainability-sustainable-solar-panels-simulator"] #btn-back [icon="spherica:back-mini"]'
            },
            requiredElements: [
                'simulator'
            ],
        });
    }

    async goToProductAccess() {
        await this.productsLinks.waitForDisplayed({timeout: config.wait.M});
        await this.productsLinks.waitForClickable({timeout: config.wait.M});
        await this.productsLinks.click();
    }

    async goBack(){
        await this.back.waitForDisplayed({timeout: config.wait.M});
        await this.back.click();
        await this.waitForElementsExist(this.exitBtn, config.wait.M);
        const exitButtons = await this.exitBtn.elements();
        await exitButtons[0].waitForDisplayed({timeout: config.wait.M});
        await exitButtons[0].click();
    }
}

export default new SolarPanelsSimulator();
