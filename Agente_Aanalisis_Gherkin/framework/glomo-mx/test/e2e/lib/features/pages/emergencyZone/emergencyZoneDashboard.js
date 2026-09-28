import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

class EmergencyZoneDashboard extends AbstractGlomoPage{

    constructor(){
        super({
            root: '#cells-template-emergencyZone[state="active"]',

            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                stolenCardBtn: 'glomo-button-list cells-st-button button.button-list.emergency-options-title-lost-card',
                changePasswordBtn: 'glomo-button-list cells-st-button button.button-list.emergency-options-title-change-password',
                needCashBtn: 'glomo-button-list cells-st-button button.button-list.emergency-options-title-need-cash',
                callBbvaBtn: 'glomo-button-list cells-st-button button.button-list.emergency-options-title-call-bbva-line'

            },

            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },

                stolenCardBtn: 'glomo-button-list-spherica cells-st-button-spherica button.button-list.emergency-options-title-lost-card',
                changePasswordBtn: 'glomo-button-list-spherica cells-st-button-spherica button.button-list.emergency-options-title-change-password',
                needCashBtn: 'glomo-button-list-spherica cells-st-button-spherica button.button-list.emergency-options-title-need-cash',
                callBbvaBtn: 'glomo-button-list-spherica cells-st-button-spherica button.button-list.emergency-options-title-call-bbva-line'
            },

            requiredElements: [
                'header'
            ]
        });
    }

    async pressStolenCardBtn() {
        await this.stolenCardBtn.waitForEnabled({timeout: config.wait.XL});
        await this.stolenCardBtn.waitForDisplayed({timeout: config.wait.M});
        await this.stolenCardBtn.click();
    }
    async pressChangePassword() {
        await this.changePasswordBtn.waitForDisplayed({timeout: config.wait.M});
        await this.changePasswordBtn.click();
    }
    async pressNeedCash() {
        await this.needCashBtn.waitForDisplayed({timeout: config.wait.M});
        await this.needCashBtn.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            case 'stolen card button':
                await this.stolenCardBtn.waitForDisplayed();
                break;
            case 'change password button':
                await this.changePasswordBtn.waitForDisplayed();
                break;
            case 'need cash button':
                await this.needCashBtn.waitForDisplayed();
                break;
            case 'call bbva button':
                await this.callBbvaBtn.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}
export default new EmergencyZoneDashboard();
