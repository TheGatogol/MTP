import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

class EmergencyZoneStolenCard extends AbstractGlomoPage{

    constructor(){
        super({
            root: '#cells-template-emergencyLostCard[state="active"]',

            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                lockCardBtn: 'glomo-button-list cells-st-button.link button.button-list.emergency-options-lock-card-title',
                toggleCardBtn: 'glomo-button-list cells-st-button.link button.button-list.emergency-options-toggle-card-title'
            },

            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },

                lockCardBtn: 'glomo-button-list-spherica cells-st-button-spherica.link button.button-list.emergency-options-lock-card-title',
                toggleCardBtn: 'glomo-button-list-spherica cells-st-button-spherica.link button.button-list.emergency-options-toggle-card-title'
            },

            requiredElements: [
                'header'
            ]
        });
    }

    async pressLockCardBtn() {
        await this.lockCardBtn.click();
    }

    async pressToggleCardBtn() {
        await this.toggleCardBtn.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            case 'lock card button':
                await this.lockCardBtn.waitForDisplayed();
                break;
            case 'toggle card button':
                await this.toggleCardBtn.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}
export default new EmergencyZoneStolenCard();
