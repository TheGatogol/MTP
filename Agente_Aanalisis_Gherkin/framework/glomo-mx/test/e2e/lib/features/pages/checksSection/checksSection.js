import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

//Components
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';
@page()
class ChecksSection extends AbstractGlomoPage {
    constructor() {
        
        super({
            root: '#cells-template-checksSection[state="active"]',
            elements: {
                // header
                title: 'cells-molecule-header-spherica #titleZone',
                backButton: 'cells-molecule-header-spherica #btnLeft',
                containerManagement: {
                    properties: {
                        root: 'cells-link-list-wrapper-spherica'
                    },
                    management: '#glomo-checks-management-access-selected cells-link-list-spherica',
                    titleDeposit: '#glomo-checks-deposits-access-selected cells-link-list-spherica .content__title',
                    descriptionDeposit: '#glomo-checks-deposits-access-selected cells-link-list-spherica .content__data',
                    titleManagement: '#glomo-checks-management-access-selected cells-link-list-spherica .content__title',
                    descriptionManagement: '#glomo-checks-management-access-selected cells-link-list-spherica .content__data',
                },
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica,
                    },
                },
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        paragraphElements:{
                            iconMessage: 'div.icon-message-container',
                        },
                        additionalElements:{
                            bulletList: 'cells-lists-spherica',
                            contentTitle: '#modal .paragraph-template',
                        },
                    }
                ]
            },
            defaultSphericaElements: [
                'GlomoAlertManager'
            ],
            requiredElements: [
                'title'
            ],
        });
    }

    async _screenValidation({item, value}) {
        const reverseWaitForVisible = value === 'not visible';

        switch (item.toLowerCase()) {
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'back button':
                await this.backButton.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'main text deposit':
                await this.containerManagement.titleDeposit.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'short description deposit':
                await this.containerManagement.descriptionDeposit.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                break;
            case 'main text management':
                await this.containerManagement.titleManagement.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                if (value === 'disabled') {
                    await this.containerManagement.management.waitForEnabled({timeout: config.wait.M, reverse: true});
                }
                break;
            case 'short description management':
                await this.containerManagement.descriptionManagement.waitForDisplayed({timeout: config.wait.M, reverse: reverseWaitForVisible});
                if (value === 'disabled') {
                    await this.containerManagement.management.waitForEnabled({timeout: config.wait.M, reverse: true});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'image':
                await this.dialogOperations.mainContainerIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bullet list':
                await this.dialogOperations.additionalElements.bulletList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'content title':
                await this.dialogOperations.additionalElements.contentTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon message':
                await this.dialogOperations.paragraph.iconMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.ACCEPT_BUTTON}, {forceScroll: true});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }

    async goBack() {
        await this.backButton.click();
    }

    async goToSection(option) {
        const optionCap = option.charAt(0).toUpperCase() + option.slice(1);
        await this.containerManagement[`title${optionCap}`].waitForEnabled({timeout: config.wait.M});
        await this.containerManagement[`title${optionCap}`].click();
    }

    async retryOperative(times) {
        let i = 0;
        while (i < times) {
            await this.errorDialogOperations.confirmDialog({expectToDisappear: false});
            i++;
        }
    }

    async acceptServiceTerms() {
        await this.dialogOperations.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.confirmDialog();
    }

    async navigationAttempt(page) {
        await this.goToSection(page);
        await this.dialogOperations.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.confirmDialog({expectToDisappear: false});
    }

    async goNextPage() {
        await this.containerManagement.titleDeposit.waitForClickable({timeout: config.wait.M});
        await this.containerManagement.titleDeposit.click();
    }

    async acceptServiceTermsSingleButton() {
        await this.dialogOperations.waitForDisplayed({timeout: config.wait.M});
        await this.dialogOperations.acceptBtn.click();
    }
}

export default new ChecksSection();
