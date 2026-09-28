import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class SecurityTipsDashboard extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-securityTipsPage[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                backButton: 'cells-molecule-header-spherica #btnLeft',
                bbvaPanelInfo: 'bbva-panel-info-spherica .content bbva-type-link',
                mainTipIllustration: 'bbva-panel-info-spherica img',
                cellsLinkList: 'button.button.link',
                bbvaListClip3Tips: 'bbva-clip-list-spherica .microillustration-basic-text:nth-of-type(1) .text-section bbva-type-link',
                bbvaListClipSocialMediaSecurity: 'bbva-clip-list-spherica .microillustration-basic-text:nth-of-type(2)',

                btnHeaderClose: 'button.btn--transparent.btn-close',
                lineaBbva: 'cells-molecule-link-icon.icon-size-24.icon-size-26.cells-molecule-link-icon--block"',
                btnAccepted: 'button #acceptButton',

                principalSeeMoreLink: '[data-tag-name="bbva-panel-info-spherica"] .container .content [data-tag-name="bbva-type-link"]',
                secondaryTipIllustration1: 'bbva-clip-list-spherica .microillustration-basic-text:nth-of-type(1) [data-tag-name="bbva-clip-microillustration"] img',
                seeMoreLink1: 'bbva-clip-list-spherica .microillustration-basic-text:nth-of-type(1) .text-section [data-tag-name="bbva-type-link"]',
                secondaryTipIllustration2: 'bbva-clip-list-spherica .microillustration-basic-text:nth-of-type(2) [data-tag-name="bbva-clip-microillustration"] img',
                seeMoreLink2: 'bbva-clip-list-spherica .microillustration-basic-text:nth-of-type(2) .text-section [data-tag-name="bbva-type-link"]',

                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            btnAccept: '.buttons-container button#acceptButton',
                        }
                    }
                ],
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async acceptInfoTip() {
        await this.dialogOperations.additionalElements.btnAccept.waitForDisplayed({timeout: config.wait.XL});
        await this.dialogOperations.additionalElements.btnAccept.click();
    }

    async accessToSecurityGlossary() {
        await this.cellsLinkList.waitForDisplayed({timeout: config.wait.XXL});
        await this.cellsLinkList.waitForClickable({timeout: config.wait.XXXL});
        await this.cellsLinkList.click();
    }

    async accessToThreeTips() {
        await this.bbvaListClip3Tips.waitForDisplayed({timeout: config.wait.XL});
        await this.bbvaListClip3Tips.click();
    }

    async goBack() {
        await this.header.actionLeft();
    }

    async accesToTips({securityTip}) {
        switch (securityTip.toLowerCase()) {
            case 'principalsecuritytip':
                await this.principalSeeMoreLink.waitForDisplayed({timeout: config.wait.XXL});
                await this.principalSeeMoreLink.click();
                break;
            case 'securitytip1':
                await this.seeMoreLink1.waitForDisplayed({timeout: config.wait.XL});
                await this.seeMoreLink1.click();
                break;
            case 'securitytip2':
                await this.seeMoreLink2.waitForDisplayed({timeout: config.wait.XL});
                await this.seeMoreLink2.click();
                break;
            default:
                throw new Error(`${securityTip} link is not available to navigate to...`);
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed();
                break;
            case 'main illustration':
                await this.mainTipIllustration.waitForDisplayed();
                break;
            case 'back button':
                await this.backButton.waitForDisplayed();
                break;
            case 'content panel info':
                await this.bbvaPanelInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'security glossary':
                await this.cellsLinkList.waitForDisplayed();
                break;
            case 'list 3 tips':
                await this.bbvaListClip3Tips.waitForDisplayed();
                break;
            case 'secondary illustration 1':
                await this.secondaryTipIllustration1.waitForDisplayed();
                break;
            case 'secondary illustration 2':
                await this.secondaryTipIllustration2.waitForDisplayed();
                break;
            case 'list social security':
                await this.bbvaListClipSocialMediaSecurity.waitForDisplayed();
                break;
            case 'button close':
                await this.btnHeaderClose.waitForDisplayed();
                break;
            case 'header tip':
                await this.dialogOperations.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'img tip':
                await this.dialogOperations.heroImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button close tip':
                await this.dialogOperations.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept tip':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message tip':
                await this.dialogOperations.templateParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new SecurityTipsDashboard();
