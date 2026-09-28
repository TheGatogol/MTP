import {AbstractPage, Commands, utils} from '@csqe/radish';

import GlomoAlertManager from '../components/glomo-alert-manager';
import CellsModalSlider from '../components/cells-modal-slider';
import CellsSignOperationModal from '../components/cells-sign-operation-modal';
import DialogPermissions from '../components/native/dialog-permissions';

import GlomoAlertManagerSpherica from '../components/glomo-alert-manager-spherica';
import CellsSignOperationModalSpherica from '../components/cells-sign-operation-modal-spherica';
import CellsModalSliderSpherica from '../components/cells-modal-slider-spherica';

/**
 * @abstract
 */
export default class AbstractGlomoPage extends AbstractPage {
    constructor({elements = {}, elementsSpherica, defaultSphericaElements = [], rootSpherica, ...args} = {}) {
        const isSpherica = config.defaults.isSpherica === true || config.defaults.isSpherica === 'true';

        const defaultElements = {
            dialogOperations: isSpherica && defaultSphericaElements.includes('GlomoAlertManager') ? GlomoAlertManagerSpherica : GlomoAlertManager,
            errorDialogOperations: isSpherica ? GlomoAlertManagerSpherica : GlomoAlertManager,
            signModal: isSpherica ? CellsSignOperationModalSpherica : CellsSignOperationModal,
            modalSlider: isSpherica && defaultSphericaElements.includes('CellsModalSlider') ? CellsModalSliderSpherica : CellsModalSlider,
            dialogPermissions: DialogPermissions,
        };

        if(isSpherica) {
            elements = _.merge(elements, elementsSpherica || {});
            args.root = rootSpherica || args.root;
        }

        delete arguments[0]?.elementsSpherica;
        delete arguments[0]?.defaultSphericaElements;
        delete arguments[0]?.rootSpherica;

        _.defaultsDeep(elements, defaultElements);

        super({elements, ...args});

    }

    isSpherica() {
        return config.defaults.isSpherica === true || config.defaults.isSpherica === 'true';
    }

    async isLoaded({noDialog = true} = {}) {
        await super.isLoaded(arguments[0]);
        if (noDialog && (await Commands.Mobile.getContext()) === 'WEBVIEW') {
            await this.dialogOperations.waitForNotDisplayed();
        }
    }

    async waitForLoaded(timeout = config.wait.XXXL, noDialog = true) {
        await super.waitForLoaded(timeout);
        if (noDialog && (await Commands.Mobile.getContext()) === 'WEBVIEW')
            await this.dialogOperations.waitForDisplayed({timeout: config.wait.L, reverse: true});
    }

    async confirmDialog({timeout = config.wait.M, ...options} = {}, isError = false) {
        const dialogModal = isError ? this.errorDialogOperations : this.dialogOperations;
        await dialogModal.waitForDisplayed({timeout, ...options});
        await dialogModal.confirmDialog({...options});
    }

    async checkModal(type, timeout = config.wait.L) {
        await this.isModalPresent({timeout, type: type.size});
    }

    /**
     * Validates if a modal is present. If no arguments specified, this will expect to find the glomo-alert-manager modal present.
     * It can receive different arguments to expect the modal to not be present, to increase the timeout, or to expect a specific type
     * of modal to be present.
     *
     * This function can, and should, be overriden by pages that employ more than one modal.
     * In those cases, pages should use the parameter 'type' to discern whether this wants to validate the default modal,
     * or any specific modal that they use.
     * @param type Specified the type of modal to be expected. If expeting the modal to not be present, this should be undefined.
     * @param expected Allows to specify if the modal is to be present(true) or not present(false). 'True' by default.
     * @param timeout Time to wait for the modal to be or not to be present. S by default.
     */
    async isModalPresent(
        {type, expected = true, timeout = config.wait.M, verifyStructure = false} = {},
        isError = false,
    ) {
        const dialogModal = isError ? this.errorDialogOperations : this.dialogOperations;
        if (type === 'OTP') {
            await this.signModal.isLoaded();
        } else if (verifyStructure) {
            await dialogModal.waitForDisplayed({timeout, reverse: !expected});
            await dialogModal.modalStructure({timeout, type});
        } else {
            await dialogModal.waitForDisplayed({timeout, reverse: !expected, type});
        }
    }

    async closeDialog() {
        return this.dialogOperations.closeDialog();
    }

    async accessToATM() {
        return (await this.dialogOperations.paragraphIcon.waitForDisplayed({timeout: config.wait.M})).click();
    }

    /**
     * This function is used from step definitions, and processes a Gherkin Table, executing the {@link _modalElementValidation}
     * for each row of the table.
     *
     * This function is to be used to be able to validate the content of a modal, being able to separate those validations
     * from regular screen validations.
     * @param {cucumber.DataTable} table received from Gherkin
     * @param {string} [msgHeader="[${this.constructor.name}] Validating Modal"] Message shown at start of execution
     * @param {Object} [args={}] Additional args, that would be procesed as a _args property on {@link _modalElementValidation}
     */
    async validateModalElements(
        {table, msgHeader = `[${this.constructor.name}] Validating Modal`, args = {}} = {},
        isError = false,
    ) {
        if (isError) {
            args = _.merge(args, {isError: true});
        }
        await utils.validateTable(table, this, msgHeader, true, args, '_modalElementValidation');
    }

    /**
     * This is the base function used to validate the content of modals.
     * This function is similar to {@link _screenValidation}, with the difference that, by default, will process the
     * function "elementValidation" from glomo-alert-manager, so those validations don't need to be replicated on all pages.
     *
     * Pages should override this function whenever they need to implement specific validations for their modals,
     * be it for using modals different from glomo-alert-manager, or because they need specific definitions for
     * glomo-alert-manager elements (maybe because that is more descriptive for the given page).
     * Either way, any page that overrides this function should still execute the super version on the switch's default.
     * @param args
     * @private
     */
    async _modalElementValidation(args) {
        const { isError } = args._args || {};
        const dialogModal = isError ? this.errorDialogOperations : this.dialogOperations;
        await dialogModal.elementValidation(args);
    }

    /**
     * Simulates a tap action in the center of the given element.
     * Calculates the center coordinates based on the element's location and size,
     * and performs a touch action.
     *
     * @param element - It is the element to which you want to perform a tap
     * that must implement getLocation() and getSize()⁠.
     */
    async tapElement(element) {

        await element.waitForClickable({timeout: config.wait.M});
        await element.scrollIntoView();

        const location = await element.getLocation();
        const size = await element.getSize();
        const centerX = Math.floor(location.x + size.width / 2);
        const centerY = Math.floor(location.y + size.height / 2);

        await Commands.performActions({
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                {type: 'pointerMove', duration: 0, x: centerX, y: centerY},
                {type: 'pointerDown', button: 0},
                {type: 'pause', duration: 100},
                {type: 'pointerUp', button: 0}
            ]
        });
        await Commands.releaseActions();
    }

    /**
* Performs a swipe gesture on a given element in the specified direction.
*
* @param element - The custom element to swipe on.
* @param {'up' | 'down' | 'left' | 'right'} direction - Direction of the swipe.
*/
    async swipeElement(element, direction) {
        await element.waitForDisplayed({ timeout: config.wait.M });
        const location = await element.getLocation();
        const size = await element.getSize();

        const centerX = Math.floor(location.x + size.width / 2);
        const centerY = Math.floor(location.y + size.height / 2);

        let startX = centerX;
        let startY = centerY;
        let endX = centerX;
        let endY = centerY;

        switch (direction) {
            case 'up':
                startY = location.y + size.height - 10;
                endY = location.y + 10;
                break;
            case 'down':
                startY = location.y + 10;
                endY = location.y + size.height - 10;
                break;
            case 'left':
                startX = location.x + size.width - 10;
                endX = location.x + 10;
                break;
            case 'right':
                startX = location.x + 10;
                endX = location.x + size.width - 10;
                break;
            default:
                throw new Error(`Invalid swipe direction:: ${direction}`);
        }

        await Commands.performActions({
            type: 'pointer',
            id: 'finger1',
            parameters: { pointerType: 'touch' },
            actions: [
                {type: 'pointerMove', duration: 0, x: startX, y: startY},
                {type: 'pointerDown', button: 0},
                {type: 'pause', duration: 100},
                {type: 'pointerMove', duration: 500, x: endX, y: endY},
                {type: 'pointerUp', button: 0}
            ]
        });

        await Commands.releaseActions();
    }

    /**
     * Waits for at least one element to exist in the DOM before accessing it.
     * This method is specifically designed for scenarios where you need to use
     * `.elements()).value[n]` to access any element from a collection,
     * ensuring the array is not empty due to loading delays or dynamic content.
     *
     * Prevents errors when accessing element collections that may be empty initially
     *
     * @param {WebElement} element - The element selector to wait for existence
     * @param {number} [timeout=config.wait.M] - Maximum time to wait for elements to exist
     * @returns {Promise<WebElement>} The original element for method chaining
     * @throws {Error} When no elements are found after the specified timeout
     *
     * @example
     * // Safe way to access first element from a collection
     * await this.waitForElementsExist(this.someElementCollection);
     * const Element = (await this.someElementCollection.elements()).value[n];
     */
    async waitForElementsExist(element, timeout = config.wait.M) {
        await element.waitUntil({
            condition: async () => {
                const elements = await element.elements();
                return elements.length > 0;
            },
            timeout: timeout,
            errorMessage: `No elements ${element.selector} found after waiting`
        });
        return element;
    }

    async fillOtp(otpCode, changeFocus = false, confirmPasswordDisable = false) {
        await this.signModal.waitForDisplayed({timeout: config.wait.XXXL});
        await this.signModal.setPassword(otpCode, changeFocus);

        if(!confirmPasswordDisable) {
            await this.signModal.confirmPassword();
        }
    }

    async fillSmsInput({code = config.defaults.otp} = {}) {
        await this.signModal.insertSmsValue(code);
    }

    async scrollToBottom() {
        await this.relatedTip.scrollIntoView({block: 'start'});
        await this.relatedTip.waitForAnimation({timeout: config.wait.XL});
    }

    async closeOperative(args) {
        await this.dialogOperations.elementValidation(args);
    }

    async reactivateSoftokenFlow() {
        await this.waitUntilSpinnerVeil({
            timeoutToAppear: config.wait.XS,
            timeoutToDisappear: config.wait.XL,
        });
        this.signModal.reactivateSoftoken();
    }

    async closeDialogPermissions({mode = 'once', optional = true} = {}) {
        switch (mode.toLowerCase()) {
            case 'once':
                await this.dialogPermissions.allowOncePermission({optional});
                break;
            case 'app':
            case 'useapp':
                await this.dialogPermissions.allowUseAppPermission({optional});
                break;
            case 'allow':
            case 'allowalways':
                await this.dialogPermissions.allowPermission({optional});
                break;
            case 'deny':
            case 'notallow':
            case 'never':
                await this.dialogPermissions.notAllowPermission({optional});
                break;
            default:
                throw new Error(`Unknown dialog permissions option: ${mode}`);
        }
    }

    /**
     * This function is used to validate different elements on the sustainable simulator,
     * such as the info message, the exit button, or the amount input.
     * @param item - The element to be validated, such as 'info message', 'exit button',
     * 'amount within the range', 'amount less than the minimum', or 'amount greater than the maximum'.
     * This function can be extended to validate other elements on the sustainable simulator, if needed.
    */
    async swipeRangeValue(element, percentage) {
        const percentageMap = {
            '25': 0,
            '50': 1,
            '80': 2,
            '100': 3
        };
        const value = percentageMap[percentage];
        await element.waitForDisplayed({timeout: config.wait.M});
        await element.execute({
            script: (newValue) => {
                this.setAttribute('value', newValue);
                this.dispatchEvent(new Event('input', { bubbles: true }));
            },
            args: [value]
        });
    }
}
