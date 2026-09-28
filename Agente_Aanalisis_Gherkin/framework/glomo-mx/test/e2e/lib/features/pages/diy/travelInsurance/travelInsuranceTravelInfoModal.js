import AbstractGlomoPage from '../../abstract-glomo-page.js';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import GlomoAlertManager from '../../../components/glomo-alert-manager';
import glomoDateInputSelector from '../../../components/glomo-date-input';

@page('TravelInsuranceTravelInfoModal')
class TravelInsuranceTravelInfoModal extends AbstractGlomoPage {
    constructor() {
        const travelInfoModalMain = 'cells-form-user-data-list #traveler-1';
        super({
            root: '#cells-template-travelInsuranceUserDataModal[state="active"]',
            elements: {
                closeIcon: '#travel-header #btnRight',
                firstNameInput: `${travelInfoModalMain} cells-molecule-input:nth-child(1) #input`,
                firstSurnameInput: `${travelInfoModalMain} cells-molecule-input:nth-child(2) #input`,
                secondSurnameInput: `${travelInfoModalMain} cells-molecule-input:nth-child(3) #input`,
                birthday: glomoDateInputSelector,
                relationshipRadio: `${travelInfoModalMain} div.radio-group-relationship > cells-radio-group > cells-radio-button:not([id="traveler-1"])`,
                genderRadio: `${travelInfoModalMain} div.radio-group-gender > cells-radio-group > cells-radio-button:nth-child(1) #radio`,
                continueModal: GlomoAlertManager,
                contractOfferButton: '#cells-template-travelInsuranceUserDataModal > cells-form-user-data-list cells-st-button > button'
            },
            requiredElements: [
                'firstSurnameInput'
            ]
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.closeIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first name input':
                await this.firstNameInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'first surname input':
                await this.firstSurnameInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'second surname input':
                await this.secondSurnameInput.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'birthday':
                await this.birthday.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'relationship radio':
                await this.relationshipRadio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'gender radio':
                await this.genderRadio.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async fillFirstName(value = global.user.data.name) {
        await (await (await this.firstNameInput
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .setValue({value: value});
    }

    async fillFirstSurname(value = global.user.data.last_name) {
        await (await (await this.firstSurnameInput
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .setValue({value: value});
    }

    async fillSecondSurname(value = global.user.data.second_surname) {
        await (await (await this.secondSurnameInput
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .setValue({value});
    }

    async setBirthday(birthday = global.user.data.birthday) {
        await this.birthday.selectDate(birthday);
    }

    async setRelationship() {
        await (await (await (await (await this.relationshipRadio
            .scrollIntoView({block: 'end'}))
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async setGender() {
        await (await (await this.genderRadio
            .scrollIntoView())
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async continue() {
        await (await (await this.contractOfferButton
            .scrollIntoView())
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async fillFormTravelUser() {
        await this.fillFirstName();
        await this.fillFirstSurname();
        await this.fillSecondSurname();
        await this.setBirthday();
        await this.setRelationship();
        await this.setGender();
        await this.continue();
    }

    async noCompleteFillForm() {
        await this.fillFirstName();
        await this.setBirthday();
        await this.setRelationship();
    }

    async goBack() {
        await (await (await (await this.closeIcon
            .scrollIntoView())
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .click();
    }
}

export default new TravelInsuranceTravelInfoModal();
