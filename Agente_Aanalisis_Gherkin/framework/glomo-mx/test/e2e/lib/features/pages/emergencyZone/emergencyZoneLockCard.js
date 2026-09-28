import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

class EmergencyZoneLockCard extends AbstractGlomoPage{

    constructor(){
        super({
            root: '#cells-template-lockCardsPage[state="active"]',

            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                textDescription: 'cells-text-description',
                listCards: 'global-products-list'

            },

            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },

                textDescription: 'cells-text-description-spherica',
                listCards: 'global-products-list-spherica'
            },

            requiredElements: [
                'header'
            ]
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
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}
export default new EmergencyZoneLockCard();
