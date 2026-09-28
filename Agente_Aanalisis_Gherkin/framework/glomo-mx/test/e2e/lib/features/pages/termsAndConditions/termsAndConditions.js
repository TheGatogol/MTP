import AbstractGlomoPage from '../abstract-glomo-page';

import {ScreenValidationKeyNotFound} from '@csqe/radish';

class TermsAndConditions extends AbstractGlomoPage {
    constructor() {
        super({
            root: '*[state="active"]',
            elements: {
                header: {
                    android: '//*[@resource-id="com.google.android.apps.docs:id/projector_toolbar"]',
                },
                content:{
                    android: '//*[@resource-id="com.google.android.apps.docs:id/projector_container"]',
                },
                backButton:{
                    android: '~Navegar hacia arriba',
                }
            },
            requiredElements: [
                'header'
            ],
            contextType: 'NATIVE_APP',
        });
    }

    async goBack() {
        await this.backButton.waitForDisplayed();
        await this.backButton.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'content':
                await this.content.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new TermsAndConditions();
