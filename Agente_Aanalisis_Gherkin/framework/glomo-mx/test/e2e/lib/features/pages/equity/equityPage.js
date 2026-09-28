import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound } from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

class EquityPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-equity[state="active"]',
            elements: {
                header: CellsMoleculeHeaderSpherica,
                amount: 'cells-product-summary-equity-spherica .summary-content .main-items cells-key-values-spherica div.value',
                moreInfo: 'cells-product-summary-equity-spherica cells-product-summary-spherica #moreInfoButton',
                transferButton: 'cells-operations-list-indicators-spherica li[data-selector="transfer"] button.link',
                contactButton: 'cells-operations-list-indicators-spherica li[data-selector="assistance"] button.link',
                aliasButton: 'cells-operations-list-indicators-spherica li[data-selector="editAlias"] button.link',
                newFundButton:'cells-operations-list-indicators-spherica li[data-selector="newFund"] button.link',
                investmentList: '#equity-contracts-list .list .list',
                expandableAccordion: '#equity-contracts-list .list .list .expandable-accordion .right-icon',
                listSwipe: '#equity-contracts-list .list .list .expandable-accordion #__fund__ bbva-list-badge-spherica .content .title',
                aliasText: 'cells-molecule-header #titleZone',
                greenModal: ' #message .message .message__container',
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                amount: 'cells-product-summary-equity-spherica div.summary-content div.main-items ul li cells-key-values-spherica div.value',
                moreInfo: 'cells-product-summary-equity-spherica cells-product-summary-spherica #moreInfoButton',
                transferButton: 'cells-operations-list-indicators-spherica ul li[data-selector="transfer"] button.link',
                contactButton: 'cells-operations-list-indicators-spherica ul li[data-selector="assistance"] button.link',
                aliasButton: 'cells-operations-list-indicators-spherica ul li[data-selector="editAlias"] button.link',
                newFundButton:'cells-operations-list-indicators-spherica ul li[data-selector="newFund"] button.link',
                aliasText: 'cells-molecule-header-spherica #titleZone',
                greenModal: {
                    web: 'cells-bottom-modal-message-spherica cells-bottom-modal-spherica cells-atom-message-spherica .message',
                    isWithoutRoot: true,
                }
            },
            requiredElements: [
                'header',
            ]
        });
    }

    async _screenValidation({item, fund} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({isBtnLeft: true});
                break;
            case 'more info':
                await this.moreInfo.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'amount':
                await this.amount.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'transfer button':
                await this.transferButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'contact button':
                await this.contactButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'alias button':
                await this.aliasButton.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'investment list':
                await this.investmentList.waitForDisplayed({timeout: config.wait.L});
                await this.investmentList.scrollIntoView();
                break;
            case 'product name':
                await this.aliasText.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'expandable accordion':
                await this.expandableAccordion.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'list swipe':
                await (await this.listSwipe.specifySelector({placeholder: '__fund__', value: fund})
                    .waitForDisplayed({timeout: config.wait.XXL}));
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async accessEditAliasEquity() {
        await (await this.aliasButton.waitForClickable({timeout: config.wait.L})).click();
    }

    async accessToMoreInfoPage() {
        await (await this.moreInfo.waitForClickable({timeout: config.wait.L})).click();
    }

    async accessTransferEquity() {
        await (await this.transferButton.waitForClickable({timeout: config.wait.XL})).click();
    }

    async accessAssistanceEquity() {
        await (await this.contactButton.waitForClickable({timeout: config.wait.XL})).click();
    }

    async accessEquityFundDetailByName() {
        await this.expandableAccordion.waitForClickable({timeout: config.wait.XL});
        await this.expandableAccordion.click();
        await (await (await this.listSwipe.specifySelector({placeholder: '__fund__', value: (user.products.equityFund[0].id || 'NOT-FOUND')})
            .waitForExist({timeout: config.wait.XXL}))
            .waitForClickable({timeout: config.wait.XL})).click();
    }

    async accessNewFundEquity() {
        await this.investmentList.waitForDisplayed({timeout: config.wait.M});
        await this.newFundButton.waitForClickable({timeout: config.wait.S});
        await this.newFundButton.click();
    }

    async verifyAliasEquityName() {
        await this.greenModal.waitForDisplayed({timeout: config.wait.M});
    }
}

export default new EquityPage();
