import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

class EmergencyZoneToggleCard extends AbstractGlomoPage{

    constructor(){
        super({
            root: '#cells-template-toggleCardsPage[state="active"]',

            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                textDescription: 'cells-text-description',
                listCards: 'cells-switch-list',
                onOrOffCard: 'cells-switch-list iron-collapse ul li div.item-container cells-switch',
                errorMessage: {
                    web: '#cells-template-__cross glomo-alert-manager cells-alert-box#modal.error cells-bottom-modal#modal div#content.content',
                    isWithoutRoot: true,
                },
                successMessage: 'cells-bottom-modal-message cells-bottom-modal cells-atom-message div.message'
            },

            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },

                textDescription: 'cells-text-description-spherica',
                listCards: 'cells-switch-list-spherica',
                onOrOffCard: 'cells-switch-list-spherica iron-collapse ul li div.item-container cells-switch-spherica',

                errorMessage: {
                    web: '#cells-template-__cross glomo-alert-manager-spherica cells-alert-box-spherica#modal.error cells-bottom-modal-spherica#modal div#content.content'
                },

                successMessage: 'cells-bottom-modal-message-spherica cells-bottom-modal-spherica cells-atom-message-spherica div.message'
            },

            requiredElements: [
                'header'
            ]
        });
    }

    async pressToOffCard() {
        await this.onOrOffCard.click();
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.M
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            case 'text description':
                await this.textDescription.waitForDisplayed();
                break;
            case 'list cards':
                await this.listCards.waitForDisplayed();
                break;
            case 'error message':
                await this.errorMessage.waitForDisplayed();
                break;
            case 'success message':
                await this.successMessage.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}
export default new EmergencyZoneToggleCard();
