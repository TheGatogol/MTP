import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class ParentalControlAccountLimits extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-parentalControlAccountLimits[state="active"]',
            elements: {
                headerTitle: '#operationalLimitsList #heading',
                returnBtn: '#operationalLimitsList [data-id="iconsLeft"]',
                helpHeaderBtn: '#operationalLimitsList #btn-right-primary',
                initialModalHeader: '[data-tag-name="operational-limits-detail-page"] #helpModalHeader',
                mainTitle: '[data-tag-name="operational-limits-list-page"] [data-tag-name="bbva-text"] p',
                dailyLimit: '#operational_DAILY',
                dailyLimitValue: '#operational_DAILY [data-tag-name="bbva-type-amount"]',
                dailyLimitEditBtn: '#operational_DAILY [data-tag-name="bbva-type-link"]',
                operationLimit: '#operational_PER_EXECUTION',
                operationLimitValue: '#operational_PER_EXECUTION [data-tag-name="bbva-type-amount"]',
                operationLimitEditBtn: '#operational_PER_EXECUTION [data-tag-name="bbva-type-link"]',
                monthlyLimit: '#operational_MONTHLY',
                monthlyLimitValue: '#operational_MONTHLY [data-tag-name="bbva-type-amount"]',
                monthlyLimitEditBtn: '#operational_MONTHLY [data-tag-name="bbva-type-link"]',
                successMessageIcon: '[data-tag-name="operational-limits-toast-success"] [data-tag-name="bbva-icon"]',
                successMessageText: '[data-tag-name="operational-limits-toast-success"] #toast-modal > p',
                infoModal: {
                    properties: {root: '[data-tag-name="operational-limits-detail-page"]'},
                    icon: '[data-tag-name="bbva-clip-microillustration"]',
                    subtitle: '[slot="slot-title"]',
                    content: '[slot="slot-content"]',
                    continueBtn: '[data-tag-name="bbva-button-default"]'
                },
                infoMessage: {
                    properties: {root: '[data-tag-name="operational-limits-list-page"] [data-tag-name="bbva-notification-message"]'},
                    icon: '[data-tag-name="bbva-icon"]'
                },
                editModal: {
                    properties: {root: '[data-tag-name="operational-limits-edit-page"]'},
                    actualLimit: '[data-tag-name="bbva-type-amount"]',
                    mainSubtitle: '[slot="slot-title"] [data-tag-name="bbva-type-text"]',
                    inputTitle: '#amountFormInput #labelOutText',
                    input: '#amountFormInput input',
                    inputMessage: '#amountFormInput [data-tag-name="bbva-notification-help"]',
                    messageIcon: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-icon"]',
                    messageText: '[data-tag-name="bbva-notification-message"] .paragraph',
                    continueBtn: '[data-tag-name="bbva-button-default]"[role="button"]',
                    cancelBtn: '[data-tag-name="bbva-link"][role="button"]'
                },
            },
            requiredElements: [
                'initialModalHeader',
            ]
        });
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header title':
                await this.headerTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'return button':
                await this.returnBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header help button':
                await this.helpHeaderBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'main title':
                await this.mainTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'daily limit title':
                await this.dailyLimit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'daily limit value':
                await this.dailyLimitValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'daily limit edit button':
                await this.dailyLimitEditBtn.waitForDisplayed({timeout: config.wait.M, reverse: value === 'false'});
                break;
            case 'operation limit title':
                await this.operationLimit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation limit value':
                await this.operationLimitValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'operation limit edit button':
                await this.operationLimitEditBtn.waitForDisplayed({timeout: config.wait.M, reverse: value === 'false'});
                break;
            case 'monthly limit title':
                await this.monthlyLimit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'monthly limit value':
                await this.monthlyLimitValue.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'monthly limit edit button':
                await this.monthlyLimitEditBtn.waitForDisplayed({timeout: config.wait.M, reverse: value === 'false'});
                break;
            case 'information message icon':
                await this.infoMessage.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal header':
                await this.initialModalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal icon':
                await this.infoModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal subtitle':
                await this.infoModal.subtitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal content':
                await this.infoModal.content.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal continue button':
                await this.infoModal.continueBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit modal actual limit':
                await this.editModal.actualLimit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit modal main subtitle':
                await this.editModal.mainSubtitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit modal input':
                await this.editModal.input.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit modal input title':
                await this.editModal.inputTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit modal input message':
                await this.editModal.inputMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit modal message icon':
                await this.editModal.messageIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit modal message text':
                await this.editModal.messageText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit modal continue button':
                if (value === 'enabled') {
                    await this.editModal.continueBtn.waitForEnabled({timeout: config.wait.M});
                }
                break;
            case 'edit modal cancel button':
                await this.editModal.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success message icon':
                await this.successMessageIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success message text':
                await this.successMessageText.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item});
        }
    }

    async openHelp(helpIcon) {
        switch (helpIcon.toLowerCase()) {
            case 'parental control':
                await (await this.helpHeaderBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'edit operation limits':
                await (await this.operationLimitEditBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'edit daily limits':
                await (await this.dailyLimitEditBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'edit monthly limits':
                await (await this.monthlyLimitEditBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`Help button ${helpIcon} not found`);
        }
    }

    async closeModal(helpModal) {
        switch (helpModal.toLowerCase()) {
            case 'parental control':
            case 'initial information':
                await (await this.infoModal.continueBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'edit operation limits':
            case 'edit daily limits':
            case 'edit monthly limits':
                await (await this.editModal.continueBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`The user is not on the ${helpModal} modal or the ${helpModal} option was not found`);
        }
    }

    async cancelLimitEditing() {
        await (await this.editModal.cancelBtn.waitForClickable({timeout: config.wait.M})).click();
    }

    async insertAmount(amountType) {
        let actualLimit = await (await this.editModal.actualLimit.waitForDisplayed({timeout: config.wait.M})).getAttribute({name: 'amount'});
        switch (amountType.toLowerCase()) {
            case 'lesser than allowed':
                await (await this.editModal.input.waitForEnabled({timeout: config.wait.M})).setValue({value: '0.50'});
                break;
            case 'higher than allowed':
                await (await this.editModal.input.waitForEnabled({timeout: config.wait.M})).setValue({value: actualLimit += 50});
                break;
            case 'same as actual limit':
                await (await this.editModal.input.waitForEnabled({timeout: config.wait.M})).setValue({value: actualLimit});
                break;
            case 'correct':
                await (await this.editModal.input.waitForEnabled({timeout: config.wait.M})).setValue({value: actualLimit -= 50});
                break;
            default:
                throw new Error(`The amount type ${amountType} is not defined`);
        }
    }

    async focusLimitEditing() {
        await (await this.editModal.input.waitForDisplayed({timeout: config.wait.L})).click();
    }
}

export default new ParentalControlAccountLimits();
