import AbstractGlomoComponent from './abstract-glomo-component';

/**
 * Confirm Buttons Component
 * This component consist on typically 2 buttons that can be used to complete a complex action on the page
 * The standard use is through the confirmAction function.
 *
 * Although the component is usually for confirm operations, it can also be used for other types of operations
 * To allow for a more understandable page implementation, this component object implements 2 functions for renaming:
 * Primary action consist on pressing the primary element.
 * Secondary action consist on pressing the secondary element.
 * Both of these actions can be renamed for whatever functionality the component is filling on the page.
 * Alongside with button renaming, we could change component from:
 * Buttons: primaryBtn, secondaryBtn
 * Function: confirmAction(isConfirmed)
 * To:
 * Buttons: save, remove
 * Functions: saveEdit(), removeData()
 */
export default class CellsConfirmButtons extends AbstractGlomoComponent {
    constructor({
        // If the component is a single button one, this should be true
        isSingleButton = false,
        // Arguments for renaming both primary and secondary buttons
        primaryBtn = 'primaryBtn',
        secondaryBtn = 'secondaryBtn',
        // Arguments for renaming both primary and secondary actions
        primaryAction,
        secondaryAction,
    } = {}) {
        const defaultArgs = {
            name: 'cells-confirm-buttons',
            elements: isSingleButton ?
                {[primaryBtn]: '#primaryBtn'} :
                {
                    [primaryBtn]: '#primaryBtn',
                    [secondaryBtn]: '#secondaryBtn',
                },
            requiredElements: isSingleButton ? [primaryBtn] : [primaryBtn, secondaryBtn],
        };

        super(Object.assign(defaultArgs, arguments[0]));
        this.isSingleButton = isSingleButton;
        this.buttons = {
            primary: primaryBtn,
            secondary: isSingleButton ? undefined : secondaryBtn,
        };
        if (primaryAction) this[primaryAction] = this.primaryAction;
        if (secondaryAction && !isSingleButton) this[secondaryAction] = this.secondaryAction;
    }

    static get _baseRoot() {
        return 'cells-confirm-buttons';
    }

    async confirmAction({isConfirmed = true} = {}) {
        if (isConfirmed || this.isSingleButton) {
            await this[this.buttons.primary].scrollIntoView();
            await this[this.buttons.primary].waitForEnabled();
            await this[this.buttons.primary].click();
        } else {
            await this[this.buttons.secondary].scrollIntoView();
            await this[this.buttons.secondary].waitForEnabled();
            await this[this.buttons.secondary].click();
        }
    }

    async primaryAction() {
        return this.confirmAction({isConfirmed: true});
    }

    async secondaryAction() {
        return this.confirmAction({isConfirmed: false});
    }

    async canConfirm({timeout, reverse = false} = {}) {
        await this[this.buttons.primary].waitForEnabled({timeout, reverse});
    }
}
