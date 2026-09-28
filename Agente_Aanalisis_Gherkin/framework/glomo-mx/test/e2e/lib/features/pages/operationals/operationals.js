import { ScreenValidationKeyNotFound, page } from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

const SECTION_ENUM = {
    favorite: '1',
    accounts: '2',
    cards: '3',
    merchants: '2'
};

@page()
class Operationals extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-operationals[state="active"]',
            elements: {
                backButton: 'cells-molecule-header div.left-container button#btnLeft',
                transfer: 'glomo-operations-list-group div.list:nth-of-type(__SECTION__) cells-operations-list-indicators cells-operations-list ul > li[data-selector="transfer"] > button',
                opportunities: 'glomo-operations-list-group div.list:nth-of-type(__SECTION__) cells-operations-list-indicators cells-operations-list ul > li[data-selector="opportunities"] > button',
                cardLessWithdraw: 'glomo-operations-list-group div.list:nth-of-type(__SECTION__) cells-operations-list-indicators cells-operations-list ul > li[data-selector="mobileTransfer"] > button',
                creditCardPayment: 'glomo-operations-list-group div.list:nth-of-type(__SECTION__) cells-operations-list-indicators cells-operations-list ul > li[data-selector="creditCardDebtPayment"] > button',
                billPayments: 'glomo-operations-list-group div.list:nth-of-type(__SECTION__) cells-operations-list-indicators cells-operations-list ul > li[data-selector="servicePayment"] > button',
                mobileTopUp: 'glomo-operations-list-group div.list:nth-of-type(__SECTION__) cells-operations-list-indicators cells-operations-list ul > li[data-selector="mobileTopUp"] > button',
                accountStatus: 'glomo-operations-list-group div.list:nth-of-type(__SECTION__) cells-operations-list-indicators cells-operations-list ul > li[data-selector="accountStatus"] > button',
                internationalTransfers: 'glomo-operations-list-group div.list:nth-of-type(__SECTION__) cells-operations-list-indicators cells-operations-list ul > li[data-selector="internationalTransfers"] > button',
                scheduledBillPayments: '[data-selector="servicePayment"]',
                frequentIntelligentOperations: 'glomo-operations-list-group div.list:nth-of-type(__SECTION__) cells-operations-list-indicators cells-operations-list ul li[data-selector="frequentOperations"] button',
                cashZone: '[data-selector="cashZone"] button',
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        paragraphElements:{
                            iconMessage: 'div.icon-message-container',
                        },
                        additionalElements:{
                            contentTitle: '.templates-wrapper .text-with-icon p.strong'
                        }
                    }
                ],
                manyAccounts: {
                    listAccounts: 'cells-product-selector-modal cells-product-selector.selector-group',
                    account: 'cells-product-selector-modal cells-product-selector.selector-group cells-product-item[data-index="0"]'
                },
                qrPayment: 'glomo-operations-list-group div.list:nth-of-type(__SECTION__) cells-operations-list-indicators cells-operations-list ul > li[data-selector="qrPayment"] > button'
            },

            elementsSpherica:{
                backButton: 'cells-molecule-header-spherica div.left-container button#btnLeft',
                transfer: 'glomo-operations-list-group-spherica div.list:nth-of-type(__SECTION__) cells-operations-list-indicators-spherica cells-operations-list-spherica ul > li[data-selector="transfer"] > button',
                opportunities: 'glomo-operations-list-group-spherica div.list:nth-of-type(__SECTION__) cells-operations-list-indicators-spherica cells-operations-list-spherica ul > li[data-selector="opportunities"] > button',
                cardLessWithdraw: 'glomo-operations-list-group-spherica div.list:nth-of-type(__SECTION__) cells-operations-list-indicators-spherica cells-operations-list-spherica ul > li[data-selector="mobileTransfer"] > button',
                creditCardPayment: 'glomo-operations-list-group-spherica div.list:nth-of-type(__SECTION__) cells-operations-list-indicators-spherica cells-operations-list-spherica ul > li[data-selector="creditCardDebtPayment"] > button',
                billPayments: 'glomo-operations-list-group-spherica div.list:nth-of-type(__SECTION__) cells-operations-list-indicators-spherica cells-operations-list-spherica ul > li[data-selector="servicePayment"] > button',
                mobileTopUp: 'glomo-operations-list-group-spherica div.list:nth-of-type(__SECTION__) cells-operations-list-indicators-spherica cells-operations-list-spherica ul > li[data-selector="mobileTopUp"] > button',
                accountStatus: 'glomo-operations-list-group-spherica div.list:nth-of-type(__SECTION__) cells-operations-list-indicators-spherica cells-operations-list-spherica ul > li[data-selector="accountStatus"] > button',
                internationalTransfers: 'glomo-operations-list-group-spherica div.list:nth-of-type(__SECTION__) cells-operations-list-indicators-spherica cells-operations-list-spherica ul > li[data-selector="internationalTransfers"] > button',
                frequentIntelligentOperations: 'glomo-operations-list-group-spherica div.list:nth-of-type(__SECTION__) cells-operations-list-indicators-spherica cells-operations-list-spherica ul li[data-selector="frequentOperations"] button',
                dialogOperations: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements:{
                            headerMiddle: 'cells-bottom-modal-spherica h1',
                        }
                    }
                ],
                qrPayment: 'glomo-operations-list-group-spherica div.list:nth-of-type(__SECTION__) cells-operations-list-indicators-spherica cells-operations-list-spherica ul > li[data-selector="qrPayment"] > button',
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
            },
            requiredElements: [
                'backButton'
            ],
        });
    }

    async accessToOperative({operative, section = 'accounts'}) {
        switch(operative) {
            case 'transfer':
                await (await this.transfer.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'opportunities':
                await (await this.opportunities.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'cardlessWithdrawal':
                await (await this.cardLessWithdraw.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'creditCardPayment':
                await (await this.creditCardPayment.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'billPayments':
                await (await this.billPayments.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForClickable({timeout: config.wait.M}))
                    .click({useActions: false, scrollOptions: {block: 'nearest'}});
                break;
            case 'mobileTopUp':
                await (await this.mobileTopUp.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForClickable({timeout: config.wait.L}))
                    .click();
                break;
            case 'accountStatus':
                await (await this.accountStatus.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'internationalTransfer':
                await (await this.internationalTransfers.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'qrPayment':
                await (await this.qrPayment.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'frequent intelligent operations':
                await (await this.frequentIntelligentOperations.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForClickable({timeout: config.wait.M}))
                    .click();
                break;
            case 'cashZone':
                await (await this.cashZone.waitForDisplayed({timeout: config.wait.M}))
                    .click();
                break;
            default:
                throw new Error(`${operative} operative is not implemented`);
        }
    }

    async selectAccount() {
        await this.manyAccounts.account.waitForClickable({timeout: config.wait.L});
        await this.manyAccounts.account.click();
    }

    async goBack() {
        await this.backButton.waitForDisplayed({timeout: config.wait.M});
        await this.backButton.click();
    }

    async _screenValidation({item, section, value}) {
        switch (item.toLowerCase()) {
            case 'back button':
                await this.backButton.waitForDisplayed();
                break;
            case 'transfer operative':
                await this.transfer.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'opportunities operative':
                await this.opportunities.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'cardless withdraw operative':
                await this.cardLessWithdraw.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'credit card payment operative':
                await this.creditCardPayment.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'bill payments operative':
                await this.billPayments.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'mobile top up operative':
                await this.mobileTopUp.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'account status operative':
                await this.accountStatus.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'international transfer operative':
                await this.internationalTransfers.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'qr payment operative':
                await this.qrPayment.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'accounts':
                await this.manyAccounts.listAccounts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'frequent intelligent operations':
                await this.frequentIntelligentOperations.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            case 'cash zone operative':
                await this.cashZone.specifySelector({placeholder: '__SECTION__', value: SECTION_ENUM[section]})
                    .waitForDisplayed({timeout: config.wait.M, reverse: value === 'not visible'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'content title':
                await this.dialogOperations.additionalElements.contentTitle.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'icon message':
                await this.dialogOperations.paragraph.iconMessage.waitForDisplayed();
                break;
            case 'header middle':
                await this.dialogOperations.additionalElements.headerMiddle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hero image container':
                await this.dialogOperations.containerImage.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }
}

export default new Operationals();
