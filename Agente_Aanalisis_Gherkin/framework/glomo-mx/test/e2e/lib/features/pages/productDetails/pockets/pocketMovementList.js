import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';
import AbstractGlomoPage from '../../abstract-glomo-page';

@page()
class PocketMovementList extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pocketsMovementsList[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                list: 'cells-transactions-list #-transactions .transaction-group',
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                list: 'cells-transactions-list-spherica #-transactions .transaction-group'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'list of activity':
                await this.list.waitForDisplayed({timeout: config.wait.XL});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PocketMovementList();
