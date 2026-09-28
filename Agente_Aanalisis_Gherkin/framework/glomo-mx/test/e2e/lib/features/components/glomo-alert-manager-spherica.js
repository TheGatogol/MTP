import { Commands } from '@csqe/radish';

import GlomoAlertManager from './glomo-alert-manager';

/**
 * @protected
 * Do not modify this component without permission.
 * Unnotified changes on this component will be revised thoroughly and probably rejected.
 */
export default class GlomoAlertManagerSpherica extends GlomoAlertManager {
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
    constructor(args) {
        const defaultArgs = {
            name: 'glomo-alert-manager-spherica',
            elements: {
                // Containers
                container: 'cells-bottom-modal-spherica',
                containerMaximized: 'cells-bottom-modal-spherica.full-height',
                containerMinimized: 'cells-bottom-modal-spherica:not(.full-height)',
                templateParagraph: 'div.paragraph-template',

                // Buttons
                acceptBtn: 'div.buttons-container cells-st-button-spherica #acceptButton',
                cancelBtn: 'div.buttons-container cells-st-button-spherica #cancelButton',
                closeBtn: '#header button.btn-close',

                // Icons and Images
                heroImage: 'div.paragraph-template iron-icon:not([style="display: none;"])',
                containerImage: 'cells-bottom-modal-spherica div.main-container div.icon-container img',
                containerIconParagraph: 'p.paragraph-icon iron-icon',
                containerIcon: 'div.paragraph-template iron-icon:not([style="display: none;"])',
                mainContainerIcon: '#modal > div.main-container > div.icon-container img',
                mainContainerIronIcon: '#modal > div.main-container > div.icon-container iron-icon',
                iconMessage: 'cells-icon-message-spherica',
                paragraphIcon: 'div.paragraph-template iron-icon:not([style="display: none;"])',

                // Texts
                header: 'cells-bottom-modal-spherica.full-height header',
                headerHalf: 'cells-bottom-modal-spherica:not(.full-height) header',
                mainContainerHeader: 'cells-bottom-modal-spherica.full-height .main-container h2',
                mainContainerDescription: 'cells-bottom-modal-spherica.full-height .main-container .content-container',
                message: 'cells-alert-box-spherica cells-bottom-modal-spherica div.content-container',
                titles: 'div.paragraph-template h2:not([style="display: none;"])',
                descriptions: 'div.paragraph-template p:not([style="display: none;"])',
                bulletsList: 'div.paragraph-template cells-lists-spherica',
            },
        };

        super(Object.assign(defaultArgs, args));

        this.HEADER_HALF = 'headerhalf';
        this.MAIN_CONTAINER_HEADER = 'main container header';
        this.MAIN_CONTAINER_DESCRIPTION = 'main container description';
        this.MAIN_CONTAINER_ICON = 'maincontainericon';
        this.MAIN_CONTAINER_IRON_ICON = 'main icon';
        this.CONTAINER_ICON_PARAGRAPH = 'container icon paragraph';
        this.CONTAINER_IMAGE = 'containerimage';
    }

    async elementValidation({item, ...args} = {}, {forceScroll = false} = {}) {
        switch (item.toLowerCase()) {
            case this.HEADER_HALF:
                await this.headerHalf.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.MAIN_CONTAINER_ICON:
                await this.mainContainerIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.MAIN_CONTAINER_HEADER:
                await this.mainContainerHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.MAIN_CONTAINER_DESCRIPTION:
                await this.mainContainerDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.MAIN_CONTAINER_IRON_ICON:
                await this.mainContainerIronIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.CONTAINER_ICON_PARAGRAPH:
                await this.containerIconParagraph.waitForDisplayed({timeout: config.wait.M});
                break;
            case this.CONTAINER_IMAGE:
                await this.containerImage.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                return super.elementValidation({item, ...args}, {forceScroll});
        }
    }

    static get _baseRoot() {
        return {
            web: 'div#cells-template-__cross glomo-alert-manager-spherica',
            isWithoutRoot: true,
        };
    }

    /**
     * Confirms the modal. This is done by pressing the "accept" button, or the "cancel" button if isConfirmed is false.
     * Besides pressing the buttons, this function waits for the container to appear and to stop moving.
     * This also waits for the modal to disappear, validation that can be turned off with the expectToDisappear argument.
     * @param {boolean} isConfirmed - If true, will confirm the modal; if false, will cancel the modal.
     * @param {boolean} expectToDisappear - If true, will wait for the modal to disappear after interacting with it.
     */
    async confirmDialog({isConfirmed = true, expectToDisappear = true, secondaryBtn = false} = {}) {
        await this.container.waitForDisplayed({timeout: config.wait.M});
        await this.container.waitForAnimation({timeout: config.wait.M});

        const button = isConfirmed ? this.acceptBtn : secondaryBtn ? this.cancelBtn : this.closeBtn;
        await button.waitForClickable({timeout: config.wait.M});
        await button.click({forceScroll: false});

        if (expectToDisappear)
            await this.waitForDisplayed({timeout: config.wait.L, reverse: true});
        else
            await Commands.pause({time: config.wait.XS});
    }
}
