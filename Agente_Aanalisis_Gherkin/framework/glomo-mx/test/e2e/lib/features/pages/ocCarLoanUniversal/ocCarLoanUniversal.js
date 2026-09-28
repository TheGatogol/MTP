import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import CellsSignOperationModalSpherica from '../../components/cells-sign-operation-modal-spherica';

@page()
class OcCarLoanUniversal extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-ocCarLoanOrigination[state="active"]',
            elements: {
                signModal: CellsSignOperationModalSpherica,
                buttonInitScreen: '[data-tag-name="loan-mortgage-origination-oc-car-loan-mx"] [data-tag-name="loan-mortgage-origination-oc-car-loan-mx-init-offer"] [data-tag-name="bbva-button-default"]',
                initScreen: '[data-tag-name="loan-mortgage-origination-oc-car-loan-mx-warning-modal"]',
                ocCarLoanMultiStep:{
                    properties:{
                        root:'[data-tag-name="loan-mortgage-origination-oc-car-loan-mx-multistep"]'
                    },
                    closeMultiStep: '.main .content .modal-header #helpModalHeader header div[data-id="iconsRight"]',
                    headerTitle: '.main .content .modal-header #helpModalHeader .header',
                    generateSimulationButton: '.main .confirm-step [data-tag-name="bbva-button-default"].confirm-step-button'
                },
                simulationStep: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"][step="0"]',
                    },
                    form: {
                        properties: {
                            root: '[data-tag-name="loan-mortgage-origination-oc-car-loan-mx-simulation-step"]',
                        },
                        radioButtonOldCar: '[data-tag-name="bbva-form-radio-button-input"][tabindex="-1"]',
                        radioButtonNewCar: '[data-tag-name="bbva-form-radio-button-input"][tabindex="0"]',
                        continueButton: '.confirm-area-buttons [data-tag-name="bbva-button-default"]',
                        contentCarType: '.car-type',
                        infoCarType: '.car-type [data-tag-name="bbva-button-default"]',
                        rangeInputCar: '.price-range [data-tag-name="bbva-form-range"] .container .bar.sections div:nth-child(2)',
                        textAmountCar: '.car-price [data-tag-name="bbva-form-input"][label="Precio del auto"] .label-out [data-tag-name="bbva-type-text"]',
                        messageAmountSuggestion: '.panel-summary [data-tag-name="bbva-expandable-accordion"] [data-tag-name="bbva-notification-message"]',
                        barAmountSuggestion: '.panel-summary [data-tag-name="bbva-expandable-accordion"] [data-tag-name="bbva-data-visualization-bar"]',
                        textAmountSuggestion: '.panel-summary [data-tag-name="bbva-expandable-accordion"] [data-tag-name="loan-mortgage-origination-oc-car-loan-mx-list-category"][text="Monto a solicitar"]',
                        helpDownPayment: '[data-tag-name="bbva-form-input"][label="Enganche"] [data-tag-name="bbva-form-amount"] .label-out [data-tag-name="bbva-button-default"]',
                        callMeBackLink: '.confirm-area-buttons [data-tag-name="bbva-type-link"]',
                    },
                    header: '.header #headingLabel',
                    inputCarPrice: '[data-tag-name="bbva-form-amount"][label="Precio del auto"] input',
                    inputCarHitch: '[data-tag-name="bbva-form-amount"][label="Enganche"] input',
                    contentCarHitch: '[data-tag-name="bbva-form-amount"][label="Enganche"]',
                    labelCarPrice: '[data-tag-name="bbva-form-amount"] .label-out [text="¿Cuánto cuesta el auto que quieres?"]',
                    labelCarHitch: '[data-tag-name="bbva-form-amount"] .label-out [text="¿Cuánto pagarías de enganche?"]',
                    textSteps: '[data-tag-name="bbva-badge-default"]',
                    panelSummary: '.panel-summary',
                    feesAndCosts: '.fees-and-costs',
                    summaryModificationSimulation: '.summary',
                    amortizationTable: '[data-tag-name="loan-mortgage-origination-oc-car-loan-mx-list-file"] .button-container',
                },
                userDataStep: {
                    properties: {
                        root:  '[data-tag-name="loan-mortgage-origination-oc-car-loan-mx"] [data-tag-name="loan-mortgage-origination-oc-car-loan-mx-multistep"] [data-tag-name="bbva-expandable-multistep"] [data-tag-name="bbva-expandable-step"][step="1"]',
                    },
                    header: '.header #headingLabel',
                    summaryDataStep: '.summary',
                    linkEditButton: '.header #editButton',
                    headingComplet: '.headingLabel',
                    textSteps: '.header [data-tag-name="bbva-badge-default"]',
                    textStepsDescription: '[data-tag-name="loan-mortgage-origination-oc-car-loan-mx-user-data-step"] [data-tag-name="bbva-type-text"][text="Para generar tu simulación de crédito, compártenos algunos datos sobre ti."]',
                    titleSteps: '[data-tag-name="loan-mortgage-origination-oc-car-loan-mx-user-data-step"] [data-tag-name="bbva-type-text"][text="Tus datos personales"]',
                    labelStepsRadio: '[data-tag-name="bbva-form-radio-button"][text="¿Recibiste asesoría de un ejecutivo? (Opcional)"]',
                    continueButton: '[data-tag-name="loan-mortgage-origination-oc-car-loan-mx-user-data-step"] [data-tag-name="bbva-button-default"][fullwidth]',
                    modifyUserPhone: '.summary [data-tag-name="loan-mortgage-origination-oc-car-loan-mx-list-category"][text="Teléfono de contacto"]',
                    amountVariableData: '.summary [data-tag-name="loan-mortgage-origination-oc-car-loan-mx-list-category"][text="Ingreso variable mensual (Opcional)"]',
                    inputPhone: '[data-tag-name="bbva-form-input"][label="Teléfono de contacto"] input',
                    inputYearsInTheHome: '[data-tag-name="bbva-form-input"][label="Años en la vivienda"] input',
                    inputYearsOfAge: '[data-tag-name="bbva-form-input"][label="Años de antigüedad"] input',
                    inputMonthlyIncome: '[data-tag-name="bbva-form-input"][label="Ingreso bruto mensual"] [data-tag-name="bbva-form-amount"] input',
                    inputMonthlyVariableIncome: '[data-tag-name="bbva-form-input"][label="Ingreso variable mensual"] [data-tag-name="bbva-form-amount"] input',
                    selectHighestLevelEducation: '[data-tag-name="bbva-form-select"][label="Último nivel de estudios"]',
                    optionHighestLevelEducation: '[data-tag-name="bbva-form-select"][label="Último nivel de estudios"] [data-tag-name="bbva-form-option"][value="5/POSTGRADO"]',
                    selectHouseType: '[data-tag-name="bbva-form-select"][label="Tipo de vivienda"]',
                    optionHouseType: '[data-tag-name="bbva-form-select"][label="Tipo de vivienda"] [data-tag-name="bbva-form-option"][value="R/RENTA"]',
                    selectWorkerType: '[data-tag-name="bbva-form-select"][label="Tipo de trabajador"]',
                    optionWorkerType: '[data-tag-name="bbva-form-select"][label="Tipo de trabajador"] [data-tag-name="bbva-form-option"][value="1482/FIJO"]',
                    selectCompanyType: '[data-tag-name="bbva-form-select"][label="Tipo de empresas"]',
                    optionCompanyType: '[data-tag-name="bbva-form-select"][label="Tipo de empresas"] [data-tag-name="bbva-form-option"][value="1616/PRIVADA"]',
                    selectSector: '[data-tag-name="bbva-form-select"][label="Sector"]',
                    optionSector: '[data-tag-name="bbva-form-select"][label="Sector"] [data-tag-name="bbva-form-option"][value="1I/ALIMENTACION/BEBIDA"]',
                    adviceYes: '[data-tag-name="bbva-form-radio-button-input"][label="Sí recibí"]',
                    adviceNo: '[data-tag-name="bbva-form-radio-button-input"][label="No recibí"]',
                    adviceYesSelected: '[data-tag-name="bbva-form-radio-button-input"][label="Sí recibí"][aria-checked="true"]',
                    adviceNoSelected: '[data-tag-name="bbva-form-radio-button-input"][label="No recibí"][aria-checked="true"]',
                },
                termsAndConditions: {
                    properties: {
                        root: '[data-tag-name="bbva-expandable-step"][step="2"]',
                    },
                    checks: {
                        properties: {
                            root: '[data-tag-name="loan-mortgage-origination-oc-car-loan-mx-terms-conditions-step"]',
                        },
                        termsAndConditionsLink: '.docs .terms',
                        privacyNoticeLink: '.docs [data-tag-name="loan-mortgage-origination-oc-car-loan-mx-list-file"][event-detail="modalPrivacy"]',
                        authorizationLink: '.docs [data-tag-name="loan-mortgage-origination-oc-car-loan-mx-list-file"][event-detail="modalBureau"]',
                        historyCreditCheckBox: '.checkbox:nth-child(1) [data-tag-name="bbva-form-checkbox-input"]',
                        privacyNoticeCheckBox: '.checkbox:nth-child(2) [data-tag-name="bbva-form-checkbox-input"]',
                        continueButton: '[data-tag-name="bbva-button-default"][fullwidth]',
                    },
                    headerTermsAndConditions: '.header #headingLabel',
                    textStepsTermsAndConditions: '[data-tag-name="bbva-badge-default"]',
                    conditionsForCotizacion: '.docs .terms',
                    sumaryTermsAndConditions: '.summary',
                    badgeTermsAndConditions: '[data-tag-name="bbva-badge-icon"][status="checked"]',
                },
                insuranceInfo: {
                    properties: {
                        root: '.content [data-tag-name="loan-mortgage-origination-oc-car-loan-mx-simulation-step"]',
                    },
                    lifeInsuranceButton: '.panel-summary [data-tag-name="loan-mortgage-origination-oc-car-loan-mx-list-category"][is-help] .help-icon-button-container [data-tag-name="bbva-button-default"]',
                    tinInfoButton: '.panel-container [data-tag-name="loan-mortgage-origination-oc-car-loan-mx-list-category"] [data-tag-name="bbva-button-default"][aria-label="Tasa de interés fija anual"]',
                    catInfoButton: '.panel-container [data-tag-name="loan-mortgage-origination-oc-car-loan-mx-list-category"] [data-tag-name="bbva-button-default"][aria-label="CAT sin IVA"]',
                    commissionInfoButton: '.panel-container [data-tag-name="loan-mortgage-origination-oc-car-loan-mx-list-category"] [data-tag-name="bbva-button-default"][aria-label="Comisión por Contratación – Crédito"]',
                    damageInsuranceInfoButton: '.confirm-area div [data-tag-name="bbva-button-default"]',
                },
                warningModal:{
                    properties: {
                        root: '[data-tag-name="loan-mortgage-origination-oc-car-loan-mx-warning-modal"]',
                    },
                    standardModal:{
                        properties:{
                            root: '[idmodal="warningModalStandard"]'
                        },
                        acceptButton: '.content .modal-footer [data-tag-name="bbva-button-default"][text="Continuar simulación"]',
                        modal: '.content',
                        title: '.help-modal .modal-header',
                        body: '.content .slot-content',
                        iconWarning: '.content .modal-title [data-tag-name="bbva-type-icon"]',
                        backToSimulationButton: '.modal-footer [data-tag-name="bbva-button-default"][text="Regresar al simulador"]',
                        retryRequest: '.help-modal .modal-footer [data-tag-name="bbva-button-default"]',
                    },
                    warningModalFullHeight:{
                        properties:{
                            root: '[idmodal="warningModalFullHeight"]'
                        },
                        outButton: '.content .modal-footer [data-tag-name="bbva-button-default"][text="Salir"]',
                        titleDocuments: '.modal-main #helpModalTitle [data-tag-name="bbva-type-text"]#title-text',
                        header: '.content .modal-header',
                        textNeedRfc: '[slot="slot-content"] [data-tag-name="bbva-list-bullet"][text="Constancia de situación fiscal impresa con RFC y homoclave."]',
                        iconWarning: '.content .modal-title [data-tag-name="bbva-type-icon"]',
                        needMoreInformation: '#title-text',
                        bureauLockRejection: '[slot="slot-content"] [data-tag-name="bbva-type-text"][text="Tu historial de crédito nos ayuda a ofrecerte opciones adecuadas para ti. Lo revisamos y por ahora no es posible otorgarte este crédito."]',
                        deniedSimulation: '[data-tag-name="bbva-type-text"][text="Acude a una sucursal para que un ejecutivo pueda asesorarte."]',
                        retryRequest: '.help-modal .modal-footer [data-tag-name="bbva-button-default"]',
                    },
                    linkButton: '.content .modal-footer [data-tag-name="bbva-button-default"].link',
                },
                multiStepGenerateSimulation: '[data-tag-name="bbva-expandable-multistep"] .confirm-step [data-tag-name="bbva-button-default"]',
                successModal:{
                    properties:{
                        root:'[data-tag-name="loan-mortgage-origination-oc-car-loan-mx-success"]'
                    },
                    title: '[data-tag-name="bbva-type-text"][size="3XL"]',
                    labelAmount: '[data-tag-name="bbva-type-text"][text="Guarda tu número de folio para el seguimiento de tu simulación"]',
                    amount: '[data-tag-name="bbva-type-amount"]',
                    infoContent: '.info-container',
                    notificationContent: '.notification-container',
                    buttonRowContent: '[data-tag-name="bbva-button-row"]'
                },
            },
            requiredElements: [
                'initScreen',
            ]
        });
    }

    async _screenValidation({item}) {
        let elements;
        switch (item.toLowerCase()) {
            case 'button init simulation':
                await this.buttonInitScreen.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header step user data':
                await this.userDataStep.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description step user data':
                await this.userDataStep.textStepsDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title step user data':
                await this.userDataStep.titleSteps.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label radio step user data':
                await this.userDataStep.labelStepsRadio.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button user data':
                await this.userDataStep.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'miltistep simulation text two':
                await this.userDataStep.textSteps.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'text amount car':
                await this.simulationStep.form.textAmountCar.waitForDisplayed({timeout: config.wait.M});
                break;
            case '':
                await this.simulationStep.form.textAmountCar.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header simulation step':
                await this.simulationStep.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button simulation':
                await this.simulationStep.form.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'miltistep simulation text':
                await this.simulationStep.textSteps.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label car price':
                await this.simulationStep.labelCarPrice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label car hitch':
                await this.simulationStep.labelCarHitch.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'price simulation input':
                await this.simulationStep.inputCarPrice.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'hitch simulation input':
                await this.simulationStep.inputCarHitch.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'simulation summary container':
                await this.simulationStep.panelSummary.waitForDisplayed({timeout: config.wait.M});
                break;
            case'icon modal warning':
                await this.warningModal.standardModal.iconWarning.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal information':
                await this.warningModal.standardModal.modal.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title info modal':
                await this.warningModal.standardModal.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'body info modal':
                await this.warningModal.standardModal.body.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'rates and costs container':
                await this.simulationStep.feesAndCosts.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'container your simulation':
                await this.simulationStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message amount suggestion':
                await this.simulationStep.form.messageAmountSuggestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'bar amount suggestion':
                await this.simulationStep.form.barAmountSuggestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text amount suggestion':
                await this.simulationStep.form.textAmountSuggestion.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header terms and conditions':
                await this.waitForElementsExist(this.termsAndConditions.headerTermsAndConditions);
                elements = await this.termsAndConditions.headerTermsAndConditions.elements();
                await elements.value[0].waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'badge terms and conditions':
                await this.termsAndConditions.badgeTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text steps terms and conditions':
                await this.termsAndConditions.textStepsTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'continue button terms and conditions':
                await this.termsAndConditions.checks.continueButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sumary terms and conditions':
                await this.termsAndConditions.sumaryTermsAndConditions.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'sumary data step':
                await this.userDataStep.summaryDataStep.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'summary  simulation':
                await this.simulationStep.summaryModificationSimulation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'generate simulation':
                await this.multiStepGenerateSimulation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modify user data button':
                await this.userDataStep.modifyUserDataButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'phone number':
                await this.userDataStep.modifyUserPhone.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'amount variable data':
                await this.userDataStep.amountVariableData.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'link button warning modal':
                await this.warningModal.linkButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'check not receiving advice':
                await this.userDataStep.adviceNoSelected.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title simulate auto loan':
                await this.ocCarLoanMultiStep.headerTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'checks history credit':
                await this.termsAndConditions.checks.historyCreditCheckBox.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'check privacy notice':
                await this.termsAndConditions.checks.privacyNoticeCheckBox.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button modal warning accept':
                await this.warningModal.warningModalFullHeight.outButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header warning modal':
                await this.warningModal.warningModalFullHeight.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title modal succes':
                await this.successModal.title.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'title info documents modal':
                await this.warningModal.warningModalFullHeight.titleDocuments.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'amount modal succes':
                await this.successModal.amount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'label amount modal succes':
                await this.successModal.labelAmount.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'detail container modal succes':
                await this.successModal.infoContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'warning container modal succes':
                await this.successModal.notificationContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'button row modal succes':
                await this.successModal.buttonRowContent.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'content type of car':
                await this.simulationStep.form.contentCarType.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'credit history denied':
                await this.warningModal.warningModalFullHeight.bureauLockRejection.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'need know more':
                await this.warningModal.warningModalFullHeight.needMoreInformation.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'denied continue simulation':
                await this.warningModal.warningModalFullHeight.deniedSimulation.waitForDisplayed({ timeout: config.wait.M });
                break;
            case 'without rfc':
                await this.warningModal.warningModalFullHeight.textNeedRfc.waitForDisplayed({ timeout: config.wait.M });
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    setCurrentStep(step) {
        this.currentStep = step;
    }

    async continueProcess(step = this.currentStep) {
        switch (step) {
            case 'simulation':
                await (await this.simulationStep.form.continueButton.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'userData':
                await (await this.userDataStep.continueButton.waitForClickable({timeout: config.wait.M})).click();
                await (await this.warningModal.standardModal.acceptButton.waitForClickable({timeout: config.wait.M})).click();
                break;
            case 'termsAndConditions':
                await this.selectedTermsAndConditions();
                await (await this.termsAndConditions.checks.continueButton.waitForClickable({timeout: config.wait.L})).click();
                break;
            case 'summary':
                await (await this.multiStepGenerateSimulation.waitForClickable({timeout: config.wait.M})).click();
                break;
            default:
                await (await this[step].continueButton.waitForClickable({timeout: config.wait.M})).click();
                break;
        }

        this._moveToNextStep(step);
    }

    _moveToNextStep(currentStep) {
        const stepList = ['initScreen', 'simulation', 'userData', 'termsAndConditions', 'summary'];
        const currentIndex = stepList.indexOf(currentStep);
        if (currentIndex !== -1 && currentIndex < stepList.length - 1) {
            this.setCurrentStep(stepList[currentIndex + 1]);
        }
    }

    async goToStep({step, carType = 'new', fillPersonalData = false, selectAdvice = null, withSignModal = false} = {}) {
        switch (step.toLowerCase()) {
            case 'simulation':
                await this._ensureInitialized();
                if (this.currentStep === 'initScreen') {
                    await this.enterSimulationStep();
                    this.setCurrentStep('simulation');
                }
                break;
            case 'user data':
                await this._navigateToStep('simulation');
                await this._configureSimulationOptions(carType);
                await this._proceedToNextStep('userData');
                break;
            case 'terms and conditions':
                await this._navigateToStep('user data', {carType, fillPersonalData});
                await this._configureUserDataOptions(fillPersonalData, selectAdvice);
                await this._proceedToNextStep('termsAndConditions', this.termsAndConditions.headerTermsAndConditions);
                break;
            case 'summary':
                await this._navigateToStep('terms and conditions', {carType, fillPersonalData, selectAdvice});
                await this._proceedToNextStep('summary', this.multiStepGenerateSimulation);
                break;
            case 'generate simulation':
                await this._navigateToStep('summary', {carType, fillPersonalData, selectAdvice});
                await this._executeSimulation(withSignModal);
                break;
            default:
                throw new Error(`The step "${step}" is unknown. Cannot be processed.`);
        }
    }

    async _ensureInitialized() {
        if (!this.currentStep) {
            this.setCurrentStep('initScreen');
        }
    }

    async _navigateToStep(targetStep, options = {}) {
        if (this.currentStep !== targetStep) {
            await this.goToStep({step: targetStep, ...options});
        }
    }

    async _proceedToNextStep(stepName) {
        await this.continueProcess();
        this.setCurrentStep(stepName);
    }

    async _executeSimulation(withSignModal) {
        if (withSignModal) {
            await this.generateSimulation();
        } else {
            await this.continueProcess();
        }
    }

    async _configureSimulationOptions(carType) {
        if (carType === 'old') {
            await this.selectOldCar();
        }
    }

    async _configureUserDataOptions(fillPersonalData, selectAdvice) {
        if (fillPersonalData) {
            await this.completePersonalData();
        }
        if (selectAdvice) {
            await (await this.userDataStep.adviceYes.waitForClickable({timeout: config.wait.M})).click();
        }
    }

    async enterSimulationStep() {
        await this.buttonInitScreen.waitForDisplayed({timeout: config.wait.M});
        await this.buttonInitScreen.waitForAnimation({timeout: config.wait.M});
        await this.buttonInitScreen.click();
    }

    async selectedTermsAndConditions() {
        await (await this.termsAndConditions.checks.historyCreditCheckBox.waitForDisplayed({timeout: config.wait.M})).click();
        await (await this.termsAndConditions.checks.privacyNoticeCheckBox.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async selectOldCarContinue() {
        await this.goToStep({step: 'user data', carType: 'old'});
        await this.continueProcess('userData');
    }

    async selectOldCar() {
        await (await this.simulationStep.form.radioButtonOldCar.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async enterCarPrice() {
        const { carPriceInput } = global.user.information;
        await this.simulationStep.inputCarPrice.waitForDisplayed({ timeout: config.wait.M });
        await this.simulationStep.inputCarPrice.setValue({ value: carPriceInput });
    }

    async enterCarHitch(amount) {
        const price = global.user.information[amount.replaceAll(' ', '')];
        await (await this.simulationStep.inputCarHitch.scrollIntoView()).waitForDisplayed({ timeout: config.wait.M });
        await this.simulationStep.inputCarHitch.setValue({ value: price });
    }

    async changeTermCar() {
        await (await this.simulationStep.form.rangeInputCar.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async completePersonalData() {
        const {phone, yearsInTheHome, yearsOfAge, monthlyIncome, monthlyVariableIncome} = global.user.information;
        await (await this.simulationStep.form.continueButton.waitForDisplayed({ timeout: config.wait.M })).click();
        await this.userDataStep.inputPhone.waitForDisplayed({ timeout: config.wait.M });
        await this.userDataStep.inputPhone.setValue({ value: phone});
        await (await this.userDataStep.selectHighestLevelEducation.waitForDisplayed({ timeout: config.wait.M })).click();
        await (await this.userDataStep.optionHighestLevelEducation.waitForDisplayed({ timeout: config.wait.M })).click();
        await (await this.userDataStep.selectHouseType.waitForDisplayed({ timeout: config.wait.M })).click();
        await (await this.userDataStep.optionHouseType.waitForDisplayed({ timeout: config.wait.M })).click();
        await this.userDataStep.inputYearsInTheHome.waitForDisplayed({ timeout: config.wait.M });
        await this.userDataStep.inputYearsInTheHome.setValue({ value: yearsInTheHome });
        await (await this.userDataStep.selectWorkerType.waitForDisplayed({ timeout: config.wait.M })).click();
        await (await this.userDataStep.optionWorkerType.waitForDisplayed({ timeout: config.wait.M })).click();
        await this.userDataStep.inputYearsOfAge.waitForDisplayed({ timeout: config.wait.M });
        await this.userDataStep.inputYearsOfAge.setValue({ value: yearsOfAge });
        await (await this.userDataStep.selectCompanyType.waitForDisplayed({ timeout: config.wait.M })).click();
        await (await this.userDataStep.optionCompanyType.waitForDisplayed({ timeout: config.wait.M })).click();
        await (await this.userDataStep.selectSector.waitForDisplayed({ timeout: config.wait.M })).click();
        await (await this.userDataStep.optionSector.waitForDisplayed({ timeout: config.wait.M })).click();
        await this.userDataStep.inputMonthlyIncome.waitForDisplayed({ timeout: config.wait.M });
        await this.userDataStep.inputMonthlyIncome.setValue({ value: monthlyIncome });
        await this.userDataStep.inputMonthlyVariableIncome.waitForDisplayed({ timeout: config.wait.M });
        await this.userDataStep.inputMonthlyVariableIncome.setValue({ value: monthlyVariableIncome });
        await (await this.userDataStep.adviceNo.waitForDisplayed({ timeout: config.wait.M })).click();
    }

    async viewPersonalData() {
        await (await this.simulationStep.form.continueButton.waitForDisplayed({ timeout: config.wait.M })).click();
        await this.userDataStep.inputPhone.waitForDisplayed({ timeout: config.wait.M });
    }

    async selectTypeModal(step) {
        switch (step) {
            case 'help type of car':
                await (await this.simulationStep.form.infoCarType.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'help info down payment':
                await (await this.simulationStep.form.helpDownPayment.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'help life insurance info':
                await (await this.insuranceInfo.lifeInsuranceButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'help tin info':
                await (await this.insuranceInfo.tinInfoButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'help CAT info':
                await (await this.insuranceInfo.catInfoButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'help commission info':
                await (await this.insuranceInfo.commissionInfoButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            case 'help damage insurance info':
                await (await this.insuranceInfo.damageInsuranceInfoButton.waitForDisplayed({timeout: config.wait.M})).click();
                break;
            default:
                throw new Error(`the modal "${step}" was not found`);
        }
    }

    async selectWidget(step) {
        if (step === 'call me back') {
            await (await this.simulationStep.callMeBackLink.waitForDisplayed({timeout: config.wait.M})).click();
        } else if (step === 'amortization table') {
            await (await this.simulationStep.amortizationTable.waitForDisplayed({timeout: config.wait.M})).click();
        } else {
            throw new Error(`the widget "${step}" was not found`);
        }
    }

    async constinueStepData () {
        await this.completePersonalData();
        await (await this.userDataStep.continueButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async continueFromTermsAndConditions() {
        await this.continueProcess('termsAndConditions');
    }

    async selectedCheckBox(step) {
        switch (step) {
            case 'info terms and conditions':
                await (await this.termsAndConditions.checks.termsAndConditionsLink.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'info privacy notice':
                await (await this.termsAndConditions.checks.privacyNoticeLink.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            case 'history credit check':
                await (await this.termsAndConditions.checks.authorizationLink.waitForDisplayed({ timeout: config.wait.M })).click();
                break;
            default:
                throw new Error(`the modal "${step}" was not found`);
        }
    }

    async backToSimulation() {
        await (await this.warningModal.standardModal.backToSimulationButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async generateSimulation() {
        await (await this.multiStepGenerateSimulation.waitForDisplayed({timeout: config.wait.M})).click();
        await this.fillOtp('23452623');
    }

    async generateSimulationWithError() {
        await (await this.multiStepGenerateSimulation.waitForDisplayed({timeout: config.wait.M})).click();
        await this.fillOtp('23452623');
        await this.retryModalWarning();
    }

    async _retryModal(retryButton, retries = 3) {
        for (let i = 0; i < retries; i++) {
            await (await retryButton.waitForDisplayed({timeout: config.wait.M})).click();
        }
    }

    async retryModalWarning() {
        await this._retryModal(this.warningModal.standardModal.retryRequest);
    }

    async retryModalFullWarning() {
        await this._retryModal(this.warningModal.warningModalFullHeight.retryRequest);
    }

    async acceptSummaryContract() {
        await (await this.multiStepGenerateSimulation.waitForDisplayed({timeout: config.wait.M})).click();
        await this.signModal.waitForDisplayed({timeout: config.wait.M});
    }

    async checkReceivedAdvice() {
        await this.goToStep({step: 'user data'});
    }

    async checkReceivedAdviceInTerms(selected) {
        await this.goToStep({step: 'terms and conditions', selectAdvice: selected});
    }
}
export default new OcCarLoanUniversal();
