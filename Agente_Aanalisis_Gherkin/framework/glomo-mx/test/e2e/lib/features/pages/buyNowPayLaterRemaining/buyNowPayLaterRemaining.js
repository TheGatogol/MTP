import {page, ElementValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page('buyNowPayLaterRemaining')
class BuyNowPayLaterRemaining extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-buyNowPayLater[state="active"]',
            elements: {
                bnpl:'[data-tag-name="bbva-feature-buy-now-pay-later-mx-spherica"]',
                offerPage:' bbva-feature-buy-now-pay-later-mx-spherica  [data-tag-name="bbva-feature-buy-now-pay-later-mx-spherica-offer-page"] [data-tag-name="bbva-help-modal"]',
                genericHelpModal: {
                    properties: {
                        root: 'bbva-feature-buy-now-pay-later-mx-spherica  [data-tag-name="bbva-feature-buy-now-pay-later-mx-spherica-offer-page"] [data-tag-name="bbva-help-modal"]',
                    },
                    header: '[data-tag-name="bbva-header-main"]',
                    range: '[data-tag-name="bbva-form-range"]',
                    button: '[data-tag-name="bbva-button-default"]',
                },
                multiStep: {
                    properties: {
                        root: 'bbva-feature-buy-now-pay-later-mx-spherica [data-tag-name="bbva-feature-buy-now-pay-later-mx-spherica-multistep-page"]'
                    },
                    headerTermsAndConditions:'[data-tag-name="bbva-header-main"]',
                    checkBoxOne: '#first-check div.container .box',
                    checkBoxTwo: '#second-check div.container .box',
                    checkBoxThree: '#third-check div.container .box',
                    buttonContinue: '[data-tag-name="bbva-expandable-step"] div.default-content [data-tag-name="bbva-button-default"]',
                    headerSummary: '[data-tag-name="bbva-header-main"]',
                    confirmButton: 'div.confirm-step [data-tag-name="bbva-button-default"]'
                },
                successPage:{
                    properties: {
                        root: 'bbva-feature-buy-now-pay-later-mx-spherica [data-tag-name="bbva-feature-buy-now-pay-later-mx-spherica-success-page"] [data-tag-name="bbva-help-modal"]'
                    },
                    header: '#helpModalHeader #text h1',
                    microillustration: 'bbva-type-icon.checkmark-icon-success',
                    title:  'div div.process-receipt bbva-type-text.microillustration-title p',
                },
                modalErrorNotEnoughAmount:{
                    properties: {
                        root: '[data-tag-name="bbva-feature-buy-now-pay-later-mx-spherica-modal"] #modalNotEnoughAmount'
                    },
                    header: '#helpModalHeader',
                    microillustration: 'div:nth-child(1) [data-tag-name="bbva-clip-microillustration"]',
                    title: 'div:nth-child(1) [data-tag-name="bbva-type-text"]:nth-child(2)',
                }
            },
            requiredElements: ['root'],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.genericHelpModal.header.waitForExist({timeout: config.wait.M});
                await this.genericHelpModal.header.scrollIntoView();
                await this.genericHelpModal.header.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'range':
                await this.genericHelpModal.range.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'button':
                await this.genericHelpModal.button.waitForDisplayed({timeout:config.wait.M});
                break;
            case 'terms and conditions checbox one':
                await this.multiStep.checkBoxOne.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions checbox two':
                await this.multiStep.checkBoxTwo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions checbox tree':
                await this.multiStep.checkBoxThree.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'terms and conditions continue':
                await this.multiStep.buttonContinue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button':
                await this.multiStep.confirmButton.waitForClickable({timeout: config.wait.M});
                break;
            case 'header summary':
                await this.multiStep.headerSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'screen otp':
                await this.signModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'confirm button otp':
                await this.signModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page header':
                await this.successPage.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page microillustration':
                await this.successPage.microillustration.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success page title':
                await this.successPage.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal error not enough amount header':
                await this.modalErrorNotEnoughAmount.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal error not enough amount title':
                await this.modalErrorNotEnoughAmount.title.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ElementValidationKeyNotFound({key: item, args: {item}});
        }
    }

    async continueMultistep() {
        await (await this.genericHelpModal.button.waitForDisplayed({ timeout: config.wait.M })).click({ useActions: false, scrollOptions: { block: 'nearest' }});
    }

    async summaryView() {
        await this.acceptTermsAndConditions();
        await this.completedMultistep();
    }

    async goesToOtpScreen() {
        await this.continueMultistep();
        await this.summaryView();
    }

    async acceptTermsAndConditions() {
        await (await this.multiStep.headerTermsAndConditions.waitForDisplayed({timeout: config.wait.M})).waitForAnimation({interval: config.wait.XS});
        await (await this.multiStep.checkBoxOne.waitForDisplayed({timeout: config.wait.M})).click({ useActions: false, scrollOptions: { block: 'nearest' }});
        await (await this.multiStep.checkBoxTwo.waitForDisplayed({timeout: config.wait.M})).click({ useActions: false, scrollOptions: { block: 'nearest' }});
        await (await (await this.multiStep.checkBoxThree.waitForDisplayed({timeout: config.wait.M})).scrollIntoView({block: 'nearest'})).click({forceScroll: false});
        await (await (await this.multiStep.buttonContinue.waitForDisplayed({timeout: config.wait.M})).scrollIntoView({block: 'nearest'})).click({forceScroll: false});
    }

    async completedMultistep(){
        await (await this.multiStep.confirmButton.waitForAnimation({interval: config.wait.XS})).click();
    }
}

export default new BuyNowPayLaterRemaining();
