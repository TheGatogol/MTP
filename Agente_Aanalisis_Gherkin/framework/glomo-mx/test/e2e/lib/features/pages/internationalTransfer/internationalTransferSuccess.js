import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import FeedbackClientVoiceConnect from '../../components/feedback-client-voice-connect-gl';

@page()
class InternationalTransferSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'internationalTransfersSuccess',
            root: '#cells-template-internationalTransfersSuccess[state="active"]',
            elements: {
                header: [CellsMoleculeHeader],
                summaryTitle: '#header-section > h2',
                summaryDate: '#header-section > p.subtitle > cells-atom-date #date',
                summaryAmountTitle: '#header-section > p.amount-description',
                summaryAmount: '#header-section > cells-atom-amount',
                summaryCommission: '#header-section > div.fees-container > p[data-selector=glomo-international-transfers-success-commission-alt]:not([hidden])',
                summaryIVA: '#header-section > div.fees-container > p[data-selector=glomo-international-transfers-success-iva-alt]:not([hidden])',
                summaryAmountToCharge: '#header-section > ul > li[data-selector=glomo-international-transfers-success-import-charge]',
                summaryDestinationCurrencyAmount: '#header-section > ul > li[data-selector=glomo-international-transfers-success-import-destiny]',
                summaryExchangeRate: '#header-section > ul > li[data-selector=glomo-international-transfers-success-change-type]',
                originAccountAlias: '#body-section > cells-from-to div.cells-from-to__container > div.cells-from-to__info.cells-from-to__additional-styles > div.cells-from-to__info-item > p.cells-from-to__info-name',
                originAccount: '#body-section > cells-from-to div.cells-from-to__container > div.cells-from-to__info.cells-from-to__additional-styles > cells-molecule-mask div.wrapper > span.number',
                recipientName: '#body-section > cells-from-to div:nth-child(3) > div:nth-child(2) > p',
                recipientNumber: '#body-section > cells-from-to div.cells-from-to__container > div:nth-child(2) > cells-molecule-mask div.wrapper > span.number',
                recipientBankCode: '#body-section > cells-from-to div.cells-from-to__container > div:nth-child(2) > p.cells-from-to__info-description',
                recipientBankName: '#body-section > cells-from-to div.cells-from-to__container > div:nth-child(2) > p.cells-from-to__info-more-info',
                operationDetailItem: '#body-section > ul.otherInfo > li',
                firstInfoMessageIcon: '#body-section > div > cells-icon-message #principalIcon svg',
                firstInfoMessageText: '#body-section > div > cells-icon-message #notInline',
                firstInfoMessageEmail: '#body-section > div > cells-icon-message > cells-molecule-mask div.wrapper > span.number',
                secondInfoMessageIcon: '#body-section > ul.additional-info.additional-info-padd-top-0 > li > cells-icon-message #principalIcon svg',
                secondInfoMessageText: '#body-section > ul.additional-info.additional-info-padd-top-0 > li > cells-icon-message #notInline',
                viewStatusBtn: '#body-section > cells-operations-list ul > li[data-selector=viewStatus] > button',
                shareBtn: '#body-section > cells-operations-list ul > li[data-selector=share] > button',
                btnExit: '#primaryBtn',
                feedbackClient: FeedbackClientVoiceConnect,
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async exitProcess() {
        await this.btnExit.waitForDisplayed({timeout: config.wait.M});
        await this.btnExit.click();
    }

    async answerFeedbackForm(feedback) {
        await this.feedbackClient.answerFeedbackForm(feedback);
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header international':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'summary':
                await this.summaryTitle.waitForDisplayed({timeout: config.wait.L});
                await this.summaryDate.waitForDisplayed({timeout: config.wait.L});
                await this.summaryAmountTitle.waitForDisplayed({timeout: config.wait.L});
                await this.summaryAmount.waitForDisplayed({timeout: config.wait.L});
                await this.summaryCommission.waitForDisplayed({timeout: config.wait.M});
                await this.summaryIVA.waitForDisplayed({timeout: config.wait.L});
                await this.summaryAmountToCharge.waitForDisplayed({timeout: config.wait.L});
                await this.summaryDestinationCurrencyAmount.waitForDisplayed({timeout: config.wait.L});
                await this.summaryExchangeRate.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'origin':
                await this.originAccountAlias.waitForDisplayed({timeout: config.wait.L});
                await this.originAccount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'recipient':
                await this.recipientName.waitForDisplayed({timeout: config.wait.L});
                await this.recipientNumber.waitForDisplayed({timeout: config.wait.L});
                await this.recipientBankCode.waitForDisplayed({timeout: config.wait.L});
                await this.recipientBankName.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'reference':
                await (await this.operationDetailItem
                    .elementByText({text: 'Referencia'}))
                    .waitForDisplayed({timeout: config.wait.L});
                break;
            case 'relationship to recipient':
                await (await this.operationDetailItem
                    .elementByText({text: 'Relación con el destinatario'}))
                    .waitForDisplayed({timeout: config.wait.L});
                break;
            case 'reason for transfer':
                await (await this.operationDetailItem
                    .elementByText({text: 'Relación con el destinatario'}))
                    .waitForDisplayed({timeout: config.wait.L});
                break;
            case 'concept':
                await (await this.operationDetailItem
                    .elementByText({text: 'Concepto'}))
                    .waitForDisplayed({timeout: config.wait.L});
                break;
            case 'operation type':
                await (await this.operationDetailItem
                    .elementByText({text: 'Tipo de operación'}))
                    .waitForDisplayed({timeout: config.wait.L});
                break;
            case 'current economic activity':
                await (await this.operationDetailItem
                    .elementByText({text: 'Actividad económica actual'}))
                    .waitForDisplayed({timeout: config.wait.L});
                break;
            case 'operation number':
                await (await this.operationDetailItem
                    .elementByText({text: 'Número de folio'}))
                    .waitForDisplayed({timeout: config.wait.L});
                break;
            case 'first info message':
                await this.firstInfoMessageIcon.waitForDisplayed({timeout: config.wait.L});
                await this.firstInfoMessageText.waitForDisplayed({timeout: config.wait.L});
                await this.firstInfoMessageEmail.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'second info message':
                await this.secondInfoMessageIcon.waitForDisplayed({timeout: config.wait.L});
                await this.secondInfoMessageText.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'view status button':
                await this.viewStatusBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'share button':
                await this.shareBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'button exit':
                await this.btnExit.waitForClickable({timeout: config.wait.L});
                break;
            case 'header feedback':
                await this.feedbackClient.welcome.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button feedback':
                await this.feedbackClient.welcome.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rating feedback button':
                await this.feedbackClient.selectRating(5, false);
                break;
            case 'header thankyou feedback': 
                await this.feedbackClient.thankYou.headerThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit thankyou feedback': 
                await this.feedbackClient.thankYou.exitThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'micro thankyou feedback': 
                await this.feedbackClient.thankYou.microillustrationThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title thankyou feedback': 
                await this.feedbackClient.thankYou.titleThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description thankyou feedback': 
                await this.feedbackClient.thankYou.descriptionThankYou.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new InternationalTransferSuccess();
