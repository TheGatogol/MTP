import {ScreenValidationKeyNotFound, NotPathNavigationError, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class InternationalTransfersPanel extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'InternationalTransfersPanel',
            root: '#cells-template-internationalTransfersPanel[state="active"]',
            elements: {
                headerPage: '[data-tag-name=bbva-header-main]',
                movementsSentBtn: '#movements-type-buttons #movements-sent-btn',
                movementsReceviedBtn: '#movements-type-buttons #movements-received-btn',
                makeInternationalTransferBtn: '#make-international-transfer-btn',
                productList: '#first-products-modal-international-transfers',
                productListSelectorHeader: '#first-products-modal-international-transfers #modal #header',
                productListSelectorHeaderCloseBtn: '#first-products-modal-international-transfers #modal #closeButton',
                productListTitle: '#first-products-modal-international-transfers #selector--accounts cells-atom-subheader #heading',
                productListItem: '#first-products-modal-international-transfers #selector--accounts cells-product-item',
                productListCloseBtn: '#first-products-modal-international-transfers #modal > div > cells-st-button',
                productListFirstAccount: '#first-products-modal-international-transfers #selector--accounts cells-product-item[data-index="0"]'
            },
            elementsSpherica: {
                headerPage: 'bbva-header-main-spherica',
                onboardingModal: [GlomoAlertManagerSpherica],
            },
            requiredElements: 'headerPage'
        });
    }

    async accessToMovementList(movementType) {
        await (await this.onboardingModal.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
        switch(movementType) {
            case 'sent':
                await this.movementsSentBtn.click();
                break;
            case 'received':
                await this.movementsReceviedBtn.click();
                break;
            default:
                throw new Error(`The movement type"${movementType}" is unknown. Cannot be processed.`);
        }
    }

    async navigateToInternationalTransfers(previousScreen = '') {
        switch(previousScreen) {
            case 'internationalTransfersPanel':
                await this.goToInternationalTransfers();
                break;
            case 'accountListModal':
                await this.selectFirstAccount();
                break;
            default:
                throw new NotPathNavigationError();
        }
    }

    async goToInternationalTransfers() {
        await (await this.onboardingModal.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
        await (await this.makeInternationalTransferBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async selectFirstAccount() {
        await (await this.productListFirstAccount.waitForClickable({timeout: config.wait.M})).click();
    }

    async _screenValidation({item}) {
        switch(item) {
            case 'header page':
                await this.headerPage.waitForDisplayed();
                break;
            case 'movements sent button':
                await this.movementsSentBtn.waitForDisplayed();
                break;
            case 'movements received button':
                await this.movementsReceviedBtn.waitForDisplayed();
                break;
            case 'make an international transfer button':
                await this.makeInternationalTransferBtn.waitForDisplayed();
                break;
            case 'account list header':
                await this.productListSelectorHeader.waitForDisplayed();
                break;
            case 'account list header close button':
                await this.productListSelectorHeaderCloseBtn.waitForDisplayed();
                break;
            case 'account list title':
                await this.productListTitle.waitForDisplayed();
                break;
            case 'account list item':
                await this.productListItem.waitForDisplayed();
                break;
            case 'account list close button':
                await this.productListCloseBtn.waitForDisplayed();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new InternationalTransfersPanel();
