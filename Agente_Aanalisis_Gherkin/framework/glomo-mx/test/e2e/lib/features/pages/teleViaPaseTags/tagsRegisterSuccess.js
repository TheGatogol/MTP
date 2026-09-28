import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';

@page()
class TagsRegisterSuccessPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-registerTagSuccess[state="active"]',
            elements: {
                header: '#headerSuccessTollEnrollment',
                closeBtn: '#headerSuccessTollEnrollment #btn-close',
                successIcon: '#clipBoxSuccess',
                title: '#bannerSuccessTitle',
                date: '#operationDateValue',
                typeTitle: '#operationTypeLabel',
                type: '#operationTypeValue',
                tagTitle: '#operatorLabel',
                tag: '#operatorValue',
                contNumTitle: '#agreementNumberLabel',
                contractNum: '#agreementNumberValue',
                tagDataTitle: '#tagDataLabel',
                tagPrefixTitle: '#tagPrefixLabel',
                tagPrefix: '#tagPrefixValue',
                tagNumberTitle: '#tagNumberLabel',
                tagNumber: '#tagNumberValue',
                aliasTitle: '#tagAliasLabel',
                alias: '#tagAliasValue',
                balanceTitle: '#tagBalanceLabel',
                balance: '#tagBalanceValue',
                panelInfo: '#rechargeAvailableMessage',
                buttonsRow: '[data-tag-name="bbva-button-action"]',
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item} = {}) {
        switch (item.toLowerCase()) {
            case 'close button':
                await this.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success icon':
                await this.successIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date':
                await this.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag type title':
                await this.typeTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag type':
                await this.type.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag title':
                await this.tagTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag':
                await this.tag.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract number title':
                await this.contNumTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'contract number':
                await this.contractNum.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag data title':
                await this.tagDataTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag prefix title':
                await this.tagPrefixTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag prefix':
                await this.tagPrefix.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag number title':
                await this.tagNumberTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag number':
                await this.tagNumber.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag alias title':
                await this.aliasTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tag alias':
                await this.alias.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'balance title':
                await this.balanceTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'balance':
                await this.balance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'information panel':
                await this.panelInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share button': {
                await this.waitForElementsExist(this.buttonsRow);
                const shareBtn = (await this.buttonsRow.elements()).value[0];
                await shareBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            }
            case 'recharge button': {
                await this.waitForElementsExist(this.buttonsRow);
                const rechargeBtn = (await this.buttonsRow.elements()).value[1];
                await rechargeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            }
            default:
                throw new ScreenValidationKeyNotFound({ key: item, args: arguments[0] });
        }
    }

    async rechargeTag() {
        await this.waitForElementsExist(this.buttonsRow);
        const rechargeBtn = (await this.buttonsRow.elements()).value[1];
        await (await rechargeBtn.waitForDisplayed({timeout: config.wait.M})).click();
    }
}

export default new TagsRegisterSuccessPage();
