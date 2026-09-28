
import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound} from '@csqe/radish';

//Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';

class PatrimonialAsistance extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-patrimonialEquitityAssistancePage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                myTalksButton: 'cells-confirm-buttons cells-st-button .button__primary'
            },
            requiredElements: [
                'header',
                'myTalksButton'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PatrimonialAsistance();
