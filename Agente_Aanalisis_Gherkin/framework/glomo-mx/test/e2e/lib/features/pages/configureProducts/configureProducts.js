import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page()
class ConfigureProducts extends AbstractGlomoPage {

    constructor() {

        super({
            root: 'cells-template-coronita[state="active"]',
            rootSpherica: 'cells-template-coronita-spherica[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                //botones
                notifications: '.glomo-button-list-notifications',
                configuracionOperaciones: '.glomo-button-list-operation-configuration',
                hideProducts: '.glomo-settings-products-hide',
                ajustesSeguridad: '.glomo-button-list-security-settings',
                codiSettings: '.glomo-button-list-codi-settings',
                mobilePayments: '.glomo-button-list-mobilepayment-settings',
                incomeLimits: '.glomo-button-list-income-limits-settings',
                language: '.glomo-button-list-operation-language-settings',
            },
            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                }
            },
            requiredElements: [
                'hideProducts'
            ],
        });

    }

    async goNextPage() {
        await this.hideProducts.waitForDisplayed({timeout: config.wait.XL});
        await this.hideProducts.click();
    }

    async goNextPageFromConfigurationProducts(page) {
        switch (page.toLowerCase()) {
            case 'operation configuration':
                await this.configuracionOperaciones.waitForDisplayed();
                await this.configuracionOperaciones.click();
                break;
            case 'security settings':
                await this.ajustesSeguridad.waitForDisplayed();
                await this.ajustesSeguridad.click();
                break;
            case 'codi settings':
                await this.codiSettings.waitForDisplayed();
                await this.codiSettings.click();
                break;
            case 'notifications':
                await this.notifications.waitForDisplayed({timeout: config.wait.M});
                await this.notifications.click();
                break;
            case 'income limits':
                await this.incomeLimits.waitForDisplayed({timeout: config.wait.M});
                await this.incomeLimits.click();
                break;
            case 'language':
                await this.language.waitForDisplayed({timeout: config.wait.M});
                await this.language.click();
                break;
            default:
                throw new Error(`${page} IS NOT DEFINED`);
        }
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'notifications':
                await this.notifications.waitForDisplayed();
                break;
            case 'operations configuration':
                await this.configuracionOperaciones.waitForDisplayed();
                break;
            case 'show and hide products':
                await this.hideProducts.waitForDisplayed();
                break;
            case 'security settings':
                await this.ajustesSeguridad.waitForDisplayed();
                break;
            case 'codi settings':
                await this.codiSettings.waitForDisplayed();
                break;
            case 'mobile payments':
                await this.mobilePayments.waitForDisplayed({reverse: value === 'not visible'});
                break;
            case 'income limits':
                await this.incomeLimits.waitForDisplayed();
                break;
            default:
                throw new Error(`${item} IS NOT DEFINED FOR [configure products]`);

        }
    }
}

export default new ConfigureProducts();
