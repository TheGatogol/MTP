import AbstractGlomoPage from '../abstract-glomo-page';
import ScreenValidationKeyNotFound, {page} from '@csqe/radish';

@page('RequestDebitCardStep2')
class RequestDebitCardStep2 extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'debit card request delivery address',
            root: '#cells-template-requestDebitCard[state="active"]',
            elements: {
                header: '#multistep-header',
                heading: '#step-0 #heading',
                summaryText: '#summary-text-step-0',
                deliveryAddress: '#address-content label',
                showAddressButton: '#btn-show-hide-address',
                continueButton: '#btn-step-1',
            },
            requiredElements: [
                'showAddressButton',
                'continueButton'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'delivery address':
                await this.deliveryAddress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show address button':
                await this.showAddressButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async isAddressUnmasked() {
        await this.deliveryAddress.waitForDisplayed({timeout: config.wait.M});
        const deliveryAddress = await this.deliveryAddress.getText();
        await expect(deliveryAddress.includes('•')).to.be.false;
    }

    async showDeliveryAddress() {
        await this.showAddressButton.waitForEnabled();
        await this.showAddressButton.waitForClickable({timeout: config.wait.M});
        await this.showAddressButton.click();
    }

    async confirmAddress() {
        await this.continueButton.waitForDisplayed({timeout: config.wait.M});
        await this.continueButton.waitForClickable({timeout: config.wait.M});
        await this.continueButton.click();
    }

}

export default new RequestDebitCardStep2();
