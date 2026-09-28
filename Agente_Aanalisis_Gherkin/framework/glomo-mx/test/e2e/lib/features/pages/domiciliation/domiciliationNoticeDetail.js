import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class DomiciliationNoticeDetail extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-domiciliationNoticeDetail[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"]',
                btnPrimary: '[data-tag-name="bbva-header-main"] .header-main .right-group #btn-right-primary',
                title: '[data-tag-name="bbva-list-simple"].list-title ',
                amount: '[data-tag-name="bbva-list-simple"].list-amount',
                product: '[data-tag-name="bbva-list-simple"].list-account',
                description: '[data-tag-name="bbva-list-simple"].list-service-provider',
                reference: '[data-tag-name="bbva-list-simple"].list-reference',
                advice: '[data-tag-name="bbva-list-simple"].list-advice',
                rejectedBtn: '[data-tag-name="bbva-button-default"].rejected-button',
                acceptedBtn: '[data-tag-name="bbva-button-default"].accepted-button',
                helpModal: [
                    BbvaHelpModal, {
                        modifiers: '[visible]',
                        additionalElements: {
                            header: '.modal-header',
                            title: '#helpModalTitle',
                            content: '#helpModalContent',
                            footer: '.modal-footer'
                        }
                    }
                ],
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item, value, _args} = {}) {
        switch (item.toLowerCase()) {
            case 'domiciliation notice header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice primary button':
                await this.btnPrimary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice amount':
                await this.amount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice product':
                await this.product.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice description':
                await this.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice reference':
                await this.reference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice advice':
                await this.advice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'domiciliation notice accepted btn':
                await this.acceptedBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'domiciliation notice rejected btn':
                await this.rejectedBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'warning modal':
                await this.helpModal.additionalElements.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'warning modal title':
                await this.helpModal.additionalElements.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'warning modal content':
                await this.helpModal.additionalElements.content.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'warning modal footer':
                await this.helpModal.additionalElements.footer.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: {value, ..._args}});
        }
    }

    async exitDirectDebitMessage() {
        await this.btnPrimary.waitForClickable({timeout: config.wait.M});
        await this.btnPrimary.click();
    }

    async acceptDirectDebit() {
        await this.acceptedBtn.waitForClickable({timeout: config.wait.M});
        await this.acceptedBtn.click();
    }

    async rejectedDirectDebit() {
        await this.rejectedBtn.waitForClickable({timeout: config.wait.M});
        await this.rejectedBtn.click();
    }
}

export default new DomiciliationNoticeDetail();
