import AbstractGlomoPage from '../abstract-glomo-page';
import {Commands, ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class WelcomeUserDistribution extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-welcome[state="active"]',
            elements: {
                video: {
                    android: '//android.widget.VideoView[contains(@resource-id,"backgroundVideo")]',
                    ios: '',
                },
                message: {
                    android: '//android.widget.TextSwitcher[contains(@resource-id,"welcomeTextSwitcher")]',
                    ios: '~welcome_user_distribution_text_carousel',
                },
                access: {
                    android: '//android.widget.Button[contains(@resource-id,"welcomeTopButton")]',
                    ios: '~welcome_user_distribution_access_button',
                },
                beClient: {
                    android: '//android.widget.Button[contains(@resource-id,"welcomeBottomButton")]',
                    ios: '~welcome_user_distribution_client_button',
                }
            },
            requiredElements: [
                'access',
            ],
            contextType: 'NATIVE_APP',
        });
    }

    async waitForLoaded(timeout = config.wait.XXL, noDialog = true) {
        await super.waitForLoaded(timeout, noDialog);
    }

    async accessOnBoarding() {
        // This wait does not depend on environment, it must be hardcoded.
        await (await this.beClient
            .waitForVisible({timeout: config.wait.M}))
            .click();
    }

    async accessLanding() {
        // This wait does not depend on environment, it must be hardcoded.
        await Commands.pause({time: config.wait.S});
        await (await this.access
            .waitForDisplayed({timeout: config.wait.S}))
            .click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'video':
                await this.video.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message':
                await this.message.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'entrar option':
                await this.access.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'quiero una cuenta option':
                await this.beClient.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new WelcomeUserDistribution();
