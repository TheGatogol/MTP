import {ScreenValidationKeyNotFound, page} from '@csqe/radish';
import AbstractGlomoPage from '../abstract-glomo-page';

@page()
class CallMeBackAssistanceManagerSuccess extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-callMeBackAssistanceManagerSuccess[state="active"]',
            elements: {
                header: 'h1#titleZone',
                title: '.main-text-head span',
                advisorInformation: '.main-title-description',
                scheduledTime: '.otherInfo',
                infoMessage: '.message cells-icon-message',
                understoodBtn: '.actions #primaryBtn'
            },
            requiredElements: [
                'header'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'title':
                await this.title.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'advisor information':
                await this.advisorInformation.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'scheduled time':
                await this.scheduledTime.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'info message':
                await this.infoMessage.waitForDisplayed({timeout: config.wait.L});
                break;
            case 'understood button':
                await this.understoodBtn.waitForDisplayed({timeout: config.wait.L});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new CallMeBackAssistanceManagerSuccess();
