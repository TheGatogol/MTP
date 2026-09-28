import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class FundMoreInfo extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-fundMoreInfo[state="active"]',
            elements: {
                productInfo: {
                    properties: {
                        root: 'cells-product-more-info'
                    },
                    productName:  '.cells-product-more-info-product-title',
                    contractNumber: '.cells-product-more-info-contact-title',
                    investmentAccount: '.cells-product-more-info-investment-account-title'
                }
            },
            elementsSpherica: {
                productInfo: {
                    properties: {
                        root: 'cells-product-more-info-spherica'
                    },
                    productName:  '.cells-product-more-info-product-title-spherica',
                    contractNumberCopy: '.cells-product-more-info-contact-title ~ cells-st-button-spherica',
                    investmentAccountCopy: '.cells-product-more-info-investment-account-title ~ cells-st-button-spherica'
                },
                toast: '#modal:not([aria-hidden])'
            },
            requiredElements: [
                'productInfo.productName'
            ],
        });
    }

    async copyField(field) {
        switch (field.toLowerCase()) {
            case 'contract number':
                await (await this.productInfo.contractNumberCopy.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'investment account':
                await (await this.productInfo.investmentAccountCopy.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: field, args: arguments[0]});
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'product name':
                await this.productInfo.productName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract number':
                await this.productInfo.contractNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'investment account':
                await this.productInfo.investmentAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'copy contract number success toast':
                await this.toast.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'copy investment account success toast':
                await this.toast.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new FundMoreInfo();
