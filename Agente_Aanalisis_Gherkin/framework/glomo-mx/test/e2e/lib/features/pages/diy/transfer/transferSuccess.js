import {ScreenValidationKeyNotFound} from '@csqe/radish';

import AbstractGlomoPage from '../../abstract-glomo-page';
import CellsOcBanner from '../../../components/cells-oc-banner';
import CellsOcBannerSpherica from '../../../components/cells-oc-banner-spherica';
import CellsModalCardAdvice from '../../../components/cells-modal-card-advice';
import CellsModalCardAdviceSpherica from '../../../components/cells-modal-card-advice-spherica';
import FeedbackClientVoiceConnect from '../../../components/feedback-client-voice-connect-gl';

class TransferSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-transfersSuccess[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                headerExitButton: 'cells-molecule-header #btnRight',
                operationDataAndHour: 'cells-successful-response #header-section p.subtitle cells-atom-date #date',
                transferedAmount: 'cells-successful-response #header-section p.amount-description',
                transferAmount: 'cells-successful-response #header-section [data-selector="cells-successful-response-charge-amount"]',
                taxAmount: 'cells-successful-response #header-section div .fees[data-selector="Comisión"]',
                amountCharged: 'cells-successful-response #header-section ul li.header-additional-info__row[data-selector="Importe cargado"]',
                amountPaid: 'cells-successful-response #header-section ul li.header-additional-info__row[data-selector="Importe abonado"]',
                exchangeRate: 'cells-successful-response #header-section ul li.header-additional-info__row[data-selector="cells-successful-response-exchange-rate-types-not-show"]',
                originAccount: 'cells-successful-response #body-section cells-from-to div div:nth-child(1) cells-molecule-mask div.wrapper span.number',
                destinationAccount: 'cells-successful-response #body-section cells-from-to div div:nth-child(2) cells-molecule-mask div.wrapper span.number',
                conceptOwn: 'cells-successful-response #body-section ul li:nth-child(1) div:nth-child(1) span.value',
                concept: 'cells-successful-response #body-section ul li:nth-child(1) span.value',
                reference: 'cells-successful-response #body-section ul li:nth-child(2) span.value',
                operationType: 'cells-successful-response #body-section ul li:nth-child(2) div:nth-child(1) span.value',
                operationNumber: 'cells-successful-response #body-section ul li:nth-child(4) span.value',
                usersEmail: 'cells-successful-response #body-section ul li.spacing-l.bold cells-molecule-mask div.wrapper span.number',
                shareButton: 'cells-successful-response #body-section cells-operations-list ul li button',
                exitButton: 'cells-successful-response #primaryBtn',
                offerCard: {
                    component: {
                        ComponentClass: CellsOcBanner
                    }
                },
                cardAdvice: {
                    component: {
                        ComponentClass: CellsModalCardAdvice,
                    }
                },
            },
            elementsSpherica: {
                header: 'cells-molecule-header-spherica',
                headerExitButton: 'cells-molecule-header-spherica #btnRight',
                operationDataAndHour: 'cells-successful-response-spherica #body-section ul li:nth-of-type(7) span.value',
                transferedAmount: 'cells-successful-response-spherica #header-section p.amount-description',
                transferAmount: 'cells-successful-response-spherica #header-section [data-selector="cells-successful-response-charge-amount"]',
                taxAmount: 'cells-successful-response-spherica #body-section ul li:nth-of-type(3) span.value',
                amountCharged: 'cells-successful-response-spherica #body-section ul li:nth-of-type(1) span.value',
                amountPaid: 'cells-successful-response-spherica #header-section [data-selector="cells-successful-response-charge-amount"]',
                exchangeRate: 'cells-successful-response-spherica #body-section ul li:nth-of-type(2) span.value',
                originAccount: 'cells-successful-response-spherica #body-section ul li:nth-of-type(1) span.value',
                destinationAccount: 'cells-successful-response-spherica #body-section ul li:nth-of-type(2) span.value',
                conceptOwn: 'cells-successful-response-spherica #body-section ul li:nth-of-type(1) div:nth-of-type(1) span.value',
                concept: 'cells-successful-response-spherica #body-section ul li:nth-of-type(4) span.value',
                reference: 'cells-successful-response-spherica #body-section ul li:nth-of-type(2) span.value',
                operationType: 'cells-successful-response-spherica #body-section ul li:nth-of-type(2) div:nth-of-type(1) span.value',
                operationNumber: 'cells-successful-response-spherica #body-section ul li:nth-of-type(5) span.value',
                usersEmail: 'cells-successful-response-spherica #body-section ul li cells-molecule-mask-spherica',
                shareButton: 'cells-successful-response-spherica #body-section cells-operations-list-spherica ul li button',
                exitButton: 'cells-successful-response-spherica #primaryBtn',
                feedbackClient: FeedbackClientVoiceConnect,
                offerCard: {
                    component: {
                        ComponentClass: CellsOcBannerSpherica
                    }
                },
                cardAdvice: {
                    component: {
                        ComponentClass: CellsModalCardAdviceSpherica
                    }
                },
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item, value}) {
        switch (item) {
            case 'summary':
                await this.summary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation data and hour':
                await this.operationDataAndHour.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'transfered amount':
                await this.transferedAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tax amount':
                await this.taxAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount charged':
                await this.amountCharged.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount paid':
                await this.amountPaid.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exchange rate':
                await this.exchangeRate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'origin account':
                await this.originAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'destination account':
                await this.destinationAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'concept own':
                await this.conceptOwn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'concept':
                await this.concept.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'reference':
                await this.reference.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation type':
                await this.operationType.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation number':
                await this.operationNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'users email':
                await this.usersEmail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share button':
                await this.shareButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer card':
                await this.offerCard.waitForBannerVisibility(value === 'not visible', 'title');
                break;
            case 'modal header':
                await this.cardAdvice.modalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal image':
                await this.cardAdvice.modalimage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title':
                await this.cardAdvice.modalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal text':
                await this.cardAdvice.modalText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list title':
                await this.cardAdvice.listTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal list':
                await this.cardAdvice.list.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'primary btn':
                await this.cardAdvice.confirmButtonsComponent.primaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'transfer amount':
                await this.transferAmount.waitForDisplayed({ timeout: config.wait.M });
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

    async goBack() {
        const element = await this.headerExitButton;
        await this.tapElement(element);
    }

    async selectOfferLink() {
        await this.offerCard.selectCardLink();
    }

    async selectPrimaryButtonOfTheModal() {
        await this.cardAdvice.selectPrimaryButton();
    }

    async closeOperative() {
        await this.headerExitButton.waitForDisplayed({timeout: config.wait.M});
        await this.headerExitButton.click({useActions: true});
    }

    async closeTransferSuccess() {
        await this.headerExitButton.waitForDisplayed({timeout: config.wait.M});
        await this.headerExitButton.click();
    }

    async answerFeedbackForm(feedback) {
        await this.feedbackClient.answerFeedbackForm(feedback);
    }
}

export default new TransferSuccess();
