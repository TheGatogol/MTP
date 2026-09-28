import { ScreenValidationKeyNotFound } from '@csqe/radish';
import CellsMoleculeHeaderSpherica from '../../components/cells-molecule-header-spherica';

import AbstractGlomoPage from '../abstract-glomo-page';

class ClarificationsList extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-clarificationsListCare[state="active"]',
            elements: {
                header: {
                    component: {
                        ComponentClass: CellsMoleculeHeaderSpherica
                    }
                },
                inProccessButton: 'cells-radio-tabs-spherica #en\\ proceso',
                finishButton: 'cells-radio-tabs-spherica #terminadas',
                errorInfoBox: 'cells-aggregation-badge-list div:nth-child(6)',
                retryButton: 'cells-aggregation-badge-list div:nth-child(6) div cells-icon-message cells-st-link a',
                clarificationCase: 'cells-aggregation-badge-list-spherica cells-list-badge-spherica cells-st-link-spherica a',
                tooltipIconInfo: 'cells-aggregation-badge-list-spherica cells-icon-message-spherica #principalIcon.icon',
                tooltipLaberInfo: 'cells-aggregation-badge-list-spherica cells-icon-message-spherica #notInline',
                clarificationsInProcessCase: 'cells-aggregation-badge-list-spherica cells-list-badge-spherica cells-st-link-spherica a',
                clarificationsClosedCase: 'cells-aggregation-badge-list-spherica cells-list-badge-spherica cells-st-link-spherica a',
                image: 'cells-aggregation-badge-list-spherica div div iron-icon',
                clarificationLabel: 'cells-aggregation-badge-list-spherica div div.empty-description-title',
                clarificationKeys: 'cells-aggregation-badge-list-spherica cells-list-badge-spherica cells-key-values-spherica .key',
                clarificationValues: 'cells-aggregation-badge-list-spherica cells-list-badge-spherica cells-key-values-spherica .value',
            },
            requiredElements: [
                'header'
            ]
        });
    }

    async clarificationsClosed() {
        await this.finishButton.waitForDisplayed({timeout: config.wait.M});
        await this.finishButton.waitForAnimation({timeout: config.wait.L});
        await this.finishButton.waitForEnabled({timeout: config.wait.M});
        await this.finishButton.waitForExist({timeout: config.wait.L});
        await this.finishButton.click();
    }

    async accessToClarification(clarificationType) {
        switch (clarificationType) {
            case 'en proceso':
                await this.clarificationsInProcessCase.waitForDisplayed({timeout: config.wait.M});
                await this.clarificationsInProcessCase.waitForClickable({timeout: config.wait.M});
                await this.clarificationsInProcessCase.click();
                break;
            case 'terminadas':
                await this.finishButton.waitForDisplayed({timeout: config.wait.M});
                await this.finishButton.waitForClickable({timeout: config.wait.M});
                await this.finishButton.click();
                await this.clarificationsClosedCase.waitForDisplayed({timeout: config.wait.M});
                await this.clarificationsClosedCase.waitForClickable({timeout: config.wait.M});
                await this.clarificationsClosedCase.click();
                break;
            default:
                throw new Error(`Clarifications '${clarificationType}' not found in clarifications list`);
        }
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'in proccess button':
                await this.inProccessButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'finish button':
                await this.finishButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'error info box':
                await this.errorInfoBox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'retry button':
                await this.retryButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarifications case':
                await this.clarificationCase.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarifications amount':
                await (await this.clarificationKeys.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                await (await this.clarificationValues.elements()).value[0].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'card':
                await (await this.clarificationKeys.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                await (await this.clarificationValues.elements()).value[1].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'creation date':
                await (await this.clarificationKeys.elements()).value[2].waitForDisplayed({timeout: config.wait.M});
                await (await this.clarificationValues.elements()).value[2].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'estimate resolution date':
                await (await this.clarificationKeys.elements()).value[3].waitForDisplayed({timeout: config.wait.M});
                await (await this.clarificationValues.elements()).value[3].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'resolution date':
                await (await this.clarificationKeys.elements()).value[7].waitForDisplayed({timeout: config.wait.M});
                await (await this.clarificationValues.elements()).value[7].waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tooltip info':
                await this.tooltipIconInfo.waitForDisplayed({timeout: config.wait.M});
                await this.tooltipLaberInfo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'image':
                await this.image.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'clarification without content label':
                await this.clarificationLabel.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

}

export default new ClarificationsList();
