import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class SustainableRateJustification extends AbstractGlomoPage {
    constructor() {
        const modalOnboarding = '[data-tag-name="loan-and-mortgage-information-sustainable-rate-justification-section-file"] [data-tag-name="bbva-help-modal"][button-text="Aceptar"]';
        const  modalUploadInvoice= '[data-tag-name="loan-and-mortgage-information-sustainable-rate-justification-section-file"] [data-tag-name="bbva-help-modal"][button-text="Confirmar"]';
        super({
            root: '#cells-template-sustainableRateJustification[state="active"]',
            elements: {
                header: `${modalOnboarding} [data-tag-name="bbva-header-main"]`,
                sustainableRateJustificationDm: 'bbva-controller-sustainable-rate-justification',
                confirmButton: `${modalUploadInvoice} [data-tag-name="bbva-button-default"]`,
                buttonConfirmOnboarding: `${modalOnboarding} div.content div div.modal-main div.modal-footer slot div.slot-footer [data-tag-name="bbva-button-default"].footer-button`,
                closeUploadInvoices: `${modalUploadInvoice} header div.header-icons.right-group #btn-close`,
                closeOnboarding: `${modalOnboarding} [data-tag-name="bbva-header-main"] #btn-close`,
                textUploadInvoices: `${modalOnboarding} [slot="slot-content"] [data-tag-name="bbva-type-text"]`,
                textHeaderModalOnboarding: `${modalOnboarding} .help-modal [data-tag-name="bbva-type-text"]#text`,
                textHeaderModalUploadInvoice: `${modalUploadInvoice} header [data-tag-name="bbva-type-text"]#text`,
                linkPDF: `${modalUploadInvoice} [slot="slot-content"] [data-tag-name="bbva-type-link"][text="Añadir PDF"]`,
                buttonConfirmUploadInvoices: `${modalUploadInvoice} div.content div.modal-main div.modal-footer slot div.slot-footer [data-tag-name="bbva-button-default"][text="Confirmar"].footer-button`
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async showDocument() {
        const { file } = global.user;
        await this.sustainableRateJustificationDm.execute({
            script: (data) => { this.fileFetcherSuccess(data); },
            args: [file]
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            case 'text header modal onboarding':
                await this.textHeaderModalOnboarding.waitForDisplayed({timeout: config.wait.M});
                await this.textHeaderModalOnboarding.waitForText({text: 'Subir y enviar facturas'});
                break;
            case 'text upload invoices':
                await this.textHeaderModalUploadInvoice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button confirm onboarding':
                await this.buttonConfirmOnboarding.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header modal upload invoices':
                await this.textHeaderModalUploadInvoice.waitForDisplayed({timeout: config.wait.M});
                await this.textHeaderModalUploadInvoice.waitForText({text:'Subir y enviar facturas'});
                break;
            case 'close upload invoices':
                await this.closeUploadInvoices.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show link pdf':
                await this.linkPDF.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button confirm upload invoices':
                await this.buttonConfirmUploadInvoices.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async continueMoreFiles() {
        await (await (await (await this.linkPDF
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async closeOnboardingModal() {
        await this.closeOnboarding.waitForClickable({timeout: config.wait.M});
        await this.closeOnboarding.click();
    }

    async accessSendUploadFiles() {
        await this.confirmButton.waitForAnimation({timeout: config.wait.M});
        await this.confirmButton.waitForClickable({timeout: config.wait.M});
        await this.confirmButton.click();
    }

    async confirmOnboarding() {
        await this.buttonConfirmOnboarding.waitForClickable({timeout: config.wait.M});
        await this.buttonConfirmOnboarding.click();
    }
}

export default new SustainableRateJustification();
