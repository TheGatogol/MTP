import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';

@page()
class CodiQrPaymentsReaderSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-codiQrPaymentsReaderSuccess[state="active"]',
            elements: {
                btnClose: ' cells-molecule-header #btnRight cells-atom-icon',
                imgSuccessful: 'cells-successful-response div.head-icon-white cells-contact-avatar #avatarImg',
                labelTitle: 'cells-successful-response div.main-text-head.bold span',
                labelDescription: 'cells-successful-response div.main-text-head.bold p',
                labelContacto: 'cells-successful-response #body-section ul li:nth-child(1) div.key-value-container',
                labelClabe: 'cells-successful-response #body-section ul li:nth-child(2) div.key-value-container span.value',
                labelReferencia: 'cells-successful-response #body-section ul li:nth-child(3) div.key-value-container span.value',
                labelConcept: 'cells-successful-response #body-section ul li:nth-child(4) div.key-value-container span.value',
                btnContinue: 'cells-successful-response #primaryBtn'
            },
            requiredElements: ['btnClose'],
        });
    }

    async _screenValidation({item}) {
        switch(item.toLowerCase()) {
            case 'btn close':
                await this.btnClose.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'img successful':
                await this.imgSuccessful.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label title':
                await this.labelTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label description':
                await this.labelDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label contacto':
                await this.labelContacto.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label clabe':
                await this.labelClabe.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label referencia':
                await this.labelReferencia.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label concept':
                await this.labelConcept.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async continue() {
        await this.btnClose.waitForDisplayed({timeout: config.wait.M});
        await this.btnClose.click();
    }

}

export default new CodiQrPaymentsReaderSuccess();
