import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica.js';

@page()
class BlackhawkInformation extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-blackhawkInformation[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                informationText1: 'cells-oc-banner.banner#first-info',
                informationText2: 'cells-oc-banner.banner#second-info',
                informationText3: 'cells-oc-banner.banner#third-info',
                agreeInfoButton: 'cells-confirm-buttons cells-st-button'
            },
            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                informationText1: 'cells-oc-banner-spherica.banner#first-info',
                informationText2: 'cells-oc-banner-spherica#second-info',
                informationText3: 'cells-oc-banner-spherica.banner#third-info',
                agreeInfoButton: 'cells-confirm-buttons-spherica .button__primary'
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'information text 1':
                await (this.informationText1.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'information text 2':
                await (this.informationText2.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'information text 3':
                await this.informationText3.scrollIntoView();
                await (this.informationText3.waitForDisplayed({timeout: config.wait.M}));
                break;
            case 'agree info button':
                await (this.agreeInfoButton.waitForDisplayed({timeout: config.wait.M}));
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new BlackhawkInformation();
