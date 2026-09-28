import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import GlomoAlertManagerSpherica from '../../components/glomo-alert-manager-spherica';

@page()
class InternationalTransfersDetail extends AbstractGlomoPage {
    constructor() {
        super({
            name: 'InternationalTransfersDetail',
            root: '#cells-template-internationalTransfersDetail[state="active"]',
            elements: {
                headerPage: 'bbva-header-main',
                summaryTitle: '[data-tag-name=bbva-panel-process] header [data-tag-name=bbva-core-heading]',
                summaryDate: '[data-tag-name=bbva-panel-process] header [data-tag-name=bbva-date]',
                summaryAmount: '[data-tag-name=bbva-panel-process] [data-tag-name=bbva-amount]:not([hidden])',
                summaryDescription: '[data-tag-name=bbva-panel-process] .footer > [data-tag-name=bbva-text]',
                summaryStatus: '[data-tag-name=bbva-panel-process] .footer .badge [data-tag-name=bbva-badge-default]',
                infoBoxIcon: '[data-tag-name=bbva-notification-message] [data-tag-name=bbva-icon]',
                infoBoxMessage: '[data-tag-name=bbva-notification-message] div.paragraph',
                infoBoxCall: '[data-tag-name=bbva-notification-message] [data-tag-name=bbva-link]',
                operative: '#buttons > span > [data-tag-name="bbva-button-action"]',
                detailOperationTypeTitle: '[data-tag-name=bbva-aggregation-simple-list] #operation-type div.wrapper dl dt [data-tag-name=bbva-text]',
                detailOperationTypeText: '[data-tag-name=bbva-aggregation-simple-list] #operation-type div.wrapper dl dd [data-tag-name=bbva-text]',

                detailOwnAccountAliasTitle: '[data-tag-name=bbva-aggregation-simple-list] #local-account-alias div.wrapper dl dt [data-tag-name=bbva-text]',
                detailOwnAccountAliasText: '[data-tag-name=bbva-aggregation-simple-list] #local-account-alias div.wrapper dl dd [data-tag-name=bbva-text]',

                detailOwnAccountNumberTitle: '[data-tag-name=bbva-aggregation-simple-list] #local-account-number div.wrapper dl dt [data-tag-name=bbva-text]',
                detailOwnAccountNumberText: '[data-tag-name=bbva-aggregation-simple-list] #local-account-number div.wrapper dl dd [data-tag-name=bbva-text]',

                detailForeignNameTitle: '[data-tag-name=bbva-aggregation-simple-list] #foreign-name div.wrapper dl dt [data-tag-name=bbva-text]',
                detailForeignNameText: '[data-tag-name=bbva-aggregation-simple-list] #foreign-name div.wrapper dl dd [data-tag-name=bbva-text]',

                detailForeignAccountNumberTitle: '[data-tag-name=bbva-aggregation-simple-list] #foreign-account-number div.wrapper dl dt [data-tag-name=bbva-text]',
                detailForeignAccountNumberText: '[data-tag-name=bbva-aggregation-simple-list] #foreign-account-number div.wrapper dl dd [data-tag-name=bbva-text]',

                detailForeignBankNameTitle: '[data-tag-name=bbva-aggregation-simple-list] #foreign-bank-name div.wrapper dl dt [data-tag-name=bbva-text]',
                detailForeignBankNameText: '[data-tag-name=bbva-aggregation-simple-list] #foreign-bank-name div.wrapper dl dd [data-tag-name=bbva-text]',

                detailAmountTitle: '[data-tag-name=bbva-aggregation-simple-list] #amount div.wrapper > dl > dt > [data-tag-name=bbva-text] p',
                detailAmountText: '[data-tag-name=bbva-aggregation-simple-list] #amount div.wrapper > dl > dd > [data-tag-name=bbva-amount] div',

                detailAnswerFirstQuestionTitle: '[data-tag-name=bbva-aggregation-simple-list] #first-question-answer div.wrapper dl dt [data-tag-name=bbva-text]',
                detailAnswerFirstQuestionText: '[data-tag-name=bbva-aggregation-simple-list] #first-question-answer div.wrapper dl dd [data-tag-name=bbva-text]',
                detailAnswerSecondQuestionTitle: '[data-tag-name=bbva-aggregation-simple-list] #second-question-answer div.wrapper dl dt [data-tag-name=bbva-text]',
                detailAnswerSecondQuestionText: '[data-tag-name=bbva-aggregation-simple-list] #second-question-answer div.wrapper dl dd [data-tag-name=bbva-text]',
                detailLocalEconomicActivityTitle: '[data-tag-name=bbva-aggregation-simple-list] #local-economic-activity div.wrapper dl dt [data-tag-name=bbva-text]',
                detailLocalEconomicActivityText: '[data-tag-name=bbva-aggregation-simple-list] #local-economic-activity div.wrapper dl dd [data-tag-name=bbva-text]',
                detailForeignEconomicActivityTitle: '[data-tag-name=bbva-aggregation-simple-list] #foreign-economic-activity div.wrapper dl dt [data-tag-name=bbva-text]',
                detailForeignEconomicActivityText: '[data-tag-name=bbva-aggregation-simple-list] #foreign-economic-activity div.wrapper dl dd [data-tag-name=bbva-text]',
                detailOperationDateTitle: '[data-tag-name=bbva-aggregation-simple-list] #operation-date div.wrapper > dl > dt > [data-tag-name=bbva-text] p',
                detailOperationDateText: '[data-tag-name=bbva-aggregation-simple-list] #operation-date div.wrapper > dl > dd > [data-tag-name=bbva-text] p',

                modalError: [GlomoAlertManager],
            },
            elementsSpherica: {
                headerPage: 'bbva-header-main-spherica',
                summaryTitle: '[data-tag-name=bbva-panel-process-spherica] #heading',
                summaryDate: '[data-tag-name=bbva-panel-process-spherica] [data-tag-name=bbva-type-date]',
                summaryAmount: '[data-tag-name=bbva-panel-process-spherica] [data-tag-name=bbva-type-amount]:not([hidden])',
                summaryDescription: '[data-tag-name=bbva-panel-process-spherica] [data-tag-name=bbva-type-text] .text',
                summaryStatus: '[data-tag-name=bbva-panel-process-spherica] [data-tag-name=bbva-badge-default]',
                infoBoxIcon: '[data-tag-name=bbva-notification-message-spherica] [data-tag-name=bbva-type-icon]',
                infoBoxMessage: '[data-tag-name=bbva-notification-message-spherica] [data-tag-name=bbva-type-text]',
                infoBoxCall: '[data-tag-name=bbva-notification-message-spherica] [data-tag-name=bbva-type-link]',
                detailOperationTypeTitle: '[data-tag-name=bbva-aggregation-simple-list-spherica] #operation-type [data-tag-name=bbva-type-text]',
                detailOperationTypeText: '[data-tag-name=bbva-aggregation-simple-list-spherica] #operation-type [data-tag-name=bbva-type-text]',

                detailOwnAccountAliasTitle: '[data-tag-name=bbva-aggregation-simple-list-spherica] #local-account-alias dt [data-tag-name=bbva-type-text]',
                detailOwnAccountAliasText: '[data-tag-name=bbva-aggregation-simple-list-spherica] #local-account-alias dd [data-tag-name=bbva-type-text]',

                detailOwnAccountNumberTitle: '[data-tag-name=bbva-aggregation-simple-list-spherica] #local-account-number dt [data-tag-name=bbva-type-text]',
                detailOwnAccountNumberText: '[data-tag-name=bbva-aggregation-simple-list-spherica] #local-account-number dd [data-tag-name=bbva-type-text]',

                detailForeignNameTitle: '[data-tag-name=bbva-aggregation-simple-list-spherica] #foreign-name dt [data-tag-name=bbva-type-text]',
                detailForeignNameText: '[data-tag-name=bbva-aggregation-simple-list-spherica] #foreign-name dd [data-tag-name=bbva-type-text]',

                detailForeignAccountNumberTitle: '[data-tag-name=bbva-aggregation-simple-list-spherica] #foreign-account-number dt [data-tag-name=bbva-type-text]',
                detailForeignAccountNumberText: '[data-tag-name=bbva-aggregation-simple-list-spherica] #foreign-account-number dd [data-tag-name=bbva-type-text]',

                detailForeignBankNameTitle: '[data-tag-name=bbva-aggregation-simple-list-spherica] #foreign-bank-name dt [data-tag-name=bbva-type-text]',
                detailForeignBankNameText: '[data-tag-name=bbva-aggregation-simple-list-spherica] #foreign-bank-name dd [data-tag-name=bbva-type-text]',

                detailAmountTitle: '[data-tag-name=bbva-aggregation-simple-list-spherica] #amount  dt > [data-tag-name=bbva-type-text]',
                detailAmountText: '[data-tag-name=bbva-aggregation-simple-list-spherica] #amount  dd > [data-tag-name=bbva-type-amount]',

                detailAnswerFirstQuestionTitle: '[data-tag-name=bbva-aggregation-simple-list-spherica] #first-question-answer dt [data-tag-name=bbva-type-text]',
                detailAnswerFirstQuestionText: '[data-tag-name=bbva-aggregation-simple-list-spherica] #first-question-answer dd [data-tag-name=bbva-type-text]',
                detailAnswerSecondQuestionTitle: '[data-tag-name=bbva-aggregation-simple-list-spherica] #second-question-answer dt [data-tag-name=bbva-type-text]',
                detailAnswerSecondQuestionText: '[data-tag-name=bbva-aggregation-simple-list-spherica] #second-question-answer dd [data-tag-name=bbva-type-text]',
                detailLocalEconomicActivityTitle: '[data-tag-name=bbva-aggregation-simple-list-spherica] #local-economic-activity dt [data-tag-name=bbva-type-text]',
                detailLocalEconomicActivityText: '[data-tag-name=bbva-aggregation-simple-list-spherica] #local-economic-activity dd [data-tag-name=bbva-type-text]',
                detailForeignEconomicActivityTitle: '[data-tag-name=bbva-aggregation-simple-list-spherica] #foreign-economic-activity dt [data-tag-name=bbva-type-text]',
                detailForeignEconomicActivityText: '[data-tag-name=bbva-aggregation-simple-list-spherica] #foreign-economic-activity dd [data-tag-name=bbva-type-text]',
                detailOperationDateTitle: '[data-tag-name=bbva-aggregation-simple-list-spherica] #operation-date [data-tag-name=bbva-type-text]',
                detailOperationDateText: '[data-tag-name=bbva-aggregation-simple-list-spherica] #operation-date [data-tag-name=bbva-type-text]',

                modalError: [GlomoAlertManagerSpherica,
                    {
                        additionalElements: {
                            icon: '#modal > div > div.paragraph-template > p.paragraph-icon > cells-atom-icon-spherica',
                            descriptions: 'div.paragraph-template .paragraph-template-text:not([style="display: none;"])',
                        }
                    }
                ],
            },
            requiredElements: [
                'headerPage',
                'summaryTitle',
                'summaryDate',
                'summaryAmount',
                'summaryDescription',
                'summaryStatus',
                'operative'
            ]
        });
    }

    async selectCompleteInformation() {
        await (await (await this.operative.elementByText({text: 'Completar datos', timeout: config.wait.M})).waitForClickable({timeout: config.wait.M})).click();
    }

    async _screenValidation({item} = {}) {
        switch(item) {
            case 'header':
                await this.headerPage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary title':
                await this.summaryTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary date':
                await this.summaryDate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary amount':
                await this.summaryAmount.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary description':
                await this.summaryDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary status':
                await this.summaryStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operative share':
                await (await this.operative.elementByText({text: 'Compartir', timeout: config.wait.M})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operative complete information':
                await (await this.operative.elementByText({text: 'Completar datos', timeout: config.wait.M})).waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info box icon':
                await this.infoBoxIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'info box message':
                await this.infoBoxMessage.waitForText({timeout: config.wait.M});
                break;
            case 'info box call':
                await this.infoBoxCall.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation type':
                await this.detailOperationTypeTitle.waitForDisplayed({timeout: config.wait.M});
                await this.detailOperationTypeText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'own account alias':
                await this.detailOwnAccountAliasTitle.waitForDisplayed({timeout: config.wait.M});
                await this.detailOwnAccountAliasText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'own account number':
                await this.detailOwnAccountNumberTitle.waitForDisplayed({timeout: config.wait.M});
                await this.detailOwnAccountNumberText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'foreign name':
                await this.detailForeignNameTitle.waitForDisplayed({timeout: config.wait.M});
                await this.detailForeignNameText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'foreign account number':
                await this.detailForeignAccountNumberTitle.waitForDisplayed({timeout: config.wait.M});
                await this.detailForeignAccountNumberText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'foreign bank name':
                await this.detailForeignBankNameTitle.waitForDisplayed({timeout: config.wait.M});
                await this.detailForeignBankNameText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount':
                await this.detailAmountTitle.waitForDisplayed({timeout: config.wait.M});
                await this.detailAmountText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first question answer':
                await this.detailAnswerFirstQuestionTitle.waitForDisplayed({timeout: config.wait.M});
                await this.detailAnswerFirstQuestionText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second question answer':
                await this.detailAnswerSecondQuestionTitle.waitForDisplayed({timeout: config.wait.M});
                await this.detailAnswerSecondQuestionText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'local economic activity':
                await this.detailLocalEconomicActivityTitle.waitForDisplayed({timeout: config.wait.M});
                await this.detailLocalEconomicActivityText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'foreign economic activity':
                await this.detailForeignEconomicActivityTitle.waitForDisplayed({timeout: config.wait.M});
                await this.detailForeignEconomicActivityText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation date':
                await this.detailOperationDateTitle.waitForDisplayed({timeout: config.wait.M});
                await this.detailOperationDateText.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _modalElementValidation({item, value, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.modalError.elementValidation({item: 'header'} );
                break;
            case 'icon help':
                if (this.isSpherica()) {
                    await this.modalError.additionalElements.icon.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.modalError.elementValidation({item: 'hero image'} );
                }
                break;
            case 'title':
                await this.modalError.elementValidation({item: 'title'} );
                break;
            case 'description':
                if (this.isSpherica()) {
                    await this.modalError.additionalElements.descriptions.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.modalError.elementValidation({item: 'description'} );
                }
                break;
            case 'retry btn':
                await this.modalError.elementValidation({item: 'accept button'} );
                break;
            case 'return btn':
                await this.modalError.elementValidation({item: 'cancel button'} );
                break;
            default:
                await super._modalElementValidation({item, value, ...args});
        }
    }
}

export default new InternationalTransfersDetail();
