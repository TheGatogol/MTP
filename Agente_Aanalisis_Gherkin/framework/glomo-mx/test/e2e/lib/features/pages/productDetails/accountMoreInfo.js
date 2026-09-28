import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class AccountMoreInfo extends AbstractGlomoPage {
    constructor() {
        const productMoreInfo = 'div.info-list  div.descriptive-list  div.item ';
        super({
            root: '#cells-template-accountMoreInfo[state="active"]',
            elements: {
                backButton: 'cells-molecule-header button#btnRight',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader
                    }
                },
                shareIcon: 'cells-product-more-info div.content  div.info-list #share  button',
                generalTitle: 'div.content div.info-list [data-selector="main-title-0"]',
                productLabel: `${productMoreInfo} div  div.cells-product-more-info-product .descriptive-term .item-key`,
                productName: 'cells-product-more-info div[data-selector="item-description-0-0"] .item-key',
                accountLabel: `${productMoreInfo} div  div.cells-product-summary-account-heading .descriptive-term .item-key`,
                accountContent: 'cells-product-more-info div[data-selector="item-description-0-1"] .descriptive-detail',
                accountCopyBtn: 'div div div:nth-child(7) div:nth-child(5) div cells-st-button button',
                clabeLabel: `${productMoreInfo} div  div.cells-product-more-info-account-clabe .descriptive-term .item-key`,
                clabeContent: 'cells-product-more-info div[data-selector="item-description-0-2"] .descriptive-detail',
                clabeCopyBtn: 'div div div:nth-child(7) div:nth-child(8) div cells-st-button button',
                swiftLabel: `${productMoreInfo} div  div.cells-product-more-info-account-swift-code .descriptive-term .item-key`,
                swiftContent: 'cells-product-more-info div[data-selector="item-description-0-3"] .descriptive-detail',
                swiftCopyBtn: 'div div div:nth-child(7) div:nth-child(11) div.flex-container--row cells-st-button button',
                phoneLabel: `${productMoreInfo} div  div.cells-product-more-info-account-spei .descriptive-term .item-key`,
                phoneContent: 'cells-product-more-info div[data-selector="item-description-0-4"] .descriptive-detail',
                phoneCopyBtn: 'div div div:nth-child(7) div:nth-child(14) div cells-st-button button',
                participantsTitle: 'div.content div.info-list [data-selector="main-title-1"]',
                titularLabel: `${productMoreInfo} div  div.cells-account-more-info-participant-titular .descriptive-term .item-key`,
                titularContent: 'cells-product-more-info div[data-selector="item-description-1-0"] .descriptive-detail',
                authorizedLabel: `${productMoreInfo} div  div.cells-account-more-info-participant-authorized .descriptive-term .item-key`,
                authorizedContent: 'cells-product-more-info div[data-selector="item-description-1-1"] .descriptive-detail',
                paymentTitle: 'div.content div.info-list [data-selector="main-title-2"]',
                debitCardLabel: `${productMoreInfo} div  div.cells-account-more-info-card-type .descriptive-term .item-key`,
                debitCardContent: 'cells-product-more-info div[data-selector="item-description-2-0"] .descriptive-detail',
                debidCopyBtn: 'div div div:nth-child(19) div div cells-st-button button',
                payrollChange: 'cells-product-more-info div[data-selector="item-description-0-5"] .descriptive-detail'

            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share icon':
                await this.shareIcon.specifySelector({placeholder: '__INDEX__', value: 1}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'general title':
                await this.generalTitle.specifySelector({placeholder: '__INDEX__', value: 2}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product label':
                await this.productLabel.specifySelector({placeholder: '__INDEX__', value: 3}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'product name':
                await this.productName.specifySelector({placeholder: '__INDEX__', value: 4}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account label':
                await this.accountLabel.specifySelector({placeholder: '__INDEX__', value: 5}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account content':
                await this.accountContent.specifySelector({placeholder: '__INDEX__', value: 6}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account copy icon':
                await this.accountCopyBtn.specifySelector({placeholder: '__INDEX__', value: 7}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clabe label':
                await this.clabeLabel.specifySelector({placeholder: '__INDEX__', value: 8}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clabe content':
                await this.clabeContent.specifySelector({placeholder: '__INDEX__', value: 9}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clabe copy icon':
                await this.clabeCopyBtn.specifySelector({placeholder: '__INDEX__', value: 10}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'swift label':
                await this.swiftLabel.specifySelector({placeholder: '__INDEX__', value: 11}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'swift content':
                await this.swiftContent.specifySelector({placeholder: '__INDEX__', value: 12}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'swift copy icon':
                await this.swiftCopyBtn.specifySelector({placeholder: '__INDEX__', value: 13}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone label':
                await this.phoneLabel.specifySelector({placeholder: '__INDEX__', value: 14}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone content':
                await this.phoneContent.specifySelector({placeholder: '__INDEX__', value: 15}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone copy icon':
                await this.phoneCopyBtn.specifySelector({placeholder: '__INDEX__', value: 16}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'participants title':
                await this.participantsTitle.specifySelector({placeholder: '__INDEX__', value: 17}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'titular label':
                await this.titularLabel.specifySelector({placeholder: '__INDEX__', value: 18}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'titular content':
                await this.titularContent.specifySelector({placeholder: '__INDEX__', value: 19}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorized label':
                await this.authorizedLabel.specifySelector({placeholder: '__INDEX__', value: 20}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'authorized content':
                await this.authorizedContent.specifySelector({placeholder: '__INDEX__', value: 21}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payment title':
                await this.paymentTitle.specifySelector({placeholder: '__INDEX__', value: 22}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'debid card label':
                await this.debitCardLabel.specifySelector({placeholder: '__INDEX__', value: 23}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'debid card content':
                await this.debitCardContent.specifySelector({placeholder: '__INDEX__', value: 24}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'debid copy icon':
                await this.debidCopyBtn.specifySelector({placeholder: '__INDEX__', value: 25}).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'payroll change':
                await this.payrollChange.waitForDisplayed({timeout: config.wait.M});
                break;  
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async shareCustomerInfo() {
        await this.shareIcon.specifySelector({placeholder: '__INDEX__', value: 27}).waitForDisplayed({timeout: config.wait.L});
        await this.shareIcon.click();
    }

    async goBack() {
        await this.backButton.waitForDisplayed({timeout: config.wait.L});
        await this.backButton.waitForClickable({timeout: config.wait.L});
        await this.backButton.click();
    }
}

export default new AccountMoreInfo();
