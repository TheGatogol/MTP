import AbstractGlomoPage from '../abstract-glomo-page';

import {ScreenValidationKeyNotFound} from '@csqe/radish';

// Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';

class HelpSearchDetail extends AbstractGlomoPage{
    constructor(){
        super({
            root: '#cells-template-helpSectionDetail[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                bbvaAnswer: 'bbva-card-article'
            },
            requiredElements: ['header'],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'bbva answer':
                await this.bbvaAnswer.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}
export default new HelpSearchDetail();
