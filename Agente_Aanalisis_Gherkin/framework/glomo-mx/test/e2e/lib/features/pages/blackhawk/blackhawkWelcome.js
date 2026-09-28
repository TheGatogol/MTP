import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';

import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica.js';

@page()
class BlackhawkWelcome extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-blackhawkWelcome[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                moreInfoBtn: 'cells-confirm-buttons cells-st-button.link',
                agreeWelcomeBtn: 'cells-confirm-buttons div.actions cells-st-button.primary button'
            },
            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                moreInfoBtn: 'cells-confirm-buttons-spherica cells-st-button-spherica.link',
                agreeWelcomeBtn: 'cells-confirm-buttons-spherica div.actions cells-st-button-spherica button.button__secondary'
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async accessToInformation() {
        await (await this.moreInfoBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async accessToListCards() {
        await (await this.agreeWelcomeBtn.waitForClickable({timeout: config.wait.M})).click();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }

}

export default new BlackhawkWelcome();
