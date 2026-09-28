import AbstractGlomoPage from '../abstract-glomo-page';
import ScreenValidationKeyNotFound, {page} from '@csqe/radish';

@page('RequestDebitCardStep3')
class RequestDebitCardStep3 extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'debit card request prepurchase',
            root: '#cells-template-requestDebitCard[state="active"]',
            elements: {
                header: '#multistep-header',
                heading: '#step-0 #heading',
                summaryText: '#summary-text-step-0',
                heading2: '#step-1 #heading',
                deliveryAddress: '#summmary-text2-step-1',
                confirmRequestDebitCard: '[data-tag-name="bbva-panel-button-fixed"]',
            },
            requiredElements: [
                'header',
                'deliveryAddress'
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
            case 'confirm contract':
                await this.confirmRequestDebitCard.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async confirmContract() {
        await this.confirmRequestDebitCard.waitForDisplayed({timeout: config.wait.M});
        await this.confirmRequestDebitCard.waitForClickable({timeout: config.wait.M});
        await this.confirmRequestDebitCard.click();
    }

    async confirmToken() {
        const {otp} = global.user;
        await this.fillOtp(otp);
    }

}

export default new RequestDebitCardStep3();
