import {Commands, Element} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';
import ContinueButton from './components/diy-multistep-continue-actions';
import CellsMoleculeHeader from '../../components/cells-molecule-header';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

import * as DictionarySelector from '../../utils/dictionarySelector';
import GlomoAlertManager from '../../components/glomo-alert-manager';

const camelCased = (myString) => myString.replace(/ ([a-z])/g, function (g) {
    return g[1].toUpperCase();
});

export default class DiyMultiStepComponentObject extends AbstractGlomoPage {
    constructor(page, args) {
        const defaultArgs = {
            root: args.root,
            elements: {
                moleculeHeader: {
                    component: {
                        ComponentClass: CellsMoleculeHeader,
                        args: {
                            root: 'cells-molecule-header[slot="app__header"]'
                        }
                    }
                },
                spinner: 'cells-spinner-veil.is-visible bbva-spinner.spinner',
                dialogOperations: [
                    GlomoAlertManager,
                    {
                        paragraphElements: {
                            strongParagraph: 'p.strong',
                            descriptionClean: 'p:not(.paragraph-icon):not(.strong)'
                        },
                        additionalElements: {
                            subtitle: '.glomo-alert-manager-paragraph-text',
                            list: '.list',
                            mediumSubTitle: 'p.black',
                        }
                    }
                ],
                multiStep: {
                    properties: {
                        status: {
                            active: '[state="active"]',
                            commons: {
                                stepActive: '[active]:not([collapsed])',
                                stepCollapsed: '[active][collapsed]',
                                consultLink: '[active][collapsed] #changeBtn'
                            }
                        },
                        OTPsign: true
                    },
                    stepSummary: {
                        properties: {},
                        continueButton: {
                            component: {
                                ComponentClass: ContinueButton,
                                args: {
                                    attributes: '.tertiary',
                                }
                            }
                        }
                    }
                }
            },
            elementsSpherica: {
                moleculeHeader: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica,
                        args: {
                            root: 'cells-molecule-header-spherica[slot="app__header"]'
                        }
                    }
                },
            },
            requiredElements: ['moleculeHeader']
        };

        /*
        * Flow steps are merged with common elements giving preference to the flow ones
        * */
        function customValue(objValue, srcValue) {
            if ((objValue === srcValue)
                || (typeof objValue === 'string' && typeof srcValue === 'string')
                || (typeof objValue === 'boolean' && typeof srcValue === 'boolean')) {
                return objValue;
            }
        }

        const allSteps = _.mergeWith(args, defaultArgs, customValue);
        super(allSteps);

        /*
        Initial stepList is automatically obtained from selectors tree.
        If a custom stepList is declared in selectors tree it will be the stepList for the flow
         */
        this.declaredStepList = allSteps.elements.multiStep.properties.stepList ? allSteps.elements.multiStep.properties.stepList : Object.keys(allSteps.elements.multiStep).filter(element => element.includes('step'));
        this.properties = {
            elementsDictionary: {
                'header': 'moleculeHeader.operativeTitle',
                'X close button': 'moleculeHeader.secondaryBtn',
                'back button': 'moleculeHeader.primaryBtn'
            }
        };
    }

    /**
     * Transform string to CamelCase format
     * @param theString
     * @returns {*}
     */
    camelCased(theString) {
        return camelCased(theString.toLowerCase());
    }

    /**
     * Multistep Navigation functions
     */

    /**
     * Initialize stepList in test running time from global storage
     * global.storage.flowName - Indicates the name of custom stepList (stored in flow's selectors tree)
     */
    resetCurrentStep() {
        const stepListName = Object.prototype.hasOwnProperty.call(global.storage, 'flowName') ? global.storage.flowName : 'stepList';
        global.storage.stepList = this.multiStep.properties[stepListName] ? this.multiStep.properties[stepListName] : this.declaredStepList;
        logger.info(`Current Step List: [ ${global.storage.stepList} ]`);
        this.setCurrentStep(global.storage.stepList[0]);
    }

    /**
     * Set the currentStep variable to <step> value
     * @param step
     */
    setCurrentStep(step) {
        this.currentStep = step;
        logger.info(`[MultiStep] Current Step: ${this.currentStep}`);
    }

    /**
     * Returns internal step name from @step
     * @param step name
     * @returns internal step name
     */
    getStepName(step) {
        if (typeof step !== 'string' || step === '') {
            return this.currentStep;
        } else if (step.startsWith('step') || step.startsWith('optionalStep')) {
            return step;
        }
        const normalStep = this.camelCased(`step ${step}`);
        const optionalStep = this.camelCased(`optional step ${step}`);
        if (global.storage.stepList.includes(optionalStep)) {
            return optionalStep;
        }
        return normalStep;
    }

    /**
     * Returns if is possible to continue the process without fill anything
     * @param step
     * @return {Promise<boolean>}
     */
    async stepCanBePassed(step) {
        const {continueButton} = this.multiStep[step];
        if (continueButton) {
            if (Object.prototype.hasOwnProperty.call(continueButton, 'name')) {
                // ContinueButton is a component
                return continueButton.isEnabled();
            }
            // ContinueButton is a selector
            return continueButton.isDisplayed();
        }
        logger.info(`Step ${step} doesn't have continueButton`);
        return false;

    }

    /**
     * Returns if is needed to fill the step to continue the process
     * @param step
     * @return {Promise<boolean>}
     */
    async stepNeedsToBeFilled(step) {
        if (step === 'stepSummary') {
            return false;
        }
        let need = await this.isUncollapsed(step);
        need = need && !(await this.stepCanBePassed(step));
        return need;
    }

    /**
     * Returns if <step> is active
     * @param step
     * @return {Promise<boolean>}
     */
    async isStepActive(step) {
        let result;
        if (step === 'stepSummary') {
            result = await this.previousStepCollapsed(step);
            assert(result, 'Summary: NOT ALL STEPS COLLAPSED!!');
        } else {
            const suffix = this.getStepCustomStatus(step, 'active');
            const theStep = this.addSuffix(this.multiStep[step].__root, suffix);
            result = await theStep.isExisting();
        }
        if (result) {
            this.setCurrentStep(step);
        } else {
            logger.debug(`Step ${step} not active`);
        }
        return result;
    }

    /**
     * checks if the user is on <step>
     * @param step
     * @return {Promise<boolean>}
     */
    async userIsTakenTo(step) {
        await Commands.pause({time: config.wait.S});
        if (step === 'otp') {
            await this.signModal.isLoaded();
        } else {
            assert(await this.isStepActive(this.getStepName(step)), `The user is not taken to "${step}" step`);
        }
    }

    /**
     * returns <step> declared info in selector tree about <key>
     * @param step
     * @param key
     * @returns {*}
     */
    getStepCustomStatus(step, key) {
        key = this.getStepName(key);
        let result = this.multiStep.properties.status.commons[key];
        if (Object.prototype.hasOwnProperty.call(this.multiStep[step].properties, 'status')) {
            result = this.multiStep[step].properties.status[key] ? this.multiStep[step].properties.status[key] : result;
        }
        return result;
    }

    /**
     * Waits until the step <step> has <status> activated or timeout
     * @param step
     * @param status
     */
    async waitForStepStatus(step, status) {
        if (step !== 'stepSummary') {
            const stepElement = this.multiStep[step].__root;
            const collapsed = await this._checkStepStatus(stepElement, 'collapsed');

            return status === 'active'
                ? (await this._checkStepStatus(stepElement, status)) && !collapsed
                : collapsed;
        }
    }

    /**
     * Check step status
     * @param step
     * @param status
     * @return {Promise<Boolean>}
     */
    async _checkStepStatus(step, status) {
        return step.waitForAttribute({
            attribute: status,
            timeout: config.wait.M,
            errorMessage: `The Step ${step} is not ${status}.`,
            failOnError: false
        });
    }

    /**
     * Go to the indicated step from current
     * @param stepName
     */
    async goToStep(stepName) {
        const step = this.getStepName(stepName);
        // Check destination Step declaration
        assert(global.storage.stepList.includes(step), `Step "${step}" ("${stepName}") not declared!! \n Declared Steps: ${global.storage.stepList}`);
        logger.info(`Navigation to ${step} from ${this.currentStep} step`);
        // if step is collapsed, the action to go is uncollapse destination step:
        if (await this.isCollapsed(step)) {
            logger.info(`Uncollapsing the step: ${stepName}`);
            await this.uncollapse(stepName);
        } else {
            // When the step is not collapsed
            const {stepList} = global.storage;
            const stepsToPass = stepList.slice(stepList.indexOf(this.currentStep), stepList.indexOf(step));
            // Navigation forward steps
            for (const intermediateStep of stepsToPass) {
                const needFill = await this.stepNeedsToBeFilled(intermediateStep);
                await this.continueProcess({step: intermediateStep, fill: needFill});
            }
        }
    }

    /**
     * Do Continue action of indicated step
     * @param step
     */
    async doContinue(step = this.currentStep) {
        try {
            if (Object.prototype.hasOwnProperty.call(this.multiStep[step], 'continueButton')) {
                if (Object.prototype.hasOwnProperty.call(this.multiStep[step].continueButton, 'name')) {
                    await this.multiStep[step].continueButton.continueToNextStep();
                } else {
                    await this.multiStep[step].continueButton.waitForDisplayed();
                    await this.multiStep[step].continueButton.click();
                }
            } else {
                logger.info(`No continueButton declared for ${step}`);
            }
        } catch (e) {
            throw new Error(`Step "${step}" continue action ${e}`);
        }
    }

    /**
     * Makes the actions to continue to the next step from <step>:
     * @param step - actual step
     * @param fill - indicates if step must be filled
     */
    async continueProcess({step = this.currentStep, fill = false} = {}) {
        if (step !== 'stepSummary') {
            const targetStep = global.storage.stepList[global.storage.stepList.indexOf(step) + 1];
            if (fill) {
                try {
                    logger.info(`Filling the step: ${step}`);
                    await this.HappyPathActions(step, false);
                } catch (e) {
                    throw new Error(`Filling the step "${step}" - ${e}`);
                }
            }

            const {saveData} = this.multiStep[step].properties;
            if (saveData) {
                try {
                    logger.info(`Saving data for step: ${step}`);
                    this.saveDataActions(step);
                } catch (e) {
                    throw new Error(`Saving data for step "${step}" - ${e}`);
                }
            }

            // If step was previously filled, the step is collapsed, no more actions needed.
            if (!(await this.isCollapsed(step))) {
                // Do the action to continue the flow
                await this.doContinue(step);
                // Wait for step to Load
                if (step !== 'stepSummary') {
                    assert(await this.waitForStepStatus(step, 'collapsed'), `Step Don't changed to ${step}`);
                    await this.moleculeHeader.operativeTitle.waitForAnimation({timeout: config.wait.M});
                }
            }
            // CurrentStep is updated
            this.setCurrentStep(targetStep);
        } else {
            await this.doContinue(step);
        }
    }

    /**
     * Actions to do in <step> to follow the process
     * (to overwrite in flow page)
     * @step - Step to fill
     * @abstract
     */
    HappyPathActions() {
        throw new Error(`HappyPathActions is not implemented for ${this.getId()}`);
    }

    /**
     * Generic ScreenValidation function with common elements
     * @param element
     * @param _args
     */
    async _screenValidation({element, _args} = {}) {
        const actualStepName = _args.targetStep ? this.getStepName(_args.targetStep) : this.currentStep;
        const actualStep = this.multiStep[actualStepName];
        switch (element.toLowerCase()) {
            case 'consult link':
                // eslint-disable-next-line no-case-declarations
                const link = await this.getConsultLink(actualStepName);
                await link.waitForDisplayed();
                break;
            case 'previous steps collapsed':
                await this.previousStepCollapsed();
                break;
            case 'continue button':
                assert((_args.notVisible ? await actualStep.continueButton.isDisabled() : await actualStep.continueButton.isEnabled()), `Button in "${this.currentStep}" step is not visible!`);
                break;
            case 'disabled continue button':
                assert(await actualStep.continueButton.isDisabled(), 'Button not disabled!');
                break;
            case 'enabled continue button':
                assert(await actualStep.continueButton.isEnabled(), 'Button not enabled!');
                break;
            case 'step title':
                await actualStep.stepTitle.waitForDisplayed();
                break;
            default:
                if (!(await DictionarySelector.checkElementFromDict(element, this))) {
                    await this._stepsValidation({element, _args});
                }
        }
    }

    /**
     * to be defined in pages, needed to use elements dictionaries
     * @abstract
     */
    _stepsValidation() {
        throw new Error(`function _stepsValidation not defined in ${this.id} page`);
    }

    /**
     * returns consult Link of collapsed step <step>
     * @param step
     */
    getConsultLink(step) {
        let suffix;

        if (this.multiStep[step].properties.status) {
            suffix = this.multiStep[step].properties.status.collapsed
                ? this.multiStep[step].properties.status.collapsed
                : this.multiStep.properties.status.commons.consultLink;
        } else {
            suffix = this.multiStep.properties.status.commons.consultLink;
        }
        return this.addSuffix(this.multiStep[step].__root, suffix);
    }

    /**
     * Go to the last step of the flow (summary)
     */
    async finish(otpKey = '123456') {
        await this.goToStep('summary');
        await this.continueProcess();

        // Flows with required sign
        if (this.multiStep.properties.OTPsign) {
            await this.completeOTP({code: otpKey});
        }

        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.XXXL,
        });
    }

    /**
     * Fills something in currentStep
     */
    async fillSomething() {
        await this.HappyPathActions(this.currentStep, false);
    }

    /**
     * returns an element with element's selector plus suffix
     * @param element
     * @param suffix
     * @returns {any}
     */
    addSuffix(element, suffix) {
        return new Element({
            selector: element.selector + suffix,
            _container: this,
        });
    }

    /**
     * Collapse functions
     */

    /**
     * Returns if step is collapsed
     * @param step
     * @return {Promise<boolean>}
     */
    async isCollapsed(step) {
        step = this.getStepName(step);
        if (step === 'stepSummary') {
            return false;
        }
        const collapsed = await this.getConsultLink(step);
        return collapsed.isDisplayed();
    }

    /**
     * Returns if <step> is not collapsed
     * @param step
     * @return {Promise<boolean>}
     */
    async isUncollapsed(step) {
        step = this.getStepName(step);
        return !(await this.isCollapsed(step));
    }

    /**
     * Checks if all elements of <steps> array are collapsed
     * @param steps
     * @return {Promise<boolean>}
     */
    async areStepsCollapsed(steps) {
        let result = true;
        for (const step of steps) {
            if (Object.prototype.hasOwnProperty.call(steps, step)) {
                result = await this.isUncollapsed(step);
            }
        }
        return result;
    }

    /**
     * Checks if all previous steps of <theStep> array are collapsed
     * @param theStep
     * @return {Promise<boolean>}
     */
    async previousStepCollapsed(theStep = '') {
        const step = (theStep === '') ? this.currentStep : theStep;
        const index = global.storage.stepList.indexOf(step) - 1;
        return this.areStepsCollapsed(global.storage.stepList.slice(0, index));
    }

    previousStepCollapsedFocus() {
        const step = this.currentStep;
        const index = global.storage.stepList.indexOf(step) - 1;
        this.currentStep = global.storage.stepList[index];
    }

    /**
     * Uncollapse indicated <step>
     * @param step
     */
    async uncollapse(step) {
        const theStep = this.getStepName(step);
        const consultLink = await this.getConsultLink(theStep);
        await consultLink.scrollIntoView({block: 'start'});
        await consultLink.waitForAnimation();
        await consultLink.waitForClickable();
        await consultLink.click();
        if (await this.isUncollapsed(theStep)) {
            this.setCurrentStep(theStep);
        }
        await this.waitForStepStatus(theStep, 'active');
    }

    /**
     * Checks if the step is the only uncollapsed in multistep
     * @param step
     */
    async onlyStepUncollpased(step) {
        const theStep = this.getStepName(step);
        const steps = global.storage.stepList.filter(step => step !== theStep);

        assert(await this.isUncollapsed(theStep), `Step ${theStep} is still collapsed`);
        assert(await this.areStepsCollapsed(steps), `Beside ${theStep} there are more steps uncollapsed`);
    }

    /**
     * Continue button functions
     */

    /**
     * Checks if Continue Button of the step is enabled
     * @param step
     * @return {Promise<boolean>}
     */
    async isStepContinueButtonEnabled(step = '') {
        const button = this.multiStep[this.getStepName(step)].continueButton;
        if (!button.name) {
            return button.isDisplayed();
        }
        return this.multiStep[this.getStepName(step)].continueButton.isEnabled();
    }

    /**
     * Checks if Continue Button of the step is disabled
     * @param step
     * @return {Promise<boolean>}
     */
    async isStepContinueButtonDisabled(step = '') {
        const button = this.multiStep[this.getStepName(step)].continueButton;
        if (!button.name) {
            return !(await button.isDisplayed());
        }
        return this.multiStep[this.getStepName(step)].continueButton.isDisabled();
    }

    /**
     * Launch Leave the process actions
     */
    async closeOperative() {
        await this.moleculeHeader.secondaryBtn.scrollIntoView({block: 'end'});
        await this.moleculeHeader.actionRight();
    }

    /**
     * Launch and confirms leave the process actions
     */
    async confirmLeaveProcess() {
        await this.closeOperative();
        await this.dialogOperations.waitForDisplayed();
        await this.dialogOperations.confirmDialog();
        this.resetCurrentStep();
    }

    /**
     * Cancels leave the process from modal
     */
    async cancelLeaveTheProcess() {
        await this.dialogOperations.confirmDialog({isConfirmed: false});
    }

    /**
     * Press retry button for <times>
     * @param times
     */
    async retryModal(times) {
        let n = 1;
        while (n <= times) {
            n++;
            await this.dialogOperations.confirmDialog();
        }
    }

    /**
     * waits until modal is open
     */
    async isModalOpen() {
        await this.dialogOperations.isModalPresent({title: false});
    }

    /**
     * Alias to closeDialog function  of glomo alert manager component
     */
    async closeModal() {
        await this.dialogOperations.closeDialog();
    }

    async _modalElementValidation({item, ...args} = {}) {
        switch (item.toLowerCase()) {
            case 'icon':
            case 'error icon':
            case 'interrogation icon':
            case 'information icon':
            case 'warning icon':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.PARAGRAPH_ICON});
                break;
            case 'strong title':
                await this.dialogOperations.paragraph.strongParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'text':
            case 'error description':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.DESCRIPTION});
                break;
            case 'info text':
            case 'current balance':
                await this.dialogOperations.paragraph.descriptionClean.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'subtitle':
                await this.dialogOperations.additionalElements.subtitle.waitForDisplayed();
                break;
            case 'list':
                await this.dialogOperations.additionalElements.list.waitForDisplayed();
                break;
            case 'information text':
            case 'information text about to lose the current configuration of the offer with':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.MAIN_TEXT});
                break;
            case 'button':
            case 'a button to close the modal':
            case 'an exit button to leave the contracting process':
                await this.dialogOperations.elementValidation({
                    item: this.dialogOperations.ACCEPT_BUTTON,
                    forceScroll: true
                });
                break;
            case 'benefits modal subtitle':
                await this.dialogOperations.additionalElements.mediumSubTitle.waitForDisplayed();
                break;
            case 'header title':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HEADER});
                break;
            case 'image':
            case 'error image':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.HERO_IMAGE});
                break;
            case 'a continue option to close the half modal and keep in the contracting process':
                await this.dialogOperations.elementValidation({item: this.dialogOperations.CANCEL_BUTTON});
                break;
            default:
                await super._modalElementValidation({item, ...args});
        }
    }
}
