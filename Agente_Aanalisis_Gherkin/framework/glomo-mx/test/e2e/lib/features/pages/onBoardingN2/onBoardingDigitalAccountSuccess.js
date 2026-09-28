import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class OnBoardingDigitalAccountSuccess extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-openDigitalAccountSuccess[state="active"]',
            elements: {
                header: '#close-label',
                imgOK: '#header-section div.icon.success',
                containerMessage: '#body-section',
                btnEnterAccount: '#primaryBtn',
                messageSuccessAccount: '[data-selector="cells-successful-response-main-title"]',
                ocBanner: 'cells-oc-banner-spherica#banner',
                bannerContainer: 'cells-oc-banner-spherica.oc__banner',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'img success':
                await this.imgOK.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'container message':
                await this.containerMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button enter account':
                await this.btnEnterAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message success account':
                await this.messageSuccessAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'oc banner':
                await this.ocBanner.waitForDisplayed({timeout: config.wait.M, reverse: value === 'no visible'});
                break;
            case 'banner class':
                await this.bannerContainer.waitForDisplayed({timeout: config.wait.M, reverse: value === 'no visible'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goToAccessAccount(){
        await this.btnEnterAccount.waitForDisplayed({timeout: config.wait.M})
            .click();
    }

}

export default new OnBoardingDigitalAccountSuccess();
