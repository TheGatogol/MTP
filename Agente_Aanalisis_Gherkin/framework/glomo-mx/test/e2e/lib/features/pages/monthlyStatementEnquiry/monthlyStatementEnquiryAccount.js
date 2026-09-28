import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import BbvaHeaderMain from '../../components/bbva-header-main';
import BbvaHeaderMainSpherica from '../../components/bbva-header-main-spherica';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class MonthlyStatementEnquiryAccount extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-accountMonthlyStatement[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain
                    }
                },
                errorModal: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            title: 'div.paragraph-template h2:not([style="display: none;"])',
                            paragraphIcon: 'div.paragraph-template iron-icon:not([style="display: none;"])',
                            description: '#modal > div > div.paragraph-template > div:nth-child(32) > p',
                            acceptBtn: 'div.buttons-container cells-st-button #acceptButton',
                            closeBtn: 'cells-alert-box[opened] #header button.btn-close',
                        }
                    }
                ],
                account: '.content-button .header',
                number: 'span.num-product',
                balance: 'div.column.text-amount',
                period: 'bbva-core-heading',
                lastStatementEnquiry: '[value="currentStatement"] .label',
                lastStatementEnquiryRadioButton: '[value="currentStatement"] .box',
                lastStatementEnquiryIcon: '[value="currentStatement"] bbva-core-icon',
                lastStatementEnquiryDate: '[value="currentStatement"] .error-message',
                otherStatementEnquiry: '[value="otherStatement"] .label',
                otherStatementEnquiryRadioButton: '[value="otherStatement"] .radio',
                otherStatementEnquiryContainer: 'bbva-form-radio-button[value="otherStatement"]',
                otherStatementEnquiryIcon: '[value="otherStatement"] bbva-core-icon',
                otherStatementEnquiryDate: '[value="otherStatement"] .error-message',
                otherStatementEnquiryInputOptions: '#button',
                otherStatementEnquiryInputOptionsText: '#button .content-text',
                otherStatementEnquiryList: '.options-wrapper',
                otherStatementEnquiryListBtn: '#button [data-tag-name="bbva-icon"]',
                imageWithoutStatement: 'bbva-panel-info',
                genericDate: 'bbva-form-option',
                continueBtn: 'bbva-button-default:not([hidden])'
            },
            elementsSpherica: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMainSpherica
                    }
                },
                errorModal: [
                    GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            title: 'div.paragraph-template h2:not([style="display: none;"])',
                            paragraphIcon: 'div.paragraph-template iron-icon:not([style="display: none;"])',
                            description: '#modal > div > div.paragraph-template > h2',
                            acceptBtn: 'div.buttons-container cells-st-button-spherica #acceptButton',
                            closeBtn: 'cells-alert-box-spherica[opened] #header button.btn-close',
                        }
                    }
                ],
                otherStatementEnquiryRadioButton: 'bbva-form-radio-button-spherica.u-margin--1 ul > li:nth-child(2) > bbva-form-radio-button-input',
                otherStatementEnquiryContainer: 'bbva-form-radio-button-spherica ul > li:nth-child(2) > bbva-form-radio-button-input',
                otherStatementEnquiryList: 'bbva-form-select-spherica .button-content',
                otherStatementEnquiryListBtn: 'bbva-form-select-spherica #button .button-content .button-icon [data-tag-name="bbva-type-icon"]',
                imageWithoutStatement: 'bbva-panel-info-spherica',
                continueBtn: 'bbva-button-default-spherica:not([hidden])'
            },
            requiredElements: [
                'header'
            ]
        });

    }

    async selectMonthlyStatement(date = '21 diciembre 2021') {
        await (await (await this.genericDate.elementByText({text: date})).waitForClickable({timeout: config.wait.M })).click();
    }

    async displayList() {
        await (await this.otherStatementEnquiryListBtn.waitForClickable()).click();
    }

    async choosePeriod(period) {
        switch (period) {
            case 'other':
                await (await this.otherStatementEnquiryRadioButton.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'current':
                await (await this.lastStatementEnquiryRadioButton.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${period} is not a valid option`);
        }
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'statement enquiry options':
                await this.otherStatementEnquiryInputOptionsText.waitForText({timeout: config.wait.M, text: value});
                break;
            case 'statement enquiry options list':
                await this.otherStatementEnquiryList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image without statement':
                await this.imageWithoutStatement.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'account':
                await this.account.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'number':
                await this.number.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'balance':
                await this.balance.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'period':
                await this.period.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'last statement enquiry':
                await this.lastStatementEnquiry.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'last statement enquiry icon':
                await this.lastStatementEnquiryIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'last statement enquiry date':
                await this.lastStatementEnquiryDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'last statement enquiry radio button':
                await this.lastStatementEnquiryRadioButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'other statement enquiry radio button':
                await this.otherStatementEnquiryRadioButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'other statement enquiry label':
                await this.otherStatementEnquiry.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'other statement enquiry icon':
                await this.otherStatementEnquiryIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'other statement enquiry date':
                await this.otherStatementEnquiryDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error icon':
                await this.errorModal.additionalElements.paragraphIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error description':
                await this.errorModal.additionalElements.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error accept button':
                await this.errorModal.additionalElements.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'other statement enquiry':
                if (value === 'disabled') {
                    await this.otherStatementEnquiryContainer.waitForDisabled({timeout: config.wait.M});
                    break;
                } else {
                    await this.otherStatementEnquiryContainer.waitForDisplayed({timeout: config.wait.M});
                    break;
                }
            case 'continue button':
                await this.continueBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new MonthlyStatementEnquiryAccount();
