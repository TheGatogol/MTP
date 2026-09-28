import AbstractGlomoPage from '../abstract-glomo-page';
import {ElementNotFoundError, ScreenValidationKeyNotFound, page} from '@csqe/radish';
import GlomoAlertManager from '../../components/glomo-alert-manager';
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page()
class PostalAddressNominees extends AbstractGlomoPage {
    
    constructor(){
        super({
            root: '#cells-template-postalAddressNominees[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeader,
                    }
                },
                dialogOperations: [
                    GlomoAlertManager
                ],
                title: '.cells-step__header-main',
                subtitle: '.step-sub-title',
                streetNameInput: 'cells-molecule-input[name="address"] input',
                exteriorNumberInput: 'cells-molecule-input[name="outNum"] input',
                interiorNumberInput: 'cells-molecule-input[name="inNum"] input',
                cpInput: 'cells-molecule-input[name="postalCode"] input',
                cpErrorMessage: 'cells-icon-message[type="error"].message-input',
                eraseButton: '#__ID__ #btnMainIcon',
                colonyDropDownButton: '#inputSuburb',
                colonyDropDownMenu: '#itemList li:first-of-type .label-container__text',
                colonyDropDownEmptyMenu: '#modal-options #modal #content',
                cityField: 'cells-molecule-input[name="city"]',
                stateField: 'cells-molecule-input[name="state"]',
                countryField: 'cells-molecule-input[name="country"]',
                continueButton: '.button-container button',
                privacyTitle: '.privacy-notice p[data-selector="title-0"]',
                privacySubtitle: '.privacy-notice p[data-selector="mainDescription-0"]',
                privacyLink: '.privacy-notice .link'
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async _screenValidation({item, disabled, hasValue} = {}){ 
        switch(item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subtitle':
                await this.subtitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'street name input':
                await (await this.streetNameInput.waitForDisplayed({timeout: config.wait.M}))
                    .waitForProperty({property: 'value', value: '', timeout: config.wait.M, reverse: hasValue === 'true'});
                break;
            case 'exterior number input':
                await (await this.exteriorNumberInput.waitForDisplayed({timeout: config.wait.M}))
                    .waitForProperty({property: 'value', value: '', timeout: config.wait.M, reverse: hasValue === 'true'});
                break;
            case 'interior number input':
                await (await this.interiorNumberInput.waitForDisplayed({timeout: config.wait.M}))
                    .waitForProperty({property: 'value', value: '', timeout: config.wait.M, reverse: hasValue === 'true'});
                break;
            case 'postal code input':
                await (await this.cpInput.waitForDisplayed({timeout: config.wait.M}))
                    .waitForProperty({property: 'value', value: '', timeout: config.wait.M, reverse: hasValue === 'true'});
                break;
            case 'postal code error message':
                await this.cpErrorMessage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'colony drop down button':
                if(disabled === 'true'){
                    await (await this.colonyDropDownButton.waitForDisplayed({timeout: config.wait.M})).waitForAttribute({attribute: 'disabled', value: disabled});
                } else {
                    await (await this.colonyDropDownButton.waitForDisplayed({timeout: config.wait.M})).waitForEnabled({timeout: config.wait.M});
                }
                break;
            case 'colony menu':
                if(hasValue === 'false'){
                    await this.colonyDropDownEmptyMenu.waitForDisplayed({timeout: config.wait.M});
                } else {
                    await (await (await this.colonyDropDownMenu).waitForDisplayed({timeout: config.wait.M})).waitForText({timeout: config.wait.M});
                }
                break;
            case 'city field':
                if(disabled === 'true'){
                    await (await this.cityField.waitForDisplayed({timeout: config.wait.M})).waitForAttribute({attribute: 'disabled', value: disabled});
                } else if(hasValue === 'true'){
                    await (await this.cityField.waitForEnabled({timeout: config.wait.M})).waitForText({timeout: config.wait.M});
                }
                else {
                    await (await this.cityField.waitForDisplayed({timeout: config.wait.M})).waitForEnabled({timeout: config.wait.M});
                }
                break;
            case 'state field':
                if(disabled === 'true'){
                    await (await this.stateField.waitForDisplayed({timeout: config.wait.M})).waitForAttribute({attribute: 'disabled', value: disabled});
                } else if(hasValue === 'true'){
                    await (await this.stateField.waitForEnabled({timeout: config.wait.M})).waitForText({timeout: config.wait.M});
                }
                else {
                    await (await this.stateField.waitForDisplayed({timeout: config.wait.M})).waitForEnabled({timeout: config.wait.M});
                }
                break;
            case 'country field':
                if(disabled === 'true'){
                    await (await this.countryField.waitForDisplayed({timeout: config.wait.M})).waitForAttribute({attribute: 'disabled', value: disabled});
                } else if(hasValue === 'true'){
                    await (await this.countryField.waitForDisplayed({timeout: config.wait.M})).waitForText({timeout: config.wait.M});
                } else {
                    await (await this.countryField.waitForDisplayed({timeout: config.wait.M})).waitForEnabled({timeout: config.wait.M});
                }
                break;
            case 'privacy title':
                await this.privacyTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy subtitle':
                await this.privacySubtitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy link':
                await this.privacyLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button':
                disabled === 'true' ?
                    await this.continueButton.waitForClickable({timeout: config.wait.M, reverse: true}) :
                    await (await this.continueButton.waitForVisible({timeout: config.wait.M})).waitForClickable({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async fillInputs(inputs) {
        for(const input of inputs){
            switch(input['input'].toLowerCase()) {
                case 'street name input':
                    await (await this.streetNameInput.waitForClickable({timeout: config.wait.L})).setValue({value: input['value'], forceFocus: true});
                    break;
                case 'exterior number input':
                    await (await this.exteriorNumberInput.waitForClickable({timeout: config.wait.M})).setValue(input['value']);
                    break;
                case 'interior number input':
                    await (await this.interiorNumberInput.waitForClickable({timeout: config.wait.M})).setValue(input['value']);
                    break;
                case 'postal code input':
                    await (await this.cpInput.waitForClickable({timeout: config.wait.M})).setValue(input['value']);
                    break;
                case 'neighborhood':
                    await this.selectColony();
                    break;
                default:
                    throw new ElementNotFoundError(`No se encontró el elemento ${input['input']}`);
            }

        }
        
    }

    async eraseInputs(inputs){
        for(const input of inputs){
            switch(input['input'].toLowerCase()){
                case 'street name input':
                    await (await this.streetNameInput.waitForClickable({timeout: config.wait.M})).click();
                    await (await (await this.eraseButton.specifySelector({placeholder: '__ID__', value: 'address'})).waitForClickable({timeout: config.wait.S})).click();
                    break;
                case 'exterior number input':
                    await (await this.exteriorNumberInput.waitForClickable({timeout: config.wait.M})).click();
                    await (await (await this.eraseButton.specifySelector({placeholder: '__ID__', value: 'outNum'})).waitForClickable({timeout: config.wait.S})).click();
                    break;
                case 'interior number input':
                    await (await this.interiorNumberInput.waitForClickable({timeout: config.wait.M})).click();
                    await (await (await this.eraseButton.specifySelector({placeholder: '__ID__', value: 'inNum'})).waitForClickable({timeout: config.wait.S})).click();
                    break;
                case 'postal code input':
                    await (await this.cpInput.waitForClickable({timeout: config.wait.M})).click();
                    await (await (await this.eraseButton.specifySelector({placeholder: '__ID__', value: 'postalCode'})).waitForClickable({timeout: config.wait.S})).click();
                    break;
                default:
                    throw new ElementNotFoundError(`No se encontró el elemento ${input['input']}`);
            }
        }
    }

    async goToPrivacyNotice() {
        await (await this.privacyLink.waitForClickable({timeout: config.wait.M})).click();
    }

    async openColonyMenu() {
        await (await this.colonyDropDownButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async selectColony(){
        await this.openColonyMenu();
        await(
            await (
                await this.colonyDropDownMenu.specifySelector({placeholder: '__VALUE__', value: ':first-of-type'})
            ).waitForClickable({timeout: config.wait.L})
        ).click();
    }

    async acceptForm(){
        await (await this.continueButton.waitForClickable({timeout: config.wait.M})).click();
        await this.fillOtp('11111111');
    }

    async goToOtp(){
        await (await this.continueButton.waitForClickable({timeout: config.wait.M})).click();
    }

    async retryModal(times) {
        for(let i=0;i<times;i++){
            await this.dialogOperations.acceptBtn.waitForClickable({timeout: config.wait.M});
            await this.dialogOperations.confirmDialog({isConfirmed: true});
            if(i !== 2){
                await this.acceptForm();
            }
        }
    }

}

export default new PostalAddressNominees();
