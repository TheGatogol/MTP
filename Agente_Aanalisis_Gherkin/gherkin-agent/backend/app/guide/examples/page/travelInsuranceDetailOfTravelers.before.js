import AbstractGlomoPage from '../../abstract-glomo-page.js';
import ScreenValidationKeyNotFound, {page} from '@csqe/radish';
import glomoMyTripsDateSelector from '../../../components/glomo-my-trips-date-selector.js';

@page('TravelInsuranceTravelInfoModal')
class TravelInsuranceTravelInfoModal extends AbstractGlomoPage {

    constructor() {
        super({
            root: '#cells-template-travelInsurance[state="active"]',
            elements: {
                firstNameImput: '#cells-template-travelInsuranceUserDataModal > cells-form-user-data-list > #traveler-1 > cells-molecule-input:nth-child(1) > #input',
                firstLastNameInput: '#cells-template-travelInsuranceUserDataModal > cells-form-user-data-list > #traveler-1 > cells-molecule-input:nth-child(2) > #input',
                secondLastNameInput: '#cells-template-travelInsuranceUserDataModal > cells-form-user-data-list > #traveler-1 > cells-molecule-input:nth-child(3) > #input',
                birthday: '#cells-template-travelInsuranceUserDataModal > cells-form-user-data-list > #traveler-1 > glomo-date-input > #dateInput',
                relationshipRadio: '#cells-template-travelInsuranceUserDataModal > cells-form-user-data-list > #traveler-1 > div.radio-group-relationship > cells-radio-group > cells-radio-button:nth-child(3)',
                genderRadio: '#cells-template-travelInsuranceUserDataModal > cells-form-user-data-list > #traveler-1 > div.radio-group-gender > cells-radio-group > cells-radio-button:nth-child(1)',

                glomoMyTripsDate: {
                    component: {
                        ComponentClass:glomoMyTripsDateSelector
                    }
                },
                contractOfferButton: '#travel-insurance-offer #footer > div > cells-st-button > button'
            },
            requiredElements: [
                'firstNameImput',
                'firstLastNameInput',
                'secondLastNameInput',
                'birthday',
                'relationshipRadio',
                'genderRadio',
            ]
        });

    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'destination radio button 1':
                await this.destinationRadioButton1.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'destination radio button 2':
                await this.destinationRadioButton2.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'date start selector':
                await this.dateStartSelector.scrollIntoView({block: 'start'});
                await this.dateStartSelector.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'date end selector':
                await this.dateEndSelector.scrollIntoView({block: 'start'});
                await this.dateEndSelector.waitForDisplayed({timeout: config.wait.S});
                break;
            case 'traveler number input':
                await this.travelerNumberInput.scrollIntoView({block: 'start'});
                await this.travelerNumberInput.waitForClickable({timeout: config.wait.S});
                await this.travelerNumberInput.click();
                await this.travelerNumberModalButton.waitForClickable({timeout: config.wait.M});
                await this.travelerNumberModalButton.click();
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async _fillInputField({element, value = ''}) {
        await element.waitForDisplayed({timeout: config.wait.S});
        await element.setValue({value: value});
    }

}

export default new TravelInsuranceTravelInfoModal();
