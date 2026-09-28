import AbstractGlomoPage from '../abstract-glomo-page';
import {page, ScreenValidationKeyNotFound} from '@csqe/radish';
import BbvaHelpModal from '../../components/bbva-help-modal';

@page()
class NationalId extends AbstractGlomoPage {
    constructor() {
        super({
            root: '#cells-template-nationalIdAndVideoselfie[state="active"]',
            elements: {
                genericModal: [
                    BbvaHelpModal, {
                        prefix: '[visible]',
                        modifiers: '[visible][role="dialog"]',
                    },
                ],
                onboarding: {
                    properties: { root: '[data-tag-name=national-videoselfie-full-modal]#onboardingNational[visible]' },
                    header: '[data-tag-name="bbva-help-modal"] [data-tag-name=bbva-header-main]',
                    closeBtn: '[data-tag-name=bbva-header-main] button#btn-close',
                    acceptBtn: '[data-tag-name=bbva-button-default]'
                },
                multistep: {
                    properties: { root: '[data-tag-name=national-videoselfie-multistep][visible]' },
                    header: '[data-tag-name="bbva-help-modal"][visible][role="dialog"] [data-tag-name=bbva-header-main]',
                    title: '#helpModalHeader #text',
                    closeBtn: '[data-tag-name=bbva-header-main] button#btn-close',
                    consentStep: '#consentStep',
                    expandableStepButton: '#captureContinueBtn',
                    consent: {
                        properties: { root: '[data-tag-name=bbva-expandable-step]#consentStep' },
                        privacyLink: '[data-tag-name=bbva-type-link]#privacyContinue',
                        privacyCheckbox: '[data-tag-name=bbva-form-checkbox]#consentCheckbox',
                        continueBtn: '[data-tag-name=bbva-button-default]#consentContinueBtn'
                    },
                    capture: {
                        properties: { root: '[data-tag-name=bbva-expandable-step]#captureStep[active]' },
                        header: '[data-tag-name=bbva-core-heading]',
                        description: '[data-tag-name=bbva-type-text]',
                        ineModule: 'button#documentModule',
                        ineIcon: 'button#documentModule [data-tag-name=bbva-type-icon]#documentIcon',
                        ineTitle: 'button#documentModule [data-tag-name=bbva-type-text]#documentTitle',
                        ineStatus: 'button#documentModule [data-tag-name=bbva-type-text]#documentRepeat',
                        selfieModule: 'button#selfieModule',
                        recordingVideo: '#videoModule'
                    }
                },
                modals: {
                    recommendationsIneScan: {
                        properties: { root: '[data-tag-name=national-videoselfie-half-modal]#recomendationsDocs[visible]' },
                        header: '[data-tag-name="bbva-help-modal"][visible][role="dialog"] [data-tag-name=bbva-header-main]',
                        ineScanImage: '[data-tag-name=bbva-clip-microillustration]',
                        title: '[data-tag-name=bbva-type-text]',
                        expirationRecommendation: '[data-tag-name=bbva-list-bullet][value="1"]',
                        useDarkBackgroundRecommendation: '[data-tag-name=bbva-list-bullet][value="2"]',
                        adjustCardIdRecommendation: '[data-tag-name=bbva-list-bullet][value="3"]',
                        acceptScanBtn: '[data-tag-name=bbva-button-default]',
                        closeButton: '#helpModalHeader #btn-close'
                    },
                    leaveOperative: {
                        properties: { root: '[data-tag-name=national-videoselfie-half-modal]#leaveOperative' },
                        acceptBtn: '[data-tag-name=bbva-button-default]',
                        cancelLink: '[data-tag-name=bbva-type-link]'
                    },
                    retryError: {
                        properties: { root: '[data-tag-name=national-videoselfie-half-modal]#errorRetry' },
                        acceptBtn: '[data-tag-name="bbva-button-default"]'
                    }
                },
            },
            elementsSpherica: {
                multistep: {
                    capture: {
                        header: '#heading'
                    }
                },
                modals: {
                    recommendationsIneScan: {
                        ineScanImage: '[data-tag-name=bbva-type-icon]',
                        title: '#title-text',
                    },
                    leaveOperative: {
                        cancelLink: '[data-tag-name=bbva-button-default].link'
                    },
                },
            },
            requiredElements: [
                'genericModal'
            ],
        });
    }

    async _screenValidation({item}) {
        switch (item.toLowerCase()) {
            case 'header':
                await this.centerMultistep();
                await this.multistep.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title':
                await this.multistep.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'title capture step':
                await this.multistep.capture.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'privacy link':
                await this.multistep.consent.privacyLink.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'consent check':
                await this.multistep.consent.privacyCheckbox.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'consent checked':
                await this.multistep.consent.privacyCheckbox.waitForAttribute({timeout: config.wait.M, attribute: 'checked'});
                break;
            case 'disabled button':
                await this.multistep.consent.continueBtn.waitForEnabled({timeout: config.wait.M, reverse: true});
                break;
            case 'button enabled':
                await this.multistep.consent.continueBtn.waitForEnabled({timeout: config.wait.M});
                break;
            case 'close button':
                await this.multistep.closeBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'consent accepted':
                await this.multistep.consentStep.waitForAttribute({timeout: config.wait.M, attribute: 'completed'});
                break;
            case 'scan ine':
                await this.multistep.capture.ineModule.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'video selfie':
                await this.multistep.capture.selfieModule.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recording video':
                await this.multistep.capture.recordingVideo.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expandable step button disabled':
                await this.multistep.expandableStepButton.waitForEnabled({timeout: config.wait.M, reverse: true});
                break;
            case 'description capture step':
                await this.multistep.capture.description.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'ine icon':
                await this.multistep.capture.ineIcon.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'ine title':
                await this.multistep.capture.ineTitle.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'ine status label':
                await this.multistep.capture.ineStatus.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'header recommendations':
                await this.modals.recommendationsIneScan.header.waitForAnimation({timeout: config.wait.M});
                await this.modals.recommendationsIneScan.header.scrollIntoView({block: 'nearest'});
                await this.modals.recommendationsIneScan.header.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'id scan illustration':
                await this.modals.recommendationsIneScan.ineScanImage.waitForAnimation({timeout: config.wait.M});
                await this.modals.recommendationsIneScan.ineScanImage.scrollIntoView({block: 'nearest'});
                await this.modals.recommendationsIneScan.ineScanImage.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recommendations title':
                await this.modals.recommendationsIneScan.title.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'recommendations close button':
                await this.modals.recommendationsIneScan.closeButton.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'expiration recommendation':
                await this.modals.recommendationsIneScan.expirationRecommendation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'dark background recommendation':
                await this.modals.recommendationsIneScan.useDarkBackgroundRecommendation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'adjust identification recommendation':
                await this.modals.recommendationsIneScan.adjustCardIdRecommendation.waitForDisplayed({timeout: config.wait.M});
                break;
            case 'accept recommendations':
                await this.modals.recommendationsIneScan.acceptScanBtn.waitForDisplayed({timeout: config.wait.M});
                break;
            default:
                throw new ScreenValidationKeyNotFound({key: item, args: arguments[0]});
        }
    }

    async acceptOnboading() {
        await (await this.onboarding.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
    }

    async retryOperationError() {
        await (await this.modals.retryError.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
        await (await this.modals.retryError.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
        await (await this.modals.retryError.acceptBtn.waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
    }

    async centerMultistep() {
        await this.multistep.header.waitForDisplayed({timeout: config.wait.M});
        await this.multistep.header.scrollIntoView({block: 'center'});
    }

    async acceptTheValidationConsent() {
        await this.centerMultistep();
        await (await this.multistep.consent.privacyCheckbox.waitForDisplayed({timeout: config.wait.M})).click({useActions: true});
    }

    async acceptConsentStep() {
        await this.acceptTheValidationConsent();
        await (await this.multistep.consent.continueBtn
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
    }

    async showPrivacyModal() {
        await (await this.multistep.consent.privacyLink
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
    }

    async completeModule(option) {
        switch (option.toLowerCase()) {
            case 'documents':
                await this.centerMultistep();
                await (await this.multistep.capture.ineModule.waitForDisplayed({timeout: config.wait.M}))
                    .click({useActions: true});
                break;
            case 'selfie':
                await (await this.selfieScan
                    .waitForClickable({timeout: config.wait.M}))
                    .click({useActions: true});
                break;
            default:
                throw new Error(`Error, invalid option ${option}.`);
        }
    }

    async leaveOperative(section) {
        switch (section.toLowerCase()) {
            case 'onboarding':
                await (await this.onboarding.closeBtn
                    .waitForDisplayed({timeout: config.wait.M}))
                    .click({useActions: true});
                break;
            case 'consent':
                await this.acceptConsentStep();
                await this.centerMultistep();
                await (await this.multistep.closeBtn
                    .waitForDisplayed({timeout: config.wait.M}))
                    .click({useActions: true});
                await this.centerMultistep();
                await (await this.modals.leaveOperative.acceptBtn
                    .waitForDisplayed({timeout: config.wait.M}))
                    .click({useActions: true});
                break;
            default:
                throw new Error(`Error, invalid option ${section}.`);
        }
    }

    async cancelLeaveOperative() {
        await (await this.multistep.closeBtn
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
        await (await this.modals.leaveOperative.cancelLink
            .waitForDisplayed({timeout: config.wait.M}))
            .click({useActions: true});
    }
}

export default new NationalId();
