import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';
import GlomoAlertManager from '../../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../../components/glomo-alert-manager-spherica';
import AbstractGlomoPage from '../../abstract-glomo-page';

@page()
class SortPocket extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pocketsOrder[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                genericPocket: 'bbva-draggable-default-item__NTH__ bbva-icon-87693',
                firstPocket: 'bbva-draggable-default-item[id="1"]',
                lastPocket: 'bbva-draggable-default-item[id="3"]',
                description: '.description',
                save: '#primaryBtn',
                alert: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            acceptBtn: 'div.buttons-container cells-st-button #acceptButton',
                            cancelBtn: 'div.buttons-container cells-st-button #cancelButton',
                            paragraphIcon: 'div.paragraph-template iron-icon:not([style="display: none;"])',
                            descriptions: 'div.paragraph-template .paragraph-template-text:not([style="display: none;"])',
                        }
                    }
                ],
                successAlert: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            icon: 'cells-atom-message cells-atom-icon',
                            text: 'cells-atom-message p',
                        }
                    }
                ],
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                alert: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            acceptBtn: 'div.buttons-container cells-st-button-spherica #acceptButton',
                            cancelBtn: 'div.buttons-container cells-st-button-spherica #cancelButton',
                            paragraphIcon: 'div.paragraph-template iron-icon:not([style="display: none;"])',
                            descriptions: 'div.paragraph-template .paragraph-template-text:not([style="display: none;"])'
                        }
                    }
                ],
                successAlert: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            icon: 'cells-atom-message-spherica cells-atom-icon-spherica',
                            text: 'cells-atom-message-spherica p'
                        }
                    }
                ],
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
            case 'first pocket':
                await this.firstPocket.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'save':
                await this.save.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new SortPocket();
