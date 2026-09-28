import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class InternationalRefundsReceipt extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'InternationalRefundsRecipient',
            root: '#cells-template-internationalRefundsReceipt[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                successfulResponseTitle: 'cells-successful-response #header-section h2',
                successfulResponseDate: 'cells-successful-response #header-section > p.subtitle > cells-atom-date #date',
                successfulResponseAmountTitle: 'cells-successful-response #header-section > p.amount-description',
                successfulResponseAmount: 'cells-successful-response #header-section > cells-atom-amount span.amount-wrapper',
                successfulResponseSenderAvatar: 'cells-successful-response #body-section > cells-from-to ul > li.cells-from-to__list-item.square-type > div > cells-contact-avatar .wrapper',
                successfulResponseReceiverAvatar: 'cells-successful-response #body-section > cells-from-to ul > li.cells-from-to__list-item.square-type',
                successfulResponseSenderBank: 'cells-successful-response #body-section > cells-from-to .cells-from-to__info .cells-from-to__info-item > p.cells-from-to__info-name',
                successfulResponseSenderAccount: 'cells-successful-response #body-section > cells-from-to .cells-from-to__info > cells-molecule-mask',
                successfulResponseSender: '#body-section > cells-from-to div.cells-from-to__container > div.cells-from-to__info.cells-from-to__additional-styles > p.cells-from-to__info-description',
                successfulResponseReceiverAlias: '#body-section > cells-from-to div.cells-from-to__container > div.cells-from-to__info.cells-from-to__additional-styles > div.cells-from-to__info-item > p.cells-from-to__info-name',
                successfulResponseReceiverAccount: 'cells-successful-response #body-section > cells-from-to div.cells-from-to__info > div.cells-from-to__info-item:not(.square)',
                additionalInformationKey: 'cells-successful-response #body-section > ul > li.spacing > span.key',
                additionalInformationValue: 'cells-successful-response #body-section > ul > li.spacing > span.value',
                successfulResponseInfoIcon: 'cells-successful-response #body-section > ul > li > cells-icon-message #principalIcon',
                successfulResponseInfoMessage: 'cells-successful-response #body-section > ul > li > cells-icon-message #notInline',
                successfulResponseShareBtn: 'cells-successful-response #body-section > cells-operations-list [data-selector=share]',
                successfulResponseExitBtn: 'cells-successful-response #primaryBtn',
            },
            requiredElements: 'header'
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response title':
                await this.successfulResponseTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response date':
                await this.successfulResponseDate.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response amount title':
                await this.successfulResponseAmountTitle.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response amount':
                await this.successfulResponseAmount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response sender bank':
                await this.successfulResponseSenderBank.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response sender account':
                await this.successfulResponseSenderAccount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response sender':
                await this.successfulResponseSender.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response receiver alias':
                await this.successfulResponseReceiverAlias.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response receiver account':
                await this.successfulResponseReceiverAccount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response relationship to recipient':
                await (await this.additionalInformationKey.elementByText({text: 'Relación con el remitente'})).waitForDisplayed({timeout: config.wait.S});
                await (await this.additionalInformationValue.elementByText({text: 'Comercial'})).waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response reason for transfer':
                await (await this.additionalInformationKey.elementByText({text: 'Motivo de la transferencia'})).waitForDisplayed({timeout: config.wait.S});
                await (await this.additionalInformationValue.elementByText({text: 'Credito'})).waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response local economic activity':
                await (await this.additionalInformationKey.elementByText({text: 'Actividad económica actual'})).waitForDisplayed({timeout: config.wait.S});
                await (await this.additionalInformationValue.elementByText({text: 'Vendo zapatos'})).waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response operation type':
                await (await this.additionalInformationKey.elementByText({text: 'Tipo de operación'})).waitForDisplayed({timeout: config.wait.S});
                await (await this.additionalInformationValue.elementByText({text: 'Transferencia internacional'})).waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response info message':
                await this.successfulResponseInfoIcon.waitForDisplayed({timeout: config.wait.S});
                await this.successfulResponseInfoMessage.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response share btn':
                await this.successfulResponseShareBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'successful response exit btn':
                await this.successfulResponseExitBtn.waitForDisplayed({timeout: config.wait.S});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new InternationalRefundsReceipt();
