import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeAmountInput from '../../components/cells-molecule-amount-input';
import CellsIconMessage from '../../components/cells-icon-message';
import CellsConfirmButtons from '../../components/cells-confirm-buttons';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
@page('checksDepositsCheckAggregator')
class ChecksDepositsCheckAggregator extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-checksDepositsCheckAggregator[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                title: '.info-section glomo-list-select cells-text-description p.title',
                information: '.info-section glomo-list-select cells-text-description p.description.mainDescription',
                addPhotosLink: '.info-section glomo-list-select cells-st-button.link-button button',
                checkBandCodeInput: 'cells-molecule-input#checkBandCode .field-icons-wrapper input',
                checkBandCodeInputLabel: 'cells-molecule-input#checkBandCode cells-icon-message',
                checkFolioInput: 'cells-molecule-input#checkFolio .field-icons-wrapper input',
                checkFolioInputLabel: 'cells-molecule-input#checkFolio cells-icon-message',
                additionalInfoTitle: '.info-section cells-text-description p.title',
                additionalInfoDescription: '.info-section cells-text-description p.description.mainDescription',
                amountInput: {
                    component: {
                        ComponentClass: CellsMoleculeAmountInput
                    }
                },
                additionalInfoMessage: {
                    component: {
                        ComponentClass: CellsIconMessage
                    }
                },
                buttons: {
                    component: {
                        ComponentClass: CellsConfirmButtons
                    }
                },
            },
            requiredElements: ['header']
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.operationTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image description':
                await this.information.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'take picture link':
                await this.addPhotosLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disabled band code input':
                await this.checkBandCodeInput.waitForEnabled({reverse:true});
                break;
            case 'band code information':
                await this.checkBandCodeInputLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disabled check folio input':
                await this.checkFolioInput.waitForEnabled({reverse:true});
                break;
            case 'check folio information':
                await this.checkFolioInputLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'additional information title':
                await this.additionalInfoTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'additional information description':
                await this.additionalInfoDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount input':
                await this.amountInput.inputField.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount information':
                await this.amountInput.infoMessageSpan.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add check info box':
                await this.additionalInfoMessage.infoText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disabled save button':
                await this.buttons.primaryBtn.waitForEnabled({timeout: config.wait.M, reverse: true});
                break;
            case 'cancel link':
                await this.buttons.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async goToChecksDepositsPhotos() {
        await this.addPhotosLink.waitForClickable({timeout: config.wait.M});
        await this.addPhotosLink.click();
    }
}

export default new ChecksDepositsCheckAggregator();
