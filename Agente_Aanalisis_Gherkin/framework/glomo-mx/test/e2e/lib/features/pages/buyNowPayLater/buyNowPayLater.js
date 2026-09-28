import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class BuyNowPayLater extends AbstractGlomoPage{

    constructor(){
        super({
            root: '#cells-template-distributor[state="active"]',
            elements: {
                header: '.padding .header-category',
                backButton: '#btn-left-primary:not([hidden]) bbva-core-icon',
                financingLine: '.cards [account-number="__ID__"]',
                financingLineDetail: '.right-column',
                financingLineProduct: '.padding [sub-product="__ID__"]',
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async goBack() {
        await this.backButton.waitForDisplayed({timeout: config.wait.M});
        await this.backButton.click();
    }

    async selectRelatedContract() {
        await (await this.financingLine.specifySelector({placeholder: '__ID__', value: user.products.relatedContracts[0].account})
            .waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'financing line detail':
                await this.financingLineDetail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'full deferred purchase card':
                await this.financingLineProduct.specifySelector({placeholder: '__ID__', value: 'CFX1'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bbva choose your term line card':
                await this.financingLineProduct.specifySelector({placeholder: '__ID__', value: 'CFX2'})
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}
export default new BuyNowPayLater();
