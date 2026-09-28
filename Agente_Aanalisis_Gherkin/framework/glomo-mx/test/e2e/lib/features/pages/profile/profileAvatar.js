import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class ProfileAvatar extends AbstractGlomoPage {
    constructor() {
        super({
            id: 'profileAvatar',
            root: '#cells-template-profileAvatar[state="active"]',

            elements: {
                back: 'cells-molecule-header #btnLeft',
                titlePage: 'cells-molecule-header div.main-container h1#titleZone span.header__title',
                //Change Avatar
                btnGalery: 'cells-st-button button#gallery',
                btnCamera: 'cells-st-button button#camera',

            },

            elementsSpherica: {
                back: 'cells-molecule-header-spherica #btnLeft',
                titlePage: 'cells-molecule-header-spherica div.main-container h1#titleZone span.header__title',
                btnGalery: 'cells-st-button-spherica button#gallery',
                btnCamera: 'cells-st-button-spherica button#camera'
            },

            requiredElements: [
                'titlePage'
            ]
        });
    }

    async _screenValidation({item, value} = {}) {

        const errorMessage = `${item} is not visible`;
        const reverseWaitForVisible = value === 'not visible';

        switch (item) {
            case 'backButton':
                await this.back.waitForDisplayed({
                    timeout: config.wait.M,
                    errorMessage,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'header':
                await this.titlePage.waitForDisplayed({
                    timeout: config.wait.M,
                    errorMessage,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'btnGallery':
                await this.btnGalery.waitForDisplayed({
                    timeout: config.wait.M,
                    errorMessage,
                    reverse: reverseWaitForVisible
                });
                break;
            case 'btnCamera':
                await this.btnCamera.waitForDisplayed({
                    timeout: config.wait.M,
                    errorMessage,
                    reverse: reverseWaitForVisible
                });
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});

        }
    }

    async goBack() {
        await this.btnGalery.waitForDisplayed({timeout: config.wait.M});
        await this.back.click();
    }

    async goToGallery() {
        await this.btnGalery.waitForDisplayed({timeout: config.wait.M});
        await this.btnGalery.click();
    }

    async goToCamera() {
        await this.btnGalery.waitForDisplayed({timeout: config.wait.M});
        await this.btnCamera.click();
    }

}

export default new ProfileAvatar();
