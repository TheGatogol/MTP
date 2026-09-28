import AbstractGlomoPage from '../abstract-glomo-page';

import {ScreenValidationKeyNotFound, page} from '@csqe/radish';

@page('upgradeAccountCustomerDataPage')
class AccountUpgradeCustomerData extends AbstractGlomoPage {
    constructor() {
        const verificationStep = 'bbva-multistep-upgrade-account #step-1';
        const verificationWidget = `${verificationStep} #ui`;
        const verificationWidgetModal = 'bbva-widget-scanner-verifications-biometrics-consent-modal';

        super({
            root: '#cells-template-upgradeAccountCustomerDataPage[state="active"]',
            elements: {
                header: '[data-tag-name="bbva-header-main"][data-select=app__header]',
                verificationStepTitle: `${verificationStep} [data-tag-name="bbva-core-heading"]`,
                verificationStepIcons: `${verificationWidget} [data-tag-name="bbva-list-action"]#document #bbva-list-action-main-icon`,
                documentScan: `${verificationWidget} [data-tag-name="bbva-list-action"]#document`,
                selfieScan: `${verificationWidget} [data-tag-name="bbva-list-action"]#selfie`,
                verificationContinue: `${verificationWidget} .cta-container [data-tag-name="bbva-button-default"]`,
                linkConsentModal: `${verificationStep} [data-tag-name="bbva-link"]`,
                checkConsentModal: `${verificationWidgetModal} [data-tag-name="bbva-help-modal"] #own-account`,
                check2ConsentModal: `${verificationWidgetModal} [data-tag-name="bbva-help-modal"] #data-protection`,
                continueButtonConsentModal: `${verificationWidgetModal} [data-tag-name="bbva-help-modal"] .cta-container [data-tag-name="bbva-button-default"]`
            },
            requiredElements: [
                'header',
                'verificationStepTitle',
                'verificationStepIcons'
            ],
        });
    }

    async selectLinkConsentModal() {
        await (await (await (await this.linkConsentModal
            .waitForDisplayed({timeout: config.wait.M}))
            .waitForAnimation({timeout: config.wait.M}))
            .waitForClickable({timeout: config.wait.M}))
            .click();
    }

    async selectAcceptConsentModal() {
        await this.selectLinkConsentModal();
        await (await this.checkConsentModal
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await (await this.check2ConsentModal
            .waitForClickable({timeout: config.wait.M}))
            .click();
        await (await this.continueButtonConsentModal
            .waitForClickable({timeout: config.wait.L}))
            .click();
    }

    async _screenValidation({item, value}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'verification step title':
                await this.verificationStepTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'verification step icons':
                await this.verificationStepIcons.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'option to scan document':
                await this.documentScan.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'option to take selfie':
                await this.selfieScan.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            case 'verification step continue button':
                await this.verificationContinue.waitForEnabled({timeout: config.wait.M, reverse: value === 'disabled'});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }
}

export default new AccountUpgradeCustomerData();
