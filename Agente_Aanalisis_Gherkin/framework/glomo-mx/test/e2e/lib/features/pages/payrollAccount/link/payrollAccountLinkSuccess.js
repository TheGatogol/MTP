import AbstractGlomoPage from '../../abstract-glomo-page.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHeaderMain from '../../../components/bbva-header-main';
import BbvaHeaderMainSpherica from '../../../components/bbva-header-main-spherica';
import GlomoAlertManager from '../../../components/glomo-alert-manager.js';

@page('payrollAccountLinkSuccess')
class PayrollAccountLinkSuccess extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-payrollLinkSuccess[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain
                    }
                },
                back: 'bbva-header-main #btn-close',

                imageBanner: 'bbva-panel-info div.image',
                titleSuccess: 'bbva-panel-info div.content',
                infoMessage: 'bbva-notification-message',
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements:{
                            buttonAccept: '#modal #acceptButton',
                        }
                    }
                ],
            },
            elementsSpherica: {
                header: BbvaHeaderMainSpherica,
                back: 'bbva-header-main-spherica #btn-close'
            },
            requiredElements: [
                'header',
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.back.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image success':
                await this.imageBanner.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.titleSuccess.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info message':
                await this.infoMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.header.buttonRightPrimary.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async closeSuccessPage({button}) {
        switch (button.toLowerCase()) {
            case 'header button':
                await this.back.waitForClickable({timeout: config.wait.M});
                await this.back.click();
                break;
            case 'page button':
                await this.header.buttonRightPrimary.waitForClickable({timeout: config.wait.M});
                await this.header.buttonRightPrimary.click();
                break;
            default:
                throw new Error(`${button} is an invalid button.`);
        }
    }
}

export default new PayrollAccountLinkSuccess();
