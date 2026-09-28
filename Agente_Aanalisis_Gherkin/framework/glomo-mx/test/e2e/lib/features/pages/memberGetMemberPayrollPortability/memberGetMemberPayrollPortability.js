import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

import BbvaFeatureMemberGetMemberPayrollPortabilitySpherica from '../../components/bbva-feature-member-get-member-payroll-portability-spherica';

@page()
class MgmPayrollPortability extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-memberGetMemberPayrollPortability[state="active"]',
            elements: {
                widget: '#memberGetMemberPayrollPortability',
                payrollPortability: {
                    component: {
                        ComponentClass: BbvaFeatureMemberGetMemberPayrollPortabilitySpherica
                    }
                }
            },
            requiredElements: [
                'widget'
            ]
        });
    }

    async registerPersonalInformation() {
        await this.payrollPortability.writeName();
        await this.payrollPortability.writeFirstLastName(true);
        await this.payrollPortability.writeSecondLastName(true);
        await this.payrollPortability.writeEmail(true);
        await this.payrollPortability.writeBirthday(true);
        await this.payrollPortability.registerGuest();
    }

    async registerOtherInvite() {
        await this.payrollPortability.inviteSomeOneElse();
    }

    async fillOutFormIncorrectlyUntilFirstLastName() {
        await this.payrollPortability.writeName();
        await this.payrollPortability.writeFirstLastName(false);
    }

    async fillOutFormIncorrectlyUntilSecondLastName() {
        await this.payrollPortability.writeName();
        await this.payrollPortability.writeFirstLastName(true);
        await this.payrollPortability.writeSecondLastName(false);
    }

    async fillOutFormIncorrectlyUntilEmail() {
        await this.payrollPortability.writeName();
        await this.payrollPortability.writeFirstLastName(true);
        await this.payrollPortability.writeSecondLastName(true);
        await this.payrollPortability.writeEmail(false);
    }

    async fillOutFormIncorrectlyUntilBirthday() {
        await this.payrollPortability.writeName();
        await this.payrollPortability.writeFirstLastName(true);
        await this.payrollPortability.writeSecondLastName(true);
        await this.payrollPortability.writeEmail(true);
        await this.payrollPortability.writeBirthday(false);
    }

    async _screenValidation({item, value, visibility}) {
        switch (item.toLowerCase()) {
            case 'form header':
                await this.payrollPortability.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form title':
                await this.payrollPortability.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form description':
                await this.payrollPortability.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form input name':
                await this.payrollPortability.inputName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form input first surname':
                await this.payrollPortability.inputFirstSurname.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form input second surname':
                await this.payrollPortability.inputSecondLastName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form input email':
                await this.payrollPortability.inputEmail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form input birthdate':
                await this.payrollPortability.inputBirthdate.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form button disabled':
                await this.payrollPortability.buttonDefault.waitForDisplayed({timeout: config.wait.M, reverse: value !== 'disabled'});
                break;
            case 'form first surname remove button':
                if (value !== 'visible') {
                    await this.payrollPortability.formFirstSurnameInputXButton.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                } else {
                    await this.payrollPortability.formFirstSurnameInputXButton.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'form first surname error message':
                if (value !== 'visible') {
                    await this.payrollPortability.formFirstSurnameInputWarning.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                } else {
                    await this.payrollPortability.formFirstSurnameInputWarning.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'form second last name remove button':
                if (value !== 'visible') {
                    await this.payrollPortability.formSecondLastNameInputXButton.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                } else {
                    await this.payrollPortability.formSecondLastNameInputXButton.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'form second last name error message':
                if (value !== 'visible') {
                    await this.payrollPortability.formSecondLastNameInputWarning.waitForDisplayed({timeout: config.wait.M, reverse: visibility === 'not visible'});
                } else {
                    await this.payrollPortability.formSecondLastNameInputWarning.waitForDisplayed({timeout: config.wait.M});
                }
                break;
            case 'form email remove button':
                await this.payrollPortability.eMailInputXButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form email error message':
                await this.payrollPortability.eMailInputWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form birthday remove button':
                await this.payrollPortability.birthDayInputXButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'form birthday error message':
                await this.payrollPortability.birthDayInputWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successfully registered title':
                await this.payrollPortability.guestRegisteredSuccessfullyTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successfully registered info text':
                await this.payrollPortability.guestRegisteredSuccessfullyInfoText.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successfully registered full name':
                await this.payrollPortability.guestRegisteredSuccessfullyFullName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successfully registered email':
                await this.payrollPortability.guestRegisteredSuccessfullyeMail.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successfully registered birthday':
                await this.payrollPortability.guestRegisteredSuccessfullyBirthDay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successfully registered accordion':
                await this.payrollPortability.guestRegisteredSuccessfullyAccordion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'successfully registered someone else button':
                await this.payrollPortability.buttonDefaultInvite.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({
                    message: `Element ${item} IS NOT DEFINED for [MEMBER GET MEMBER PAYROLL PORTABILITY]`,
                    key: item,
                    args: arguments[0]
                });
        }
    }
}

export default new MgmPayrollPortability();
