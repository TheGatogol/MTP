import AbstractGlomoPage from '../abstract-glomo-page';

import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page()
class FeedbackContextualNPS extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-feedback[state="active"]',
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
                }
            },

            requiredElements: [
                'header',
                'feedbackWebContainer',
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnRight: true});
                break;
            case 'feedback exit button':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'feedback left button':
                await this.header.primaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'feedback external page':
                await this.feedbackWebContainer.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async exitsFeedback() {
        await this.header.waitForDisplayed({isBtnRight: true});
        await this.header.actionRight();
        await this.exitAlert.confirmDialog();
    }

    async leavesFeedback() {
        await this.header.waitForDisplayed({isBtnLeft: true});
        await this.header.actionLeft();
        await this.exitAlert.confirmDialog();
    }
}

export default new FeedbackContextualNPS();
