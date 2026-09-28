import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

class EmergencyZoneChangePassword extends AbstractGlomoPage{

    constructor(){
        super({
            root: '#cells-template-emergencyChangePassword[state="active"]',

            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                textDescription: 'cells-text-description',
                changePwdBtn: 'glomo-button-list cells-st-button.link button.button-list.emergency-options-change_password_title',

            },

            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },

                textDescription: 'cells-text-description-spherica',
                changePwdBtn: 'glomo-button-list-spherica cells-st-button-spherica.link button.button-list.emergency-options-change_password_title'
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
            case 'change password button':
                await this.changePwdBtn.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}
export default new EmergencyZoneChangePassword();
