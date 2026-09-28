import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

//Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class FinancialHealthPushAdviceFeedback extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-financialHealthPushAdviceFeedback[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                opinatorIframe: '#cellsIframe',
            },
            requiredElements: ['header']
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'opinator container':
                await this.opinatorIframe.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new FinancialHealthPushAdviceFeedback();
