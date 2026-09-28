import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class DynamicCvv extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardDynamicCvv[state="active"] bbva-widget-see-dynamic-cvv-spherica bbva-transition-container',
            elements: {
                header: '[slot="slot-header"] [data-tag-name="bbva-header-main"]',
                panCard: {
                    properties: { root: '[data-tag-name="card-dynamic-cvv-list-spherica"]:nth-child(1)' },
                    label: '.wrapper-text [data-tag-name="bbva-type-text"]',
                    value: '.wrapper-text [data-tag-name="bbva-type-text"].text-padding',
                    link: '.wrapper-text [data-tag-name="bbva-type-link"]'
                },
                expirationDate: {
                    properties: { root: '[data-tag-name="card-dynamic-cvv-list-spherica"]:nth-child(2)' },
                    label: '.wrapper-text [data-tag-name="bbva-type-text"]',
                    value: '.wrapper-text [data-tag-name="bbva-type-text"].text-padding'
                },
                dynamicCvv: {
                    properties: { root: '[data-tag-name="card-dynamic-cvv-list-spherica"]:nth-child(3)' },
                    label: '.wrapper-text [data-tag-name="bbva-type-text"]',
                    value: '.wrapper-text [data-tag-name="bbva-type-text"].text-padding',
                    link: '.wrapper-link [data-tag-name="bbva-type-link"]'
                },
                formToggle: {
                    properties: { root: '[data-tag-name="bbva-form-toggle"]' },
                    icon: '[data-tag-name="bbva-type-link"]',
                    toggleChecked: '[data-tag-name="bbva-form-toggle-switch"][checked]',
                    toggleNotChecked: '[data-tag-name="bbva-form-toggle-switch"]:not([checked])'
                }
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'pan number label':
                await this.panCard.label.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pan number value':
                await this.panCard.value.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expiration date label':
                await this.expirationDate.label.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expiration date value':
                await this.expirationDate.value.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'copy pan button':
                await this.panCard.link.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'dynamic cvv label':
                await this.dynamicCvv.label.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'dynamic cvv value':
                await this.dynamicCvv.value.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'view button':
                await this.dynamicCvv.link.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'dynamic cvv button':
                if (value.toLowerCase() === 'enable') {
                    await expect(this.dynamicCvv.link.getProperty({name: 'disabled'})).to.eventually.be.false;
                } else {
                    await expect(this.dynamicCvv.link.getProperty({name: 'disabled'})).to.eventually.be.true;
                }
                break;
            case 'switch offon':
                await this.formToggle.toggle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'switch off':
                await this.formToggle.toggle.toggleNotChecked.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'switch on':
                await this.formToggle.toggle.toggleChecked.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'help button':
                await this.formToggle.toggle.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'green toast':
                await this.greenToast.waitForDisplayed({timeout: config.wait.M, reverse: true});
                await this.greenToast.waitForDisplayed({timeout: config.wait.M, reverse: true});
                break;
            case 'help modal':
                await this.dialogOperations.container.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'timer':
                await this.timer.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async copyCardNumber() {
        await this.panCard.link.click();
    }

    async changeCardStatus(status) {
        switch (status.toLowerCase()) {
            case 'on':
                await this.formToggle.toggle.toggleNotChecked.waitForClickable({timeout: config.wait.M});
                await this.formToggle.toggle.toggleNotChecked.click();
                break;
            case 'off':
                await this.formToggle.toggle.toggleChecked.waitForClickable({timeout: config.wait.M});
                await this.formToggle.toggle.toggleChecked.click();
                break;
            default:
                throw new Error(`Element ${status} IS NOT DEFINED for [dynamic CVV]`);
        }
    }

    async showHelp() {
        await this.formToggle.toggle.icon.click();
    }

    async showCVV() {
        await this.dynamicCvv.link.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M});
    }

    async continueProcess() {
        await this.dialogOperations.confirmDialog({isConfirmed: true});
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.XXL});
    }
}

export default new DynamicCvv();
