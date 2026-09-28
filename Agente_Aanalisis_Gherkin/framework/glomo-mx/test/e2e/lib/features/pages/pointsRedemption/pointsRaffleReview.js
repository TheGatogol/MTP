import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

//Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsConfirmButtons from '../../components/cells-confirm-buttons';

@page()
class PointsRaffleReview extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-pointsRaffleReview[state="active"]',
            elements: {

                acceptButton: CellsConfirmButtons,
                header: CellsMoleculeHeader,

                //Cards Modal Selector
                cardModal: {
                    properties: {
                        root: 'cells-successful-response'
                    },
                    successIcon: '#avatarImg[alt="Operation Success"]',
                    operationStatus: '.main-text-head.bold span',
                    description: '.main-text-head.bold .main-title-description',
                    date: '.main-text-head.bold cells-atom-date #date',
                    sourceCardTitle: '#body-section .additional-info li:nth-of-type(1) .key',
                    sourceCardName: '#body-section .additional-info li:nth-of-type(2) .key',
                    sourceCardPan: 'cells-molecule-mask div.wrapper span.number',
                    ticketsPurchasedTitle: '#body-section .additional-info li:nth-of-type(3) .key',
                    ticketsPurchasedValue: '#body-section .additional-info li:nth-of-type(3) .value',
                    raffleNameTitle: '#body-section .additional-info li:nth-of-type(4) .key',
                    raffleNameValue: '#body-section .additional-info li:nth-of-type(4) .value',
                    totalPointsUsedTitle: '#body-section .additional-info li:nth-of-type(5) span.key',
                    totalPointsUsedValue: '#body-section .additional-info li:nth-of-type(5) span.value',
                    totalPointsLeftTitle: '#body-section .additional-info li:nth-of-type(6) span.key',
                    totalPointsLeftValue: '#body-section .additional-info li:nth-of-type(6) span.value',
                    operationTypeTitle: '#body-section .additional-info li:nth-of-type(7) span.key',
                    operationType: '#body-section .additional-info li:nth-of-type(7) span.value',
                    operationNumberTitle: '#body-section .additional-info li:nth-of-type(8) span.key',
                    operationNumber: '#body-section .additional-info li:nth-of-type(8) span.value',
                    shareBtn: 'cells-operations-list ul.list li.list__item[data-selector="share"] button.link'
                }
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            case 'success operation icon':
                await this.cardModal.successIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success operation information':
                await this.operationInformation();
                break;
            case 'operation date':
                await this.cardModal.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'source card information':
                await this.sourceCardInformation();
                break;
            case 'number of tickets purchased':
                await this.numberOfTicketsPurchased();
                break;
            case 'raffles name':
                await this.rafflesNameInformation();
                break;
            case 'total points used':
                await this.totalPointsUsed();
                break;
            case 'total points left':
                await this.totalPointsLeft();
                break;
            case 'operation type description':
                await this.operationTypeDescription();
                break;
            case 'operation number':
                await this.operationNumberInformation();
                break;
            case 'share button':
                await this.cardModal.shareBtn.waitForEnabled({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.canConfirm();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }

    }

    async canConfirm() {
        await this.acceptButton.canConfirm();
    }

    async operationInformation() {
        await this.cardModal.operationStatus.waitForText({timeout: config.wait.M});
        await this.cardModal.description.waitForText({timeout: config.wait.M});
    }

    async sourceCardInformation() {
        await this.cardModal.sourceCardTitle.waitForText({timeout: config.wait.M});
        await this.cardModal.sourceCardName.waitForText({timeout: config.wait.M});
        await this.cardModal.sourceCardPan.waitForText({timeout: config.wait.M});
    }

    async numberOfTicketsPurchased() {
        await this.cardModal.ticketsPurchasedTitle.waitForText({timeout: config.wait.M});
        await this.cardModal.ticketsPurchasedValue.waitForText({timeout: config.wait.M});
    }

    async rafflesNameInformation() {
        await this.cardModal.raffleNameTitle.waitForText({timeout: config.wait.M});
        await this.cardModal.raffleNameValue.waitForText({timeout: config.wait.M});
    }

    async totalPointsUsed() {
        await this.cardModal.totalPointsUsedTitle.waitForText({timeout: config.wait.M});
        await this.cardModal.totalPointsUsedValue.waitForText({timeout: config.wait.M});
    }

    async totalPointsLeft() {
        await this.cardModal.totalPointsLeftTitle.waitForText({timeout: config.wait.M});
        await this.cardModal.totalPointsLeftValue.waitForText({timeout: config.wait.M});
    }

    async operationTypeDescription() {
        await this.cardModal.operationTypeTitle.waitForText({timeout: config.wait.M});
        await this.cardModal.operationType.waitForText({timeout: config.wait.M});
    }

    async operationNumberInformation() {
        await this.cardModal.operationNumberTitle.waitForText({timeout: config.wait.M});
        await this.cardModal.operationNumber.waitForText({timeout: config.wait.M});
    }

}

export default new PointsRaffleReview();

