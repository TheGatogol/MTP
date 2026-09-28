import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import CellsMoleculeHeader from '../../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../../components/cells-molecule-header-spherica';
import AbstractGlomoPage from '../../abstract-glomo-page';

@page()
class PocketSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pocketsSuccess[state="active"]',
            elements: {
                header: CellsMoleculeHeader,
                title: 'h2',
                icon: 'img',
                date: 'cells-atom-date[data-selector="cells-successful-response-date"]  #date',
                pocketName: '#body-section > ul > li:nth-child(2) > span.value',
                pocketAmount: '#body-section > ul > li:nth-child(5)',
                scheduledAmount: '#body-section > ul > li:nth-child(6)',
                pocketAccount: '#body-section > ul > li:nth-child(7) > span.value',
                invoice: '#body-section > ul > li:nth-child(10) > span.value',
                email: '#body-section > ul > li.secondary.container-label-style > span.value',
                message: 'cells-icon-message',
                share: 'ul > li > button',
                quit: '#primaryBtn',
                importReturned: '#body-section > ul > li.spacing.pocket-success-size > cells-atom-amount',

                addMoneySuccess: {
                    addedlAmount: '#header-section > cells-atom-amount',
                    pocketName: '#body-section > ul > li.bold > span.value',
                    pocketAccount: '#body-section > ul > li:nth-child(3) > span.key',
                    invoice: '#body-section > ul > li:nth-child(5) > span.value',
                },
                withdrawalSuccess: {
                    withdrawalAmount: '#header-section > cells-atom-amount',
                    pocketAccount: '#body-section > ul > li.bold > span.value',
                    invoice: '#body-section > ul > li:nth-child(4) > span.value',
                },
                editSuccess: {
                    icon: '#avatarImg',
                    date: '#body-section > ul > li:nth-child(1) > span.key',
                    pocketName: '#body-section > ul > li:nth-child(4) > span.value',
                    scheduledAmount: '#body-section > ul > li:nth-child(4)',
                    email: '#body-section > ul > li.secondary.container-label-styl > span.value',
                },
            },
            elementsSpherica: {
                header: CellsMoleculeHeaderSpherica,
                icon: '.image-div cells-atom-icon-spherica',
                pocketName: '#body-section li.spacing.light-key-ellipsis .key-value-container .value',
                pocketAccount: '#body-section  [data-selector="glomo-pockets-dm-pocket-account-spherica"] .key-value-container .value',
                invoice: '#body-section  [data-selector="glomo-pockets-dm-folio"] .key-value-container .value',
                email: '#body-section  [data-selector="glomo-pockets-dm-email-notification-spherica"] .key-value-container .value',
                date: 'cells-atom-date-spherica[data-selector="cells-successful-response-date"] #date',
                message: 'cells-icon-message-spherica',
                importReturned: '#header-section > cells-atom-amount-spherica',
                quit: '#btnRight',
                addMoneySuccess: {
                    addedlAmount: '#header-section > cells-atom-amount-spherica',
                    pocketName: '#body-section li.spacing.light-key-ellipsis .key-value-container .value',
                    pocketAccount: '#body-section  [data-selector="glomo-pockets-dm-pocket-account-spherica"] .key-value-container .value',
                    invoice: '#body-section  [data-selector="glomo-pockets-dm-folio"] .key-value-container .value',
                },
                withdrawalSuccess: {
                    withdrawalAmount: '#header-section > cells-atom-amount-spherica',
                    pocketName: '#body-section li.spacing.light-key-ellipsis .key-value-container .value',
                    pocketAccount: '#body-section  [data-selector="glomo-pockets-dm-pocket-account-spherica"] .key-value-container .value',
                    invoice: '#body-section  [data-selector="glomo-pockets-dm-folio"] .key-value-container .value',
                },
                editSuccess: {
                    icon: '#header-section cells-atom-icon-spherica',
                    date: 'cells-atom-date-spherica[data-selector="cells-successful-response-date"] #date',
                    pocketName: '[data-selector="cells-successful-response-additional-info"] [data-selector="glomo-pockets-dm-pocket-name"] .key-value-container .value',
                    email: '[data-selector="cells-successful-response-additional-info"] [data-selector="glomo-pockets-dm-email-notification-spherica"] .key-value-container .value',
                }
            },
            requiredElements: [
                'header',
            ],
        });

    }

    async closeScreen({element}) {
        switch (element.toLowerCase()) {
            case 'quit button':
                if (this.isSpherica()) {
                    await this.header.actionRight();
                } else {
                    await (await this.quit.waitForDisplayed({timeout: config.wait.M})).click();
                }
                break;
            case 'close':
                await this.header.actionRight();
                break;
            default:
                throw new Error(`${element} is not a valid option`);
        }
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon':
                await this.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'date':
                await this.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pocket name':
                await this.pocketName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pocket amount':
                await this.pocketAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'scheduled amount':
                await this.scheduledAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'pocket account':
                await this.pocketAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'invoice':
                await this.invoice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'email':
                if (value === 'invisible') {
                    return 1;
                }
                await this.email.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message':
                await this.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'quit':
                await this.quit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'import returned':
                await this.importReturned.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add money amount':
                await this.addMoneySuccess.addedlAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add money pocket name':
                await this.addMoneySuccess.pocketName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add money account':
                await this.addMoneySuccess.pocketAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'add money invoice':
                await this.addMoneySuccess.invoice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'share':
                await this.share.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdrawal amount':
                await this.withdrawalSuccess.withdrawalAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdrawal account':
                await this.withdrawalSuccess.pocketAccount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'withdrawal invoice':
                await this.withdrawalSuccess.invoice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit date':
                await this.editSuccess.date.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit pocket name':
                await this.editSuccess.pocketName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit scheduled amount':
                await this.editSuccess.scheduledAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit email':
                await this.editSuccess.email.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit icon':
                await this.editSuccess.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PocketSuccess();
