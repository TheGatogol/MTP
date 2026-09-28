import AbstractGlomoComponent from './abstract-glomo-component';
import {Commands} from '@csqe/radish';

//Components
import CellsMoleculeAmountInput from '../components/cells-molecule-amount-input';

export default class CellsStepFormRadiosAmountSelect extends AbstractGlomoComponent {
    constructor(args = {}) {
        const {
            elements, requiredElements, ...defaultArgsRest
        } = args;
        const defaultArgs = {
            name: 'cells-step-form-radios-amount-select',
            elements: {
                formRadiosAmountSelect: '',
                title: '.cells-step__header .cells-step__header-title',
                stepDescription: '[data-selector="mainDescription-0"]',
                areaConfiguration: '#points-transfer-configuration-id',
                changeBtn: '#changeBtn button',
                amountType: '#points-transfer-configuration-id div.filled p',
                amount: '#points-transfer-configuration-id div.filled cells-atom-amount .amount-wrapper',

                //radioButtons area
                areaRadioBtn: '#radioGroup',
                radioBtn: 'cells-radio-button[data-selector="radio-button-_INDEX_"]',
                radioBtnOtherPoints:'cells-radio-button[data-selector="radio-button-1"]',

                //input
                inputTitle: 'div.full .amount-input-label',
                amountInput: {
                    component: {
                        ComponentClass: CellsMoleculeAmountInput
                    }
                },

                messageErrorArea: '#amountInput cells-icon-message[type="error"]',

                //disclaimer
                disclaimer: '#points-transfer-configuration-id div.full .info-message',
                disclaimerIcon: '#points-transfer-configuration-id div.full .info-message #principalIcon.icon',
                disclaimerMessage: '#points-transfer-configuration-id .info-message .message',

                //Buttons
                acceptBtn: 'div.full .buttons cells-st-button.primary button',
            
                ...(elements || {})
            
            },
            requiredElements: [
                'title',
                'areaRadioBtn',
                ...(requiredElements || [])
            ],
            
        };
        super(Object.assign(defaultArgs, defaultArgsRest));

    }

    static get _baseRoot() {
        return {
            web: 'cells-step-form-radios-amount-select'
        };
    }

    async getRadioBtn(index) {
        await this.areaRadioBtn.waitForDisplayed({timeout: config.wait.L});
        return (this.radioBtn.specifySelector({placeholder: '_INDEX_', value: index}));
    }

    async selectRadioBtn(value) {
        await this.areaRadioBtn.waitForAnimation({timeout: config.wait.M});
        const selectedRadioBtn = await this.getRadioBtn(value);
        await selectedRadioBtn.waitForClickable({timeout: config.wait.L});
        await selectedRadioBtn.click();
    }

    async validateInputArea() {
        await this.inputTitle.waitForText();
        await this.amountInput.input.waitForDisplayed({timeout: config.wait.M});
        await this.amountInput.infoMessage.waitForDisplayed({timeout: config.wait.M});
        await this.amountInput.infoIcon.waitForDisplayed({timeout: config.wait.M});

    }

    async validateDisclaimer() {
        await this.disclaimer.waitForDisplayed({timeout: config.wait.L});
        await this.disclaimerIcon.waitForDisplayed({timeout: config.wait.L});
        await this.disclaimerMessage.waitForText();

    }

    async acceptBtnIsEnabled(reverse = false) {
        await this.acceptBtn.waitForDisplayed({timeout: config.wait.L});
        await this.acceptBtn.waitForEnabled({timeout: config.wait.XL, reverse: reverse});
    }

    async insertAmount(value) {
        await this.inputTitle.waitForDisplayed({timeout: config.wait.L});
        await this.amountInput.input.enterValue({value});
    }

    async otherPoints(){
        await this.radioBtnOtherPoints.waitForClickable({timeout: config.wait.XL});
        await this.radioBtnOtherPoints.click();
    }

    async messageErrorAreaIsVisibility(reverse = false) {
        if (reverse) {
            await this.messageErrorArea.waitForDisplayed({timeout: config.wait.L, reverse: reverse});
        } else {
            await this.messageErrorArea.waitForDisplayed({timeout: config.wait.L});
            await this.validateErrorInformation();
        }

    }

    async validateErrorInformation() {
        await this.amountInput.errorMessage.waitForDisplayed();
        await this.amountInput.errorIcon.waitForDisplayed();
    }

    async areaConfigurationIsEnabled(reverse = false) {
        await this.areaConfiguration.scrollIntoView({block: 'start'});
        await this.areaConfiguration.waitForAttribute({attribute: 'active', reverse});
    }

    async showPointsToTransfer() {
        await this.formRadiosAmountSelect.scrollIntoView({block: 'start'});
        await this.changeBtn.waitForAnimation({timeout: config.wait.L});
        await this.changeBtn.waitForClickable({timeout: config.wait.XL});
        await this.changeBtn.click();
    }

    async confirmPoints() {
        await this.areaRadioBtn.waitForAnimation({timeout: config.wait.M});
        await this.acceptBtn.waitForClickable({timeout: config.wait.L});
        await this.acceptBtn.click();
    }

    async validateStepCollapsed() {
        await this.title.waitForText({timeout: config.wait.M});
        await this.changeBtn.waitForText({timeout: config.wait.M});
        await this.amountType.waitForText({timeout: config.wait.M});
        await this.amount.waitForText({timeout: config.wait.M});
    }

    async isEnabledRadioButton(reverse = false, value) {
        const selectedRadioBtn = await this.getRadioBtn(value);
        await selectedRadioBtn.waitForEnabled({timeout: config.wait.L, reverse: reverse});
    }

    async continueOperation() {
        await Commands.pause({time: config.wait.S});
        await this.acceptBtn.waitForClickable({timeout: config.wait.L});
        await this.acceptBtn.click();
    }

    async checkWithoutDecimals(value) {
        const expectValue = await this.amountInput.input.getValue();
        expect(expectValue === value).to.be.false;
    }
}
