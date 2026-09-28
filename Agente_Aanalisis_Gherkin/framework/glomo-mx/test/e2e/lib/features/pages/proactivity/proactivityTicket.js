import AbstractGlomoPage from '../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class ProactivityTicket extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-relevantFactsDetail[state="active"]',
            elements: {
                header: 'cells-molecule-header',
                settingsButton: 'cells-molecule-header button#btnLeft',

                // Ticket
                ticket: 'proactivity-ticket',
                buttonAction: 'proactivity-ticket [data-tag-name="bbva-button-default"]#actionButton',
            },
            requiredElements: ['ticket'],
        });
    }

    async accessProactivityTicketAction() {
        await this.buttonAction.waitForDisplayed({timeout: config.wait.XL});
        await this.buttonAction.click();
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header settings access':
                await this.settingsButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'ticket':
                await this.ticket.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'button action':
                await this.buttonAction.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new ProactivityTicket();
