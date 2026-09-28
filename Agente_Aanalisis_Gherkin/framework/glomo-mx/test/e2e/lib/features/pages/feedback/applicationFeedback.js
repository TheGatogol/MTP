import AbstractGlomoPage from '../abstract-glomo-page';

import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

// Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class ApplicationFeedback extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-applicationFeedback[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                feedbackWebContainer: '#cellsIframe',
                exitAlert: {
                    component: {
                        ComponentClass: GlomoAlertManager
                    }
                }
            },

            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                exitAlert: {
                    component: {
                        ComponentClass: GlomoAlertManagerSpherica
                    }
                }
            },

            requiredElements: [
                'header',
                'feedbackWebContainer',
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            case 'Feedback Exit Button':
                await this.header.primaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'Feedback External Page':
                await this.feedbackWebContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async leaveTheProcess() {
        await this.header.waitForDisplayed({isBtnLeft: true});
        await this.header.actionLeft();
        await this.exitAlert.confirmDialog();
    }
}

export default new ApplicationFeedback();
