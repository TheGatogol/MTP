import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class OperationJustification extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-operationJustification[state="active"]',
            elements: {
                header: '#bbva-help-modal-no-documents #helpModalHeader header',
                closeButton: '#bbva-help-modal-no-documents #helpModalHeader bbva-type-icon',
                titleModal: '#bbva-help-modal-no-documents #title-text',
                descriptionModal: '#bbva-help-modal-no-documents #helpModalContent bbva-type-text',
                footerButton: '#bbva-help-modal-no-documents bbva-button-default',
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'exit button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title modal':
                await this.titleModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description modal':
                await this.descriptionModal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'footer button':
                await this.footerButton.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new OperationJustification();
