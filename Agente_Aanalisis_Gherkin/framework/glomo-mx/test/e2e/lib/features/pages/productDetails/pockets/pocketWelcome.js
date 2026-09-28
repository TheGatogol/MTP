import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';

@page()
class PocketsWelcome extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pocketsWelcome[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                //modal de entrada
                pocket: {
                    close: '#btnRight',
                    icon: '#image',
                    title: 'cells-heading[role="heading"]',
                    description: '.cells-card-advice-list-item-pockets',
                    info: '.icon-message',
                    continue: '.primary',
                },
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async continueToCreatePocket() {
        await (await (await this.pocket.continue.waitForDisplayed({timeout: config.wait.XL}))
            .waitForClickable({timeout: config.wait.M}))
            .click();

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'close':
                await this.pocket.close.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon':
                await this.pocket.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.pocket.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.pocket.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue':
                await this.pocket.continue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info':
                await this.pocket.info.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PocketsWelcome();
