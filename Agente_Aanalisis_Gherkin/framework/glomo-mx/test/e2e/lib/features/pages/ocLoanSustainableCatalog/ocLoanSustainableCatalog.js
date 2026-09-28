import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
@page()
class OcLoanSustainableCatalog extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'OcLoanSustainableCatalog',
            root: '#cells-template-loanSustainableProductList[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"] #heading',
                headerSustainableProducts: '.container .content-title [data-tag-name=bbva-type-text]',
                tabProducts: '.container-products [data-tag-name="bbva-tab-default"]#tab-default',
                lightLed: '[data-tag-name="bbva-tab-default"] [data-tag-name="bbva-type-text"][text="Focos LED"]',
                tabLight: '#tab-0',
                tabWater: '#tab-1',
                tabGas: '#tab-2',
                titleLedLights: '#tab-default div.panel [data-tag-name="bbva-type-text"][text="Focos LED"]',
                titleSolarPanels: '#tab-default div.panel [data-tag-name="bbva-type-text"][text="Páneles solares"]',
                titleSanitary: '#tab-default div.panel [data-tag-name="bbva-type-text"][text="Sanitarios"]',
                titleWashingMachines: '#tab-default div.panel [data-tag-name="bbva-type-text"][text="Regaderas"]',
                titleSolarsHeaters: '#tab-default div.panel [data-tag-name="bbva-type-text"][text="Calentadores solares"]',
                titleGasFlowHeater: '#tab-default div.panel [data-tag-name="bbva-type-text"][text="Estufas de gas"]',
                closeCatalog: '#btn-close',
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header sustainable products':
                await this.headerSustainableProducts.waitForText({text: global.user.text.sustainableProducts});
                break;
            case 'sustainable products gas':
                await this.tabGas.waitForText({text: global.user.text.gas});
                await this.titleSolarsHeaters.waitForText({text: global.user.text.solarsHeaters});
                await this.titleGasFlowHeater.waitForText({text: global.user.text.gasFlowHeater});
                break;
            case 'sustainable products light':
                await this.tabLight.waitForText({text: global.user.text.light});
                await this.titleLedLights.waitForText({text: global.user.text.ledLights});
                await this.titleSolarPanels.waitForText({text: global.user.text.solarPanels});
                break;
            case 'sustainable products water':
                await this.tabWater.waitForText({text: global.user.text.water});
                await this.titleSanitary.waitForText({text: global.user.text.sanitary});
                await this.titleWashingMachines.waitForText({text: global.user.text.washingMachine});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessesToProduct(typeProduct) {
        switch(typeProduct.toLowerCase()){
            case 'sustainable products water':
                await this.tabWater.waitForDisplayed({timeout: config.wait.M});
                await this.tabWater.click();
                break;
            case 'sustainable products gas':
                await this.tabGas.waitForDisplayed({timeout: config.wait.M});
                await this.tabGas.click();
                break;
            case 'sustainable products light':
                await this.tabLight.waitForDisplayed({timeout: config.wait.M});
                await this.tabLight.click();
                break;
            default:
                throw new Error(`${typeProduct} is not a valid option`);
        }
    }

    async userCloseCatalog(){
        await this.closeCatalog.waitForDisplayed({timeout: config.wait.M});
        await this.closeCatalog.click();
    }
}

export default new OcLoanSustainableCatalog();
