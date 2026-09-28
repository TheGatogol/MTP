import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class ParentalControlCardLimits extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-parentalControlCardLimits[state="active"]',
            elements: {
                headerTitle: '[data-tag-name="card-operative-limits-list"] #heading',
                returnBtn: '[data-tag-name="card-operative-limits-list"] [data-id="iconsLeft"]',
                helpHeaderBtn: '[data-tag-name="card-operative-limits-list"] #btn-right-primary',
                mainTitle: '[data-tag-name="card-operative-limits-list"] [role="heading"] [data-tag-name="bbva-text"]',
                mainHelpBtn: '[data-tag-name="card-operative-limits-list"] [data-tag-name="bbva-header-category"] .link',
                retirementTotal: '[idlimit="ATM_DAILY"] div.amount-wrapper',
                retirementUsedToday: '[idlimit="ATM_DAILY"] .grid .col:nth-child(2) .col:nth-child(1)',
                retirementAvailableToday: '[idlimit="ATM_DAILY"] .grid .col:nth-child(2) .col:nth-child(2)',
                retirementEditBtn: '[idlimit="ATM_DAILY"] [data-tag-name="bbva-type-link"]',
                shoppingTotal: '[idlimit="POS_DAILY"] [data-tag-name="bbva-type-amount"]',
                shoppingUsedToday: '[idlimit="POS_DAILY"] .grid .col:nth-child(2) .col:nth-child(1)',
                shoppingAvailableToday: '[idlimit="POS_DAILY"] .grid .col:nth-child(2) .col:nth-child(2)',
                shoppingEditBtn: '[idlimit="POS_DAILY"] [data-tag-name="bbva-type-link"]',

                informationHeaderModal: {
                    properties: {root: '#card-operative-limits-modal-info-header'},
                    icon: '[data-tag-name="bbva-type-icon"]',
                    firstQuestion: '[data-tag-name="bbva-type-text"]:nth-child(1)',
                    firstAnswer: '[data-tag-name="bbva-type-text"]:nth-child(2)',
                    secondQuestion: '[data-tag-name="bbva-type-text"]:nth-child(3)',
                    secondAnswer: '[data-tag-name="bbva-type-text"]:nth-child(4)',
                    thirdQuestion: '[data-tag-name="bbva-type-text"]:nth-child(5)',
                    thirdAnswer: '[data-tag-name="bbva-type-text"]:nth-child(6)',
                    fourthQuestion: '[data-tag-name="bbva-type-text"]:nth-child(7)',
                    fourthAnswer: '[data-tag-name="bbva-type-text"]:nth-child(8)',
                    acceptBtn: '[data-tag-name="bbva-button-default"]'
                },

                mainInfoModal: {
                    properties: {root: '#card-operative-limits-modal-info'},
                    icon: '[data-tag-name="bbva-type-icon"]',
                    firstPoint: '[data-tag-name="bbva-list-bullet"]:nth-child(1)',
                    secondPoint: '[data-tag-name="bbva-list-bullet"]:nth-child(2)',
                    thirdPoint: '[data-tag-name="bbva-list-bullet"]:nth-child(3)',
                    acceptBtn: '[data-tag-name="bbva-button-default"]'
                },

                editModal: {
                    properties: {root: '#card-operative-limits-edit-modal'},
                    actualLimit: '[data-tag-name="bbva-type-amount"]',
                    dailyLimitTitle: '[data-tag-name="bbva-type-text"]',
                    limitBar: '[data-tag-name="bbva-data-visualization-bar"]',
                    availableToday: '[data-tag-name="bbva-data-visualization-tooltip"] .content-wrapper:nth-child(1)',
                    availableTodayValue: '[data-tag-name="bbva-data-visualization-tooltip"] .content-wrapper:nth-child(1) [data-tag-name="bbva-text"].description',
                    usedToday: '[data-tag-name="bbva-data-visualization-tooltip"] .content-wrapper:nth-child(2)',
                    usedTodayValue: '[data-tag-name="bbva-data-visualization-tooltip"] .content-wrapper:nth-child(2) [data-tag-name="bbva-text"].description',
                    mainTitle: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-core-heading"]',
                    helpIcon: '[data-tag-name="bbva-header-category"] [data-tag-name="bbva-icon"]',
                    newLimitInputTitle: '#amountFormInput #labelOutText',
                    newLimitInput: '#amountFormInput input',
                    newLimitInputMessage: '#amountFormInput [data-tag-name="bbva-notification-help"]',
                    notificationMessageIcon: '[data-tag-name="bbva-notification-message"] [data-tag-name="bbva-icon"]',
                    notificationMessageText: '[data-tag-name="bbva-notification-message"] .paragraph',
                    acceptBtn: '#continueButton',
                    cancelBtn: '[data-tag-name="bbva-link"].footer-button'
                },

                editInformationModal: {
                    properties: {root: '#card-operative-limits-modal-limits-purchases'},
                    icon: '[data-tag-name="bbva-type-icon"]',
                    firstPoint: '[data-tag-name="bbva-list-bullet"]:nth-child(1)',
                    secondPoint: '[data-tag-name="bbva-list-bullet"]:nth-child(2)',
                    thirdPoint: '[data-tag-name="bbva-list-bullet"]:nth-child(3)',
                    fourthPoint: '[data-tag-name="bbva-list-bullet"]:nth-child(4)',
                    fifthPoint: '[data-tag-name="bbva-list-bullet"]:nth-child(5)',
                    sixthPoint: '[data-tag-name="bbva-list-bullet"]:nth-child(6)',
                    acceptBtn: '[data-tag-name="bbva-button-default"]'
                },
                success: {
                    properties: {root: '[data-tag-name="card-operative-limits-toast-success"]'},
                    title: '#dialogTitle',
                    icon: '[data-tag-name="bbva-icon"]',
                    content: '[data-tag-name="bbva-text"]'
                }

            },
            requiredElements: [
                'headerTitle',
            ]
        });
    }

    async _screenValidation({item, value} = {}){
        switch(item.toLowerCase()){
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
            case 'main help button':
                await this.mainHelpBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retirement total':
                await this.retirementTotal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'todays used retirement':
                await this.retirementUsedToday.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retirement edit button':
                await this.retirementEditBtn.waitForDisplayed({timeout: config.wait.M, reverse: value === 'false'});
                break;
            case 'todays available retirement':
                await this.retirementAvailableToday.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'shopping total':
                await this.shoppingTotal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'shopping used today':
                await this.shoppingUsedToday.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'shopping available for today':
                await this.shoppingAvailableToday.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'shopping edit button':
                await this.shoppingEditBtn.waitForDisplayed({timeout: config.wait.M, reverse: value === 'false'});
                break;
            case 'parental control modal icon':
                await this.informationHeaderModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'parental control modal first question':
                await this.informationHeaderModal.firstQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'parental control modal first answer':
                await this.informationHeaderModal.firstAnswer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'parental control modal second question':
                await this.informationHeaderModal.secondQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'parental control modal second answer':
                await this.informationHeaderModal.secondAnswer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'parental control modal third question':
                await this.informationHeaderModal.thirdQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'parental control modal third answer':
                await this.informationHeaderModal.thirdAnswer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'parental control modal fourth question':
                await this.informationHeaderModal.fourthQuestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'parental control modal fourth answer':
                await this.informationHeaderModal.fourthAnswer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'parental control modal accept button':
                await this.informationHeaderModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limits modal icon':
                await this.mainInfoModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limits modal first point':
                await this.mainInfoModal.firstPoint.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limits modal second point':
                await this.mainInfoModal.secondPoint.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limits modal third point':
                await this.mainInfoModal.thirdPoint.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'limits modal accept button':
                await this.mainInfoModal.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit actual limit':
                await this.editModal.actualLimit.scrollIntoView({block: 'end'});
                await this.editModal.actualLimit.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit daily limit title':
                await this.editModal.dailyLimitTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit limit bar':
                await this.editModal.limitBar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit available today':
                await this.editModal.availableToday.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit used today':
                await this.editModal.usedToday.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit main title':
                await this.editModal.mainTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit help icon':
                await this.editModal.helpIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit new limit input title':
                await this.editModal.newLimitInputTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit new limit input':
                await this.editModal.newLimitInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit new limit input message':
                await this.editModal.newLimitInputMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit notification message icon':
                await this.editModal.notificationMessageIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit notification message text':
                await this.editModal.notificationMessageText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit accept button':
                await this.editModal.acceptBtn.waitForClickable({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'edit cancel button':
                await this.editModal.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit retirement limits modal icon':
            case 'edit shopping limits modal icon':
                await this.editInformationModal.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit retirement limits modal first point':
            case 'edit shopping limits modal first point':
                await this.editInformationModal.firstPoint.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit retirement limits modal second point':
            case 'edit shopping limits modal second point':
                await this.editInformationModal.secondPoint.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit retirement limits modal third point':
            case 'edit shopping limits modal third point':
                await this.editInformationModal.thirdPoint.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit retirement limits modal fourth point':
            case 'edit shopping limits modal fourth point':
                await this.editInformationModal.fourthPoint.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit retirement limits modal fifth point':
                await this.editInformationModal.fifthPoint.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit retirement limits modal sixth point':
                await this.editInformationModal.sixthPoint.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'edit retirement limits modal accept button':
            case 'edit shopping limits modal accept button':
                await this.editInformationModal.acceptBtn.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'success title':
                await this.success.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success icon':
                await this.success.icon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'success info':
                await this.success.content.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item});
        }
    }

    async openHelp(helpIcon){
        switch(helpIcon.toLowerCase()){
            case 'parental control':
                await (await this.helpHeaderBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'limits information':
                await (await this.mainHelpBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'edit shopping limits':
                await (await this.shoppingEditBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'edit retirement limits':
                await (await this.retirementEditBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'edit shopping limits information':
                await (await this.shoppingEditBtn.waitForClickable({timeout: config.wait.M})).click();
                await (await this.editModal.helpIcon.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'edit retirement limits information':
                await (await this.retirementEditBtn.waitForClickable({timeout: config.wait.M})).click();
                await (await this.editModal.helpIcon.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`Help button ${helpIcon} not found`);
        }
    }

    async closeModal(helpModal){
        switch(helpModal.toLowerCase()){
            case 'parental control':
                await (await this.informationHeaderModal.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'limits information':
                await (await this.mainInfoModal.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'edit retirement limits':
            case 'edit shopping limits':
                await (await (await this.editModal.acceptBtn.scrollIntoView()).waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'edit retirement limits information':
            case 'edit shopping limits information':
                await (await this.editInformationModal.acceptBtn.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`The user aint on the ${helpModal} modal or the ${helpModal} option wasnt found`);
        }
    }

    async insertAmount(amountType){
        const usedValue = await (await this.editModal.usedTodayValue.waitForDisplayed({timeout: config.wait.M})).getText();
        const newAmount = Number(usedValue);
        let newLimit = await (await this.editModal.availableTodayValue.waitForDisplayed({timeout: config.wait.M})).getText();
        switch(amountType.toLowerCase()){
            case 'non multiple':
                await (await this.editModal.newLimitInput.waitForEnabled({timeout: config.wait.M})).setValue({value: '51'});
                break;
            case 'lesser':
                await (await this.editModal.newLimitInput.waitForEnabled({timeout: config.wait.M})).setValue({value: '10'});
                break;
            case 'higher':
                await (await this.editModal.newLimitInput.waitForEnabled({timeout: config.wait.M})).setValue({value: '10000000'});
                break;
            case 'lower that already used':
                if(newAmount > 50){
                    await (await this.editModal.newLimitInput.waitForEnabled({timeout: config.wait.M})).setValue({value: '50'});
                } else {
                    throw new Error(`The user cant see the error due to the used amount being ${newAmount} needs to be higher than 50`);
                }
                break;
            case 'correct':
                await (await this.editModal.newLimitInput.waitForEnabled({timeout: config.wait.M})).setValue({value: newLimit-=50});
                break;
            default:
                throw new Error(`The amount type ${amountType} is not defined`);
        }
    }

    async cancelLimitEditing(){
        await (await this.editModal.cancelBtn.waitForClickable({timeout: config.wait.M})).click();
    }
}

export default new ParentalControlCardLimits();
