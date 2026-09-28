import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

//Components
import BbvaPanelInfo from '../../components/bbva-panel-info';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsConfirmButtons from '../../components/cells-confirm-buttons';
import GlomoAlertManager from '../../components/glomo-alert-manager';

@page('rewardOriginCard')
class RewardOriginCard extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-rewardOriginCardPage[state="active"]',
            elements: {
                //Header
                header: CellsMoleculeHeader,
                subHeader: '#skeleton1 section > div > cells-atom-subheader',
                product: '#skeleton1 cells-product-item:nth-of-type(1)',
                buttonPrimary: 'cells-confirm-buttons #primaryBtn',
                panelInfo: BbvaPanelInfo,
                secundaryButton: 'cells-confirm-buttons #secondaryBtn',
                imageCard: '#skeleton1 #cardCover cells-molecule-card-cover #image',
                acceptButton: CellsConfirmButtons,
                dialogOperations: [
                    GlomoAlertManager
                ]
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subHeader':
                await this.subHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product':
                await this.product.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button primary':
                await this.buttonPrimary.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image':
                await this.panelInfo.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'panel content':
                await this.panelInfo.content.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'secundary button':
                await this.secundaryButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal icon inactive raffle':
                await this.dialogOperations.heroImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title inactive raffle':
                await this.dialogOperations.titles.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal description inactive raffle':
                await this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal accept button inactive raffle':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal icon without points':
                await this.dialogOperations.paragraphIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title without points':
                await this.dialogOperations.titles.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal description without points':
                await this.dialogOperations.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal accept button without points':
                await this.dialogOperations.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image card':
                await this.imageCard.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async selectCard() {
        await (await (await this.product.waitForDisplayed({timeout: config.wait.L}))
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }
}

export default new RewardOriginCard();

