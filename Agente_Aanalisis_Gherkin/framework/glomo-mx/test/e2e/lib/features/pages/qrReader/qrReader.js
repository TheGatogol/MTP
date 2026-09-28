import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound } from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import GlomoAlertManager from '../../components/glomo-alert-manager';

class QrReader extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-qrReader[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader,
                    },
                },
                dialogOperations: {
                    component: {
                        ComponentClass: GlomoAlertManager
                    }
                },
                btnReturn: 'cells-molecule-header button#btnLeft',
                qrReaderImg: 'cells-qr-reader #target',
                gp2horusManager: 'glomo-qr-gp2horus-manager'
            },
            requiredElements: [
                'qrReaderImg'
            ]
        });
    }

    async setQrCodeData(qrUrl, pageName) {
        const data = {
            'detail': {
                'resultCode': 'OK',
                'qrType': 'qrcard',
                'raw': qrUrl,
                'qr': qrUrl,
                'redirectTo': pageName
            }
        };
        await this._sendQrCodeData('_handleQRServerResponse', data);
    }
    async _sendQrCodeData(method, data) {
        await this.gp2horusManager.execute({
            script: (method, data) => this[method](data),
            args: [method, data]
        });
    }

    async handleQRConnectorBbva(data) {
        await this.processorManager.execute({
            script: data => this.handleQRCodeData(data),
            args: [data]
        });
    }

    async _screenValidation({ item }) {
        switch (item.toLowerCase()) {
            case 'card name':
                await this.cardName.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async retryButton() {
        await (await this.btnReturn.waitForClickable({timeout: config.wait.M})).click();
    }
}

export default new QrReader();
