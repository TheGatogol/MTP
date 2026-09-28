import {Commands, Element, ElementValidationKeyNotFound} from '@csqe/radish';

import AbstractGlomoComponent from './abstract-glomo-component';

/**
 * @protected
 * Do not modify this component without permission.
 * Unnotified changes on this component will be revised thoroughly and probably rejected.
 */
export default class GlomoAlertManager extends AbstractGlomoComponent {
    /**
     * Class that represents the component glomo-alert-manager used to show modals and erros on the app.
     * This class contains a multitude of basic elements and functions to be able to interact with and validate the modal structure.
     *
     * As this component is highly customizable, it can process an object "paragraphElements"
     * to specify elements to be found inside the template-paragraph section of the component.
     * This object is expected to have a property for each element (of group of elements) that can be found on this instance of the component.
     * For instance:
     * {
     *     warning: 'h2.warning-header',
     *     link: 'a.warning-link',
     *     warningDescriptions: 'p.warning-text'
     * }
     * Would describe 3 "elements" which root would be the templateParagraph element, and that can be interacted through:
     * this.paragraph.warning, this.paragraph.link, this.paragraph.warningDescriptions
     *
     * Or, if used from the page:
     * this.dialogOperations.paragraph.warning, this.dialogOperations.paragraph.link, this.dialogOperations.paragraph.warningDescriptions
     *
     * This instantiation is done through the _buildParagraphElements function.
     * Paragraph Element interaction is done through the paragraph.getElement function.
     * @param {Object} paragraphElements - List of new elements to build inside the paragraph-template element
     * @param {Object} additionalElements - List of new elements to build outside the paragraph-template element
     * @param args - additional arguments, similar to other components.
     */
    constructor({paragraphElements, additionalElements, ...args} = {}) {
        const defaultArgs = {
            name: 'glomo-alert-manager',
            elements: {
                // Containers
                container: 'cells-bottom-modal',
                containerMaximized: 'cells-bottom-modal.full-height',
                containerMinimized: 'cells-bottom-modal:not(.full-height)',
                templateParagraph: 'div.paragraph-template',

                // Buttons
                acceptBtn: 'div.buttons-container cells-st-button #acceptButton',
                cancelBtn: 'div.buttons-container cells-st-button #cancelButton',
                closeBtn: '#header button.btn-close',

                // Icons and Images
                heroImage: 'cells-bottom-modal div.icon-container img',
                containerIcon: '.icon-container img',
                iconMessage: 'cells-icon-message',
                paragraphIcon: 'div.paragraph-template iron-icon:not([style="display: none;"])',

                // Texts
                header: 'cells-bottom-modal.full-height header',
                message: 'cells-alert-box cells-bottom-modal div.content-container',
                titles: 'div.paragraph-template h2:not([style="display: none;"])',
                descriptions: 'div.paragraph-template p:not([style="display: none;"])',
                bulletsList: 'div.paragraph-template cells-lists'
            },
            requiredElements: [
                'container',
            ],
        };

        super(Object.assign(defaultArgs, args));
        this.paragraphElements = {};
        this._buildParagraphElements(paragraphElements);
        this.additionalElements = {};
        this._buildAdditionalElements(additionalElements);

        // To avoid typos and help refactoring, we will implement constants for our elementValidation switch.
        this.ACCEPT_BUTTON = 'accept button';
        this.CANCEL_BUTTON = 'cancel button';
        this.DESCRIPTION = 'description';
        this.MAIN_TEXT = 'main text';
        this.TITLE = 'title';
        this.BULLETS_LIST = 'bullets list';
        this.CLOSE = 'close button';
        this.CONTAINER_ICON = 'container icon';
        this.PARAGRAPH_ICON = 'paragraph icon';
        this.HERO_IMAGE = 'hero image';
        this.HEADER = 'header';
        this.MESSAGE = 'message';
        this.ICON_MESSAGE = 'icon message';
    }

    static get _baseRoot() {
        return {
            web: 'div#cells-template-__cross glomo-alert-manager',
            isWithoutRoot: true,
        };
    }

    /**
     * Builds elements to be found under thee templateParagraph element. Used only during component instantiation.
     * @param {Object} paragraphElements
     * @private
     */
    _buildParagraphElements(paragraphElements = {}) {
        for (const [element, selector] of Object.entries(paragraphElements)) {
            this.paragraphElements[element] = this.paragraph.getElement({selector});
        }
    }

    /**
     * Builds additional elements to be found outside the templateParagraph element. Used only during component instantiation.
     * @param {Object} additionalElements
     * @private
     */
    _buildAdditionalElements(additionalElements = {}) {
        for (const [element, selector] of Object.entries(additionalElements)) {
            if (!selector)
                throw new Error(`The GloMoAlertManager custom element "${element}" selector must not be empty.`);
            this.additionalElements[element] = new Element({
                selector: `${this.root} ${selector}`,
                name: element,
                _container: this,
            });
        }
    }

    /**
     * These implementations of waitForDisplayed allows for both the validation of the presence of the modal,
     * and also for the presence of a particular type of modal, which would be processed using {@link modalStructure}.
     *
     * This function uses both the old implementation of waitForDisplayed through consecutive arguments,
     * or the new implementation through the use of a single object.
     *
     * If this is to check the type of modal present, a single object should be used as an argument, with the property
     * 'type' used to specify the type of modal expected.
     *
     * @param options Can be either a list of arguments according to waitForDisplayed from radish v0.6
     * or an object, according to waitForDisplayed from radish v1.0.
     * @params options[0].type String specifying the type of modal expected. Will use {@link modalStructure} for this validation.
     */
    async waitForDisplayed(...options) {
        if ((options[2] || (options[0] && options[0].reverse)) && options[0] && options[0].type) {
            throw new Error(`[Glomo-Alert-Manager] Cannot expect type "${options[0].type}" modal to not be visible. Should check for not visibility of modal, or visibility of another type of modal instead`);
        } else  {
            await super.waitForDisplayed(...options);
            if(options[0] && options[0].type) {
                await this.modalStructure({type: options[0].type, verifyContent: false});
            }
        }
    }

    async waitForAnimation(...args) {
        await this.container.waitForAnimation(...args);
    }

    /**
     * Looks for a given text inside all the descriptions elements ('p' elements inside templateParagraph).
     * @param {string} text
     * @param {boolean} exactMatch
     * @param {number} timeout
     */
    async textIsPresent({text, exactMatch = false, timeout = config.wait.M, ...args} = {}) {
        await (await this.descriptions
            .waitForDisplayed({timeout}))
            .waitForText({text, exactMatch, timeout, ...args});
    }

    /**
     * This function will validate the expected basic structure of the modal, by checking for specific elements that are
     * related to specific types of modals, i.e. small modals or full-height modals.
     *
     * This function is not to be used to validate the elements present on the modal, but the type of modal shown.
     * To validate the elements in the modal, like accept button or a description, use the function 'elementValidation'.
     *
     * @param {string} type - Type of modal expected to be found, like a small modal or a full-height modal.
     * @param {boolean} verifyContent - If true, will check elements inside the modal. If false, only the container type.
     * @param {integer} timeout - Timeout for container validation.
     */
    async modalStructure({type, verifyContent = true, timeout, ...args} = {}) {
        switch (type.toLowerCase()) {
            case 'small':
            case 'small size error':
                await this.containerMinimized.waitForDisplayed({timeout});
                if(verifyContent){
                    await this.elementValidation({item: this.TITLE});
                    await this.elementValidation({item: this.DESCRIPTION});
                    await this.elementValidation({item: this.PARAGRAPH_ICON});
                }
                break;
            case 'big':
            case 'big size error':
            case 'full height':
            case 'full':
            case 'full size':
                await this.containerMaximized.waitForDisplayed({timeout});
                if(verifyContent){
                    await this.elementValidation({item: this.TITLE});
                    await this.elementValidation({item: this.DESCRIPTION});
                    await this.elementValidation({item: this.CLOSE});
                }
                break;
            default:
                throw new ElementValidationKeyNotFound({
                    message: `The type of modal expected is not valid for ${this.name}`,
                    key: type,
                    args: {type, verifyContent, timeout, ...args}
                });
        }
    }

    /**
     * Validation of modal through standard validateModalElements function
     * @param {string} item - Key used to identify element or group of elements to be validated
     */
    async elementValidation({item, ...args} = {}, {forceScroll = false} = {}) {
        switch (item.toLowerCase()) {
            case this.DESCRIPTION:
                await this.descriptions.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.ACCEPT_BUTTON:
                if (forceScroll) {
                    await this.acceptBtn.scrollIntoView();
                }
                await this.acceptBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.CANCEL_BUTTON:
                await this.cancelBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.TITLE:
                await this.titles.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.BULLETS_LIST:
                await this.bulletsList.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'close':
            case this.CLOSE:
                await this.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.CONTAINER_ICON:
                await this.containerIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.PARAGRAPH_ICON:
            case 'error icon':
            case 'warning icon':
            case 'icon':
                await this.paragraphIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.HERO_IMAGE:
                await this.heroImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.MAIN_TEXT:
                await this.templateParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.HEADER:
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.MESSAGE:
                await this.message.waitForExist({timeout: config.wait.M});
                await this.message.waitForDisplayed({timeout: config.wait.L});
                break;
            case this.ICON_MESSAGE:
                await this.iconMessage.waitForExist({timeout: config.wait.M});
                await this.iconMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ElementValidationKeyNotFound({key: item, args: {item, ...args}});
        }
    }

    // ACTIONS
    /**
     * Closes the current modal. Throw an error if no modal is present or no close button is found.
     * @param {integer} timeout
     */
    async closeDialog({timeout = config.wait.M} = {}) {
        await this.container.waitForDisplayed({timeout});
        await this.container.waitForAnimation({timeout});
        await this.closeBtn.waitForEnabled({timeout});
        await this.closeBtn.click({forceScroll: false});
    }

    /**
     * Confirms the modal. This is done by pressing the "accept" button, or the "cancel" button if isConfirmed is false.
     * Besides pressing the buttons, this function waits for the container to appear and to stop moving.
     * This also waits for the modal to disappear, validation that can be turned off with the expectToDisappear argument.
     * @param {boolean} isConfirmed - If true, will confirm the modal; if false, will cancel the modal.
     * @param {boolean} expectToDisappear - If true, will wait for the modal to disappear after interacting with it.
     */
    async confirmDialog({isConfirmed = true, expectToDisappear = true} = {}) {
        await this.container.waitForDisplayed({timeout: config.wait.M});
        await this.container.waitForAnimation({timeout: config.wait.M});

        const button = isConfirmed ? this.acceptBtn : this.cancelBtn;
        await button.waitForClickable({timeout: config.wait.M});
        await button.click({forceScroll: false});

        if (expectToDisappear)
            await this.waitForDisplayed({timeout: config.wait.L, reverse: true});
        else
            await Commands.pause({time: config.wait.XS});
    }

    // Paragraph Interaction
    /**
     * A group of interactions that can be done with the templateParagraph element as a whole.
     * This also contains all the paragraphElements specified during instantiation.
     */
    get paragraph(){
        return {
            /**
             * Returns an instance of Generic for the desired child element.
             * Will throw an error if no selector is specified.
             * @param {string} selector - CSS selector of the child element being fetched.
             * @returns {Generic} Generic instance of the child element.
             */
            getElement: ({selector} = {}) => {
                if(!selector)
                    throw new Error('The GloMoAlertManager paragraph action "gelElement" cannot have an empty selector');
                return new Element({
                    selector: `${this.templateParagraph.selector} ${selector}`,
                    _container: this,
                });
            },
            /**
                         * Given the specified selector, it will find all the children elements, and return their texts.
                         * By default, it looks for children with the 'p' selector.
                         * @param {string} selector - CSS selector of the child element used to find its value.
                         * @return {Promise<string>} value of given child.
                         */
            getChildrenValue: async ({selector = 'p'} = {}) => {
                const children = this.paragraph.getElement({selector});
                return children.getText();
            },
            /**
             * Given the specified selector, it will find all the children elements, and expect them to be the specified amount.
             * Will throw an exception if no selector is specified.
             * @param {string} selector - CSS selector of the child elements fetched
             * @param {integer} expectedAmount - Amount of children expected to be found.
             */
            expectAmountOfChildren: async ({selector, expectedAmount}) => {
                const children = this.paragraph.getElement({selector});
                expect(((await (children.elements()))).length).to.equal(expectedAmount);
            },
            ...this.paragraphElements,
        };
    }
}
