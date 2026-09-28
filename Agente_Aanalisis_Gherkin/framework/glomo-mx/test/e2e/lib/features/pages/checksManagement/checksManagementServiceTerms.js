import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class ChecksManagementServiceTerms extends AbstractGlomoPage {
    constructor() {

        super({
            root: '#cells-template-checksManagementServiceTerms[state="active"]',
            elements: {
                // header
                header: 'cells-molecule-header-spherica #titleZone',
                closeButton: 'cells-molecule-header-spherica #btnRight',
                image: 'cells-text-description-spherica.checks-section #imageAsTitle',                                
                title: 'cells-text-description-spherica.checks-section .title',
                description: 'cells-text-description-spherica.checks-section .mainDescription',
                bulletsList: 'cells-lists-spherica',
                iconMessageWarning: 'cells-icon-message-spherica.in-page.bottom-separation #principalIcon',         
                iconMessageInfo: 'cells-icon-message-spherica[type="info"]',
                termsTitle: 'cells-text-description-spherica .title',
                termsDescription: 'cells-text-description-spherica .mainDescription',
                acceptButton: 'cells-confirm-buttons-spherica #primaryBtn',
                cancelButton: 'cells-confirm-buttons-spherica #secondaryBtn',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            heroImage: '#modal #modal .main-container .icon-container img'
                        }
                    }
                ],
            },
            requiredElements: [
                'header'
            ],

        });
    }

    async _screenValidation({item, value}) {
        const reverseWaitForVisible = value === 'not visible';

        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'close button':
                await this.closeButton.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'image':
                await this.image.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'description':
                await this.description.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'bullets list':
                await this.bulletsList.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'icon message warning':
                await this.iconMessageWarning.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'icon message info':
                await this.iconMessageInfo.scrollIntoView();
                await this.iconMessageInfo.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'terms title':
                await this.termsTitle.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'terms description':
                await this.termsDescription.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'accept button':
                await this.acceptButton.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'cancel button':
                await this.cancelButton.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
    async _modalElementValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'hero image':
                await this.dialogOperations.additionalElements.heroImage.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item});
        }
    }

    async goBack() {
        await this.closeButton.waitForClickable({timeout: config.wait.M});
        await this.closeButton.click();
    }

    async declineServiceTerms() {
        await this.cancelButton.waitForClickable({timeout: config.wait.M});
        await this.cancelButton.click();
    }

    async acceptServiceTerms() {
        await this.acceptButton.waitForClickable({timeout: config.wait.M});
        await this.acceptButton.click();
    }

    async retryOperative(times) {
        let i = 0;
        while (i < times) {
            await this.dialogOperations.confirmDialog({expectToDisappear: false});
            i++;
        }
    }
}

export default new ChecksManagementServiceTerms();
