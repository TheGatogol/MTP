import AbstractGlomoPage from '../abstract-glomo-page';

import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page()
class Assistance extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-help[state="active"]',
            elements: {
                // upper side
                cellIcon: '.help__header img',
                firstSubtitle: 'cells-text-description p.title',
                header: 'h1#titleZone',
                backButton: 'button#btnLeft',

                // middle side
                list: '.help__content cells-lists',
                secondSubtitle: '.help__content--message p',
                infoIcon: 'cells-icon-message iron-icon',
                infoMessage: 'cells-icon-message span.message',

                callButton: '#helpActionBtn',
                phoneNumberLink: '#secondaryBtn',

                phoneList: '.help__content--phones-list'

            },
            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                // upper side
                cellIcon: '.help__header img',
                firstSubtitle: 'cells-text-description-spherica',
                backButton: 'cells-molecule-header-spherica div.left-container #btnLeft',

                // middle side
                list: '.help__content cells-lists-spherica',
                secondSubtitle: '.help__content--message-spherica p',
                infoIcon: 'cells-icon-message-spherica iron-icon',
                infoMessage: 'cells-icon-message-spherica span.message',

                callButton: 'cells-st-button-spherica.default #helpActionBtn',
                phoneNumberLink: '#secondaryBtn',

                phoneList: '.help__content--phones-list',            
            },
            requiredElements: ['callButton'],
        });
    }

    async goBack() {
        await this.backButton.click();
    }

    async callAssistance() {
        await this.callButton.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'mobile icon':
                await this.cellIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.firstSubtitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list':
                await this.list.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second subtitle':
                await this.secondSubtitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info icon':
                await this.infoIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info message':
                await this.infoMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'call button':
                await this.callButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone number link':
                await this.phoneNumberLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone list':
                await this.phoneList.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new Assistance();
