import AbstractGlomoPage from '../abstract-glomo-page';
import {page} from '@csqe/radish';
import GlomoDateInput from '../../components/glomo-date-input.js';

@page('DynamicLifeInsuranceAddBeneficiaryPage')
class DynamicLifeInsuranceAddBeneficiaryPage extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-dynamicLifeInsuranceAddBeneficiaryPage[state="active"]',
            elements: {
                nameInput: 'div.input-data-container cells-molecule-input:nth-child(2) #input',
                firstLastNameInput: 'div.input-data-container cells-molecule-input:nth-child(3) #input',
                secondLastNameInput: 'div.input-data-container cells-molecule-input:nth-child(4) #input',
                relationshipInput: 'div.input-data-container cells-molecule-input.dropdown_kinship #btnMainIcon',
                relationshipOption: 'cells-modal-selector #itemList',
                birthday: 'div.input-data-container glomo-date-input #dateInput',
                birthdayCm : {
                    component: {
                        ComponentClass: GlomoDateInput
                    }
                },
                addBtn: 'glomo-aggregation-life-insurance-add-beneficiary #acceptButton',
            },
            requiredElements: [
                'addBtn'
            ]
        });
    }

    async fillData() {
        await this.nameInput.waitForDisplayed({timeout: config.wait.S});
        await this.nameInput.setValue({value: global.user.data.name});
        await this.firstLastNameInput.waitForDisplayed({timeout: config.wait.S});
        await this.firstLastNameInput.setValue({value: global.user.data.last_name});
        await this.secondLastNameInput.waitForDisplayed({timeout: config.wait.S});
        await this.secondLastNameInput.setValue({value: global.user.data.second_lastname});
        await this.relationshipInput.waitForDisplayed({timeout: config.wait.M});
        await this.relationshipInput.click();
        await this.relationshipOption.waitForDisplayed({timeout: config.wait.L});
        await this.relationshipOption.click();
        await this.birthdayCm.dateInput.waitForDisplayed({timeout: config.wait.S});
        await this.birthdayCm.selectDate(global.user.data.birthday);
        await this.addBtn.waitForDisplayed({timeout: config.wait.S});
        await this.addBtn.click();
    }
}

export default new DynamicLifeInsuranceAddBeneficiaryPage();
