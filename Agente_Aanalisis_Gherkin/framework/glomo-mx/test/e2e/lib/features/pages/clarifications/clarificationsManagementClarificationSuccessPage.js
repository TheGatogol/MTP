import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class ClarificationsManagementClarificationSuccessPage extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'ClarificationsManagementReview',
            root: '#cells-template-clarificationsManagementClarificationSuccessPage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                iconSuccess: 'cells-successful-response div.head-icon-white',
                successText: 'cells-successful-response div.main-text-head.bold.lg.spacing span',
                clarificationsDate: 'cells-successful-response div.main-text-head.bold.lg.spacing cells-atom-date #date',
                clarificationsAmountText: 'cells-successful-response #body-section ul li:nth-child(1) div.key-value-container span.key',
                clarificationsAmount: 'cells-successful-response #body-section ul li:nth-child(1) div.key-value-container > span.value',
                provisionalPaymentText: 'cells-successful-response #body-section ul li:nth-child(2) div.key-value-container span.key',
                provisionalPaymentAmount: 'cells-successful-response #body-section ul li:nth-child(2) div.key-value-container span.value',
                provisionalPaymentTooltip: 'cells-successful-response #\\31  iron-icon',
                clarificationsFolioText: 'cells-successful-response #body-section ul li:nth-child(3) div.key-value-container span.key',
                clarificationsFolio: 'cells-successful-response #body-section ul li:nth-child(3) div.key-value-container span.value',
                clarificationsFolioTooltip: 'cells-successful-response #\\32  iron-icon',
                cardName: 'cells-successful-response #body-section ul li:nth-child(4) div.key-value-container span.key',
                cardNumber: 'cells-successful-response #body-section ul li:nth-child(4) div.spacing-s cells-molecule-mask',
                movementText: 'cells-successful-response #body-section ul li:nth-child(5) div.key-value-container span.key',
                movement: 'cells-successful-response #body-section ul li:nth-child(5) div.key-value-container span.value',
                clarificationsReasonText: 'cells-successful-response #body-section ul li:nth-child(6) div.key-value-container span.key',
                clarificationsReason: 'cells-successful-response #body-section ul li:nth-child(6) div.key-value-container span.value',
                bank: 'cells-successful-response #body-section ul li:nth-child(7) div.key-value-container span.value',
                infoBox: 'cells-successful-response #body-section ul li:nth-child(8) cells-icon-message',
                infoBoxPayment: 'cells-successful-response #body-section ul li.spacing-l cells-icon-message',
                sharedButton: 'cells-successful-response #body-section cells-operations-list ul li button',
                resolutionDateText: 'cells-successful-response #body-section ul li:nth-child(9) div.key-value-container span.key',
                resolutionDate: 'cells-successful-response #body-section ul li:nth-child(9) div.key-value-container span.value',
                goToClarificationsButton: 'cells-successful-response #primaryBtn',
                exitButton: 'cells-successful-response #secondaryBtn',
                directDebitBlockText: 'cells-successful-response #body-section ul li.spacing-l cells-icon-message',
                clarificationSuccessText: 'cells-successful-response div.main-text-head.bold.lg.spacing span',
                closeButton: 'cells-molecule-header #btnRight cells-atom-icon',
                infoExperience: 'cells-successful-response #body-section ul li.spacing-l cells-icon-message'
            },
            requiredElements: [
                'header'
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarification success icon':
                await this.iconSuccess.waitForDisplayed({timeout: config.wait.M});
                await this.successText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarification date':
                await this.clarificationsDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarification amount':
                await this.clarificationsAmountText.waitForDisplayed({timeout: config.wait.M});
                await this.clarificationsAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'provisional payment':
                await this.provisionalPaymentText.waitForDisplayed({timeout: config.wait.M});
                await this.provisionalPaymentAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'provisional payment tooltip':
                await this.provisionalPaymentTooltip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio':
                await this.clarificationsFolioText.waitForDisplayed({timeout: config.wait.M});
                await this.clarificationsFolio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'folio tooltip':
                await this.clarificationsFolioTooltip.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'name card':
                await this.cardName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'number card':
                await this.cardNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement':
                await this.movementText.waitForDisplayed({timeout: config.wait.M});
                await this.movement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarification reason':
                await this.clarificationsReasonText.waitForDisplayed({timeout: config.wait.M});
                await this.clarificationsReason.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bank':
                await this.bank.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info box':
                await this.infoBox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarification info box payment':
                await this.infoBoxPayment.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'resolution date':
                await this.resolutionDateText.waitForDisplayed({timeout: config.wait.M});
                await this.resolutionDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'shared button':
                await this.sharedButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'go to clarification button':
                await this.goToClarificationsButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'direct debit block text':
                await this.directDebitBlockText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarification success text':
                await this.clarificationSuccessText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info experience':
                await this.infoExperience.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;           
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new ClarificationsManagementClarificationSuccessPage();
