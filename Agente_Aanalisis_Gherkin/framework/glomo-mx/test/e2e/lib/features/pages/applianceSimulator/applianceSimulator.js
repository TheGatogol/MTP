import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('ApplianceSimulator')
class ApplianceSimulator extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-applianceSimulator[state="active"]',
            elements: {
                simulator: '[data-tag-name="sustainability-sustainable-appliance-simulator"]',
                back: '#main-header #btn-back',
                header: '#main-header',
                info: '.amounts-info-wrapper',
                form: '[data-tag-name="bbva-form-control-input"]',
                savings: '.savings',
                products: '.products-section',
                sustainableProductsCard: '[data-tag-name="sustainability-sustainable-products-gl"]',
                productsCarousel: '#products-carousel[data-tag-name="bbva-carousel-default"]',
                productsLinks: '#products-carousel[data-tag-name="bbva-carousel-default"] #carouselSlides .swiper-slide-active [data-tag-name="bbva-type-link"]',
                promotions: '.promotion-list [data-tag-name="bbva-carousel-default"]',
                customize: '.amounts-info-wrapper [data-tag-name="bbva-type-link"]',
                payBills: {
                    web: '#sustainability-sustainable-appliance-simulator-customize-consumption-modal .customize-actions-item [data-tag-name="bbva-type-link"]',
                    isWithoutRoot: true,
                }
            },
            requiredElements: [
                'header', 'info', 'savings'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info':
                await this.info.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form':
                await this.form.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'savings':
                await this.savings.scrollIntoView();
                await this.savings.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'products':
                await this.products.scrollIntoView();
                await this.products.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'promotions':
                await this.promotions.scrollIntoView();
                await this.promotions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pay bills modal':
                await this.payBills.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goToProductAccess() {
        await this.productsLinks.waitForClickable({timeout: config.wait.M});
        await this.productsLinks.click();
    }

    async goToPayYourBills() {
        await this.customize.click();
        await this.payBills.waitForDisplayed({timeout: config.wait.M});
        await this.payBills.click();
    }

}

export default new ApplianceSimulator();
