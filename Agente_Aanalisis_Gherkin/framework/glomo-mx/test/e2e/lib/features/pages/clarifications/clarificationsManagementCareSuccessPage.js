import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class ClarificationsManagementCareSuccessPage extends AbstractGlomoPage {

    constructor() {
        super({
            name: 'ClarificationsManagementReview',
            root: '#cells-template-clarificationsManagementCareSuccessPage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                successText: 'cells-successful-response #header-section h2',
                clarificationsPaymentDate: 'cells-successful-response #header-section p.subtitle cells-atom-date #date',
                clarificationsAmountPaymentText: 'cells-successful-response #header-section p.amount-description',
                clarificationsAmountPayment: 'cells-successful-response #header-section cells-atom-amount',
                cardName: 'cells-successful-response #body-section ul li:nth-child(1) div.key-value-container span.key',
                cardNumber: 'cells-successful-response #body-section ul li:nth-child(1) div:nth-child(4) cells-molecule-mask',
                movementText: 'cells-successful-response #body-section ul li:nth-child(2) div.key-value-container span.key',
                movement: 'cells-successful-response #body-section ul li:nth-child(2) div.key-value-container span.value',
                clarificationsReasonText: 'cells-successful-response #body-section ul li:nth-child(3) div.key-value-container span.key',
                clarificationsReason: 'cells-successful-response #body-section ul li:nth-child(3) div.key-value-container span.value',
                authorizedPayment: 'cells-successful-response #body-section ul li:nth-child(4) div.key-value-container span.key',
                paymentDate: 'cells-successful-response #body-section ul li:nth-child(4) div.key-value-container span.value',
                bank: 'cells-successful-response #body-section ul li:nth-child(5) div.key-value-container span.value',
                infoBox: 'cells-successful-response #body-section ul li:nth-child(6) cells-icon-message',
                sharedButton: 'cells-successful-response #body-section > cells-operations-list ul li button',
                exitButton: 'cells-successful-response #secondaryBtn',
                directDebitBlockText: 'cells-successful-response #body-section ul li.spacing-s.bold',
                infoExperience: 'cells-successful-response #body-section ul li.spacing-l cells-icon-message',
                goToMovementsButton: 'cells-successful-response #primaryBtn',
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
            case 'payment success':
                await this.successText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarification payment date':
                await this.clarificationsPaymentDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarification payment amount':
                await this.clarificationsAmountPaymentText.waitForDisplayed({timeout: config.wait.M});
                await this.clarificationsAmountPayment.waitForDisplayed({timeout: config.wait.M});
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
            case 'clarification payment reason':
                await this.clarificationsReasonText.waitForDisplayed({timeout: config.wait.M});
                await this.clarificationsReason.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment deadline':
                await this.authorizedPayment.waitForDisplayed({timeout: config.wait.M});
                await this.paymentDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bank':
                await this.bank.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info box':
                await this.infoBox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'shared button':
                await this.sharedButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.exitButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'direct debit block text':
                await this.directDebitBlockText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'go to movements button':
                await this.goToMovementsButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info experience':
                await this.infoExperience.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new ClarificationsManagementCareSuccessPage();
