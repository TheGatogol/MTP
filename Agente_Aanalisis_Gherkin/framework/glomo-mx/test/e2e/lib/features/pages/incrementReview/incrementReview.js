import {page, ScreenValidationKeyNotFound } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

@page('incrementReview')
class IncrementReview extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-incrementReview[state="active"]',
            elements: {
                titleHeader: '#titleZone',
                header: CellsMoleculeHeaderSpherica
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }
}

export default new IncrementReview();
