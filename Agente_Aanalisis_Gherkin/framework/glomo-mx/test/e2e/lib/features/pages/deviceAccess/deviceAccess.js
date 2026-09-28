import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page('DeviceAccess')
class DeviceAccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-deviceAccess[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                fullScreenModal: {
                    component: {
                        ComponentClass: GlomoAlertManager
                    }
                },
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
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}
export default new DeviceAccess();
