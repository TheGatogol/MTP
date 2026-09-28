import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager'; // eslint-disable-line no-unused-vars
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
@page()
class DigitalActivationCall extends AbstractGlomoPage {
    constructor() {
        super({
            id: 'DigitalActivation',
            root: '#cells-template-digitalActivationCall[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                callButton: 'cells-confirm-buttons-spherica #primaryBtn'
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
            case 'call button':
                await this.callButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async exitHeader() {
        await this.header.actionRight();
    }

    async selectCall() {
        await (await this.callButton.waitForClickable({timeout: config.wait.M}))
            .click();
    }
}

export default new DigitalActivationCall();
