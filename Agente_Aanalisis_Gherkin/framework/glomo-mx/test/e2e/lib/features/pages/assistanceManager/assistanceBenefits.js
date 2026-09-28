import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class AssistanceBenefits extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-personalAdvisorBenefits[state="active"]',
            elements: {
                header: '#assistanceManagerPage [data-tag-name="bbva-header-main"]',
                labelBenefits: 'bbva-text:nth-child(5) span',
                acceptButton: '[data-tag-name="bbva-button-default"] [data-tag-name="bbva-text"]',
                messageAdvisor: '#pabNotificationMessage',
            },
            elementsSpherica: {
                header: '#assistanceManagerPage [data-tag-name="bbva-header-main-spherica"]',
                labelBenefits: 'bbva-list-bullet-spherica-lit bbva-type-text span',
                acceptButton: '[data-tag-name="bbva-button-default-spherica"] [data-tag-name="bbva-type-text"]',
                messageAdvisor: '#pabNotificationMessage',
            },
            requiredElements: ['labelBenefits'],
        });
    }

    async benefitsModalAccept() {
        await this.acceptButton.scrollIntoView();
        await (await this.acceptButton.waitForDisplayed({timeout: config.wait.M})).click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept button':
                await this.acceptButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'label benefits':
                await this.labelBenefits.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'message advisor':
                await this.messageAdvisor.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new AssistanceBenefits();
