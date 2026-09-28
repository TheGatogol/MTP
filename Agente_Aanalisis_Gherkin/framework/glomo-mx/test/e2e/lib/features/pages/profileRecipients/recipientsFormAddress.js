import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class RecipientsFormAddress extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-recipientsAddressForm[state="active"]',
            elements: {
                header: {
                    container: 'bbva-header-main'
                },
                registerAddress: {
                    street: '#form-input-street input',
                    exteriorNum: '#form-outdoor-number input',
                    interiorNum: '#input-interior-number input',
                    zipCode: '#form-postal-code input',
                    searchBtn: '#form-postal-code .action',
                    colonyInput: '#form-colony-select',
                    colony: 'bbva-form-option',
                    municipality: 'bbva-list-simple[label="Municipio/alcaldía"]',
                    state: 'bbva-list-simple[label="Estado"]',
                    country: 'bbva-list-simple[label="País"]',
                    continueBtn: '#address-button-continue'
                },

            },
            requiredElements: [
                'header'
            ]
        });
    }

    async fillNewAddress(address) {
        await (await this.registerAddress.zipCode.waitForEnabled({timeout: config.wait.L})).setValue({value: address.zipCode});
        await (await this.registerAddress.searchBtn.waitForClickable({timeout: config.wait.L})).click();
        await (await this.registerAddress.street.waitForEnabled({timeout: config.wait.L})).setValue({value: address.street});
        await (await this.registerAddress.exteriorNum.waitForEnabled({timeout: config.wait.L})).setValue({value: address.outerN});
        await (await this.registerAddress.interiorNum.waitForEnabled({timeout: config.wait.L})).setValue({value: address.innerN});
        await (await this.registerAddress.colonyInput.waitForClickable({timeout: config.wait.L})).click();
        await (await (await this.registerAddress.colony.elements()).value[9].waitForClickable({timeout: config.wait.L})).click();
    }

    async saveNewAddres() {
        await (await this.registerAddress.continueBtn.waitForClickable()).click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.container.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'street':
                await this.registerAddress.street.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exterior number':
                await this.registerAddress.exteriorNum.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'interior number':
                await this.registerAddress.interiorNum.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'zip code':
                await this.registerAddress.zipCode.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'search':
                await this.registerAddress.searchBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'colony':
                await this.registerAddress.colonyInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'municipality':
                await this.registerAddress.municipality.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'state':
                await this.registerAddress.state.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'country':
                await this.registerAddress.country.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue':
                await this.registerAddress.continueBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new RecipientsFormAddress();
