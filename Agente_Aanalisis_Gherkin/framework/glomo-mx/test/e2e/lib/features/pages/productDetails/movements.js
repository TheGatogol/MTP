import {page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import BbvaHeaderMain from '../../components/bbva-header-main';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class Movements extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-cardTransactions[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain
                    }
                },
                // Buttons
                helpButton: '#btn-info',
                iconMessage: '[data-tag-name="bbva-notification-message"] .container-text.has-title',
                movement: 'card-information-transactions-list-searching-enrichment-card[item="item-0"]',
                movementClarificationsTransit: '.cards-container [text*="__TEXT__"]',
                noMovements: '[class="last-page-text"]',
                movementsInfo: '[data-tag-name="bbva-notification-message"] .container-text.has-title',
                movementHelpModal: '[class="modal-header"]',
                movementHelpHeader: '[class="modal-header"] [text*="modal-header-text"]',
                movementHelpButtonClose: '#helpModalHeader .button-1:not(.no-title) #btn-close',
                movementHelpDescription: '[class="modal-main"][text*="info-modal-body"]',
                paymentWithPointsLabel: '[data-tag-name="bbva-help-modal"] card-information-transactions-list-searching-enrichment-card[item="item-0"] .special-tags-container [data-tag-name="bbva-badge-default"]',
                movementInfo: {
                    properties: {
                        root: 'card-information-transactions-list-searching-enrichment-card[item="item-0"]',
                    },
                    movementDate: 'bbva-type-date',
                    movementAmount: '.purchase-concept-container bbva-type-amount',
                    movementCategory: '.purchase-info-container bbva-type-text',
                },

                dialogOperations: [
                    BbvaHelpModal,
                    {
                        additionalElements: {
                            helpMessage:  '.help-modal',
                        }
                    }
                ],
            },
            requiredElements: [
                'iconMessage',
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'help message':
                await this.dialogOperations.additionalElements.helpMessage.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'movement date':
                await this.movementInfo.movementDate.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'movement amount':
                await this.movementInfo.movementAmount.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'movement category':
                await this.movementInfo.movementCategory.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement':
                await this.movement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'help button':
                await this.helpButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movements info':
                await this.movementsInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement help modal':
                await this.movementHelpModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'movement help header':
                await this.movementHelpHeader.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'movement help button close':
                await this.movementHelpButtonClose.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'movement help description':
                await this.movementHelpDescription.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'no movements':
                await this.noMovements.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item});
        }
    }

    async selectMovementProductDetailForTransit(movementSelector){
        const movementExist = user.products.cards[0].movements.find( currentElement => currentElement.data.concept === movementSelector);
        if(user.products.cards[0].movements && movementExist) {
            const auxElement = this.movementClarificationsTransit.specifySelector({placeholder: '__TEXT__', value: movementSelector});
            await auxElement.waitForAnimation({timeout: config.wait.M});
            await auxElement.waitForDisplayed({timeout: config.wait.S});
            await auxElement.click();
        }
    }

    async selectMovement() {
        await this.movement.waitForDisplayed({timeout: config.wait.L});
        await this.movement.waitForClickable({timeout: config.wait.L});
        await this.movement.click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.S, timeoutToDisappear: config.wait.M});
    }

    async helpModal() {
        await this.helpButton.waitForClickable({timeout: config.wait.M});
        await this.helpButton.click();
    }

    async selectMovementByDataSelector(dataSelector) {
        if (dataSelector === 'i want label') {
            await this.paymentWithPointsLabel.waitForDisplayed({timeout: config.wait.M});
            await this.paymentWithPointsLabel.click();
        } else {
            await this.movement.waitForDisplayed({timeout: config.wait.M});
            await this.movement.click();
        }
    }
}
export default new Movements();
