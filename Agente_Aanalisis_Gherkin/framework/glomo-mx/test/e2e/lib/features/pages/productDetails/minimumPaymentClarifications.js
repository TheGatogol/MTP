import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class MinimumPaymentClarifications extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-minimumPaymentClarifications[state="active"]',
            elements: {
                onBoarding: [
                    BbvaHelpModal, {
                        modifiers: '[visible]',
                        additionalElements: {
                            title:'#text',
                            exit:'#btn-close',
                            header: '#helpModalHeader',
                            icon: '.title-icon',
                            content: '#helpModalContent',
                            contentError: '.content[slot="slot-content"]',
                        }
                    }
                ],
                panel: 'card-information-minimum-payment-clarifications',
                capitalButton:'[data-tag-name="bbva-type-text"][text="card-information-minimum-payment-clarifications-capital-header-title"]',
                commissionButton:'[data-tag-name="bbva-type-text"][text="card-information-minimum-payment-clarifications-commissions-header-title"]',
                interestButton:'[data-tag-name="bbva-type-text"][text="card-information-minimum-payment-clarifications-interest-header-title"]',
                ivaButton:'[data-tag-name="bbva-type-text"][text="card-information-minimum-payment-clarifications-tax-header-title"]',
                iconHelp: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-type-link"].link',
                amountText: '[data-tag-name="bbva-type-amount"]',
            },
            elementsSpherica: {
                capitalButton: '#link-Compras',
                commissionButton: '#link-Comisiones',
                interestButton: '#link-Intereses',
                ivaButton: '#link-IVA',
                seeAllMovements: 'div.expandable-container'
            },
            requiredElements: [
                'panel'
            ]
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'panel':
                await this.panel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal header':
                await this.onBoarding.additionalElements.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title':
                await this.onBoarding.additionalElements.title.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'modal exit':
                await this.onBoarding.additionalElements.exit.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'modal icon':
                await this.onBoarding.additionalElements.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal content':
                await this.onBoarding.additionalElements.content.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'capital button':
                await this.capitalButton.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'commission button':
                await this.commissionButton.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'interest button':
                await this.interestButton.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'iva button':
                await this.ivaButton.waitForDisplayed({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'icon help':
                await this.iconHelp.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount text':
                await this.amountText.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async accessToNotInterestHelpScreen(){
        await this.iconHelp.waitForDisplayed({timeout: config.wait.M});
        await this.iconHelp.click();
    }

}

export default new MinimumPaymentClarifications();
