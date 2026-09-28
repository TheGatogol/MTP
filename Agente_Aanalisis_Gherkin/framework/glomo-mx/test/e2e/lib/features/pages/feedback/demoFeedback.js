import AbstractGlomoPage from '../abstract-glomo-page';

import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

// Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import GlomoButtonList from '../../components/glomo-button-list';

@page()
class DemoFeedback extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-demoFeedback[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                buttonList: {
                    component: {
                        ComponentClass: GlomoButtonList
                    }
                }
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessDemoFeedbackTransferSuccess() {
        await this.buttonList.clickButton(6);
    }

    async accessDemoFeedbackCardlessWithdrawalSuccess() {
        await this.buttonList.clickButton(7);
    }

    async closeOperative() {
        await this.accessDemoFeedbackTransferSuccess();
        await this.waitUntilSpinnerVeil({timeoutToAppear: config.wait.XS, timeoutToDisappear: config.wait.M});
    }
}

export default new DemoFeedback();
