import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class Splash extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-splash[state="active"]',
            elements: {
                updateButton: {
                    android: '//android.widget.Button[contains(@resource-id,"updateButton")]',
                    ios: '~modal_features_first_button_text'
                },
                updateLater: {
                    android: '//android.widget.Button[contains(@resource-id,"skipButton")]',
                    ios: '~modal_features_second_button_text'
                },
                features: {
                    android: '//*[@resource-id="__PACKAGE__:id/list"]',
                    ios: '//XCUIElementTypeTable/XCUIElementTypeOther/XCUIElementTypeStaticText[@name="modal_features_table_view_header_label"]'
                }
            },
            requiredElements: [
                'updateButton'
            ],
            contextType: 'NATIVE_APP'
        });
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'see later':
                await this.updateLater.waitForDisplayed({timeout: config.wait.XL, reverse: value === 'not visible'});
                break;
            case 'open market':
                await this.updateButton.waitForDisplayed({timeout: config.wait.XL});
                break;
            case 'info text':
                await this.features.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new Splash();
