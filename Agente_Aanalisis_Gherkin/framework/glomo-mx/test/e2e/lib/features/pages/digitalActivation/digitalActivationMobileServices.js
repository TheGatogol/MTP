import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
@page()
class DigitalActivationMobileServices extends AbstractGlomoPage {
    constructor() {
        super({
            id: 'DigitalActivation',
            root: '#cells-template-digitalActivationMobileServices[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                }
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'exit header button':
                await this.header.waitForDisplayed({isBtnRight: true, isBtnLeft: false});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async exitHeader() {
        await this.header.actionRight();
    }
}

export default new DigitalActivationMobileServices();
