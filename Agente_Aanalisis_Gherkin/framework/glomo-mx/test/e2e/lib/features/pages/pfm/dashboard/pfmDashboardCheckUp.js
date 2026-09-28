import AbstractGlomoPage from '../../abstract-glomo-page';
import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page()
class PfmDashboardCheckUp extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-pfmDashboardCheckUp[state=active]',
            elements: {
                checkUp: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx]',
                header: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx] [data-tag-name=bbva-header-main][show-left-icon]',
                iconStatus: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx] div.main-container [data-tag-name=bbva-clip-microillustration].illustration',
                titleStatus: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx] div.main-container [data-tag-name=bbva-type-text] p',
                tips: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx] div div.items',
                offer: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx] div [data-tag-name=bbva-notification-message]',
                description: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx] div.main-container bbva-type-text.description p',
                changePayrollBtn: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx] div.main-container [data-tag-name=bbva-button-default]',
                modalHeader: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx] [data-tag-name=bbva-help-modal] #helpModalHeader header div',
                modalIcon: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx] [data-tag-name=bbva-help-modal] div [data-tag-name=bbva-clip-microillustration]',
                modalTitle: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx] [data-tag-name=bbva-help-modal] div [data-tag-name=bbva-type-text]:nth-of-type(1)',
                modalDescription: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx] [data-tag-name=bbva-help-modal] div [data-tag-name=bbva-type-text]:nth-of-type(2)',
                modalRetryBtn: '[data-tag-name=bbva-feature-pfm-dashboard-check-up-mx] [data-tag-name=bbva-help-modal] div div.content section div div.modal-main div.modal-footer slot div [data-tag-name=bbva-button-default]'
            },
            requiredElements: [
                'checkUp'
            ]
        });
        this.title = {
            'excellent': 'Excelente',
            'healthy': 'Saludable',
            'stable': 'Estable',
            'critical': 'Crítica',
            'change payroll': '¿Sabes cómo está tu salud financiera en BBVA?'
        };
    }

    async _screenValidation({item, value} = {}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'icon status':
                await this.iconStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title status':
                await (await this.titleStatus.waitForText({text: this.title[value.toLowerCase()], exactMatch: false}))
                    .waitForDisplayed({timeout: config.wait.M});
                break;
            case 'tips':
                await this.tips.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'offer':
                await this.offer.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'description':
                await this.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'change payroll button':
                await this.changePayrollBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal header':
                await this.modalHeader.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal icon status':
                await this.modalIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal title status':
                await this.modalTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal description':
                await this.modalDescription.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'modal retry button':
                await this.modalRetryBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new PfmDashboardCheckUp();
