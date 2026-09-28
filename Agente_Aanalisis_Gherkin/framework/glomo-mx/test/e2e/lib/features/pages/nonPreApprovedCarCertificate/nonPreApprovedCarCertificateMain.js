import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ElementValidationKeyNotFound} from '@csqe/radish';
//Components
import CellsMoleculeHeader from '../../components/cells-molecule-header';

@page('nonPreApprovedCarCertificateMain')
class NonPreApprovedCarCertificateMain extends AbstractGlomoPage {

    constructor() {
        const formOptions = (element, value) => (`${rootExtension} ${element} [data-tag-name="bbva-form-option"][value="${value}"]`);
        const generalContents = (id) => (`${rootExtension} [data-tag-name="bbva-expandable-multistep"] [step="${id}"] div.step-content `); 
        const infoButtons = (infoButton) => (`${rootExtension} ${infoButton} dl dt div button [data-tag-name="bbva-core-icon"]`);
        const inputYourData = (id) => (`${rootExtension} ${id} #button span span.button-text`);
        const radioButtons = (element, value) => (`${rootExtension} ${element} [data-tag-name="bbva-form-radio-button"][value="${value}"]`);
        const rootExtension = 'bbva-multistep-no-pre-approved-car-certificate';
        const summarySection = (id, element) => (`${rootExtension} [data-tag-name="bbva-expandable-multistep"] [step="${id}"] ${element}`);
        const termsConditionsLinks = (element) => (`${rootExtension} ${element} div [data-tag-name="bbva-link"]`);

        super({
            root: '#cells-template-nonPreApprovedCarCertificate[state="active"]',
            elements: {
                back: 'cells-molecule-header div.right-container button#btnRight',
                header: CellsMoleculeHeader,
                bannerOffer: `${generalContents('1')} [data-tag-name="bbva-panel-info"]`,
                titleOffer: `${generalContents('1')} div.quote div [data-tag-name="bbva-text"].quote__title`,
                descriptionForm1: `${generalContents('1')} div.quote div [data-tag-name="bbva-text"].quote__description`,
                callMeBackButton: '[data-tag-name="bbva-expandable-multistep"] [step="__STEP__"] #footerLink',

                //Form 1 - Your Quotation
                radioButtonsGroup: `${rootExtension} #carType`,
                radioButtonPreownedCar: `${radioButtons('#carType', 'SEMINUEVO')}`,
                radioButtonNewCar: `${radioButtons('#carType', 'NUEVO')}`,
                inputCarYear: `${rootExtension} #carYear #button span span.button-text`,
                carYearOption: `${formOptions('#carYear', '2021')}`,
                inputCarPrice: `${rootExtension} input[name="carPrice"]`,
                inputCleanerCarPrice: `${rootExtension} #carPrice div.field [data-tag-name="bbva-button-icon"]`,
                inputDownPayment: `${rootExtension} input[name="downPayment"]`,
                inputCleanerDownPayment: `${rootExtension} #downPayment div.field [data-tag-name="bbva-button-icon"]`,
                amortizationTable: `${rootExtension} [data-tag-name="bbva-list-file"] div.box-container  [data-tag-name="bbva-link"]`,
                base: 'bbva-multistep-no-pre-approved-car-certificate',

                //Options form 1
                educationLevelOption: `${formOptions('#educationLevel', '4/UNIVERSIDAD')}`,
                houseTypeOption: `${formOptions('#houseType', 'P/PROPIO')}`,
                employeeTypeEmployeeOption: `${formOptions('#employeeType', '1482/FIJO')}`,
                employeeTypeIndependentOption: `${formOptions('#employeeType', '1484/INDEPENDIENTE')}`,
                companyTypeOption: `${formOptions('#companyType', '1616/PRIVADA')}`,
                companySectorOption:  `${formOptions('#companySector', '1I/ALIMENTACION/BEBIDA')}`,

                //Info Buttons - Your Quotation
                downPaymentInfoButton: `${rootExtension} #downPayment div.label-out [data-tag-name="bbva-link"]`,
                interestRateInfoButton: `${infoButtons('#fixedRate')}`,
                commissionOpeningInfoButton: `${infoButtons('#commission')}`,
                catInfoButton: `${infoButtons('#cat')}`,
                lifeInsuranceInfoButton: `${infoButtons('#lifeInsurance')}`,

                //Error Messages
                carPriceErrorMessage: `${rootExtension} #carPrice div.message.error`,
                downPaymentErrorMessage: `${rootExtension} #downPayment div.message.error`,
                grossIncomesErrorMessage: `${rootExtension} #grossIncome div.message.error`,
                variableIncomesErrorMessage: `${rootExtension} #variableIncome div.message.error`,
                checkNoVariableIncomesWithoutGrossIncomes: `${generalContents('2')} form [data-tag-name="bbva-notification-help"]`,

                continueButton: `${rootExtension} #quoteStepContinueBtn`,

                // Form 2
                titleForm2: `${summarySection('2', 'div.header')}`,
                descriptionForm2: `${generalContents('2')} [data-tag-name="bbva-text"] span`,
                inputEducationLevel: `${inputYourData('#educationLevel')}`,

                inputHouseType: `${inputYourData('#houseType')}`,
                inputYearInHome: `${rootExtension} #yearsInHome input[aria-label="Años en la vivienda"]`,
                inputEmployeeType: `${inputYourData('#employeeType')}`,
                inputWorkingYears: `${rootExtension} #workingYears input[aria-label="Años de antigüedad"]`,
                inputCompanyType: `${inputYourData('#companyType')}`,
                inputCompanySector: `${inputYourData('#companySector')}`,
                inputGrossIncomes: `${rootExtension} input[aria-label="Ingreso bruto mensual ()"]`,
                inputVariableIncomes: `${rootExtension} input[aria-label="Ingresos variables al mes ()"]`,
                radioButtonYesVariableIncome: `${radioButtons('#hasVariableIncome', 'tiene')}`,
                radioButtonNoVariableIncome: `${radioButtons('#hasVariableIncome', 'no tiene')}`,
                inputVariableIncomesEmployee: `${rootExtension} #grossIncome input[aria-label="Ingresos variables al mes ($)"]`,
                advisoryNoOption: `${radioButtons('#advisoryOptions', 'NO')}`,

                //Form 2 - Help Button
                variableIncomeInfoButton: `${rootExtension} #hasVariableIncome div [data-tag-name="bbva-link"] div [data-tag-name="bbva-icon"]`,
                adviceOfPrivacyForm2: `${generalContents('2')} form [data-tag-name="bbva-list-link"] div [data-tag-name="bbva-link"]`,

                userDataContinueButton: `${rootExtension} #userDataContinueBtn`,

                //Terms and conditions section
                titleTC: `${summarySection('3', 'div.header')}`,
                descriptionTC: `${rootExtension} #termsDescription span`,
                quotationTC: `${termsConditionsLinks('#termsConditionsInfo')}`,
                creditHistoryTC: `${termsConditionsLinks('#creditBureauInfo')}`,
                noticeOfPrivacyTC: `${termsConditionsLinks('#privacyInfo')}`,
                creditBureauHistoryCheck: `${rootExtension} #creditBureauHistoryCheck div span.checkbox`,
                personalDataPrivacyCheck: `${rootExtension} #personalDataPrivacyCheck div span.checkbox`,
                continueButtonTC: `${generalContents('3')} div div.step-button-container [data-tag-name="bbva-button-default"]`,

                //Summary Section
                summaryEditSection1: `${summarySection('1', '#editButton')}`,
                summaryEditSection2: `${summarySection('2', '#editButton')}`,
                summaryEditSection3: `${summarySection('3', '#editButton')}`,
                continueButtonSummary: 'bbva-panel-button-fixed #button',
                callMeBackButtonResumen:'bbva-panel-button-fixed.no-gradient #footerLink'
            },
            requiredElements: [
                'header', 'bannerOffer'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'banner':
                await this.bannerOffer.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title form 1':
                await this.titleOffer.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'description form 1':
                await this.descriptionForm1.waitForDisplayed({timeout: config.wait.L});
                break;
            //Form 1 - Your Quotation
            case 'input car year':
                await this.inputCarYear.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'continue button':
                await this.continueButton.waitForDisplayed({timeout: config.wait.L});
                break;
            // Error messages
            case 'car price error message':
                await this.carPriceErrorMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'down payment error message':
                await this.downPaymentErrorMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'gross incomes error message':
                await this.grossIncomesErrorMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'variable incomes error message':
                await this.variableIncomesErrorMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'first indicate gross incomes error message':
                await this.checkNoVariableIncomesWithoutGrossIncomes.waitForDisplayed({timeout: config.wait.L});
                break;
            //Form 2 - Your Data
            case 'title form 2':
                await this.titleForm2.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'description form 2':
                await this.descriptionForm2.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'continue button in user data section':
                await this.userDataContinueButton.waitForDisplayed({timeout: config.wait.L});
                break;
            //Terms and conditions Data
            case 'title tc':
                await this.titleTC.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'description tc':
                await this.descriptionTC.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'continue button tc':
                await this.continueButtonTC.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ElementValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async fillInputListOptions({element, option}) {
        await (await element.waitForClickable({timeout: config.wait.L})).click();
        await (await option.waitForClickable({timeout: config.wait.L})).click();
    }

    async fillInputFieldText({element, value = ''}) {
        await (await element.waitForClickable({timeout: config.wait.L})).click();
        await element.setValue({value: value});
    }

    async cleanInput({element, cleanerButton}) {
        await (await element.waitForClickable({timeout: config.wait.L})).click();
        await cleanerButton.click();
    }

    async addInformationForm2({variableIncomes = {}}) {
        await this.inputEducationLevel.waitForClickable({timeout: config.wait.L});
        await this.fillInputListOptions({element: this.inputEducationLevel, option: this.educationLevelOption});
        await this.fillInputListOptions({element: this.inputHouseType, option: this.houseTypeOption});
        await this.fillInputFieldText({element: this.inputYearInHome, value: '1'});
        await this.fillInputListOptions({element: this.inputEmployeeType, option: this.employeeTypeEmployeeOption});
        await this.fillInputFieldText({element: this.inputWorkingYears, value: '4'});
        await this.fillInputListOptions({element: this.inputCompanyType, option: this.companyTypeOption});
        await this.fillInputListOptions({element: this.inputCompanySector, option: this.companySectorOption});
        await this.fillInputListOptions({element: this.inputEmployeeType, option: this.employeeTypeEmployeeOption});
        await this.fillInputFieldText({element: this.inputGrossIncomes, value: '30000'});
        await (await this.advisoryNoOption.waitForClickable({timeout: config.wait.L})).click();
        if(variableIncomes) {
            await (await this.radioButtonYesVariableIncome.waitForClickable({timeout: config.wait.L})).click();
            await this.fillInputFieldText({element: this.inputVariableIncomesEmployee, value: '6000'});
        } else {
            await (await this.radioButtonNoVariableIncome.waitForClickable({timeout: config.wait.L})).click();
        }
    }

    async selectNoVariableIncomesOption() {
        await this.fillInputListOptions({element: this.inputEmployeeType, option: this.employeeTypeEmployeeOption});
        await (await this.radioButtonNoVariableIncome.waitForClickable({timeout: config.wait.L})).click();
    }

    async changeTypeCarOption() {
        await (await this.radioButtonPreownedCar.waitForClickable({timeout: config.wait.L})).click();
    }

    async completeQuotation({carType = {}, variableIncomes = {}}) {
        if(carType.toLowerCase() === 'preowned') {
            await this.changeTypeCarOption();
            await this.fillInputListOptions({element: this.inputCarYear, option: this.carYearOption});
        }
        await this.goToStep({step: 'confirmation screen', variableIncomes: variableIncomes});
    }

    async showInvalidIncomesBehavior({typeEmployee, grossIncome, variableIncome}) {
        switch (typeEmployee.toLowerCase()) {
            case 'employee':
                await this.fillInputListOptions({element: this.inputEmployeeType, option: this.employeeTypeEmployeeOption});
                await this.fillInputFieldText({element: this.inputGrossIncomes, value: grossIncome});
                await (await this.radioButtonNoVariableIncome.waitForClickable({timeout: config.wait.L})).click();
                if (variableIncome !== '0') {
                    await (await this.radioButtonYesVariableIncome.waitForClickable({timeout: config.wait.L})).click();
                    await this.fillInputFieldText({element: this.inputVariableIncomes, value: variableIncome});
                    await (await this.inputGrossIncomes.waitForClickable({timeout: config.wait.L})).click();
                }
                break;
            case 'independent':
                await this.fillInputListOptions({element: this.inputEmployeeType, option: this.employeeTypeIndependentOption});
                await this.fillInputFieldText({element: this.inputVariableIncomes, value: variableIncome});
                await (await this.advisoryNoOption.waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`${typeEmployee} type of employee is not available...`);
        }
    }

    async showPriceBehavior({limit}) {
        await this.cleanInput({element: this.inputCarPrice, cleanerButton: this.inputCleanerCarPrice});
        switch (limit.toLowerCase()) {
            case 'higher':
                await this.fillInputFieldText({element: this.inputCarPrice, value: global.user.data.amounts.price.higher});
                break;
            case 'less':
                await this.fillInputFieldText({element: this.inputCarPrice, value: global.user.data.amounts.price.less});
                break;
            case 'decimal':
                await this.fillInputFieldText({element: this.inputCarPrice, value: global.user.data.amounts.price.decimal});
                break;
            default:
                throw new Error(`${limit} limit is not available to insert`);
        }
    }

    async insertInvalidDownPayment({limit}) {
        await this.cleanInput({element: this.inputCarPrice, cleanerButton: this.inputCleanerCarPrice});
        await this.inputCarPrice.setValue({value: '100000'});
        await this.cleanInput({element: this.inputDownPayment, cleanerButton: this.inputCleanerDownPayment});
        switch (limit.toLowerCase()) {
            case 'higher':
                await this.fillInputFieldText({element: this.inputDownPayment, value: global.user.data.amounts.downPayment.higher});
                await (await this.inputCarPrice.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'less':
                await this.fillInputFieldText({element: this.inputDownPayment, value: global.user.data.amounts.downPayment.less});
                await (await this.inputCarPrice.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'decimal':
                await this.fillInputFieldText({element: this.inputDownPayment, value: global.user.data.amounts.downPayment.decimal});
                await (await this.inputCarPrice.waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`${limit} limit is not available to insert`);
        }
    }

    async openInfoModal({infoModal}) {
        switch (infoModal.toLowerCase()) {
            // Form 1
            case 'down payment':
                await (await this.downPaymentInfoButton.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'interest rate':
                await (await this.interestRateInfoButton.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'commission for opening':
                await (await this.commissionOpeningInfoButton.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'cat':
                await (await this.catInfoButton.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'life insurance':
                await (await this.lifeInsuranceInfoButton.waitForDisplayed({timeout: config.wait.L})).click();
                break;
                //Form 2
            case 'monthly variable income':
                await this.goToStep({step: 'your data section', variableIncomes: false});
                await (await this.variableIncomeInfoButton.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'notice of privacy':
                await this.goToStep({step: 'your data section', variableIncomes: false});
                await (await this.adviceOfPrivacyForm2.waitForClickable({timeout: config.wait.M})).click();
                break;
                // Section 3
            case 'quotations terms and conditions':
                await this.goToStep({step: 'terms and conditions section', variableIncomes: false});
                await (await this.quotationTC.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'terms and conditions':
                await this.goToStep({step: 'terms and conditions section', variableIncomes: false});
                await (await this.noticeOfPrivacyTC.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'credit history authorization':
                await this.goToStep({step: 'terms and conditions section', variableIncomes: false});
                await (await this.creditHistoryTC.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`${infoModal} info modal is not available to navigate.`);
        }
    }

    async goToStep({step, variableIncomes}) {
        switch (step.toLowerCase()) {
            case 'your data section':
                await (await this.continueButton.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'terms and conditions section':
                await this.goToStep({step: 'your data section', variableIncomes: variableIncomes});
                await this.addInformationForm2({variableIncomes: variableIncomes});
                await (await this.userDataContinueButton.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'summary section':
                await this.goToStep({step: 'terms and conditions section', variableIncomes: variableIncomes});
                await this.creditBureauHistoryCheck.click();
                await this.personalDataPrivacyCheck.click();
                await (await this.continueButtonTC.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'otp screen':
                await this.goToStep({step: 'summary section', variableIncomes: variableIncomes});
                await (await this.continueButtonSummary.waitForDisplayed({timeout: config.wait.L})).click();
                break;
            case 'confirmation screen':
                await this.goToStep({step: 'summary section', variableIncomes: variableIncomes});
                await (await this.continueButtonSummary.waitForDisplayed({timeout: config.wait.L})).click();
                await this.fillOtp('62918712');
                break;
            case 'second section':
                await this.goToStep({step: 'your data section', variableIncomes: variableIncomes});
                await this.addInformationForm2({variableIncomes: variableIncomes});
                break;
            default:
                throw new Error(`${step} step is not available to navigate`);
        }
    }

    async editSectionInSummary({section}) {
        switch (section.toLowerCase()) {
            case 'users quotation':
                await (await this.summaryEditSection1.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'users data':
                await (await this.summaryEditSection2.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'terms and conditions':
                await (await this.summaryEditSection3.waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`${section} not available to edit in summary section`);
        }
    }

    async leaveTheProcess() {
        await (await this.back.waitForClickable({timeout: config.wait.M})).click();
    }

    async callDataInput(){
        await this.base.execute({script: ()=>{
            this._onDataInput({ detail: {  value: '36' }, target:{name: 'paymentTerm', getAttribute: function(){ return 36; }}}, '_carData');
        }});
    }

    async playWith({element}) {
        switch (element) {
            case 'inputCarPrice':
                await (await this.inputCarPrice.waitForClickable({timeout: config.wait.L})).click();
                await (await this.inputDownPayment.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'radioButtonPreownedCar':
                await this.changeTypeCarOption();
                break;
            case 'inputDownPayment':
                await (await this.inputDownPayment.waitForClickable({timeout: config.wait.L})).click();
                await (await this.inputCarPrice.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'continueButton':
                await this.continueButton.click();
                break;
            case 'amortizationTable':
                await this.amortizationTable.click();
                break;
            case 'inputRange':
                await this.callDataInput();
                break;
            case 'newCheck':
                await this.base.execute({script:()=>{ this.shadowRoot.querySelector('#carType').selected='9'; }});
                await (await this.radioButtonNewCar.waitForClickable({timeout: config.wait.L})).click();
                break;
            default:
                throw new Error(`${element} is not available to click on`);
        }
    }
    async accessToCallMeBack(access, step) {
        switch (access) {
            case 'link':
                if(step==='summary'){
                    await this.callMeBackButtonResumen.waitForClickable({timeout: config.wait.L});
                    await this.callMeBackButtonResumen.click();
                }else{
                    await (await this.callMeBackButton.specifySelector({placeholder: '__STEP__', value: step})
                        .waitForClickable({timeout: config.wait.M}))
                        .click();
                }
                break;
            case 'header':
                await this.callMeBackButtonResumen.waitForDisplayed({timeout: config.wait.M});
                await this.header.faqsBtn.waitForClickable({timeout: config.wait.L});
                await this.header.faqsBtn.click();
                break;
            default:
                throw new Error(`The access '${access}' not found.`);
        }
    }

    async tooltipClose(){
        await this.header.closeTooltip();
    }
}
export default new NonPreApprovedCarCertificateMain();
