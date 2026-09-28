import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class MortgageCertificateReview extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-mortgageCertificateReview[state="active"]',
            elements: {
                header: 'bbva-header-main-spherica',
                closeBtn: 'button#btn-close',
                panelInfo: 'bbva-panel-info-spherica',
                certificateLink: 'bbva-list-file-spherica:nth-child(6) [data-tag-name="bbva-type-link"]',
                amortizationLink: 'bbva-list-file-spherica:nth-child(7) [data-tag-name="bbva-type-link"]',
                detailsTitle: '[data-tag-name="bbva-header-category-spherica"]:nth-child(8)',
                helpIcon: '[data-tag-name="bbva-header-category-spherica"]:nth-child(8) [data-tag-name="bbva-type-link"]',
                amountTitle: '#amountContainer bbva-type-text-spherica:first-of-type',
                amountText: '#amountContainer bbva-type-text-spherica:last-of-type',
                termTitle: '#termContainer bbva-type-text-spherica:first-of-type',
                termText: '#termContainer bbva-type-text-spherica:last-of-type',
                purposeTitle: '#typeContainer bbva-type-text-spherica:first-of-type',
                purposeText: '#typeContainer bbva-type-text-spherica:last-of-type',
                dateTitle: '#dateContainer bbva-type-text-spherica:first-of-type',
                dateText: '#dateContainer bbva-type-text-spherica:last-of-type',
                folioTitle: '#folioContainer bbva-type-text-spherica:first-of-type',
                folioText: '#folioContainer bbva-type-text-spherica:last-of-type',
                docsTitle: 'bbva-header-category-spherica:nth-of-type(2)',
                docsDescription: 'bbva-type-text-spherica:nth-child(15)',
                docsList: 'bbva-aggregation-bullet-list-spherica:first-of-type',
                notificationMessage: 'bbva-notification-message-spherica',
                considerationsTitle: 'bbva-header-category-spherica:nth-of-type(3)',
                considerationsList: 'bbva-aggregation-bullet-list-spherica:last-of-type',
                cancelButton: 'bbva-button-action-spherica [data-tag-name="bbva-type-icon"]',
                dialogOperations: GlomoAlertManagerSpherica
            },
            defaultSphericaElements: [
                'GlomoAlertManager'
            ],
            requiredElements: [
                'header', 'certificateLink', 'amortizationLink'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'certificate link':
                await this.certificateLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amortization link':
                await this.amortizationLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'details title':
                await (await this.detailsTitle
                    .scrollIntoView())
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount title':
                await this.amountTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount text':
                await this.amountText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'term title':
                await this.termTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'term text':
                await this.termText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purpose title':
                await this.purposeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'purpose text':
                await this.purposeText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date title':
                await this.dateTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date text':
                await this.dateText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio title':
                await this.folioTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio text':
                await this.folioText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'docs title':
                await (await this.docsTitle
                    .scrollIntoView())
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'docs description':
                await this.docsDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'docs list':
                await this.docsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'notification message':
                await this.notificationMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'considerations title':
                await (await this.considerationsTitle
                    .scrollIntoView())
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'considerations list':
                await this.considerationsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'cancel button':
                await this.cancelButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'exit button':
                await this.dialogOperations.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async visualizeCertificate() {
        await (await this.certificateLink
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async cancelCertificate(confirmed = false) {
        await (await (await this.cancelButton
            .scrollIntoView())
            .waitForClickable({timeout: config.wait.M}))
            .click();
        if(confirmed)
            await this.dialogOperations.confirmDialog();
    }

    async revealHelp() {
        await (await this.helpIcon
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

}

export default new MortgageCertificateReview();
