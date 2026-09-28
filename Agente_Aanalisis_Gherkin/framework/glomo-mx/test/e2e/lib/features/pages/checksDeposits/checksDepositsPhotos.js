import AbstractGlomoPage from '../abstract-glomo-page';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import GlomoFileUploader from '../../components/glomo-file-uploader';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
@page('checksDepositsPhotos')

class ChecksDepositsPhotos extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-checksDepositsPhotos[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                fileUploader: {
                    component: {
                        ComponentClass: GlomoFileUploader
                    }
                },
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        additionalElements:{
                            instructionsTitle: '.templates-wrapper .text-with-icon p',
                        }
                    }
                ]
            },
            requiredElements: ['header']
        });
    }

    /**
     * Through this function and the modal-specific step, we will be able to validate our modal.
     * By default, this function uses the elementValidation function from glomo-alert-manager
     *
     * Screen specific implementations or terminology of our modal can be implemented here,
     * using the default option for the glomo-alert-manager default validation function
     * @param {object} [options] Options passed as columns on step
     */
    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'instructions title':
                await this.dialogOperations.additionalElements.instructionsTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                /**
                 * By default we execute the basic modalElementValidation to also use the basic glomo-alert-manager validation process
                 */
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.operationTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close button':
                await this.header.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image front instructions':
                await this.fileUploader.frontFileDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'take front picture link':
                await this.fileUploader.frontFileLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image back instructions':
                await this.fileUploader.backFileDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'take back picture link':
                await this.fileUploader.backFileLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'disabled continue button':
                await this.fileUploader.buttons.primaryBtn.waitForEnabled({timeout: config.wait.M, reverse: true});
                break;
            case 'cancel link':
                await this.fileUploader.buttons.secondaryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async takeFrontPicture() {
        await this.fileUploader.uploadFrontFile();
    }

    async takeBackPicture() {
        await this.fileUploader.uploadBackFile();
    }

    async frontHelpPictureIcon() {
        await this.fileUploader.frontHelpIconButton();
    }

    async backHelpPictureIcon() {
        await this.fileUploader.backHelpIconButton();
    }
}

export default new ChecksDepositsPhotos();
