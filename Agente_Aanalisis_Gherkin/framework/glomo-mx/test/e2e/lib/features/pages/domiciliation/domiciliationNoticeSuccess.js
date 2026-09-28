import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class DomiciliationNoticeSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-domiciliationNoticeSuccess[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"]',
                panelInfo: '[data-tag-name="bbva-panel-info"]',
                invoice: '[data-tag-name="bbva-list-simple"].list-invoice',
                amount: '[data-tag-name="bbva-list-simple"].list-amount',
                termination: '[data-tag-name="bbva-list-simple"].list-termination',
                serviceProvider: '[data-tag-name="bbva-list-simple"].list-service-provider',
                reference: '[data-tag-name="bbva-list-simple"].list-reference',
                shareBtn: '[data-tag-name="bbva-button-action"]',
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'domiciliation notice success header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice success info':
                await this.panelInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice success invoice':
                await this.invoice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice success amount':
                await this.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice success termination':
                await this.termination.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice success reference':
                await this.reference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice success share button':
                await this.shareBtn.waitForNotDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }
}

export default new DomiciliationNoticeSuccess();
