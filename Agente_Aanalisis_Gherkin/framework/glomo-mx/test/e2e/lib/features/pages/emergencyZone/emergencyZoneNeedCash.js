import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

class EmergencyZoneNeedCash extends AbstractGlomoPage{

    constructor(){
        super({
            root: '#cells-template-emergencyNeedCash[state="active"]',

            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                textDescription: 'cells-text-description',
                needCashBtn: 'glomo-button-list cells-st-button.link button.button-list.emergency-options-cardless-withdrawal-title',
            },

            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },

                textDescription: 'cells-text-description-spherica',
                needCashBtn: 'glomo-button-list-spherica cells-st-button-spherica.link button.button-list.emergency-options-cardless-withdrawal-title'
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
            case 'need cash button':
                await this.needCashBtn.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goToCardlessWithdrawal() {
        await this.needCashBtn.waitForDisplayed({timeout: config.wait.M});
        await this.needCashBtn.scrollIntoView();
        await this.needCashBtn.click();
    }
}
export default new EmergencyZoneNeedCash();
