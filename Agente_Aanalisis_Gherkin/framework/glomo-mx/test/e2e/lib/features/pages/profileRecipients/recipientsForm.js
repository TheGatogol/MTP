import AbstractGlomoPage from '../abstract-glomo-page';
import { ScreenValidationKeyNotFound, page, Commands, utils } from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import BbvaHeaderMain from '../../components/bbva-header-main';

@page()
class RecipientsForm extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-recipientsForm[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: BbvaHeaderMain
                    }
                },
                editText: {
                    android: '//android.widget.ImageButton[@content-desc="Cambiar al modo de introducción Texto"]',
                },
                acceptButton: {
                    android: '//android.widget.Button[@content-desc="null, ACEPTAR"]',
                },
                textFieldBirthday: {
                    android: '//android.widget.EditText[@text="22/01/25"]',
                },
                form:
                {
                    title: 'bbva-header-category.header-data-recipients',
                    name: '#registry-input-first-name input',
                    lastName: '#registry-input-last-name input',
                    secondLastName: '#registry-input-second-last-name input',
                    relationship: '#registry-select-relationship',
                    birthDay: '#registry-birthdate',
                    showAddressBtn: '.options-right [data-tag-name=bbva-link]',
                    address: '#radio-group  bbva-form-radio-button:nth-child(1)',
                    newAddress: '#radio-group bbva-form-radio-button:nth-child(3)',
                    registerAddressBtn: '#link-registry-form',
                    continue: 'bbva-button-default.action'
                },
                closeAlert: [
                    GlomoAlertManager,
                    {
                        additionalElements: {
                            acceptBtn: 'div.buttons-container cells-st-button #acceptButton',
                            cancelBtn: 'div.buttons-container cells-st-button #cancelButton',
                            paragraphIcon: 'div.paragraph-template iron-icon:not([style="display: none;"])',
                            descriptions: 'div.paragraph-template .paragraph-template-text:not([style="display: none;"])',
                        }
                    }
                ],
            },
            requiredElements: [
                'header'
            ]
        });
    }
    async fillBeneficiary({beneficiary}) {
        await (await this.form.name.waitForClickable({timeout: config.wait.L})).setValue({value: beneficiary.name});
        await (await this.form.lastName.waitForClickable({timeout: config.wait.L})).setValue({value: beneficiary.lastName});
        await (await this.form.secondLastName.waitForClickable({timeout: config.wait.L})).setValue({value: beneficiary.secondLastName});
        await this.selectRelationship(beneficiary.kinship);
        await this.fillBirthday(beneficiary.birthDay);
        await (await this.form.address.waitForClickable({timeout: config.wait.L})).click();
        if (beneficiary.newAddress) {
            await this.registerNewAddress();
        }
    }
    async selectRelationship(option = '') {
        let kinship = '';
        switch (option) {
            case 'padre':
                kinship = '[value="PADRE"]';
                break;
            case 'madre':
                kinship = '[value="MADRE"]';
                break;
            case 'hijo/hija':
                kinship = '[value="HIJO/HIJA"]';
                break;
            case 'conyuge':
                kinship = '[value="CONYUGE"]';
                break;
            case 'hermano/hermana':
                kinship = '[value="HERMANO/HERMANA"]';
                break;
            case 'abuelo/abuela':
                kinship = '[value="ABUELO/ABUELA"]';
                break;
            case 'nieto/nieta':
                kinship = '[value="NIETO/NIETA"]';
                break;
            case 'tio/tia':
                kinship = '[value="TIO/TIA"]';
                break;
            case 'concubino/concubina':
                kinship = '[value="CONCUBINO/CONCUBINA"]';
                break;
            case 'socio':
                kinship = '[value="SOCIO"]';
                break;
            default:
                throw new Error(`[ERR] The option ${option} is unknown. Cannot be selected.`);
        }
        await this.form.relationship.selectOption({option: kinship});
    }
    async fillBirthday(birthday = '1999-04-15') {
        if(Commands.flags.isMobile) {
            await this.form.birthDay.waitForDisplayed({timeout: config.wait.M});
            await this.form.birthDay.click();
            await utils.runInContext({
                context: 'NATIVE_APP',
                action: async () => {
                    await this.editText.waitForDisplayed({timeout: config.wait.M});
                    await this.editText.click();
                    await (await this.textFieldBirthday
                        .waitForDisplayed({timeout: config.wait.M}))
                        .setValue({value: '22/01/1998'});
                    await this.acceptButton.waitForDisplayed({timeout: config.wait.M});
                    await this.acceptButton.click();
                }
            });
        } else {
            await (await this.form.birthDay.waitForEnabled({timeout: config.wait.L}))
                .sendKeys({keys: birthday.split('-').reverse().join('')});
        }
    }
    async showAddressAndFillUser() {
        await this.fillBirthday();
        await (await this.form.name.waitForClickable({timeout: config.wait.XL})).setValue({value:'RONALDO'});
        await this.selectRelationship('madre');
        await (await this.form.showAddressBtn.waitForClickable({timeout: config.wait.XL})).click();
        await this.fillOtp('11111111');
        await (await this.form.lastName.waitForClickable({timeout: config.wait.L})).setValue({value: 'TELLEZ'});
        await (await this.form.secondLastName.waitForClickable({timeout: config.wait.L})).setValue({value: 'LEAL'});
        await (await this.form.address.waitForClickable({timeout: config.wait.L})).click();
    }
    async enableNewAddressReg() {
        await (await this.form.newAddress.waitForClickable({timeout: config.wait.L})).click();
    }
    async registerNewAddress() {
        await this.enableNewAddressReg();
        await (await this.form.registerAddressBtn.waitForClickable({timeout: config.wait.L})).click();
    }

    async saveBeneficiary() {
        await (await this.form.continue.waitForClickable()).click();
    }

    async _screenValidation({item, value = ''}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.form.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'name':
                await this.form.name.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'lastname':
                await this.form.lastName.waitForDisplayed({timeout: config.wait.M});
                await this.form.secondLastName.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'relationship':
                await this.form.relationship.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'birthday':
                await this.form.birthDay.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'show address':
                await this.form.showAddressBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'address':
                await this.form.address.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'new address':
                await this.form.newAddress.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'register address':
                if (value !== 'disabled') {
                    await this.form.registerAddressBtn.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.form.registerAddressBtn.waitForDisabled({timeout: config.wait.M});
                }
                break;
            case 'continue':
                if (value !== 'disabled') {
                    await this.form.continue.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await this.form.continue.waitForDisabled({timeout: config.wait.M});
                }
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new RecipientsForm();
